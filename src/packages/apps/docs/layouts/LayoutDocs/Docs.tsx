"use client";
import { DataServiceEndpoints } from "@/packages/server/modules/database/schema/api-keys.schema";
import { Badge } from "@/packages/components/ui/Badge";
import { Box } from "@/packages/components/ui/Box";
import { EndpointFields, endpoints } from "@/packages/config/endpoints";
import { Heading } from "@/packages/components/ui/Heading";
import { Paragraph } from "@/packages/components/ui/Paragraph";
import { Stack } from "@/packages/components/ui/Stack";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/packages/components/ui/Table";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ReactNode } from "react";
import { Code, CodeProps } from "@/packages/apps/docs/components/Code";

export const Docs = {
  H1: ({ children }: { children: ReactNode }) => {
    return (
      <Heading
        as="h1"
        size="h2"
        className="mb-5 font-semibold text-text-primary"
      >
        {children}
      </Heading>
    );
  },
  H2: ({ children }: { children: ReactNode }) => (
    <Heading
      as="h2"
      size="h3"
      className="mb-4 mt-12 font-semibold text-text-primary"
    >
      {children}
    </Heading>
  ),
  P: ({ children }: { children: ReactNode }) => (
    <Paragraph className="last-child:mb-0 mb-4 leading-relaxed">
      {children}
    </Paragraph>
  ),
  Stack: ({ children }: { children: ReactNode }) => {
    return <Stack spaceY={10}>{children}</Stack>;
  },
  Parameters: ({ endpoint }: { endpoint: DataServiceEndpoints }) => {
    const columns: ColumnDef<EndpointFields<object>>[] = [
      {
        accessorKey: "name",
        header: "Name",
        cell: ({ row }) => (
          <Stack spaceX={4} className="flex items-center">
            <Box>{row.original.name}</Box>
            {row.original.required && <Badge>Required</Badge>}{" "}
          </Stack>
        ),
      },
      {
        accessorKey: "description",
        header: "Description",
      },
    ];

    const table = useReactTable({
      data: Object.values(endpoints[endpoint].fields),
      columns,
      getCoreRowModel: getCoreRowModel(),
    });

    return (
      <Box>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    );
  },
  CodeExample: (props: CodeProps) => {
    return <Code {...props} />;
  },
};
