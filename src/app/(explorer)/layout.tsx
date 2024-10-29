import { LayoutProperty } from "@/packages/apps/explorer/layouts/LayoutProperty";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutProperty>{children}</LayoutProperty>;
}
