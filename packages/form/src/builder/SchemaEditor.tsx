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

import { Footer } from "@react-fabric/core";
import { EMPTY_ARRAY } from "@react-fabric/utilities";
import { useCallback, useEffect, useRef } from "react";
import { Form, type FormRef } from "../form/Form";
import {
  DATA_TYPES,
  type FormSchema,
  type SchemaEditorProps,
} from "../types/schema";
import { SchemaArrayForm } from "./components/SchemaArrayForm";

export const SchemaEditor = ({
  schemaDef,
  dynamic,
  acceptableTypes,
  optionLists = EMPTY_ARRAY,
  children,
  onSubmit,
  onChange,
}: SchemaEditorProps) => {
  const formRef = useRef<FormRef<{ schema: FormSchema }>>(null);

  const handleChange = useCallback((model: { schema: FormSchema }) => {
    onChange?.(model.schema);
  }, []);

  const handleSubmit = useCallback((model: { schema: FormSchema }) => {
    onSubmit?.(model.schema);
  }, []);

  useEffect(() => {
    formRef.current?.setValues({ schema: schemaDef });
  }, [schemaDef]);

  return (
    <Form formRef={formRef} onChange={handleChange} onSubmit={handleSubmit}>
      <SchemaArrayForm
        dynamic={dynamic}
        optionLists={optionLists}
        acceptableTypes={acceptableTypes ?? Object.values(DATA_TYPES)}
      />
      {children && (
        <Footer flex className="border-t bg-base px-6 py-2">
          {children}
        </Footer>
      )}
    </Form>
  );
};
