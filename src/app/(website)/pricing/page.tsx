import { PricingPage } from "@/packages/apps/site/pages/website/Pricing";
import { contentService } from "@/packages/server/modules/content/content.service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  openGraph: {
    title: "Pricing",
  },
};

export default async function Pricing() {
  const faqs = await contentService.getFAQs();

  return <PricingPage faqs={faqs.items} />;
}
