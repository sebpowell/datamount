import {
  BarChart,
  IBarChartProps,
} from "@/packages/apps/site/components/BarChart";
import { Box } from "@/packages/components/ui/Box";
import { AreaDemographicValueSchema } from "@/packages/server/modules/data/schemas/area-profile.schema";

const DemographicChart = (
  props: IBarChartProps<AreaDemographicValueSchema>,
) => {
  const {
    xAxisKeyName = "label",
    yAxisKeyName = "proportion",
    ...rest
  } = props;

  return (
    <Box style={{ height: 300 }} className="border border-black">
      <BarChart
        xAxisKeyName={xAxisKeyName}
        yAxisKeyName={yAxisKeyName}
        {...rest}
      />
    </Box>
  );
};

export { DemographicChart };
