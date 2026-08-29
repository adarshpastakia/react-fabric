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

export const CORE_PACKAGE = "@react-fabric/core";
export const CORE_VERSION = "1.0.1";

export { useApplicationContext } from "./context/context";
export { ApplicationProvider } from "./context/Global";

export type { ModalProps } from "./types";

export { addTranslationBundle } from "./i18n";

export { cloneChildren, getBadgeProps, getColor, getIconProps } from "./utils";

// HOOKS
export { useClientService } from "./hooks/useClientService";
export { useContextMenu } from "./hooks/useContextMenu";
export { useControlledValue } from "./hooks/useControlledValue";
export { useDebounce } from "./hooks/useDebounce";
export { useEffectDebugger, useLayoutEffectDebugger, useMemoDebugger } from "./hooks/useEffectDebugger";
export { useIsDark } from "./hooks/useIsDark";
export { useIsRtl } from "./hooks/useIsRtl";
export { useNotificationService } from "./hooks/useNotificationService";
export { useOverlayService } from "./hooks/useOverlayService";
export { usePropState, usePropWatcher } from "./hooks/usePropState";
export { usePropToggle } from "./hooks/usePropToggle";
export { useResize } from "./hooks/useResize";
export { useResizeObserver } from "./hooks/useResizeObserver";
export { useLocalStorage, useSessionStorage } from "./hooks/useStorage";

// CORE
export { AreaToggle } from "./core/areaToggle/AreaToggle";
export { Aside } from "./core/aside/Aside";
export { ErrorBoundary } from "./core/boundary/ErrorBoundary";
export { Content } from "./core/content/Content";
export { Footer, Header } from "./core/headfoot/HeadFoot";
export { Layout } from "./core/layout/Layout";
export { Col, Container, Row } from "./core/responsive/Responsive";
export { ThemeProvider } from "./core/theme/ThemeProvider";
export { Viewport } from "./core/viewport/Viewport";

// TYPOGRAPHY
export { Abbr } from "./typography/Abbr";
export { Anchor } from "./typography/Anchor";
export { Copy } from "./typography/Copy";
export { Kbd } from "./typography/Kbd";
export { Mark } from "./typography/Mark";
export { Text } from "./typography/Text";
export { Title } from "./typography/Title";

// COMPONENTS
export { ActionLabel } from "./components/actionLabel/ActionLabel";
export { AnimationIndicator } from "./components/animations/Indicator";
export { AnimationLoader } from "./components/animations/Loader";
export { LoadingBars } from "./components/animations/LoadingBars";
export { LoadingLine } from "./components/animations/LoadingLine";
export { LoadingSpinner } from "./components/animations/LoadingSpinner";
export { Skeleton } from "./components/animations/Skeleton";
export { Avatar } from "./components/avatar/Avatar";
export { AvatarGroup } from "./components/avatar/AvatarGroup";
export { Badge } from "./components/badge/Badge";
export { Button } from "./components/button/Button";
export { ButtonGroup } from "./components/button/ButtonGroup";
export { ToggleButtonGroup } from "./components/button/ToggleButtonGroup";
export { Callout } from "./components/callout/Callout";
export { Card } from "./components/card/Card";
export { CardCover } from "./components/card/CardCover";
export { FlipContent } from "./components/card/FlipContent";
export { Chip } from "./components/chip/Chip";
export { Collapsable } from "./components/collapsable/Collapsable";
export { Divider } from "./components/divider/Divider";
export { Dropdown, DropdownDismiss } from "./components/dropdown/Dropdown";
export { DropdownTool } from "./components/dropdown/DropdownTool";
export { StyleEffect } from "./components/effect/StyleEffect";
export { EmptyContent } from "./components/empty/EmptyContent";
export { Flyout } from "./components/flyout/Flyout";
export { HotKey } from "./components/hotkey/HotKey";
export { Icon } from "./components/icon/Icon";
export { Image, Video } from "./components/media/Media";
export { ContextMenu } from "./components/menu/ContextMenu";
export { Menu } from "./components/menu/Menu";
export { MenuItem } from "./components/menu/MenuItem";
export { Meter } from "./components/meter/Meter";
export { Modal } from "./components/modal/Modal";
export { Navigator } from "./components/navigator/Navigator";
export { Panel } from "./components/panel/Panel";
export { PanelGroup } from "./components/panel/PanelGroup";
export { PanelStack } from "./components/panel/PanelStack";
export { Pillbox } from "./components/pillbox/Pillbox";
export { ProgressBar } from "./components/progress/ProgressBar";
export { ProgressCircle } from "./components/progress/ProgressCircle";
export { Tab } from "./components/tabpanel/Tab";
export { TabPanel } from "./components/tabpanel/TabPanel";
export { Titlebar } from "./components/titlebar/Titlebar";
export { Tooltip } from "./components/tooltip/Tooltip";
