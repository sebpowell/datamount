"use client";
import {
  IFetchApiKey,
  IFetchApiKeys,
} from "@/packages/server/modules/database/schema/api-keys.schema";
import { Account } from "@/packages/apps/dashboard/components/PageSection";
import { DataTable } from "@/packages/components/molecules/admin/Table";
import { CreateAccountKey } from "@/packages/apps/dashboard/pages/AccountApiKeys/CreateAccountKey";
import { Box } from "@/packages/components/ui/Box";
import { Button } from "@/packages/components/ui/Button";
import { DropdownMenuItem } from "@/packages/components/ui/DropdownMenu";
import {
  TableActionsCell,
  TableDateCell,
} from "@/packages/components/ui/Table";
import { useDisclosure } from "@/packages/utils/react/use-disclosure";
import { Queries, client, queryClient } from "@/packages/server/clients/api";
import { routes } from "@/packages/utils/routes";
import { ColumnDef } from "@tanstack/react-table";
import { Clipboard, CopyPlus } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCopyToClipboard } from "react-use";
import { DeleteAccountApiKey } from "@/packages/apps/dashboard/pages/AccountApiKeys/DeleteAccountApiKey";
import { Input } from "@/packages/components/ui/Input";
import { InputGroup } from "@/packages/components/ui/InputGroup";
import { InputElement } from "@/packages/components/ui/InputElement";

const Key = (props: { value: string }) => {
  const [state, copyToClipboard] = useCopyToClipboard();

  useEffect(() => {
    if (state.value) {
      alert("Copied!");
    }
  }, [state]);

  return (
    <InputGroup>
      <Input value={props.value} size="sm" />
      <InputElement
        className="flex h-8 w-8 cursor-pointer items-center justify-center bg-red-500"
        onClick={() => copyToClipboard(props.value)}
      >
        <Clipboard size={16} />
      </InputElement>
    </InputGroup>
  );
};

const AccountApiKeysPage = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const {
    isOpen: isDeleteModalOpen,
    onClose: onCloseDelete,
    onOpen: onOpenDelete,
  } = useDisclosure();

  const [selected, setSelected] = useState<IFetchApiKey | null>(null);

  const { data, isLoading } = client.account.keys.fetchAll.useQuery([
    Queries.api_keys,
  ]);

  const columns: ColumnDef<IFetchApiKeys[0]>[] = [
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => {
        return (
          <Box className="underline" asChild>
            <Link
              href={routes.getRoute("account_api_key_single", {
                ":cuid": row.original.cuid,
              })}
            >
              {row.original.name}
            </Link>
          </Box>
        );
      },
    },
    {
      accessorKey: "key",
      header: "Key",
      cell: ({ row }) => {
        return <Key value={row.original.key} />;
      },
    },
    {
      accessorKey: "createdAt",
      header: "Created at",
      cell: ({ row }) => <TableDateCell dateIso={row.original.createdAt} />,
    },
    {
      accessorKey: "lastUsedAt",
      header: "Last used",
      cell: ({ row }) =>
        row.original.lastUsedAt ? (
          <TableDateCell dateIso={row.original.lastUsedAt} />
        ) : (
          <>Never</>
        ),
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => (
        <TableActionsCell
          row={row}
          items={(props) => {
            return (
              <>
                <DropdownMenuItem
                  icon="Trash"
                  onClick={() => {
                    setSelected(row.original);
                    onOpenDelete();
                  }}
                >
                  Delete
                </DropdownMenuItem>
              </>
            );
          }}
        />
      ),
    },
  ];

  const { mutate, isLoading: isDeleting } =
    client.account.keys.delete.useMutation({
      onSuccess: () => {
        onCloseDelete();
        setSelected(null);
        queryClient.invalidateQueries([Queries.api_keys]);
      },
      onError: () => {},
    });

  const handleDelete = () => {
    if (selected) {
      mutate({ params: { cuid: selected.cuid } });
    }
  };

  return (
    <Box>
      <Account.PageHeader>
        <Account.PageTitle>Keys</Account.PageTitle>
        <Account.PageHeaderButtons>
          <Button onClick={onOpen} variant="outline">
            Create key
          </Button>
        </Account.PageHeaderButtons>
      </Account.PageHeader>
      <CreateAccountKey open={isOpen} onOpenChange={onClose} />
      <DeleteAccountApiKey
        open={isDeleteModalOpen}
        onOpenChange={onCloseDelete}
        handleDelete={handleDelete}
        isDeleting={isDeleting}
      />
      <DataTable
        data={data?.body || []}
        columns={columns}
        isLoading={isLoading}
      />
    </Box>
  );
};

export { AccountApiKeysPage };
