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

export * from "./components";
export * from "./core";
export { addTranslationBundle } from "./i18n";
export { Flyout, Modal, Tooltip } from "./overlays";
export * from "./typography";

export * from "./hooks/useClientService";
export * from "./hooks/useDebounce";
export * from "./hooks/useEffectDebugger";
export * from "./hooks/useIsDark";
export * from "./hooks/useIsRtl";
export * from "./hooks/useNavigator";
export * from "./hooks/useOverlayService";
export * from "./hooks/useResize";
export * from "./hooks/useResizeObserver";
export * from "./hooks/useStorage";

export { HotKey } from "./hotkeys/HotKey";
export { HotKeyLabel } from "./hotkeys/HotKeyLabel";

export { CoreIcons } from "./types/icons";

export {
  ApplicationProvider,
  useApplicationContext,
  useGlobals,
  useNotificationService,
} from "./context/Global";
