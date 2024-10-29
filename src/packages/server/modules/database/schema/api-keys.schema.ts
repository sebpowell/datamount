import { accounts } from "@/packages/server/modules/database/schema/account.schema";
import { users } from "@/packages/server/modules/database/schema/user.schema";
import { relations } from "drizzle-orm";
import {
  index,
  integer,
  json,
  pgEnum,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { pgTable, serial } from "drizzle-orm/pg-core";
import { createSelectSchema } from "drizzle-zod";
import { TypeOf, object, z } from "zod";
import { createId } from "@paralleldrive/cuid2";
import { dateToString } from "@/packages/server/modules/database/types/date.type";

export const apiKeys = pgTable(
  "api_keys",
  {
    id: serial("id").primaryKey(),
    cuid: text("cuid")
      .$defaultFn(() => createId())
      .notNull()
      .unique(),
    name: varchar("name").notNull(),
    key: varchar("key").notNull().unique(),
    accountId: integer("accountId")
      .notNull()
      .references(() => accounts.id),
    createdBy: integer("createdBy")
      .notNull()
      .references(() => users.id),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    deletedAt: timestamp("deletedAt"),
    lastUsedAt: timestamp("lastUsedAt"),
    domains: json("domains").$type<string[]>().default([]).notNull(),
  },
  (table) => {
    return {
      keyIdx: index("keyIdx").on(table.name),
    };
  },
);

type IApiKey = typeof apiKeys.$inferSelect;

type ICreateUpdateApiKey = Omit<
  typeof apiKeys.$inferInsert,
  "id" | "createdAt"
>;

export const apiKeysRelations = relations(apiKeys, ({ one, many }) => ({
  account: one(accounts, {
    fields: [apiKeys.accountId],
    references: [accounts.id],
  }),
  createdBy: one(users, {
    fields: [apiKeys.createdBy],
    references: [users.id],
  }),
  requests: many(apiRequests),
}));

const FetchApiKey = createSelectSchema(apiKeys).merge(
  object({
    createdAt: dateToString,
    lastUsedAt: dateToString.nullable(),
  }),
);

type IFetchApiKey = TypeOf<typeof FetchApiKey>;

const FetchApiKeys = FetchApiKey.array();

type IFetchApiKeys = TypeOf<typeof FetchApiKeys>;

export { FetchApiKey, FetchApiKeys };

export type { IFetchApiKey, IFetchApiKeys, IApiKey, ICreateUpdateApiKey };

enum RequestStatusEnum {
  "success" = "success",
  "error" = "error",
  "pending" = "pending",
}

export const apiRequestStatusEnum = pgEnum("apiRequestStatusEnum", [
  RequestStatusEnum.pending,
  RequestStatusEnum.error,
  RequestStatusEnum.success,
]);

export enum DataServiceEndpoints {
  "addressMatch" = "addressMatch",
  "areaLookup" = "areaLookup",
  "areaProfile" = "areaProfile",
  "addressCleanse" = "addressCleanse",
  "autocomplete" = "autocomplete",
  "property" = "property",
  "postcodeLookup" = "postcodeLookup",
}

export const endpointsEnum = pgEnum("endpointsEnum", [
  DataServiceEndpoints.addressMatch,
  DataServiceEndpoints.areaLookup,
  DataServiceEndpoints.areaProfile,
  DataServiceEndpoints.autocomplete,
  DataServiceEndpoints.addressCleanse,
  DataServiceEndpoints.property,
  DataServiceEndpoints.postcodeLookup,
]);

export const apiRequests = pgTable("api_requests", {
  id: serial("id").primaryKey(),
  cuid: text("cuid")
    .$defaultFn(() => createId())
    .notNull()
    .unique(),
  endpoint: endpointsEnum("endpoint").notNull(),
  status: apiRequestStatusEnum("status").notNull(),
  request: json("request"),
  response: json("response"),
  apiKeyId: integer("apiKeyId")
    .references(() => apiKeys.id)
    .notNull(),
  accountId: integer("accountId")
    .references(() => accounts.id)
    .notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  duration: integer("duration"),
});

export const apiRequestsRelations = relations(apiRequests, ({ one }) => ({
  apiKey: one(apiKeys, {
    fields: [apiRequests.apiKeyId],
    references: [apiKeys.id],
  }),
}));

const FetchApiRequest = createSelectSchema(apiRequests).merge(
  object({
    apiKey: FetchApiKey.pick({ cuid: true, key: true }),
    createdAt: dateToString,
  }),
);

type IFetchApiRequest = TypeOf<typeof FetchApiRequest>;

const FetchApiRequests = FetchApiRequest.array();

type IFetchApiRequests = TypeOf<typeof FetchApiRequests>;

type ICreateApiRequest = typeof apiRequests.$inferInsert;

export { FetchApiRequest, FetchApiRequests, RequestStatusEnum };

export type { IFetchApiRequest, ICreateApiRequest, IFetchApiRequests };
