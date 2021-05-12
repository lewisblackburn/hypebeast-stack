import { Ctx, Query, Resolver } from "type-graphql";
import { User } from "../../generated/type-graphql";
import { Context } from "../../interfaces/context";

@Resolver(User)
export class MeResolver {
  @Query(() => User, { nullable: true })
  async me(@Ctx() ctx: Context): Promise<User | null> {
    if (!ctx.req.session.userId) return null;
    return ctx.prisma.user.findUnique({
      where: {
        id: ctx.req.session.userId,
      },
    });
  }
}
