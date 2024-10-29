import { Sidebar } from "@/packages/apps/dashboard/layouts/LayoutAccount/Sidebar";
import { Account } from "@/packages/apps/dashboard/components/PageSection";
import { Box } from "@/packages/components/ui/Box";
import { Stack } from "@/packages/components/ui/Stack";
import { routes } from "@/packages/utils/routes";
import Link from "next/link";
import { ReactNode } from "react";

export const LayoutAccount = ({ children }: { children: ReactNode }) => {
  return (
    <Box className="flex h-screen w-screen overflow-hidden">
      <Sidebar />
      <Box className="flex flex-1 flex-col overflow-hidden">
        <Account.FullScreenPageHeader>
          <Stack spaceX={6} className="ml-auto flex items-center">
            <Account.FullScreenPageHeaderLink>
              <Link href={routes.getRoute("contact")}>Support</Link>
            </Account.FullScreenPageHeaderLink>
            <Account.FullScreenPageHeaderLink>
              <Link href={routes.getRoute("docs")}>Docs</Link>
            </Account.FullScreenPageHeaderLink>
          </Stack>
        </Account.FullScreenPageHeader>
        <Box className="flex-1 overflow-scroll">
          <Box className="mx-auto w-full max-w-5xl px-8">{children}</Box>
        </Box>
      </Box>
    </Box>
  );
};
