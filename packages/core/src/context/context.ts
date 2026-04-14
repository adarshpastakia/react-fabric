/*
 * React Fabric
 * @version: 1.0.0
 *
 *
 * The MIT License (MIT)
 * Copyright (c) 2026 Adarsh Pastakia
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

import { createContext, useContext } from "react";
import { State } from "storybook/manager-api";
import { GlobalProps } from "./Global";
import { NotificationManagerRef } from "./NotificationCenter";

interface GlobalContextType {
  /**
   * change language locale
   * @param locale
   */
  changeLocale: (locale: string) => string;
  /**
   * change date calendar
   * @param locale
   */
  changeCalendar: (calendar: State["calendar"]) => State["calendar"];
  /**
   * toggle theme between light and dark
   * or force to theme provided
   * @param theme
   */
  toggleColorScheme: (colorScheme?: State["colorScheme"]) => State["colorScheme"];
  /**
   * application default error display
   */
  errorElement: GlobalProps["errorElement"];

  currentLocale: string;
  currentCalendar: State["calendar"];
  currentColorScheme: State["colorScheme"];

  notificationManager: NotificationManagerRef;
}

export const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType);

/**
 * internal usage only
 * @internal
 */
export const useGlobals = () => useContext(GlobalContext);

/**
 * Hook to access the global application context.
 * This hook provides access to the global context values, including the current locale, calendar, and color scheme.
 *
 * @returns {GlobalContextType} The global context values excluding the error element.
 *
 * @example
 * ```jsx
 * const { changeLocale, currentLocale, toggleColorScheme } = useApplicationContext();
 * ```
 */
export const useApplicationContext = () => {
  const { errorElement, ...rest } = useContext(GlobalContext);
  return rest;
};

/**
 * Hook to access the notification manager from the global context.
 * This hook provides methods to show alerts, errors, messages, and toasts.
 * It returns a reference to the notification manager, which can be used to display notifications in the application.
 *
 * @returns {NotificationManagerRef} The notification manager reference.
 *
 * @example
 * ```jsx
 * const notificationService = useNotificationService();
 * notificationService.showMessage("Hello World");
 * ```
 *
 * @see {@link https://adarshpastakia.github.io/react-fabric/?path=/docs/core-components-notifications--notifications} for more details on available methods.
 */
export const useNotificationService = () => {
  const { notificationManager } = useContext(GlobalContext);
  return notificationManager ?? {};
};
