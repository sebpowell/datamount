import { Box, BoxProps } from "@/packages/components/ui/Box";
import { ColorSwatch } from "@/packages/components/ui/ColorSwatch";
import { Heading, HeadingProps } from "@/packages/components/ui/Heading";
import { Palettes } from "@/packages/theme";
import { getColorVariable } from "@/packages/utils/get-color-variable";
import { ProgressBarSegmentFactoryReturn } from "@/packages/utils/progress-bar-factory";

type ProgressBarHeader = BoxProps<"div">;

const ProgressBarHeader = (props: ProgressBarHeader) => {
  const { style, ...rest } = props;

  return <Box {...rest} />;
};

const ProgressBarTitle = (props: Omit<HeadingProps, "size">) => {
  return <Heading size="h5" {...props} />;
};

type ProgressBarSegmentProps = {
  color: Palettes;
  width: number | null;
  value: number | null;
  type?: "gradient" | "solid";
};

const ProgressBarLegendItem = ({
  segment,
}: {
  segment: ProgressBarSegmentProps;
}) => {
  return (
    <Box className="flex items-center">
      <Box className="flex items-center gap-3">
        <ColorSwatch color={segment.color} />
        <Box className="text-lg">Married</Box>
      </Box>

      <Box className="ml-auto">Value</Box>
    </Box>
  );
};

const ProgressBarLegend = ({
  segments,
}: {
  segments: ProgressBarSegmentProps[];
}) => {
  return (
    <Box className="gap-4">
      {segments.map((segment, i) => {
        return <ProgressBarLegendItem key={i} segment={segment} />;
      })}
    </Box>
  );
};

const ProgressBarSegment = (props: ProgressBarSegmentProps) => {
  const { color, width } = props;

  return (
    <Box
      className="h-full"
      style={{
        width: `${width}%`,
        backgroundColor: getColorVariable(color, 500),
      }}
    />
  );
};

type ProgressBarProps = {
  segments: ProgressBarSegmentFactoryReturn;
};

const ProgressBar = (props: ProgressBarProps) => {
  const { segments = [] } = props;

  return (
    <Box className="flex h-2 gap-[1px] rounded-full bg-background-tertiary">
      {segments.map((segment, i) => {
        return (
          <>
            <ProgressBarSegment
              width={segment.percentage}
              color={segment.color}
              type="solid"
              value={segment.value}
              key={i}
            />
          </>
        );
      })}
    </Box>
  );
};

export type { ProgressBarProps, ProgressBarSegmentProps };

export {
  ProgressBar,
  ProgressBarTitle,
  ProgressBarHeader,
  ProgressBarSegment,
  ProgressBarLegend,
  ProgressBarLegendItem,
};
