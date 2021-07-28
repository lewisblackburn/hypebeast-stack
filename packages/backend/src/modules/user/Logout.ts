import { Authorized, Ctx, Mutation, Resolver } from "type-graphql";
import { COOKIE_NAME } from "../../constants";
import { User } from "../../generated/type-graphql";
import { Context } from "../../interfaces/context";

@Resolver(User)
export class LogoutResolver {
  @Authorized(["USER", "ADMIN"])
  @Mutation(() => Boolean)
  async logout(@Ctx() ctx: Context): Promise<boolean> {
    return new Promise((resolve) =>
      ctx.req.session.destroy((err: any) => {
        ctx.res.clearCookie(COOKIE_NAME);
        if (err) {
          console.log(err);
          resolve(false);
          return;
        }
        resolve(true);
      })
    );
  }
}
