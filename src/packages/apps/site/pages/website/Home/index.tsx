import { HomeMasthead } from "@/packages/apps/site/pages/website/Home/HomeMasthead";
import { HomeServices } from "@/packages/apps/site/pages/website/Home/HomeServices";
import { HomepageFAQs } from "@/packages/apps/site/pages/website/Home/HomeFAQs";
import { HomeCta } from "@/packages/apps/site/pages/website/Home/HomeCTA";
import {
  TypeDatasourceSkeleton,
  TypeFaqSkeleton,
  TypeProductSkeleton,
} from "@/packages/interfaces";
import { Entry } from "contentful";
import { Box } from "@/packages/components/ui/Box";
import { HomeFeatures } from "@/packages/apps/site/pages/website/Home/HomeFeatures";
import { HomeSandbox } from "@/packages/apps/site/pages/website/Home/HomeSandbox";
import { Container } from "@/packages/components/ui/Container";

export const HomeSectionIds = {
  services: "services",
  faqs: "faqs",
};

export const Home = ({
  faqs,
  products,
  dataSources,
}: {
  faqs: Entry<TypeFaqSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">[];
  products: Entry<TypeProductSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">[];
  dataSources: Entry<TypeDatasourceSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">[];
}) => {
  return (
    <Box>
      <HomeMasthead />
      <Container className="space-y-16 py-24">
        <HomeServices products={products} />
        <HomeSandbox />
        <HomepageFAQs faqs={faqs} />
      </Container>
    </Box>
  );
};
