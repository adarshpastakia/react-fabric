/*
 * React Fabric
 * @version   : 1.0.0
 * @copyright : 2024
 * @author    : Adarsh Pastakia
 */
import "./monaco";
import "./styles/styles.css";

import { Collapsable } from "@/core/src";
import {
  ArgTypes,
  Canvas,
  Controls,
  Description,
  DocsContext,
  Subheading,
  Subtitle,
  Title,
} from "@storybook/addon-docs/blocks";
import type { Preview } from "@storybook/react-vite";
import { mswLoader } from "msw-storybook-addon/csf3";
import { Fragment, use } from "react";
import { default as i18n } from "./i18n";
import { darkTheme, lightTheme } from "./theme";
import { ContainerWrapper } from "./wrappers/Container";
import { H1Wrapper } from "./wrappers/H1";
import { H2Wrapper } from "./wrappers/H2";
import { H3Wrapper } from "./wrappers/H3";
import { StoryWrapper } from "./wrappers/Story";

enum THEME {
  DENIM = "denim:jade",
  IRIS = "iris:coral",
  AVOCADO = "avocado:wood",
  PUMPKIN = "pumpkin:lilac",
  SCARLET = "scarlet:marigold",
}
enum TINT {
  SILVER = "silver",
  STEEL = "steel",
  OLIVE = "olive",
  BLUSH = "blush",
  SAND = "sand",
  SLATE = "slate",
}
enum ROUNDING {
  SMALL = "sm",
  NORMAL = "normal",
  MEDIUM = "md",
  FULL = "full",
}
enum STYLE_EFFECT {
  NONE = "",
  GLASS = "glass",
  MATTE = "matte",
}

document.documentElement.dir = i18n.dir();

export default {
  parameters: {
    layout: "centered",
    backgrounds: { disable: true, grid: { disable: true } },
    a11y: {},
    controls: {
      exclude: /^(children|as|on)/,
      sort: "requiredFirst",
      matchers: {
        date: /^date$/,
        text: /^(bg|color)$/,
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
      page: () => {
        const context = use(DocsContext);
        const stories = context.componentStories();
        return (
          <>
            <Title />
            <Subtitle />
            <Description />
            {stories.map(
              (story) =>
                story.name !== "Tester" && (
                  <Fragment key={story.id}>
                    <Subheading>{story.name}</Subheading>
                    <div className="relative">
                      <div className="sticky top-0 z-5">
                        <Canvas of={story.moduleExport} />
                      </div>
                      <Collapsable>
                        <div className="text-xs!">Controls</div>
                        <Controls of={story.moduleExport} />
                      </Collapsable>
                    </div>
                  </Fragment>
                ),
            )}
            <Subheading>Props</Subheading>
            <ArgTypes sort="requiredFirst" />
          </>
        );
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
          { value: THEME.AVOCADO, title: "Avocado/Wood" },
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
          { value: TINT.BLUSH, title: "Blush" },
          { value: TINT.SAND, title: "Sand" },
          { value: TINT.SLATE, title: "Slate" },
        ],
      },
    },
    effect: {
      name: "Style Effect",
      description: "Style effect for components",
      defaultValue: STYLE_EFFECT.NONE,
      toolbar: {
        items: [
          { value: STYLE_EFFECT.NONE, title: "None" },
          { value: STYLE_EFFECT.GLASS, title: "Glass" },
          { value: STYLE_EFFECT.MATTE, title: "Matte" },
        ],
      },
    },
  },
  loaders: [mswLoader as any],
  decorators: [
    StoryWrapper,
    // withTests({ results }),
  ],
} as Preview;
