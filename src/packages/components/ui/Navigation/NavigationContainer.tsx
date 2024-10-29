import { Box } from "@/packages/components/ui/Box";
import { useNavigationContext } from "@/packages/components/ui/Navigation/NavigationContext";
import { ReactNode } from "react";
import { tv } from "tailwind-variants";

const navigationContainerStyles = tv({
  base: "sticky top-0 h-[var(--navigation-height)] z-10 border-b border-transparent",
  variants: {
    isPinned: {
      true: "bg-background-primary shadow-sm border-black",
    },
  },
});

const NavigationRootContainer = ({ children }: { children: ReactNode }) => {
  const { isSticky, isMobileMenuOpen } = useNavigationContext();

  return (
    <Box
      as="nav"
      className={navigationContainerStyles({
        isPinned: isSticky || isMobileMenuOpen,
      })}
    >
      {children}
    </Box>
  );
};

export { NavigationRootContainer };
