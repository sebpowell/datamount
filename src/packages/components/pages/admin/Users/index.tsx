"use client";
import { ColumnDef } from "@tanstack/react-table";
import { User } from "@/packages/server/modules/database/schema/user.schema";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "email",
    header: "Email",
  },
];

export const Users = () => {
  // const { data } = client.users.getAll.useQuery(["category"]);

  return <>Test</>;
};
