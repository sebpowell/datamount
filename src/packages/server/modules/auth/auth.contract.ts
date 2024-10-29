import { RegisterUserSchema } from "@/packages/server/modules/auth/schemas/register-user.schema";
import { initContract } from "@ts-rest/core";
import { z } from "zod";

const c = initContract();

export const authContract = c.router({
  register: {
    method: "POST",
    path: "/user/register",
    responses: {
      201: z.object({ message: z.string() }),
    },
    body: RegisterUserSchema,
  },
});
