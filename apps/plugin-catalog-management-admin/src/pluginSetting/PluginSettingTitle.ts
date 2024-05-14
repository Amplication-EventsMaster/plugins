import { PluginSetting as TPluginSetting } from "../api/pluginSetting/PluginSetting";

export const PLUGINSETTING_TITLE_FIELD = "key";

export const PluginSettingTitle = (record: TPluginSetting): string => {
  return record.key?.toString() || String(record.id);
};
