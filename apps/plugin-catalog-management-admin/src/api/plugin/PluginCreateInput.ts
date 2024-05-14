import { InputJsonValue } from "../../types";

export type PluginCreateInput = {
  description?: string | null;
  pluginId?: string | null;
  settings?: InputJsonValue;
};
