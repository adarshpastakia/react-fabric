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

import { useFloatingTree } from "@floating-ui/react";
import {
  Button,
  Chip,
  Content,
  CoreIcons,
  Dropdown,
  Tab,
  TabPanel,
  Tooltip,
  useGlobals,
} from "@react-fabric/core";
import { DateUtil, EventPanel, RangePanel } from "@react-fabric/date";
import classNames from "classnames";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { type SuperDateProps } from "../types";
import { QuickSelect } from "./QuickSelect";
import { RelativePanel } from "./RelativePanel";

export const SuperDateTabs = ({
  events,
  value,
  presets,
  recurringEvents,
  onChange,
}: SuperDateProps) => {
  const { t } = useTranslation("superdate");
  const tree = useFloatingTree();
  const { currentCalendar, currentLocale } = useGlobals();

  const isHijri = useMemo(() => currentCalendar === "hijri", [currentCalendar]);

  const [currentValue, setCurrentValue] = useState("");
  const [activeTab, setActiveTab] = useState("quick");

  useEffect(() => {
    if (value?.match(/^(\$\w+)([+-])(\d+)\|(\$\w+)([+-])(\d+)$/))
      setActiveTab("relative");
    else if (value && !value?.match(/^(\$\w+)/)) setActiveTab("absolute");
    else setActiveTab("quick");

    value && setCurrentValue(value);
  }, [value]);

  const handleChange = useCallback(
    (value: string) => {
      const parsed = DateUtil.parseRange(value);
      setCurrentValue(value);
      onChange?.(value, [
        parsed[0]?.toISOString?.(),
        parsed[1]?.toISOString?.(),
      ]);
      tree?.events.emit("close");
    },
    [isHijri, currentLocale],
  );

  return (
    <div
      className={classNames(
        "rounded-capped outline select-none overflow-hidden grid",
        "fabric-superDate",
      )}
    >
      <TabPanel
        headerClassName="border-b"
        onChange={setActiveTab}
        activeTab={activeTab}
      >
        <Tab id="quick" label={t("label.quick")}>
          <QuickSelect
            value={currentValue}
            onChange={handleChange}
            presets={presets}
          />
        </Tab>
        <Tab id="relative" label={t("label.relative")}>
          <RelativePanel value={currentValue} onChange={handleChange} />
        </Tab>
        <Tab id="absolute" label={t("label.absolute")}>
          <Content className="p-0">
            <RangePanel
              withTime
              showHijriToggle
              value={
                currentValue ? DateUtil.parseRange(currentValue) : undefined
              }
              {...({ showApply: true } as AnyObject)}
              onChange={([start, end]) => handleChange?.(`${start}|${end}`)}
            />
          </Content>
        </Tab>
        <Tab id="events" label={t("label.events")}>
          <EventPanel
            isHijri={isHijri}
            onChange={handleChange}
            events={events}
            recurringEvents={recurringEvents}
          />
        </Tab>
      </TabPanel>
    </div>
  );
};

/**
 * SuperDate component provides a date selection interface with quick, relative, and absolute date options.
 * It allows users to select dates using predefined presets, relative date calculations, or absolute date ranges.
 * It can be used in various applications where date selection is required, such as event scheduling, calendar applications, and date filtering.
 * The component supports both Gregorian and Hijri calendars, and it can display relative date labels and tooltips based on the selected calendar.
 * It is designed to be used as a button or a chip, depending on the `as` prop.
 * It also supports event selection and recurring events.
 *
 * Date Keys:
 * - `$now`: Current date and time.
 * - `$decade`: Current decade.
 * - `$year`: Current year.
 * - `$quarter`: Current quarter.
 * - `$month`: Current month.
 * - `$week`: Current week.
 * - `$day`: Current day.
 * - `$hour`: Current hour.
 * - `$minute`: Current minute.
 *
 * Relative Date Format:
 * - `$now+1|$now+2`: Represents a range from one day after now to two days after now.
 * - `$now-1|$now+1`: Represents a range from one day before now to one day after now.
 * - `$week|$now`: Represents the current week starting from the beginning of the week to now.
 * - `$month|$week`: Represents the current month starting from the beginning of the month to the end of current week.
 *
 * @param {SuperDateProps} props - The properties for the SuperDate component.
 * @returns {JSX.Element} The rendered SuperDate component.
 *
 * @example
 * ```jsx
 * <SuperDate
 *   as="button"
 *   color="primary"
 *   size="medium"
 *   variant="filled"
 *   disabled={false}
 *   fullWidth={true}
 *   onChange={(value, range) => console.log("Selected date:", value, range)}
 *   value="$now+1|$now+2"
 *   data-test-value="superdate-value"
 *   data-testid="superdate"
 * />
 * ```
 *
 * @see {@link https://adarshpastakia.github.io/react-fabric/?path=/docs/superdate-superdate--docs}
 */
export const SuperDate = ({
  as = "button",
  color = "primary",
  size,
  variant,
  disabled,
  fullWidth,
  onChange,
  value,
  "data-test-value": testValue,
  "data-testid": testId,
  ...props
}: SuperDateProps) => {
  const { currentCalendar, currentLocale } = useGlobals();

  const isHijri = useMemo(() => currentCalendar === "hijri", [currentCalendar]);

  const [relValue, setRelative] = useState<string>();

  useEffect(() => {
    setRelative(value);
  }, [value]);

  const handleChange = useCallback(
    (value: string) => {
      const parsed = DateUtil.parseRange(value);
      setRelative(value);
      onChange?.(value, [
        parsed[0]?.toISOString?.(),
        parsed[1]?.toISOString?.(),
      ]);
    },
    [isHijri, currentLocale],
  );

  const E = as === "button" ? Button : Chip;
  return (
    <Dropdown showArrow>
      <Tooltip content={DateUtil.relativeTooltip(relValue, isHijri)}>
        <E
          icon={CoreIcons.clock}
          size={size}
          color={color}
          disabled={disabled}
          fullWidth={fullWidth}
          variant={variant as AnyObject}
          data-test-value={testValue}
          data-testid={testId}
        >
          {DateUtil.relativeLabel(relValue, isHijri) ?? ""}
        </E>
      </Tooltip>
      <SuperDateTabs {...props} value={relValue} onChange={handleChange} />
    </Dropdown>
  );
};
