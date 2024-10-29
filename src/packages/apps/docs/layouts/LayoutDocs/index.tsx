"use client";
import { DocsNavigation } from "@/packages/apps/docs/layouts/LayoutDocs/DocsNavigation";
import { DocsSidebar } from "@/packages/apps/docs/layouts/LayoutDocs/Sidebar";
import { Box } from "@/packages/components/ui/Box";

function LayoutDocs({ children }: { children: React.ReactNode }) {
  return (
    <Box className="flex h-screen w-screen flex-col overflow-hidden">
      <DocsNavigation />
      <Box className="flex w-full flex-1 overflow-hidden">
        <DocsSidebar />
        <Box className="flex-1 overflow-scroll py-12">
          <Box className="mx-auto max-w-4xl">{children}</Box>
        </Box>
      </Box>
    </Box>
  );
}

export { LayoutDocs };
