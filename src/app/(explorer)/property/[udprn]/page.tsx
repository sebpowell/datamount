import { PageProperty } from "@/packages/apps/explorer/pages/Property";

export default async function Property({
  params,
}: {
  params: { udprn: string };
}) {
  return <PageProperty udprn={params.udprn} />;
}
