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

/* istanbul ignore file */

export const UTILITIES_PACKAGE = "@react-fabric/utilities";
export const UTILITIES_VERSION = "1.0.0";

export { getBoundingBox, getBox } from "./css/boundingBox";
export { cn } from "./css/cn";
export { getImageColorset } from "./css/imageColorset";

export { dedupe } from "./lists/dedupe";
export { flatten, flattenAndDedupe } from "./lists/flatten";
export { getByPath, getValue } from "./lists/getByPath";
export { groupBy } from "./lists/groupBy";

export { default as Countries } from "./data/countries";
export type { Country } from "./data/countries";
export { default as FileUtil } from "./data/fileType";
export { Format } from "./data/format";

export { debounce } from "./helpers/debounce";
export { getLogger } from "./helpers/getLogger";
export { convertToLonLat, getLatitudeLongitude, getLocationAsText } from "./helpers/lonlat";
export type { LngLatLike } from "./helpers/lonlat";

export { compareValues } from "./matchers/compare";
export { isEmpty } from "./matchers/isEmpty";
export { isEqual } from "./matchers/isEqual";
export { isDefined, isNil, isNull, isUndefined } from "./matchers/nullChecks";
export { isArray, isBoolean, isColor, isFalse, isNumber, isObject, isString, isSvgPath, isTrue } from "./matchers/typeChecks";

export { hash, shortHash, uuid } from "./strings/hash";
export { interpolate } from "./strings/interpolate";
export { matchString } from "./strings/matchString";
export { renderTemplate } from "./strings/template";
export { iconToken, tokenize } from "./strings/tokenize";

export { mergeRefs } from "./utils/mergeRefs";
export { yup } from "./utils/yup";

export const EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);

export const EMPTY_OBJECT = {};
Object.freeze(EMPTY_OBJECT);

export const EMPTY_FC = () => () => null;
