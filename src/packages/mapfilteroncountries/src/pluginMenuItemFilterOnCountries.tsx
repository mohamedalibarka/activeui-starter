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
} from '@activeviam/activeui-sdk';
import React, { FC } from 'react';
import Menu from 'antd/lib/menu';
import { useIntl } from 'react-intl';
import { MapWidgetState, CountriesSelection } from '@activeui-starter/utils';
import { MenuItemProps as AntMenuItemProps } from 'antd/lib/menu/MenuItem';
import { produce } from 'immer';

const FilterOnCountriesMenuItem: FC<
    MenuItemProps<MapWidgetState, CountriesSelection>
> = (props) => {
    const { formatMessage } = useIntl();
    const dataModel = useDataModel(props.widgetState.serverKey);
    const cube = getCube(dataModel, 'Green-growth');
    if (!isActionInDashboard(props) || !cube) {
        return null;
    }
    const handleClicked: AntMenuItemProps['onClick'] = (param) => {
        const { selection } = props;
        if (selection && cube) {
            const updatedDashboardState = produce(
                props.dashboardState,
                (draftDashboardState) => {
                    const pageState = getPage(
                        draftDashboardState,
                        props.pageKey
                    );
                    // Iterate over all the widgets in the page.
                    for (const leafKey in pageState?.content) {
                        // Do not add the filter to our map widget.
                        if (leafKey !== props.leafKey) {
                            const widgetState = pageState?.content[leafKey];
                            // Only add the filter if the widget has an MDX query.
                            if (isWidgetWithQueryState(widgetState)) {
                                // Add the filter.
                                widgetState.filters = [
                                    ...(widgetState.filters || []).filter(
                                        (mdx) => {
                                            const filter = createFilter(
                                                mdx,
                                                cube
                                            );
                                            return (
                                                filter.dimensionName !==
                                                'Countries'
                                            );
                                        }
                                    ),
                                    createMdxForFilter(
                                        {
                                            type: 'members',
                                            dimensionName: 'Countries',
                                            hierarchyName: 'Country',
                                            members: selection,
                                        },
                                        cube
                                    ),
                                ];
                            }
                        }
                    }
                }
            );
            props.onDashboardChange(updatedDashboardState);
        }
        props.onClick?.(param);
    };
    return (
        <Menu.Item {...props} onClick={handleClicked}>
            {formatMessage({
                id: 'aui.plugins.menu-item.filter-on-countries.caption',
            })}
        </Menu.Item>
    );
};

export const pluginMenuItemFilterOnCountries: MenuItemPlugin<
    MapWidgetState,
    CountriesSelection
> = {
    key: 'filter-on-countries',
    Component: FilterOnCountriesMenuItem,
    translations: {
        'en-US': {
            caption: 'Filter dashboard on countries',
        },
    },
};
