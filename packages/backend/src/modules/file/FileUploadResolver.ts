import fs, { createWriteStream } from "fs";
import { FileUpload, GraphQLUpload } from "graphql-upload";
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { Context } from "../../interfaces/context";

@Resolver()
export class FileUploadResolver {
  @Mutation(() => Boolean)
  async upload(
    @Ctx() ctx: Context,
    @Arg("file", () => GraphQLUpload) file: FileUpload
  ): Promise<boolean> {
    const { createReadStream, filename } = file;
    const filepath = `${__dirname}/../../../images/`;
    console.log(filepath);
    try {
      fs.mkdirSync(filepath + ctx.req.session.userId);
    } catch (error) {}
    const writableStream = createWriteStream(
      `/${filepath}/${ctx.req.session.userId}/${filename}`,
      {
        autoClose: true,
      }
    );

    // url will have to be changed at prod
    // also need to variabley change based on the type of upload
    // on resolver add type: 'avatar' | 'movieThumbnail' etc and update url based on that
    await ctx.prisma.user.update({
      where: { id: ctx.req.session.userId },
      data: {
        avatar: `http://localhost:4000/images/${ctx.req.session.userId}/${filename}`,
      },
    });

    return new Promise((res, rej) => {
      createReadStream()
        .pipe(writableStream)
        .on("finish", () => res(true))
        .on("error", () => rej(false));
    });
  }
}
