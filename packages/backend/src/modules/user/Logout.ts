import { COOKIE_NAME } from "backend/src/constants";
import { Authorized, Ctx, Mutation, Resolver } from "type-graphql";
import { User } from "../../generated/type-graphql";
import { Context } from "../../interfaces/context";

@Resolver(User)
export class LogoutResolver {
  @Authorized(["USER", "ADMIN"])
  @Mutation(() => Boolean)
  async logout(@Ctx() ctx: Context): Promise<Boolean> {
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
