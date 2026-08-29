import { Pillbox } from "@/core/src";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";

const meta: Meta = {
  component: Pillbox,
  tags: ["autodocs"],
  title: "@core/components/Pillbox",
  parameters: {
    layout: "centered",
    jest: ["core/tests/pillbox/Pillbox.test.tsx"],
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-2xl p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type PillboxStory = StoryObj<typeof Pillbox>;

const baseOptions = [
  { value: "all", label: "All" },
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
  { value: "archived", label: "Archived" },
];

export const _Pillbox: PillboxStory = {
  render: (args) => <Pillbox {...args} />,
  args: {
    options: baseOptions,
    value: "active",
    onChange: fn(),
  },
};

export const WithIcons: PillboxStory = {
  render: (args) => <Pillbox {...args} />,
  args: {
    options: [
      { value: "all", icon: "icon-[mdi--home]" },
      { value: "active", label: "Active", icon: "icon-[mdi--check-decagram]" },
      { value: "inactive", label: "Inactive", icon: "icon-[mdi--circle-off-outline]" },
      { value: "archived", label: "Archived", icon: "icon-[mdi--archive]" },
    ],
    value: "active",
    onChange: fn(),
  },
};

export const DisabledPills: PillboxStory = {
  render: (args) => <Pillbox {...args} />,
  args: {
    options: [
      { value: "all", label: "All" },
      { value: "active", label: "Active" },
      { value: "inactive", label: "Inactive", disabled: true },
      { value: "archived", label: "Archived", disabled: true },
    ],
    value: "active",
    onChange: fn(),
  },
};

export const BlockMode: PillboxStory = {
  render: (args) => <Pillbox {...args} />,
  args: {
    options: baseOptions,
    value: "active",
    block: true,
    onChange: fn(),
  },
};

export const ToggleMode: PillboxStory = {
  render: (args) => <Pillbox {...args} />,
  args: {
    options: [
      { value: "off", label: "Off", bg: "--bg-color-muted", color: "--fabric-text" },
      { value: "on", label: "On" },
    ],
    value: "on",
    toggle: true,
    onChange: fn(),
  },
};

export const AutoHide: PillboxStory = {
  render: (args) => <Pillbox {...args} />,
  args: {
    options: [
      { value: "light", icon: "icon-[solar--sun-2-linear]", bg: "marigold-500", color: "black" },
      { value: "dark", icon: "icon-[solar--moon-linear]", bg: "#191970" },
    ],
    value: "light",
    toggle: true,
    autoHide: true,
    onChange: fn(),
  },
};

export const CustomColors: PillboxStory = {
  render: (args) => <Pillbox {...args} />,
  args: {
    options: [
      { value: "success", label: "Success", bg: "success-500", color: "black" },
      { value: "warning", label: "Warning", bg: "warning-500", color: "black" },
      { value: "error", label: "Error", bg: "danger-500", color: "white" },
      { value: "info", label: "Info", bg: "info-500", color: "white" },
    ],
    value: "success",
    onChange: fn(),
  },
};

export const ColorVariations: PillboxStory = {
  render: () => (
    <div className="flex flex-col items-start gap-4 w-full max-w-2xl">
      <Pillbox
        options={[
          { value: "red", label: "Red", bg: "scarlet-500", color: "white" },
          { value: "green", label: "Green", bg: "avocado-500", color: "white" },
          { value: "blue", label: "Blue", bg: "denim-500", color: "white" },
        ]}
        value="green"
        onChange={fn()}
      />
      <Pillbox
        options={[
          { value: "on", label: "Enabled", bg: "success-500", color: "black" },
          { value: "off", label: "Disabled", bg: "tint-500", color: "tint-200" },
        ]}
        value="on"
        toggle
        onChange={fn()}
      />
    </div>
  ),
};

export const Tester: PillboxStory = {
  tags: ["!autodocs"],
  render: (args) => <Pillbox {...args} />,
  args: {
    options: [
      { value: "all", label: "All", icon: { icon: "list" } },
      { value: "active", label: "Active", icon: { icon: "check" }, bg: "primary-500", color: "white" },
      { value: "inactive", label: "Inactive" },
      { value: "archived", label: "Archived", disabled: true },
    ],
    value: "active",
    onChange: fn(),
  },
};
