"use client";
import { Box } from "@/packages/components/ui/Box";
import { EmptyContainer, EmptyTitle } from "@/packages/components/ui/Empty";
import { Loader } from "@/packages/components/ui/Loader";
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
  Row,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

interface DataTableProps<T extends object> {
  columns: ColumnDef<T>[];
  data: T[];
  isLoading: boolean;
  onRowClick?(row: Row<T>): void;
}

export function DataTable<T extends object>({
  columns,
  onRowClick,
  data,

  isLoading,
}: DataTableProps<T>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) {
    return (
      <Box className="flex items-center justify-center">
        <Loader />
      </Box>
    );
  }

  return data.length > 0 ? (
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
        <>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                {...(onRowClick && { onClick: () => onRowClick(row) })}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </>
      </TableBody>
    </Table>
  ) : (
    <EmptyContainer>
      <EmptyTitle>Nothing here yet...</EmptyTitle>
    </EmptyContainer>
  );
}
