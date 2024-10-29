import {
  Account,
  accounts,
} from "@/packages/server/modules/database/schema/account.schema";
import { User } from "@/packages/server/modules/database/schema/user.schema";
import { eq, sql } from "drizzle-orm";
import { VercelPgDatabase } from "drizzle-orm/vercel-postgres";
import * as schema from "@/packages/server/modules/database/schema/schema";
import { databaseService } from "@/packages/server/modules/database/database.service";

class AccountRepository {
  private db: VercelPgDatabase<typeof schema>;

  constructor(db: VercelPgDatabase<typeof schema>) {
    this.db = db;
  }
  async create(createdBy: User["id"]) {
    const account = await this.db
      .insert(accounts)
      .values({
        createdBy,
      })
      .returning();

    return account[0];
  }
  async findOneById(accountId: Account["id"]) {
    return await this.db.query.accounts.findFirst({
      where: eq(accounts.id, accountId),
    });
  }

  async updateCreditsById(accountId: Account["id"], credits: number) {
    return await this.db
      .update(accounts)
      .set({ credits: sql`${accounts.credits} + ${credits}` })
      .where(eq(accounts.id, accountId))
      .returning();
  }
}

export { AccountRepository };

export const accountRepository = new AccountRepository(
  databaseService.getClient(),
);
