/*
 * React Fabric
 * @version   : 1.0.0
 * @copyright : 2024
 * @author    : Adarsh Pastakia
 */
import "@mdi/font/css/materialdesignicons.min.css";
import "./styles/styles.css";
import "./monaco";

import { Anchor, DocsContainer } from "@storybook/addon-docs/blocks";
import type { Preview } from "@storybook/react-vite";
import { initialize, mswLoader } from "msw-storybook-addon";
import { Fragment, useEffect, useMemo } from "react";
import { I18nextProvider } from "react-i18next";
import { addons, useGlobals } from "storybook/internal/preview-api";
import {
  ApplicationProvider,
  useApplicationContext,
} from "../packages/core/src";
import { default as i18n } from "./i18n";
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

        const defaultTheme = useMemo(
          () => localStorage.getItem("storybook-scheme") ?? "light",
          [],
        );

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
            "--color-primary",
            `var(--color-${primary})`,
          );
          document.documentElement.style.setProperty(
            "--color-accent",
            `var(--color-${accent})`,
          );
          document.documentElement.style.setProperty(
            "--color-tint",
            `var(--color-${tint})`,
          );
          document.documentElement.dataset.colorScheme = scheme;
          document.documentElement.dataset.rounding = round;
        }, []);

        return (
          <ApplicationProvider
            defaultLocale={globals.locale}
            defaultColorScheme={defaultTheme as AnyObject}
            defaultCalendar={defaultCalendar as AnyObject}
          >
            <ContextWrapper>
              <DocsContainer
                context={context}
                theme={defaultTheme === "dark" ? darkTheme : lightTheme}
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
          "--color-primary",
          `var(--color-${primary})`,
        );
        document.documentElement.style.setProperty(
          "--color-accent",
          `var(--color-${accent})`,
        );
        document.documentElement.style.setProperty(
          "--color-tint",
          `var(--color-${tint})`,
        );
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
    // withTests({ results }),
  ],
} as Preview;

addons.getChannel().on("LOCALE_CHANGED", (locale: AnyObject) => {
  i18n.changeLanguage(locale).then(() => {
    document.documentElement.dir = i18n.dir();
  });
});
addons.getChannel().on("SCHEME_CHANGED", (theme: AnyObject = "light") => {
  document.documentElement.dataset.colorScheme = theme;
});
addons
  .getChannel()
  .on(
    "THEME_CHANGED",
    (primary: AnyObject = "denim", accent: AnyObject = "avacado") => {
      document.documentElement.style.setProperty(
        "--color-primary",
        `var(--color-${primary})`,
      );
      document.documentElement.style.setProperty(
        "--color-accent",
        `var(--color-${accent})`,
      );
    },
  );
addons.getChannel().on("TINT_CHANGED", (tint: AnyObject = "silver") => {
  document.documentElement.style.setProperty(
    "--color-tint",
    `var(--color-${tint})`,
  );
});
addons.getChannel().on("ROUNDING_CHANGED", (round: AnyObject = "md") => {
  document.documentElement.dataset.rounding = round;
});
