import { useAreaContext } from "@/packages/apps/site/components/Area/config";

const PropertyTenure = () => {
  const {
    data: {
      data: {
        demographics: { tenure },
      },
    },
  } = useAreaContext();

  return <></>;
};

export { PropertyTenure };
