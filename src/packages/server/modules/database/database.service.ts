import { VercelPgDatabase } from "drizzle-orm/vercel-postgres";
import * as schema from "@/packages/server/modules/database/schema/schema";
import { db } from "@/packages/server/modules/database/drizzle";

class DatabaseService {
  private client;

  constructor({ database }: { database: VercelPgDatabase<typeof schema> }) {
    this.client = database;
  }

  getClient() {
    return this.client;
  }
}

export { DatabaseService };

export const databaseService = new DatabaseService({ database: db });
