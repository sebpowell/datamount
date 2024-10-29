import {
  ITemplateLegalProps,
  TemplateLegal,
} from "@/packages/apps/site/templates/Legal";

const TermsPage = (
  props: Pick<ITemplateLegalProps, "content" | "lastUpdated">,
) => {
  return <TemplateLegal title="Terms of Use" {...props} />;
};

export { TermsPage };
