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

import {
  AnimationIndicator,
  Button,
  LoadingBars,
  LoadingLine,
  LoadingSpinner,
  Skeleton,
  ThemeProvider,
  Viewport,
} from "@/core/src";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  component: ThemeProvider,
  tags: ["autodocs"],
  title: "@core/core/ThemeProvider",
  parameters: {
    layout: "fullscreen",
    jest: ["core/tests/core/ThemeProvider.test.tsx"],
  },
  decorators: [
    (Story) => (
      <div className="h-screen">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type ThemeProviderStory = StoryObj<typeof ThemeProvider>;

export const Tester: ThemeProviderStory = {
  render: (args) => (
    <ThemeProvider {...args}>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Theme Provider</h1>
        <p>This is a simple theme provider component that provides a context for managing themes in your application.</p>
      </div>
    </ThemeProvider>
  ),
  args: {},
};

export const Example: ThemeProviderStory = {
  render: (args) => (
    <Viewport>
      <div className="area-head"></div>
      <div className="area-content bg-content overflow-auto p-4">
        <div className="flex flex-wrap gutter-4">
          <div className="span-12 lg:span-6">
            <ThemeProvider {...args} colorScheme="light">
              <Samples />
            </ThemeProvider>
          </div>
          <div className="span-12 lg:span-6">
            <ThemeProvider {...args} colorScheme="dark">
              <Samples />
            </ThemeProvider>
          </div>
        </div>
      </div>
    </Viewport>
  ),
};

const Samples = () => (
  <div className="p-4 bg-default">
    <h1 className="text-2xl font-bold mb-4">Theme Provider</h1>
    <p>This is a simple theme provider component that provides a context for managing themes in your application.</p>
    <div className="flex my-4">
      <div className="w-8 h-4 bg-primary-50" />
      <div className="w-8 h-4 bg-primary-100" />
      <div className="w-8 h-4 bg-primary-200" />
      <div className="w-8 h-4 bg-primary-300" />
      <div className="w-8 h-4 bg-primary-400" />
      <div className="w-8 h-4 bg-primary-500" />
      <div className="w-8 h-4 bg-primary-600" />
      <div className="w-8 h-4 bg-primary-700" />
      <div className="w-8 h-4 bg-primary-800" />
      <div className="w-8 h-4 bg-primary-900" />
      <div className="w-8 h-4 bg-primary-950" />
    </div>
    <div className="flex my-4">
      <div className="w-8 h-4 bg-secondary-50" />
      <div className="w-8 h-4 bg-secondary-100" />
      <div className="w-8 h-4 bg-secondary-200" />
      <div className="w-8 h-4 bg-secondary-300" />
      <div className="w-8 h-4 bg-secondary-400" />
      <div className="w-8 h-4 bg-secondary-500" />
      <div className="w-8 h-4 bg-secondary-600" />
      <div className="w-8 h-4 bg-secondary-700" />
      <div className="w-8 h-4 bg-secondary-800" />
      <div className="w-8 h-4 bg-secondary-900" />
      <div className="w-8 h-4 bg-secondary-950" />
    </div>
    <div className="flex my-4">
      <div className="w-8 h-4 bg-tint-50" />
      <div className="w-8 h-4 bg-tint-100" />
      <div className="w-8 h-4 bg-tint-200" />
      <div className="w-8 h-4 bg-tint-300" />
      <div className="w-8 h-4 bg-tint-400" />
      <div className="w-8 h-4 bg-tint-500" />
      <div className="w-8 h-4 bg-tint-600" />
      <div className="w-8 h-4 bg-tint-700" />
      <div className="w-8 h-4 bg-tint-800" />
      <div className="w-8 h-4 bg-tint-900" />
      <div className="w-8 h-4 bg-tint-950" />
    </div>
    <div className="text-sm text-muted">Background</div>
    <div className="flex my-4 outline text-xs">
      <div className="flex-1 py-2 text-center bg-content">Content</div>
      <div className="flex-1 py-2 text-center bg-default">Default</div>
      <div className="flex-1 py-2 text-center bg-dimmed">Dimmed</div>
      <div className="flex-1 py-2 text-center bg-muted">Muted</div>
      <div className="flex-1 py-2 text-center bg-dark text-light">Dark</div>
      <div className="flex-1 py-2 text-center bg-gray">Gray</div>
      <div className="flex-1 py-2 text-center bg-light text-dark">Light</div>
      <div className="flex-1 py-2 text-center bg-invert text-invert">Invert</div>
    </div>
    <div className="text-sm text-muted">Text</div>
    <div className="flex my-4 outline text-xs">
      <div className="flex-1 py-2 text-center text-content">Content</div>
      <div className="flex-1 py-2 text-center text-default">Default</div>
      <div className="flex-1 py-2 text-center text-dimmed">Dimmed</div>
      <div className="flex-1 py-2 text-center text-muted">Muted</div>
      <div className="flex-1 py-2 text-center text-gray">Gray</div>
      <div className="flex-1 py-2 text-center text-light bg-dark">Light</div>
      <div className="flex-1 py-2 text-center text-invert bg-invert">Invert</div>
      <div className="flex-1 py-2 text-center text-dark bg-light">Dark</div>
    </div>
    <div className="text-sm text-muted">Border</div>
    <div className="flex my-4 text-xs">
      <div className="flex-1 py-2 text-center outline -outline-offset-4 outline-default">Default</div>
      <div className="flex-1 py-2 text-center outline -outline-offset-4 outline-bright">Bright</div>
      <div className="flex-1 py-2 text-center outline -outline-offset-4 outline-soft">Soft</div>
      <div className="flex-1 py-2 text-center outline -outline-offset-4 outline-gray">Gray</div>
      <div className="flex-1 py-2 text-center bg-dark text-light outline -outline-offset-4 outline-light">Light</div>
      <div className="flex-1 py-2 text-center bg-invert text-invert outline -outline-offset-4 outline-invert">Invert</div>
      <div className="flex-1 py-2 text-center bg-light text-dark outline -outline-offset-4 outline-dark">Dark</div>
    </div>
    <hr />
    <p className="text-secondary-500 text-lg underline my-4">Buttons</p>
    <div className="flex">
      <Button>Click Me</Button>
      <hr className="vertical" />
      <Button color="primary" variant="solid">
        Click Me
      </Button>
      <hr className="vertical" />
      <Button color="secondary" variant="outlined">
        Click Me
      </Button>
      <hr className="vertical" />
      <Button color="danger" variant="soft">
        Click Me
      </Button>
    </div>
    <p className="text-secondary-500 text-lg underline my-4">Loaders</p>
    <div className="my-2 h-1 w-sm">
      <LoadingLine />
    </div>
    <div className="flex gap-2">
      <div className="w-16 relative">
        <LoadingBars />
      </div>
      <div className="w-16 relative">
        <LoadingSpinner />
      </div>
      <div className="w-64">
        <Skeleton />
      </div>
    </div>
    <p className="text-secondary-500 text-lg underline my-4">Indicators</p>
    <div className="flex gap-2">
      <AnimationIndicator className="text-2xl text-info-500" type="info" />
      <AnimationIndicator className="text-2xl text-success-500" type="check" />
      <AnimationIndicator className="text-2xl text-danger-500" type="cross" />
      <AnimationIndicator className="text-2xl text-primary-500" type="question" />
      <AnimationIndicator className="text-2xl text-warning-500" type="exclaim" />
    </div>
  </div>
);
