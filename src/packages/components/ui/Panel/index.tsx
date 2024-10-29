import { Box } from "@/packages/components/ui/Box";
import { Heading } from "@/packages/components/ui/Heading";
import { ReactNode } from "react";

const Panel = ({ children }: { children: ReactNode }) => {
  return (
    <Box className="space-y-2 rounded-lg border border-border-primary px-6 py-5">
      {children}
    </Box>
  );
};

const PanelTitle = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as="h4" size="h4" className="text-text-tertiary">
      {children}
    </Heading>
  );
};

const PanelStat = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as="h2" className="text-text-primary">
      {children}
    </Heading>
  );
};

export { Panel, PanelTitle, PanelStat };
