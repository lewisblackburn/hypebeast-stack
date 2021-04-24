import { IsString, Length, NotContains } from "class-validator";
import { Field, InputType } from "type-graphql";
import { LoginInput } from "../login/LoginInput";

@InputType()
export class RegisterInput extends LoginInput {
  @IsString()
  @Length(2, 16)
  @NotContains("@")
  @Field()
  displayname: string;

  @IsString()
  @Length(2, 16)
  @NotContains("@")
  @Field()
  username: string;
}
