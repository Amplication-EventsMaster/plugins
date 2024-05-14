import { InputJsonValue } from "../../types";

export type PluginUpdateInput = {
  description?: string | null;
  pluginId?: string | null;
  settings?: InputJsonValue;
};
