import { object, string } from "zod";

export const BaseResponseSchema = object({
  object: string(),
});
