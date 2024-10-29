import { useAreaContext } from "@/packages/apps/site/components/Area/config";

const PropertyBedrooms = () => {
  const {
    data: {
      data: {
        demographics: { bedrooms },
      },
    },
  } = useAreaContext();

  return <></>;
};

export { PropertyBedrooms };
