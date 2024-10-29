import { Box } from "@/packages/components/ui/Box";
import { Palettes } from "@/packages/theme";
import { getColorVariable } from "@/packages/utils/get-color-variable";

export const ColorSwatch = ({ color }: { color: Palettes }) => {
  return (
    <Box
      className="h-2.5 w-2.5"
      style={{
        backgroundColor: getColorVariable(color, 500),
      }}
    />
  );
};
