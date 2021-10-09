import { PrismaClient, Role } from "@prisma/client";
import { Request, Response } from "express";
import { Session } from "express-session";
import { Redis } from "ioredis";

export interface Context {
  prisma: PrismaClient;
  req: Request & {
    session: {
      userId?: number;
      role?: Role;
      confirmed?: Boolean;
    } & Session;
  };
  res: Response;
  redis: Redis;
}
