import { useAuthContext } from "@/packages/components/contexts/auth.context";
import { Box } from "@/packages/components/ui/Box";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/packages/components/ui/DropdownMenu";
import { Text } from "@/packages/components/ui/Text";
import { ThemeSwitcher } from "@/packages/components/ui/ThemeSwitcher";
import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import { ReactNode } from "react";

const SidebarUserDropdown = (props: {
  children: ReactNode;
  align?: DropdownMenuContentProps["align"];
  side?: DropdownMenuContentProps["side"];
}) => {
  const { children, side = "bottom", align = "start" } = props;

  const { session, logout } = useAuthContext();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-[240px]" align={align} side={side}>
        <DropdownMenuGroup className="px-4 py-3">
          <Text className="truncate whitespace-nowrap leading-none">
            {session.data?.user.email}
          </Text>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="py-2">
          <DropdownMenuItem>
            <Box className="flex-1">Theme</Box>
            <ThemeSwitcher />
          </DropdownMenuItem>
          <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { SidebarUserDropdown };
