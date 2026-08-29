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

import type { ChildrenProp, CssProp } from "@react-fabric/core/dist/types/types";
import { cn } from "@react-fabric/utilities";
import { FieldWrapper } from "../internal/FieldWrapper";
import type { WrapperProps } from "../types";
import { getWrapperProps } from "../utils";

export interface FieldProps extends ChildrenProp, WrapperProps, CssProp {
  /**
   * dont apply bg and outline
   */
  plain?: boolean;
  vertical?: boolean;
}

/**
 * Field component for rendering multiple form fields under a single label.
 * It supports various properties for customization, including label, info, required state,
 * and styling options.
 */
export function Field(props: FieldProps) {
  const { children, vertical, borderless, plain, inline } = props;
  return (
    <FieldWrapper {...getWrapperProps(props)}>
      <div
        className={cn(
          "fabric-fieldGroup",
          !plain && !borderless && "outline focus-within:outline-primary-500 has-aria-invalid:focus-within:outline-danger-500",
          !plain && "bg-default",
          plain && "flex-wrap",
          inline && "flex-1",
          vertical ? "rounded-capped" : "rounded flex",
        )}
        data-vertical={!!vertical}
      >
        {children}
      </div>
    </FieldWrapper>
  );
}
