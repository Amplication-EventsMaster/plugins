/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PluginIconWhereInput } from "./PluginIconWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PluginIconOrderByInput } from "./PluginIconOrderByInput";

@ArgsType()
class PluginIconFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PluginIconWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PluginIconWhereInput, { nullable: true })
  @Type(() => PluginIconWhereInput)
  where?: PluginIconWhereInput;

  @ApiProperty({
    required: false,
    type: [PluginIconOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PluginIconOrderByInput], { nullable: true })
  @Type(() => PluginIconOrderByInput)
  orderBy?: Array<PluginIconOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { PluginIconFindManyArgs as PluginIconFindManyArgs };
