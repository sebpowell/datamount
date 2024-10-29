import { z, TypeOf } from "zod";

export const RegisterUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
});

export type IRegisterUserSchema = TypeOf<typeof RegisterUserSchema>;
