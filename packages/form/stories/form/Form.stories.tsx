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

import { addTranslationBundle, Button, Divider } from "@react-fabric/core";
import { Format, yup } from "@react-fabric/utilities";
import type { Meta, StoryObj } from "@storybook/react";
import { useCallback, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { faker } from "@faker-js/faker";
import {
  ArrayInput,
  Controller,
  Form,
  HiddenInput,
  Input,
  Number,
  Password,
} from "../../src";

const meta: Meta = {
  component: Form,
  subcomponents: { Controller, ArrayInput } as AnyObject,
  title: "@form/Form",
  parameters: {
    layout: "fullscreen",
    controls: { exclude: "schema" },
    jest: ["form/tests/Form.test.tsx"],
  },
};

export default meta;
type FormStory = StoryObj<typeof Form>;

addTranslationBundle("form", {
  en: {
    firstName: "First Name",
    lastName: "Last Name",
    age: "Age",
    username: "Username",
    passwd: "Password",
    notStrong:
      "Password not strong enough, must have\n2 uppercase, 2 lowercase, 2 numerals and 2 special character",
  },
});

export const _Form: FormStory = {
  render: (args) => {
    const { t } = useTranslation("form");
    const [files, setFiles] = useState<KeyValue[]>([]);
    const schema = useRef(
      yup.object({
        firstName: yup.string().required().label("form:firstName"),
        lastName: yup.string().required().label("form:lastName"),
        age: yup.number().min(18).max(65).required().label("form:age"),
        username: yup.string().required().min(6).label("form:username"),
        password: yup
          .string()
          .required()
          .min(6)
          .label("form:passwd")
          .test("isStrong", (value, context) => {
            if (
              Array.from(value.matchAll(/[A-Z]/g)).length < 2 ||
              Array.from(value.matchAll(/[a-z]/g)).length < 2 ||
              Array.from(value.matchAll(/\d/g)).length < 2 ||
              Array.from(value.matchAll(/\W/g)).length < 2
            ) {
              return context.createError({
                message: t("notStrong"),
              });
            }
            return true;
          }),
      }),
    );

    const [strength, setStrength] = useState(0);
    const calculateStrength = useCallback((value: string = "") => {
      if (!value) setStrength(0);
      const upper = Array.from(value.matchAll(/[A-Z]/g)).length;
      const lower = Array.from(value.matchAll(/[a-z]/g)).length;
      const digit = Array.from(value.matchAll(/\d/g)).length;
      const special = Array.from(value.matchAll(/\W/g)).length;
      const delta = Math.max(value.length / 4, 1);

      setStrength(
        (Math.min(upper / delta, 1) +
          Math.min(lower / delta, 1) +
          Math.min(digit / delta, 1) +
          Math.min(special / delta, 1)) /
          4,
      );
    }, []);

    return (
      <div className="min-h-[600px]">
        <Form
          {...args}
          schema={schema.current}
          defaultValues={{
            firstName: "",
            lastName: "",
            age: undefined,
          }}
        >
          <div className="mx-auto w-96">
            <Controller name="files">
              <HiddenInput hiddenValue={files} />
            </Controller>
            <Controller name="firstName">
              <Input autoFocus required label={t("firstName")} />
            </Controller>
            <Controller name="lastName">
              <Input required label={t("lastName")} />
            </Controller>
            <Controller name="age">
              <Number
                required
                label={t("age")}
                info="Must be between 18 and 65 years"
              />
            </Controller>
            <Divider />
            <Controller name="username">
              <Input required label={t("username")} />
            </Controller>
            <Controller name="password">
              <Password
                showToggle
                required
                label={t("passwd")}
                onChange={calculateStrength}
                strength={strength}
              />
            </Controller>

            <div className="p-1 mt-4">
              {files.map((file, idx) => (
                <div key={idx} className="flex gap-2 flex-nowrap text-sm">
                  <div className="flex-1 truncate">{file.name}</div>
                  <div>{Format.bytes(file.size)}</div>
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-2 mt-8">
              <Button
                onClick={() =>
                  setFiles([
                    ...files,
                    {
                      name: faker.system.fileName(),
                      size: faker.number.int({ min: 500, max: 500000 }),
                    },
                  ])
                }
              >
                Add File
              </Button>
              <Button
                type="reset"
                variant="outline"
                onClick={() => setStrength(0)}
              >
                Reset
              </Button>
              <Button type="submit" variant="solid">
                Submit
              </Button>
            </div>
          </div>
        </Form>
      </div>
    );
  },
  args: {},
};
