import { PluginSettingWhereUniqueInput } from "./PluginSettingWhereUniqueInput";
import { PluginSettingUpdateInput } from "./PluginSettingUpdateInput";

export type UpdatePluginSettingArgs = {
  where: PluginSettingWhereUniqueInput;
  data: PluginSettingUpdateInput;
};
