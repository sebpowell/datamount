ALTER TABLE "api_keys" ADD COLUMN "cuid" text NOT NULL;--> statement-breakpoint
ALTER TABLE "api_keys" ADD COLUMN "name" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "api_keys" ADD COLUMN "key" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "api_keys" ADD COLUMN "accountId" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "api_keys" ADD COLUMN "createdBy" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "api_keys" ADD COLUMN "createdAt" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "api_keys" ADD CONSTRAINT "api_keys_accountId_accounts_id_fk" FOREIGN KEY ("accountId") REFERENCES "accounts"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "api_keys" ADD CONSTRAINT "api_keys_createdBy_users_id_fk" FOREIGN KEY ("createdBy") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "api_keys" ADD CONSTRAINT "api_keys_cuid_unique" UNIQUE("cuid");--> statement-breakpoint
ALTER TABLE "api_keys" ADD CONSTRAINT "api_keys_key_unique" UNIQUE("key");