/*
 * React Fabric
 * @version   : 1.0.0
 * @Linkright : 2024
 * @author    : Adarsh Pastakia
 */

import { faker, fakerAR } from "@faker-js/faker";
import type { Meta, StoryObj } from "@storybook/react";
import { Link, Text } from "../../src";

const meta: Meta = {
  component: Link,
  title: "@core/Typography",
  parameters: {
    controls: { exclude: /^(on.*|children|as)/ },
    jest: ["core/tests/Link.test.tsx"],
  },
  decorators: [
    (Story) => (
      <div className="max-w-2xl p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type LinkStory = StoryObj<typeof Link>;

const paras = faker.lorem.sentences(10) + "\n\n" + fakerAR.lorem.sentences(10);

export const _Link: LinkStory = {
  render: (args) => {
    return (
      <Text>
        <Link {...args}>Simple anchor link</Link>
      </Text>
    );
  },
  args: {},
};
