import * as graphql from "@nestjs/graphql";
import { PluginSettingResolverBase } from "./base/pluginSetting.resolver.base";
import { PluginSetting } from "./base/PluginSetting";
import { PluginSettingService } from "./pluginSetting.service";

@graphql.Resolver(() => PluginSetting)
export class PluginSettingResolver extends PluginSettingResolverBase {
  constructor(protected readonly service: PluginSettingService) {
    super(service);
  }
}
