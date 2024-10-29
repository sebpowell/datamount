import { AccountBillingPage } from "@/packages/apps/dashboard/pages/AccountBilling";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Billing",
};
export default async function AccountBilling() {
  return <AccountBillingPage />;
}
