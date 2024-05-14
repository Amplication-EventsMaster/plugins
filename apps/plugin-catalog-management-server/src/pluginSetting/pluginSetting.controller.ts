import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PluginSettingService } from "./pluginSetting.service";
import { PluginSettingControllerBase } from "./base/pluginSetting.controller.base";

@swagger.ApiTags("pluginSettings")
@common.Controller("pluginSettings")
export class PluginSettingController extends PluginSettingControllerBase {
  constructor(protected readonly service: PluginSettingService) {
    super(service);
  }
}
