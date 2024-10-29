import { Box } from "@/packages/components/ui/Box";
import { NavigationButtons } from "@/packages/components/ui/Navigation/NavigationButtons";
import { NavigationLogo } from "@/packages/components/ui/Navigation/NavigationLogo";

const DocsNavigation = () => {
  return (
    <Box className="h-20 w-full flex-shrink-0 border-b border-border-primary px-gutter">
      <Box className="flex h-full items-center">
        <Box className="flex items-center space-x-6">
          <NavigationLogo />
          <Box>Docs</Box>
        </Box>
        <NavigationButtons />
      </Box>
    </Box>
  );
};

export { DocsNavigation };
