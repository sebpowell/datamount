import { env } from "@/env.mjs";
import type { Config } from "drizzle-kit";

export default {
  schema: "./src/lib/database/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: env.POSTGRES_URL,
  },
} satisfies Config;
