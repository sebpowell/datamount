import { authService } from "@/packages/server/modules/auth/auth.service";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        try {
          return authService.login({
            email: credentials?.email,
            password: credentials?.password,
          });
        } catch (e) {
          console.log(e);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    session: async (props) => {
      return {
        ...props.session,
        user: {
          ...props.session.user,
          id: props.token.sub,
        },
      };
    },
  },
};
