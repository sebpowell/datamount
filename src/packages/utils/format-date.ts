import { format, isValid, parseISO } from "date-fns";

export const DATE_FORMAT = "dd MMM yyyy";

export const formatDate = (date: string): string | null => {
  return isValid(parseISO(date)) ? format(parseISO(date), DATE_FORMAT) : null;
};
