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

import { useCallback, useEffect, useRef, useState, useTransition } from "react";

export interface SelectableProps {
  /**
   * list items
   */
  items: Array<{ label: string } & KeyValue>;
  /**
   * selected item ids
   */
  selected?: string[];
  /**
   * selected negative item ids
   */
  nonselected?: string[];
  /**
   * change callback
   */
  onChange?: (ids: string[], nonIds?: string[]) => void;
  /**
   * item click callback
   */
  onClick?: (id: string, isNegative: boolean) => void;
}

/**
 * Custom hook to manage selection of items in a list.
 * It allows toggling selection state of items, handling both selected and non-selected states.
 * The hook maintains a selection state and provides a function to toggle the selection of items.
 * It also supports callbacks for when the selection changes or when an item is clicked.
 *
 * @param items - The list of items to manage selection for.
 * @param selected - An array of item IDs that are currently selected.
 * @param nonselected - An array of item IDs that are currently non-selected.
 * @param onChange - Callback function that is called when the selection changes.
 * @param onClick - Callback function that is called when an item is clicked.
 * @returns An object containing the current selection state and a function to toggle selection of items.
 *
 * @example
 * ```jsx
 * const { selection, toggleSelection } = useSelectableList({
 *   items: [{ id: '1', label: 'Item 1' }, { id: '2', label: 'Item 2' }],
 *   selected: ['1'],
 *   nonselected: ['2'],
 *   onChange: (selectedIds, nonSelectedIds) => {
 *     console.log('Selected:', selectedIds);
 *     console.log('Non-selected:', nonSelectedIds);
 *   },
 *   onClick: (id, isNegative) => {
 *     console.log(`Item ${id} clicked, isNegative: ${isNegative}`);
 *   },
 * });
 * ```
 */
export const useSelectableList = ({
  items,
  selected,
  nonselected,
  onChange,
  onClick,
}: SelectableProps) => {
  const selectionRef = useRef<KeyValue<number>>({});
  const [selection, setSelection] = useState<KeyValue<number>>({});
  const [, startTransition] = useTransition();
  useEffect(() => {
    selectionRef.current = items.reduce(
      (ret, { id }) => ({
        ...ret,
        [id]: selected?.includes?.(id)
          ? 1
          : nonselected?.includes?.(id)
            ? -1
            : 0,
      }),
      {},
    );
    setSelection({ ...selectionRef.current });
  }, [items, selected, nonselected]);

  const toggleSelection = useCallback((id: string, isNegative = false) => {
    const check = isNegative ? -1 : 1;
    if (selectionRef.current[id] !== check) selectionRef.current[id] = check;
    else if (selectionRef.current[id] === check) selectionRef.current[id] = 0;
    const change: string[][] = [[], []];
    Object.entries(selectionRef.current).forEach(([id, select]) =>
      select === 1
        ? change[0].push(id)
        : select === -1
          ? change[1].push(id)
          : undefined,
    );
    setSelection({ ...selectionRef.current });
    startTransition(() => {
      onClick?.(id, isNegative);
      onChange?.(change[0], change[1]);
    });
  }, []);

  return { selection, toggleSelection };
};
