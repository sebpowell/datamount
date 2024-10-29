import { Account } from "@/packages/server/modules/database/schema/account.schema";
import {
  IApiKey,
  apiKeys,
} from "@/packages/server/modules/database/schema/api-keys.schema";
import { User } from "@/packages/server/modules/database/schema/user.schema";
import { db } from "@/packages/server/modules/database/drizzle";
import crypto from "crypto";
import {
  ApiKeysRepository,
  apiKeysRepository,
} from "@/packages/server/modules/api-keys/api-keys.repository";

export class ApiKeysService {
  private apiKeysRepository: ApiKeysRepository;

  constructor(apiKeysRepository: ApiKeysRepository) {
    this.apiKeysRepository = apiKeysRepository;
  }
  generateApiToken() {
    return crypto.randomBytes(24).toString("hex");
  }
  async create({
    accountId,
    userId,
    name,
  }: {
    accountId: IApiKey["accountId"];
    userId: User["id"];
    name: string;
  }) {
    while (true) {
      try {
        const key = await db
          .insert(apiKeys)
          .values({
            accountId,
            createdBy: userId,
            key: this.generateApiToken(),
            name,
          })
          .returning();

        return key[0];
      } catch (error: any) {
        if (error?.code === "23505") {
          continue;
        }

        return error;
      }
    }
  }
  async delete(cuid: string) {
    return await this.apiKeysRepository.delete(cuid);
  }

  async getByCuid({ accountId, cuid }: { accountId: number; cuid: string }) {
    return await this.apiKeysRepository.getByCuid({ accountId, cuid });
  }

  async getAll({ accountId }: { accountId: Account["id"] }) {
    return await this.apiKeysRepository.getAllByAccountId({ accountId });
  }
}

export const apiKeyService = new ApiKeysService(apiKeysRepository);
