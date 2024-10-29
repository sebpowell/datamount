const calculateTotal = (values: (number | null)[]) =>
  values
    ?.filter((value): value is number => value !== null)
    .reduce((acc, value) => acc + Math.abs(value), 0);

export { calculateTotal };
