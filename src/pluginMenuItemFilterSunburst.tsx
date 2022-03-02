import { 
    MenuItemPlugin,
    MenuItemProps, 
    isActionInDashboard,
    isWidgetWithQueryState,
    createMdxForFilter,
    createFilter,
    getCube,
    getPage,
    useDataModel, 
    CellSetSelection
} from "@activeviam/activeui-sdk";
import React, { FC } from "react";
import Menu from "antd/lib/menu";
import { useIntl } from "react-intl";
import { MapWidgetState, CountriesSelection } from "./map.types";
import { MenuItemProps as AntMenuItemProps } from "antd/lib/menu/MenuItem";
import { produce } from "immer";
import { DataVisualizationWidgetState } from "@activeviam/activeui-sdk";

const FilterSunburstMenuItem: FC<MenuItemProps<DataVisualizationWidgetState, CellSetSelection>> = (
  props,
) => {
  const { formatMessage } = useIntl();
//   const dataModel = useDataModel(props.widgetState.serverKey)
//   const cube = getCube(dataModel, "Green-growth")
//   if (!isActionInDashboard(props) || !cube) {
//       return null
//   } 
//   const handleClicked: AntMenuItemProps["onClick"] = (param) => {
//         const { selection } = props;
//         if (selection && cube) {
//           const updatedDashboardState = produce(props.dashboardState, (draftDashboardState) => {
//                 const pageState = getPage(draftDashboardState, props.pageKey);
//                 // Iterate over all the widgets in the page.
//                 for (const leafKey in pageState?.content) {
//                         // Do not add the filter to our map widget.
//                         if (leafKey !== props.leafKey) {
//                             const widgetState = pageState?.content[leafKey];
//                            // Only add the filter if the widget has an MDX query.
//                             if (isWidgetWithQueryState(widgetState)) {
//                                     // Add the filter.
//                                     widgetState.filters = [
//                                             ...(widgetState.filters || []).filter((mdx) => {
//                                             const filter = createFilter(mdx, cube);
//                                             return filter.dimensionName !== "Countries";
//                                         }),
//                                         createMdxForFilter(
//                                             {
//                                                 type: "members",
//                                                 dimensionName: "Countries",
//                                                 hierarchyName: "Country",
//                                                 members: selection,
//                                             },
//                                             cube
//                                         ),
//                                     ];                            
//                                 }
//                         }
//             }
//         });
//           props.onDashboardChange(updatedDashboardState);
//         }
//       props.onClick?.(param);
//     };
  return <Menu.Item {...props}>
      {formatMessage({
        id: "aui.plugins.menu-item.filter-sunburst.caption",
    })}
    </Menu.Item>;
};

export const pluginMenuItemFilterSunburst: MenuItemPlugin<DataVisualizationWidgetState, CellSetSelection> = {
  key: "filter-sunburst",
  Component: FilterSunburstMenuItem,
  translations: {
      "en-US": {
          caption: "Filter dashboard",
      }
  }
};