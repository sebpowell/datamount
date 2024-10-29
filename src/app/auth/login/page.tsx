import { LoginPage } from "@/packages/apps/site/pages/website/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  openGraph: {
    title: "Login",
  },
};

export default function Login() {
  return <LoginPage />;
}
