/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PluginIconService } from "../pluginIcon.service";
import { PluginIconCreateInput } from "./PluginIconCreateInput";
import { PluginIcon } from "./PluginIcon";
import { PluginIconFindManyArgs } from "./PluginIconFindManyArgs";
import { PluginIconWhereUniqueInput } from "./PluginIconWhereUniqueInput";
import { PluginIconUpdateInput } from "./PluginIconUpdateInput";

export class PluginIconControllerBase {
  constructor(protected readonly service: PluginIconService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PluginIcon })
  async createPluginIcon(
    @common.Body() data: PluginIconCreateInput
  ): Promise<PluginIcon> {
    return await this.service.createPluginIcon({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
        url: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [PluginIcon] })
  @ApiNestedQuery(PluginIconFindManyArgs)
  async pluginIcons(@common.Req() request: Request): Promise<PluginIcon[]> {
    const args = plainToClass(PluginIconFindManyArgs, request.query);
    return this.service.pluginIcons({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
        url: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PluginIcon })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async pluginIcon(
    @common.Param() params: PluginIconWhereUniqueInput
  ): Promise<PluginIcon | null> {
    const result = await this.service.pluginIcon({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
        url: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: PluginIcon })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePluginIcon(
    @common.Param() params: PluginIconWhereUniqueInput,
    @common.Body() data: PluginIconUpdateInput
  ): Promise<PluginIcon | null> {
    try {
      return await this.service.updatePluginIcon({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
          url: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: PluginIcon })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePluginIcon(
    @common.Param() params: PluginIconWhereUniqueInput
  ): Promise<PluginIcon | null> {
    try {
      return await this.service.deletePluginIcon({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
          url: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}