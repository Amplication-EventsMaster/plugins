import { Module } from "@nestjs/common";
import { PluginIconModuleBase } from "./base/pluginIcon.module.base";
import { PluginIconService } from "./pluginIcon.service";
import { PluginIconController } from "./pluginIcon.controller";
import { PluginIconResolver } from "./pluginIcon.resolver";

@Module({
  imports: [PluginIconModuleBase],
  controllers: [PluginIconController],
  providers: [PluginIconService, PluginIconResolver],
  exports: [PluginIconService],
})
export class PluginIconModule {}
