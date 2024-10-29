import { Palettes } from "@/packages/theme";

const getColorVariable = (color: Palettes, shade: number) => {
  return `var(--colors-${color}-${shade})`;
};

export { getColorVariable };
