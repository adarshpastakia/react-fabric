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

import {
  Children,
  cloneElement,
  isValidElement,
  type ReactElement,
} from "react";
import { Controller as HFController } from "react-hook-form";

export interface ControllerProps {
  /**
   * field name
   */
  name?: string;
  children:
    | ReactElement<KeyValue>
    | ((props: {
        name: string;
        error?: string;
        checked: boolean;
        value: AnyObject;
        invalid?: boolean;
        readOnly?: boolean;
        disabled?: boolean;
        onBlur: () => void;
        onChange: (value: AnyObject) => void;
        ref?: React.Ref<HTMLInputElement>;
      }) => ReactElement);
}

/**
 * This component is used to wrap form controls
 * and provide them with the necessary props and state management.
 *
 * It uses the `Controller` component from `react-hook-form`
 * to manage the form state and validation.
 *
 * It accepts a `name` prop to identify the form control,
 * and a `children` prop which can either be a React element
 * or a function that receives the necessary props to render the control.
 *
 * The component will pass down the following props to the child:
 * - `name`: the name of the form control
 * - `error`: any validation error message
 * - `checked`: whether the control is checked (for checkboxes/radios)
 * - `value`: the current value of the control
 * - `invalid`: whether the control is invalid
 * - `readOnly`: whether the control is read-only (disabled during submission)
 * - `disabled`: whether the control is disabled
 * - `onBlur`: function to call when the control loses focus
 * - `onChange`: function to call when the control value changes
 * - `ref`: a ref to the control element
 * * The component also handles the `ref` prop to ensure that it is passed correctly
 * to the child component, allowing for proper focus management and DOM access.
 *
 * @param {ControllerProps} props - The properties for the Controller component.
 * @returns {JSX.Element} The rendered Controller component.
 *
 * @example
 * ```jsx
 * <Controller
 *   name="username"
 *   children={({ name, error, checked, value, invalid, readOnly, onChange }) => (
 *     <input
 *       type="text"
 *       name={name}
 *       onChange={onChange}
 *       readOnly={readOnly}
 *       aria-invalid={invalid}
 *       value={value}
 *     />
 *   )}
 * />
 * ```
 */
export const Controller = ({ name, children, ...rest }: ControllerProps) => {
  if (!name) throw Error("Form Controller missing `name` prop");
  return (
    <HFController
      name={name}
      render={({
        field: { ref, onChange, ...field },
        fieldState: { error },
        formState: { isSubmitting },
      }) =>
        isValidElement<AnyObject>(children)
          ? cloneElement(Children.only(children), {
              ...field,
              ...rest,
              ref: (el: AnyObject) => {
                el && ref(el);
                try {
                  if (children.props.ref && "current" in children.props.ref)
                    children.props.ref.current = el;
                  if (children.props.ref?.prototype) children.props.ref(el);
                } catch (_) {
                  //
                }
              },
              checked: !!field.value,
              readOnly: isSubmitting || children.props.readOnly,
              invalid: !!error?.message || children.props.invalid,
              error: error?.message ?? children.props.error,
              onChange: (v: AnyObject) => {
                onChange(v);
                children.props.onChange?.(v);
              },
            })
          : children({
              ...field,
              ...rest,
              ref: (el: AnyObject) => {
                el && ref(el);
              },
              readOnly: isSubmitting,
              invalid: !!error?.message,
              checked: !!field.value,
              error: error?.message,
              onChange: (v: AnyObject) => {
                onChange(v);
              },
            })
      }
    />
  );
};
