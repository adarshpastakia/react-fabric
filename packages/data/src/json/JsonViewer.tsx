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
  ActionLabel,
  Button,
  Copy,
  CoreIcons,
  EmptyContent,
  Icon,
  Meter,
  Text,
} from "@react-fabric/core";
import { type CssProp } from "@react-fabric/core/dist/types/types";
import {
  Format,
  isArray,
  isBoolean,
  isEmpty,
  isNil,
  isObject,
  isTrue,
} from "@react-fabric/utilities";
import classNames from "classnames";
import { Fragment, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

export interface JsonViewProps<T> extends CssProp {
  /**
   * json value
   */
  json: T;
  /**
   * display inline
   */
  inline?: boolean;
  /**
   * label fixed width when using inline
   */
  labelWidth?: number | string;
  /**
   * display object properties as tree
   * @default true
   */
  showPropertyTree?: boolean;
  /**
   * properties to format as dates
   * (default format applied to property name containing `date` | `time`)
   */
  propertyScheme?: {
    boolean?: string[];
    date?: string[];
    time?: string[];
    number?: string[];
    bytes?: string[];
    percent?: string[];
    phone?: string[];
  };
  /**
   * enable value copy
   */
  copy?: true | string[];
  /**
   * enable filter callbacks
   */
  filters?: true | string[];
  /**
   * message for empty json
   */
  emptyMessage?: string;
  /**
   * on filter callback
   */
  onFilter?: (path: string, value: AnyObject, negate: boolean) => void;
  /**
   * render function for custom label display
   */
  labeler?: (path: string) => string | undefined;
  /**
   * render function for custom value display
   */
  formatter?: (
    path?: string,
    value?: AnyObject,
  ) => string | JSX.Element | undefined;
}

const reduceObject = (json: AnyObject, keys: string[] = [], prefix = "") => {
  const ret: AnyObject[] = [];
  Object.entries(json).forEach(([key, value]) => {
    if (isArray(value) && isObject(value[0])) {
      ret.push(...reduceObject(value, [...keys, key], key));
    } else {
      const obj: KeyValue = {
        field: prefix ? `${prefix}.${key}` : key,
        value,
        path: [...keys, key].join("."),
      };

      if (isObject(value) && !isEmpty(value) && !("_score_" in value)) {
        obj.children = reduceObject(value, [...keys, key]);
      }

      ret.push(obj);
    }
  });

  return ret.flat(99);
};

const JsonEntry = ({
  value,
  path,
  field,
  children,
  copy,
  filters,
  labeler,
  formatter,
  propertyScheme,
  showPropertyTree,
  onFilter,
  inline,
  labelWidth = "30%",
  level = 0,
}: KeyValue) => {
  const { t } = useTranslation("data");

  const [expanded, setExpanded] = useState(true);

  const canExpand = useMemo(() => !!children, [children]);

  const actualValue = useMemo(() => value?._label_ ?? value ?? "", [value]);

  const display = useMemo(() => {
    if (children) return null;
    if (isNil(value)) return <span className="text-muted">null</span>;
    if (isEmpty(value)) return <span className="text-muted">empty</span>;

    let ret = actualValue;
    if (formatter) {
      const formatted = formatter?.(path, actualValue);
      if (!isNil(formatted)) ret = formatted;
    }

    if (isArray(actualValue)) {
      ret = `[${actualValue.join(", ")}]`;
    }
    if (propertyScheme?.date?.includes(path)) {
      // return <DateDisplay date={value} />;
    }
    if (propertyScheme?.time?.includes(path))
      ret = Format.date(actualValue, "pp");
    if (propertyScheme?.number?.phone(path)) ret = Format.phone(actualValue);
    if (propertyScheme?.bytes?.includes(path)) ret = Format.bytes(actualValue);
    if (propertyScheme?.percent?.includes(path))
      ret = Format.percent(actualValue);
    if (propertyScheme?.number?.includes(path))
      ret = Format.number(actualValue);
    if (propertyScheme?.boolean?.includes(path) || isBoolean(actualValue))
      ret = actualValue ? t("json.true") : t("json.false");
    if (ret?.length > 128) {
      ret = <Text clamp={3}>{ret}</Text>;
    }

    return (
      <Fragment>
        {ret}
        {isObject(value) && value._score_ > 0 && (
          <Meter className="text-xs" value={value._score_} />
        )}
      </Fragment>
    );
  }, [value, path, formatter, propertyScheme, actualValue]);

  const pathWithoutOrdinal = useMemo(
    () => path.replace(/\.\d*\./, "."),
    [path],
  );

  const canCopy = useMemo(
    () =>
      !isEmpty(value) &&
      (isTrue(copy) ||
        copy?.includes?.(path) ||
        copy?.includes?.(pathWithoutOrdinal)),
    [copy, value, path, pathWithoutOrdinal],
  );
  const canFilter = useMemo(
    () =>
      isTrue(filters) ||
      filters?.includes?.(path) ||
      filters?.includes?.(pathWithoutOrdinal),
    [filters, path, pathWithoutOrdinal],
  );

  const labelDisplay = useMemo(
    () => (
      <ActionLabel
        className="text-dimmed text-sm px-2 flex-1 truncate"
        actions={
          !canExpand && canFilter
            ? [
                <Button
                  key="negative"
                  color="danger"
                  size="sm"
                  variant="link"
                  icon={CoreIcons.funnelMinus}
                  aria-label="Filter Negative"
                  onClick={() =>
                    onFilter?.(pathWithoutOrdinal, actualValue, true)
                  }
                />,
                <Button
                  key="positive"
                  color="primary"
                  size="sm"
                  variant="link"
                  icon={CoreIcons.funnelPlus}
                  aria-label="Filter"
                  onClick={() => onFilter?.(pathWithoutOrdinal, actualValue)}
                />,
              ]
            : []
        }
      >
        {labeler?.(path) ?? field}
      </ActionLabel>
    ),
    [field, labeler, pathWithoutOrdinal, actualValue, canExpand, canFilter],
  );

  return (
    <Fragment>
      {showPropertyTree && (
        <div
          className={classNames(
            "py-2",
            inline && "flex flex-nowrap items-center",
          )}
          style={{
            paddingInlineStart: level * 8,
          }}
        >
          <div
            role="none"
            className={classNames(
              "flex overflow-hidden items-center",
              inline && "flex-content",
            )}
            style={{
              flexBasis: labelWidth,
            }}
            onClick={() => canExpand && setExpanded(!expanded)}
          >
            {canExpand && (
              <Icon
                rtlFlip
                icon={expanded ? CoreIcons.chevronDown : CoreIcons.chevronRight}
              />
            )}
            {labelDisplay}
          </div>
          {display && (
            <div className={classNames("px-2", inline && "flex-1")}>
              {canCopy && <Copy size="xs" text={actualValue} />}
              {display}
            </div>
          )}
        </div>
      )}
      {!showPropertyTree && !children && (
        <div
          className={classNames(
            "py-2",
            inline && "flex flex-nowrap items-center",
          )}
        >
          <div
            role="none"
            className={classNames(
              "flex overflow-hidden items-center",
              inline && "flex-content",
            )}
            style={{
              flexBasis: labelWidth,
            }}
          >
            {labelDisplay}
          </div>
          <div className={classNames("px-2", inline && "flex-1")}>
            {canCopy && <Copy size="xs" text={value} />}
            {display}
          </div>
        </div>
      )}
      {expanded &&
        children?.map((item: KeyValue) => (
          <JsonEntry
            key={item.path}
            {...item}
            level={level + 1}
            copy={copy}
            inline={inline}
            showPropertyTree={showPropertyTree}
            propertyScheme={propertyScheme}
            filters={filters}
            labelWidth={labelWidth}
            formatter={formatter}
            labeler={labeler}
            onFilter={onFilter}
          />
        ))}
    </Fragment>
  );
};

export const JsonViewer = <T extends KeyValue = KeyValue>({
  className,
  json,
  copy,
  propertyScheme,
  filters,
  inline,
  labelWidth,
  formatter,
  labeler,
  onFilter,
  emptyMessage,
  showPropertyTree = true,
  ...rest
}: JsonViewProps<T>) => {
  const { t } = useTranslation("data");

  const list = useMemo(() => reduceObject(json), [json]);

  return (
    <div {...rest} className={classNames(className, "p-4 bg-alternate")}>
      {!isEmpty(json) ? (
        list.map((item) => (
          <JsonEntry
            key={item.path}
            {...item}
            copy={copy}
            inline={inline}
            showPropertyTree={showPropertyTree}
            propertyScheme={propertyScheme}
            filters={filters}
            labelWidth={labelWidth}
            formatter={formatter}
            labeler={labeler}
            onFilter={onFilter}
          />
        ))
      ) : (
        <EmptyContent size="sm" message={emptyMessage ?? t("json.empty")} />
      )}
    </div>
  );
};
