import { sortBy } from "lodash";
import { usePropertyProfileContext } from "./Property.context";
import { BarChart } from "../../BarChart";
import { IPropertySoldHistory } from "@/packages/server/modules/data/schemas/property.schema";
import { ColumnDef } from "@tanstack/react-table";
import { formatDate } from "@/packages/utils/format-date";
import { DataTable } from "@/packages/components/molecules/admin/Table";
import { formatPrice } from "@/packages/utils/format-price";
import { Box } from "@/packages/components/ui/Box";
import { TableValueChangeCell } from "@/packages/components/ui/Table/TablePercentageCell";
import { EmptyContainer, EmptyTitle } from "@/packages/components/ui/Empty";

const SoldPriceColumns: ColumnDef<IPropertySoldHistory>[] = [
  {
    accessorKey: "date",
    header: "Date",
    cell: (props) => {
      return <>{formatDate(props.row.original.date)}</>;
    },
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: (props) => {
      return <>£{formatPrice(props.row.original.amount)}</>;
    },
  },
  {
    accessorKey: "pct_change",
    header: "Change",
    cell: (props) => {
      return <TableValueChangeCell amount={props.row.original.pct_change} />;
    },
  },
];

export const PublicPropertySoldHistory = () => {
  const { property } = usePropertyProfileContext();

  const { sold_history } = property;

  return (
    <>
      {sold_history ? (
        <>
          {sold_history?.length > 2 && (
            <Box className="mb-5 h-[300px]">
              <BarChart<IPropertySoldHistory>
                data={sortBy(sold_history, "date")}
                xAxisKeyName="date"
                xAxisTickFormatter={(value) => value}
                yAxisKeyName="amount"
                yAxisTickFormatter={(value) => {
                  return (
                    "£" +
                    new Intl.NumberFormat("en", {
                      notation: "compact",
                      compactDisplay: "short",
                    }).format(value)
                  );
                }}
              />
            </Box>
          )}
          <DataTable
            isLoading={false}
            columns={SoldPriceColumns}
            data={sold_history}
          />
        </>
      ) : (
        <EmptyContainer>
          <EmptyTitle>Sold history unavailable</EmptyTitle>
        </EmptyContainer>
      )}
    </>
  );
};
