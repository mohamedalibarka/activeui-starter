import React, { useRef, useState, useEffect, KeyboardEvent } from 'react';
import { withQueryResult, CellSet } from '@activeviam/activeui-sdk';
import Spin from 'antd/lib/spin';
import Plot from 'react-plotly.js';
import useComponentSize from '@rehooks/component-size';
import { MapWidgetState, CountriesSelection } from '@activeui-starter/utils';

export const Map = withQueryResult<MapWidgetState, CountriesSelection>(
    (props) => {
        const geoLayoutRef = useRef<Plotly.Layout['geo'] | undefined>({});
        const container = useRef<HTMLDivElement>(null);
        const { height, width } = useComponentSize(container);
        const getCountriesAndValues = (
            data?: CellSet
        ): [string[], number[]] => {
            if (!data) {
                console.log(props);
                return [[], []];
            }

            const rowsAxis = data.axes[1];
            const numberOfCountries = rowsAxis.positions.length;

            const valuesForSelectedYear = new Array(numberOfCountries).fill(
                null
            );
            data.cells.forEach((cell) => {
                const rowIndex = cell.ordinal;
                valuesForSelectedYear[rowIndex] = cell.value;
            });

            return [
                rowsAxis.positions.map(
                    (position) => position[0].captionPath[2]
                ),
                valuesForSelectedYear,
            ];
        };
        console.log('test', props.widgetState);
        const [selectedIndices, setSelectedIndices] = useState<
            number[] | undefined
        >();
        const { data, error, isLoading } = props.queryResult;

        // countries and values only depend on `data`.
        const [countries, values] = getCountriesAndValues(data);
        console.log(isLoading, data, countries, values);

        const { onSelectionChange } = props;

        useEffect(() => {
            if (!data || !onSelectionChange) {
                return;
            }
            const rowsAxis = data.axes[1];
            const selectedCountries: CountriesSelection = (
                selectedIndices ?? []
            ).map((pointIndex) => {
                const position = rowsAxis.positions[pointIndex];
                // Only one hierarchy (Countries) is chosen on the rows axis of the map's query.
                const member = position[0];
                return member.namePath;
            });
            //console.log(selectedIndices);
            //console.log(selectedCountries);
            onSelectionChange(selectedCountries);
        }, [data, onSelectionChange, selectedIndices]);

        const handleSelectionChanged = (payload: Plotly.PlotSelectionEvent) => {
            if (payload) {
                const indices = payload.points.map(
                    ({ pointIndex }) => pointIndex
                );
                setSelectedIndices(indices);
            }
        };
        //return <div style={props.style}>Hello World!</div>;
        const handleKeyUp = (event: KeyboardEvent<HTMLDivElement>) => {
            if (event.key === 'Escape') {
                setSelectedIndices(undefined);
            }
        };
        return (
            <div
                ref={container}
                tabIndex={0}
                onKeyUp={handleKeyUp}
                style={{
                    ...props.style,
                    height: '100%',
                }}
            >
                {error ? (
                    <div>{error.stackTrace}</div>
                ) : isLoading ? (
                    <Spin />
                ) : (
                    <Plot
                        data={[
                            {
                                type: 'choropleth',
                                locationmode: 'country names',
                                locations: countries,
                                z: values,
                                text: countries,
                                selectedpoints: selectedIndices,
                            },
                        ]}
                        onSelected={handleSelectionChanged}
                        layout={{
                            geo: geoLayoutRef.current,
                            height,
                            width,
                            margin: {
                                l: 20,
                                t: 30,
                                r: 20,
                                b: 20,
                            },
                        }}
                    />
                    // Don't forget to close your new brackets!!!
                )}
            </div>
        );
    }
);
