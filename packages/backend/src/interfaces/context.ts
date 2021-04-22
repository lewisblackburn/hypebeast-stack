import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { Session } from "express-session";
import { Redis } from "ioredis";

export interface Context {
  prisma: PrismaClient;
  req: Request & {
    session: {
      userId?: number;
      role?: "USER" | "ADMIN";
    } & Session;
  };
  res: Response;
  redis: Redis;
}
