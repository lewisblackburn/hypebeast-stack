import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutUserInput } from "../inputs/PostCreateWithoutUserInput";
import { PostUpdateWithoutUserInput } from "../inputs/PostUpdateWithoutUserInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostUpdateWithoutUserInput, {
    nullable: false
  })
  update!: PostUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutUserInput, {
    nullable: false
  })
  create!: PostCreateWithoutUserInput;
}
