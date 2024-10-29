import { links } from "@/packages/apps/docs/layouts/LayoutDocs/Links";
import { findPage, getPaths } from "@/packages/apps/docs/utils/docs.utils";
import { notFound } from "next/navigation";
import { cloneElement } from "react";

export const generateStaticParams = async () => {
  return getPaths(links);
};

export default function DocsArticle({
  params,
}: {
  params: { slug: string[] };
}) {
  const page = findPage(links, params.slug);

  if (!page) notFound();

  return cloneElement(page.page);
}
