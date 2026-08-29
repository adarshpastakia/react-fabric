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

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import { RestrictToHorizontalAxis } from "@dnd-kit/abstract/modifiers";
import { DragDropProvider, DragOverlay, useDraggable, useDroppable } from "@dnd-kit/react";
import { Button, ButtonGroup, Icon } from "@react-fabric/core";
import { cn, mergeRefs } from "@react-fabric/utilities";
import { useCallback, useDeferredValue, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";
import { Field } from "../input/Field";
import type { DualSelectProps } from "../types";
import { getWrapperProps } from "../utils";
import { List } from "./List";

type DualRef = { moveLeftSelected: () => void; moveRightSelected: () => void };

function DualListComponent<T extends AnyObject = string>(
  props: DualSelectProps<T> & {
    height?: string | number;
    onSelectedChange: (left: T[], right: T[]) => void;
    dualRef: React.Ref<DualRef>;
  },
) {
  const {
    ref,
    value,
    options,
    emptyDisplay,
    groupProperty,
    height = "18rem",
    labelProperty,
    valueProperty = "value",
    renderer,
    onChange,
    name,
    invalid,
    readOnly,
    disabled,
    autoFocus,
    error,
    dualRef,
    onSelectedChange,
  } = props;
  const [actualValue, setActualValue] = useState<T[]>(() => []);
  const [leftSelected, setLeftSelected] = useState<T[]>(() => []);
  const [rightSelected, setRightSelected] = useState<T[]>(() => []);
  const deferred = useDeferredValue(value);

  useEffect(() => {
    // eslint-disable-next-line @eslint-react/set-state-in-effect
    setActualValue(options.filter((opt: AnyObject) => deferred?.includes(opt[valueProperty] ?? opt)));
  }, [deferred, options, valueProperty]);

  const [leftOptions, rightOptions] = useMemo(() => {
    return [options.filter((opt: AnyObject) => !actualValue?.includes(opt)), actualValue];
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
    onChange?.(selected.map((opt: AnyObject) => `${opt[valueProperty] ?? opt}`));
    setLeftSelected([]);
  }, [actualValue, leftSelected, onChange, valueProperty]);

  const moveRightSelected = useCallback(() => {
    const selected = actualValue.filter((opt) => !rightSelected.includes(opt));
    setActualValue(selected);
    onChange?.(selected.map((opt: AnyObject) => `${opt[valueProperty] ?? opt}`));
    setRightSelected([]);
  }, [actualValue, onChange, rightSelected, valueProperty]);

  const dragLeft = useDraggable({
    id: "unselected",
    type: "unselected",
    disabled: !leftSelected.length,
  });
  const dragRight = useDraggable({
    id: "selected",
    type: "selected",
    disabled: !rightSelected.length,
  });
  const dropLeft = useDroppable({
    id: "unselected",
    accept: ["selected"],
  });
  const dropRight = useDroppable({
    id: "selected",
    accept: ["unselected"],
  });

  useImperativeHandle(
    dualRef,
    () => ({
      moveLeftSelected,
      moveRightSelected,
    }),
    [moveLeftSelected, moveRightSelected],
  );

  useEffect(() => {
    onSelectedChange(leftSelected, rightSelected);
  }, [leftSelected, onSelectedChange, rightSelected]);

  return (
    <>
      <div
        className={cn(
          "flex-1 flex flex-col overflow-hidden p-px border-none!",
          dropLeft.isDropTarget && "outline outline-primary-500 rounded-capped!",
        )}
        data-id="unselected"
        ref={mergeRefs(dragLeft.ref, dropLeft.ref)}
      >
        <List
          ref={ref}
          multiple
          allowClear
          name={name}
          invalid={invalid}
          readOnly={readOnly}
          disabled={disabled}
          {...{ autoFocus }}
          error={error}
          height={height}
          options={leftOptions}
          emptyDisplay={emptyDisplay}
          groupProperty={groupProperty}
          labelProperty={labelProperty}
          searchable
          placeholder="Filter"
          decorateStart={<Icon icon="icon-[mdi--filter-variant]" className="ps-2" />}
          // @ts-expect-error ignore
          valueProperty={valueProperty}
          renderer={renderer}
          onSelect={setLeftSelected}
          data-inner={true}
          data-hide-selected={true}
        />
      </div>
      <div className="self-center mx-2">
        <ButtonGroup vertical className="outline overflow-hidden bg-default">
          <Button
            size="sm"
            variant="link"
            aria-label="scroll to top"
            onClick={moveAllLeft}
            icon={{ icon: "icon-[mdi--chevron-double-left]", rtlFlip: true }}
            disabled={!rightOptions.length}
          />
          <Button
            size="sm"
            variant="link"
            aria-label="scroll up"
            onClick={moveRightSelected}
            icon={{ icon: "icon-[mdi--chevron-left]", rtlFlip: true }}
            disabled={!rightSelected.length}
          />
          <Button
            size="sm"
            variant="link"
            aria-label="scroll down"
            onClick={moveLeftSelected}
            icon={{ icon: "icon-[mdi--chevron-right]", rtlFlip: true }}
            disabled={!leftSelected.length}
          />
          <Button
            size="sm"
            variant="link"
            aria-label="scroll to bottom"
            onClick={moveAllRight}
            icon={{ icon: "icon-[mdi--chevron-double-right]", rtlFlip: true }}
            disabled={!leftOptions.length}
          />
        </ButtonGroup>
      </div>
      <div
        className={cn(
          "flex-1 flex flex-col overflow-hidden p-px border-none!",
          dropRight.isDropTarget && "outline outline-primary-500 rounded-capped!",
        )}
        data-id="selected"
        ref={mergeRefs(dropRight.ref, dragRight.ref)}
      >
        <List
          multiple
          allowClear
          height={height}
          options={rightOptions}
          emptyDisplay={emptyDisplay}
          groupProperty={groupProperty}
          labelProperty={labelProperty}
          placeholder="Filter"
          decorateStart={<Icon icon="icon-[mdi--filter-variant]" className="ps-2" />}
          // @ts-expect-error ignore
          valueProperty={valueProperty}
          searchable
          renderer={renderer}
          onSelect={setRightSelected}
          data-inner={true}
          data-hide-selected={true}
        />
      </div>
    </>
  );
}

/**
 * DualList component allows users to select items from two lists.
 * It displays two lists side by side, one for unselected items and one for selected items.
 * Users can move items between the lists using buttons or drag-and-drop functionality.
 * It supports multiple selections and provides options for grouping, labeling, and rendering items.
 * It also includes features for handling empty states and custom rendering of items.
 * This component is useful for scenarios where users need to manage selections from a larger set of options, such as in forms or settings.
 */
export function DualList<T extends AnyObject = string>(props: DualSelectProps<T> & { height?: string | number }) {
  const [dragCount, setDragCount] = useState(0);
  const [leftSelected, setLeftSelected] = useState<T[]>(() => []);
  const [rightSelected, setRightSelected] = useState<T[]>(() => []);
  const dualRef = useRef<DualRef>(null);

  return (
    <Field {...getWrapperProps(props)} borderless>
      <DragDropProvider
        modifiers={[RestrictToHorizontalAxis]}
        onDragStart={(e) => {
          setDragCount(e.operation.source?.id === "selected" ? rightSelected.length : leftSelected.length);
        }}
        onDragEnd={(e) => {
          if (e.operation.source?.id === "selected") dualRef.current?.moveRightSelected();
          if (e.operation.source?.id === "unselected") dualRef.current?.moveLeftSelected();
          setDragCount(0);
        }}
      >
        <DualListComponent
          {...props}
          dualRef={dualRef}
          onSelectedChange={(l, r) => (setLeftSelected(l), setRightSelected(r))}
        />
        <DragOverlay
          className="mt-8! w-fit! h-fit!"
          dropAnimation={({ element, feedbackElement, source }) => {
            const target = element.parentElement?.querySelector(
              `[data-id="${source.id === "selected" ? "unselected" : "selected"}"]`,
            );

            const overlayRect = element.getBoundingClientRect();
            const targetRect = target?.getBoundingClientRect();

            const deltaX = (targetRect?.left ?? 0) - overlayRect.left;
            const deltaY = (targetRect?.top ?? 0) - overlayRect.top;

            (feedbackElement as HTMLElement).style.setProperty("--dnd-translate", `${deltaX}px ${deltaY}px 0`);
          }}
        >
          {(evt) => {
            if (!evt) return null;
            // Render a clean visual preview without the drag hook styles
            return <div className="bg-default text-xs outline px-2 py-1 size-fit rounded!">Moving {dragCount} item(s)</div>;
          }}
        </DragOverlay>
      </DragDropProvider>
    </Field>
  );
}
