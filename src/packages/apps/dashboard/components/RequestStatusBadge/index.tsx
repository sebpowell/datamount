import { badgeVariants } from "@/packages/components/ui/Badge";
import { RequestStatusEnum } from "@/packages/server/modules/database/schema/api-keys.schema";
import { VariantProps } from "tailwind-variants";

const RequestStatusConfig: {
  [key in RequestStatusEnum]: {
    label: string;
    color: VariantProps<typeof badgeVariants>["variant"];
  };
} = {
  [RequestStatusEnum.pending]: {
    label: "Pending",
    color: "gray",
  },
  [RequestStatusEnum.error]: {
    label: "Error",
    color: "red",
  },
  [RequestStatusEnum.success]: {
    label: "Success",
    color: "green",
  },
};

export { RequestStatusConfig };
