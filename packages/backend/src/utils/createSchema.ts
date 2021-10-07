import { buildSchema } from "type-graphql";
import {
  FindManyPostResolver,
  PostRelationsResolver,
  UserRelationsResolver,
} from "../generated/type-graphql";
import { FileUploadResolver } from "../modules/file/FileUploadResolver";
import { authChecker } from "../modules/middleware/authChecker";
import { PostResolver } from "../modules/post/Post";
import { ChangePasswordResolver } from "../modules/user/ChangePassword";
import { ConfirmUserResolver } from "../modules/user/ConfirmUser";
import { FollowResolver } from "../modules/user/Follow";
import { ForgotPasswordResolver } from "../modules/user/ForgotPassword";
import { LoginResolver } from "../modules/user/Login";
import { LogoutResolver } from "../modules/user/Logout";
import { MeResolver } from "../modules/user/Me";
import { RegisterResolver } from "../modules/user/Register";
import { UserResolver } from "../modules/user/User";

export const createSchema = async () =>
  buildSchema({
    resolvers: [
      RegisterResolver,
      ConfirmUserResolver,
      ForgotPasswordResolver,
      ChangePasswordResolver,
      LoginResolver,
      UserResolver,
      LogoutResolver,
      MeResolver,
      PostResolver,
      FindManyPostResolver,
      FileUploadResolver,
      FollowResolver,
      UserRelationsResolver,
      PostRelationsResolver,
    ],
    authChecker: authChecker,
  });
