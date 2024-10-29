import { LayoutSite } from "@/packages/apps/site/layouts/LayoutSite";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutSite>{children}</LayoutSite>;
}
