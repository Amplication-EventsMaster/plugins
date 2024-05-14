import * as graphql from "@nestjs/graphql";
import { PluginIconResolverBase } from "./base/pluginIcon.resolver.base";
import { PluginIcon } from "./base/PluginIcon";
import { PluginIconService } from "./pluginIcon.service";

@graphql.Resolver(() => PluginIcon)
export class PluginIconResolver extends PluginIconResolverBase {
  constructor(protected readonly service: PluginIconService) {
    super(service);
  }
}
