import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyUserInputEnvelope } from "../inputs/PostCreateManyUserInputEnvelope";
import { PostCreateOrConnectWithoutUserInput } from "../inputs/PostCreateOrConnectWithoutUserInput";
import { PostCreateWithoutUserInput } from "../inputs/PostCreateWithoutUserInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [PostCreateWithoutUserInput], {
    nullable: true
  })
  create?: PostCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: PostCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  connect?: PostWhereUniqueInput[] | undefined;
}
