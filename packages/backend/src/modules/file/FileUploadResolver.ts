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
    console.log(ctx.req.session.userId);
    const { createReadStream, filename } = file;
    const filepath = `${__dirname}/../../../images/`;
    try {
      fs.mkdirSync(filepath + ctx.req.session.userId);
    } catch (error) {}
    const writableStream = createWriteStream(
      `/${filepath}/${ctx.req.session.userId}/${filename}`,
      {
        autoClose: true,
      }
    );
    return new Promise((res, rej) => {
      createReadStream()
        .pipe(writableStream)
        .on("finish", () => res(true))
        .on("error", () => rej(false));
    });
  }
}
