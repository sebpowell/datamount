import { accounts } from "@/packages/server/modules/database/schema/account.schema";
import { db } from "@/packages/server/modules/database/drizzle";
import { BadRequestError } from "@/packages/server/exceptions";
import { ErrorCodes } from "@/packages/server/exceptions/exception-codes.enum";
import { AuthGuard } from "@/packages/server/modules/auth/auth.guard";
import { userService } from "@/packages/server/modules/users/users.service";
import { eq } from "drizzle-orm";
import { IncomingHttpHeaders } from "http";
import { NextApiRequest, NextApiResponse } from "next";

export class AccountGuard {
  async guard(
    args: {
      headers: IncomingHttpHeaders;
    } & {
      req: NextApiRequest;
      res: NextApiResponse;
    },
  ) {
    const session = await AuthGuard(args);

    if (!session.user.email)
      throw new BadRequestError(ErrorCodes.auth_user_email_missing);

    const user = await userService.findOneByEmail(session.user.email);

    if (!user?.currentAccountId)
      throw new BadRequestError(ErrorCodes.auth_user_no_account);

    const account = await db.query.accounts.findFirst({
      where: eq(accounts.id, user?.currentAccountId),
    });

    if (!account) throw new BadRequestError(ErrorCodes.account_does_not_exist);

    return { account, user };
  }
}

export const accountGuard = new AccountGuard();
