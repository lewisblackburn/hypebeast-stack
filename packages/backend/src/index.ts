import { ApolloServer } from "apollo-server-express";
import connectRedis from "connect-redis";
import cors from "cors";
import "dotenv-safe/config";
import express from "express";
import session from "express-session";
import {
  fieldExtensionsEstimator,
  getComplexity,
  simpleEstimator,
} from "graphql-query-complexity";
import { graphqlUploadExpress } from "graphql-upload";
import Redis from "ioredis";
import path from "path";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { COOKIE_NAME, __prod__ } from "./constants";
import { prisma } from "./db";
import { PostCrudResolver } from "./generated/type-graphql";
import { Context } from "./interfaces/context";
import { authChecker } from "./middleware/authChecker";

const main = async () => {
  const app = express();
  const PORT = parseInt(process.env.PORT || "4000");

  prisma.$use(async (params, next) => {
    const before = Date.now();
    const result = await next(params);
    const after = Date.now();
    console.log(
      `Query ${params.model}.${params.action} took ${after - before}ms`
    );
    return result;
  });

  prisma.$use((params, next) => {
    const limit = 20;
    const isNested = params.args.select;
    const isFindMany = params.action === "findMany";
    if (!isNested && !isFindMany) return next(params);

    if (isNested) {
      const key = Object.keys(params.args.select)[0];
      if (params.args.select[key]?.take > limit)
        params.args.select[key].take = limit;
    }
    if (isFindMany) {
      if (params.args.take > limit) params.args.take = limit;
    }

    return next(params);
  });

  const RedisStore = connectRedis(session);
  const redis = new Redis(process.env.REDIS_URL);

  const schema = await buildSchema({
    resolvers: [PostCrudResolver],
    authChecker: authChecker,
  });

  app.set("trust proxy", 1);
  app.use(
    cors({
      origin: process.env.CORS_ORIGIN,
      credentials: true,
    })
  );
  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({
        client: redis,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
        httpOnly: true,
        sameSite: "lax", // csrf
        secure: __prod__, // cookie only works in https
        domain: __prod__ ? ".zxffo.cc" : undefined,
      },
      saveUninitialized: false,
      secret: process.env.SESSION_SECRET || "",
      resave: false,
    })
  );

  app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));
  app.use("/images", express.static(path.join(__dirname, "../images")));

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req, res }): Context => ({ prisma, req, res, redis }),
    uploads: false,
    plugins: [
      {
        requestDidStart: () => ({
          didResolveOperation({ request, document }) {
            const complexity = getComplexity({
              schema,
              query: document,
              variables: request.variables,
              estimators: [
                fieldExtensionsEstimator(),
                simpleEstimator({ defaultComplexity: 1 }),
              ],
            });
            const limit = 30;
            if (complexity > limit) {
              throw new Error(
                `Sorry, too complicated query! ${complexity} is over ${limit} that is the max allowed complexity.`
              );
            }
            // console.log("Used query complexity points:", complexity);
          },
        }),
      },
    ],
  });

  apolloServer.applyMiddleware({
    app,
    cors: __prod__,
  });

  app.listen(PORT, () => {
    console.log(`server started on localhost:${PORT}`);
  });
};

main().catch((err) => {
  console.error(err);
});
