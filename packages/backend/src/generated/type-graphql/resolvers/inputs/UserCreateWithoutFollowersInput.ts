import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateNestedManyWithoutUserInput } from "../inputs/PostCreateNestedManyWithoutUserInput";
import { UserCreateNestedManyWithoutFollowersInput } from "../inputs/UserCreateNestedManyWithoutFollowersInput";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateWithoutFollowersInput {
  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  confirmed?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  displayname!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => Role, {
    nullable: true
  })
  role?: "USER" | "ADMIN" | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  avatar?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bio?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  location?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  website?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dob?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => PostCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  posts?: PostCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutFollowersInput, {
    nullable: true
  })
  following?: UserCreateNestedManyWithoutFollowersInput | undefined;
}
