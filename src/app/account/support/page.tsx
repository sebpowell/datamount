import { AccountHelpPage } from "@/packages/apps/dashboard/pages/AccountHelp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support",
};

export default async function AccountSupport() {
  return <AccountHelpPage />;
}
