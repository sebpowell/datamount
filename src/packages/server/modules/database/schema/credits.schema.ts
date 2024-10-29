import { accounts } from "@/packages/server/modules/database/schema/account.schema";
import { dateToString } from "@/packages/server/modules/database/types/date.type";
import { users } from "@/packages/server/modules/database/schema/user.schema";
import { createId } from "@paralleldrive/cuid2";
import { relations } from "drizzle-orm";
import { text, timestamp } from "drizzle-orm/pg-core";
import { pgTable, serial, integer } from "drizzle-orm/pg-core";
import { createSelectSchema } from "drizzle-zod";
import { TypeOf, object } from "zod";

const credits = pgTable("credits", {
  id: serial("id").primaryKey(),
  cuid: text("cuid")
    .$defaultFn(() => createId())
    .notNull()
    .unique(),
  createdBy: integer("createdBy").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  credits: integer("credits").notNull().default(0),
  accountId: integer("accountId").references(() => accounts.id),
});

const FetchAccountCredits = createSelectSchema(credits)
  .merge(
    object({
      createdAt: dateToString,
    }),
  )
  .array();

type IFetchAccountCredits = TypeOf<typeof FetchAccountCredits>;

const creditsRelations = relations(credits, ({ one }) => ({
  account: one(accounts, {
    fields: [credits.accountId],
    references: [accounts.id],
  }),
  createdBy: one(users, {
    fields: [credits.createdBy],
    references: [users.id],
  }),
}));

export { creditsRelations, credits, FetchAccountCredits };

export type { IFetchAccountCredits };
