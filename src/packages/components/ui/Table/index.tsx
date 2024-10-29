import * as React from "react";
import { cn } from "@/packages/utils/cn";
import { Box, BoxProps } from "@/packages/components/ui/Box";
import { format, parseISO } from "date-fns";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
} from "@/packages/components/ui/DropdownMenu";
import { Row } from "@tanstack/react-table";
import { IconButton } from "@/packages/components/ui/IconButton";

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="w-full overflow-auto">
    <table ref={ref} className={cn("w-full", className)} {...props} />
  </div>
));
Table.displayName = "Table";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <Box
    as="thead"
    ref={ref}
    className={cn("border-b border-t border-t-black", className)}
    {...props}
  />
));

TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0 [&_tr]:border-b", className)}
    {...props}
  />
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn("text-primary-foreground", className)}
    {...props}
  />
));
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr ref={ref} className={cn(className)} {...props} />
));
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <Box
    as="th"
    ref={ref}
    className={cn(
      "h-10 whitespace-nowrap text-left align-middle font-semibold",
      className,
    )}
    {...props}
  />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement> & BoxProps<"td">
>(({ className, ...props }, ref) => (
  <Box
    as="td"
    ref={ref}
    className={cn(
      "h-10 align-middle",

      className,
    )}
    {...props}
  />
));
TableCell.displayName = "TableCell";

const TableDateCell = ({ dateIso }: { dateIso: string | null }) => (
  <>{dateIso ? format(parseISO(dateIso), "dd-MM-yyyy hh:mm") : <></>}</>
);

const TableActionsCell = <T extends object>({
  row,
  items,
}: {
  row: Row<T>;
  items: (props: Row<T>) => JSX.Element;
}) => (
  <>
    <DropdownMenu>
      <DropdownMenuTrigger>
        <IconButton icon="MoreVertical" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuGroup>{React.cloneElement(items(row))}</DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  </>
);

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableDateCell,
  TableActionsCell,
};
