import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PluginLinkWhereInput = {
  githubLink?: StringNullableFilter;
  id?: StringFilter;
  npmLink?: StringNullableFilter;
};
