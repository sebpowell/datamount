import { LayoutAccount } from "@/packages/apps/dashboard/layouts/LayoutAccount";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutAccount>{children}</LayoutAccount>;
}
