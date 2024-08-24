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

import { EmptyContent } from "@react-fabric/core";
import classNames from "classnames";
import { type ReactElement, type ReactNode } from "react";
import { Trans } from "react-i18next";

export const Options = ({
  ref,
  style,
  items,
  active,
  className,
  itemRef,
  empty,
  valueProperty = "id",
  labelProperty = "label",
  itemProps,
  children,
  ...rest
}: {
  ref: AnyObject;
  itemRef: AnyObject;
  style?: AnyObject;
  items: AnyObject[];
  active: number | null;
  className?: string;
  empty?: ReactElement;
  valueProperty?: AnyObject;
  labelProperty?: AnyObject;
  itemProps: (item: AnyObject) => AnyObject;
  children: (item: AnyObject, label: string) => ReactNode;
} & KeyValue) => {
  return (
    <div
      ref={ref}
      className={classNames(
        "bg-base select-none overflow-x-hidden overflow-y-auto",
        className,
      )}
      style={style}
      {...rest}
    >
      {items.length === 0 &&
        (empty ?? (
          <EmptyContent message={<Trans i18nKey="form:select.emptyList" />} />
        ))}
      {items.map((item, index) => {
        if (item.___group___)
          return (
            <p
              key={index}
              className="px-2 py-1 text-muted text-xs sticky -top-px z-2 bg-base border-t"
            >
              {item.label}
            </p>
          );

        if (item.___create___)
          return (
            <div
              role="none"
              key={index}
              tabIndex={active === index ? 0 : -1}
              ref={(el: AnyObject) => itemRef(index, el)}
              data-active={active === index ? true : undefined}
              className={classNames(
                "block text-start truncate px-2 py-1 leading-normal cursor-pointer select-none",
                "data-[active]:bg-primary-200 data-[selected]:bg-primary-600 data-[selected]:text-white data-[active]:data-[selected]:underline",
              )}
              {...itemProps(item)}
            >
              <Trans
                i18nKey="form:select.createOption"
                values={{ query: item.value }}
                components={[<strong key="t0">query</strong>]}
              />
            </div>
          );

        return (
          <div
            role="none"
            key={index}
            tabIndex={active === index ? 0 : -1}
            ref={(el: AnyObject) => itemRef(index, el)}
            data-active={active === index ? true : undefined}
            className={classNames(
              "block text-start truncate px-2 py-1 leading-normal cursor-pointer",
              "data-[active]:bg-primary-200 data-[selected]:bg-primary-600 data-[selected]:text-white data-[active]:data-[selected]:underline",
            )}
            {...itemProps(item)}
          >
            {children(item, item[labelProperty] ?? item)}
          </div>
        );
      })}
    </div>
  );
};
