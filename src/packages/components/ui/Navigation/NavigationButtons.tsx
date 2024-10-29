"use client";
import { SidebarUserDropdown } from "@/packages/apps/dashboard/layouts/LayoutAccount/Sidebar/SidebarUserDropdown";
import { Avatar } from "@/packages/components/ui/Avatar";
import { Box } from "@/packages/components/ui/Box";
import { Button } from "@/packages/components/ui/Button";
import { NavigationItem } from "@/packages/components/ui/Navigation/NavigationItem";
import { NavigationLink } from "@/packages/components/ui/Navigation/NavigationLink";
import { routes } from "@/packages/utils/routes";
import { useSession } from "next-auth/react";
import Link from "next/link";

const NavigationButtons = () => {
  const session = useSession();

  return (
    <Box className="ml-auto hidden lg:block">
      {session.status === "authenticated" ? (
        <Box className="flex h-full items-center space-x-2">
          <Button asChild size="xs" variant="outline">
            <Link href={routes.getRoute("account_dashboard")}>Dashboard</Link>
          </Button>
          <SidebarUserDropdown side="bottom" align="end">
            <Avatar initial={session.data.user.email?.charAt(0)} />
          </SidebarUserDropdown>
        </Box>
      ) : (
        <Box className="flex h-full items-center space-x-6">
          <NavigationItem>
            <NavigationLink asChild>
              <Link href={routes.getRoute("auth_login")}>Login</Link>
            </NavigationLink>
          </NavigationItem>
          <Button asChild size="xs" variant="solid">
            <Link href={routes.getRoute("auth_register")}>Get started</Link>
          </Button>
        </Box>
      )}
    </Box>
  );
};

export { NavigationButtons };
