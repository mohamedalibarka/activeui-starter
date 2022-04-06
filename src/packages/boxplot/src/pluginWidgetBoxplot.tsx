import {
    DataVisualizationContentEditor,
    DataVisualizationWidgetState,
    WidgetPlugin,
    FiltersEditor,
    parse,
    CellSetSelection,
} from '@activeviam/activeui-sdk';
import { Boxplot } from './Boxplot';
import { IconBoxplot } from './IconBoxplot';
const widgetKey = 'boxplot';
export const pluginWidgetBoxplot: WidgetPlugin<
    DataVisualizationWidgetState,
    CellSetSelection
> = {
    Component: Boxplot,
    category: 'dataVisualization',
    contentEditor: DataVisualizationContentEditor,
    filtersEditor: FiltersEditor,
    Icon: IconBoxplot,
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
            key: 'Boxplot',
            defaultName: 'New Boxplot',
        },
    },
};
