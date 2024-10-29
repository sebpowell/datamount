import { Box } from "@/packages/components/ui/Box";
import { useNavigationContext } from "@/packages/components/ui/Navigation/NavigationContext";

const NavigationMenuToggle = () => {
  const { handleToggleMobileMenu, isMobileMenuOpen } = useNavigationContext();

  return (
    <Box onClick={handleToggleMobileMenu} className="cursor-pointer">
      {isMobileMenuOpen ? "Close" : "Menu"}
    </Box>
  );
};

export { NavigationMenuToggle };
