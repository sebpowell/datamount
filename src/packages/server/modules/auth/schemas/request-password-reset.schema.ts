import { z, TypeOf } from "zod";

export const RequestPasswordResetSchema = z.object({
  email: z.string().email(),
});

export type IRequestPasswordResetSchema = TypeOf<
  typeof RequestPasswordResetSchema
>;
