import { cn } from "@/packages/utils/cn";

const TableValueChangeCell = ({
  amount,
}: {
  amount: number | null | undefined;
}) => {
  if (amount) {
    return (
      <div
        className={cn(
          "inline-flex items-center rounded-full px-2 py-1 text-sm leading-none",
          {
            "bg-green-100 text-green-500": amount > 0,
            "bg-red-100 text-red-500": amount < 0,
          },
        )}
      >
        {amount}%
      </div>
    );
  }

  return <>–</>;
};

export { TableValueChangeCell };
