import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type PluginWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  pluginId?: StringNullableFilter;
  settings?: JsonFilter;
};
