import React, { Children, FC, useRef } from "react";
import useComponentSize from "@rehooks/component-size";
import { WidgetPluginProps, useQueryResult, DataVisualizationWidgetState, stringify, withQueryResult, CellSetSelection } from "@activeviam/activeui-sdk";
import Plot from "react-plotly.js";
import Spin from "antd/lib/spin";
import path from "path";
import { Divider } from "antd";
import { PlotDatum, PlotData } from "plotly.js";

interface TreeNode  {
    name: string;
    value: number;
    children: Array<TreeNode>;
    parent: string,
    path: string
}
interface ClickData extends PlotDatum {
    id?: string
}
export const Boxplot = withQueryResult<DataVisualizationWidgetState, CellSetSelection>((props) => {
    const geoLayoutRef = useRef<Plotly.Layout["geo"] | undefined>({});
    const container = useRef<HTMLDivElement>(null);
    var { height, width } = useComponentSize(container);
    const {data, error, isLoading} =  props.queryResult
    if (isLoading || !data) {
        return <Spin />
    }

    if (error) {
        return <div>{error.stackTrace}</div>
    }
    if (data.axes.length < 2) {
        return <Spin />
    }
    const boxplotAxes = data.axes[0].positions;
    const boxplotData = data.axes[1].positions;
    const boxplotValues = data.cells;

    const title = data.axes[0].positions[0][0].namePath[0]

    console.log(boxplotAxes, boxplotData, boxplotValues)
    var last : string = boxplotData[0][0].captionPath[boxplotData[0][0].captionPath.length-1]
    var tempTrace : Partial<PlotData>
    var traces : Array<Partial<PlotData>> = []
    var l : Array<any> = []
    boxplotData.map((position,rowIndex) => {
        if (position[0].captionPath[position[0].captionPath.length-1] == last) {
            l.push(boxplotValues[rowIndex].value)
        } else {
            traces.push({
                y: l,
                type: "box",
                name: last
            })
            last = position[0].captionPath[position[0].captionPath.length-1]
            l = [boxplotValues[rowIndex].value]
        }
    })
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
                    traces
                }
                layout={
                    {   
                        geo: geoLayoutRef.current,
                        height,
                        width,
                        margin: {
                            l: 0,
                            r: 0, 
                            b: 0, 
                            t: 0
                        },
                    }
                }>

            </Plot>
                
      </div>;
})