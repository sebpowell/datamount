"use client";
import { IFetchApiRequest } from "@/packages/server/modules/database/schema/api-keys.schema";
import { Account } from "@/packages/apps/dashboard/components/PageSection";
import { DataTable } from "@/packages/components/molecules/admin/Table";
import { Badge } from "@/packages/components/ui/Badge";
import { TableDateCell } from "@/packages/components/ui/Table";
import { Queries, client } from "@/packages/server/clients/api";
import { ColumnDef } from "@tanstack/react-table";
import { RequestStatusConfig } from "@/packages/apps/dashboard/components/RequestStatusBadge";

export const columns: ColumnDef<IFetchApiRequest>[] = [
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge variant={RequestStatusConfig[row.original.status].color}>
        {RequestStatusConfig[row.original.status].label}
      </Badge>
    ),
  },
  {
    accessorKey: "apiKey",
    accessorFn: (row) => {
      return row.apiKey.key;
    },
    header: "Key",
    cell: ({ row }) => <>{row.original.apiKey.key}</>,
  },
  {
    accessorKey: "createdAt",
    header: "Date",
    cell: ({ row }) => <TableDateCell dateIso={row.original.createdAt} />,
  },
  {
    accessorKey: "endpoint",
    header: "Endpoint",
  },
];

const AccountRequestsPage = () => {
  const { data, isLoading } = client.account.requests.fetchAll.useQuery([
    Queries.api_logs,
  ]);

  return (
    <>
      <Account.PageHeader>
        <Account.PageTitle>Logs</Account.PageTitle>
      </Account.PageHeader>
      <DataTable
        data={data?.body || []}
        columns={columns}
        isLoading={isLoading}
      />
    </>
  );
};

export { AccountRequestsPage };
