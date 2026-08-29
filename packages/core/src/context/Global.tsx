/**
 * React Fabric
 * @version 1.0.0
 * @license MIT
 * @copyright 2024 Adarsh Pastakia
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import i18next from "i18next";
import type { PropsWithChildren } from "react";
import { useCallback, useEffect, useEffectEvent, useLayoutEffect, useState } from "react";
import { Toaster } from "sonner";
import { AnimationIndicator } from "../components/animations/Indicator";
import { Icon } from "../components/icon/Icon";
import type { State } from "./context";
import { GlobalContext } from "./context";
import { ModalManagerProvider } from "./ModalManager";

export interface GlobalProps extends PropsWithChildren {
  /**
   * application default error display
   */
  errorElement?: React.ComponentType<{ error?: string }>;

  // Overlay effect
  styleEffect?: "glass" | "matte";

  defaultLocale?: string;
  defaultCalendar?: State["calendar"];
  defaultColorScheme?: State["colorScheme"];
}

const KEY_LOCALE = "ruf:locale";
const KEY_CALENDAR = "ruf:calendar";
const KEY_COLOR_SCHEME = "ruf:colorScheme";
const systemLocale = () => {
  return (typeof window !== "undefined" ? localStorage.getItem(KEY_LOCALE) : undefined) ?? "en";
};
const systemCalendar = () => {
  return (typeof window !== "undefined" ? (localStorage.getItem(KEY_CALENDAR) as State["calendar"]) : undefined) ?? "gregorian";
};
const systemColorScheme = () => {
  const theme: AnyObject =
    typeof window !== "undefined"
      ? ((localStorage.getItem(KEY_COLOR_SCHEME) as State["colorScheme"]) ??
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"))
      : "light";
  return theme as "light" | "dark";
};

/**
 * Root context provider for the application.
 * Wraps the app with global state management for locale, calendar system, and color scheme,
 * and provides context to all descendant components via `GlobalContext`.
 *
 * @example
 * ```tsx
 * <ApplicationProvider defaultLocale="en" defaultColorScheme="dark">
 *    <App />
 * </ApplicationProvider>
 * ```
 */
export function ApplicationProvider({
  children,
  errorElement,
  defaultLocale,
  defaultCalendar,
  defaultColorScheme,
  styleEffect,
}: GlobalProps) {
  const [colorScheme, setColorScheme] = useState<State["colorScheme"]>(() => defaultColorScheme ?? systemColorScheme());
  const [calendar, setCalendar] = useState<State["calendar"]>(() => defaultCalendar ?? systemCalendar());
  const [locale, setLocale] = useState<State["locale"]>(() => defaultLocale ?? systemLocale());

  const [areas, setAreas] = useState<Record<string, (open?: boolean) => void>>({});

  /** ***************** set initial theme and locale dir  *******************/
  const init = useEffectEvent(() => {
    document.documentElement.lang = locale;
    if (!document.documentElement.dataset.colorScheme) {
      document.documentElement.dataset.colorScheme = colorScheme;
    } else {
      // eslint-disable-next-line @eslint-react/set-state-in-effect
      setColorScheme(document.documentElement.dataset.colorScheme as "light" | "dark");
    }
    if (typeof window !== "undefined") {
      try {
        void i18next.changeLanguage(locale).then(() => {
          document.documentElement.dir = i18next.dir();
        });
      } catch {
        //
      }
    }
  });

  // eslint-disable-next-line @eslint-react/exhaustive-deps
  useEffect(init, []);

  /** ***************** theme toggle *******************/
  const toggleColorScheme = useCallback(
    (forceTheme?: State["colorScheme"]) => {
      const newTheme = forceTheme ?? (colorScheme === "dark" ? "light" : "dark");
      setColorScheme(newTheme);
      localStorage.setItem(KEY_COLOR_SCHEME, newTheme);
      document.documentElement.dataset.colorScheme = newTheme;
      return newTheme;
    },
    [colorScheme],
  );

  /** ***************** change locale *******************/
  const changeLocale = useCallback((locale: string) => {
    try {
      void i18next.changeLanguage(locale).then(() => {
        localStorage.setItem(KEY_LOCALE, locale);
        document.documentElement.lang = locale;
        document.documentElement.dir = i18next.dir();
      });
    } catch {
      //
    }
    // eslint-disable-next-line @eslint-react/set-state-in-effect
    setLocale(locale);
    return locale;
  }, []);

  /** ***************** change calendar *******************/
  const changeCalendar = useCallback((calendar: State["calendar"]) => {
    setCalendar(calendar);
    localStorage.setItem(KEY_CALENDAR, calendar);
    return calendar;
  }, []);

  useLayoutEffect(() => {
    if (defaultLocale) changeLocale(defaultLocale);
    // eslint-disable-next-line @eslint-react/exhaustive-deps
  }, [defaultLocale]);

  const registerArea = useCallback((area: string, callback: (open?: boolean) => void) => {
    setAreas((prev) => ({ ...prev, [area]: callback }));
  }, []);

  const unregisterArea = useCallback((area: string) => {
    setAreas((prev) => {
      const newAreas = { ...prev };
      delete newAreas[area];
      return newAreas;
    });
  }, []);

  const toggleArea = useCallback(
    (area: string, open?: boolean) => {
      if (areas[area]) areas[area](open);
    },
    [areas],
  );

  const [alert, setAlert] = useState<React.ReactElement>();
  const showAlert = useCallback((alert?: React.ReactElement) => {
    setAlert(alert);
  }, []);

  /** ***************** context provider *******************/
  return (
    <GlobalContext
      value={{
        errorElement,
        styleEffect,
        showAlert,
        registerArea,
        unregisterArea,
        toggleArea,
        changeLocale,
        changeCalendar,
        toggleColorScheme,
        isDark: colorScheme === "dark",
        currentLocale: locale,
        currentCalendar: calendar,
        currentColorScheme: colorScheme,
      }}
    >
      <Toaster
        id="toasting"
        theme={colorScheme}
        visibleToasts={18}
        toastOptions={{
          className: "fabric-toast",
          unstyled: true,
        }}
        icons={{
          error: <AnimationIndicator className="text-lg text-danger-700" type="cross" />,
          info: <AnimationIndicator className="text-lg text-info-700" type="info" />,
          success: <AnimationIndicator className="text-lg text-success-700" type="check" />,
          warning: <AnimationIndicator className="text-lg text-warning-700" type="exclaim" />,
          loading: <Icon icon="icon-[svg-spinners--clock]" className="text-xl" />,
        }}
      />
      <Toaster
        id="messaging"
        theme={colorScheme}
        visibleToasts={9}
        toastOptions={{
          className: "fabric-message",
          unstyled: true,
        }}
        icons={{
          error: <AnimationIndicator className="text-lg text-danger-300" type="cross" />,
          info: <AnimationIndicator className="text-lg text-info-300" type="info" />,
          success: <AnimationIndicator className="text-lg text-success-300" type="check" />,
          warning: <AnimationIndicator className="text-lg text-warning-300" type="exclaim" />,
        }}
      />
      {alert}
      <ModalManagerProvider>{children}</ModalManagerProvider>
    </GlobalContext>
  );
}
