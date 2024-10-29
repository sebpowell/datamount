import { Box } from "@/packages/components/ui/Box";
import { cn } from "@/packages/utils/cn";
import { ReactNode } from "react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { GlobalProviders } from "@/app/providers";

const LayoutRoot = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <Box
        as="body"
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
          "scroll-smooth font-sans antialiased",
        )}
      >
        <GlobalProviders>{children}</GlobalProviders>
      </Box>
    </html>
  );
};

export { LayoutRoot };
