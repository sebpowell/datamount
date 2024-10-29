import { RegisterPage } from "@/packages/apps/site/pages/website/Register";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
  openGraph: {
    title: "Register",
  },
};

export default function Register() {
  return <RegisterPage />;
}
