import { Divider } from "@/core/src";
import type { Meta, StoryObj } from "@storybook/react";
import { Fragment } from "react/jsx-runtime";

const meta: Meta = {
  component: Divider,
  title: "@core/components/Divider",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    jest: ["core/tests/components/Divider.test.tsx"],
  },
  decorators: [
    (Story) => (
      <div className="w-xl max-w-full p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type DividerStory = StoryObj<typeof Divider>;

export const _Divider: DividerStory = {
  render: (args) => {
    return <Divider {...args} />;
  },
  args: {},
};

export const WithLabel: DividerStory = {
  render: (args) => {
    return <Divider {...args}>Divider Text</Divider>;
  },
  args: {},
};

export const LabelAlignment: DividerStory = {
  render: () => {
    return (
      <Fragment>
        <div className="mb-4">
          <Divider align="start">Start Aligned</Divider>
        </div>
        <div className="mb-4">
          <Divider align="center">Center Aligned</Divider>
        </div>
        <div className="mb-4">
          <Divider align="end">End Aligned</Divider>
        </div>
      </Fragment>
    );
  },
  tags: ["!autodocs"],
};

export const Colors: DividerStory = {
  render: () => {
    return (
      <Fragment>
        <div className="mb-4">
          <Divider>Default (tint-300)</Divider>
        </div>
        <div className="mb-4">
          <Divider color="primary">Primary</Divider>
        </div>
        <div className="mb-4">
          <Divider color="secondary">Secondary</Divider>
        </div>
        <div className="mb-4">
          <Divider color="danger">Danger</Divider>
        </div>
        <div className="mb-4">
          <Divider color="warning">Warning</Divider>
        </div>
        <div className="mb-4">
          <Divider color="success">Success</Divider>
        </div>
      </Fragment>
    );
  },
  tags: ["!autodocs"],
};

export const Styles: DividerStory = {
  render: () => {
    return (
      <Fragment>
        <div className="mb-4">
          <Divider style="solid">Solid</Divider>
        </div>
        <div className="mb-4">
          <Divider style="dashed">Dashed</Divider>
        </div>
        <div className="mb-4">
          <Divider style="dotted">Dotted</Divider>
        </div>
      </Fragment>
    );
  },
  tags: ["!autodocs"],
};

export const Orientation: DividerStory = {
  render: () => {
    return (
      <div className="flex h-64 w-64 border p-4">
        <Divider vertical />
        <div className="px-4">Content</div>
        <Divider vertical />
      </div>
    );
  },
  tags: ["!autodocs"],
};

export const Tester: DividerStory = {
  tags: ["!autodocs"],
  render: (args) => {
    return <Divider {...args}>Divider</Divider>;
  },
  args: {},
};
