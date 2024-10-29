import { api } from "@/packages/server";
import { accountCreditsService } from "@/packages/server/modules/account/account-credits/account-credits.service";
import { accountGuard } from "@/packages/server/modules/account/account.guard";
import { createNextRoute } from "@ts-rest/next";

export const accountCreditsRouter = createNextRoute(api.account.credits, {
  fetchAll: async (args) => {
    const { account } = await accountGuard.guard(args);

    const credits = await accountCreditsService.getAll({
      accountId: account.id,
    });

    return {
      status: 200,
      body: credits,
    };
  },
  purchase: async (args) => {
    const { account, user } = await accountGuard.guard(args);

    await accountCreditsService.add({
      accountId: account.id,
      userId: user.id,
      dto: args.body,
    });

    return {
      status: 200,
      body: { message: "success" },
    };
  },
});
