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
import { mdiAccountCircle } from "@mdi/js";
import {
  mdilAccount,
  mdilAlert,
  mdilAlertOctagon,
  mdilContentSave,
  mdilEye,
  mdilInformation,
} from "@mdi/light-js";
import type { Meta, StoryObj } from "@storybook/react";
import { memo, useDeferredValue, useMemo } from "react";
import {
  AnimationBars,
  AnimationSpinner,
  Avatar,
  Button,
  Callout,
  Card,
  Chip,
  Col,
  Container,
  Content,
  Divider,
  EmptyContent,
  Icon,
  Page,
  ProgressBar,
  ProgressCircle,
  Row,
  Skeleton,
  ThemeProvider,
  Title,
  Viewport,
} from "../../src";
import { Message, Toast } from "../../src/overlays";

const meta: Meta = {
  component: ThemeProvider,
  title: "@core/Application",
  argTypes: {
    primary: {
      control: "select",
      options: [
        "scarlet",
        "pumpkin",
        "jade",
        "denim",
        "iris",
        "lilac",
        "coral",
        "wood",
      ],
    },
    accent: {
      control: "select",
      options: [
        "scarlet",
        "pumpkin",
        "jade",
        "denim",
        "iris",
        "lilac",
        "coral",
        "wood",
      ],
    },
    primaryColor: {
      control: "color",
    },
    accentColor: {
      control: "color",
    },
    tintColor: {
      control: "select",
      options: ["silver", "steel", "olive", "sand"],
    },
  },
  parameters: {
    layout: "fullscreen",
    controls: { exclude: /^(on.*|children|as)/ },
    jest: ["core/tests/ThemeProvider.test.tsx"],
  },
};

export default meta;
type ThemeStory = StoryObj<typeof ThemeProvider>;

const Sample = memo(() => (
  <section className="p-4">
    <div className="p-6 flex gap-2">
      <Icon
        icon="mdi mdi-react"
        bg="primary-100"
        color="primary-700"
        size="3rem"
      />
      <Icon
        icon="mdi mdi-react"
        bg="accent-100"
        color="accent-700"
        size="3rem"
      />
      <div className="flex-1">
        <Title as="h2">React UI Framework</Title>
      </div>
    </div>
    <Divider className="mt-8">
      <Title>Colors</Title>
    </Divider>
    <div className="flex gap-2" style={{ height: "2rem" }}>
      <div className="flex-1 rounded outline bg-primary-400" />
      <div className="flex-1 rounded outline bg-accent-400" />
      <div className="flex-1 rounded outline bg-info-400" />
      <div className="flex-1 rounded outline bg-danger-400" />
      <div className="flex-1 rounded outline bg-success-400" />
      <div className="flex-1 rounded outline bg-warning-400" />
      <div className="flex-1 rounded outline bg-base" />
      <div className="flex-1 rounded outline bg-dimmed" />
      <div className="flex-1 rounded outline bg-muted" />
    </div>
    <div className="flex gap-4" style={{ height: "2rem" }}>
      <div className="flex-1 capitalize text-center font-medium text-primary-600">
        primary
      </div>
      <div className="flex-1 capitalize text-center font-medium text-accent-600">
        accent
      </div>
      <div className="flex-1 capitalize text-center font-medium text-info-600">
        info
      </div>
      <div className="flex-1 capitalize text-center font-medium text-danger-600">
        danger
      </div>
      <div className="flex-1 capitalize text-center font-medium text-success-600">
        success
      </div>
      <div className="flex-1 capitalize text-center font-medium text-warning-600">
        warning
      </div>
      <div className="flex-1 capitalize text-center font-medium text-base">
        base
      </div>
      <div className="flex-1 capitalize text-center font-medium text-dimmed">
        dimmed
      </div>
      <div className="flex-1 capitalize text-center font-medium text-muted">
        muted
      </div>
    </div>
    <Divider className="mt-8">
      <Title>Alternating Background</Title>
    </Divider>
    <ul className="bg-alternate">
      <li>{faker.lorem.lines(1)}</li>
      <li>{faker.lorem.lines(1)}</li>
      <li>{faker.lorem.lines(1)}</li>
      <li>{faker.lorem.lines(1)}</li>
      <li>{faker.lorem.lines(1)}</li>
      <li>{faker.lorem.lines(1)}</li>
    </ul>
    <ol className="bg-alternate">
      <li>{faker.lorem.lines(1)}</li>
      <li>{faker.lorem.lines(1)}</li>
      <li>{faker.lorem.lines(1)}</li>
      <li>{faker.lorem.lines(1)}</li>
      <li>{faker.lorem.lines(1)}</li>
      <li>{faker.lorem.lines(1)}</li>
    </ol>
    <dl className="bg-alternate my-4">
      <dt>Cat</dt>
      <dd>{faker.animal.cat()}</dd>
      <dt>Dog</dt>
      <dd>{faker.animal.dog()}</dd>
      <dt>Bird</dt>
      <dd>{faker.animal.bird()}</dd>
    </dl>
    <dl className="bg-alternate align-end my-4">
      <dt>Chemical</dt>
      <dd>{faker.science.chemicalElement().name}</dd>
      <dt>Airline</dt>
      <dd>{faker.airline.airline().name}</dd>
      <dt>Company</dt>
      <dd>{faker.company.name()}</dd>
    </dl>
    <Divider className="mt-8">
      <Title>Buttons</Title>
    </Divider>
    <div className="flex flex-wrap gap-2 mb-2">
      <Button color="primary">Primary</Button>
      <Button color="accent">Accent</Button>
      <Button color="info">Info</Button>
      <Button color="danger">Danger</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
    </div>
    <div className="flex flex-wrap gap-2">
      <Button variant="solid" color="primary">
        Primary
      </Button>
      <Button variant="solid" color="accent">
        Accent
      </Button>
      <Button variant="solid" color="info">
        Info
      </Button>
      <Button variant="solid" color="danger">
        Danger
      </Button>
      <Button variant="solid" color="success">
        Success
      </Button>
      <Button variant="solid" color="warning">
        Warning
      </Button>
    </div>
    <Divider className="mt-8">
      <Title>Chips</Title>
    </Divider>
    <div className="flex gap-2 mb-2">
      <Chip color="primary">Primary</Chip>
      <Chip color="accent">Accent</Chip>
      <Chip color="info">Info</Chip>
      <Chip color="danger">Danger</Chip>
      <Chip color="success">Success</Chip>
      <Chip color="warning">Warning</Chip>
    </div>
    <div className="flex gap-2 mb-2">
      <Chip variant="solid" color="primary">
        Primary
      </Chip>
      <Chip variant="solid" color="accent">
        Accent
      </Chip>
      <Chip variant="solid" color="info">
        Info
      </Chip>
      <Chip variant="solid" color="danger">
        Danger
      </Chip>
      <Chip variant="solid" color="success">
        Success
      </Chip>
      <Chip variant="solid" color="warning">
        Warning
      </Chip>
    </div>
    <Divider className="mt-8">
      <Title>Callout</Title>
    </Divider>
    <Row>
      <Col className="span-6 overflow-hidden" stretchContent>
        <Callout color="primary" title="Primary callout">
          <div className="truncate">{faker.lorem.lines(2)}</div>
        </Callout>
      </Col>
      <Col className="span-6 overflow-hidden" stretchContent>
        <Callout color="accent" title="Accent callout">
          <div className="truncate">{faker.lorem.lines(2)}</div>
        </Callout>
      </Col>
    </Row>
    <Divider className="mt-8">
      <Title>Empty Content</Title>
    </Divider>
    <Row>
      <Col className="span-6 overflow-hidden" stretchContent>
        <EmptyContent title="Empty content" message={faker.lorem.lines(2)}>
          <Button size="sm" variant="link">
            Action
          </Button>
        </EmptyContent>
      </Col>
      <Col className="span-6 overflow-hidden" stretchContent>
        <EmptyContent
          title="Empty content"
          size="sm"
          message={faker.lorem.lines(2)}
        >
          <Button size="sm" variant="link">
            Action
          </Button>
        </EmptyContent>
      </Col>
    </Row>
    <Divider className="mt-8">
      <Title>Notifications</Title>
    </Divider>
    <Row>
      <Col className="span-6">
        <Message color="primary" title="Title" message="Floating message...." />
      </Col>
      <Col className="span-6">
        <Message color="accent" title="Title" message="Floating message...." />
      </Col>
      <Col className="span-6">
        <Toast
          color="primary"
          title="Toast title"
          message="Toast message...."
        />
      </Col>
      <Col className="span-6">
        <Toast
          type="confirm"
          color="accent"
          title="Toast title"
          message="Toast message...."
        />
      </Col>
    </Row>
    <Divider className="mt-8">
      <Title>Progress</Title>
    </Divider>
    <Row orient="col">
      <Col>
        <ProgressBar color="primary" value={63} animate />
      </Col>
      <Col>
        <ProgressBar color="accent" value={42} animate />
      </Col>
      <Col className="span-6 overflow-hidden" stretchContent>
        <div className="flex gap-4 justify-center items-center p-4">
          <ProgressCircle size="md" color="primary" value={42} />
          <ProgressCircle size="md" color="accent" value={63} />
        </div>
      </Col>
    </Row>
    <Divider className="mt-8">
      <Title>Loaders</Title>
    </Divider>
    <Row>
      <Col className="span-6" stretchContent>
        <Card>
          <Content>{faker.lorem.paragraph()}</Content>
          <AnimationBars />
        </Card>
      </Col>
      <Col className="span-6" stretchContent>
        <Card>
          <Content>{faker.lorem.paragraph()}</Content>
          <AnimationSpinner />
        </Card>
      </Col>
      <Col className="span-12" stretchContent>
        <Card>
          <Content>{faker.lorem.lines(2)}</Content>
          <Skeleton />
          <Skeleton />
        </Card>
      </Col>
    </Row>
    <Divider className="mt-8">
      <Title>Icons</Title>
    </Divider>
    <div className="flex gap-2 mb-2 text-4xl">
      <Icon color="primary" icon={mdilAccount} />
      <Icon color="accent" icon={mdilEye} />
      <Icon color="info" icon={mdilInformation} />
      <Icon color="danger" icon={mdilAlertOctagon} />
      <Icon color="success" icon={mdilContentSave} />
      <Icon color="warning" icon={mdilAlert} />
    </div>
    <Divider className="mt-8">
      <Title>Avatars</Title>
    </Divider>
    <div className="flex gap-2 mb-2 text-5xl">
      <Avatar
        name="Some Name"
        color="primary"
        fallbackIcon={mdiAccountCircle}
      />
      <Avatar name="Some Name" color="accent" fallbackIcon={mdiAccountCircle} />
      <Avatar name="Some Name" color="info" fallbackIcon={mdiAccountCircle} />
      <Avatar name="Some Name" color="danger" fallbackIcon={mdiAccountCircle} />
      <Avatar
        name="Some Name"
        color="success"
        fallbackIcon={mdiAccountCircle}
      />
      <Avatar
        name="Some Name"
        color="warning"
        fallbackIcon={mdiAccountCircle}
      />
    </div>
  </section>
));

export const _ThemeProvider: ThemeStory = {
  render: (args) => {
    const _primaryColor = useMemo(
      // @ts-expect-error ignore
      () => args.primaryColor ?? args.primary,
      // @ts-expect-error ignore
      [args.primary, args.primaryColor],
    );
    const _accentColor = useMemo(
      // @ts-expect-error ignore
      () => args.accentColor ?? args.accent,
      // @ts-expect-error ignore
      [args.accent, args.accentColor],
    );

    const primaryColor = useDeferredValue(_primaryColor);
    const accentColor = useDeferredValue(_accentColor);
    return (
      <ThemeProvider
        {...args}
        primaryColor={primaryColor}
        accentColor={accentColor}
      >
        <Viewport>
          <Page paper>
            <Content>
              <Container>
                <Row>
                  <Col className="span-12 lg:span-6 overflow-hidden">
                    <Title color="dimmed" className="border-b font-light mb-4">
                      Light theme
                    </Title>
                    <ThemeProvider colorScheme="light">
                      <Sample />
                    </ThemeProvider>
                  </Col>
                  <Col className="span-12 lg:span-6 overflow-hidden">
                    <Title color="dimmed" className="border-b font-light mb-4">
                      Dark theme
                    </Title>
                    <ThemeProvider colorScheme="dark">
                      <Sample />
                    </ThemeProvider>
                  </Col>
                </Row>
              </Container>
            </Content>
          </Page>
        </Viewport>
      </ThemeProvider>
    );
  },
  args: {},
};
