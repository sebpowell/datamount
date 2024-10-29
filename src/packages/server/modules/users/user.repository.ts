import { VercelPgDatabase } from "drizzle-orm/vercel-postgres";
import * as schema from "@/packages/server/modules/database/schema/schema";
import { eq } from "drizzle-orm";
import { db } from "@/packages/server/modules/database/drizzle";

class UserRepository {
  private db: VercelPgDatabase<typeof schema>;

  constructor(db: VercelPgDatabase<typeof schema>) {
    this.db = db;
  }
  async findOneById({ id }: { id: number }) {
    return await this.db.query.users.findFirst({
      where: eq(schema.users.id, id),
    });
  }
  async findOneByEmail(email: string) {
    return await this.db.query.users.findFirst({
      where: eq(schema.users.email, email.toLowerCase()),
      with: {
        accounts: {
          with: {
            account: true,
          },
        },
      },
    });
  }
  async getAll() {
    return await this.db.select().from(schema.users);
  }
  async create(email: string, password: string) {
    const user = await db
      .insert(schema.users)
      .values({
        email,
        password,
        name: "",
        image: "",
      })
      .returning();

    return user[0];
  }

  async transaction<T>(
    callback: (repo: UserRepository) => Promise<T>,
  ): Promise<T> {
    return await this.db.transaction(async (tx) => {
      const transactionRepo = new UserRepository(tx);
      return await callback(transactionRepo);
    });
  }
}

export { UserRepository };

export const userRepository = new UserRepository(db);
