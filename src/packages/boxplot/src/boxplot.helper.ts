import {
    CellSet,
} from '@activeviam/activeui-sdk';
import { PlotData } from 'plotly.js';

const buildBoxplotData = (data: CellSet) => {
    //const boxplotAxes = data.axes[0].positions;
    const boxplotData = data.axes[1].positions;
    const boxplotValues = data.cells;

    let last: string =
        boxplotData[0][0].captionPath[boxplotData[0][0].captionPath.length - 1];
    const traces: Array<Partial<PlotData>> = [];
    let l: Array<any> = [];
    boxplotData.map((position, rowIndex) => {
        if (
            position[0].captionPath[position[0].captionPath.length - 1] == last
        ) {
            l.push(boxplotValues[rowIndex].value);
        } else {
            traces.push({
                y: l,
                type: 'box',
                name: last,
            });
            last = position[0].captionPath[position[0].captionPath.length - 1];
            l = [boxplotValues[rowIndex].value];
        }
    });
    traces.push({
        y: l,
        type: 'box',
        name: last,
    });
    return traces;
};

export { buildBoxplotData };
