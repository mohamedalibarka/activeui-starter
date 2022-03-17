import { continentYearCellSet } from './testData';
import { generateHeatmapData } from '../src/heatmap.helper';

describe('PluginSunburst Helper tests', () => {
    describe('CellSet to HeatmapData', () => {
        // add tests with subplots ?
        test('With continent - year rows', () => {
            const result = generateHeatmapData(continentYearCellSet, 0);
            const expectedResult = [
                {
                    type: 'heatmap',
                    x: [
                        'Africa',
                        'Asia',
                        'Europe',
                        'N/A',
                        'North America',
                        'Oceania',
                        'South America',
                    ],
                    y: [
                        '1995',
                        '2000',
                        '2005',
                        '2010',
                        '2011',
                        '2012',
                        '2013',
                        '2014',
                        '2015',
                        '2016',
                        '2017',
                        '2018',
                        '2019',
                        '1990',
                    ],
                    z: [
                        [
                            3707.33761372549, 16412.87279772728,
                            23472.240135135136, 20800.657769230773,
                            14360.000916666666, 8167.5064999999995,
                            9977.087749999999,
                        ],
                        [
                            4102.353973076924, 17314.09882222222,
                            28561.244461538467, 23533.373000000003, 17032.30936,
                            9196.12469230769, 10326.706833333332,
                        ],
                        [
                            4805.072134615386, 18482.610326086957,
                            32387.183384615386, 25824.94907692308,
                            18411.816639999997, 9799.906285714284,
                            11094.377583333333,
                        ],
                        [
                            5328.059081132075, 19526.520630434785,
                            33579.12838461539, 27218.929384615385,
                            20935.792111111114, 10118.784214285713, 13186.63925,
                        ],
                        [
                            5056.630850695925, 20036.850434782613,
                            33839.13125641025, 27692.739846153847,
                            21179.015071428574, 10402.778857142857,
                            13773.837333333335,
                        ],
                        [
                            5367.3834624412975, 20326.417413043477,
                            33567.20758974361, 27940.46515384615,
                            21259.763857142858, 10527.135857142857,
                            14094.757916666664,
                        ],
                        [
                            5412.372088031296, 20577.05889130435,
                            33774.53223076923, 28246.597615384613,
                            21354.415321428572, 10767.21207142857,
                            14519.919999999998,
                        ],
                        [
                            5407.225339070555, 20796.55817391305,
                            34392.92656410256, 28700.493153846157,
                            21612.179178571427, 11148.777285714286,
                            14572.519666666665,
                        ],
                        [
                            5373.238286138519, 20982.310869565223,
                            35470.8924102564, 29219.843846153843,
                            21934.939249999996, 11541.474142857143,
                            14481.919583333334,
                        ],
                        [
                            5356.83820333, 21233.470108695652,
                            36253.60823076923, 29681.473846153844,
                            22150.310464285718, 11758.616428571428,
                            14156.225666666667,
                        ],
                        [
                            5435.639560280556, 21472.4267173913,
                            37288.98046153846, 30352.437692307692,
                            22243.163107142864, 11864.034714285712,
                            14135.112000000003,
                        ],
                        [
                            5505.975615356483, 21715.776086956525,
                            38330.12838461538, 30929.664615384616,
                            22354.46737037037, 12025.105857142858,
                            14079.548833333334,
                        ],
                        [
                            5545.681446862407, 22312.254399999994,
                            39122.71476923077, 33991.91909090909,
                            20382.207391304346, 11998.256071428574,
                            13757.533916666667,
                        ],
                        [
                            null,
                            15505.056199999997,
                            26836.17424137932,
                            21756.515555555554,
                            13757.767875,
                            7395.800916666666,
                            8971.712083333334,
                        ],
                    ],
                },
            ];
            expect(result).toEqual(expectedResult);
        });
    });
});