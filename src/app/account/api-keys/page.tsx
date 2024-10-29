import { AccountApiKeysPage } from "@/packages/apps/dashboard/pages/AccountApiKeys";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "API Keys",
};
export default async function AccountApiKeys() {
  return <AccountApiKeysPage />;
}
