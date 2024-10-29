import { Home } from "@/packages/apps/site/pages/website/Home";
import { SiteConfig } from "@/packages/config/global.config";
import { contentService } from "@/packages/server/modules/content/content.service";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return await contentService.getPageMetaById(
    SiteConfig.contentful_page_ids.home,
  );
}

export default async function PageHome() {
  const [faqs, products, dataSources] = await Promise.all([
    contentService.getFAQs(),
    contentService.getProducts(),
    contentService.getDataSources(),
  ]);

  return (
    <Home
      faqs={faqs.items}
      products={products.items}
      dataSources={dataSources.items}
    />
  );
}
