import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PluginLinkService } from "./pluginLink.service";
import { PluginLinkControllerBase } from "./base/pluginLink.controller.base";

@swagger.ApiTags("pluginLinks")
@common.Controller("pluginLinks")
export class PluginLinkController extends PluginLinkControllerBase {
  constructor(protected readonly service: PluginLinkService) {
    super(service);
  }
}
