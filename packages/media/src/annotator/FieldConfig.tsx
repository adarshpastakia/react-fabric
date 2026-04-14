/*
 * React Fabric
 * @version: 1.0.0
 *
 *
 * The MIT License (MIT)
 * Copyright (c) 2026 Adarsh Pastakia
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

import { autoUpdate, flip, FloatingPortal, shift, useFloating, useInteractions } from "@floating-ui/react";
import { Button, Card } from "@react-fabric/core";
import { Controller, Form, Input, Select } from "@react-fabric/form";
import { useEffect, useState } from "react";
import { useAnnotatorContext } from "./context";
import { AnnotatorFieldType, COLOR_MAP } from "./types";

export const FieldConfig = () => {
  const { editingShape, canvasRef, size, showForm } = useAnnotatorContext();
  const [isOpen, setIsOpen] = useState(false);
  const [values, setValues] = useState({
    id: "",
    type: AnnotatorFieldType.Text,
  });
  const { refs, floatingStyles } = useFloating({
    nodeId: `config`,
    open: isOpen,
    onOpenChange: (open, _, reason) => {
      if (reason === "reference-press") return;
      setIsOpen(open);
    },
    strategy: "absolute",
    placement: "bottom-start",
    whileElementsMounted: autoUpdate,
    middleware: [shift({ padding: 8 }), flip()],
  });

  const { getFloatingProps } = useInteractions([]);

  useEffect(() => {
    setIsOpen(false);
    if (editingShape && showForm) {
      setValues({
        id: editingShape.attrs.id,
        type: editingShape.attrs.type,
      });
      refs.setReference({
        getBoundingClientRect: () => {
          const scrollTop = canvasRef.current?.getStage()?.content?.closest(".fabric-content")?.scrollTop ?? 0;
          return {
            x: editingShape.x() * size.ratio,
            y: editingShape.y() * size.ratio - scrollTop,
            width: editingShape.width() * size.ratio,
            height: editingShape.height() * size.ratio,
            left: editingShape.x() * size.ratio,
            top: editingShape.y() * size.ratio - scrollTop,
            right: editingShape.x() * size.ratio + editingShape.width() * size.ratio,
            bottom: editingShape.y() * size.ratio - scrollTop + editingShape.height() * size.ratio,
          };
        },
        contextElement: canvasRef.current?.getStage()?.content,
      });
      // delay to avoid scrolling jump after setting reference
      setTimeout(() => {
        setIsOpen(true);
      }, 200);
    }
  }, [editingShape, showForm]);

  return (
    isOpen && (
      <FloatingPortal>
        <div
          ref={refs.setFloating}
          style={{
            zIndex: "var(--z-popover)",
            ...floatingStyles,
          }}
          data-ref="dropdownBody"
          {...getFloatingProps({
            className: "shadow-2xl",
            onClick: (e) => e.stopPropagation(),
          })}
        >
          <Card className="w-64 p-0" bodyClassName="p-2">
            <div className="flex justify-end">
              <Button icon="icon-[mdi--delete-forever]" aria-label="delete" variant="outline" color="danger" size="xs" />
            </div>
            <Form defaultValues={values} onChange={setValues}>
              <Controller name="id">
                <Input label="Field" />
              </Controller>
              <Controller name="type">
                <Select
                  label="Type"
                  options={Object.values(AnnotatorFieldType)}
                  renderer={(val) => (
                    <div
                      className="capitalize border-s-4 ps-2 text-sm"
                      style={{
                        borderColor: COLOR_MAP[val ?? "text"],
                      }}
                    >
                      {val}
                    </div>
                  )}
                />
              </Controller>
            </Form>
          </Card>
        </div>
      </FloatingPortal>
    )
  );
};
