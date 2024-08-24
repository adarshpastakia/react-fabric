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

import { Button, ButtonGroup, CoreIcons } from "@react-fabric/core";
import { type RefProp } from "@react-fabric/core/dist/types/types";
import {
  useCallback,
  useDeferredValue,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Field, type FieldProps } from "../input/Field";
import { List } from "./List";
import { restrictToHorizontalAxis } from "@dnd-kit/modifiers";
import {
  DndContext,
  DragOverlay,
  useDraggable,
  useDroppable,
} from "@dnd-kit/core";
import { mergeRefs } from "@react-fabric/utilities";

export interface DualListProps<T>
  extends Omit<FieldProps, "children">,
    RefProp<HTMLInputElement> {
  /**
   * list height
   */
  height?: string | number;
  /**
   * list options
   */
  options: T[];
  /**
   * selected value
   */
  value?: string[];
  /**
   * group by property name
   */
  groupProperty?: keyof T;
  /**
   * label property name
   */
  labelProperty?: keyof T;
  /**
   * value property name
   */
  valueProperty?: keyof T;
  /**
   * item renderer
   */
  renderer?: (option: T) => React.ReactNode;
  /**
   * change handler
   */
  onChange?: (value?: string[]) => void;
}

export const DualList = <T extends AnyObject = string>({
  ref,
  value,
  options,
  groupProperty,
  height = "18rem",
  labelProperty = "label" as AnyObject,
  valueProperty = "id" as AnyObject,
  renderer,
  onChange,
  // @ts-expect-error ignore
  name,
  // @ts-expect-error ignore
  invalid,
  // @ts-expect-error ignore
  readOnly,
  // @ts-expect-error ignore
  disabled,
  // @ts-expect-error ignore
  placeholder,
  // @ts-expect-error ignore
  autoFocus,
  // @ts-expect-error ignore
  error,
  ...rest
}: DualListProps<T>) => {
  const [actualValue, setActualValue] = useState<T[]>([]);
  const [leftSelected, setLeftSelected] = useState<T[]>([]);
  const [rightSelected, setRightSelected] = useState<T[]>([]);
  const deferred = useDeferredValue(value);

  useEffect(() => {
    setActualValue(
      options.filter((opt: AnyObject) =>
        deferred?.includes(opt[valueProperty] ?? opt),
      ),
    );
  }, [deferred, options]);

  const [leftOptions, rightOptions] = useMemo(() => {
    return [
      options.filter((opt: AnyObject) => !actualValue?.includes(opt)),
      actualValue,
    ];
  }, [options, actualValue]);

  const moveAllLeft = useCallback(() => {
    setLeftSelected([]);
    setRightSelected([]);
    setActualValue([]);
    onChange?.([]);
  }, [onChange]);

  const moveAllRight = useCallback(() => {
    setLeftSelected([]);
    setRightSelected([]);
    setActualValue(options);
    onChange?.(options.map((opt: AnyObject) => `${opt[valueProperty] ?? opt}`));
  }, [onChange, options, valueProperty]);

  const moveLeftSelected = useCallback(() => {
    const selected = [...actualValue, ...leftSelected];
    setActualValue(selected);
    onChange?.(
      selected.map((opt: AnyObject) => `${opt[valueProperty] ?? opt}`),
    );
    setLeftSelected([]);
  }, [onChange, leftSelected, actualValue]);

  const moveRightSelected = useCallback(() => {
    const selected = actualValue.filter((opt) => !rightSelected.includes(opt));
    setActualValue(selected);
    onChange?.(
      selected.map((opt: AnyObject) => `${opt[valueProperty] ?? opt}`),
    );
    setRightSelected([]);
  }, [onChange, rightSelected, actualValue]);

  const [dragItems, setDragItems] = useState<AnyObject[]>([]);
  const dragLeft = useDraggable({
    id: "unselected",
    disabled: !leftSelected.length,
    data: { supports: ["selected"] },
    attributes: { role: "none" },
  });
  const dragRight = useDraggable({
    id: "selected",
    disabled: !rightSelected.length,
    data: { supports: ["unselected"] },
    attributes: { role: "none" },
  });
  const dropLeft = useDroppable({
    id: "unselected",
    data: { accepts: ["selected"] },
  });
  const dropRight = useDroppable({
    id: "selected",
    data: { accepts: ["unselected"] },
  });

  return (
    <Field {...rest} noOutline plain>
      <DndContext
        modifiers={[restrictToHorizontalAxis]}
        onDragStart={(e) => {
          setDragItems(
            e.active.id === "selected" ? rightSelected : leftSelected,
          );
        }}
        onDragEnd={(e) => {
          setDragItems([]);
        }}
      >
        <div
          className="flex-1 flex flex-col overflow-hidden p-px"
          ref={mergeRefs(dragLeft.setNodeRef, dropLeft.setNodeRef)}
          {...dragLeft.attributes}
          {...dragLeft.listeners}
        >
          <List
            ref={ref}
            multiple
            allowClear
            name={name}
            invalid={invalid}
            readOnly={readOnly}
            disabled={disabled}
            placeholder={placeholder}
            autoFocus={autoFocus}
            error={error}
            height={height}
            options={leftOptions}
            groupProperty={groupProperty}
            labelProperty={labelProperty}
            valueProperty={valueProperty}
            renderer={renderer}
            onSelect={setLeftSelected}
            data-inner={true}
            data-hide-selected={true}
          />
        </div>
        <div className="self-center mx-2">
          <ButtonGroup vertical className="outline overflow-hidden bg-base">
            <Button
              rtlFlip
              size="sm"
              variant="link"
              aria-label="scroll to top"
              onClick={moveAllLeft}
              icon={CoreIcons.chevronsLeft}
              disabled={!rightOptions.length}
            />
            <Button
              rtlFlip
              size="sm"
              variant="link"
              aria-label="scroll up"
              onClick={moveRightSelected}
              icon={CoreIcons.chevronLeft}
              disabled={!rightSelected.length}
            />
            <Button
              rtlFlip
              size="sm"
              variant="link"
              aria-label="scroll down"
              onClick={moveLeftSelected}
              icon={CoreIcons.chevronRight}
              disabled={!leftSelected.length}
            />
            <Button
              rtlFlip
              size="sm"
              variant="link"
              aria-label="scroll to bottom"
              onClick={moveAllRight}
              icon={CoreIcons.chevronsRight}
              disabled={!leftOptions.length}
            />
          </ButtonGroup>
        </div>
        <div
          className="flex-1 flex flex-col overflow-hidden p-px"
          ref={mergeRefs(dropRight.setNodeRef, dragRight.setNodeRef)}
        >
          <List
            multiple
            allowClear
            height={height}
            options={rightOptions}
            groupProperty={groupProperty}
            labelProperty={labelProperty}
            valueProperty={valueProperty}
            renderer={renderer}
            onSelect={setRightSelected}
            data-inner={true}
            data-hide-selected={true}
          />
        </div>
        <DragOverlay>
          {dragItems.length > 0 && <span>{dragItems.length} Item(s)</span>}
        </DragOverlay>
      </DndContext>
    </Field>
  );
};
