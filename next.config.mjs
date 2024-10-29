import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcPlugins: [["typewind/swc", {}]],
  },
};

export default withSentryConfig(
  nextConfig,
  {
    silent: true,
    org: "bitmap-ltd",
    project: "datamount",
  },
  {
    widenClientFileUpload: true,
    transpileClientSDK: true,
    tunnelRoute: "/monitoring",
    hideSourceMaps: true,
    disableLogger: true,
    automaticVercelMonitors: true,
  },
);
