import { CellSet } from '@activeviam/activeui-sdk';
import { PlotData } from 'plotly.js';
import { buildBoxplotData } from '../boxplot/boxplot.helper';

const testData: CellSet = {
    epoch: 4,
    cube: 'Green-growth',
    axes: [
        {
            id: 0,
            hierarchies: [
                {
                    dimension: 'Measures',
                    hierarchy: 'Measures',
                },
            ],
            positions: [
                [
                    {
                        namePath: ['Real GDP per capita (USD).MEAN'],
                        captionPath: ['Real GDP per capita (USD).MEAN'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
            ],
            maxLevelPerHierarchy: [1],
        },
        {
            id: 1,
            hierarchies: [
                {
                    dimension: 'Countries',
                    hierarchy: 'Country',
                },
                {
                    dimension: 'Green-growth',
                    hierarchy: 'Year',
                },
            ],
            positions: [
                [
                    {
                        namePath: ['AllMember', 'Africa'],
                        captionPath: ['AllMember', 'Africa'],
                        properties: {
                            DISPLAY_INFO: 58,
                        },
                    },
                    {
                        namePath: ['1990'],
                        captionPath: ['1990'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Africa'],
                        captionPath: ['AllMember', 'Africa'],
                        properties: {
                            DISPLAY_INFO: 131130,
                        },
                    },
                    {
                        namePath: ['1995'],
                        captionPath: ['1995'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Africa'],
                        captionPath: ['AllMember', 'Africa'],
                        properties: {
                            DISPLAY_INFO: 131130,
                        },
                    },
                    {
                        namePath: ['2000'],
                        captionPath: ['2000'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Africa'],
                        captionPath: ['AllMember', 'Africa'],
                        properties: {
                            DISPLAY_INFO: 131130,
                        },
                    },
                    {
                        namePath: ['2005'],
                        captionPath: ['2005'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Africa'],
                        captionPath: ['AllMember', 'Africa'],
                        properties: {
                            DISPLAY_INFO: 131130,
                        },
                    },
                    {
                        namePath: ['2010'],
                        captionPath: ['2010'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Africa'],
                        captionPath: ['AllMember', 'Africa'],
                        properties: {
                            DISPLAY_INFO: 131130,
                        },
                    },
                    {
                        namePath: ['2011'],
                        captionPath: ['2011'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Africa'],
                        captionPath: ['AllMember', 'Africa'],
                        properties: {
                            DISPLAY_INFO: 131130,
                        },
                    },
                    {
                        namePath: ['2012'],
                        captionPath: ['2012'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Africa'],
                        captionPath: ['AllMember', 'Africa'],
                        properties: {
                            DISPLAY_INFO: 131130,
                        },
                    },
                    {
                        namePath: ['2013'],
                        captionPath: ['2013'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Africa'],
                        captionPath: ['AllMember', 'Africa'],
                        properties: {
                            DISPLAY_INFO: 131130,
                        },
                    },
                    {
                        namePath: ['2014'],
                        captionPath: ['2014'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Africa'],
                        captionPath: ['AllMember', 'Africa'],
                        properties: {
                            DISPLAY_INFO: 131130,
                        },
                    },
                    {
                        namePath: ['2015'],
                        captionPath: ['2015'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Africa'],
                        captionPath: ['AllMember', 'Africa'],
                        properties: {
                            DISPLAY_INFO: 131130,
                        },
                    },
                    {
                        namePath: ['2016'],
                        captionPath: ['2016'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Africa'],
                        captionPath: ['AllMember', 'Africa'],
                        properties: {
                            DISPLAY_INFO: 131130,
                        },
                    },
                    {
                        namePath: ['2017'],
                        captionPath: ['2017'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Africa'],
                        captionPath: ['AllMember', 'Africa'],
                        properties: {
                            DISPLAY_INFO: 131130,
                        },
                    },
                    {
                        namePath: ['2018'],
                        captionPath: ['2018'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Africa'],
                        captionPath: ['AllMember', 'Africa'],
                        properties: {
                            DISPLAY_INFO: 131130,
                        },
                    },
                    {
                        namePath: ['2019'],
                        captionPath: ['2019'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Asia'],
                        captionPath: ['AllMember', 'Asia'],
                        properties: {
                            DISPLAY_INFO: 131128,
                        },
                    },
                    {
                        namePath: ['1990'],
                        captionPath: ['1990'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Asia'],
                        captionPath: ['AllMember', 'Asia'],
                        properties: {
                            DISPLAY_INFO: 131128,
                        },
                    },
                    {
                        namePath: ['1995'],
                        captionPath: ['1995'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Asia'],
                        captionPath: ['AllMember', 'Asia'],
                        properties: {
                            DISPLAY_INFO: 131128,
                        },
                    },
                    {
                        namePath: ['2000'],
                        captionPath: ['2000'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Asia'],
                        captionPath: ['AllMember', 'Asia'],
                        properties: {
                            DISPLAY_INFO: 131128,
                        },
                    },
                    {
                        namePath: ['2005'],
                        captionPath: ['2005'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Asia'],
                        captionPath: ['AllMember', 'Asia'],
                        properties: {
                            DISPLAY_INFO: 131128,
                        },
                    },
                    {
                        namePath: ['2010'],
                        captionPath: ['2010'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Asia'],
                        captionPath: ['AllMember', 'Asia'],
                        properties: {
                            DISPLAY_INFO: 131128,
                        },
                    },
                    {
                        namePath: ['2011'],
                        captionPath: ['2011'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Asia'],
                        captionPath: ['AllMember', 'Asia'],
                        properties: {
                            DISPLAY_INFO: 131128,
                        },
                    },
                    {
                        namePath: ['2012'],
                        captionPath: ['2012'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Asia'],
                        captionPath: ['AllMember', 'Asia'],
                        properties: {
                            DISPLAY_INFO: 131128,
                        },
                    },
                    {
                        namePath: ['2013'],
                        captionPath: ['2013'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Asia'],
                        captionPath: ['AllMember', 'Asia'],
                        properties: {
                            DISPLAY_INFO: 131128,
                        },
                    },
                    {
                        namePath: ['2014'],
                        captionPath: ['2014'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Asia'],
                        captionPath: ['AllMember', 'Asia'],
                        properties: {
                            DISPLAY_INFO: 131128,
                        },
                    },
                    {
                        namePath: ['2015'],
                        captionPath: ['2015'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Asia'],
                        captionPath: ['AllMember', 'Asia'],
                        properties: {
                            DISPLAY_INFO: 131128,
                        },
                    },
                    {
                        namePath: ['2016'],
                        captionPath: ['2016'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Asia'],
                        captionPath: ['AllMember', 'Asia'],
                        properties: {
                            DISPLAY_INFO: 131128,
                        },
                    },
                    {
                        namePath: ['2017'],
                        captionPath: ['2017'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Asia'],
                        captionPath: ['AllMember', 'Asia'],
                        properties: {
                            DISPLAY_INFO: 131128,
                        },
                    },
                    {
                        namePath: ['2018'],
                        captionPath: ['2018'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Asia'],
                        captionPath: ['AllMember', 'Asia'],
                        properties: {
                            DISPLAY_INFO: 131128,
                        },
                    },
                    {
                        namePath: ['2019'],
                        captionPath: ['2019'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Europe'],
                        captionPath: ['AllMember', 'Europe'],
                        properties: {
                            DISPLAY_INFO: 131122,
                        },
                    },
                    {
                        namePath: ['1990'],
                        captionPath: ['1990'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Europe'],
                        captionPath: ['AllMember', 'Europe'],
                        properties: {
                            DISPLAY_INFO: 131122,
                        },
                    },
                    {
                        namePath: ['1995'],
                        captionPath: ['1995'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Europe'],
                        captionPath: ['AllMember', 'Europe'],
                        properties: {
                            DISPLAY_INFO: 131122,
                        },
                    },
                    {
                        namePath: ['2000'],
                        captionPath: ['2000'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Europe'],
                        captionPath: ['AllMember', 'Europe'],
                        properties: {
                            DISPLAY_INFO: 131122,
                        },
                    },
                    {
                        namePath: ['2005'],
                        captionPath: ['2005'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Europe'],
                        captionPath: ['AllMember', 'Europe'],
                        properties: {
                            DISPLAY_INFO: 131122,
                        },
                    },
                    {
                        namePath: ['2010'],
                        captionPath: ['2010'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Europe'],
                        captionPath: ['AllMember', 'Europe'],
                        properties: {
                            DISPLAY_INFO: 131122,
                        },
                    },
                    {
                        namePath: ['2011'],
                        captionPath: ['2011'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Europe'],
                        captionPath: ['AllMember', 'Europe'],
                        properties: {
                            DISPLAY_INFO: 131122,
                        },
                    },
                    {
                        namePath: ['2012'],
                        captionPath: ['2012'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Europe'],
                        captionPath: ['AllMember', 'Europe'],
                        properties: {
                            DISPLAY_INFO: 131122,
                        },
                    },
                    {
                        namePath: ['2013'],
                        captionPath: ['2013'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Europe'],
                        captionPath: ['AllMember', 'Europe'],
                        properties: {
                            DISPLAY_INFO: 131122,
                        },
                    },
                    {
                        namePath: ['2014'],
                        captionPath: ['2014'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Europe'],
                        captionPath: ['AllMember', 'Europe'],
                        properties: {
                            DISPLAY_INFO: 131122,
                        },
                    },
                    {
                        namePath: ['2015'],
                        captionPath: ['2015'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Europe'],
                        captionPath: ['AllMember', 'Europe'],
                        properties: {
                            DISPLAY_INFO: 131122,
                        },
                    },
                    {
                        namePath: ['2016'],
                        captionPath: ['2016'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Europe'],
                        captionPath: ['AllMember', 'Europe'],
                        properties: {
                            DISPLAY_INFO: 131122,
                        },
                    },
                    {
                        namePath: ['2017'],
                        captionPath: ['2017'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Europe'],
                        captionPath: ['AllMember', 'Europe'],
                        properties: {
                            DISPLAY_INFO: 131122,
                        },
                    },
                    {
                        namePath: ['2018'],
                        captionPath: ['2018'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Europe'],
                        captionPath: ['AllMember', 'Europe'],
                        properties: {
                            DISPLAY_INFO: 131122,
                        },
                    },
                    {
                        namePath: ['2019'],
                        captionPath: ['2019'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'N/A'],
                        captionPath: ['AllMember', 'N/A'],
                        properties: {
                            DISPLAY_INFO: 131073,
                        },
                    },
                    {
                        namePath: ['1990'],
                        captionPath: ['1990'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'N/A'],
                        captionPath: ['AllMember', 'N/A'],
                        properties: {
                            DISPLAY_INFO: 131073,
                        },
                    },
                    {
                        namePath: ['1995'],
                        captionPath: ['1995'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'N/A'],
                        captionPath: ['AllMember', 'N/A'],
                        properties: {
                            DISPLAY_INFO: 131073,
                        },
                    },
                    {
                        namePath: ['2000'],
                        captionPath: ['2000'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'N/A'],
                        captionPath: ['AllMember', 'N/A'],
                        properties: {
                            DISPLAY_INFO: 131073,
                        },
                    },
                    {
                        namePath: ['2005'],
                        captionPath: ['2005'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'N/A'],
                        captionPath: ['AllMember', 'N/A'],
                        properties: {
                            DISPLAY_INFO: 131073,
                        },
                    },
                    {
                        namePath: ['2010'],
                        captionPath: ['2010'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'N/A'],
                        captionPath: ['AllMember', 'N/A'],
                        properties: {
                            DISPLAY_INFO: 131073,
                        },
                    },
                    {
                        namePath: ['2011'],
                        captionPath: ['2011'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'N/A'],
                        captionPath: ['AllMember', 'N/A'],
                        properties: {
                            DISPLAY_INFO: 131073,
                        },
                    },
                    {
                        namePath: ['2012'],
                        captionPath: ['2012'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'N/A'],
                        captionPath: ['AllMember', 'N/A'],
                        properties: {
                            DISPLAY_INFO: 131073,
                        },
                    },
                    {
                        namePath: ['2013'],
                        captionPath: ['2013'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'N/A'],
                        captionPath: ['AllMember', 'N/A'],
                        properties: {
                            DISPLAY_INFO: 131073,
                        },
                    },
                    {
                        namePath: ['2014'],
                        captionPath: ['2014'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'N/A'],
                        captionPath: ['AllMember', 'N/A'],
                        properties: {
                            DISPLAY_INFO: 131073,
                        },
                    },
                    {
                        namePath: ['2015'],
                        captionPath: ['2015'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'N/A'],
                        captionPath: ['AllMember', 'N/A'],
                        properties: {
                            DISPLAY_INFO: 131073,
                        },
                    },
                    {
                        namePath: ['2016'],
                        captionPath: ['2016'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'N/A'],
                        captionPath: ['AllMember', 'N/A'],
                        properties: {
                            DISPLAY_INFO: 131073,
                        },
                    },
                    {
                        namePath: ['2017'],
                        captionPath: ['2017'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'N/A'],
                        captionPath: ['AllMember', 'N/A'],
                        properties: {
                            DISPLAY_INFO: 131073,
                        },
                    },
                    {
                        namePath: ['2018'],
                        captionPath: ['2018'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'N/A'],
                        captionPath: ['AllMember', 'N/A'],
                        properties: {
                            DISPLAY_INFO: 131073,
                        },
                    },
                    {
                        namePath: ['2019'],
                        captionPath: ['2019'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'North America'],
                        captionPath: ['AllMember', 'North America'],
                        properties: {
                            DISPLAY_INFO: 131115,
                        },
                    },
                    {
                        namePath: ['1990'],
                        captionPath: ['1990'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'North America'],
                        captionPath: ['AllMember', 'North America'],
                        properties: {
                            DISPLAY_INFO: 131115,
                        },
                    },
                    {
                        namePath: ['1995'],
                        captionPath: ['1995'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'North America'],
                        captionPath: ['AllMember', 'North America'],
                        properties: {
                            DISPLAY_INFO: 131115,
                        },
                    },
                    {
                        namePath: ['2000'],
                        captionPath: ['2000'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'North America'],
                        captionPath: ['AllMember', 'North America'],
                        properties: {
                            DISPLAY_INFO: 131115,
                        },
                    },
                    {
                        namePath: ['2005'],
                        captionPath: ['2005'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'North America'],
                        captionPath: ['AllMember', 'North America'],
                        properties: {
                            DISPLAY_INFO: 131115,
                        },
                    },
                    {
                        namePath: ['2010'],
                        captionPath: ['2010'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'North America'],
                        captionPath: ['AllMember', 'North America'],
                        properties: {
                            DISPLAY_INFO: 131115,
                        },
                    },
                    {
                        namePath: ['2011'],
                        captionPath: ['2011'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'North America'],
                        captionPath: ['AllMember', 'North America'],
                        properties: {
                            DISPLAY_INFO: 131115,
                        },
                    },
                    {
                        namePath: ['2012'],
                        captionPath: ['2012'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'North America'],
                        captionPath: ['AllMember', 'North America'],
                        properties: {
                            DISPLAY_INFO: 131115,
                        },
                    },
                    {
                        namePath: ['2013'],
                        captionPath: ['2013'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'North America'],
                        captionPath: ['AllMember', 'North America'],
                        properties: {
                            DISPLAY_INFO: 131115,
                        },
                    },
                    {
                        namePath: ['2014'],
                        captionPath: ['2014'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'North America'],
                        captionPath: ['AllMember', 'North America'],
                        properties: {
                            DISPLAY_INFO: 131115,
                        },
                    },
                    {
                        namePath: ['2015'],
                        captionPath: ['2015'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'North America'],
                        captionPath: ['AllMember', 'North America'],
                        properties: {
                            DISPLAY_INFO: 131115,
                        },
                    },
                    {
                        namePath: ['2016'],
                        captionPath: ['2016'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'North America'],
                        captionPath: ['AllMember', 'North America'],
                        properties: {
                            DISPLAY_INFO: 131115,
                        },
                    },
                    {
                        namePath: ['2017'],
                        captionPath: ['2017'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'North America'],
                        captionPath: ['AllMember', 'North America'],
                        properties: {
                            DISPLAY_INFO: 131115,
                        },
                    },
                    {
                        namePath: ['2018'],
                        captionPath: ['2018'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'North America'],
                        captionPath: ['AllMember', 'North America'],
                        properties: {
                            DISPLAY_INFO: 131115,
                        },
                    },
                    {
                        namePath: ['2019'],
                        captionPath: ['2019'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Oceania'],
                        captionPath: ['AllMember', 'Oceania'],
                        properties: {
                            DISPLAY_INFO: 131097,
                        },
                    },
                    {
                        namePath: ['1990'],
                        captionPath: ['1990'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Oceania'],
                        captionPath: ['AllMember', 'Oceania'],
                        properties: {
                            DISPLAY_INFO: 131097,
                        },
                    },
                    {
                        namePath: ['1995'],
                        captionPath: ['1995'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Oceania'],
                        captionPath: ['AllMember', 'Oceania'],
                        properties: {
                            DISPLAY_INFO: 131097,
                        },
                    },
                    {
                        namePath: ['2000'],
                        captionPath: ['2000'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Oceania'],
                        captionPath: ['AllMember', 'Oceania'],
                        properties: {
                            DISPLAY_INFO: 131097,
                        },
                    },
                    {
                        namePath: ['2005'],
                        captionPath: ['2005'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Oceania'],
                        captionPath: ['AllMember', 'Oceania'],
                        properties: {
                            DISPLAY_INFO: 131097,
                        },
                    },
                    {
                        namePath: ['2010'],
                        captionPath: ['2010'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Oceania'],
                        captionPath: ['AllMember', 'Oceania'],
                        properties: {
                            DISPLAY_INFO: 131097,
                        },
                    },
                    {
                        namePath: ['2011'],
                        captionPath: ['2011'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Oceania'],
                        captionPath: ['AllMember', 'Oceania'],
                        properties: {
                            DISPLAY_INFO: 131097,
                        },
                    },
                    {
                        namePath: ['2012'],
                        captionPath: ['2012'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Oceania'],
                        captionPath: ['AllMember', 'Oceania'],
                        properties: {
                            DISPLAY_INFO: 131097,
                        },
                    },
                    {
                        namePath: ['2013'],
                        captionPath: ['2013'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Oceania'],
                        captionPath: ['AllMember', 'Oceania'],
                        properties: {
                            DISPLAY_INFO: 131097,
                        },
                    },
                    {
                        namePath: ['2014'],
                        captionPath: ['2014'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Oceania'],
                        captionPath: ['AllMember', 'Oceania'],
                        properties: {
                            DISPLAY_INFO: 131097,
                        },
                    },
                    {
                        namePath: ['2015'],
                        captionPath: ['2015'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Oceania'],
                        captionPath: ['AllMember', 'Oceania'],
                        properties: {
                            DISPLAY_INFO: 131097,
                        },
                    },
                    {
                        namePath: ['2016'],
                        captionPath: ['2016'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Oceania'],
                        captionPath: ['AllMember', 'Oceania'],
                        properties: {
                            DISPLAY_INFO: 131097,
                        },
                    },
                    {
                        namePath: ['2017'],
                        captionPath: ['2017'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Oceania'],
                        captionPath: ['AllMember', 'Oceania'],
                        properties: {
                            DISPLAY_INFO: 131097,
                        },
                    },
                    {
                        namePath: ['2018'],
                        captionPath: ['2018'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'Oceania'],
                        captionPath: ['AllMember', 'Oceania'],
                        properties: {
                            DISPLAY_INFO: 131097,
                        },
                    },
                    {
                        namePath: ['2019'],
                        captionPath: ['2019'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'South America'],
                        captionPath: ['AllMember', 'South America'],
                        properties: {
                            DISPLAY_INFO: 131086,
                        },
                    },
                    {
                        namePath: ['1990'],
                        captionPath: ['1990'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'South America'],
                        captionPath: ['AllMember', 'South America'],
                        properties: {
                            DISPLAY_INFO: 131086,
                        },
                    },
                    {
                        namePath: ['1995'],
                        captionPath: ['1995'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'South America'],
                        captionPath: ['AllMember', 'South America'],
                        properties: {
                            DISPLAY_INFO: 131086,
                        },
                    },
                    {
                        namePath: ['2000'],
                        captionPath: ['2000'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'South America'],
                        captionPath: ['AllMember', 'South America'],
                        properties: {
                            DISPLAY_INFO: 131086,
                        },
                    },
                    {
                        namePath: ['2005'],
                        captionPath: ['2005'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'South America'],
                        captionPath: ['AllMember', 'South America'],
                        properties: {
                            DISPLAY_INFO: 131086,
                        },
                    },
                    {
                        namePath: ['2010'],
                        captionPath: ['2010'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'South America'],
                        captionPath: ['AllMember', 'South America'],
                        properties: {
                            DISPLAY_INFO: 131086,
                        },
                    },
                    {
                        namePath: ['2011'],
                        captionPath: ['2011'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'South America'],
                        captionPath: ['AllMember', 'South America'],
                        properties: {
                            DISPLAY_INFO: 131086,
                        },
                    },
                    {
                        namePath: ['2012'],
                        captionPath: ['2012'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'South America'],
                        captionPath: ['AllMember', 'South America'],
                        properties: {
                            DISPLAY_INFO: 131086,
                        },
                    },
                    {
                        namePath: ['2013'],
                        captionPath: ['2013'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'South America'],
                        captionPath: ['AllMember', 'South America'],
                        properties: {
                            DISPLAY_INFO: 131086,
                        },
                    },
                    {
                        namePath: ['2014'],
                        captionPath: ['2014'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'South America'],
                        captionPath: ['AllMember', 'South America'],
                        properties: {
                            DISPLAY_INFO: 131086,
                        },
                    },
                    {
                        namePath: ['2015'],
                        captionPath: ['2015'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'South America'],
                        captionPath: ['AllMember', 'South America'],
                        properties: {
                            DISPLAY_INFO: 131086,
                        },
                    },
                    {
                        namePath: ['2016'],
                        captionPath: ['2016'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'South America'],
                        captionPath: ['AllMember', 'South America'],
                        properties: {
                            DISPLAY_INFO: 131086,
                        },
                    },
                    {
                        namePath: ['2017'],
                        captionPath: ['2017'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'South America'],
                        captionPath: ['AllMember', 'South America'],
                        properties: {
                            DISPLAY_INFO: 131086,
                        },
                    },
                    {
                        namePath: ['2018'],
                        captionPath: ['2018'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
                [
                    {
                        namePath: ['AllMember', 'South America'],
                        captionPath: ['AllMember', 'South America'],
                        properties: {
                            DISPLAY_INFO: 131086,
                        },
                    },
                    {
                        namePath: ['2019'],
                        captionPath: ['2019'],
                        properties: {
                            DISPLAY_INFO: 0,
                        },
                    },
                ],
            ],
            maxLevelPerHierarchy: [2, 1],
        },
    ],
    cells: [
        {
            ordinal: 0,
            value: 3821.133471999999,
            formattedValue: '3,821.13',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 1,
            value: 3707.33761372549,
            formattedValue: '3,707.34',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 2,
            value: 4102.353973076924,
            formattedValue: '4,102.35',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 3,
            value: 4805.072134615386,
            formattedValue: '4,805.07',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 4,
            value: 5328.059081132075,
            formattedValue: '5,328.06',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 5,
            value: 5056.630850695925,
            formattedValue: '5,056.63',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 6,
            value: 5367.3834624412975,
            formattedValue: '5,367.38',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 7,
            value: 5412.372088031296,
            formattedValue: '5,412.37',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 8,
            value: 5407.225339070555,
            formattedValue: '5,407.23',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 9,
            value: 5373.238286138519,
            formattedValue: '5,373.24',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 10,
            value: 5356.83820333,
            formattedValue: '5,356.84',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 11,
            value: 5435.639560280556,
            formattedValue: '5,435.64',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 12,
            value: 5505.975615356483,
            formattedValue: '5,505.98',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 13,
            value: 5545.681446862407,
            formattedValue: '5,545.68',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 14,
            value: 15505.056199999997,
            formattedValue: '15,505.06',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 15,
            value: 16412.87279772728,
            formattedValue: '16,412.87',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 16,
            value: 17314.09882222222,
            formattedValue: '17,314.10',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 17,
            value: 18482.610326086957,
            formattedValue: '18,482.61',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 18,
            value: 19526.520630434785,
            formattedValue: '19,526.52',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 19,
            value: 20036.850434782613,
            formattedValue: '20,036.85',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 20,
            value: 20326.417413043477,
            formattedValue: '20,326.42',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 21,
            value: 20577.05889130435,
            formattedValue: '20,577.06',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 22,
            value: 20796.55817391305,
            formattedValue: '20,796.56',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 23,
            value: 20982.310869565223,
            formattedValue: '20,982.31',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 24,
            value: 21233.470108695652,
            formattedValue: '21,233.47',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 25,
            value: 21472.4267173913,
            formattedValue: '21,472.43',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 26,
            value: 21715.776086956525,
            formattedValue: '21,715.78',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 27,
            value: 22312.254399999994,
            formattedValue: '22,312.25',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 28,
            value: 26836.17424137932,
            formattedValue: '26,836.17',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 29,
            value: 23472.240135135136,
            formattedValue: '23,472.24',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 30,
            value: 28561.244461538467,
            formattedValue: '28,561.24',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 31,
            value: 32387.183384615386,
            formattedValue: '32,387.18',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 32,
            value: 33579.12838461539,
            formattedValue: '33,579.13',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 33,
            value: 33839.13125641025,
            formattedValue: '33,839.13',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 34,
            value: 33567.20758974361,
            formattedValue: '33,567.21',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 35,
            value: 33774.53223076923,
            formattedValue: '33,774.53',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 36,
            value: 34392.92656410256,
            formattedValue: '34,392.93',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 37,
            value: 35470.8924102564,
            formattedValue: '35,470.89',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 38,
            value: 36253.60823076923,
            formattedValue: '36,253.61',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 39,
            value: 37288.98046153846,
            formattedValue: '37,288.98',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 40,
            value: 38330.12838461538,
            formattedValue: '38,330.13',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 41,
            value: 39122.71476923077,
            formattedValue: '39,122.71',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 42,
            value: 21756.515555555554,
            formattedValue: '21,756.52',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 43,
            value: 20800.657769230773,
            formattedValue: '20,800.66',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 44,
            value: 23533.373000000003,
            formattedValue: '23,533.37',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 45,
            value: 25824.94907692308,
            formattedValue: '25,824.95',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 46,
            value: 27218.929384615385,
            formattedValue: '27,218.93',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 47,
            value: 27692.739846153847,
            formattedValue: '27,692.74',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 48,
            value: 27940.46515384615,
            formattedValue: '27,940.47',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 49,
            value: 28246.597615384613,
            formattedValue: '28,246.60',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 50,
            value: 28700.493153846157,
            formattedValue: '28,700.49',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 51,
            value: 29219.843846153843,
            formattedValue: '29,219.84',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 52,
            value: 29681.473846153844,
            formattedValue: '29,681.47',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 53,
            value: 30352.437692307692,
            formattedValue: '30,352.44',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 54,
            value: 30929.664615384616,
            formattedValue: '30,929.66',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 55,
            value: 33991.91909090909,
            formattedValue: '33,991.92',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 56,
            value: 13757.767875,
            formattedValue: '13,757.77',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 57,
            value: 14360.000916666666,
            formattedValue: '14,360.00',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 58,
            value: 17032.30936,
            formattedValue: '17,032.31',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 59,
            value: 18411.816639999997,
            formattedValue: '18,411.82',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 60,
            value: 20935.792111111114,
            formattedValue: '20,935.79',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 61,
            value: 21179.015071428574,
            formattedValue: '21,179.02',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 62,
            value: 21259.763857142858,
            formattedValue: '21,259.76',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 63,
            value: 21354.415321428572,
            formattedValue: '21,354.42',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 64,
            value: 21612.179178571427,
            formattedValue: '21,612.18',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 65,
            value: 21934.939249999996,
            formattedValue: '21,934.94',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 66,
            value: 22150.310464285718,
            formattedValue: '22,150.31',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 67,
            value: 22243.163107142864,
            formattedValue: '22,243.16',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 68,
            value: 22354.46737037037,
            formattedValue: '22,354.47',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 69,
            value: 20382.207391304346,
            formattedValue: '20,382.21',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 70,
            value: 7395.800916666666,
            formattedValue: '7,395.80',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 71,
            value: 8167.5064999999995,
            formattedValue: '8,167.51',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 72,
            value: 9196.12469230769,
            formattedValue: '9,196.12',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 73,
            value: 9799.906285714284,
            formattedValue: '9,799.91',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 74,
            value: 10118.784214285713,
            formattedValue: '10,118.78',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 75,
            value: 10402.778857142857,
            formattedValue: '10,402.78',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 76,
            value: 10527.135857142857,
            formattedValue: '10,527.14',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 77,
            value: 10767.21207142857,
            formattedValue: '10,767.21',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 78,
            value: 11148.777285714286,
            formattedValue: '11,148.78',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 79,
            value: 11541.474142857143,
            formattedValue: '11,541.47',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 80,
            value: 11758.616428571428,
            formattedValue: '11,758.62',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 81,
            value: 11864.034714285712,
            formattedValue: '11,864.03',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 82,
            value: 12025.105857142858,
            formattedValue: '12,025.11',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 83,
            value: 11998.256071428574,
            formattedValue: '11,998.26',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 84,
            value: 8971.712083333334,
            formattedValue: '8,971.71',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 85,
            value: 9977.087749999999,
            formattedValue: '9,977.09',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 86,
            value: 10326.706833333332,
            formattedValue: '10,326.71',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 87,
            value: 11094.377583333333,
            formattedValue: '11,094.38',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 88,
            value: 13186.63925,
            formattedValue: '13,186.64',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 89,
            value: 13773.837333333335,
            formattedValue: '13,773.84',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 90,
            value: 14094.757916666664,
            formattedValue: '14,094.76',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 91,
            value: 14519.919999999998,
            formattedValue: '14,519.92',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 92,
            value: 14572.519666666665,
            formattedValue: '14,572.52',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 93,
            value: 14481.919583333334,
            formattedValue: '14,481.92',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 94,
            value: 14156.225666666667,
            formattedValue: '14,156.23',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 95,
            value: 14135.112000000003,
            formattedValue: '14,135.11',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 96,
            value: 14079.548833333334,
            formattedValue: '14,079.55',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
        {
            ordinal: 97,
            value: 13757.533916666667,
            formattedValue: '13,757.53',
            properties: {
                FORE_COLOR: null,
                FONT_FLAGS: 0,
                BACK_COLOR: null,
            },
        },
    ],
    defaultMembers: [
        {
            dimension: 'Measures',
            hierarchy: 'Measures',
            path: ['contributors.COUNT'],
            captionPath: ['contributors.COUNT'],
        },
        {
            dimension: 'Green-growth',
            hierarchy: 'Year',
            path: ['1990'],
            captionPath: ['1990'],
        },
        {
            dimension: 'Epoch',
            hierarchy: 'Epoch',
            path: ['Base'],
            captionPath: ['Base'],
        },
    ],
};

const expectedResult: Array<Partial<PlotData>> = [
    {
        y: [
            3821.133471999999, 3707.33761372549, 4102.353973076924,
            4805.072134615386, 5328.059081132075, 5056.630850695925,
            5367.3834624412975, 5412.372088031296, 5407.225339070555,
            5373.238286138519, 5356.83820333, 5435.639560280556,
            5505.975615356483, 5545.681446862407,
        ],
        type: 'box',
        name: 'Africa',
    },
    {
        y: [
            15505.056199999997, 16412.87279772728, 17314.09882222222,
            18482.610326086957, 19526.520630434785, 20036.850434782613,
            20326.417413043477, 20577.05889130435, 20796.55817391305,
            20982.310869565223, 21233.470108695652, 21472.4267173913,
            21715.776086956525, 22312.254399999994,
        ],
        type: 'box',
        name: 'Asia',
    },
    {
        y: [
            26836.17424137932, 23472.240135135136, 28561.244461538467,
            32387.183384615386, 33579.12838461539, 33839.13125641025,
            33567.20758974361, 33774.53223076923, 34392.92656410256,
            35470.8924102564, 36253.60823076923, 37288.98046153846,
            38330.12838461538, 39122.71476923077,
        ],
        type: 'box',
        name: 'Europe',
    },
    {
        y: [
            21756.515555555554, 20800.657769230773, 23533.373000000003,
            25824.94907692308, 27218.929384615385, 27692.739846153847,
            27940.46515384615, 28246.597615384613, 28700.493153846157,
            29219.843846153843, 29681.473846153844, 30352.437692307692,
            30929.664615384616, 33991.91909090909,
        ],
        type: 'box',
        name: 'N/A',
    },
    {
        y: [
            13757.767875, 14360.000916666666, 17032.30936, 18411.816639999997,
            20935.792111111114, 21179.015071428574, 21259.763857142858,
            21354.415321428572, 21612.179178571427, 21934.939249999996,
            22150.310464285718, 22243.163107142864, 22354.46737037037,
            20382.207391304346,
        ],
        type: 'box',
        name: 'North America',
    },
    {
        y: [
            7395.800916666666, 8167.5064999999995, 9196.12469230769,
            9799.906285714284, 10118.784214285713, 10402.778857142857,
            10527.135857142857, 10767.21207142857, 11148.777285714286,
            11541.474142857143, 11758.616428571428, 11864.034714285712,
            12025.105857142858, 11998.256071428574,
        ],
        type: 'box',
        name: 'Oceania',
    },
    {
        y: [
            8971.712083333334, 9977.087749999999, 10326.706833333332,
            11094.377583333333, 13186.63925, 13773.837333333335,
            14094.757916666664, 14519.919999999998, 14572.519666666665,
            14481.919583333334, 14156.225666666667, 14135.112000000003,
            14079.548833333334, 13757.533916666667,
        ],
        type: 'box',
        name: 'South America',
    },
];

describe('Boxplot Helper tests', () => {
    test('CellSet to Boxplot data', () => {
        const result = buildBoxplotData(testData);
        expect(result).toStrictEqual(expectedResult);
    });
});
