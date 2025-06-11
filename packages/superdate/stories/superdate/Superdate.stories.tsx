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

import { Menu, MenuItem } from "@react-fabric/core";
import { DateDisplay, DateUtil } from "@react-fabric/date";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "storybook/actions";
import { addDays, addMonths, addWeeks } from "date-fns";
import { useMemo, useState } from "react";
import { SuperDate } from "../../src";
import { SuperDateTabs } from "../../src/superdate/Superdate";

const meta: Meta = {
  component: SuperDate,
  title: "@superdate/Superdate",
  parameters: {
    layout: "centered",
    controls: { exclude: "children" },
  },
};

export default meta;
type Story = StoryObj<typeof SuperDate>;

export const _Superdate: Story = {
  render: (args) => {
    return <SuperDate {...args} />;
  },
  args: {
    value: "$year-2|$now",
    recurringEvents: [
      { label: "National Day", start: "2000-11-30", end: "2000-12-03" },
    ],
    presets: [
      { value: "$year-2|$now", label: "Last 2 years" },
      { value: "$year-5|$now", label: "Last 5 years" },
      { value: "$year-10|$now", label: "Last 10 years" },
    ],
  },
};

export const Playground: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value);
    const [start, end] = useMemo(
      () => (value ? DateUtil.parseRange(value) : []),
      [value],
    );
    return (
      <div>
        <div className="inline-block">
          <SuperDateTabs
            {...args}
            value={value}
            onChange={(...args) => {
              setValue(args[0]);
              action("onChange")(...args);
            }}
          />
        </div>
        <div className="mt-8">
          <span className="text-muted">Relative value: </span>
          <span className="font-medium">{value}</span>
        </div>
        <div>
          <span className="text-muted">Actual value: </span>
          <DateDisplay date={start} showAlternateDate />
          <span> ⇾ </span>
          <DateDisplay date={end} showAlternateDate>
            <Menu>
              <MenuItem
                label="± 1 Day"
                onClick={() =>
                  end &&
                  setValue(
                    `${addDays(end, -1).toISOString()}|${addDays(end, 1).toISOString()}`,
                  )
                }
              />
              <MenuItem
                label="± 1 Week"
                onClick={() =>
                  end &&
                  setValue(
                    `${addWeeks(end, -1).toISOString()}|${addWeeks(
                      end,
                      1,
                    ).toISOString()}`,
                  )
                }
              />
              <MenuItem
                label="± 1 Month"
                onClick={() =>
                  end &&
                  setValue(
                    `${addMonths(end, -1).toISOString()}|${addMonths(end, 1).toISOString()}`,
                  )
                }
              />
            </Menu>
          </DateDisplay>
        </div>
      </div>
    );
  },
  args: {
    value: "$year-2|$now",
  },
};
