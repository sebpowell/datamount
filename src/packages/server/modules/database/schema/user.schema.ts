import { relations } from "drizzle-orm";
import {
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core";
import { accountsUsers } from "./account-user.schema";
import { accounts } from "@/packages/server/modules/database/schema/account.schema";
import { apiKeys } from "@/packages/server/modules/database/schema/api-keys.schema";
import { createId } from "@paralleldrive/cuid2";

export const rolesEnum = pgEnum("role", ["admin", "user"]);

export const users = pgTable(
  "users",
  {
    id: serial("id").primaryKey(),
    cuid: text("cuid")
      .$defaultFn(() => createId())
      .notNull()
      .unique(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    image: text("image").notNull(),
    password: varchar("password").notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    lastLoginAt: timestamp("lastLoginAt"),
    totalLogins: integer("totalLogins").default(0).notNull(),
    role: rolesEnum("role"),
    currentAccountId: integer("currentAccountId").references(
      () => accounts.id,
      { onDelete: "cascade" },
    ),
  },
  (users) => {
    return {
      uniqueIdx: uniqueIndex("unique_idx").on(users.email),
    };
  },
);

export type User = typeof users.$inferSelect;

export const userRelations = relations(users, ({ many }) => ({
  accounts: many(accountsUsers),
  keys: many(apiKeys),
}));
