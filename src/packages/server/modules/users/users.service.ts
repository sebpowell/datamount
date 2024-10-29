import { accountsUsers } from "@/packages/server/modules/database/schema/account-user.schema";
import { Account } from "@/packages/server/modules/database/schema/account.schema";
import {
  User,
  users,
} from "@/packages/server/modules/database/schema/user.schema";
import {
  AccountCreditsService,
  accountCreditsService,
} from "@/packages/server/modules/account/account-credits/account-credits.service";
import { AccountRepository } from "@/packages/server/modules/account/account.repository";
import { IRegisterUserSchema } from "@/packages/server/modules/auth/schemas/register-user.schema";
import {
  DatabaseService,
  databaseService,
} from "@/packages/server/modules/database/database.service";
import {
  UserRepository,
  userRepository,
} from "@/packages/server/modules/users/user.repository";
import { eq } from "drizzle-orm";
import { pricingConfig } from "@/packages/config/pricing.config";

export class UsersService {
  private userRepository: UserRepository;
  private accountCreditsService: AccountCreditsService;
  private databaseService: DatabaseService;

  constructor({
    userRepository,
    accountCreditsService,
    databaseService,
  }: {
    userRepository: UserRepository;
    accountCreditsService: AccountCreditsService;
    databaseService: DatabaseService;
  }) {
    this.userRepository = userRepository;
    this.accountCreditsService = accountCreditsService;
    this.databaseService = databaseService;
  }

  async create(createUserDto: IRegisterUserSchema) {
    let user: User;
    let account: Account;

    await this.databaseService.getClient().transaction(async (tx) => {
      const userRepository = new UserRepository(tx);

      const accountRepository = new AccountRepository(tx);

      user = await userRepository.create(
        createUserDto.email,
        createUserDto.password,
      );

      account = await accountRepository.create(user.id);

      await this.accountCreditsService.add({
        accountId: account.id,
        userId: user.id,
        dto: { quantity: pricingConfig.freeTrialCredits },
      });
    });

    await this.databaseService.getClient().transaction(async (tx) => {
      await tx
        .update(users)
        .set({ currentAccountId: account.id })
        .where(eq(users.id, user.id));

      await tx.insert(accountsUsers).values({
        accountId: account.id,
        userId: user.id,
      });
    });
  }

  async findOneById(id: number) {
    return await this.userRepository.findOneById({ id });
  }

  async findOneByEmail(email: string) {
    return await this.userRepository.findOneByEmail(email);
  }

  async getAll() {
    return await this.userRepository.getAll();
  }
}

export const userService = new UsersService({
  userRepository,
  accountCreditsService,
  databaseService: databaseService,
});
