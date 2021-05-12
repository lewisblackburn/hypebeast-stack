import { v4 } from "uuid";
import { oneDay } from "../../../constants";
import { redis } from "../../../redis";

export const createConfirmationLink = async (userId: number) => {
  const token = v4();
  await redis.set(token, userId, "ex", oneDay); // 1 day expiration

  return `confirm/${token}`;
};
