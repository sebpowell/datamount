import { Box } from "@/packages/components/ui/Box";
import { Heading } from "@/packages/components/ui/Heading";
import { ReactNode } from "react";

export const TemplateAuthTitle = ({ children }: any) => {
  return (
    <Heading as="h1" size="h3">
      {children}
    </Heading>
  );
};

export const TemplateAuthLegal = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export const TemplateAuthContainer = ({ children }: any) => {
  return <Box className="w-full max-w-sm space-y-5">{children}</Box>;
};

export const TemplateAuth = ({ children }: { children: ReactNode }) => {
  return <TemplateAuthContainer>{children}</TemplateAuthContainer>;
};
