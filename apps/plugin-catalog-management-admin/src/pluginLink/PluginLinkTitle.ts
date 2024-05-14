import { PluginLink as TPluginLink } from "../api/pluginLink/PluginLink";

export const PLUGINLINK_TITLE_FIELD = "githubLink";

export const PluginLinkTitle = (record: TPluginLink): string => {
  return record.githubLink?.toString() || String(record.id);
};
