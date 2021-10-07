import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { Context } from "../../interfaces/context";
import { redis } from "../../redis";

@Resolver()
export class ConfirmUserResolver {
  @Mutation(() => Boolean)
  async confirm(
    @Arg("token") token: string,
    @Ctx() ctx: Context
  ): Promise<boolean> {
    const userId = ctx.req.session.userId;

    if (!userId) return false;

    await redis.del(token);
    await ctx.prisma.user.update({
      data: {
        confirmed: true,
      },
      where: {
        id: userId,
      },
    });

    return true;
  }
}
