/*
 * React UI Framework
 * @version   : 1.0.0
 * @copyright : 2024
 * @author    : Adarsh Pastakia
 */

import { addons, types } from "@storybook/addons";
import { ThemeToggle } from "./addon-theme/register";

addons.setConfig({
  sidebar: {
    showRoots: true,
  },
});

// Register the addon
addons.register("themeToggle", () => {
  // Register the tool
  addons.add("themeToggle", {
    type: types.TOOL,
    title: "Theme toggle",
    match: ({ viewMode }) => viewMode === "story" || viewMode === "docs",
    render: ThemeToggle,
  });
});
