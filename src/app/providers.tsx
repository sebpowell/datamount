"use client";
import { TooltipProvider } from "@/packages/components/ui/Tooltip";
import { MapContextProvider } from "@/packages/components/contexts/map.context";
import { queryClient } from "@/packages/server/clients/api";
import { QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { AuthContextProvider } from "@/packages/components/contexts/auth.context";

export const GlobalProviders = ({ children }: { children: ReactNode }) => {
  return (
    // <ThemeProvider attribute="class" enableSystem={false}>

    <MapContextProvider>
      <TooltipProvider>
        <QueryClientProvider client={queryClient}>
          <SessionProvider>
            <AuthContextProvider>{children}</AuthContextProvider>
          </SessionProvider>
        </QueryClientProvider>
      </TooltipProvider>
    </MapContextProvider>

    // </ThemeProvider>
  );
};
