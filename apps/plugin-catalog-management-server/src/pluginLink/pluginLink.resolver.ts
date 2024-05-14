import * as graphql from "@nestjs/graphql";
import { PluginLinkResolverBase } from "./base/pluginLink.resolver.base";
import { PluginLink } from "./base/PluginLink";
import { PluginLinkService } from "./pluginLink.service";

@graphql.Resolver(() => PluginLink)
export class PluginLinkResolver extends PluginLinkResolverBase {
  constructor(protected readonly service: PluginLinkService) {
    super(service);
  }
}
