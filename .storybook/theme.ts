import { create } from "@storybook/theming";

const brandTitle = "React Fabric";
const reset = {
  fontBase: 'Montserrat, "Helvetica Neue", Arial, sans-serif',
  fontCode: "Consolas, Monaco, monospace",
  brandImage: "poster.png",
  brandTitle,
};

export const lightTheme = create({
  base: "light",
  appBg: "#f5f6fa",
  barBg: "#fefefe",
  appContentBg: "#fafdfd",
  colorPrimary: "#10ac84",
  colorSecondary: "#2e86de",
  ...reset,
});
export const darkTheme = create({
  base: "dark",
  appBg: "#151B20",
  barBg: "#2f3640",
  textColor: "#fefefe",
  inputTextColor: "#fefefe",
  appContentBg: "#1e272e",
  colorPrimary: "#10ac84",
  colorSecondary: "#2e86de",
  ...reset,
});
