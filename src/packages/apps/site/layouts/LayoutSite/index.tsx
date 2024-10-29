import { Box } from "@/packages/components/ui/Box";
import { Footer } from "@/packages/components/ui/Footer";
import { Navigation } from "@/packages/components/ui/Navigation";
import { ReactNode } from "react";

const LayoutSite = ({ children }: { children: ReactNode }) => {
  return (
    <Box className="flex min-h-screen w-screen flex-col">
      <Navigation />
      <Box className="flex-1">{children}</Box>
      <Footer />
      {/* <CookiePopup /> */}
    </Box>
  );
};

export { LayoutSite };
