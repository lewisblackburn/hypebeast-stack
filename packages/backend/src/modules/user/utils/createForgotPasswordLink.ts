import { v4 } from "uuid";
import { oneDay } from "../../../constants";
import { redis } from "../../../redis";
import { UserConfirmationPrefixes } from "../../shared/userConfirmationPrefixes";

export const createForgotPasswordLink = async (userId: number) => {
  const token = v4();
  await redis.set(
    UserConfirmationPrefixes.forgotPassword + token,
    userId,
    "ex",
    oneDay
  );

  return `change-password/${token}`;
};
