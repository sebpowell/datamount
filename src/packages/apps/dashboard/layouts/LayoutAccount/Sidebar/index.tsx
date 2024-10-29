"use client";
import {
  LayoutDashboardIcon,
  LucideIcon,
  LucideChevronsLeftRight,
  LucideLock,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { tv } from "tailwind-variants";
import { createElement } from "react";
import { Box, BoxProps } from "@/packages/components/ui/Box";
import { Stack } from "@/packages/components/ui/Stack";
import { routes } from "@/packages/utils/routes";
import { cn } from "@/packages/utils/cn";
import { SidebarUserDropdown } from "@/packages/apps/dashboard/layouts/LayoutAccount/Sidebar/SidebarUserDropdown";
import { Text } from "@/packages/components/ui/Text";
import { useAuthContext } from "@/packages/components/contexts/auth.context";

const SidebarLinkLeftSlot = ({ icon }: { icon: LucideIcon }) => {
  return (
    <Box className="mr-2 flex items-center justify-center">
      {createElement(icon, { size: 16 })}
    </Box>
  );
};

const sidebarLinkStyles = tv({
  base: cn(
    "h-9 flex items-center px-2 cursor-pointer hover:bg-background-tertiary text-text-tertiary hover:text-text-secondary rounded-md",
  ),
  variants: {
    isActive: {
      true: cn("bg-background-tertiary text-text-primary"),
    },
  },
});

export const SidebarLink = ({
  children,
  isActive,
  icon,
}: {
  isActive: boolean;
  icon: LucideIcon;
} & BoxProps<"div">) => {
  return (
    <Box className={cn(sidebarLinkStyles({ isActive }))}>
      <SidebarLinkLeftSlot icon={icon} />
      <Box className="leading-none">{children}</Box>
    </Box>
  );
};

const Links: { title: string; href: string; icon: LucideIcon }[] = [
  {
    title: "Dashboard",
    href: routes.getRoute("account_dashboard"),
    icon: LayoutDashboardIcon,
  },
  {
    title: "Logs",
    href: routes.getRoute("account_logs"),
    icon: LucideChevronsLeftRight,
  },
  {
    title: "API Keys",
    href: routes.getRoute("account_api_keys"),
    icon: LucideLock,
  },
];

export const SidebarLinks = () => {
  const path = usePathname();

  return (
    <Stack spaceY={1}>
      {Links.map((link, i) => {
        return (
          <Link href={link.href} key={i}>
            <SidebarLink isActive={path === link.href} icon={link.icon}>
              {link.title}
            </SidebarLink>
          </Link>
        );
      })}
    </Stack>
  );
};

export const Sidebar = () => {
  const { session } = useAuthContext();

  return (
    <Box className="flex w-[240px] flex-col space-y-3 border-r border-border-primary p-gutter">
      <SidebarUserDropdown>
        <Box className="flex h-10 cursor-pointer items-center rounded-md border border-border-primary px-3">
          <Text className="truncate whitespace-nowrap leading-none text-text-primary">
            {session.data?.user.email}
          </Text>
        </Box>
      </SidebarUserDropdown>
      <SidebarLinks />
    </Box>
  );
};
