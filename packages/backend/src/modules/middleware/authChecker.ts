import { GraphQLError } from "graphql";
import { AuthChecker, MiddlewareFn } from "type-graphql";
import { Context } from "../../interfaces/context";

// create auth checker function
export const authChecker: AuthChecker<Context> = async ({ context }, roles) => {
  const user = context.req.session.userId;
  const role = context.req.session.role;

  // if no user in session (not logged in)
  if (!user) return false;
  // if user doesn't have a role (theoretically unhittable)
  if (!role) return false;

  if (roles.length === 0) {
    // if `@Authorized()`, check only if user exists
    return user !== undefined;
  }

  // there are some roles defined now

  if (roles.includes(role)) {
    // grant access if the roles overlap
    return true;
  }

  // no roles matched, restrict access
  return false;
};
