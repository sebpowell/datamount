import {
  ITemplateLegalProps,
  TemplateLegal,
} from "@/packages/apps/site/templates/Legal";

const PrivacyPage = (
  props: Pick<ITemplateLegalProps, "content" | "lastUpdated">,
) => {
  return <TemplateLegal title="Privacy Policy" {...props} />;
};

export { PrivacyPage };
