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

import { Button, useNotificationService } from "@/core/src";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";

const meta: Meta = {
  tags: ["autodocs"],
  title: "@core/components/Notifications",
  parameters: {
    layout: "centered",
    jest: ["core/tests/components/Notifications.test.tsx"],
  },
  decorators: [
    (Story) => (
      <div className="flex gap-2 items-center p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type ToastStory = StoryObj<typeof useNotificationService>;
type MessageStory = StoryObj<typeof useNotificationService>;

export const Toasts: ToastStory = {
  render() {
    const { toast, promise } = useNotificationService();

    return (
      <>
        <Button
          color="primary"
          onClick={() =>
            toast({
              message: "This is a simple toast",
            })
          }
        >
          Simple Toast
        </Button>
        <Button
          onClick={() =>
            toast({
              message: "This is a toast with actions",
              actions: [
                {
                  label: "Retry",
                  onClick() {
                    //
                  },
                },
                {
                  label: "Cancel",
                  onClick() {
                    //
                  },
                },
              ],
            })
          }
        >
          Action Toast
        </Button>
        <Button color="success" onClick={() => toast({ type: "success", message: "This is a success toast" })}>
          Success Toast
        </Button>
        <Button
          color="danger"
          onClick={() =>
            toast({
              type: "error",
              message: "This is a error toast",
              link: {
                label: "View logs",
                onClick() {
                  //
                },
              },
            })
          }
        >
          Error Toast
        </Button>
        <Button
          onClick={() =>
            promise(
              new Promise((r) =>
                setTimeout(() => {
                  r("Awaited promise successfull");
                }, 5000),
              ),
              {
                loading: "Loading some request",
                onCancel() {
                  //
                },
              },
            )
          }
        >
          Promise Toast
        </Button>
      </>
    );
  },
};

export const Messages: ToastStory = {
  render() {
    const { message } = useNotificationService();

    return (
      <>
        <Button
          color="primary"
          onClick={() =>
            message({
              message: "This is a simple toast",
            })
          }
        >
          Simple Message
        </Button>
        <Button color="success" onClick={() => message({ type: "success", message: "This is a success toast" })}>
          Success Message
        </Button>
        <Button color="danger" onClick={() => message({ type: "error", message: "This is a error message" })}>
          Error Message
        </Button>
      </>
    );
  },
};

export const Alerts: ToastStory = {
  render(args: KeyValue) {
    const { alert } = useNotificationService();

    return (
      <>
        <Button color="primary" onClick={() => alert({ title: "Tester", message: "This is a simple alert" }).then(args.cb)}>
          Simple Alert
        </Button>
        <Button
          color="success"
          onClick={() => alert({ type: "confirm", color: "success", message: "This is a confirmation alert" }).then(args.cb)}
        >
          Alert Confirmation
        </Button>
        <Button
          color="danger"
          onClick={() =>
            alert({
              type: "prompt",
              color: "danger",
              message: "This is an alert with input prompt, and it has a very long text",
            }).then(args.cb)
          }
        >
          Alert Prompt
        </Button>
      </>
    );
  },
  args: {
    cb: fn(),
  },
};
