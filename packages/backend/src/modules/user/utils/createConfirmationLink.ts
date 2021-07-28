import { v4 } from "uuid";
import { oneDay } from "../../../constants";
import { redis } from "../../../redis";
import { UserConfirmationPrefixes } from "../../shared/userConfirmationPrefixes";

export const createConfirmationLink = async (userId: number) => {
  const token = v4();
  await redis.set(
    UserConfirmationPrefixes.confirmUser + token,
    userId,
    "ex",
    oneDay
  ); // 1 day expiration

  return `confirm/${token}`;
};
