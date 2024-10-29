"use client";
import { IFetchAccountCredits } from "@/packages/server/modules/database/schema/credits.schema";
import { Account } from "@/packages/apps/dashboard/components/PageSection";
import { DataTable } from "@/packages/components/molecules/admin/Table";
import { TableDateCell } from "@/packages/components/ui/Table";
import { Queries, client } from "@/packages/server/clients/api";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<IFetchAccountCredits[0]>[] = [
  {
    accessorKey: "credits",
    header: "Credits",
  },
  {
    accessorKey: "createdAt",
    header: "Purchase date",
    cell: ({ row }) => <TableDateCell dateIso={row.original.createdAt} />,
  },
];

const AccountBillingPage = () => {
  const { data, isLoading } = client.account.credits.fetchAll.useQuery([
    Queries.account_credits,
  ]);

  return (
    <Account.PageWrapper>
      <Account.PageHeader>
        <Account.PageTitle>Billing</Account.PageTitle>
      </Account.PageHeader>

      <DataTable
        data={data?.body || []}
        columns={columns}
        isLoading={isLoading}
      />
    </Account.PageWrapper>
  );
};

export { AccountBillingPage };
