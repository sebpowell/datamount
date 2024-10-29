import { Account } from "@/packages/server/modules/database/schema/account.schema";
import { User } from "@/packages/server/modules/database/schema/user.schema";
import { IBuyCreditsRequest } from "@/packages/server/modules/account/account-credits/account-credits.schema";
import {
  AccountCreditsRepository,
  accountCreditsRepository,
} from "@/packages/server/modules/account/account-credits/account-credits.repository";
import {
  DatabaseService,
  databaseService,
} from "@/packages/server/modules/database/database.service";
import { AccountRepository } from "@/packages/server/modules/account/account.repository";

class AccountCreditsService {
  private accountCreditsRepository: AccountCreditsRepository;
  private databaseService: DatabaseService;

  constructor(
    accountCreditsRepository: AccountCreditsRepository,
    databaseService: DatabaseService,
  ) {
    this.accountCreditsRepository = accountCreditsRepository;
    this.databaseService = databaseService;
  }
  async getAll({ accountId }: { accountId: Account["id"] }) {
    return await this.accountCreditsRepository.getAllByAccountId({ accountId });
  }

  async add({
    accountId,
    userId,
    dto,
  }: {
    accountId: Account["id"];
    userId: User["id"];
    dto: IBuyCreditsRequest;
  }) {
    await this.databaseService.getClient().transaction(async (tx) => {
      await new AccountCreditsRepository(tx).addCredits(
        accountId,
        userId,
        dto.quantity,
      );
      await new AccountRepository(tx).updateCreditsById(
        accountId,
        dto.quantity,
      );
    });
  }
}

export { AccountCreditsService };

export const accountCreditsService = new AccountCreditsService(
  accountCreditsRepository,
  databaseService,
);
