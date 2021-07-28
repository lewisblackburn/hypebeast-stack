import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyUserInputEnvelope } from "../inputs/PostCreateManyUserInputEnvelope";
import { PostCreateOrConnectWithoutUserInput } from "../inputs/PostCreateOrConnectWithoutUserInput";
import { PostCreateWithoutUserInput } from "../inputs/PostCreateWithoutUserInput";
import { PostScalarWhereInput } from "../inputs/PostScalarWhereInput";
import { PostUpdateManyWithWhereWithoutUserInput } from "../inputs/PostUpdateManyWithWhereWithoutUserInput";
import { PostUpdateWithWhereUniqueWithoutUserInput } from "../inputs/PostUpdateWithWhereUniqueWithoutUserInput";
import { PostUpsertWithWhereUniqueWithoutUserInput } from "../inputs/PostUpsertWithWhereUniqueWithoutUserInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [PostCreateWithoutUserInput], {
    nullable: true
  })
  create?: PostCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: PostUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: PostCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  connect?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  set?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  delete?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: PostUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: PostUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PostScalarWhereInput[] | undefined;
}
