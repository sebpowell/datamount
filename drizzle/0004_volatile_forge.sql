ALTER TABLE "api_keys" ADD COLUMN "domains" json DEFAULT '[]'::json NOT NULL;