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

/* istanbul ignore file */

import worldCountries, { type Country as _Ctry } from "world-countries";

export type Country = _Ctry & {
  alpha: string;
  phone: string;
  iconCode: string;
  currency: { code: string; name?: string; symbol?: string };
};

/**
 * Country list with helper functions
 * This is a list of all countries with their details.
 * It includes information such as continent, ISO codes, name, full name, capital, top-level domain (TLD), currency, phone code, and emoji.
 * This list can be used to retrieve country information based on various codes or names.
 * @type {Country[]}
 */
export default {
  /**
   * Get ISO2 country code
   *
   * @param code - The country code to search for. It can be an ISO2 code, ISO3 code, or an alternative code.
   * @return {string | undefined} - Returns the ISO2 country code if found, otherwise undefined.
   */
  toIso2(code: string) {
    const ctry = this.find(code);
    return ctry != null ? ctry.cca2 : undefined;
  },
  /**
   * Get ISO3 country code
   *
   * @param code - The country code to search for. It can be an ISO2 code, ISO3 code, or an alternative code.
   * @return {string | undefined} - Returns the ISO3 country code if found, otherwise undefined.
   */
  toIso3(code: string) {
    const ctry = this.find(code);
    return ctry != null ? ctry.cca3 : undefined;
  },
  /**
   * Get country emoji
   *
   * @param code - The country code to search for. It can be an ISO2 code, ISO3 code, or an alternative code.
   * @return {string} - Returns the emoji representation of the country if found, otherwise returns a default flag emoji.
   */
  emoji(code: string) {
    const ctry = this.find(code);
    return ctry != null ? ctry.flag : "🏳️";
  },
  /**
   * Get country name
   *
   * @param code - The country code to search for. It can be an ISO2 code, ISO3 code, or an alternative code.
   * @return {string} - Returns the name of the country if found, otherwise returns the code itself.
   */
  name: function (code: string) {
    const ctry = this.find(code);
    return ctry != null ? ctry.name.common : code;
  },
  /**
   * This function searches for a country in the list by its code.
   * It supports various formats:
   * - ISO2 code (e.g., "US")
   * - ISO3 code (e.g., "USA")
   * - Alternative code (e.g., "US", "USA", "United States")
   * It returns the first matching country object or undefined if not found.
   * This function is useful for retrieving country details based on different code formats.
   *
   * @param code - The country code to search for. It can be an ISO2 code, ISO3 code, or an alternative code.
   * @return {Country | undefined} - Returns the country object if found, otherwise undefined.
   */
  find(code: string): Country | undefined {
    return this.list.find(
      (ct) =>
        (ct.cioc ?? "__").toLowerCase() === code.toLowerCase() ||
        ct.cca2.toLowerCase() === code.toLowerCase() ||
        ct.cca3.toLowerCase() === code.toLowerCase(),
    );
  },
  /**
   * Country list
   * This is a list of all countries with their details.
   * It includes information such as continent, ISO codes, name, full name, capital, top-level domain (TLD), currency, phone code, and emoji.
   * This list can be used to retrieve country information based on various codes or names.
   *
   * @type {Country[]}
   */
  list: worldCountries.map((ct) => ({
    ...ct,
    iconCode: ct.cca2.toLowerCase(),
    alpha: ct.name.common.charAt(0),
    phone: `${ct.idd.root}${ct.idd.suffixes?.[0] ?? ""}`,
    currency: ct.currencies
      ? {
          ...Object.entries(ct.currencies).pop()?.[1],
          code: `${Object.entries(ct.currencies).pop()?.[0]}`,
        }
      : { code: "UNK" },
  })),
};
