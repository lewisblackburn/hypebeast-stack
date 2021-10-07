import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  log: ["query", `warn`, `error`],
});

// query time
prisma.$use(async (params, next) => {
  const before = Date.now();
  const result = await next(params);
  const after = Date.now();
  console.log(
    `Query ${params.model}.${params.action} took ${after - before}ms`
  );
  return result;
});

// max query return limit
prisma.$use((params, next) => {
  const limit = 20;
  const isNested = !!params.args.select;
  const isFindMany = params.action === "findMany";
  if (!isNested && !isFindMany) return next(params);

  if (isNested) {
    const key = Object.keys(params.args.select)[0];
    if (
      params.args.select[key]?.take > limit ||
      Object.entries(params.args.select[key]).length === 0 // if not specified
    )
      params.args.select[key].take = limit;
  }

  if (isFindMany) {
    if (params.args.take > limit || Object.entries(params.args).length === 0)
      params.args.take = limit;
  }

  return next(params);
});
