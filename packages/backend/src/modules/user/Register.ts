import argon2 from "argon2";
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { User } from "../../generated/type-graphql";
import { Context } from "../../interfaces/context";
import { RegisterInput } from "./register/RegisterInput";
import { createConfirmationLink } from "./utils/createConfirmationLink";
import { sendEmail } from "./utils/sendEmail";

@Resolver(User)
export class RegisterResolver {
  @Mutation(() => User, {
    nullable: false,
  })
  async register(
    @Ctx() ctx: Context,
    @Arg("data") data: RegisterInput
  ): Promise<User> {
    const alreadyExists = await ctx.prisma.user.findFirst({
      where: {
        OR: [
          {
            username: data.username,
          },
          {
            email: data.email,
          },
        ],
      },
    });

    if (alreadyExists) throw new Error("username or email already exists");

    const hashedPassword = await argon2.hash(data.password);
    const user = await ctx.prisma.user.create({
      data: {
        displayname: data.displayname,
        email: data.email,
        username: data.username,
        password: hashedPassword,
      },
    });

    await sendEmail(user.email, await createConfirmationLink(user.id));

    if (user) {
      ctx.req.session.userId = user.id;
      ctx.req.session.role = user.role;
    }

    return user;
  }
}
