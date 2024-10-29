import { useAreaContext } from "@/packages/apps/site/components/Area/config";
import { AreaProfileResponse } from "@/packages/server/modules/data/schemas/area-profile.schema";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

export const AreaAveragePrices = () => {
  const {
    data: {
      data: { average_prices },
    },
  } = useAreaContext();

  return (
    <div style={{ height: 500 }}>
      {/* <ResponsiveContainer width="100%" height="100%"> */}
      {/* <LineChart
          data={average_prices}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey={"date"}
            axisLine={false}
            tickLine={false}
            style={{
              fontSize: "12px",
            }}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            style={{
              fontSize: "12px",
            }}
            tickFormatter={(value) =>
              new Intl.NumberFormat("en", {
                notation: "compact",
                compactDisplay: "short",
              }).format(value)
            }
          />
          <Line dataKey="detached_average_price" fill="red" width={10} />
          <Line dataKey="flat_average_price" fill="blue" width={10} />
          <Line
            dataKey="semi_detached_average_price"
            fill="orange"
            width={10}
          />
          <Line dataKey="terraced_average_price" fill="black" width={10} />
        </LineChart> */}
      {/* </ResponsiveContainer> */}
    </div>
  );
};
