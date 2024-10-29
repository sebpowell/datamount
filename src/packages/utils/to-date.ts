import { format, parseISO } from "date-fns";

const toDate = (date: string) => {
  return format(parseISO(date), "dd MMM");
};

export { toDate };
