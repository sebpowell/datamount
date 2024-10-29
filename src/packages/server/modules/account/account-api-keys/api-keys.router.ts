import { api } from "@/packages/server";
import { accountGuard } from "@/packages/server/modules/account/account.guard";
import { ApiKeyGuard } from "@/packages/server/modules/account/account-api-keys/api-key.guard";
import { apiKeyService } from "@/packages/server/modules/account/account-api-keys/api-keys.service";
import { createNextRoute } from "@ts-rest/next";

export const apiKeysRouter = createNextRoute(api.account.keys, {
  create: async (args) => {
    const { account, user } = await accountGuard.guard(args);

    const key = await apiKeyService.create({
      accountId: account.id,
      userId: user.id,
      name: args.body.name,
    });

    return {
      status: 200,
      body: key,
    };
  },
  delete: async (args) => {
    const { account } = await accountGuard.guard(args);

    await ApiKeyGuard({
      accountId: account.id,
      keyCuid: args.params.cuid,
    });

    await apiKeyService.delete(args.params.cuid);

    return {
      status: 200,
      body: null,
    };
  },
  findOneByCuid: async (args) => {
    const { account } = await accountGuard.guard(args);

    const { key } = await ApiKeyGuard({
      accountId: account.id,
      keyCuid: args.params.cuid,
    });

    return {
      status: 200,
      body: key,
    };
  },
  updateName: async () => {
    return {
      status: 200,
      body: null,
    };
  },
  fetchAll: async (args) => {
    const { account } = await accountGuard.guard(args);

    const keys = await apiKeyService.getAll({ accountId: account.id });

    return {
      status: 200,
      body: keys,
    };
  },
});
