import { createContext } from "@/packages/utils/react/create-context";
import { routes } from "@/packages/utils/routes";
import { SessionContextValue, signOut, useSession } from "next-auth/react";
import { ReactNode } from "react";

type AuthContextProps = {
  session: SessionContextValue;
  logout(): void;
};

const [AuthContext, useAuthContext] = createContext<AuthContextProps>();

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const session = useSession();

  const logout = () => {
    signOut({ callbackUrl: routes.getRoute("home") });
  };

  return <AuthContext value={{ logout, session }}>{children}</AuthContext>;
};

export { AuthContext, AuthContextProvider, useAuthContext };
