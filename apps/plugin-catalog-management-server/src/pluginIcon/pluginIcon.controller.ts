import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PluginIconService } from "./pluginIcon.service";
import { PluginIconControllerBase } from "./base/pluginIcon.controller.base";

@swagger.ApiTags("pluginIcons")
@common.Controller("pluginIcons")
export class PluginIconController extends PluginIconControllerBase {
  constructor(protected readonly service: PluginIconService) {
    super(service);
  }
}
