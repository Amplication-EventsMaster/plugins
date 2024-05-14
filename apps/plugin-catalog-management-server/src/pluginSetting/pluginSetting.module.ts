import { Module } from "@nestjs/common";
import { PluginSettingModuleBase } from "./base/pluginSetting.module.base";
import { PluginSettingService } from "./pluginSetting.service";
import { PluginSettingController } from "./pluginSetting.controller";
import { PluginSettingResolver } from "./pluginSetting.resolver";

@Module({
  imports: [PluginSettingModuleBase],
  controllers: [PluginSettingController],
  providers: [PluginSettingService, PluginSettingResolver],
  exports: [PluginSettingService],
})
export class PluginSettingModule {}
