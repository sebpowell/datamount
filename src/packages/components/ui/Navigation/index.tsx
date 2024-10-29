"use client";
import { Box } from "@/packages/components/ui/Box";
import { NavigationMenuToggle } from "@/packages/components/ui/Navigation/NavigationMenuToggle";
import { NavigationMobileMenu } from "@/packages/components/ui/Navigation/NavigationMobileMenu";
import { NavigationContextProvider } from "@/packages/components/ui/Navigation/NavigationContext";
import { NavigationLogo } from "@/packages/components/ui/Navigation/NavigationLogo";
import { NavigationLinks } from "@/packages/components/ui/Navigation/NavigationLinks";
import { NavigationButtons } from "@/packages/components/ui/Navigation/NavigationButtons";
import { NavigationContainerInner } from "@/packages/components/ui/Navigation/NavigationContainerInner";
import { NavigationRootContainer } from "@/packages/components/ui/Navigation/NavigationContainer";

export const Navigation = () => {
  return (
    <NavigationContextProvider>
      <NavigationRootContainer>
        <NavigationContainerInner>
          <NavigationLogo />
          <NavigationLinks />
          <Box className="ml-auto hidden lg:block">
            <NavigationButtons />
          </Box>
          <Box className="ml-auto lg:hidden">
            <NavigationMenuToggle />
          </Box>
        </NavigationContainerInner>
        <NavigationMobileMenu />
      </NavigationRootContainer>
    </NavigationContextProvider>
  );
};
