import { AccountDashboard } from "@/packages/apps/dashboard/pages/AccountDashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function Account() {
  return <AccountDashboard />;
}
