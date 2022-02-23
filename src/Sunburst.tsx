import React, { Children, FC, useRef } from "react";
import useComponentSize from "@rehooks/component-size";
import { WidgetPluginProps, useQueryResult, DataVisualizationWidgetState, stringify, withQueryResult } from "@activeviam/activeui-sdk";
import Plot from "react-plotly.js";
import Spin from "antd/lib/spin";
import path from "path";
import { Divider } from "antd";

interface TreeNode  {
    name: string;
    value: number;
    children: Array<TreeNode>;
    parent: string,
    path: string
}

export const Sunburst = withQueryResult<DataVisualizationWidgetState>((props) => {
    const putInTree = (tree: TreeNode, path : Array<string>, value: any) => {
        const pathSplit = path[0].split("-")
        const treeName = pathSplit[pathSplit.length-1]
        if (path.length>1) {
            var foundIndex = tree.children.findIndex(child =>
                child.name == treeName
            )
            if (foundIndex == -1) {
                foundIndex = tree.children.length
                tree.children.push({
                    name: treeName,
                    value: 0,
                    children: [],
                    parent: tree.path,
                    path: tree.path+"/"+path[0]
                })
            }
            const newPath = path.slice(1)
            tree.children[foundIndex].value += value
            putInTree(tree.children[foundIndex], newPath, value)
        } else {
            tree.children.push({
                name: treeName,
                value: value,
                children: [],
                parent: tree.path,
                path: tree.path+"/"+path[0]
            })
        }
        return tree

    };
    const handleHover = (payload: Plotly.PlotMouseEvent) => {
        console.log(payload)
    }
    const addToSunburst = (tree: TreeNode,
        parents: Array<any>, 
        labels: Array<any>, 
        values: Array<any>,
        ids: Array<any>
        ) => {
        parents.push(tree.parent);
        labels.push(tree.name);
        values.push(tree.value);
        ids.push(tree.path);
        tree.children.forEach(node => addToSunburst(node, parents, labels, values, ids));
    }
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

    console.log("Sunburst",isLoading, data);
    if (data.axes.length < 2) {
        return <Spin />
    }
    const sunburstAxes = data.axes[0].positions;
    const sunburstData = data.axes[1].positions;
    const sunburstValues = data.cells;

    const title = data.axes[0].positions[0][0].namePath[0]
    const plots = []
    var percentage = 100
    if (sunburstAxes.length > 5) {
        height /= 2
        width /= 3
        percentage = 50
    }

    for (let subplotNumber = 0; subplotNumber < sunburstAxes.length; subplotNumber++) {
        const subtitle = sunburstAxes[subplotNumber][0].namePath[0]
        const ids: Array<any> = [];
        const labels: Array<any> = [];
        const parents: Array<any> = [];
        const values: Array<any> = [];

        const levels = data.axes[1].hierarchies.length

        const tree : TreeNode = {
            name: title,
            value: 0,
            children: [],
            parent: "",
            path: ""
        }
        sunburstData.map((position,rowIndex) => {
                const path : Array<string> = []
                for (let i = 0; i < levels; i++) {
                    path.push(position[i].captionPath.join('-'))
                }
                putInTree(tree, path, sunburstValues[rowIndex*sunburstAxes.length+subplotNumber].value)
        }
        )
        tree.children.forEach(node => {
            tree.value += node.value
        })
        addToSunburst(tree, parents, labels, values, ids)
        console.log(tree, parents, labels ,values, ids)
        const plot = 
        <div style={
            {
                height: {percentage}+"%",
                width: {percentage}+"%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-evenly"
            }
        }>
        <div className="subplotTitle"
            style={{
                textAlignLast: "center"
            }}>
            {subtitle}
        </div>
        <Plot
        onHover={handleHover}
        data={
            [
                {
                    
                    type: "sunburst",
                    labels : labels,
                    parents: parents,
                    values: values,
                    ids: ids,
                    marker: {
                        line: {
                            width: 2
                        }
                    },
                    branchvalues: 'total',
                }
            ]
        }
        layout={
            {   
                // clickmode: "select",
                // dragmode: "lasso",
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
        }
        >
        </Plot>
        </div>;

        plots.push(plot)
        
    }
    

    return <div 
                ref={container}
                tabIndex={0}
                style={{
                ...props.style,
                height: "100%",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-evenly"
                }}
            >   
            {plots}
                
      </div>;
})