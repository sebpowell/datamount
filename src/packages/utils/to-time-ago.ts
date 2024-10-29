import { differenceInMonths, parseISO } from "date-fns";

const toTimeAgo = (date: string) => {
  return `${differenceInMonths(new Date(), parseISO(date))}`;
};

export { toTimeAgo };
