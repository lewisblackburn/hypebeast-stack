import {
  Arg,
  Authorized,
  Ctx,
  Int,
  Mutation,
  Query,
  Resolver,
} from "type-graphql";
import { Post } from "../../generated/type-graphql";
import { Context } from "../../interfaces/context";

@Resolver(Post)
export class PostResolver {
  @Authorized(["USER", "ADMIN"])
  @Mutation(() => Post)
  async create(@Ctx() ctx: Context) {
    return ctx.prisma.post.create({
      data: {
        user: {
          connect: {
            id: ctx.req.session.userId,
          },
        },
      },
    });
  }

  @Query(() => Post, { nullable: true })
  async post(@Arg("postId", () => Int) postId: number, @Ctx() ctx: Context) {
    return ctx.prisma.post.findUnique({
      where: { id: postId },
    });
  }
}
