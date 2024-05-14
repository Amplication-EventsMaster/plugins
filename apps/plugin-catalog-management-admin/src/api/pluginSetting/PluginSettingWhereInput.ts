import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PluginSettingWhereInput = {
  id?: StringFilter;
  key?: StringNullableFilter;
  value?: StringNullableFilter;
};
