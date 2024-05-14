/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PluginLinkWhereInput } from "./PluginLinkWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PluginLinkListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PluginLinkWhereInput,
  })
  @ValidateNested()
  @Type(() => PluginLinkWhereInput)
  @IsOptional()
  @Field(() => PluginLinkWhereInput, {
    nullable: true,
  })
  every?: PluginLinkWhereInput;

  @ApiProperty({
    required: false,
    type: () => PluginLinkWhereInput,
  })
  @ValidateNested()
  @Type(() => PluginLinkWhereInput)
  @IsOptional()
  @Field(() => PluginLinkWhereInput, {
    nullable: true,
  })
  some?: PluginLinkWhereInput;

  @ApiProperty({
    required: false,
    type: () => PluginLinkWhereInput,
  })
  @ValidateNested()
  @Type(() => PluginLinkWhereInput)
  @IsOptional()
  @Field(() => PluginLinkWhereInput, {
    nullable: true,
  })
  none?: PluginLinkWhereInput;
}
export { PluginLinkListRelationFilter as PluginLinkListRelationFilter };