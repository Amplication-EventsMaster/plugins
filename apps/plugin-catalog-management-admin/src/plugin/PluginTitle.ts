import { Plugin as TPlugin } from "../api/plugin/Plugin";

export const PLUGIN_TITLE_FIELD = "pluginId";

export const PluginTitle = (record: TPlugin): string => {
  return record.pluginId?.toString() || String(record.id);
};
