import { DataServiceEndpoints } from "@/packages/server/modules/database/schema/api-keys.schema";
import { ProductPage } from "@/packages/apps/site/pages/website/Product";
import { endpoints } from "@/packages/config/endpoints";
import { contentService } from "@/packages/server/modules/content/content.service";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
  const products = await contentService.getProducts();

  const slugs =
    products.items.map((product) => ({
      slug: product.fields.slug,
    })) || [];

  return slugs;
};

type PageParams = { slug: string };

const findKeyBySlug = (
  endpoints: { [key: string]: { slug: string } },
  slug: string,
): string | undefined => {
  return Object.keys(endpoints).find((key) => endpoints[key].slug === slug);
};

export default async function Product({ params }: { params: PageParams }) {
  const product = findKeyBySlug(endpoints, params.slug);

  if (!product) return notFound();

  return <ProductPage endpoint={product as DataServiceEndpoints} />;
}
