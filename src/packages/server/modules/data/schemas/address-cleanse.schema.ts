import { TypeOf, object, string, z } from "zod";

const AddressCleanseRequestSchema = object({
  string: z
    .string()
    .optional()
    .refine((value) => value !== undefined && value.length >= 1, {
      message: "The input string must be at least 1 character long",
    }),
});

type IAddressCleanseRequestSchema = TypeOf<typeof AddressCleanseRequestSchema>;

const AddressCleanseResponseSchema = object({
  object: string(),
  url: string(),
  string: string(),
  data: object({
    addresses: object({ address: string(), udprn: string() }).array(),
  }),
});

type IAddressCleanseResponseSchema = TypeOf<
  typeof AddressCleanseResponseSchema
>;

export type { IAddressCleanseRequestSchema, IAddressCleanseResponseSchema };

export { AddressCleanseRequestSchema, AddressCleanseResponseSchema };
