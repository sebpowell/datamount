import { ReactNode } from "react";
import dynamic from "next/dynamic";
interface NoSSRProps {
  children: ReactNode;
}
const NoSSR = ({ children }: NoSSRProps) => <>{children}</>;

export default dynamic(() => Promise.resolve(NoSSR), { ssr: false });
