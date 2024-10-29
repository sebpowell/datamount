import { Box } from "@/packages/components/ui/Box";
import { FooterLink } from "@/packages/components/ui/Footer/FooterLink";
import { Text } from "@/packages/components/ui/Text";
import { siteLinks } from "@/packages/config/site-links.config";
import Link from "next/link";

const FooterImpressum = () => {
  return (
    <Box className="flex items-center gap-8 pb-12 pt-3">
      <Text>© {new Date().getFullYear()}. All rights reserved.</Text>
      <Box className="ml-auto flex space-x-6">
        {[siteLinks.privacy_policy, siteLinks.terms_of_use].map((legal, i) => {
          return (
            <FooterLink asChild key={i}>
              <Link href={legal.href}>{legal.label}</Link>
            </FooterLink>
          );
        })}
      </Box>
    </Box>
  );
};

export { FooterImpressum };
