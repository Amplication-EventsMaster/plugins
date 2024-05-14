import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PluginIconServiceBase } from "./base/pluginIcon.service.base";

@Injectable()
export class PluginIconService extends PluginIconServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
