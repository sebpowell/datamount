import { PageArea } from "@/packages/apps/explorer/pages/Area";

export default async function Area({ params }: { params: { id: string } }) {
  return <PageArea id={params.id} />;
}
