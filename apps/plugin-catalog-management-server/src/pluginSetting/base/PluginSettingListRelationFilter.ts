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
import { PluginSettingWhereInput } from "./PluginSettingWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PluginSettingListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PluginSettingWhereInput,
  })
  @ValidateNested()
  @Type(() => PluginSettingWhereInput)
  @IsOptional()
  @Field(() => PluginSettingWhereInput, {
    nullable: true,
  })
  every?: PluginSettingWhereInput;

  @ApiProperty({
    required: false,
    type: () => PluginSettingWhereInput,
  })
  @ValidateNested()
  @Type(() => PluginSettingWhereInput)
  @IsOptional()
  @Field(() => PluginSettingWhereInput, {
    nullable: true,
  })
  some?: PluginSettingWhereInput;

  @ApiProperty({
    required: false,
    type: () => PluginSettingWhereInput,
  })
  @ValidateNested()
  @Type(() => PluginSettingWhereInput)
  @IsOptional()
  @Field(() => PluginSettingWhereInput, {
    nullable: true,
  })
  none?: PluginSettingWhereInput;
}
export { PluginSettingListRelationFilter as PluginSettingListRelationFilter };
