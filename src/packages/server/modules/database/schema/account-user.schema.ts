import { relations } from "drizzle-orm";
import { timestamp } from "drizzle-orm/pg-core";
import { accounts } from "./account.schema";
import { users } from "./user.schema";
import { pgTable, serial, integer } from "drizzle-orm/pg-core";

export const accountsUsers = pgTable("account_users", {
  id: serial("id").primaryKey(),
  userId: integer("userId")
    .notNull()
    .references(() => users.id),
  accountId: integer("accountId")
    .notNull()
    .references(() => accounts.id),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type AccountUser = typeof accountsUsers.$inferSelect;

export const accountsUsersRelations = relations(accountsUsers, ({ one }) => ({
  account: one(accounts, {
    fields: [accountsUsers.accountId],
    references: [accounts.id],
  }),
  user: one(users, {
    fields: [accountsUsers.userId],
    references: [users.id],
  }),
}));
