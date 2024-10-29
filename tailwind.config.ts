import { withTV } from "tailwind-variants/transformer";
import tailwindcssAnimate from "tailwindcss-animate";
import tailwindVariables from "@mertasan/tailwindcss-variables";
import defaultTheme from "tailwindcss/colors";
import tailwindcssRadix from "tailwindcss-radix";
import colorVariable from "@mertasan/tailwindcss-variables/colorVariable";
import plugin from "tailwindcss/plugin";

const space = {
  0: "0px",
  0.5: "2px",
  1: "4px",
  1.5: "6px",
  2: "8px",
  2.5: "10px",
  3: "12px",
  3.5: "14px",
  4: "16px",
  5: "20px",
  6: "24px",
  7: "28px",
  8: "32px",
  9: "36px",
  10: "40px",
  11: "44px",
  12: "48px",
  13: "52px",
  14: "56px",
  15: "60px",
  16: "64px",
  18: "72px",
  20: "80px",
  22: "88px",
  24: "96px",
  28: "112px",
  32: "128px",
  36: "144px",
  40: "160px",
  44: "176px",
  48: "192px",
  52: "208px",
  56: "224px",
  60: "240px",
  64: "256px",
  72: "288px",
  80: "320px",
  96: "384px",
};

const palettes = {
  forest: {
    "50": "#f2f7f2",
    "100": "#e1ebe0",
    "200": "#c4d7c3",
    "300": "#9abb9b",
    "400": "#7ca37e",
    "500": "#4e7b52",
    "600": "#3a613e",
    "700": "#2e4e32",
    "800": "#263f29",
    "900": "#203423",
    "950": "#111d13",
  },
};

const convertPalettesToTailwind = (
  palettes: Record<string, Record<string, string>>,
): Record<string, Record<string, string>> => {
  const newPalettes: Record<string, Record<string, string>> = {};

  Object.keys(palettes).forEach((paletteName) => {
    newPalettes[paletteName] = Object.keys(palettes[paletteName]).reduce(
      (acc, shade) => {
        acc[shade] = colorVariable(`--colors-${paletteName}-${shade}`);
        return acc;
      },
      {} as Record<string, string>,
    );
  });

  return newPalettes;
};

/** @type {import('tailwindcss').Config} */
module.exports = withTV({
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./stories/**/*.{js,ts,jsx,tsx}"],
  plugins: [
    tailwindcssAnimate,
    tailwindcssRadix({}),
    tailwindVariables({
      colorVariables: true,
    }),
    plugin(function ({ addVariant }) {
      addVariant("hocus", ["&:hover", "&:focus"]);
    }),
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["var(--font-geist-sans)"],
      mono: ["var(--font-geist-mono)"],
    },
    spacing: {
      0: "var(--space-0)",
      0.5: "var(--space-0\\.5)",
      1: "var(--space-1)",
      1.5: "var(--space-1\\.5)",
      2: "var(--space-2)",
      2.5: "var(--space-2\\.5)",
      3: "var(--space-3)",
      3.5: "var(--space-3\\.5)",
      4: "var(--space-4)",
      5: "var(--space-5)",
      6: "var(--space-6)",
      7: "var(--space-7)",
      8: "var(--space-8)",
      9: "var(--space-9)",
      10: "var(--space-10)",
      11: "var(--space-11)",
      12: "var(--space-12)",
      13: "var(--space-13)",
      14: "var(--space-14)",
      15: "var(--space-15)",
      16: "var(--space-16)",
      18: "var(--space-18)",
      20: "var(--space-20)",
      22: "var(--space-22)",
      24: "var(--space-24)",
      28: "var(--space-28)",
      32: "var(--space-32)",
      36: "var(--space-36)",
      40: "var(--space-40)",
      "form-control-x-small": "var(--space-form-control-xs)",
      "form-control-small": "var(--space-form-control-sm)",
      "form-control-default": "var(--space-form-control-default)",
      "form-control-large": "var(--space-form-control-lg)",
      "form-control-x-large": "var(--space-form-control-xl)",
    },
    extend: {
      borderRadius: {
        default: "var(--border-radius-default)",
      },
      colors: {
        ...convertPalettesToTailwind(palettes),
        white: "white",
        transparent: "transparent",
        primary: { ...defaultTheme.cyan },
        "background-primary": colorVariable("var(--colors-background-primary)"),
        "background-primary-active": colorVariable(
          "var(--colors-background-primary-active)",
        ),
        "background-primary-inverse": colorVariable(
          "var(--colors-background-primary-inverse)",
        ),
        "background-primary-inverse-active": colorVariable(
          "var(--colors-background-primary-inverse-active)",
        ),
        "background-secondary": colorVariable(
          "var(--colors-background-secondary)",
        ),
        "background-secondary-active": colorVariable(
          "var(--colors-background-secondary-active)",
        ),
        "background-secondary-selected": colorVariable(
          "var(--colors-background-secondary-selected)",
        ),
        "background-secondary-border": "",
        "background-tertiary": "var(--colors-background-tertiary)",
        "background-tertiary-active":
          "var(--colors-background-tertiary-active)",
        "border-primary": "var(--colors-border-primary)",
        "border-primary-active": "var(--colors-border-primary-active)",
        "border-secondary": colorVariable("var(--colors-border-secondary)"),
        "text-primary": colorVariable("var(--colors-text-primary)"),
        "text-primary-inverse": colorVariable(
          "var(--colors-text-primary-inverse)",
        ),
        "text-secondary": colorVariable("var(--colors-text-secondary)"),
        "text-tertiary": colorVariable("var(--colors-text-tertiary)"),
        ring: "var(--colors-ring)",
      },
      spacing: {
        gutter: "var(--space-gutter)",
      },
      boxShadow: {
        item: "0 0 0 1px rgba(00,00,00,0.05), 0 1px 1px rgba(00,00,00,0.1)",
      },
    },
    variables: {
      DEFAULT: {
        colors: {
          ...defaultTheme,
          ...palettes,
          "background-primary": defaultTheme.white,
          "background-primary-active": defaultTheme.neutral[100],
          "background-primary-inverse": defaultTheme.black,
          "background-primary-inverse-active": defaultTheme.neutral[800],
          "background-secondary": defaultTheme.neutral[50],
          "background-secondary-active": defaultTheme.neutral[200],
          "background-secondary-selected": defaultTheme.white,
          "background-tertiary": defaultTheme.neutral[200],
          "background-tertiary-active": defaultTheme.neutral[300],
          "border-primary": defaultTheme.black,
          "border-primary-active": defaultTheme.neutral[300],
          "border-secondary": defaultTheme.neutral[300],
          "border-secondary-active": defaultTheme.neutral[400],
          "text-primary": defaultTheme.neutral[950],
          "text-primary-inverse": defaultTheme.white,
          "text-secondary": defaultTheme.neutral[700],
          "text-tertiary": defaultTheme.neutral[500],
          ring: defaultTheme.neutral[400],
        },
        space: {
          ...space,
          "form-control-xs": space[10],
          "form-control-sm": space[11],
          "form-control-default": space[12],
          "form-control-lg": space[13],
          "form-control-xl": space[14],
          gutter: space[4],
        },
      },
    },
    darkVariables: {
      DEFAULT: {
        colors: {
          ...defaultTheme,
          "background-primary": defaultTheme.neutral[950],
          "background-primary-active": defaultTheme.neutral[900],
          "background-primary-inverse": defaultTheme.white,
          "background-secondary": defaultTheme.neutral[900],
          "background-secondary-active": defaultTheme.neutral[800],
          "background-secondary-selected": defaultTheme.neutral[800],
          "background-tertiary": defaultTheme.neutral[800],
          "background-tertiary-active": defaultTheme.neutral[700],
          "border-primary": defaultTheme.neutral[900],
          "border-primary-active": defaultTheme.neutral[600],
          "text-primary": defaultTheme.neutral[50],
          "text-primary-inverse": defaultTheme.neutral[950],
          "text-secondary": defaultTheme.neutral[400],
          "text-tertiary": defaultTheme.neutral[500],
          ring: defaultTheme.neutral[600],
        },
      },
    },
  },
});
