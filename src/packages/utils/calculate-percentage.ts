// We always want this to be positive or null if value is null
const calculatePercentage = (
  value: number | null,
  total: number,
): number | null => (value === null ? null : Math.abs((value / total) * 100));

export { calculatePercentage };
