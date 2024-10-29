ALTER TABLE "users" DROP CONSTRAINT "users_currentAccountId_accounts_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users" ADD CONSTRAINT "users_currentAccountId_accounts_id_fk" FOREIGN KEY ("currentAccountId") REFERENCES "accounts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
