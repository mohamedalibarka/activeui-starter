import {
    WidgetPlugin,
    MdxSelect,
    parse,
    FiltersEditor,
} from '@activeviam/activeui-sdk';
import { IconWorld } from './IconWorld';
import { Map } from './Map';
import { MapContentEditor } from './MapContentEditor';
import { MapWidgetState, CountriesSelection } from '@activeui-starter/utils';

const widgetKey = 'map';
export const pluginWidgetMap: WidgetPlugin<MapWidgetState, CountriesSelection> =
    {
        Component: Map,
        contentEditor: MapContentEditor,
        Icon: IconWorld,
        filtersEditor: FiltersEditor,
        initialState: {
            widgetKey,
            query: {
                mdx: parse<MdxSelect>(`SELECT
                    [Measures].[Real GDP per capita (USD).MEAN] ON COLUMNS,
                   [Countries].[Country].[Country_Name].Members ON ROWS
                FROM [Green-growth]`),
            },
            filters: [parse('[Green-growth].[Year].[2019]')],
            serverKey: 'my-server',
        },
        key: widgetKey,
        translations: {
            'en-US': {
                key: 'Map',
                defaultName: 'New map',
                searchMeasures: 'Search measures',
            },
        },
    };
