/*
 * React Fabric
 * @version: 1.0.0
 *
 *
 * The MIT License (MIT)
 * Copyright (c) 2025 Adarsh Pastakia
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

import {
  Button,
  Content,
  Footer,
  Modal,
  type ModalProps,
} from "@react-fabric/core";
import { yup } from "@react-fabric/utilities";
import { useCallback } from "react";
import { Controller } from "../../form/Controller";
import { Form } from "../../form/Form";
import { ArrayInput } from "../../input/ArrayInput";
import { Input } from "../../input/Input";

const fieldSchema = yup.object({
  fields: yup.array(yup.string().trim().required()).required().min(1),
});

export const AddSchemaFields = (props: ModalProps) => {
  const handleSubmit = useCallback((model: KeyValue) => {
    props.onClose(
      model.fields
        .map((f: string) => f.split(",").map((ff) => ff.trim()))
        .flat(2),
    );
  }, []);

  return (
    <Modal {...props}>
      <Form
        schema={fieldSchema}
        defaultValues={{ fields: [" "] }}
        onSubmit={handleSubmit}
      >
        <Content>
          <ArrayInput minItems={1} name="fields" onAdd={() => String("")}>
            <Controller>
              <Input autoFocus />
            </Controller>
          </ArrayInput>
          <p className="text-sm text-muted">
            Provide list of fields or comma-separated value
          </p>
        </Content>
        <Footer flex justify="end" className="px-2 py-1">
          <Button type="submit">Add</Button>
        </Footer>
      </Form>
    </Modal>
  );
};
