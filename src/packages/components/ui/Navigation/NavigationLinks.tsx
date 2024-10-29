import { Box } from "@/packages/components/ui/Box";
import { NavigationItem } from "@/packages/components/ui/Navigation/NavigationItem";
import { NavigationLink } from "@/packages/components/ui/Navigation/NavigationLink";
import { siteLinks } from "@/packages/config/site-links.config";
import { routes } from "@/packages/utils/routes";
import Link from "next/link";

const navigationLinks = [
  { label: "Products", href: `${routes.getRoute("home")}#products` },
  siteLinks.faqs,
  siteLinks.pricing,
  siteLinks.docs,
  siteLinks.contact,
];

const NavigationLinks = () => {
  return (
    <Box className="absolute left-1/2 ml-auto hidden -translate-x-1/2 items-center space-x-8 lg:flex">
      {navigationLinks.map((link, i) => {
        return (
          <NavigationItem key={i}>
            <NavigationLink asChild>
              <Link href={link.href}>{link.label}</Link>
            </NavigationLink>
          </NavigationItem>
        );
      })}
    </Box>
  );
};

export { NavigationLinks, navigationLinks };
