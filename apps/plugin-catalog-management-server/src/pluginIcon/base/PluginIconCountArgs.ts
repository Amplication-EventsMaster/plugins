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
import { Type } from "class-transformer";

@ArgsType()
class PluginIconCountArgs {
  @ApiProperty({
    required: false,
    type: () => PluginIconWhereInput,
  })
  @Field(() => PluginIconWhereInput, { nullable: true })
  @Type(() => PluginIconWhereInput)
  where?: PluginIconWhereInput;
}

export { PluginIconCountArgs as PluginIconCountArgs };
