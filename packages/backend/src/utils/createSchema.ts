import { buildSchema } from "type-graphql";
import { UserCrudResolver } from "../generated/type-graphql";
import { authChecker } from "../modules/middleware/authChecker";

export const createSchema = () =>
  buildSchema({
    resolvers: [UserCrudResolver],
    authChecker: authChecker,
  });
