const tickFormatter = ({
  format,
  value,
}: {
  format: "percentage";
  value: number;
}): string => {
  if (format === "percentage") return `${Math.round(value * 100)}%`;

  return value.toString();
};

export { tickFormatter };
