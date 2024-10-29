import { AccountRequestsPage } from "@/packages/apps/dashboard/pages/AccountLogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Logs",
};

export default async function AccountRequests() {
  return <AccountRequestsPage />;
}
