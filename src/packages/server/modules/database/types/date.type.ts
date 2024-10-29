import { z } from "zod";

const dateToString = z.date().transform((date) => date.toISOString());

export { dateToString };
