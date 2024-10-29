import { z, TypeOf } from "zod";

export const UpdatePasswordSchema = z.object({
  password: z.string(),
});

export type IUpdatePasswordSchema = TypeOf<typeof UpdatePasswordSchema>;
