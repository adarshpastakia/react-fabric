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

import { Button } from "@/core/src/components/button/Button";
import { EmptyContent } from "@/core/src/components/empty/EmptyContent";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";

const meta: Meta = {
  component: EmptyContent,
  tags: ["autodocs"],
  title: "@core/components/EmptyContent",
  parameters: {
    layout: "centered",
    jest: ["core/tests/components/EmptyContent.test.tsx"],
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-lg">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type EmptyContentStory = StoryObj<typeof EmptyContent>;

/**
 * Default story showing EmptyContent with title, message, and default icon.
 */
export const Default: EmptyContentStory = {
  args: {
    title: "No Data Available",
    message: "Please check back later when data is available.",
  },
};

/**
 * Story demonstrating EmptyContent with a custom icon string.
 */
export const WithCustomIcon: EmptyContentStory = {
  args: {
    title: "No Results",
    message: "Try adjusting your search criteria.",
    icon: "icon-[mdi--magnify]",
    iconColor: "tint",
  },
};

/**
 * Story demonstrating EmptyContent with a custom React element as icon.
 */
export const WithElementIcon: EmptyContentStory = {
  args: {
    title: "Custom Icon",
    message: "This uses a custom React element as the icon.",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    iconColor: "primary",
  },
};

/**
 * Story demonstrating EmptyContent with small size.
 */
export const SmallSize: EmptyContentStory = {
  args: {
    title: "Small",
    message: "This is a small empty state.",
    size: "sm",
  },
};

/**
 * Story demonstrating EmptyContent with medium size.
 */
export const MediumSize: EmptyContentStory = {
  args: {
    title: "Medium",
    message: "This is a medium empty state.",
    size: "md",
  },
};

/**
 * Story demonstrating EmptyContent with children (action buttons).
 */
export const WithActions: EmptyContentStory = {
  args: {
    title: "Get Started",
    message: "You haven't created any projects yet. Start by creating your first project.",
    icon: "icon-[mdi--folder-plus-outline]",
    iconColor: "tint",
    children: (
      <>
        <Button onClick={fn()} color="primary" variant="solid">
          Create Project
        </Button>
        <Button onClick={fn()} variant="link">
          Learn More
        </Button>
      </>
    ),
  },
};

/**
 * Story demonstrating EmptyContent with a custom React element as title.
 */
export const WithElementTitle: EmptyContentStory = {
  args: {
    title: (
      <span className="text-primary">
        Custom <em>Title</em>
      </span>
    ),
    message: "This uses a custom React element as the title.",
    iconColor: "secondary",
  },
};

/**
 * Story demonstrating EmptyContent with no icon.
 */
export const NoIcon: EmptyContentStory = {
  args: {
    title: "Minimal",
    message: "This empty state has no icon displayed.",
    icon: undefined,
  },
};

/**
 * Story demonstrating EmptyContent with different icon colors.
 */
export const IconColors: EmptyContentStory = {
  render: (args) => (
    <>
      <EmptyContent {...args} title="Tint" message="Icon color: tint" iconColor="tint" />
      <EmptyContent {...args} title="Primary" message="Icon color: primary" iconColor="primary" />
      <EmptyContent {...args} title="Secondary" message="Icon color: secondary" iconColor="secondary" />
      <EmptyContent {...args} title="Danger" message="Icon color: danger" iconColor="danger" />
    </>
  ),
};

/**
 * Story for interactive component testing — passes arbitrary props to EmptyContent.
 */
export const Tester: EmptyContentStory = {
  tags: ["!autodocs"],
  args: {},
  render: (args) => <EmptyContent {...args} />,
};
