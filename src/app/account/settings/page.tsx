import { AccountSettingsPage } from "@/packages/apps/dashboard/pages/AccountSettings";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings",
};

export default async function AccountSettings() {
  return <AccountSettingsPage />;
}
