import { links } from "@/packages/apps/docs/layouts/LayoutDocs/Links";
import { findFirstPage } from "@/packages/apps/docs/utils/docs.utils";
import { routes } from "@/packages/utils/routes";
import { redirect } from "next/navigation";

export default function DocsRoot() {
  redirect(`${routes.getRoute("docs")}/${findFirstPage(links)}`);
}
