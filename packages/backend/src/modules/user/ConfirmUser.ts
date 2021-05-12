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
    const userId = await redis.get(token);

    if (!userId) return false;

    await redis.del(token);
    await ctx.prisma.user.update({
      data: {
        confirmed: true,
      },
      where: {
        id: parseInt(userId),
      },
    });

    return true;
  }
}
