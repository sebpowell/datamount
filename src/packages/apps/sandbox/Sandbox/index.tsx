"use client";
import { Box } from "@/packages/components/ui/Box";
import { CodeSandbox } from "@/packages/components/ui/CodeSandbox";
import { NavigationButtons } from "@/packages/components/ui/Navigation/NavigationButtons";
import { NavigationRootContainer } from "@/packages/components/ui/Navigation/NavigationContainer";
import { NavigationContextProvider } from "@/packages/components/ui/Navigation/NavigationContext";
import { NavigationLogo } from "@/packages/components/ui/Navigation/NavigationLogo";

const PageSandbox = () => {
  return (
    <Box className="flex h-screen w-screen flex-col overflow-hidden">
      <NavigationContextProvider>
        <NavigationRootContainer>
          <Box className="flex h-full items-center px-gutter">
            <NavigationLogo />
            <NavigationButtons />
          </Box>
        </NavigationRootContainer>
      </NavigationContextProvider>
      <Box className="flex w-full flex-1 flex-col overflow-hidden border-t">
        <CodeSandbox />
      </Box>
    </Box>
  );
};

export { PageSandbox };
