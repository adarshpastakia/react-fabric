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

import { differenceInDays, format, parseISO } from "date-fns";
import {
  parsePhoneNumberFromString,
  type CountryCode,
} from "libphonenumber-js";
import numeral from "numeral";
import Countries from "./_countries";
import { isEmpty, isNil } from "./_isType";

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Format {
  /** ***************** get phone number object using `libphonenumber-js` *******************/
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

  /** ***************** common number format method using `numeral` *******************/
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
      let time = format(
        parseISO(new Date(value).toISOString().replace("Z", "")),
        fmt,
      );
      if (!prefix) time = time.replace(/^00:/, "");
      return `${prefix}${time}`;
    }
  };

  /** ***************** format phone number using `libphonenumber-js` *******************/
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
  /** ***************** format whole number using `numeral` *******************/
  export const number = (number?: string | number, format?: string) => {
    return numberFormat(number, format);
  };
  /** ***************** format bytes using `numeral` *******************/
  export const bytes = (number?: string | number) => {
    return numberFormat(number, "0,0[.]00b");
  };
  /** ***************** format percentage using `numeral` *******************/
  export const percent = (number?: string | number) => {
    return numberFormat(number, "0,0[.]00%");
  };
  /** ***************** format date using `date-fns` *******************/
  export const date = (date?: Date | string | number, fmt = "d-M-y") => {
    return date ? format(new Date(date), fmt) : "";
  };
  /** ***************** format time duration from total seconds/milliseconds *******************/
  /**
   * Format time duration with milliseconds
   * @param number
   * @param isFraction
   * @returns
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
   * Format time duration without milliseconds
   * @param number
   * @param isFraction
   * @returns
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
