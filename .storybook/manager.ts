/*
 * React Fabric
 * @version   : 1.0.0
 * @copyright : 2024
 * @author    : Adarsh Pastakia
 */

import { addons } from "storybook/manager-api";
import { darkTheme } from "./theme";

addons.setConfig({
  theme: darkTheme,
  sidebar: {
    showRoots: true,
    filters: {
      patterns: (item) => {
        return !item.name.includes("Tester");
      },
    },
    renderLabel: ({ name }) => {
      if (name.match(/_.*_/)) return name.replace(/_/g, "") + " ⚠︎";
      return name;
    },
  },
});
