import { ContactPage } from "@/packages/apps/site/pages/website/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  openGraph: {
    title: "Contact",
  },
};

export default async function Contact() {
  return <ContactPage />;
}
