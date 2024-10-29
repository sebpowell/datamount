"use client";
import { links } from "@/packages/apps/docs/layouts/LayoutDocs/Links";
import { findLinkByFullPath } from "@/packages/apps/docs/utils/docs.utils";
import { Box, BoxProps } from "@/packages/components/ui/Box";
import { Container } from "@/packages/components/ui/Container";
import { Stack } from "@/packages/components/ui/Stack";
import { Text } from "@/packages/components/ui/Text";
import { cn } from "@/packages/utils/cn";
import { routes } from "@/packages/utils/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const NavigationSection = (props: BoxProps<"section">) => {
  return <Box as="section" className="space-y-3" {...props} />;
};
const NavigationHeading = (props: { children: ReactNode }) => {
  return <Text className={cn("font-medium leading-none")} {...props} />;
};

const NavigationLink = (props: { children: ReactNode; href: string }) => {
  const { children, href } = props;

  const path = usePathname();

  const isActive = path === href;

  return (
    <Box
      asChild
      className={cn(
        "-mx-2 block px-3 py-2.5 leading-none text-text-tertiary hover:bg-background-secondary",
        isActive && cn("bg-background-secondary text-text-primary"),
      )}
    >
      <Link href={href}>{children}</Link>
    </Box>
  );
};

export const NavigationToggle = ({
  isOpen,
  handleClick,
}: {
  isOpen: boolean;
  handleClick(): void;
}) => {
  const path = usePathname();

  const link = findLinkByFullPath(links, "", path);

  return (
    <Box
      className="flex h-14 cursor-pointer items-center border-b lg:hidden"
      onClick={handleClick}
    >
      <Container>{link?.title}</Container>
    </Box>
  );
};

export const DocsSidebar = () => {
  return (
    <Box
      className={cn(
        "hidden w-[300px] shrink-0 flex-col space-y-4 overflow-y-auto border-r border-border-primary px-gutter py-6 lg:flex",
      )}
    >
      <Stack spaceY={8} className="flex-1">
        {links.map((link, i) => {
          return (
            <NavigationSection key={i}>
              <NavigationHeading>{link.title}</NavigationHeading>
              <Box className="space-y-1">
                {link.links &&
                  link.links.map((l, i) => {
                    return (
                      <NavigationLink
                        href={`${routes.getRoute("docs")}/${link.path}/${
                          l.path
                        }`}
                        key={i}
                      >
                        {l.title}
                      </NavigationLink>
                    );
                  })}
              </Box>
            </NavigationSection>
          );
        })}
      </Stack>
    </Box>
  );
};
