"use client";
import { ErrorPage } from "@/packages/apps/site/pages/website/Error";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.log(error);
    // logger.error(error.message);
    // notifyBugReporter(error);
  }, [error]);

  return <ErrorPage />;
}
