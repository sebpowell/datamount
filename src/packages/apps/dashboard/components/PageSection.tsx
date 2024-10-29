import { Box } from "@/packages/components/ui/Box";
import { Heading } from "@/packages/components/ui/Heading";
import { Stack } from "@/packages/components/ui/Stack";
import { ReactNode } from "react";

const Account = {
  FullScreenPageTitle: ({ children }: { children: ReactNode }) => {
    return (
      <Heading as="h1" className="text-text-primary">
        {children}
      </Heading>
    );
  },
  PageWrapper: ({ children }: { children: ReactNode }) => {
    return <Box>{children}</Box>;
  },
  PageHeader: ({ children }: { children: ReactNode }) => {
    return (
      <Box as="header" className="flex items-center py-12">
        {children}
      </Box>
    );
  },
  PageHeaderButtons: ({ children }: { children: ReactNode }) => {
    return (
      <Stack spaceX={4} className="ml-auto">
        {children}
      </Stack>
    );
  },
  Empty: ({}) => {
    <Box className="border py-12">
      <Box>Nothing here yet...</Box>
      <Box>ANother line...</Box>
    </Box>;
  },
  PageTitle: ({ children }: { children: ReactNode }) => {
    return (
      <Heading as="h1" className="text-text-primary">
        {children}
      </Heading>
    );
  },
  FullScreenPageHeaderLink: ({ children }: { children: ReactNode }) => {
    return (
      <Box className="text-text-tertiary transition-colors hover:text-text-primary">
        {children}
      </Box>
    );
  },
  FullScreenPageHeader: ({ children }: { children: ReactNode }) => {
    return (
      <Box className="flex h-20 flex-shrink-0 items-center border-b border-border-primary px-8">
        {children}
      </Box>
    );
  },
  DashboardPageSectionHeader: ({ children }: { children: ReactNode }) => {
    return <Box>{children}</Box>;
  },
};

export { Account };
