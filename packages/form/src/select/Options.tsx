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

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @eslint-react/no-array-index-key */

import { EmptyContent } from "@react-fabric/core";
import { cn, getByPath } from "@react-fabric/utilities";
import { Trans } from "react-i18next";

export function Options({
  ref,
  style,
  items,
  active,
  className,
  itemRef,
  empty,
  info,
  labelProperty = "label",
  itemProps,
  children,
  onMouseOut,
}: {
  ref: React.Ref<HTMLDivElement | null>;
  info?: AnyObject;
  itemRef: AnyObject;
  style?: React.CSSProperties;
  items: AnyObject[];
  active: number | null;
  className?: string;
  empty?: React.ReactNode;
  valueProperty?: AnyObject;
  labelProperty?: AnyObject;
  onMouseOut?: () => void;
  itemProps: (item: AnyObject) => AnyObject;
  children: (item: AnyObject, label: string) => React.ReactNode;
}) {
  return (
    <div
      ref={ref}
      className={cn("bg-default select-none flex flex-col overflow-hidden", className)}
      style={style}
      onMouseLeave={onMouseOut}
    >
      <div className={cn("overflow-x-hidden overflow-y-auto flex-1")}>
        {items.length === 0 && (empty ?? <EmptyContent message={<Trans i18nKey="form:select.emptyList" />} />)}
        {items.map((item, index) => {
          if (item.___group___)
            return (
              <p key={index} className="px-2 py-1 text-muted text-xs sticky -top-px z-2 bg-default border-t">
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
                className={cn(
                  "block text-start truncate px-2 py-1 leading-normal cursor-pointer select-none",
                  "data-active:bg-primary-200 data-selected:bg-primary-600 data-selected:text-white data-active:data-selected:underline",
                )}
                {...itemProps(item)}
              >
                <Trans
                  i18nKey="form:select.createOption"
                  values={{ query: item.value ?? item }}
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
              className={cn(
                "block text-start truncate px-2 py-1 leading-normal cursor-pointer",
                "active:bg-primary-200 data-active:bg-primary-200 data-selected:bg-primary-600 data-selected:text-white data-active:data-selected:underline",
              )}
              {...itemProps(item)}
            >
              {children(item, getByPath(item, labelProperty) ?? `${item}`)}
            </div>
          );
        })}
      </div>
      {info && <div className="px-2 py-1 text-sm bg-dimmed text-muted">{info}</div>}
    </div>
  );
}
