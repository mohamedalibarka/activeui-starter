import { CellSet } from '@activeviam/activeui-sdk';
import { PlotData } from 'plotly.js';

const buildBoxplotData = (data: CellSet) => {
    //const boxplotAxes = data.axes[0].positions;
    const boxplotData = data.axes[1].positions;
    const boxplotValues = data.cells;

    const element = boxplotData.find(
        (el) => el[0].captionPath.at(-1) != 'AllMember'
    );
    let last: string | undefined = '';
    if (element != undefined) {
        last = element[0].captionPath.at(-1);
    } else {
        return [];
    }
    let traces: Array<Partial<PlotData>> = [];
    let l: Array<any> = [];
    let labels: Array<any> = [];
    console.log('Boxxxx', boxplotData);
    boxplotData.map((position, rowIndex) => {
        if (position[1].captionPath.at(-1) != 'AllMember') {
            if (position[0].captionPath.at(-1) == last) {
                l.push(boxplotValues[rowIndex].value);
                labels.push(position[1].captionPath.at(-1));
            } else {
                traces.push({
                    y: l,
                    type: 'box',
                    name: last,
                    text: labels,
                    hoverinfo: 'y+text',
                });
                last = position[0].captionPath.at(-1);
                l = [boxplotValues[rowIndex].value];
                labels = [position[1].captionPath.at(-1)];
            }
        }
    });
    traces.push({
        y: l,
        type: 'box',
        name: last,
        text: labels,
        hoverinfo: 'y+text',
    });
    traces = traces.filter((trace) => trace.name != 'AllMember');
    console.log('Traces and labels : ', traces, labels);
    return traces;
};

export { buildBoxplotData };
