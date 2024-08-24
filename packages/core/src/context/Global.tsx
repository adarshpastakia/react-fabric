/*
 * React Fabric
 * @version: 1.0.0
 *
 *
 * The MIT License (MIT)
 * Copyright (c) 2024 Adarsh Pastakia
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 * and associated documentation files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
 * TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import i18next from "i18next";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ComponentType,
  type FC,
  type PropsWithChildren,
} from "react";
import { HotKeyWrapper } from "../hotkeys/HotKeyWrapper";
import {
  NotificationManager,
  type NotificationManagerRef,
} from "./NotificationCenter";

interface State {
  locale: string;
  colorScheme: "light" | "dark";
  calendar: "gregorian" | "hijri";
}

export interface GlobalProps extends PropsWithChildren {
  /**
   * application default error display
   */
  errorElement?: ComponentType<{ error?: string }>;

  defaultLocale?: string;
  defaultCalendar?: State["calendar"];
  defaultColorScheme?: State["colorScheme"];
}

interface GlobalContextType {
  /**
   * change language locale
   * @param locale
   */
  changeLocale: (locale: string) => string;
  /**
   * change date calendat
   * @param locale
   */
  changeCalendar: (calendar: State["calendar"]) => State["calendar"];
  /**
   * toggle theme between light and dark
   * or force to theme provided
   * @param theme
   */
  toggleColorScheme: (
    colorScheme?: State["colorScheme"],
  ) => State["colorScheme"];
  /**
   * application default error display
   */
  errorElement: GlobalProps["errorElement"];

  currentLocale: string;
  currentCalendar: State["calendar"];
  currentColorScheme: State["colorScheme"];

  notificationManager: NotificationManagerRef;
}

const KEY_LOCALE = "ruf:locale";
const KEY_CALENDAR = "ruf:calendar";
const KEY_COLOR_SCHEME = "ruf:colorScheme";
const systemLocale = () => {
  return (
    (typeof window !== "undefined"
      ? localStorage.getItem(KEY_LOCALE)
      : undefined) ?? "en"
  );
};
const systemCalendar = () => {
  return (
    (typeof window !== "undefined"
      ? (localStorage.getItem(KEY_CALENDAR) as AnyObject)
      : undefined) ?? "gregorian"
  );
};
const systemColorScheme = () => {
  const theme: AnyObject =
    typeof window !== "undefined"
      ? localStorage.getItem(KEY_COLOR_SCHEME) ??
        (window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light")
      : "light";
  return theme;
};

export const GlobalContext = createContext<GlobalContextType>(
  {} as GlobalContextType,
);

/**
 * global context provider
 */
export const ApplicationProvider: FC<GlobalProps> = ({
  children,
  errorElement,
  defaultLocale,
  defaultCalendar,
  defaultColorScheme,
}) => {
  const [refNotifications, setNotificationRef] =
    useState<NotificationManagerRef>({
      closeAll: () => undefined,
      showAlert: () => undefined as AnyObject,
      showError: () => undefined as AnyObject,
      showMessage: () => undefined as AnyObject,
      showToast: () => undefined as AnyObject,
    });
  const [colorScheme, setColorScheme] = useState<State["colorScheme"]>(
    defaultColorScheme ?? systemColorScheme(),
  );
  const [calendar, setCalendar] = useState<State["calendar"]>(
    defaultCalendar ?? systemCalendar(),
  );
  const [locale, setLocale] = useState<State["locale"]>(
    defaultLocale ?? systemLocale(),
  );

  /** ***************** set initial theme and locale dir  *******************/
  useEffect(() => {
    document.documentElement.lang = locale;
    if (!document.documentElement.dataset.colorScheme) {
      document.documentElement.dataset.colorScheme = colorScheme;
    } else {
      setColorScheme(document.documentElement.dataset.colorScheme as AnyObject);
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
  }, []);

  /** ***************** theme toggle *******************/
  const toggleColorScheme = useCallback(
    (forceTheme?: State["colorScheme"]) => {
      const newTheme =
        forceTheme ?? (colorScheme === "dark" ? "light" : "dark");
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
    setLocale(locale);
    return locale;
  }, []);

  /** ***************** change calendar *******************/
  const changeCalendar = useCallback((calendar: State["calendar"]) => {
    setCalendar(calendar);
    localStorage.setItem(KEY_CALENDAR, calendar);
    return calendar;
  }, []);

  /** ***************** context provider *******************/
  return (
    <GlobalContext.Provider
      value={{
        errorElement,
        changeLocale,
        changeCalendar,
        toggleColorScheme,
        currentLocale: locale,
        currentCalendar: calendar,
        currentColorScheme: colorScheme,
        notificationManager: refNotifications as AnyObject,
      }}
    >
      <HotKeyWrapper>{children}</HotKeyWrapper>
      <NotificationManager onLoad={setNotificationRef} />
    </GlobalContext.Provider>
  );
};

/**
 * internal usage only
 * @internal
 */
export const useGlobals = () => useContext(GlobalContext);

/**
 * global application context
 */
export const useApplicationContext = () => {
  const { errorElement, ...rest } = useContext(GlobalContext);
  return rest;
};

export const useNotificationService = () => {
  const { notificationManager } = useContext(GlobalContext);
  return notificationManager ?? {};
};
