import {
    DataVisualizationContentEditor,
    DataVisualizationWidgetState,
    WidgetPlugin,
    FiltersEditor,
    parse,
    CellSetSelection,
} from '@activeviam/activeui-sdk';
import { Heatmap } from './Heatmap';
import { IconHeatmap } from './IconHeatmap';
const widgetKey = 'heatmap';
export const pluginWidgetHeatmap: WidgetPlugin<
    DataVisualizationWidgetState,
    CellSetSelection
> = {
    Component: Heatmap,
    category: 'dataVisualization',
    contentEditor: DataVisualizationContentEditor,
    filtersEditor: FiltersEditor,
    Icon: IconHeatmap,
    attributes: {
        values: {
            role: 'primaryNumeric',
            maxNumberOfFields: 1,
        },
        rows: {
            role: 'primaryOrdinal',
            maxNumberOfFields: 2,
        },
    },
    initialState: {
        widgetKey,
        query: {},
        mapping: {},
    },
    key: widgetKey,
    translations: {
        'en-US': {
            key: 'Heatmap',
            defaultName: 'New Heatmap',
        },
    },
};
