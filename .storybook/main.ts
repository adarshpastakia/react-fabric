import type { StorybookConfig } from "@storybook/react-vite";
import { InlineConfig, mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../packages/**/stories/**/*.mdx",
    "../packages/**/stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
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
            chunkFileNames: (chunkInfo: any) => {
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
