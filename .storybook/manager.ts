/*
 * React Fabric
 * @version   : 1.0.0
 * @copyright : 2024
 * @author    : Adarsh Pastakia
 */

import { addons, types } from "@storybook/addons";
import { ThemeToggle } from "./addon-theme/register";
import { lightTheme } from "./theme";

addons.setConfig({
  theme: lightTheme,
  sidebar: {
    showRoots: true,
    filters: {
      patterns: (item) => {
        return item.name !== "Tester";
      },
    },
    renderLabel: ({ name }) => {
      if (name.match(/_.*_/)) return name.replace(/_/g, "") + " ⚠︎";
      return name;
    },
  },
});

// Register the addon
addons.register("themeChanger", () => {
  // Register the tool
  addons.add("themeChanger", {
    type: types.TOOL,
    title: "Theme toggle",
    match: ({ viewMode }) => viewMode === "story" || viewMode === "docs",
    render: ThemeToggle,
  });
});
