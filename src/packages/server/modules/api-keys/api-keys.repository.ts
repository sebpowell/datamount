import { VercelPgDatabase } from "drizzle-orm/vercel-postgres";
import * as schema from "@/packages/server/modules/database/schema/schema";
import { and, eq, isNull } from "drizzle-orm";
import { db } from "@/packages/server/modules/database/drizzle";

class ApiKeysRepository {
  private db: VercelPgDatabase<typeof schema>;

  constructor(db: VercelPgDatabase<typeof schema>) {
    this.db = db;
  }

  async update({
    keyId,
    values,
  }: {
    keyId: number;
    values: Partial<schema.ICreateUpdateApiKey>;
  }) {
    return await db
      .update(schema.apiKeys)
      .set({ ...values })
      .where(eq(schema.apiKeys.accountId, keyId));
  }

  async delete(cuid: string) {
    return await db
      .update(schema.apiKeys)
      .set({ deletedAt: new Date() })
      .where(eq(schema.apiKeys.cuid, cuid));
  }

  async getByCuid({ accountId, cuid }: { accountId: number; cuid: string }) {
    return await this.db.query.apiKeys.findFirst({
      where: and(
        eq(schema.apiKeys.cuid, cuid),
        isNull(schema.apiKeys.deletedAt),
        eq(schema.apiKeys.accountId, accountId),
      ),
    });
  }

  async getByKey({ key }: { key: string }) {
    return await this.db.query.apiKeys.findFirst({
      where: and(eq(schema.apiKeys.key, key), isNull(schema.apiKeys.deletedAt)),
    });
  }

  async getAllByAccountId({ accountId }: { accountId: number }) {
    return await db
      .select()
      .from(schema.apiKeys)
      .where(
        and(
          eq(schema.apiKeys.accountId, accountId),
          isNull(schema.apiKeys.deletedAt),
        ),
      );
  }
}

export { ApiKeysRepository };

export const apiKeysRepository = new ApiKeysRepository(db);
