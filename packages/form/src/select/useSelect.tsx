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

import { useDebounce } from "@react-fabric/core";
import {
  dedupe,
  EMPTY_ARRAY,
  groupBy,
  isArray,
  matchString,
} from "@react-fabric/utilities";
import {
  useCallback,
  useDeferredValue,
  useEffect,
  useMemo,
  useReducer,
  useRef,
} from "react";
import { getSelectedValue, makeOption } from "./helpers";

type StateActions =
  | {
      type: "open";
    }
  | { type: "close" }
  | {
      type: "options";
      options: AnyObject[];
      query?: string;
      open?: boolean;
      setActive?: true;
    }
  | { type: "startQuery"; query: string }
  | { type: "setValue"; value: AnyObject }
  | { type: "changeValue"; value: AnyObject }
  | { type: "removeItem"; index?: number }
  | { type: "active"; index: number | null };

interface State {
  multiple: boolean;
  emptyValue: AnyObject;
  open: boolean;
  loading: boolean;
  activeIndex: number | null;
  selectedIndex: number | null;
  value: AnyObject;
  // filter
  query?: string;
  // dropdown items
  items: AnyObject[];
}

export const useSelect = ({
  options = EMPTY_ARRAY,
  value,
  autoComplete,
  multiple = false,
  allowCreate = false,
  groupProperty = "",
  valueProperty = "id",
  labelProperty = "label",
  createOption = makeOption,
  matcher,
  onQuery,
  onChange,
  onSelect,
}: {
  value?: AnyObject;
  options?: AnyObject[];
  multiple?: boolean;
  allowCreate?: boolean;
  groupProperty?: AnyObject;
  valueProperty?: AnyObject;
  labelProperty?: AnyObject;
  autoComplete?: boolean;
  matcher?: (item: AnyObject, query: string) => boolean;
  createOption?: (query: string) => AnyObject;
  onQuery?: (query: string) => AnyObject;
  onSelect?: (item: AnyObject) => void;
  onChange?: (value: AnyObject) => void;
}) => {
  // value state
  const emptyValue = useMemo(() => (multiple ? [] : ""), [multiple]);
  const deferred = useDeferredValue(value ?? emptyValue);

  // list items
  const listRef = useRef<HTMLElement[]>([]);
  const focusableRef = useRef<HTMLElement>(null);
  const listContentRef = useRef<AnyObject[]>([]);
  const optionsRef = useRef<AnyObject[]>([]);

  const macthOption = useCallback(
    (item: AnyObject, query: string) => {
      return (
        matcher?.(item, query) ??
        matchString(item[labelProperty] ?? item, query)
      );
    },
    [matcher],
  );

  const fireChange = useCallback(
    (value: AnyObject) => {
      setTimeout(() => {
        onSelect?.(value ?? emptyValue);
        onChange?.(getSelectedValue(value, emptyValue, valueProperty));
      }, 50);
    },
    [emptyValue, onSelect, onChange],
  );

  const [state, dispatch] = useReducer(
    (state: State, action: StateActions) => {
      if (action.type === "open") {
        const index = state.items.indexOf(
          state.multiple ? state.value[0] : state.value,
        );
        return {
          ...state,
          open: true,
          activeIndex: index > -1 ? index : null,
        };
      }
      if (action.type === "close") {
        return { ...state, activeIndex: null, open: false };
      }
      if (action.type === "active" && state.open) {
        if (autoComplete && action.index !== null)
          state.query = state.items[action.index];
        return { ...state, activeIndex: action.index };
      }
      if (action.type === "setValue") {
        return {
          ...state,
          value: action.value,
          selectedIndex: state.items.indexOf(
            state.multiple ? action.value[0] : action.value,
          ),
        };
      }
      if (action.type === "changeValue") {
        const newState = {
          ...state,
          value: state.emptyValue,
          activeIndex: null,
          selectedIndex: autoComplete
            ? state.multiple
              ? action.value?.length
              : 0
            : state.items.indexOf(action.value),
        };
        if (action.value !== undefined) {
          if (multiple) {
            const values = [];
            values.push(...action.value.split(/,\s?/));
            newState.value = [...state.value];
            values.forEach((value: AnyObject) => {
              newState.value = newState.value.includes?.(value)
                ? newState.value.filter((item: AnyObject) => item !== value)
                : [...newState.value, value];
            });
          } else {
            newState.value = action.value;
          }
        }
        if (!state.multiple) newState.open = false;
        fireChange(newState.value);
        return newState;
      }
      if (action.type === "removeItem") {
        let newValue = state.value;

        if (state.multiple) {
          newValue = [...newValue];
          newValue.splice(action.index ?? -1, 1);
        } else {
          newValue = "";
        }
        fireChange(newValue);
        return {
          ...state,
          value: newValue,
        };
      }
      if (action.type === "startQuery") {
        return {
          ...state,
          loading: true,
          query: action.query,
        };
      }
      if (action.type === "options") {
        const newState = {
          ...state,
          loading: false,
          query: action.query,
        };
        let optionList = [...action.options];
        if (autoComplete && action.query !== undefined) {
          optionList = dedupe([action.query, ...optionList]);
        }
        const grouped = groupBy(optionList, groupProperty, "");
        if (action.open) newState.open = true;
        newState.items = [];
        // add new item if allowCreate
        if (allowCreate && action.query)
          newState.items.push({
            ___create___: true,
            value: createOption(action.query),
          });
        Object.entries(grouped).forEach(([key, list]) => {
          if (key) {
            newState.items.push({ ___group___: true, label: key });
          }
          newState.items.push(...list);
        });
        if (action.setActive) {
          const index = newState.items.findIndex(
            (opt: AnyObject) => !opt.___group___,
          );
          newState.activeIndex = index >= 0 ? index : null;
        } else {
          newState.activeIndex = null;
        }
        listContentRef.current = newState.items;
        return newState;
      }
      return state;
    },
    {
      multiple,
      emptyValue,
      open: false,
      loading: false,
      activeIndex: null,
      selectedIndex: null,
      value: emptyValue,
      // filter
      query: undefined,
      // dropdown items
      items: [],
    },
  );

  useEffect(() => {
    if (!multiple) {
      const newOption =
        (allowCreate || autoComplete) && deferred
          ? createOption(deferred)
          : undefined;
      const hasValue = options.find(
        (opt: AnyObject) => (opt[valueProperty] ?? opt) === deferred,
      );
      optionsRef.current = options;
      // if current value missing in list inject it
      if (!hasValue && newOption) {
        optionsRef.current = [newOption, ...(options ?? [])];
      }
      dispatch({ type: "options", options: optionsRef.current });
      dispatch({
        type: "setValue",
        value: hasValue ?? newOption ?? "",
      });
    }
    if (multiple) {
      optionsRef.current = [];
      const value = (isArray(deferred) ? deferred : []).map(
        (item: AnyObject) => {
          const newOption =
            (allowCreate || autoComplete) && item
              ? createOption(item)
              : undefined;
          const hasValue = options.find(
            (opt: AnyObject) => (opt[valueProperty] ?? opt) === deferred,
          );
          if (!hasValue && newOption) {
            optionsRef.current.push(newOption);
          }
          return hasValue ?? newOption ?? "";
        },
      );
      optionsRef.current = [...optionsRef.current, ...(options ?? [])];
      dispatch({ type: "options", options: optionsRef.current });
      dispatch({
        type: "setValue",
        value,
      });
    }
  }, [deferred, options, multiple, allowCreate, autoComplete, createOption]);

  const fireQuery = useDebounce(
    (query: string) => {
      void Promise.resolve(onQuery?.(query)).then((options) => {
        const newOptions = [...options];
        // if autocomplete inject other filtered options from history
        if (autoComplete) {
          newOptions.push(
            ...optionsRef.current.filter((opt: AnyObject) => {
              return macthOption?.(opt, query);
            }),
          );
        }
        dispatch({
          type: "options",
          query,
          options: newOptions,
          open: true,
          setActive: true,
        });
      });
    },
    [onQuery],
  );

  // handlers
  const handleQuery = useCallback(
    (query: string) => {
      if (!query) {
        dispatch({ type: "options", query: "", options: optionsRef.current });
      } else {
        if (onQuery) {
          dispatch({ type: "startQuery", query });
          return fireQuery(query);
        }
        dispatch({
          type: "options",
          query,
          open: true,
          setActive: true,
          options: optionsRef.current.filter((opt: AnyObject) => {
            return macthOption?.(opt, query);
          }),
        });
      }
    },
    [macthOption, onQuery],
  );

  const handleChange = useCallback((value?: AnyObject) => {
    let values = value;
    if (autoComplete && multiple && value) {
      values = value.split(/,\s?/);
    }
    dispatch({
      type: "changeValue",
      value: value?.___create___ ? value.value : value,
    });
    if (value?.___create___) {
      let val = [value.value];
      if (multiple) {
        val = value.value.split(/,\s?/);
      }
      optionsRef.current = [...optionsRef.current, ...val.map(createOption)];
    }
    if (autoComplete) {
      optionsRef.current = dedupe([
        ...(isArray(values) ? values : [values]),
        ...optionsRef.current,
      ]);
    }
    dispatch({ type: "options", options: optionsRef.current });
  }, []);

  const handleRemove = useCallback((index?: number) => {
    dispatch({ type: "removeItem", index });
  }, []);

  const setOpen = useCallback((open: boolean) => {
    dispatch({ type: open ? "open" : "close" });
    dispatch({
      type: "options",
      query: undefined,
      options: optionsRef.current,
    });
  }, []);

  const setActiveIndex = useCallback((index: number | null) => {
    dispatch({ type: "active", index });
  }, []);

  return {
    state,
    listRef,
    focusableRef,
    listContentRef,
    handleChange,
    handleRemove,
    handleQuery,
    macthOption,
    setActiveIndex,
    setOpen,
    setItemRef: (index: number, node: HTMLElement) => {
      listRef.current[index] = node;
    },
  };
};
