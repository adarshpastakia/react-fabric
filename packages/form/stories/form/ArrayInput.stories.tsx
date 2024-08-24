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

import { Button } from "@react-fabric/core";
import { yup } from "@react-fabric/utilities";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { ArrayInput, Controller, Field, Form, Input } from "../../src";

const meta: Meta = {
  component: ArrayInput,
  title: "@form/Form",
  parameters: {
    layout: "centered",
    jest: ["form/tests/ArrayInput.test.tsx"],
  },
  decorators: [
    (Story) => (
      <div className="max-w-[32rem] w-screen">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type ArrayInputStory = StoryObj<typeof ArrayInput>;

export const _ArrayInput: ArrayInputStory = {
  render: (args) => {
    const { t } = useTranslation("form");
    const schema = useRef(
      yup.object({
        names: yup
          .array(yup.string().required().label("Name item"))
          .min(1)
          .label("Name list"),
        fullnames: yup
          .array(
            yup.object({
              firstName: yup.string().required().label("First name"),
              lastName: yup.string().required().label("Last name"),
            }),
          )
          .min(1)
          .label("Fullname list"),
      }),
    );

    return (
      <Form
        onSubmit={action("onSubmit")}
        schema={schema.current}
        defaultValues={{
          names: [],
        }}
      >
        <div className="mx-auto w-96">
          <ArrayInput
            {...args}
            required
            name="names"
            label="Names list"
            addLabel="Add Name"
            onAdd={() => ({ name: "" })}
          >
            <Controller name="name">
              <Input autoFocus placeholder="Name.." />
            </Controller>
          </ArrayInput>

          <ArrayInput
            {...args}
            required
            name="fullnames"
            label="Fullnames list"
            addLabel="Add Fullname"
            onAdd={() => ({ firstName: "", lastName: "" })}
          >
            {({ index, name }) => (
              <Field key={index}>
                <Controller name={`${name}.firstName`}>
                  <Input autoFocus placeholder="First name.." />
                </Controller>
                <Controller name={`${name}.lastName`}>
                  <Input width="96px" placeholder="Last name.." />
                </Controller>
              </Field>
            )}
          </ArrayInput>

          <div className="flex justify-end gap-2 mt-8">
            <Button type="reset" variant="outline">
              Reset
            </Button>
            <Button type="submit" variant="solid">
              Submit
            </Button>
          </div>
        </div>
      </Form>
    );
  },
  args: {},
};
