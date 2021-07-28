import argon2 from "argon2";
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { User } from "../../generated/type-graphql";
import { Context } from "../../interfaces/context";
import { redis } from "../../redis";
import { UserConfirmationPrefixes } from "../shared/userConfirmationPrefixes";
import { ChangePasswordInput } from "./forgotPassword/ChangePasswordInput";

@Resolver()
export class ChangePasswordResolver {
  @Mutation(() => User)
  async changePassword(
    @Arg("data") { token, password }: ChangePasswordInput,
    @Ctx() ctx: Context
  ): Promise<User> {
    const userId = await redis.get(
      UserConfirmationPrefixes.forgotPassword + token
    );

    if (!userId) throw new Error("Invalid token.");
    await redis.del(UserConfirmationPrefixes.forgotPassword + token);

    const hashedPassword = await argon2.hash(password);
    const user = await ctx.prisma.user.update({
      data: {
        password: hashedPassword,
      },
      where: { id: parseInt(userId) },
    });

    if (!user) throw new Error("There is not user associated by the given id.");

    ctx.req.session.userId = user.id;

    return user;
  }
}
