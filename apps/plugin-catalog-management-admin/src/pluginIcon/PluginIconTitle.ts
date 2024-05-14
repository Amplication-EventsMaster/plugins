import { PluginIcon as TPluginIcon } from "../api/pluginIcon/PluginIcon";

export const PLUGINICON_TITLE_FIELD = "url";

export const PluginIconTitle = (record: TPluginIcon): string => {
  return record.url?.toString() || String(record.id);
};
