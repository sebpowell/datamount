import { IconButton } from "@/packages/components/ui/IconButton";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <IconButton
      size="sm"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      icon={theme === "light" ? "Moon" : "Sun"}
    />
  );
};

export { ThemeSwitcher };
