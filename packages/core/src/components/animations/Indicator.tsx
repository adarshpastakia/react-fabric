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

import AlertCircleIcon from "@iconify-react/line-md/alert-circle";
import CloseCircleIcon from "@iconify-react/line-md/close-circle";
import ConfirmCircleIcon from "@iconify-react/line-md/confirm-circle";
import QuestionCircleIcon from "@iconify-react/line-md/question-circle";
import type { CssProp } from "../../types";
import { Icon } from "../icon/Icon";

export interface AnimationIndicatorProps extends CssProp {
  /**
   * The indicator icon type. Each type maps to a distinct status icon.
   * Defaults to `"info"`.
   */
  type?: "info" | "check" | "cross" | "question" | "exclaim";
}

const ANIMATION_ICONS = {
  info: <AlertCircleIcon height="1.25em" width="1.25em" className="rotate-180" />,
  check: <ConfirmCircleIcon height="1.25em" width="1.25em" />,
  cross: <CloseCircleIcon height="1.25em" width="1.25em" />,
  question: <QuestionCircleIcon height="1.25em" width="1.25em" />,
  exclaim: <AlertCircleIcon height="1.25em" width="1.25em" />,
};

/**
 * Animated status indicator that renders a themed icon with animation.
 *
 * Renders one of five predefined icon types (check, cross, question, exclaim, info)
 * using the `Icon` component. Useful for displaying success, error, help, alert,
 * or info states in forms, notifications, and feedback UI.
 *
 * @example
 * ```tsx
 * import { AnimationIndicator } from "@react-fabric/core";
 *
 * // Success indicator
 * <AnimationIndicator type="check" color="success-500" />
 *
 * // Error indicator
 * <AnimationIndicator type="cross" color="error-500" />
 *
 * // Warning indicator
 * <AnimationIndicator type="exclaim" color="warning-500" />
 *
 * // Help indicator
 * <AnimationIndicator type="question" />
 * ```
 */
export function AnimationIndicator({ type, ...props }: AnimationIndicatorProps) {
  // Map the type to its corresponding icon and delegate rendering to the Icon component
  return <Icon {...props} icon={ANIMATION_ICONS[type || "info"]} />;
}
