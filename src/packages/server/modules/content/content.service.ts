import * as contentful from "contentful";
import { Metadata } from "next";
import {
  TypePageFields,
  TypePageSkeleton,
} from "@/packages/interfaces/TypePage";
import {
  TypeDatasourceFields,
  TypeDatasourceSkeleton,
  TypeFaqFields,
  TypeFaqSkeleton,
  TypeProductFields,
  TypeProductSkeleton,
} from "@/packages/interfaces";
import { Entry, EntryCollection } from "contentful";
import { env } from "@/env.mjs";

const contentfulClient = contentful.createClient({
  space: env.CONTENTFUL_SPACE_ID,
  accessToken: env.CONTENTFUL_CONTENT_API_TOKEN,
});

class ContentService {
  async getPageMetaById(id: string): Promise<Metadata> {
    const page = await this.getPageById(id);

    const title = page?.fields.meta?.fields.title || "";

    const description = page?.fields.meta?.fields.description || "";

    return {
      title,
      description,
      openGraph: {
        title,
        description,
      },
      twitter: {
        title,
        description,
      },
    };
  }

  async getPageById(
    id: string,
  ): Promise<Entry<TypePageSkeleton, "WITHOUT_UNRESOLVABLE_LINKS"> | null> {
    return await contentfulClient.withoutUnresolvableLinks.getEntry<{
      fields: TypePageFields;
      contentTypeId: "page";
    }>(id, { include: 3 });
  }

  async getFAQs(): Promise<
    EntryCollection<TypeFaqSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">
  > {
    return await contentfulClient.withoutUnresolvableLinks.getEntries<{
      fields: TypeFaqFields;
      contentTypeId: "faq";
    }>({ content_type: "faq" });
  }

  async getProducts(): Promise<
    EntryCollection<TypeProductSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">
  > {
    return await contentfulClient.withoutUnresolvableLinks.getEntries<{
      fields: TypeProductFields;
      contentTypeId: "product";
    }>({ content_type: "product" });
  }

  async getProductBySlug(
    slug: string,
  ): Promise<Entry<TypeProductSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">> {
    const item = await contentfulClient.withoutUnresolvableLinks.getEntries<{
      fields: TypeProductFields;
      contentTypeId: "product";
    }>({ content_type: "product", "fields.slug": slug });

    return item.items[0] || null;
  }

  async getDataSources(): Promise<
    EntryCollection<TypeDatasourceSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">
  > {
    return await contentfulClient.withoutUnresolvableLinks.getEntries<{
      fields: TypeDatasourceFields;
      contentTypeId: "datasource";
    }>({ content_type: "datasource" });
  }
}

type IFAQ = Entry<TypeFaqSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">;

export type { IFAQ };

export { ContentService };

export const contentService = new ContentService();
