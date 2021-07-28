import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyUserInput } from "../inputs/PostCreateManyUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [PostCreateManyUserInput], {
    nullable: false
  })
  data!: PostCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
