import { Box } from "@/packages/components/ui/Box";
import { formatPrice } from "@/packages/utils/format-price";

export const EstimateCard = ({
  title,
  lettings_value,
}: {
  title: string;
  lettings_value: number;
}) => {
  return (
    <div className="flex-1 py-4 text-center">
      <h3 className="mb-3 text-sm leading-none text-gray-500">{title}</h3>
      <div className="text-xl leading-none">£{formatPrice(lettings_value)}</div>
    </div>
  );
};

export const PropertyValuations = () => {
  // const {
  //   entity: {
  //     data: { average_prices, rental_estimates },
  //   },
  // } = useAreaContext();

  // const detached =
  //   type === "sale"
  //     ? area.average_prices.detached
  //     : area.rental_estimates.detached;

  // const flatMaisonette =
  //   type === "sale"
  //     ? area.average_prices.flat_maisonette
  //     : area.rental_estimates.flat_maisonette;

  // const semiDetached =
  //   type === "sale"
  //     ? area.average_prices.semi_detached
  //     : area.rental_estimates.semi_detached;

  // const terraced =
  //   type === "sale"
  //     ? area.average_prices.terraced
  //     : area.rental_estimates.terraced;

  return (
    <Box className="flex rounded-lg border border-gray-500">
      {/* <EstimateCard title="Detached" lettings_value={detached} />
      <EstimateCard title="Flat maisonette" lettings_value={flatMaisonette} />
      <EstimateCard title="Semi detached" lettings_value={semiDetached} />
      <EstimateCard title="Terraced" lettings_value={terraced} /> */}
    </Box>
  );
};
