import React, { Children, FC, useRef } from "react";
import useComponentSize from "@rehooks/component-size";
import { WidgetPluginProps, useQueryResult, DataVisualizationWidgetState, stringify } from "@activeviam/activeui-sdk";
import Plot from "react-plotly.js";
import Spin from "antd/lib/spin";

interface TreeNode  {
    name: string;
    value: number;
    children: Array<TreeNode>;
    parent: string
}

export const Sunburst: FC<WidgetPluginProps<DataVisualizationWidgetState>> = (props) => {
    const putInTree = (tree: TreeNode, path : Array<string>, value: any) => {
        if (path.length>1) {
            var foundIndex = tree.children.findIndex(child =>
                child.name == path[0]
            )
            if (foundIndex == -1) {
                foundIndex = tree.children.length
                tree.children.push({
                    name: path[0],
                    value: 0,
                    children: [],
                    parent: tree.name
                })
            }
            const newPath = path.slice(1)
            tree.children[foundIndex].value += value
            putInTree(tree.children[foundIndex], newPath, value)
        } else {
            tree.children.push({
                name: path[0],
                value: value,
                children: [],
                parent: tree.name
            })
        }
        return tree

    };

    const addToSunburst = (tree: TreeNode, parents: Array<any>, labels: Array<any>, values: Array<any>) => {
        parents.push(tree.parent);
        labels.push(tree.name);
        values.push(tree.value);
        tree.children.forEach(node => addToSunburst(node, parents, labels, values));
    }
    
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

    const sunburstData = data.axes[1].positions;
    const sunburstValues = data.cells;

    const title = data.axes[0].positions[0][0].namePath[0]
    const labels: Array<any> = [];

    const parents: Array<any> = [];
    const values: Array<any> = [];

    const levels = data.axes[1].hierarchies.length

    const tree : TreeNode = {
        name: title,
        value: 0,
        children: [],
        parent: ""
    }

    sunburstData.map((position,rowIndex) => {
        const path : Array<string> = []
        for (let i = 0; i < levels; i++) {
            path.push(position[i].captionPath[position[i].captionPath.length-1])
        }
        putInTree(tree, path, sunburstValues[rowIndex].value)
    }
    )
    tree.children.forEach(node => {
        tree.value += node.value
    })
    addToSunburst(tree, parents, labels, values)

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