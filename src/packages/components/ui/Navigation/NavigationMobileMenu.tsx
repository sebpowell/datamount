import { Box } from "@/packages/components/ui/Box";
import { Button } from "@/packages/components/ui/Button";
import { useNavigationContext } from "@/packages/components/ui/Navigation/NavigationContext";
import { navigationLinks } from "@/packages/components/ui/Navigation/NavigationLinks";
import { routes } from "@/packages/utils/routes";
import Link from "next/link";

const NavigationMobileMenu = () => {
  const { isMobileMenuOpen } = useNavigationContext();

  if (!isMobileMenuOpen) return <></>;

  return (
    <Box className="space-y-4 border-b border-black bg-white p-gutter pb-4 pt-0">
      <Box>
        {navigationLinks.map((link, i) => {
          return (
            <Box
              key={i}
              className="flex items-center border-b border-black py-4 leading-none first-of-type:border-t"
              asChild
            >
              <Link href={link.href}>{link.label}</Link>
            </Box>
          );
        })}
      </Box>
      <Button asChild isBlock>
        <Link href={routes.getRoute("auth_register")}>Get started</Link>
      </Button>
    </Box>
  );
};

export { NavigationMobileMenu };
