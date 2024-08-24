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

import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { Button, CoreIcons, Icon, Tooltip } from "@react-fabric/core";
import { isString } from "@react-fabric/utilities";
import classNames from "classnames";
import {
  Children,
  cloneElement,
  useCallback,
  useImperativeHandle,
  useMemo,
  type PropsWithChildren,
  type ReactNode,
  type RefObject,
} from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FieldWrapper } from "../internal/FieldWrapper";
import classes from "./ArrayInput.module.css";

import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { CSS } from "@dnd-kit/utilities";
export interface ArrayInputProps {
  /**
   * input label
   */
  label?: string;
  /**
   * append to label end
   */
  appendLabel?: JSX.Element | string | number | boolean;
  /**
   * info label at bottom
   */
  info?: string;
  /**
   * required
   */
  required?: boolean;
  /**
   * disabled input
   */
  disabled?: boolean;
  /**
   * read-only input
   */
  readOnly?: boolean;

  /**
   * field name
   */
  name: string;
  /**
   * minimum required length
   */
  minItems?: number;
  /**
   * field name to focus on add
   */
  focusName?: string;
  /**
   * enable drag-n-drop sorting
   */
  enableSorting?: boolean;
  children:
    | React.ReactNode
    | ((props: { index: number; name: string }) => ReactNode);
  /**
   * add item button label
   */
  addLabel?: string;
  /**
   * fixed length list
   */
  fixedList?: boolean;
  arrayRef?: RefObject<{
    addItem: (item: AnyObject) => void;
    removeItem: (idx: number) => void;
  }>;
  /**
   * Add item
   */
  onAdd?: () => AnyObject;
}

export const ArrayInput = ({
  name,
  children,
  addLabel,
  fixedList,
  focusName = "",
  onAdd,
  arrayRef,
  enableSorting,
  disabled = false,
  readOnly = false,
  minItems = 0,
  ...rest
}: ArrayInputProps) => {
  const { t } = useTranslation("form");
  const form = useFormContext();

  if (!form?.control)
    throw new Error("ArrayInput must be contained within a Form element");

  const { fields, append, remove, move } = useFieldArray({
    name,
    control: form.control,
  });

  const error = useMemo<AnyObject>(
    () =>
      form.formState.errors[name]?.message ??
      form.formState.errors[name]?.root?.message,
    [form.formState.errors],
  );

  const handleAdd = useCallback(
    (item: AnyObject) => {
      append(item);
      setTimeout(() => {
        form.setFocus(
          `${name}.${fields.length}${focusName ? "." + focusName : ""}`,
        );
      }, 100);
    },
    [name, fields, focusName],
  );

  useImperativeHandle(arrayRef, () => ({
    addItem: handleAdd,
    removeItem: remove,
  }));

  const Wrapper = useCallback(
    ({ children }: PropsWithChildren) => {
      if (enableSorting) {
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
    [enableSorting, fields],
  );
  // @ts-expect-error ignore
  Wrapper.displayName = "SortableWrapper";

  const SortableItem = useCallback(
    ({
      id,
      children,
      className,
    }: PropsWithChildren<{ id: AnyObject; className: string }>) => {
      if (enableSorting) {
        const {
          attributes,
          listeners,
          setNodeRef,
          transform,
          transition,
          isDragging,
        } = useSortable({ id });
        return (
          <div
            className={className}
            ref={setNodeRef}
            style={{
              transform: CSS.Transform.toString(transform),
              transition,
            }}
          >
            <Icon
              className={isDragging ? "cursor-grabbing" : "cursor-grab"}
              icon={CoreIcons.dragHandle}
              {...attributes}
              {...listeners}
            />
            {children}
          </div>
        );
      }

      return <div className={className}>{children}</div>;
    },
    [enableSorting],
  );
  // @ts-expect-error ignore
  SortableItem.displayName = "SortableItem";

  return (
    <div className={classes.arrayInput}>
      <FieldWrapper {...rest}>
        <Wrapper>
          {fields.map((item, index) => (
            <SortableItem
              key={item.id}
              id={item.id}
              className="flex items-center flex-nowrap gap-2 mb-1"
            >
              {typeof children === "function"
                ? children({
                    index,
                    name: `${name}.${index}`,
                  })
                : Children.map(children, (child: AnyObject) =>
                    cloneElement(
                      child,
                      Object.assign(
                        {
                          disabled,
                          readOnly,
                          "data-inner": true,
                          name: `${name}.${index}${
                            child.props.name
                              ? "." + (child.props.name as string)
                              : ""
                          }`,
                        },
                        index > 0 && {
                          label: undefined,
                          required: undefined,
                          appendLabel: undefined,
                        },
                      ),
                    ),
                  )}
              {!fixedList && (
                <Button
                  aria-label="Remove item"
                  icon={CoreIcons.remove}
                  color="danger"
                  variant="link"
                  className="self-end"
                  disabled={disabled || readOnly || fields.length <= minItems}
                  onClick={() => remove(index)}
                />
              )}
            </SortableItem>
          ))}
        </Wrapper>
      </FieldWrapper>
      {!fixedList && onAdd && (
        <div className="flex justify-end">
          <Tooltip
            color="danger"
            content={
              isString(error)
                ? `${error}`
                : (t(
                    error?.key,
                    error?.values
                      ? {
                          ...error?.values,
                          label: t(
                            error.values?.label ?? "form:badkey",
                            error.values?.path,
                          ),
                        }
                      : {},
                  ) as string)
            }
          >
            <Button
              aria-label="Add item"
              icon={CoreIcons.insert}
              onClick={() => handleAdd(onAdd())}
              data-invalid={!!error}
              disabled={!!disabled || readOnly}
              className={classNames(classes.addButton, "me-10")}
            >
              {addLabel ?? t("addArray")}
            </Button>
          </Tooltip>
        </div>
      )}
    </div>
  );
};
