import { LoginForm } from "@/packages/components/ui/LoginForm";
import {
  TemplateAuth,
  TemplateAuthTitle,
} from "@/packages/apps/site/templates/Auth";
import { AuthLegalDisclaimer } from "@/packages/components/ui/AuthLegalDisclaimer";

export const LoginPage = () => {
  return (
    <TemplateAuth>
      <TemplateAuthTitle>Welcome back</TemplateAuthTitle>
      <LoginForm />
      <AuthLegalDisclaimer />
    </TemplateAuth>
  );
};
