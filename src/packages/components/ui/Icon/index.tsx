import { createElement } from "react";
import { Box, BoxProps } from "../Box";
import {
  ChevronDown,
  LucideIcon,
  SunIcon,
  MoonIcon,
  Search,
  LogOut,
  MoreVertical,
  Edit,
  Trash,
} from "lucide-react";

export type IconNames =
  | "ChevronDown"
  | "Edit"
  | "Sun"
  | "Moon"
  | "Search"
  | "LogOut"
  | "Trash"
  | "MoreVertical";

type IIconProps = {
  size?: number;
  icon: IconNames;
} & BoxProps<"i">;

const IconComponents: { [key in IconNames]: LucideIcon } = {
  ChevronDown,
  Edit,
  Sun: SunIcon,
  Moon: MoonIcon,
  Search,
  LogOut,
  MoreVertical,
  Trash,
};

const Icon = (props: IIconProps) => {
  const { size, icon, style, ...rest } = props;

  const iconComponent = IconComponents[icon];

  if (!iconComponent) {
    console.warn("Icon does not exist");
    return <></>;
  }

  return (
    <Box style={{ width: size, height: size }} {...rest}>
      {createElement(IconComponents[icon], { size })}
    </Box>
  );
};

export type { IIconProps };

export { Icon };
