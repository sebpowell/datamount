import { createContext } from "@/packages/utils/react/create-context";
import { useDisclosure } from "@/packages/utils/react/use-disclosure";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { useLockBodyScroll, useWindowScroll, useWindowSize } from "react-use";

type NavigationContextProps = {
  isMobileMenuOpen: boolean;
  isSticky: boolean;
  handleToggleMobileMenu(): void;
};

const [NavigationContext, useNavigationContext] =
  createContext<NavigationContextProps>();

const NavigationContextProvider = ({ children }: { children: ReactNode }) => {
  const [isSticky, setSticky] = useState(false);

  const { y } = useWindowScroll();

  useEffect(() => {
    setSticky(y > 0);
  }, [y]);

  const {
    isOpen: isMobileMenuOpen,
    onToggle: handleToggleMobileMenu,
    onClose: handleCloseMobileMenu,
    onOpen: handleOpenMobileMenu,
  } = useDisclosure({
    defaultIsOpen: false,
  });

  const { width } = useWindowSize();

  useLockBodyScroll(isMobileMenuOpen);

  const pathname = usePathname();

  useEffect(() => {
    handleCloseMobileMenu();
  }, [pathname, width]);

  return (
    <NavigationContext
      value={{ isMobileMenuOpen, handleToggleMobileMenu, isSticky }}
    >
      {children}
    </NavigationContext>
  );
};

export { NavigationContext, NavigationContextProvider, useNavigationContext };

export type { NavigationContextProps };
