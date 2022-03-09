import {
    DataVisualizationContentEditor,
    DataVisualizationWidgetState,
    WidgetPlugin,
    FiltersEditor,
    parse,
    CellSetSelection,
} from '@activeviam/activeui-sdk';
import { Boxplot } from './Boxplot';
import { IconSunburst } from './IconSunburst';
const widgetKey = 'boxplot';
export const pluginWidgetBoxplot: WidgetPlugin<
    DataVisualizationWidgetState,
    CellSetSelection
> = {
    Component: Boxplot,
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
            maxNumberOfFields: 2,
        },
    },
    initialState: {
        widgetKey,
        query: {
            mdx: parse(`SELECT
      NON EMPTY Crossjoin(
      Hierarchize(
          Descendants(
          {
              [Countries].[Country].[AllMember]
          },
          1,
          SELF_AND_BEFORE
          )
      ),
      [Green-growth].[Year].[Year].Members
      ) ON ROWS,
      NON EMPTY {
      [Measures].[Real GDP per capita (USD).MEAN]
      } ON COLUMNS
      FROM [Green-growth]
      CELL PROPERTIES VALUE, FORMATTED_VALUE, BACK_COLOR, FORE_COLOR, FONT_FLAGS
      `),
        },
        mapping: {
            values: [
                {
                    type: 'measure',
                    measureName: 'Real GDP per capita (USD).MEAN',
                },
            ],
            rows: [
                {
                    type: 'hierarchy',
                    levelName: 'Continent_Name',
                    hierarchyName: 'Country',
                    dimensionName: 'Countries',
                },
                {
                    type: 'hierarchy',
                    levelName: 'Year',
                    hierarchyName: 'Year',
                    dimensionName: 'Green-growth',
                },
            ],
        },
    },
    key: widgetKey,
    translations: {
        'en-US': {
            key: 'Boxplot',
            defaultName: 'New Boxplot',
        },
    },
};
