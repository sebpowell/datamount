import { routes } from "@/packages/utils/routes";

type SiteLinks =
  | "privacy_policy"
  | "terms_of_use"
  | "faqs"
  | "docs"
  | "pricing"
  | "contact";

const siteLinks: { [key in SiteLinks]: { label: string; href: string } } = {
  privacy_policy: {
    label: "Privacy Policy",
    href: routes.getRoute("legal_privacy"),
  },
  terms_of_use: {
    label: "Terms of Use",
    href: routes.getRoute("legal_terms"),
  },
  faqs: {
    label: "FAQs",
    href: routes.getRoute("faqs"),
  },
  pricing: {
    label: "Pricing",
    href: routes.getRoute("pricing"),
  },
  docs: {
    label: "Docs",
    href: routes.getRoute("docs"),
  },
  contact: {
    label: "Contact",
    href: routes.getRoute("contact"),
  },
};

export { siteLinks };
