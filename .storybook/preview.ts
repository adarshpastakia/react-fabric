/*
 * React Fabric
 * @version   : 1.0.0
 * @copyright : 2024
 * @author    : Adarsh Pastakia
 */
import "@mdi/font/css/materialdesignicons.min.css";
import "./monaco";
import "./styles/styles.css";

import type { Preview } from "@storybook/react-vite";
import { initialize, mswLoader } from "msw-storybook-addon";
import { default as i18n } from "./i18n";
import { darkTheme, lightTheme } from "./theme";
import { ContainerWrapper } from "./wrappers/Container";
import { H1Wrapper } from "./wrappers/H1";
import { H2Wrapper } from "./wrappers/H2";
import { H3Wrapper } from "./wrappers/H3";
import { StoryWrapper } from "./wrappers/Story";

enum THEME {
  DENIM = "denim:avacado",
  IRIS = "iris:coral",
  JADE = "jade:wood",
  PUMPKIN = "pumpkin:lilac",
  SCARLET = "scarlet:marigold",
}
enum TINT {
  SILVER = "silver",
  STEEL = "steel",
  OLIVE = "olive",
  SAND = "sand",
  CLAY = "clay",
}
enum ROUNDING {
  SMALL = "sm",
  NORMAL = "normal",
  MEDIUM = "md",
  FULL = "full",
}

/*
 * Initializes MSW
 * See https://github.com/mswjs/msw-storybook-addon#configuring-msw
 * to learn how to customize it
 */
initialize({
  onUnhandledRequest: "bypass",
  serviceWorker: { url: "./serviceWorker.js" },
});

document.documentElement.dir = i18n.dir();

export default {
  parameters: {
    layout: "centered",
    backgrounds: { disable: true, grid: { disable: true } },
    a11y: {},
    controls: {
      exclude: /^on(?!Label).*/,
      sort: "requiredFirst",
      matchers: {
        date: /^date$/,
      },
    },
    viewport: {
      viewports: {
        mobile1: {
          name: "Small mobile",
          styles: { height: "568px", width: "320px" },
          type: "mobile",
        },
        mobile2: {
          name: "Large mobile",
          styles: { height: "896px", width: "414px" },
          type: "mobile",
        },
        tablet: {
          name: "Tablet",
          styles: { height: "1112px", width: "834px" },
          type: "tablet",
        },
      },
      // defaultViewport: "responsive",
    },
    themeToggle: {
      darkTheme,
      lightTheme,
    },
    docs: {
      toc: {},
      controls: { sort: "alpha" },
      extractComponentDescription: (comp: AnyObject) => {
        return comp?.__docgenInfo?.description?.replace(/\n@.*(\n.*)*/g, "");
      },
      container: ContainerWrapper,
      components: {
        h1: H1Wrapper,
        h2: H2Wrapper,
        h3: H3Wrapper,
      },
    },
  },
  globalTypes: {
    locale: {
      name: "Locale",
      description: "Internationalization locale",
      defaultValue: "en",
      toolbar: {
        icon: "globe",
        active: true,
        items: [
          { value: "en", right: "🇺🇸", title: "English" },
          { value: "ar", right: "🇦🇪", title: "Arabic" },
        ],
      },
    },
    calendar: {
      name: "Calendar",
      description: "Global calendar",
      defaultValue: "gregorian",
      toolbar: {
        icon: "calendar",
        items: [
          { value: "gregorian", title: "Gregorian" },
          { value: "hijri", title: "Hijri" },
        ],
      },
    },
    round: {
      name: "Rounding",
      description: "Global rounding for components",
      defaultValue: ROUNDING.NORMAL,
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: ROUNDING.SMALL, title: "Small" },
          { value: ROUNDING.NORMAL, title: "Normal" },
          { value: ROUNDING.MEDIUM, title: "Medium" },
          { value: ROUNDING.FULL, title: "Full" },
        ],
      },
    },
    scheme: {
      name: "Color scheme",
      description: "Global color scheme for components",
      defaultValue: "light",
      toolbar: {
        items: [
          { value: "light", title: "Light", icon: "sun" },
          { value: "dark", title: "Dark", icon: "moon" },
        ],
      },
    },
    theme: {
      name: "Theme",
      description: "Global theme for components",
      defaultValue: THEME.DENIM,
      toolbar: {
        items: [
          { value: THEME.DENIM, title: "Denim/Jade" },
          { value: THEME.IRIS, title: "Iris/Coral" },
          { value: THEME.JADE, title: "Jade/Wood" },
          { value: THEME.PUMPKIN, title: "Pumpkin/Lilac" },
          { value: THEME.SCARLET, title: "Scarlet/Marigold" },
        ],
      },
    },
    tint: {
      name: "Tint",
      description: "Global tint for components",
      defaultValue: TINT.SILVER,
      toolbar: {
        items: [
          { value: TINT.SILVER, title: "Silver" },
          { value: TINT.STEEL, title: "Steel" },
          { value: TINT.OLIVE, title: "Olive" },
          { value: TINT.SAND, title: "Sand" },
          { value: TINT.CLAY, title: "Clay" },
        ],
      },
    },
  },
  loaders: [mswLoader],
  decorators: [
    StoryWrapper,
    // withTests({ results }),
  ],
} as Preview;
