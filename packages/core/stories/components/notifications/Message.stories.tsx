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
import { Message } from "../../../src/overlays";

const meta: Meta = {
  component: Message,
  title: "@core/components/Notifications",
  parameters: {
    layout: "centered",
    controls: { exclude: /^(on.*|children|as)/ },
    jest: ["core/tests/Message.test.tsx"],
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
type MessageStory = StoryObj<typeof Message>;

export const _Message: MessageStory = {
  render: (args) => {
    const { showMessage } = useNotificationService();
    return (
      <Fragment>
        <Button
          onClick={() => showMessage({ ...args }).then(action("messageReturn"))}
        >
          Simple Message
        </Button>
        <Button
          onClick={() =>
            showMessage({ ...args, color: "danger" }).then(
              action("messageReturn"),
            )
          }
        >
          Error Message
        </Button>
        <Button
          onClick={() =>
            showMessage({ ...args, color: "success" }).then(
              action("messageReturn"),
            )
          }
        >
          Success Message
        </Button>
        <Button
          onClick={() =>
            showMessage({ ...args, color: "warning" }).then(
              action("messageReturn"),
            )
          }
        >
          Warning Message
        </Button>
      </Fragment>
    );
  },
  args: {
    title: faker.commerce.productAdjective(),
    message: faker.commerce.productName(),
  },
};
