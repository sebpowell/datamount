"use client";

import { Box } from "@/packages/components/ui/Box";
import { Button } from "@/packages/components/ui/Button";
import { Paragraph } from "@/packages/components/ui/Paragraph";
import { Stack } from "@/packages/components/ui/Stack";
import { routes } from "@/packages/utils/routes";
import { X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export const CookiePopup = () => {
  const [isCookieBannerVisible, setCookieBannerVisible] = useState(false);

  const handleDismiss = () => {
    localStorage.setItem("cookieBannerDismissed", "true");
    setCookieBannerVisible(false);
  };

  useEffect(() => {
    setCookieBannerVisible(
      localStorage.getItem("cookieBannerDismissed") !== "true",
    );
  }, []);

  if (!isCookieBannerVisible) return <></>;

  return (
    <Box className="shadow-panel fixed bottom-5 left-5 max-w-sm rounded-2xl bg-white/80 p-6 pr-8 backdrop-blur-lg">
      <Box
        as="button"
        className="hover:bg-gray-12 shadow-card absolute right-2 top-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white hover:text-white"
        onClick={handleDismiss}
      >
        <X size={16} />
      </Box>
      <Stack spaceY={3}>
        <Stack spaceY={1}>
          <Paragraph>
            We use cookies to improve your experience and for marketing.{" "}
            <Link href={routes.getRoute("legal_privacy")} className="underline">
              Learn more
            </Link>
            .
          </Paragraph>
        </Stack>
        <Button size="sm" onClick={handleDismiss}>
          That&apos;s ok
        </Button>
      </Stack>
    </Box>
  );
};
