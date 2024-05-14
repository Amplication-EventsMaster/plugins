import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PluginSettingServiceBase } from "./base/pluginSetting.service.base";

@Injectable()
export class PluginSettingService extends PluginSettingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
