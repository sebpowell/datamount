import { BadRequestError } from "@/packages/server/exceptions";
import { ErrorCodes } from "@/packages/server/exceptions/exception-codes.enum";
import { apiKeyService } from "@/packages/server/modules/account/account-api-keys/api-keys.service";

export const ApiKeyGuard = async ({
  accountId,
  keyCuid,
}: {
  accountId: number;
  keyCuid: string;
}) => {
  const key = await apiKeyService.getByCuid({ accountId, cuid: keyCuid });

  if (!key) {
    throw new BadRequestError(ErrorCodes.entity_does_not_exist);
  }

  return { key };
};
