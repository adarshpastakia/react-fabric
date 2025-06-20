import type { StorybookConfig } from "@storybook/react-vite";
import { build, InlineConfig, mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../packages/**/stories/**/*.mdx",
    "../packages/**/stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    // "@storybook/addon-a11y",
    "@storybook/addon-vitest",
    "./addon-theme/register.tsx",
  ],
  staticDirs: ["../assets", "../static"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config: InlineConfig) {
    return mergeConfig(config, {
      build: {
        rollupOptions: {
          output: {
            compact: true,
            chunkFileNames: (chunkInfo) => {
              // Example: Remove underscores from chunk file names
              return "assets/" + chunkInfo.name.replace(/^_/, "") + ".js";
            },
          },
        },
      },
    });
  },
};
export default config;
