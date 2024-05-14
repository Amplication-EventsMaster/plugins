import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PluginLinkServiceBase } from "./base/pluginLink.service.base";

@Injectable()
export class PluginLinkService extends PluginLinkServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
