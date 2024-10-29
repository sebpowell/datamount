import { contentService } from "@/packages/server/modules/content/content.service";
import { Metadata } from "next";
import { PageFAQs } from "@/packages/apps/site/pages/website/FAQs";

export const metadata: Metadata = {
  title: "FAQs",
  openGraph: {
    title: "FAQs",
  },
};

export default async function FAQs() {
  const faqs = await contentService.getFAQs();

  return <PageFAQs faqs={faqs.items} />;
}
