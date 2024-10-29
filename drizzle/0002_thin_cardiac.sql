ALTER TABLE "users" ADD COLUMN "cuid" text NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_cuid_unique" UNIQUE("cuid");