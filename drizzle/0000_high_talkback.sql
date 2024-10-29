DO $$ BEGIN
 CREATE TYPE "apiRequestStatusEnum" AS ENUM('pending', 'error', 'success');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "endpointsEnum" AS ENUM('autocomplete', 'postcodeLookup');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "role" AS ENUM('admin', 'user');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "accounts" (
	"id" serial PRIMARY KEY NOT NULL,
	"cuid" text NOT NULL,
	"createdBy" integer NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"credits" integer DEFAULT 0 NOT NULL,
	CONSTRAINT "accounts_cuid_unique" UNIQUE("cuid")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "account_users" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" integer NOT NULL,
	"accountId" integer NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "api_keys" (
	"id" serial PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "api_requests" (
	"id" serial PRIMARY KEY NOT NULL,
	"cuid" text NOT NULL,
	"endpoint" "endpointsEnum" NOT NULL,
	"status" "apiRequestStatusEnum" NOT NULL,
	"request" json,
	"response" json,
	"apiKeyId" integer NOT NULL,
	"accountId" integer NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "api_requests_cuid_unique" UNIQUE("cuid")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "credits" (
	"id" serial PRIMARY KEY NOT NULL,
	"cuid" text NOT NULL,
	"createdBy" integer NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"credits" integer DEFAULT 0 NOT NULL,
	"accountId" integer,
	CONSTRAINT "credits_cuid_unique" UNIQUE("cuid")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"image" text NOT NULL,
	"password" varchar NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"lastLoginAt" timestamp,
	"totalLogins" integer DEFAULT 0 NOT NULL,
	"role" "role",
	"currentAccountId" integer
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "unique_idx" ON "users" ("email");--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "account_users" ADD CONSTRAINT "account_users_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "account_users" ADD CONSTRAINT "account_users_accountId_accounts_id_fk" FOREIGN KEY ("accountId") REFERENCES "accounts"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "api_requests" ADD CONSTRAINT "api_requests_apiKeyId_api_keys_id_fk" FOREIGN KEY ("apiKeyId") REFERENCES "api_keys"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "api_requests" ADD CONSTRAINT "api_requests_accountId_accounts_id_fk" FOREIGN KEY ("accountId") REFERENCES "accounts"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "credits" ADD CONSTRAINT "credits_accountId_accounts_id_fk" FOREIGN KEY ("accountId") REFERENCES "accounts"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users" ADD CONSTRAINT "users_currentAccountId_accounts_id_fk" FOREIGN KEY ("currentAccountId") REFERENCES "accounts"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
