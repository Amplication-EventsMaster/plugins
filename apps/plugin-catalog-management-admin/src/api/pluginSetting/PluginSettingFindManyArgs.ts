import { PluginSettingWhereInput } from "./PluginSettingWhereInput";
import { PluginSettingOrderByInput } from "./PluginSettingOrderByInput";

export type PluginSettingFindManyArgs = {
  where?: PluginSettingWhereInput;
  orderBy?: Array<PluginSettingOrderByInput>;
  skip?: number;
  take?: number;
};
