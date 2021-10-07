import fs, { createWriteStream } from "fs";
import { FileUpload, GraphQLUpload } from "graphql-upload";
import { Arg, Ctx, Mutation, registerEnumType, Resolver } from "type-graphql";
import { Context } from "../../interfaces/context";

enum UploadType {
  AVATAR = "AVATAR",
  THUMBNAIL = "THUMBNAIL",
}

registerEnumType(UploadType, {
  name: "UploadType",
  description: "File Upload Type",
  valuesConfig: {
    AVATAR: {
      description: "Filepath for avatars",
    },
    THUMBNAIL: {
      description: "Filepath for thumbnails",
    },
  },
});

@Resolver()
export class FileUploadResolver {
  @Mutation(() => Boolean)
  async upload(
    @Ctx() ctx: Context,
    @Arg("file", () => GraphQLUpload) file: FileUpload,
    @Arg("type", (type) => UploadType) type: UploadType
  ): Promise<boolean> {
    const { createReadStream, filename } = file;
    const filepath = `${__dirname}/../../../images`;

    const folder = {
      [UploadType.AVATAR]: filepath + ctx.req.session.userId,
      [UploadType.THUMBNAIL]: `${filepath}/thumbnail`,
    };

    const location = {
      [UploadType.AVATAR]: `${filepath}/${ctx.req.session.userId}/${filename}`,
      [UploadType.THUMBNAIL]: `${filepath}/thumbnail/${filename}`,
    };

    try {
      fs.mkdirSync(folder[type]);
    } catch (error) {}

    const writableStream = createWriteStream(location[type], {
      autoClose: true,
    });

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
