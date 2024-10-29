import { api } from "@/packages/server";
import { authService } from "@/packages/server/modules/auth/auth.service";
import { createNextRoute } from "@ts-rest/next";

export const authRouter = createNextRoute(api.auth, {
  register: async (args) => {
    await authService.register(args.body);

    return {
      status: 201,
      body: { message: "success" },
    };
  },
});
