import { SiteConfig } from "@/packages/config/global.config";
import { PrivacyPage } from "@/packages/apps/site/pages/website/Privacy";
import { contentService } from "@/packages/server/modules/content/content.service";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
  return await contentService.getPageMetaById(
    SiteConfig.contentful_page_ids.privacy_policy,
  );
}

export default async function Privacy() {
  const page = await contentService.getPageById(
    SiteConfig.contentful_page_ids.privacy_policy,
  );

  if (!page) return notFound();

  const content = page?.fields?.modules?.find(
    (module) => module?.sys.contentType.sys.id === "moduleRichText",
  );

  return (
    <PrivacyPage
      content={content?.fields.content}
      lastUpdated={content?.sys.updatedAt}
    />
  );
}
