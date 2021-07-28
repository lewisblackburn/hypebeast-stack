import { Arg, Ctx, FieldResolver, Query, Resolver, Root } from "type-graphql";
import { User } from "../../generated/type-graphql";
import { Context } from "../../interfaces/context";

@Resolver(User)
export class UserResolver {
  @FieldResolver(() => String)
  email(@Root() user: User, @Ctx() ctx: Context) {
    if (ctx.req.session.userId === user.id) return user.email;
    return "";
  }

  @Query(() => User, { nullable: true })
  async user(
    @Arg("username", (type) => String) username: string,
    @Ctx() ctx: Context
  ) {
    return ctx.prisma.user.findUnique({
      where: { username },
    });
  }
}
