import { AuthChecker } from "type-graphql";
import { Context } from "../interfaces/context";

// create auth checker function
export const authChecker: AuthChecker<Context> = async ({ context }, roles) => {
  const role = context.req.session.role;
  const user = context.req.session.userId;

  // if no user in session (not logged in)
  if (!context.req.session.userId) return false;

  if (roles.length === 0) {
    // if `@Authorized()`, check only if user exists
    return user !== undefined;
  }
  // there are some roles defined now

  if (!user || !role) {
    // and if no user, restrict access
    return false;
  }

  if (roles.includes(role)) {
    // grant access if the roles overlap
    return true;
  }

  // no roles matched, restrict access
  return false;
};
