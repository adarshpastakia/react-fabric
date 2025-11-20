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

import { differenceInDays, format as dtformat, parseISO } from "date-fns";
import {
  parsePhoneNumberFromString,
  type CountryCode,
} from "libphonenumber-js";
import numeral from "numeral";
import Countries from "./_countries";
import { isEmpty, isNil } from "./_isType";

/**
 * Format utility functions for various data types.
 * This namespace provides methods to format phone numbers, numbers, bytes, percentages, dates, and durations.
 */
 
export namespace Format {
  const getPhone = (value: string, country: string) => {
    const phone =
      value.match(/^[0+]/) != null ? value.replace(/^00/, "+") : `+${value}`;
    const number = parsePhoneNumberFromString(phone, country as CountryCode);
    /* istanbul ignore next */
    return (
      number ?? {
        country: "",
        formatInternational: () => value,
      }
    );
  };

  const numberFormat = (number?: string | number, format = "0,0[.]00a") => {
    if (isNil(number)) {
      return "";
    }
    const prefix = `${number}`.startsWith("+") ? "+" : "";
    return prefix + numeral(number).format(format);
  };

  const makeDuration = (value: number, fmt = "HH:mm:ss.SSS") => {
    if (!isNaN(value)) {
      const days = differenceInDays(value, 0);
      const prefix = days > 0 ? `${days}d:` : "";
      let time = dtformat(
        parseISO(new Date(value).toISOString().replace("Z", "")),
        fmt,
      );
      if (!prefix) time = time.replace(/^00:/, "");
      return `${prefix}${time}`;
    }
  };

  /**
   * Format phone number with country flag or emoji.
   * It takes a phone number string, a country code, and a boolean to indicate whether to use CSS classes for flags.
   * If the phone number is empty, less than 6 characters, or does not match the regex for valid phone numbers,
   * it returns the original value.
   * If the phone number is valid, it formats the phone number using `libphonenumber-js` and returns it with the country flag or emoji.
   * The country flag is represented as a CSS class, and the emoji is obtained from the `Countries` module.
   *
   * @param {string} value - The phone number to format.
   * @param {string} country - The country code to use for formatting.
   * @param {boolean} useCss - Whether to use CSS classes for flags.
   * @returns {string} The formatted phone number with country flag or emoji.
   */
  export const phone = (value?: string, country = "AE", useCss = false) => {
    if (isEmpty(value) || value.length < 6 || !/^[\d+\s\-()]+$/.test(value))
      return value;
    const phone = getPhone(value, country);
    /* istanbul ignore next */
    return `${
      useCss
        ? `<span class="flag ${phone.country}"></span>`
        : Countries.emoji(phone.country ?? "")
    } ${phone.formatInternational()}`;
  };
  /**
   * Format number using `numeral`.
   * It takes a number or string and a format string, and returns the formatted number.
   * If the number is undefined or null, it returns an empty string.
   * If the number starts with a '+', it retains the '+' sign in the formatted output.
   * This function is useful for displaying numbers in a human-readable format,
   * such as for financial data, statistics, or any numerical representation.
   *
   * @param {string | number} number - number or string to format
   * @param {string} [format] - optional format string, defaults to "0,0[.]00a"
   * @returns {string} formatted number
   */
  export const number = (number?: string | number, format?: string) => {
    return numberFormat(number, format);
  };
  /**
   * Format bytes using `numeral`.
   * It takes a number or string and returns the formatted bytes.
   * If the number is undefined or null, it returns an empty string.
   * If the number starts with a '+', it retains the '+' sign in the formatted output.
   * This function is useful for displaying file sizes or data transfer amounts in a human-readable format.
   *
   * @param {string | number} number - number or string to format
   * @returns {string} formatted bytes
   */
  export const bytes = (number?: string | number) => {
    return numberFormat(number, "0,0[.]00b");
  };
  /**
   * Format percentage using `numeral`.
   * It takes a number or string and returns the formatted percentage.
   * If the number is undefined or null, it returns an empty string.
   * If the number starts with a '+', it retains the '+' sign in the formatted output.
   *
   * @param {string | number} number - number or string to format
   * @returns {string} formatted percentage
   */
  export const percent = (number?: string | number) => {
    return numberFormat(number, "0,0[.]00%");
  };
  /**
   * Format date using `date-fns`.
   * It takes a date (as a Date object, string, or number) and a format string.
   * If the date is undefined or null, it returns an empty string.
   * If the date is a valid date, it formats it using the provided format string.
   * Format defaults to "d-M-y" if not provided.
   *
   * @param {date | string | number} date - Date object, string, or number to format
   * @typedef {string} format - Optional format string, defaults to "d-M-y"
   * @returns {string} - Formatted date string
   */
  export const date = (date?: Date | string | number, format = "d-M-y") => {
    return date ? dtformat(new Date(date), format) : "";
  };
  /** ***************** format time duration from total seconds/milliseconds *******************/
  /**
   * Format time duration with milliseconds
   * This function takes a number or string representing a duration in seconds or milliseconds,
   * and returns a formatted string in the format "HH:mm:ss.SSS".
   * If the input is undefined or null, it returns "00:00.000".
   * If the input is Infinity, it returns "∞".
   * The function also accepts an optional boolean parameter `isFraction` to indicate whether the input is in seconds (true) or milliseconds (false).
   * If `isFraction` is true, the input is multiplied by 1000 to convert seconds to milliseconds.
   * The function uses the `makeDuration` helper function to format the duration.
   *
   * @param {string | number} number - The duration to format, can be a string or number.
   * @param {boolean} isFraction - Optional parameter to indicate if the input is in seconds (true) or milliseconds (false).
   * @returns {string} - The formatted duration string.
   */
  export const duration = (number?: string | number, isFraction?: boolean) => {
    if (isNil(number)) {
      return "00:00.000";
    }
    if (number === Infinity) {
      return "∞";
    }
    const value = parseFloat(`${number}`) * (isFraction ? 1000 : 1);
    if (!isNaN(value)) {
      return makeDuration(value);
    }
    return "00:00.000";
  };
  /**
   * Format time duration in seconds
   * This function takes a number or string representing a duration in seconds,
   * and returns a formatted string in the format "HH:mm:ss".
   * If the input is undefined or null, it returns "00:00".
   * If the input is Infinity, it returns "∞".
   * The function also accepts an optional boolean parameter `isFraction` to indicate whether the input is in seconds (true) or milliseconds (false).
   * If `isFraction` is true, the input is multiplied by 1000 to convert seconds to milliseconds.
   * The function uses the `makeDuration` helper function to format the duration.
   * This function is useful for displaying durations in a human-readable format, such as for timers or elapsed time.
   *
   * @param {string | number} number - The duration to format, can be a string or number.
   * @param {boolean} isFraction - Optional parameter to indicate if the input is in seconds (true) or milliseconds (false).
   * @returns {string} - The formatted duration string.
   */
  export const durationSeconds = (
    number?: string | number,
    isFraction?: boolean,
  ) => {
    if (isNil(number)) {
      return "00:00";
    }
    if (number === Infinity) {
      return "∞";
    }
    const value = parseFloat(`${number}`) * (isFraction ? 1000 : 1);
    if (!isNaN(value)) {
      return makeDuration(value, "HH:mm:ss");
    }
    return "00:00";
  };
}
