import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostAvgAggregate } from "../outputs/PostAvgAggregate";
import { PostCountAggregate } from "../outputs/PostCountAggregate";
import { PostMaxAggregate } from "../outputs/PostMaxAggregate";
import { PostMinAggregate } from "../outputs/PostMinAggregate";
import { PostSumAggregate } from "../outputs/PostSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class PostGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  published!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  authorId?: number | null;

  @TypeGraphQL.Field(_type => PostCountAggregate, {
    nullable: true
  })
  count?: PostCountAggregate | null;

  @TypeGraphQL.Field(_type => PostAvgAggregate, {
    nullable: true
  })
  avg?: PostAvgAggregate | null;

  @TypeGraphQL.Field(_type => PostSumAggregate, {
    nullable: true
  })
  sum?: PostSumAggregate | null;

  @TypeGraphQL.Field(_type => PostMinAggregate, {
    nullable: true
  })
  min?: PostMinAggregate | null;

  @TypeGraphQL.Field(_type => PostMaxAggregate, {
    nullable: true
  })
  max?: PostMaxAggregate | null;
}
