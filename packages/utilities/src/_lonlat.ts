/*
 * React Fabric
 * @version: 1.0.0
 *
 *
 * The MIT License (MIT)
 * Copyright (c) 2025 Adarsh Pastakia
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

import { isArray, isObject, isString } from "./_isType";

type LngLatLike =
  | {
      lng: number;
      lat: number;
    }
  | {
      lon: number;
      lat: number;
    }
  | {
      longitude: number;
      latitude: number;
    }
  | [lon: number | string, lat: number | string]
  | string;

/**
 * Convert various formats of longitude and latitude to a tuple of [lon, lat].
 * This function supports:
 * - Arrays with two or three elements (e.g., [lon, lat] or [lon, lat, alt])
 * - Objects with properties `lng`, `lat`, `lon`, or `longitude` and `latitude`
 * - Strings in the format "lat,lon"
 * The function will return a tuple of numbers [lon, lat].
 *
 * @param {LngLatLike} lonLat - The input longitude and latitude in various formats.
 * @returns { [lon: number, lat: number] } A tuple of [lon, lat] where lon and lat are numbers.
 * @throws Error if the input is not a valid format.
 */
export const convertLatLng = (
  lonLat: LngLatLike,
): [lon: number, lat: number] => {
  if (
    (isArray(lonLat) && lonLat.length === 2) ||
    (isArray(lonLat) && lonLat.length === 3)
  ) {
    return [Number(lonLat[0]), Number(lonLat[1])];
  }

  if (isObject(lonLat)) {
    if ("longitude" in lonLat) {
      return [lonLat.longitude, lonLat.latitude];
    }
    return ["lon" in lonLat ? lonLat.lon : lonLat.lng, lonLat.lat];
  }

  if (isString(lonLat)) {
    const [lat, lon] = lonLat.split(",");
    return [+lon, +lat];
  }

  throw Error("Invalid geo coordinates");
};

/**
 * Convert a coordinate to Degrees, Minutes, Seconds (DMS) format.
 * This function takes a coordinate and returns a string in the format "degrees˚minutes'seconds" with direction (N/S or E/W).
 * It handles both latitude and longitude coordinates.
 * This function assumes that the input coordinate is in decimal degrees format.
 * It converts the coordinate to DMS format by calculating the degrees, minutes, and seconds,
 * and then formatting the result as a string.
 *
 * @param {number} coord - The coordinate to convert.
 * @param {boolean} isLat - Whether the coordinate is latitude (default is false for longitude).
 * @returns {string} A string representation of the coordinate in DMS format.
 */
const convertToDMS = (coord: number, isLat = false) => {
  const degree = Math.floor(coord);
  const hour = (coord - degree) * 60;
  const minute = (hour - Math.floor(hour)) * 60;

  return `${degree}˚${Math.floor(hour)}'${minute.toFixed(2)}"${
    coord < 0 ? (isLat ? "S" : "W") : isLat ? "N" : "E"
  }`;
};

/**
 * Convert a latitude and longitude to a human-readable text format.
 * This function takes a latitude and longitude in various formats and
 * returns a string in the format "degrees˚minutes'seconds" with direction (N/S, E/W).
 *
 * This function supports:
 *
 * - Objects with properties `lng`, `lat`, `lon`, or `longitude` and `latitude`
 * - Arrays with two or three elements (e.g., [lon, lat] or [lon, lat, alt])
 * - Strings in the format "lat,lon"
 *
 * @param {LngLatLike} latlon - The latitude and longitude in various formats.
 * @returns {string} A string representation of the location in DMS format.
 *
 * @example
 * ```jsx
 * const location = getLocationAsText({ lat: 40.7128, lng: -74.0060 });
 * console.log(location); // "40˚42'51.36"N, 74˚0'21.60"W"
 * ```
 */
export const getLocationAsText = (latlon: LngLatLike) => {
  const [lon, lat] = convertLatLng(latlon);
  return `${convertToDMS(lat, true)}, ${convertToDMS(lon)}`;
};
