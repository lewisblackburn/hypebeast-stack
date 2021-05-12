import argon2 from "argon2";
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { User } from "../../generated/type-graphql";
import { Context } from "../../interfaces/context";
import { LoginInput } from "./login/LoginInput";

@Resolver(User)
export class LoginResolver {
  @Mutation(() => User)
  async login(
    @Arg("data") data: LoginInput,
    @Ctx() ctx: Context
  ): Promise<User> {
    const user = await ctx.prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    // might need to change how i deal with errors

    if (!user) throw new Error("That user does not exist.");
    if (!user.confirmed)
      throw new Error("You need to confirm your account before logging in.");
    const valid = await argon2.verify(user!.password, data.password);
    if (!valid) throw new Error("Incorrect password");

    ctx.req.session.userId = user.id;
    ctx.req.session.role = user.role;

    return user;
  }
}
