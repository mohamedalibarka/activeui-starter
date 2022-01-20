// map.types.ts
import { AWidgetState, MdxSelect, MdxString, Query } from "@activeviam/activeui-sdk";
export type CountriesSelection = string[][];
export interface MapWidgetState extends AWidgetState {
  //mdx: MdxString;
  query: Query<MdxSelect>;
  serverKey: string;
}