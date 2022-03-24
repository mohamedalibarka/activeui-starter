import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Dashboard, DashboardState, deserializeDashboardState } from '@activeviam/activeui-sdk';

test('Renders plugin', () => {
    const serializedDashboardState: DashboardState<"serialized"> = {
        pages: {
          "p-0": {
            name: "Page 1",
            content: {
              "0": {
                mapping: {
                  xAxis: ["[Currency].[Currency].[Currency]"],
                  values: ["[Measures].[pnl.SUM]"],
                  splitBy: ["[Geography].[City].[City]", "ALL_MEASURES"],
                  horizontalSubplots: [],
                  verticalSubplots: [],
                },
                widgetKey: "plotly-clustered-column-chart",
                query: {
                  updateMode: "once",
                  mdx: `SELECT
                  NON EMPTY Crossjoin(
                    Hierarchize(
                      Descendants(
                        {
                          [Geography].[City].[AllMember]
                        },
                        1,
                        SELF_AND_BEFORE
                      )
                    ),
                    {
                      [Measures].[pnl.SUM]
                    }
                  ) ON COLUMNS,
                  NON EMPTY Hierarchize(
                    Descendants(
                      {
                        [Currency].[Currency].[AllMember]
                      },
                      1,
                      SELF_AND_BEFORE
                    )
                  ) ON ROWS
                  FROM [EquityDerivativesCube]`,
                },
                serverKey: "my-server",
                name: "Profit and loss sum by countries",
              },
              "1": {
                mapping: {
                  values: ["[Measures].[pnl.SUM]"],
                  sliceBy: ["[CounterParty].[CounterParty].[CounterPartyGroup]"],
                  horizontalSubplots: [],
                  verticalSubplots: [],
                },
                widgetKey: "plotly-pie-chart",
                query: {
                  updateMode: "once",
                  mdx: `SELECT
                  NON EMPTY Hierarchize(
                    Descendants(
                      {
                        [CounterParty].[CounterParty].[AllMember]
                      },
                      1,
                      SELF_AND_BEFORE
                    )
                  ) ON ROWS,
                  NON EMPTY {
                    [Measures].[pnl.SUM]
                  } ON COLUMNS
                  FROM [EquityDerivativesCube]`,
                },
                serverKey: "my-server",
                name: "Profit and loss delta sum by counterparty group",
              },
            },
            layout: {
              children: [
                {
                  leafKey: "0",
                  size: 0.5,
                },
                {
                  leafKey: "1",
                  size: 0.5,
                },
              ],
              direction: "column",
            },
            filters: [],
          },
          "p-1": {
            name: "Page 2",
            content: {
              "0": {
                mapping: {
                  rows: [
                    "[Booking].[Desk].[LegalEntity]",
                    "[Geography].[City].[City]",
                  ],
                  columns: ["ALL_MEASURES"],
                  measures: ["[Measures].[pnl.SUM]"],
                },
                query: {
                  updateMode: "once",
                  mdx: `SELECT
                  NON EMPTY {
                    [Measures].[pnl.SUM]
                  } ON COLUMNS,
                  NON EMPTY Crossjoin(
                    Hierarchize(
                      Descendants(
                        {
                          [Booking].[Desk].[AllMember]
                        },
                        1,
                        SELF_AND_BEFORE
                      )
                    ),
                    Hierarchize(
                      Descendants(
                        {
                          [Geography].[City].[AllMember]
                        },
                        1,
                        SELF_AND_BEFORE
                      )
                    )
                  ) ON ROWS
                  FROM [EquityDerivativesCube]`,
                },
                widgetKey: "pivot-table",
                serverKey: "my-server",
                name: "Profit and loss sum by legal entity and city",
              },
            },
            layout: {
              children: [
                {
                  leafKey: "0",
                  size: 1,
                },
              ],
              direction: "row",
            },
          },
        },
        pagesOrder: ["p-0", "p-1"],
        filters: [],
      };
      
      const dashboardState = deserializeDashboardState(serializedDashboardState);
      
      render(<Dashboard state={dashboardState} />
      );
})
