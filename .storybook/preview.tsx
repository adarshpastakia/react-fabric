/*
 * React Fabric
 * @version   : 1.0.0
 * @copyright : 2024
 * @author    : Adarsh Pastakia
 */
import "@mdi/font/css/materialdesignicons.min.css";
import "./styles/styles.css";

import { ApplicationProvider, useApplicationContext } from "@react-fabric/core";
import { Anchor } from "@storybook/addon-docs";
import { withTests } from "@storybook/addon-jest";
import { DocsContainer } from "@storybook/blocks";
import { addons, useGlobals } from "@storybook/preview-api";
import { Preview } from "@storybook/react";
import { initialize, mswLoader } from "msw-storybook-addon";
import { Fragment, useEffect, useMemo } from "react";
import { I18nextProvider } from "react-i18next";
import { default as i18n } from "./i18n";
import results from "./jest-test-results.json";
import { darkTheme, lightTheme } from "./theme";

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
    addons.getChannel().on("CALENDAR_CHANGE", (calendar: any) => {
      changeCalendar?.(calendar);
    });
    addons.getChannel().on("LOCALE_CHANGED", (locale: any) => {
      changeLocale?.(locale);
    });
  }, []);
  return <Fragment {...props} />;
};

export default {
  parameters: {
    layout: "centered",
    backgrounds: { disable: true, grid: { disable: true } },
    actions: { argTypesRegex: "^on.*" },
    a11y: {},
    controls: {
      exclude: /^on.*/,
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
      container: ({ children, context }: any) => {
        const globals = context.store.globals.get();

        const defaultCalendar = useMemo(
          () => localStorage.getItem("storybook-calendar") ?? "gregorian",
          [],
        );

        useEffect(() => {
          const scheme = localStorage.getItem("storybook-scheme") ?? "light";
          const theme = localStorage.getItem("storybook-theme") ?? "denim:jade";
          const tint = localStorage.getItem("storybook-tint") ?? "silver";
          const round = localStorage.getItem("storybook-rounding") ?? "normal";
          const [primary, accent] = theme.split(":");
          document.documentElement.style.setProperty(
            "--primary",
            `var(--${primary})`,
          );
          document.documentElement.style.setProperty(
            "--accent",
            `var(--${accent})`,
          );
          document.documentElement.style.setProperty(
            "--tint",
            `var(--${tint})`,
          );
          document.documentElement.dataset.colorScheme = scheme;
          document.documentElement.dataset.rounding = round;
        }, []);

        return (
          <ApplicationProvider
            defaultLocale={globals.locale}
            defaultColorScheme={globals.theme}
            defaultCalendar={defaultCalendar as AnyObject}
          >
            <ContextWrapper>
              <DocsContainer
                context={context}
                theme={globals.theme === "dark" ? darkTheme : lightTheme}
              >
                {children}
              </DocsContainer>
            </ContextWrapper>
          </ApplicationProvider>
        );
      },
      components: {
        h1: ({ storyId, ...props }: any) => (
          <Fragment>
            {storyId && <Anchor storyId={storyId} />}
            <div className="sbdocs-title" {...props} />
            <hr />
          </Fragment>
        ),
        h2: ({ storyId, ...props }: any) => (
          <Fragment>
            {storyId && <Anchor storyId={storyId} />}
            <cite className="toc-selector" {...props} />
          </Fragment>
        ),
        h3: (props: any) => <code {...props} />,
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
          { value: "en", left: "🇺🇸", title: "English" },
          { value: "ar", left: "🇦🇪", title: "Arabic" },
        ],
      },
    },
  },
  loaders: [mswLoader],
  decorators: [
    (Story) => {
      const [globals] = useGlobals();

      const defaultCalendar = useMemo(
        () => localStorage.getItem("storybook-calendar") ?? "gregorian",
        [],
      );

      useEffect(() => {
        const scheme = localStorage.getItem("storybook-scheme") ?? "light";
        const theme =
          localStorage.getItem("storybook-theme") ?? "denim:avacado";
        const tint = localStorage.getItem("storybook-tint") ?? "silver";
        const round = localStorage.getItem("storybook-rounding") ?? "normal";
        const [primary, accent] = theme.split(":");
        document.documentElement.style.setProperty(
          "--primary",
          `var(--${primary})`,
        );
        document.documentElement.style.setProperty(
          "--accent",
          `var(--${accent})`,
        );
        document.documentElement.style.setProperty("--tint", `var(--${tint})`);
        document.documentElement.dataset.colorScheme = scheme;
        document.documentElement.dataset.rounding = round;
      }, []);

      return (
        <I18nextProvider i18n={i18n}>
          <ApplicationProvider
            defaultLocale={globals.locale}
            defaultCalendar={defaultCalendar as AnyObject}
          >
            <ContextWrapper>
              {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
              <Story />
            </ContextWrapper>
          </ApplicationProvider>
        </I18nextProvider>
      );
    },
    withTests({ results }),
  ],
} as Preview;

addons.getChannel().on("LOCALE_CHANGED", (locale: any) => {
  i18n.changeLanguage(locale).then(() => {
    document.documentElement.dir = i18n.dir();
  });
});
addons.getChannel().on("SCHEME_CHANGED", (theme: any = "light") => {
  document.documentElement.dataset.colorScheme = theme;
});
addons
  .getChannel()
  .on("THEME_CHANGED", (primary: any = "denim", accent: any = "avacado") => {
    document.documentElement.style.setProperty(
      "--primary",
      `var(--${primary})`,
    );
    document.documentElement.style.setProperty("--accent", `var(--${accent})`);
  });
addons.getChannel().on("TINT_CHANGED", (tint: any = "silver") => {
  document.documentElement.style.setProperty("--tint", `var(--${tint})`);
});
addons.getChannel().on("ROUNDING_CHANGED", (round: any = "md") => {
  document.documentElement.dataset.rounding = round;
});
