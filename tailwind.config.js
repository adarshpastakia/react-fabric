module.exports = {
  content: [
    "./packages/**/*.{js,jsx,ts,tsx,mdx}",
    "./stories/**/*.{mdx,tsx}",
    "./.storybook/**/*.{mdx,tsx}",
  ],
  plugins: [
    require("@react-fabric/core/css"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries"),
  ],
};
