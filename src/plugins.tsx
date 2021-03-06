import _keyBy from 'lodash/keyBy';
import { pluginWidgetMap } from './packages/map/src/pluginWidgetMap';
import { pluginWidgetSunburst } from './packages/sunburst/src/pluginWidgetSunburst';
import { pluginMenuItemFilterOnCountries } from './packages/mapfilteroncountries/src/pluginMenuItemFilterOnCountries';
import { pluginWidgetBoxplot } from './packages/boxplot/src/pluginWidgetBoxplot';
import { pluginWidgetHeatmap } from './packages/heatmap/src/pluginWidgetHeatmap';
import {
    CellPlugin,
    CellStylePlugin,
    MenuItemPlugin,
    PluginRegistry,
    TitleBarButtonPlugin,
    WidgetPlugin,
    pluginCellPivotTable,
    pluginCellStyleDrillthroughTable,
    pluginCellStylePivotTable,
    pluginCellStyleTable,
    pluginCellTable,
    pluginCellTreeTable,
    pluginMenuItemCopyQuery,
    pluginMenuItemDuplicateWidget,
    pluginMenuItemExportToCsv,
    pluginMenuItemExportDrillthroughToCsv,
    pluginMenuItemFilterOnEverythingButSelection,
    pluginMenuItemFilterOnSelection,
    pluginMenuItemFullScreen,
    pluginMenuItemShowHideTotals,
    pluginMenuItemOpenDrillthrough,
    pluginMenuItemRefreshQuery,
    pluginMenuItemRemoveSort,
    pluginMenuItemRemoveWidget,
    pluginMenuItemSortChartAscendingly,
    pluginMenuItemSortChartDescendingly,
    pluginMenuItemSortDrillthroughTableAscendingly,
    pluginMenuItemSortDrillthroughTableDescendingly,
    pluginMenuItemSortPivotTableAscendingly,
    pluginMenuItemSortPivotTableDescendingly,
    pluginMenuItemSwitchQuickFilterMode,
    pluginTitleBarButtonFullScreen,
    pluginTitleBarButtonRemoveWidget,
    pluginTitleBarButtonToggleQueryMode,
    pluginWidgetDrillthroughTable,
    pluginWidgetKpi,
    pluginWidgetPivotTable,
    pluginWidgetPlotly100StackedAreaChart,
    pluginWidgetPlotly100StackedBarChart,
    pluginWidgetPlotly100StackedColumnChart,
    pluginWidgetPlotlyAreaChart,
    pluginWidgetPlotlyBulletChart,
    pluginWidgetPlotlyClusteredBarChart,
    pluginWidgetPlotlyClusteredColumnChart,
    pluginWidgetPlotlyComboChart,
    pluginWidgetPlotlyDonutChart,
    pluginWidgetPlotlyGaugeChart,
    pluginWidgetPlotlyLineChart,
    pluginWidgetPlotlyPieChart,
    pluginWidgetPlotlyRadarChart,
    pluginWidgetPlotlyScatterPlot,
    pluginWidgetPlotlyStackedAreaChart,
    pluginWidgetPlotlyStackedBarChart,
    pluginWidgetPlotlyStackedColumnChart,
    pluginWidgetPlotlyTreeMap,
    pluginWidgetPlotlyWaterfallChart,
    pluginWidgetQuickFilter,
    pluginWidgetTable,
    pluginWidgetTreeTable,
} from '@activeviam/activeui-sdk';

const cellPlugins: Array<CellPlugin<any>> = [
    pluginCellTable,
    pluginCellPivotTable,
    pluginCellTreeTable,
];

const cellStylePlugins: Array<CellStylePlugin<any>> = [
    pluginCellStyleTable,
    pluginCellStylePivotTable,
    pluginCellStyleDrillthroughTable,
];

const menuItemPlugins: Array<MenuItemPlugin<any, any>> = [
    //pluginMenuItemFilterOnCountries,
    pluginMenuItemDuplicateWidget,
    pluginMenuItemFullScreen,
    pluginMenuItemFilterOnEverythingButSelection,
    pluginMenuItemFilterOnSelection,
    pluginMenuItemRemoveWidget,
    pluginMenuItemCopyQuery,
    pluginMenuItemRefreshQuery,
    pluginMenuItemExportToCsv,
    pluginMenuItemExportDrillthroughToCsv,
    pluginMenuItemShowHideTotals,
    pluginMenuItemOpenDrillthrough,
    pluginMenuItemRemoveSort,
    pluginMenuItemSortChartAscendingly,
    pluginMenuItemSortChartDescendingly,
    pluginMenuItemSortDrillthroughTableAscendingly,
    pluginMenuItemSortDrillthroughTableDescendingly,
    pluginMenuItemSortPivotTableAscendingly,
    pluginMenuItemSortPivotTableDescendingly,
    pluginMenuItemSwitchQuickFilterMode,
];

const titleBarButtonPlugins: Array<TitleBarButtonPlugin<any>> = [
    pluginTitleBarButtonFullScreen,
    pluginTitleBarButtonRemoveWidget,
    pluginTitleBarButtonToggleQueryMode,
];

// Order matters: it controls the order of the icons in the widget ribbons.
const widgetPlugins: Array<WidgetPlugin<any, any>> = [
    pluginWidgetPlotly100StackedAreaChart,
    pluginWidgetPlotly100StackedBarChart,
    pluginWidgetPlotly100StackedColumnChart,
    pluginWidgetPlotlyAreaChart,
    pluginWidgetPlotlyBulletChart,
    pluginWidgetPlotlyClusteredBarChart,
    pluginWidgetPlotlyClusteredColumnChart,
    pluginWidgetPlotlyComboChart,
    pluginWidgetPlotlyDonutChart,
    pluginWidgetPlotlyGaugeChart,
    pluginWidgetPlotlyLineChart,
    pluginWidgetPlotlyPieChart,
    pluginWidgetPlotlyRadarChart,
    pluginWidgetPlotlyScatterPlot,
    pluginWidgetPlotlyStackedAreaChart,
    pluginWidgetPlotlyStackedBarChart,
    pluginWidgetPlotlyStackedColumnChart,
    pluginWidgetBoxplot,
    pluginWidgetPlotlyTreeMap,
    pluginWidgetSunburst,
    pluginWidgetMap,
    pluginWidgetPivotTable,
    pluginWidgetHeatmap,
];

const plotlyWidgetPlugins = widgetPlugins.filter(({ key }) =>
    key.startsWith('plotly')
);

plotlyWidgetPlugins.forEach((widgetPlugin) => {
    widgetPlugin.menuItems = [
        pluginMenuItemRemoveWidget.key,
        pluginMenuItemDuplicateWidget.key,
        'save-as',
    ];
    widgetPlugin.titleBarButtons = [
        pluginTitleBarButtonFullScreen.key,
        pluginTitleBarButtonToggleQueryMode.key,
    ];
    widgetPlugin.contextMenuItems = [
        pluginMenuItemFilterOnEverythingButSelection.key,
        pluginMenuItemFilterOnSelection.key,
        pluginMenuItemOpenDrillthrough.key,
        pluginMenuItemSortChartAscendingly.key,
        pluginMenuItemSortChartDescendingly.key,
        pluginMenuItemRemoveSort.key,
        pluginMenuItemCopyQuery.key,
        pluginMenuItemRefreshQuery.key,
        pluginMenuItemExportToCsv.key,
    ];
});

pluginWidgetTable.cell = pluginCellTable.key;
pluginWidgetTable.cellStyle = pluginCellStyleTable.key;

pluginWidgetPivotTable.cell = pluginCellPivotTable.key;
pluginWidgetPivotTable.cellStyle = pluginCellStylePivotTable.key;

pluginWidgetTreeTable.cell = pluginCellTreeTable.key;
pluginWidgetTreeTable.cellStyle = pluginCellStylePivotTable.key;

[pluginWidgetPivotTable, pluginWidgetTreeTable, pluginWidgetTable].forEach(
    (tableWidget) => {
        tableWidget.menuItems = [
            pluginMenuItemRemoveWidget.key,
            pluginMenuItemDuplicateWidget.key,
            'save-as',
        ];
        tableWidget.titleBarButtons = [
            pluginTitleBarButtonFullScreen.key,
            pluginTitleBarButtonToggleQueryMode.key,
        ];
        tableWidget.contextMenuItems = [
            pluginMenuItemFilterOnEverythingButSelection.key,
            pluginMenuItemFilterOnSelection.key,
            pluginMenuItemOpenDrillthrough.key,
            pluginMenuItemSortPivotTableAscendingly.key,
            pluginMenuItemSortPivotTableDescendingly.key,
            pluginMenuItemRemoveSort.key,
            pluginMenuItemCopyQuery.key,
            pluginMenuItemShowHideTotals.key,
            pluginMenuItemRefreshQuery.key,
            pluginMenuItemExportToCsv.key,
        ];
    }
);
pluginWidgetMap.contextMenuItems = ['filter-on-countries'];

pluginWidgetMap.menuItems = [
    pluginMenuItemRemoveWidget.key,
    pluginMenuItemDuplicateWidget.key,
    'save-as',
];

pluginWidgetSunburst.contextMenuItems = [
    pluginMenuItemFilterOnSelection.key,
    pluginMenuItemRefreshQuery.key,
];

pluginWidgetSunburst.menuItems = [
    pluginMenuItemRemoveWidget.key,
    pluginMenuItemDuplicateWidget.key,
    'save-as',
];

pluginWidgetBoxplot.contextMenuItems = [
    pluginMenuItemFilterOnSelection.key,
    pluginMenuItemRefreshQuery.key,
];

pluginWidgetBoxplot.menuItems = [
    pluginMenuItemRemoveWidget.key,
    pluginMenuItemDuplicateWidget.key,
    'save-as',
];

pluginWidgetHeatmap.menuItems = [
    pluginMenuItemRemoveWidget.key,
    pluginMenuItemDuplicateWidget.key,
    'save-as',
];

pluginWidgetDrillthroughTable.menuItems = [
    pluginMenuItemRemoveWidget.key,
    pluginMenuItemDuplicateWidget.key,
    'save-as',
];
pluginWidgetDrillthroughTable.titleBarButtons = [
    pluginTitleBarButtonFullScreen.key,
    pluginTitleBarButtonToggleQueryMode.key,
];
pluginWidgetDrillthroughTable.contextMenuItems = [
    pluginMenuItemSortDrillthroughTableAscendingly.key,
    pluginMenuItemSortDrillthroughTableDescendingly.key,
    pluginMenuItemExportDrillthroughToCsv.key,
];
pluginWidgetDrillthroughTable.cellStyle = pluginCellStyleDrillthroughTable.key;

pluginWidgetKpi.menuItems = [
    pluginMenuItemRemoveWidget.key,
    pluginMenuItemDuplicateWidget.key,
    'save-as',
];
pluginWidgetKpi.titleBarButtons = [
    pluginTitleBarButtonFullScreen.key,
    pluginTitleBarButtonToggleQueryMode.key,
];
pluginWidgetKpi.contextMenuItems = [
    pluginMenuItemCopyQuery.key,
    pluginMenuItemRefreshQuery.key,
    pluginMenuItemExportToCsv.key,
];

pluginWidgetQuickFilter.menuItems = [
    pluginMenuItemRemoveWidget.key,
    pluginMenuItemSwitchQuickFilterMode.key,
];
pluginWidgetQuickFilter.titleBarButtons = [pluginTitleBarButtonFullScreen.key];
pluginWidgetQuickFilter.contextMenuItems = [];

export const plugins: PluginRegistry = {
    cell: _keyBy(cellPlugins, 'key'),
    'cell-style': _keyBy(cellStylePlugins, 'key'),
    'selection-listener': _keyBy([], 'key'),
    'menu-item': _keyBy(menuItemPlugins, 'key'),
    'titlebar-button': _keyBy(titleBarButtonPlugins, 'key'),
    widget: _keyBy(widgetPlugins, 'key'),
};
