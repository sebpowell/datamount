import { BaseResponseSchema } from "@/packages/server/modules/data/schemas/base-response.schema";
import { TypeOf, object, string, z } from "zod";

const AutoCompleteRequestSchema = object({
  string: z
    .string()
    .optional()
    .refine((value) => value !== undefined && value.length >= 1, {
      message: "The input string must be at least 1 character long",
    }),
});

type IAutoCompleteRequestSchema = TypeOf<typeof AutoCompleteRequestSchema>;

const autoCompleteAddress = object({ address: string(), udprn: string() });

const AutoCompleteResponseSchema = object({
  string: string(),
  data: object({
    addresses: autoCompleteAddress.array(),
  }),
}).merge(BaseResponseSchema);

type IAutoCompleteResponseSchema = TypeOf<typeof AutoCompleteResponseSchema>;

export type { IAutoCompleteRequestSchema, IAutoCompleteResponseSchema };

export {
  AutoCompleteRequestSchema,
  AutoCompleteResponseSchema,
  autoCompleteAddress,
};
