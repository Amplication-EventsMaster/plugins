import { Module } from "@nestjs/common";
import { PluginLinkModuleBase } from "./base/pluginLink.module.base";
import { PluginLinkService } from "./pluginLink.service";
import { PluginLinkController } from "./pluginLink.controller";
import { PluginLinkResolver } from "./pluginLink.resolver";

@Module({
  imports: [PluginLinkModuleBase],
  controllers: [PluginLinkController],
  providers: [PluginLinkService, PluginLinkResolver],
  exports: [PluginLinkService],
})
export class PluginLinkModule {}
