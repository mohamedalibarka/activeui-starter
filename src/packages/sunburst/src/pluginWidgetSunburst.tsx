import {
    DataVisualizationContentEditor,
    DataVisualizationWidgetState,
    WidgetPlugin,
    FiltersEditor,
    parse,
    CellSetSelection,
} from '@activeviam/activeui-sdk';
import { Sunburst } from './Sunburst';
import { IconSunburst } from './IconSunburst';
const widgetKey = 'sunburst';
export const pluginWidgetSunburst: WidgetPlugin<
    DataVisualizationWidgetState,
    CellSetSelection
> = {
    Component: Sunburst,
    category: 'dataVisualization',
    contentEditor: DataVisualizationContentEditor,
    filtersEditor: FiltersEditor,
    Icon: IconSunburst,
    attributes: {
        values: {
            role: 'primaryNumeric',
            maxNumberOfFields: 1,
        },
        rows: {
            role: 'primaryOrdinal',
        },
        horizontalSubplots: {
            role: 'subplot',
            maxNumberOfFields: 1,
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
            key: 'Sunburst',
            defaultName: 'New Sunburst',
        },
    },
};
