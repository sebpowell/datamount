import { VercelPgDatabase } from "drizzle-orm/vercel-postgres";
import * as schema from "@/packages/server/modules/database/schema/schema";
import { desc, eq } from "drizzle-orm";
import { db } from "@/packages/server/modules/database/drizzle";

class ApiRequestRepository {
  private db: VercelPgDatabase<typeof schema>;

  constructor(db: VercelPgDatabase<typeof schema>) {
    this.db = db;
  }
  async create(props: schema.ICreateApiRequest) {
    return await this.db
      .insert(schema.apiRequests)
      .values({
        ...props,
      })
      .returning();
  }

  async getAllByAccount({ accountId }: { accountId: number }) {
    return await this.db.query.apiRequests.findMany({
      where: eq(schema.apiKeys.accountId, accountId),
      orderBy: [desc(schema.apiRequests.createdAt)],
      with: {
        apiKey: {
          columns: {
            cuid: true,
            key: true,
          },
        },
      },
    });
  }

  async update({
    id,
    values,
  }: {
    id: number;
    values: Pick<schema.ICreateApiRequest, "response" | "status" | "duration">;
  }) {
    await this.db
      .update(schema.apiRequests)
      .set({
        ...values,
      })
      .where(eq(schema.apiRequests.id, id));
  }
}

export { ApiRequestRepository };

export const apiRequestRepository = new ApiRequestRepository(db);
