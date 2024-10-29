import { authOptions } from "@/packages/server/auth/auth";
import { UnauthorisedError } from "@/packages/server/exceptions";
import { ErrorCodes } from "@/packages/server/exceptions/exception-codes.enum";
import { IncomingHttpHeaders } from "http";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

export const AuthGuard = async (
  args: {
    headers: IncomingHttpHeaders;
  } & {
    req: NextApiRequest;
    res: NextApiResponse;
  },
) => {
  const session = await getServerSession(args.req, args.res, authOptions);

  if (!session) {
    throw new UnauthorisedError(ErrorCodes.auth_user_not_authenticated);
  }

  return session;
};
