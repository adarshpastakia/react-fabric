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

import { createContext, use } from "react";
import type { GlobalProps } from "./Global";

export interface State {
  locale: string;
  colorScheme: "light" | "dark";
  calendar: "gregorian" | "hijri";
}

interface GlobalContextType {
  /**
   * change language locale
   */
  changeLocale: (locale: string) => string;
  /**
   * change date calendar
   */
  changeCalendar: (calendar: State["calendar"]) => State["calendar"];
  /**
   * toggle theme between light and dark
   * or force to theme provided
   */
  toggleColorScheme: (colorScheme?: State["colorScheme"]) => State["colorScheme"];
  /**
   * application default error display
   */
  errorElement: GlobalProps["errorElement"];

  /**
   * collapsable layout sections
   */
  registerArea: (area: string, callback: (open?: boolean) => void) => void;
  unregisterArea: (area: string) => void;
  toggleArea: (area: string, open?: boolean) => void;

  showAlert: (alert?: React.ReactElement) => void;

  styleEffect?: "glass" | "matte";

  isDark: boolean;
  currentLocale: string;
  currentCalendar: State["calendar"];
  currentColorScheme: State["colorScheme"];
}

export const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType);

interface ModalContextType {
  activeModal?: string;
  registerModal: (id: string, callback: () => void) => void;
  removeModal: (id: string) => void;

  closeModal: (id: string) => void;
  closeAllModal: () => void;
}

export const ModalContext = createContext<ModalContextType>({} as ModalContextType);

/**
 * internal usage only
 * @internal
 */
export const useGlobals = () => use(GlobalContext);

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
  const {
    errorElement: _,
    registerArea: __,
    unregisterArea: ___,
    toggleArea: ____,
    styleEffect: _____,
    ...rest
  } = use(GlobalContext);
  return rest;
};
