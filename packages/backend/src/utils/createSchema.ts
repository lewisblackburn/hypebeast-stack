import { buildSchema } from "type-graphql";
import { UserRelationsResolver } from "../generated/type-graphql";
import { authChecker } from "../modules/middleware/authChecker";
import { ConfirmUserResolver } from "../modules/user/ConfirmUser";
import { MeResolver } from "../modules/user/Me";
import { RegisterResolver } from "../modules/user/Register";

export const createSchema = async () =>
  buildSchema({
    resolvers: [
      RegisterResolver,
      ConfirmUserResolver,
      MeResolver,
      UserRelationsResolver,
    ],
    authChecker: authChecker,
  });
