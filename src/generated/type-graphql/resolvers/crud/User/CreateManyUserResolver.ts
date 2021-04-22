import * as TypeGraphQL from "type-graphql";
import { CreateManyUserArgs } from "./args/CreateManyUserArgs";
import { User } from "../../../models/User";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class CreateManyUserResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateManyUserArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).user.createMany(args);
  }
}
