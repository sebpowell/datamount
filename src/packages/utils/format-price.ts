export const formatPrice = (x: number | undefined): string => {
  return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || "0";
};
