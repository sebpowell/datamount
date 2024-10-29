import { SiteConfig } from "@/packages/config/global.config";
import { TermsPage } from "@/packages/apps/site/pages/website/Terms";
import { contentService } from "@/packages/server/modules/content/content.service";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
  return await contentService.getPageMetaById(
    SiteConfig.contentful_page_ids.terms,
  );
}

export default async function Terms() {
  const page = await contentService.getPageById(
    SiteConfig.contentful_page_ids.terms,
  );

  if (!page) return notFound();

  const content = page?.fields?.modules?.find(
    (module) => module?.sys.contentType.sys.id === "moduleRichText",
  );

  return (
    <TermsPage
      content={content?.fields.content}
      lastUpdated={content?.sys.updatedAt}
    />
  );
}
