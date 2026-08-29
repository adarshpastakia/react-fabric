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

export const DATE_PACKAGE = "@react-fabric/date";
export const DATE_VERSION = "1.0.0";

import "./hijri";
import "./i18n";

export { DateHeader } from "./components/DateHeader";
export { DecadePage } from "./components/DecadePage";
export { YearPage } from "./components/YearPage";
export { DateDisplay } from "./display/DateDisplay";
export { DateDuration } from "./display/DateDuration";
export { DatePanel } from "./panels/DatePanel";
export { EventPanel } from "./panels/EventPanel";
export { RangePanel } from "./panels/RangePanel";

export { DateUtil } from "./utils/dateUtil";

export * from "./types";
