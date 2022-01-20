import React, { FC, useRef } from "react";
import useComponentSize from "@rehooks/component-size";
import { WidgetPluginProps, useQueryResult, DataVisualizationWidgetState, stringify } from "@activeviam/activeui-sdk";
import Plot from "react-plotly.js";
import Spin from "antd/lib/spin";

export const Sunburst: FC<WidgetPluginProps<DataVisualizationWidgetState>> = (props) => {
    const container = useRef<HTMLDivElement>(null);
    const { height, width } = useComponentSize(container);
    const {data, error, isLoading} = useQueryResult({
            serverKey: "my-server",
            queryId: props.queryId,
            query: {
                ...props.widgetState.query,
                mdx: stringify(props.widgetState.query.mdx!)
            }
    })
    if (isLoading || !data) {
        return <Spin />
    }

    if (error) {
        return <div>{error.stackTrace}</div>
    }

    console.log("Sunburst",isLoading, data);

    const sunburstData = data?.axes[1].positions;
    const sunburstValues = data?.cells;

    const title = data?.axes[0].positions[0][0].namePath[0]
    const labels: Array<any> = [];

    const parents: Array<any> = [];
    const values: Array<any> = [];

    sunburstData?.map((position,rowIndex) => {
        parents.push(position[1].captionPath[0]) // Year
        labels.push(position[0].captionPath[1]) // Country
        values.push(sunburstValues[rowIndex].value)
        }
    )

    const fixedLength = parents.length
    for (let i = 0; i < fixedLength; i++) {
        const index = labels.lastIndexOf(parents[i])
        if (index == -1) {
            labels.push(parents[i])
            parents.push(title)
            values.push(values[i])
        } else {
            values[index] = values[index] + values[i]
        }
    }
    

    return <div 
                ref={container}
                tabIndex={0}
                style={{
                ...props.style,
                height: "100%",
                }}
            >
      <Plot
        data={
            [
                {
                    type: "sunburst",
                    labels : labels,
                    parents: parents,
                    values: values,
                    marker: {
                        line: {
                            width: 2
                        }
                    },
                    branchvalues: 'total'
                }
            ]
        }
        layout={
            {   height,
                width,
                margin: {
                    l: 0,
                    r: 0, 
                    b: 0, 
                    t: 0
                },
            }
        }
      >

      </Plot>
      </div>;
};