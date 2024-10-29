import { ReactNode } from "react";
import { calculatePercentage } from "./calculate-percentage";
import { calculateTotal } from "./calculate-total";
import { Palettes } from "@/packages/theme";

type ProgressBarSegmentFactoryProps = {
  markers?: [{ value: number }];
  segments: {
    value: number | null;
    label:
      | ReactNode
      | ((props: {
          value: number | null;
          total: number;
          color: Palettes;
          percentage: number | null;
        }) => ReactNode);
    color: Palettes;
  }[];
};

type ProgressBarSegmentFactoryReturn = {
  color: Palettes;
  value: number | null;
  label: ReactNode;
  type?: "gradient" | "solid";
  percentage: number | null;
  percentageFormatted: string;
}[];

const progressBarSegmentFactory = (
  props: ProgressBarSegmentFactoryProps,
): ProgressBarSegmentFactoryReturn => {
  const { segments: segmentsProps } = props;

  const total = calculateTotal(segmentsProps.map(({ value }) => value));

  const segments: ProgressBarSegmentFactoryReturn = segmentsProps.map(
    (item) => {
      const { value, label, color, ...rest } = item;

      const percentage = calculatePercentage(value, total);

      return {
        ...rest,
        value,
        color,
        label:
          typeof label === "function"
            ? label({ value, total, percentage, color })
            : label,
        percentage,
        percentageFormatted: `${percentage}%`,
      };
    },
  );

  return segments;
};

export type { ProgressBarSegmentFactoryProps, ProgressBarSegmentFactoryReturn };

export { progressBarSegmentFactory };
