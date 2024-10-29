import { createEnv } from "@t3-oss/env-nextjs";
import { string } from "zod";

const env = createEnv({
  client: {
    NEXT_PUBLIC_SENTRY_DSN: string().optional(),
    NEXT_PUBLIC_DATA_SERVICE_API_KEY: string(),
    NEXT_PUBLIC_GOOGLE_API_KEY: string(),
  },
  server: {
    POSTGRES_URL: string(),
    RESEND_API_KEY: string(),
    CONTENTFUL_SPACE_ID: string(),
    CONTENTFUL_CONTENT_API_TOKEN: string(),
    SENTRY_DSN: string().optional(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_DATA_SERVICE_API_KEY:
      process.env.NEXT_PUBLIC_DATA_SERVICE_API_KEY,
    NEXT_PUBLIC_GOOGLE_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  },
});

export { env };
