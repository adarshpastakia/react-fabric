import { create } from "storybook/theming";

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
  appContentBg: "#f9f9f9",
  colorPrimary: "#10ac84",
  colorSecondary: "#2e86de",
  ...reset,
});
export const darkTheme = create({
  base: "dark",
  appBg: "#151B20",
  barBg: "#1A1A1B",
  textColor: "#fefefe",
  inputTextColor: "#fefefe",
  appContentBg: "#1b2125",
  colorPrimary: "#10ac84",
  colorSecondary: "#2e86de",
  ...reset,
});
