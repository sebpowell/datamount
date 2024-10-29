import { formatPrice } from "@/packages/utils/format-price";

export const toPrice = (value: number) => {
  return `£${formatPrice(value)}`;
};
