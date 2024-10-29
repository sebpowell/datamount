"use client";
import { HomePricing } from "@/packages/apps/site/pages/website/Home/HomePricing";
import { HomeSandbox } from "@/packages/apps/site/pages/website/Home/HomeSandbox";
import { Box } from "@/packages/components/ui/Box";
import { Container } from "@/packages/components/ui/Container";
import { ReactNode } from "react";

const ProductBase = ({ children }: { children: ReactNode }) => {
  return (
    <Box>
      {children}
      <Container className="space-y-8 py-16">
        <HomeSandbox />
      </Container>
    </Box>
  );
};

export { ProductBase };
