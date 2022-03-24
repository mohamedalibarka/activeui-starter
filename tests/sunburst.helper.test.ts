import {
    continentYearCellSet,
    axisIds,
    yearContinentCellSet,
} from './testData';
import {
    ClickData,
    sunburstPointToCellSetSelection,
} from '../src/sunburst/sunburst.helper';
import { CellSetSelection } from '@activeviam/activeui-sdk';

describe('PluginSunburst Helper tests', () => {
    describe('PlotlyPayload to CellSetSelection', () => {
        test('Select by country: Europe', () => {
            const pointData: ClickData = {
                id: '->AllMember-Europe',
            };

            const expectedSelection: CellSetSelection = {
                axes: [
                    {
                        id: 1,
                        positions: [
                            [
                                {
                                    dimensionName: 'Countries',
                                    hierarchyName: 'Country',
                                    namePath: ['AllMember', 'Europe'],
                                    captionPath: ['AllMember', 'Europe'],
                                    properties: {
                                        DISPLAY_INFO: 131122,
                                    },
                                },
                            ],
                        ],
                    },
                ],
            };

            const data = sunburstPointToCellSetSelection(
                continentYearCellSet,
                pointData,
                axisIds
            );
            expect(data).toEqual(expectedSelection);
        });

        test('Select by country: Africa', () => {
            const pointData: ClickData = {
                id: '->AllMember-Africa',
            };

            const expectedSelection: CellSetSelection = {
                axes: [
                    {
                        id: 1,
                        positions: [
                            [
                                {
                                    dimensionName: 'Countries',
                                    hierarchyName: 'Country',
                                    namePath: ['AllMember', 'Africa'],
                                    captionPath: ['AllMember', 'Africa'],
                                    properties: {
                                        DISPLAY_INFO: 131130,
                                    },
                                },
                            ],
                        ],
                    },
                ],
            };

            const data = sunburstPointToCellSetSelection(
                continentYearCellSet,
                pointData,
                axisIds
            );
            expect(data).toEqual(expectedSelection);
        });

        test('Select by country: Asia and year : 2005', () => {
            const pointData: ClickData = {
                id: '->AllMember-Asia->2005',
            };

            const expectedSelection: CellSetSelection = {
                axes: [
                    {
                        id: 1,
                        positions: [
                            [
                                {
                                    dimensionName: 'Countries',
                                    hierarchyName: 'Country',
                                    namePath: ['AllMember', 'Asia'],
                                    captionPath: ['AllMember', 'Asia'],
                                    properties: {
                                        DISPLAY_INFO: 131128,
                                    },
                                },
                            ],
                            [
                                {
                                    dimensionName: 'Green-growth',
                                    hierarchyName: 'Year',
                                    namePath: ['2005'],
                                    captionPath: ['2005'],
                                    properties: {
                                        DISPLAY_INFO: 0,
                                    },
                                },
                            ],
                        ],
                    },
                ],
            };

            const data = sunburstPointToCellSetSelection(
                continentYearCellSet,
                pointData,
                axisIds
            );
            expect(data).toEqual(expectedSelection);
        });

        test('select nothing', () => {
            const pointData: ClickData = {
                id: '->',
            };

            const data = sunburstPointToCellSetSelection(
                continentYearCellSet,
                pointData,
                axisIds
            );
            expect(data).toBeUndefined();
        });
    });

    test('Select by year: 2010', () => {
        const pointData: ClickData = {
            id: '->2010',
        };

        const expectedSelection: CellSetSelection = {
            axes: [
                {
                    id: 1,
                    positions: [
                        [
                            {
                                dimensionName: 'Green-growth',
                                hierarchyName: 'Year',
                                namePath: ['2010'],
                                captionPath: ['2010'],
                                properties: {
                                    DISPLAY_INFO: 0,
                                },
                            },
                        ],
                    ],
                },
            ],
        };

        const data = sunburstPointToCellSetSelection(
            yearContinentCellSet,
            pointData,
            axisIds
        );
        expect(data).toEqual(expectedSelection);
    });

    test('Select by year: 2010 and Continent: Europe', () => {
        const pointData: ClickData = {
            id: '->2014->AllMember-Europe',
        };

        const expectedSelection: CellSetSelection = {
            axes: [
                {
                    id: 1,
                    positions: [
                        [
                            {
                                dimensionName: 'Green-growth',
                                hierarchyName: 'Year',
                                namePath: ['2014'],
                                captionPath: ['2014'],
                                properties: {
                                    DISPLAY_INFO: 0,
                                },
                            },
                        ],
                        [
                            {
                                dimensionName: 'Countries',
                                hierarchyName: 'Country',
                                namePath: ['AllMember', 'Europe'],
                                captionPath: ['AllMember', 'Europe'],
                                properties: {
                                    DISPLAY_INFO: 131122,
                                },
                            },
                        ],
                    ],
                },
            ],
        };

        const data = sunburstPointToCellSetSelection(
            yearContinentCellSet,
            pointData,
            axisIds
        );
        expect(data).toEqual(expectedSelection);
    });
});
