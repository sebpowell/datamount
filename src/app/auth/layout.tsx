import { AuthLayoutRoot } from "@/packages/apps/auth/layouts/AuthLayoutRoot";

export default function Auth({ children }: { children: React.ReactNode }) {
  return <AuthLayoutRoot>{children}</AuthLayoutRoot>;
}
