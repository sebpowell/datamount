import { Box } from "@/packages/components/ui/Box";
import { Logo } from "@/packages/components/ui/Logo";
import { routes } from "@/packages/utils/routes";
import Link from "next/link";
import { ReactNode } from "react";

const AuthLayoutRoot = ({ children }: { children: ReactNode }) => {
  return (
    <Box className="flex h-screen w-screen overflow-hidden p-gutter">
      <Link href={routes.getRoute("home")}>
        <Logo />
      </Link>
      <Box className="flex flex-1 items-center justify-center">{children}</Box>
    </Box>
  );
};

export { AuthLayoutRoot };
