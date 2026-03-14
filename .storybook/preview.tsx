/*
 * React Fabric
 * @version   : 1.0.0
 * @copyright : 2024
 * @author    : Adarsh Pastakia
 */
import "@mdi/font/css/materialdesignicons.min.css";
import "./monaco";
import "./styles/styles.css";

import { Anchor, DocsContainer } from "@storybook/addon-docs/blocks";
import type { Preview } from "@storybook/react-vite";
import { initialize, mswLoader } from "msw-storybook-addon";
import { Fragment, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import { addons, useGlobals } from "storybook/internal/preview-api";
import { ApplicationProvider, useApplicationContext } from "@react-fabric/core";
import { default as i18n } from "./i18n";
import { darkTheme, lightTheme } from "./theme";

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

const ContextWrapper = (props: AnyObject) => {
  const { changeLocale, changeCalendar } = useApplicationContext();
  useEffect(() => {
    addons.getChannel().on("CALENDAR_CHANGE", (calendar: AnyObject) => {
      changeCalendar?.(calendar);
    });
    addons.getChannel().on("LOCALE_CHANGED", (locale: AnyObject) => {
      changeLocale?.(locale);
    });
  }, []);
  return <Fragment {...props} />;
};

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
      container: ({ children, context }: AnyObject) => {
        const globals = context.store.userGlobals.globals;

        useEffect(() => {
          const [primary, accent] = (globals.theme ?? "denim:jade").split(":");
          document.documentElement.style.setProperty(
            "--color-primary",
            `var(--color-${primary})`,
          );
          document.documentElement.style.setProperty(
            "--color-accent",
            `var(--color-${accent})`,
          );
          document.documentElement.style.setProperty(
            "--color-tint",
            `var(--color-${globals.tint ?? "silver"})`,
          );
          document.documentElement.dataset.colorScheme = globals.scheme;
          document.documentElement.dataset.rounding = globals.round;
        }, [globals]);

        return (
          <ApplicationProvider
            defaultLocale={globals.locale}
            defaultCalendar={globals.calendar}
          >
            <ContextWrapper>
              <DocsContainer
                context={context}
                theme={globals.scheme === "dark" ? darkTheme : lightTheme}
              >
                {children}
              </DocsContainer>
            </ContextWrapper>
          </ApplicationProvider>
        );
      },
      components: {
        h1: ({ storyId, ...props }: AnyObject) => (
          <Fragment>
            {storyId && <Anchor storyId={storyId} />}
            <div className="sbdocs-title" {...props} />
            <hr />
          </Fragment>
        ),
        h2: ({ storyId, ...props }: AnyObject) => (
          <Fragment>
            {storyId && <Anchor storyId={storyId} />}
            <p>ssdfsdfdf</p>
            <cite className="toc-selector" {...props} />
          </Fragment>
        ),
        h3: (props: AnyObject) => <code {...props} />,
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
        ],
      },
    },
  },
  loaders: [mswLoader],
  decorators: [
    (Story) => {
      const [globals, setGlobals] = useGlobals();

      useEffect(() => {
        const [primary, accent] = (globals.theme ?? "denim:jade").split(":");
        document.documentElement.style.setProperty(
          "--color-primary",
          `var(--color-${primary})`,
        );
        document.documentElement.style.setProperty(
          "--color-accent",
          `var(--color-${accent})`,
        );
        document.documentElement.style.setProperty(
          "--color-tint",
          `var(--color-${globals.tint ?? "silver"})`,
        );
        document.documentElement.dataset.colorScheme = globals.scheme;
        document.documentElement.dataset.rounding = globals.round;
      }, [globals]);

      return (
        <I18nextProvider i18n={i18n}>
          <ApplicationProvider
            defaultLocale={globals.locale}
            defaultColorScheme={globals.scheme}
            defaultCalendar={globals.calendar}
          >
            <ContextWrapper>
              {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
              <Story />
            </ContextWrapper>
          </ApplicationProvider>
        </I18nextProvider>
      );
    },
    // withTests({ results }),
  ],
} as Preview;
