import { Logo } from "@/packages/components/ui/Logo";
import { routes } from "@/packages/utils/routes";
import Link from "next/link";

const NavigationLogo = () => {
  return (
    <Link href={routes.getRoute("home")} className="block">
      <Logo />
    </Link>
  );
};

export { NavigationLogo };
