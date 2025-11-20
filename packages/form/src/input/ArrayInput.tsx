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
import {
  Button,
  cloneChildren,
  CoreIcons,
  Icon,
  Tooltip,
} from "@react-fabric/core";
import { isFalse, isString } from "@react-fabric/utilities";
import classNames from "classnames";
import {
  cloneElement,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
  type PropsWithChildren,
  type ReactNode,
  type Ref,
} from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FieldWrapper } from "../internal/FieldWrapper";

import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { CSS } from "@dnd-kit/utilities";

export interface ArrayInputProps<T extends AnyObject = string> {
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
   * maximum length
   */
  maxItems?: number;
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
    | ((props: { index: number; name: string; item: T }) => ReactNode);
  /**
   * add item button label
   */
  addLabel?: string;
  buttonPosition?: "top" | "bottom" | "both";
  arrayRef?: Ref<{
    addItem: (item: T) => void;
    removeItem: (idx: number) => void;
  }>;
  /**
   * add new item
   */
  onAdd?: () => T;
  /**
   * on item remove
   */
  onRemove?: (item: T, idx: number) => void;
  /**
   * before item remove
   */
  onBeforeRemove?: (item: T, idx: number) => Promise<boolean> | boolean;
  /**
   * can remove item
   */
  canRemove?:
    | false
    | "newonly"
    | ((props: { item: T; index: number; lastItem: boolean }) => boolean);

  /**
   * field width
   */
  width?: number | string;
  /**
   * inline label and input
   */
  inline?: boolean;
  /**
   * label width for inline
   */
  labelWidth?: string;
}

/**
 * ArrayInput component for managing an array of items in a form.
 * It allows adding, removing, and sorting items within the array.
 * It integrates with react-hook-form for form state management and validation.
 * It supports fixed-length lists, custom add/remove handlers, and can display validation errors.
 * It also provides options for inline display and custom button positioning.
 *
 * It uses the `useFieldArray` hook from `react-hook-form` to manage the array state and provides a simple interface for adding and removing items.
 *
 * It also supports drag-and-drop sorting using `@dnd-kit/core` and `@dnd-kit/sortable` for a better user experience when reordering items.
 *
 * @param {ArrayInputProps<T>} props - The properties for the ArrayInput component.
 * @returns {JSX.Element} The rendered ArrayInput component.
 *
 * @example
 * ```jsx
 * <ArrayInput
 *   name="items"
 *   label="Items"
 *   addLabel="Add Item"
 *   onAdd={() => ({ name: "", value: "" })}
 *   onRemove={(item, index) => console.log("Removed item:", item, "at index:", index)}
 *   onBeforeRemove={(item, index) => confirm(`Are you sure you want to remove item at index ${index}?`)}
 *   canRemove={({ item, index, lastItem }) => !lastItem} // Prevent removing the last item
 * >
 *   {({ index, name }) => (
 *     <Input
 *       name={name}
 *       label={`Item ${index + 1}`}
 *       placeholder="Enter item value"
 *       required={index === 0} // Make the first item required
 *     />
 *   )}
 * </ArrayInput>
 * ```
 *
 * @see {@link https://react-hook-form.com/api/usefieldarray} for more details on `useFieldArray`.
 * @see {@link https://react-dnd.github.io/react-dnd/about} for more details on DnD context and sorting.
 */
export const ArrayInput = <T extends AnyObject = string>({
  name,
  children,
  addLabel,
  focusName = "",
  buttonPosition = "bottom",
  onAdd,
  onRemove,
  onBeforeRemove,
  canRemove,
  arrayRef,
  enableSorting,
  disabled = false,
  readOnly = false,
  minItems = 0,
  maxItems = Number.MAX_SAFE_INTEGER,
  ...rest
}: ArrayInputProps<T>) => {
  const { t } = useTranslation("form");
  const form = useFormContext();

  if (!form?.control)
    throw new Error("ArrayInput must be contained within a Form element");

  const { fields, append, remove, move } = useFieldArray({
    name,
    keyName: "__ID__",
    control: form.control,
  });

  const [initialList, setInitialList] = useState<string[]>([]);
  useEffect(() => {
    setInitialList(fields.map((f) => f.__ID__));
  }, []);

  const error = useMemo<AnyObject>(
    () =>
      form.formState.errors[name]?.message ??
      form.formState.errors[name]?.root?.message,
    [form.formState.errors],
  );

  const removeCheck = useCallback(
    (item: T, index: number) => {
      if (canRemove === false) return false;
      if (canRemove === "newonly") {
        return !initialList.includes((item as any).__ID__);
      }
      if (typeof canRemove === "function") {
        return canRemove({
          item,
          index,
          lastItem: index + 1 === fields.length,
        });
      }
      return true;
    },
    [canRemove, initialList, fields],
  );

  const handleAdd = useCallback(
    (item?: T) => {
      if (!item) return;
      append(item);
      setTimeout(() => {
        form.setFocus(
          `${name}.${fields.length}${focusName ? "." + focusName : ""}`,
        );
      }, 100);
    },
    [name, fields, focusName],
  );

  const handleRemove = useCallback(
    (item: T, index: number) => {
      const ret = onBeforeRemove?.(item, index);
      void Promise.resolve(ret).then((b) => {
        if (!isFalse(b)) {
          remove(index);
          onRemove?.(item, index);
        }
      });
    },
    [remove, onRemove, onBeforeRemove],
  );

  useImperativeHandle(arrayRef, () => ({
    addItem: handleAdd,
    removeItem: remove,
  }));

  const Wrapper = useCallback(
    async ({ children }: PropsWithChildren) => {
      if (enableSorting) {
        // pass id list to dnd context
        const idMap = fields.map((item) => item.__ID__);
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

      return await children;
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

  const addButton = useMemo(
    () => (
      <div className="flex justify-end">
        <Tooltip
          color="danger-200"
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
            size="sm"
            aria-label="Add item"
            icon={CoreIcons.insert}
            onClick={() => handleAdd(onAdd?.())}
            data-invalid={!!error}
            disabled={!!disabled || readOnly || fields.length > maxItems}
            className={classNames(
              "fabric-addButton",
              canRemove !== false && "me-10",
            )}
          >
            {addLabel ?? t("form:addArray")}
          </Button>
        </Tooltip>
      </div>
    ),
    [
      error,
      fields,
      handleAdd,
      canRemove,
      disabled,
      readOnly,
      addLabel,
      maxItems,
    ],
  );

  return (
    <div className={"fabric-arrayInput"}>
      <FieldWrapper
        {...rest}
        appendLabel={
          <div className="-me-2">
            {onAdd && buttonPosition !== "bottom" && addButton}
          </div>
        }
      >
        <Wrapper>
          {fields.map((item, index) => (
            <SortableItem
              key={item.__ID__}
              id={item.__ID__}
              className="flex items-center flex-nowrap gap-2 mb-1"
            >
              {typeof children === "function"
                ? children({
                    index,
                    item: item as any,
                    name: `${name}.${index}`,
                  })
                : cloneChildren(children, (child: AnyObject) =>
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
              {canRemove !== false && (
                <Button
                  aria-label="Remove item"
                  icon={CoreIcons.remove}
                  color="danger"
                  variant="link"
                  className="self-end"
                  disabled={
                    disabled ||
                    readOnly ||
                    fields.length <= minItems ||
                    !removeCheck(item as any, index)
                  }
                  onClick={() => handleRemove(item as any, index)}
                />
              )}
            </SortableItem>
          ))}
        </Wrapper>
      </FieldWrapper>
      {onAdd && buttonPosition !== "top" && addButton}
    </div>
  );
};
