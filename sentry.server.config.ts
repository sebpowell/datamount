import { env } from "@/env.mjs";
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: env.SENTRY_DSN,
  tracesSampleRate: 1,
  debug: true,
});
