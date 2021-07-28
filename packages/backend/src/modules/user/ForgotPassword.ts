import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { Context } from "../../interfaces/context";
import { createForgotPasswordLink } from "./utils/createForgotPasswordLink";
import { sendEmail } from "./utils/sendEmail";

@Resolver()
export class ForgotPasswordResolver {
  @Mutation(() => Boolean)
  async forgotPassword(
    @Arg("email") email: string,
    @Ctx() ctx: Context
  ): Promise<boolean> {
    const user = await ctx.prisma.user.findUnique({ where: { email } });

    if (!user) {
      return true;
    }

    const token = await createForgotPasswordLink(user.id);
    await sendEmail(user.email, token);

    return true;
  }
}
