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

import { RestrictToVerticalAxis } from "@dnd-kit/abstract/modifiers";
import { DragDropProvider, type DragEndEvent } from "@dnd-kit/react";
import { Button, Content, Header, useOverlayService } from "@react-fabric/core";
import { isArray } from "@react-fabric/utilities";
import { useCallback, useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import type { FormSchema, SchemaDef } from "../../types/schema";
import { DATA_TYPES, type SchemaEditorProps } from "../../types/schema";
import { AddSchemaFields } from "./AddSchemaFields";
import { SchemaField } from "./SchemaField";

function Wrapper({
  children,
  fields,
  onMove,
}: {
  children: React.ReactNode;
  fields: KeyValue[];
  onMove: (active: number, end: number) => void;
}) {
  // pass id list to dnd context
  const idMap = fields.map((item) => item.__ID__ as string);
  const handleDragEnd = (e: DragEndEvent) => {
    if (e.operation.source?.id !== e.operation.target?.id) {
      // find index of item and drop over
      const active = idMap.indexOf(`${e.operation.source?.id}`);
      const end = idMap.indexOf(`${e.operation.target?.id}`);
      onMove(active, end);
    }
  };
  return (
    <DragDropProvider onDragEnd={handleDragEnd} modifiers={[RestrictToVerticalAxis]}>
      {children}
    </DragDropProvider>
  );
}

// Need to disable prop-types lint due to uknown lint error
export function SchemaArrayForm({ dynamic, acceptableTypes, optionLists }: Partial<SchemaEditorProps>) {
  const form = useFormContext<{ schema: FormSchema }>();
  const [defaultOpen, setDefaultOpen] = useState(true);
  const { fields, append, remove, move } = useFieldArray({
    name: "schema",
    control: form.control,
  });

  const handleTypeChange = useCallback(
    (index: number, val: SchemaDef) => {
      form.setValue(`schema.${index}`, val);
    },
    [form],
  );

  const handleRemove = useCallback(
    (index: number) => {
      remove(index);
    },
    [remove],
  );

  const [renderModal, openAddfields] = useOverlayService<unknown, string[]>(AddSchemaFields);
  const handleAdd = useCallback(() => {
    void openAddfields().then((fields) => {
      if (isArray(fields)) {
        const existing = form.getValues().schema.map((field) => field.id);
        fields.forEach((field) => {
          if (!existing.includes(field)) {
            append({
              id: field,
              datatype: DATA_TYPES.STRING,
              label: "",
            });
          }
        });
      }
    });
    // eslint-disable-next-line @eslint-react/exhaustive-deps
  }, []);

  return (
    <Wrapper onMove={move} fields={fields}>
      <Header flex justify="end" className="gap-1 px-2">
        {dynamic && (
          <Button size="sm" variant="link" icon="icon-[mdi--plus-circle-outline]" aria-label="add field" onClick={handleAdd} />
        )}
        <Button
          size="sm"
          variant="link"
          icon="icon-[mdi--arrow-collapse-vertical]"
          aria-label="collapse all"
          onClick={() => setDefaultOpen(false)}
        />
        <Button
          size="sm"
          variant="link"
          icon="icon-[mdi--arrow-expand-vertical]"
          aria-label="expand all"
          onClick={() => setDefaultOpen(true)}
        />
      </Header>
      <Content className="divide-y">
        {fields.map((field, index) => (
          <SchemaField
            // eslint-disable-next-line @eslint-react/no-array-index-key
            key={index}
            index={index}
            defaultOpen={defaultOpen}
            id={form.getValues().schema[index].id}
            fieldId={field.id}
            field={`schema.${index}`}
            dynamic={dynamic}
            optionLists={optionLists}
            onRemove={() => handleRemove(index)}
            getModel={() => form.getValues().schema[index]}
            onTypeChange={(val: SchemaDef) => handleTypeChange(index, val)}
            acceptableTypes={acceptableTypes ?? Object.values(DATA_TYPES)}
          />
        ))}
      </Content>
      {renderModal()}
    </Wrapper>
  );
}
