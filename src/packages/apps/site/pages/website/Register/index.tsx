import { RegisterForm } from "@/packages/apps/site/components/RegisterForm";
import {
  TemplateAuth,
  TemplateAuthTitle,
} from "@/packages/apps/site/templates/Auth";

export const RegisterPage = () => {
  return (
    <TemplateAuth>
      <TemplateAuthTitle>Register</TemplateAuthTitle>
      <RegisterForm />
    </TemplateAuth>
  );
};
