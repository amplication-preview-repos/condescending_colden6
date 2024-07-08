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
import { AssetHierarchyCreateInput } from "./AssetHierarchyCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateAssetHierarchyArgs {
  @ApiProperty({
    required: true,
    type: () => AssetHierarchyCreateInput,
  })
  @ValidateNested()
  @Type(() => AssetHierarchyCreateInput)
  @Field(() => AssetHierarchyCreateInput, { nullable: false })
  data!: AssetHierarchyCreateInput;
}

export { CreateAssetHierarchyArgs as CreateAssetHierarchyArgs };
