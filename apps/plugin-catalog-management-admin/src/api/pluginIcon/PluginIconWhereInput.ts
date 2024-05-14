import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PluginIconWhereInput = {
  id?: StringFilter;
  url?: StringNullableFilter;
};