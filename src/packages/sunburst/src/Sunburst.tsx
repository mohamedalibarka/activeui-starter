import React, { useRef } from 'react';
import useComponentSize from '@rehooks/component-size';
import {
    DataVisualizationWidgetState,
    withQueryResult,
    CellSetSelection,
    axisIds,
} from '@activeviam/activeui-sdk';
import Plot from 'react-plotly.js';
import Spin from 'antd/lib/spin';
import {
    addToSunburst,
    ClickData,
    putInTree,
    sunburstPointToCellSetSelection,
    TreeNode,
} from './sunburst.helper';

export const Sunburst = withQueryResult<
    DataVisualizationWidgetState,
    CellSetSelection
>((props) => {
    const geoLayoutRef = useRef<Plotly.Layout['geo'] | undefined>({});
    const container = useRef<HTMLDivElement>(null);
    let { height, width } = useComponentSize(container);
    const { data, error, isLoading } = props.queryResult;
    if (isLoading) {
        return (
            <div
                ref={container}
                tabIndex={0}
                style={{
                    ...props.style,
                    height: '95%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                }}
            >
                <Spin />
            </div>
        );
    }
    console.log('parsed data', data);

    if (
        !data ||
        data.axes.length == 0 ||
        (data.axes.length < 2 && typeof data.cells[0]?.value == 'number')
    ) {
        return (
            <div
                ref={container}
                tabIndex={0}
                style={{
                    ...props.style,
                    height: '95%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-evenly',
                }}
            >
                <Plot
                    divId="my-div"
                    data={[
                        {
                            type: 'sunburst',
                            labels: [
                                'Example',
                                'Sub Example 1',
                                'Sub Example 2',
                            ],
                            parents: ['', 'Example', 'Example'],
                            values: [10, 7, 3],
                            marker: {
                                line: {
                                    width: 2,
                                },
                            },
                            branchvalues: 'total',
                        },
                    ]}
                    layout={{
                        // clickmode: "select",
                        // dragmode: "lasso",
                        geo: geoLayoutRef.current,
                        height,
                        width,
                        margin: {
                            l: 50,
                            r: 50,
                            b: 50,
                            t: 50,
                        },
                        colorway: ['#5555613d', '#74708a11'],
                    }}
                />
            </div>
        );
    }
    if (data.cells.length == 0) {
        return (
            <div
                style={{
                    display: 'flex',
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                No values
            </div>
        );
    }
    if (typeof data.cells[0].value != 'number') {
        return (
            <div
                style={{
                    display: 'flex',
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                Measure type {data.axes[0]?.positions[0][0].captionPath[0]} is
                not compatible with this chart
            </div>
        );
    }

    if (error) {
        return <div>{error.stackTrace}</div>;
    }

    console.log('parsed', data);

    console.log('Sunburst data : ', data);
    const { onSelectionChange } = props;

    const handleHover = (payload: { points: ClickData[] }) => {
        const newSelection = sunburstPointToCellSetSelection(
            data,
            payload.points[0],
            axisIds
        );
        if (newSelection && !!onSelectionChange)
            onSelectionChange(newSelection);
    };

    const sunburstAxes = data.axes[0].positions;
    const sunburstData = data.axes[1].positions;
    const sunburstValues = data.cells;

    const containsNegative = sunburstValues.find(
        (element) => element.value < 0
    );
    if (containsNegative != undefined) {
        return (
            <div
                style={{
                    display: 'flex',
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                Contains negative values, not compatible with Sunburst chart
            </div>
        );
    }
    if (
        props.widgetState.mapping.horizontalSubplots.length == 1 &&
        props.widgetState.mapping.verticalSubplots.length == 1
    ) {
        return (
            <div
                style={{
                    display: 'flex',
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                Simultaneous horizontal and vertical subplots not yet supported,
                please choose only one of them.
            </div>
        );
    }
    const plots = [];
    let numb = 1;
    if (props.widgetState.mapping.verticalSubplots.length == 1) {
        numb = height / 300;
        width = 300;
        height = height / numb;
    } else if (props.widgetState.mapping.horizontalSubplots.length == 1) {
        numb = width / 300;
        height = 300;
        width = width / numb;
    } else {
        height = 0.8 * height;
    }

    for (
        let subplotNumber = 0;
        subplotNumber < sunburstAxes.length && subplotNumber < numb;
        subplotNumber++
    ) {
        console.log(subplotNumber);
        const subtitle =
            sunburstAxes[subplotNumber][0].namePath[
                sunburstAxes[subplotNumber][0].namePath.length - 1
            ];
        if (subtitle == 'AllMember') {
            continue;
        }

        const ids: Array<any> = [];
        const labels: Array<any> = [];
        const parents: Array<any> = [];
        const values: Array<any> = [];

        const levels = data.axes[1].hierarchies.length;

        const tree: TreeNode = {
            name: subtitle,
            value: 0,
            children: [],
            parent: '',
            path: '',
        };

        sunburstData.map((position, rowIndex) => {
            let skip = false;
            for (let i = 0; i < levels; i++) {
                if (
                    position[i].captionPath.length == 1 &&
                    position[i].captionPath[0] == 'AllMember'
                ) {
                    skip = true;
                }
            }
            if (!skip) {
                const path: Array<string> = [];
                for (let i = 0; i < levels; i++) {
                    path.push(position[i].captionPath.join('-'));
                }
                const positionFound = sunburstValues.find(
                    (el) =>
                        el.ordinal ==
                        rowIndex * sunburstAxes.length + subplotNumber
                );
                let valueFound: string | number = 0;
                if (positionFound != undefined) {
                    valueFound = positionFound.value;
                }
                putInTree(tree, path, valueFound);
            }
        });

        tree.children.forEach((node) => {
            tree.value += node.value;
        });
        console.log(subplotNumber + ' advanced');

        addToSunburst(tree, parents, labels, values, ids);
        const plot = (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div
                    className="subplotTitle"
                    style={{
                        textAlignLast: 'center',
                        fontSize: '20px',
                        color: '#3232d3',
                        fontWeight: 600,
                    }}
                >
                    {subtitle}
                </div>
                <Plot
                    divId="my-div"
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    onHover={handleHover}
                    data={[
                        {
                            type: 'sunburst',
                            labels: labels,
                            parents: parents,
                            values: values,
                            ids: ids,
                            marker: {
                                line: {
                                    width: 2,
                                },
                            },
                            branchvalues: 'total',
                        },
                    ]}
                    layout={{
                        // clickmode: "select",
                        // dragmode: "lasso",
                        geo: geoLayoutRef.current,
                        height,
                        width,
                        margin: {
                            l: 50,
                            r: 50,
                            b: 50,
                            t: 50,
                        },
                    }}
                ></Plot>
            </div>
        );

        plots.push(plot);
    }

    return (
        <div
            ref={container}
            tabIndex={0}
            style={{
                ...props.style,
                height: '100%',
                display: 'flex',
                flexDirection:
                    props.widgetState.mapping.verticalSubplots.length == 1
                        ? 'column'
                        : 'row',
                justifyContent: 'space-evenly',
            }}
        >
            {plots}
        </div>
    );
});
