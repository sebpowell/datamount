import "./globals.css";
import { LayoutRoot } from "@/packages/components/layouts/LayoutRoot";
import { SiteConfig } from "@/packages/config/global.config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` || "http://localhost:3000",
  ),
  title: {
    template: `%s • ${SiteConfig.site_name}`,
    default: SiteConfig.site_name,
  },
  openGraph: {
    title: {
      template: `%s | ${SiteConfig.site_name}`,
      default: SiteConfig.site_name,
    },
    siteName: SiteConfig.site_name,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutRoot>{children}</LayoutRoot>;
}
