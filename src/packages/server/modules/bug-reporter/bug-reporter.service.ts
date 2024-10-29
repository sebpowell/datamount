import * as Sentry from "@sentry/nextjs";

class BugReporterService {
  report(message: unknown) {
    Sentry.captureException(message);
  }
}

const bugReporterService = new BugReporterService();

export { BugReporterService, bugReporterService };
