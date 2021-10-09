import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostAvgOrderByAggregateInput } from "../inputs/PostAvgOrderByAggregateInput";
import { PostCountOrderByAggregateInput } from "../inputs/PostCountOrderByAggregateInput";
import { PostMaxOrderByAggregateInput } from "../inputs/PostMaxOrderByAggregateInput";
import { PostMinOrderByAggregateInput } from "../inputs/PostMinOrderByAggregateInput";
import { PostSumOrderByAggregateInput } from "../inputs/PostSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PostCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PostCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PostAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PostMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PostMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PostSumOrderByAggregateInput | undefined;
}
