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

import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { SortableContext } from "@dnd-kit/sortable";
import {
  Button,
  Content,
  CoreIcons,
  Header,
  useOverlayService,
} from "@react-fabric/core";
import { isArray } from "@react-fabric/utilities";
import { type PropsWithChildren, useCallback, useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { DATA_TYPES, type SchemaEditorProps } from "../../types/schema";
import { AddSchemaFields } from "./AddSchemaFields";
import { SchemaField } from "./SchemaField";

export const SchemaArrayForm = ({
  dynamic,
  acceptableTypes,
  optionLists,
}: Partial<SchemaEditorProps>) => {
  const form = useFormContext();
  const [defaultOpen, setDefaultOpen] = useState(true);
  const { fields, append, remove, update, move } = useFieldArray({
    name: "schema",
    control: form.control,
  });

  const handleTypeChange = useCallback((index: number, val: KeyValue) => {
    update(index, val);
  }, []);

  const handleRemove = useCallback((index: number) => {
    remove(index);
  }, []);

  const [AddModal, openAddfields] = useOverlayService(AddSchemaFields);
  const handleAdd = useCallback(() => {
    void openAddfields().then((fields) => {
      if (isArray(fields)) {
        const existing = form
          .getValues()
          .schema.map((field: KeyValue) => field.id);
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
  }, []);

  const Wrapper = useCallback(
    ({ children }: PropsWithChildren) => {
      if (dynamic) {
        // pass id list to dnd context
        const idMap = fields.map((item) => item.id);
        const handleDragEnd = (e: DragEndEvent) => {
          if (e.over && e.active.id !== e.over.id) {
            // find index of item and drop over
            const active = idMap.indexOf(`${e.active.id}`);
            const end = idMap.indexOf(`${e.over.id}`);
            move(active, end);
          }
        };
        return (
          <DndContext
            onDragEnd={handleDragEnd}
            modifiers={[restrictToVerticalAxis]}
          >
            <SortableContext items={idMap}>{children}</SortableContext>
          </DndContext>
        );
      }

      return children;
    },
    [dynamic, fields],
  );
  // @ts-expect-error ignore
  Wrapper.displayName = "SortableWrapper";

  return (
    <Wrapper>
      <Header flex justify="end" className="gap-1 px-2">
        {dynamic && (
          <Button
            size="sm"
            variant="link"
            icon={CoreIcons.insert}
            aria-label="add field"
            onClick={handleAdd}
          />
        )}
        <Button
          size="sm"
          variant="link"
          icon={CoreIcons.colapseAllVar}
          aria-label="collapse all"
          onClick={() => setDefaultOpen(false)}
        />
        <Button
          size="sm"
          variant="link"
          icon={CoreIcons.expandAllVar}
          aria-label="expand all"
          onClick={() => setDefaultOpen(true)}
        />
      </Header>
      <Content className="divide-y">
        {fields.map((field, index) => (
          <SchemaField
            key={index}
            defaultOpen={defaultOpen}
            id={form.getValues().schema[index].id}
            fieldId={field.id}
            field={`schema.${index}`}
            dynamic={dynamic}
            optionLists={optionLists}
            onRemove={() => handleRemove(index)}
            getModel={() => form.getValues().schema[index]}
            onTypeChange={(val: KeyValue) => handleTypeChange(index, val)}
            acceptableTypes={acceptableTypes ?? Object.values(DATA_TYPES)}
          />
        ))}
      </Content>
      {AddModal}
    </Wrapper>
  );
};
