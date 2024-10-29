import { TypeOf, object, string } from "zod";
import { postcodeValidator } from "postcode-validator";
import { BaseResponseSchema } from "@/packages/server/modules/data/schemas/base-response.schema";
import { ErrorCodes } from "@/packages/server/exceptions/exception-codes.enum";

const PostcodeLookupRequestSchema = object({
  postcode: string().refine((postcode) => postcodeValidator(postcode, "GB"), {
    message: ErrorCodes.invalid_postcode,
  }),
});

type IPostcodeLookupRequestSchema = TypeOf<typeof PostcodeLookupRequestSchema>;

const PostcodeLookupResponseSchema = BaseResponseSchema.merge(
  object({
    data: object({
      addresses: object({ address: string(), udprn: string() }).array(),
    }),
  }),
);

type IPostcodeLookupResponseSchema = TypeOf<
  typeof PostcodeLookupResponseSchema
>;

export type { IPostcodeLookupRequestSchema, IPostcodeLookupResponseSchema };

export { PostcodeLookupRequestSchema, PostcodeLookupResponseSchema };
