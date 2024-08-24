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

import { faker } from "@faker-js/faker";
import { useNotificationService } from "@react-fabric/core";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { Fragment } from "react/jsx-runtime";
import { Button } from "../../../src";
import { Alert, Message, Toast } from "../../../src/overlays";

const meta: Meta = {
  component: Toast,
  subcomponents: { Message, Alert } as AnyObject,
  title: "@core/components/Notifications",
  parameters: {
    layout: "centered",
    controls: { exclude: /^(on.*|children|as)/ },
    jest: ["core/tests/Toast.test.tsx"],
  },
  decorators: [
    (Story) => (
      <div className="max-w-2xl p-4 flex gap-2 flex-wrap">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type ToastStory = StoryObj<typeof Toast>;

export const _Toast: ToastStory = {
  render: (args) => {
    const { showToast } = useNotificationService();
    if (!showToast)
      throw Error("Application not wrapped in `ApplicationProvider`");
    return (
      <Fragment>
        <Button
          onClick={() => showToast({ ...args }).then(action("toastReturn"))}
        >
          Toast
        </Button>
        <Button
          onClick={() =>
            showToast({ ...args, color: "danger" }).then(action("toastReturn"))
          }
        >
          Error Toast
        </Button>
        <Button
          onClick={() =>
            showToast({ ...args, color: "success" }).then(action("toastReturn"))
          }
        >
          Success Toast
        </Button>
        <Button
          onClick={() =>
            showToast({ ...args, color: "warning" }).then(action("toastReturn"))
          }
        >
          Warning Toast
        </Button>
        <Button
          onClick={() =>
            showToast({
              ...args,
              color: "accent",
              actions: (
                <Button variant="outline" color="accent" value="showLog">
                  View Logs
                </Button>
              ),
            }).then(action("toastReturn"))
          }
        >
          With Action
        </Button>
      </Fragment>
    );
  },
  args: {
    title: faker.commerce.productName(),
    message: faker.commerce.productDescription(),
  },
};
