import React, { useRef } from 'react';
import useComponentSize from '@rehooks/component-size';
import {
    DataVisualizationWidgetState,
    withQueryResult,
    CellSetSelection,
} from '@activeviam/activeui-sdk';
import Plot from 'react-plotly.js';
import Spin from 'antd/lib/spin';
import { buildBoxplotData } from './boxplot.helper';
export const Boxplot = withQueryResult<
    DataVisualizationWidgetState,
    CellSetSelection
>((props) => {
    const geoLayoutRef = useRef<Plotly.Layout['geo'] | undefined>({});
    const container = useRef<HTMLDivElement>(null);
    const { height, width } = useComponentSize(container);
    const { data, error, isLoading } = props.queryResult;
    if (isLoading || !data) {
        return <Spin />;
    }

    if (error) {
        return <div>{error.stackTrace}</div>;
    }
    if (data.axes.length < 2) {
        return <Spin />;
    }
    console.log(data);
    const traces = buildBoxplotData(data);
    console.log(traces);
    return (
        <div
            ref={container}
            tabIndex={0}
            style={{
                ...props.style,
                height: '95%',
            }}
        >
            <Plot
                data={traces}
                layout={{
                    geo: geoLayoutRef.current,
                    height,
                    width,
                    margin: {
                        l: 0,
                        r: 0,
                        b: 0,
                        t: 0,
                    },
                }}
            ></Plot>
        </div>
    );
});
