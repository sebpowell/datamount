import { accountsUsers } from "@/packages/server/modules/database/schema/account-user.schema";
import { apiKeys } from "@/packages/server/modules/database/schema/api-keys.schema";
import { credits } from "@/packages/server/modules/database/schema/credits.schema";
import { createId } from "@paralleldrive/cuid2";
import { relations } from "drizzle-orm";
import { text, timestamp } from "drizzle-orm/pg-core";
import { pgTable, serial, integer } from "drizzle-orm/pg-core";

export const accounts = pgTable("accounts", {
  id: serial("id").primaryKey(),
  cuid: text("cuid")
    .$defaultFn(() => createId())
    .notNull()
    .unique(),
  createdBy: integer("createdBy").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  credits: integer("credits").notNull().default(0),
});

export type Account = typeof accounts.$inferSelect;

export const accountRelations = relations(accounts, ({ many }) => ({
  keys: many(apiKeys),
  accountUsers: many(accountsUsers),
  credits: many(credits),
}));
