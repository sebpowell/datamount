import { useState } from "react";
import {
  BarChart as _BarChart,
  Bar,
  XAxis,
  YAxis,
  LineChart as _LineChart,
  ResponsiveContainer,
  Cell,
} from "recharts";

export type GraphData = {
  label: string;
  value: number;
}[];

export type IBarChartProps<T extends object> = {
  data: T[];
  yAxisKeyName: keyof T;
  xAxisKeyName: keyof T;
  yAxisTickFormatter?(value: number): string;
  xAxisTickFormatter?(value: string): string;
};

// const CustomTooltip = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div className="custom-tooltip border border-black bg-white p-4 shadow-md shadow-md">
//         <p className="label">{`${label} : ${payload[0].value}`}</p>
//         <p className="desc">Anything you want can be displayed here.</p>
//       </div>
//     );
//   }

//   return null;
// };

export const BarChart = <T extends object>(props: IBarChartProps<T>) => {
  const {
    data,
    xAxisKeyName,
    yAxisTickFormatter,
    xAxisTickFormatter,
    yAxisKeyName,
  } = props;

  const [focusBar, setFocusBar] = useState(null);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <_BarChart
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
        // onMouseMove={(state) => {
        //   if (state.isTooltipActive) {
        //     setFocusBar(state.activeTooltipIndex);
        //   } else {
        //     setFocusBar(null);
        //   }
        // }}
      >
        {/* <CartesianGrid d /> */}
        <XAxis
        // dataKey={xAxisKeyName}
        // axisLine={true}
        // tickLine={false}
        // style={{
        //   fontSize: "12px",
        // }}
        // {...(xAxisTickFormatter && { tickFormatter: xAxisTickFormatter })}
        />
        <YAxis
          tickLine={false}
          axisLine={true}
          style={{
            fontSize: "12px",
          }}
          {...(yAxisTickFormatter && { tickFormatter: yAxisTickFormatter })}
        />

        {/* <Tooltip content={<CustomTooltip />} cursor={false} /> */}

        <Bar dataKey={yAxisKeyName as string} fill="#8aabff" maxBarSize={80}>
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={focusBar === index ? "#0057B6" : "#007AFF"}
            />
          ))}
        </Bar>
      </_BarChart>
    </ResponsiveContainer>
  );
};
