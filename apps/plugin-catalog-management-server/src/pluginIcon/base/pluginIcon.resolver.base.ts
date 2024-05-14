/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { PluginIcon } from "./PluginIcon";
import { PluginIconCountArgs } from "./PluginIconCountArgs";
import { PluginIconFindManyArgs } from "./PluginIconFindManyArgs";
import { PluginIconFindUniqueArgs } from "./PluginIconFindUniqueArgs";
import { CreatePluginIconArgs } from "./CreatePluginIconArgs";
import { UpdatePluginIconArgs } from "./UpdatePluginIconArgs";
import { DeletePluginIconArgs } from "./DeletePluginIconArgs";
import { PluginIconService } from "../pluginIcon.service";
@graphql.Resolver(() => PluginIcon)
export class PluginIconResolverBase {
  constructor(protected readonly service: PluginIconService) {}

  async _pluginIconsMeta(
    @graphql.Args() args: PluginIconCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [PluginIcon])
  async pluginIcons(
    @graphql.Args() args: PluginIconFindManyArgs
  ): Promise<PluginIcon[]> {
    return this.service.pluginIcons(args);
  }

  @graphql.Query(() => PluginIcon, { nullable: true })
  async pluginIcon(
    @graphql.Args() args: PluginIconFindUniqueArgs
  ): Promise<PluginIcon | null> {
    const result = await this.service.pluginIcon(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => PluginIcon)
  async createPluginIcon(
    @graphql.Args() args: CreatePluginIconArgs
  ): Promise<PluginIcon> {
    return await this.service.createPluginIcon({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => PluginIcon)
  async updatePluginIcon(
    @graphql.Args() args: UpdatePluginIconArgs
  ): Promise<PluginIcon | null> {
    try {
      return await this.service.updatePluginIcon({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => PluginIcon)
  async deletePluginIcon(
    @graphql.Args() args: DeletePluginIconArgs
  ): Promise<PluginIcon | null> {
    try {
      return await this.service.deletePluginIcon(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}