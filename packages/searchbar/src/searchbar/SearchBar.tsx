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

import { Button, useDebounce, useLocalStorage } from "@react-fabric/core";
import { AutoComplete, Field } from "@react-fabric/form";
import { dedupe, EMPTY_ARRAY, isArray } from "@react-fabric/utilities";
import { useEffect, useMemo, useReducer, useState } from "react";
import { useTranslation } from "react-i18next";
import { FilterBar } from "../filterbar/FilterBar";
import {
  type FilterBarProps,
  type FilterObject,
  type SearchBarProps,
} from "../types";

interface SearchState {
  dirty: boolean;
  query: string | string[];
  filters: FilterObject[];
}

type SearchActions =
  | { type: "reset"; query: string | string[]; filters: FilterObject[] }
  | { type: "dirty"; dirty: boolean }
  | { type: "query"; query: string | string[] }
  | { type: "filter"; filters: FilterObject[] };

/**
 * This component provides a search input with autocomplete functionality,
 * a button to trigger search, and an optional filter bar.
 * It supports history of search queries, multiple selection, and custom decorations.
 * It can be collapsed to hide filters and has options for customization.
 *
 * @param {SearchBarProps} props - The properties for the SearchBar component.
 * @returns {JSX.Element} The rendered SearchBar component.
 *
 * @example
 * ```jsx
 * <SearchBar
 *   historyKey="myApp:searchHistory"
 *   historyCount={10}
 *   defaultQueryList={["example", "test"]}
 *   prepend={<span>Prepend</span>}
 *   append={<span>Append</span>}
 *   decorateEnd={<span>End Decoration</span>}
 *   decorateStart={<span>Start Decoration</span>}
 *   hideFilters={false}
 *   defaultCollapsed={false}
 *   disabled={false}
 *   onCollapsed={(collapsed) => console.log("Collapsed:", collapsed)}
 *   onQuery={(query) => console.log("Query:", query)}
 *   onSearch={({ query, filters }) => console.log("Search:", query, filters)}
 *   query={""}
 *   ref={searchInputRef}
 *   multiple={false}
 *   filters={[{ name: "filter1", value: "value1" }]}
 * />
 * ```
 *
 * @see {@link https://adarshpastakia.github.io/react-fabric/?path=/story/searchbar-searchbar--search-bar} for more details on the properties.
 */
export const SearchBar = ({
  historyKey = "ruf:search",
  historyCount = 20,
  defaultQueryList,
  prepend,
  append,
  decorateEnd,
  decorateStart,
  children,
  hideFilters,
  defaultCollapsed = false,
  disabled,
  onCollapsed,
  onQuery,
  onSearch,
  query,
  ref,
  multiple,
  filters = EMPTY_ARRAY,
  ...filterProps
}: SearchBarProps & Omit<FilterBarProps, "onFilterChanged">) => {
  const { t } = useTranslation("searchbar");
  const [history, setHistory] = useLocalStorage<string[]>(
    historyKey,
    defaultQueryList ?? [],
  );

  const [collapsed, setCollapsed] = useState(defaultCollapsed);
  const emptyValue = useMemo(() => (multiple ? EMPTY_ARRAY : ""), [multiple]);

  const fireSearch = useDebounce(
    (query: AnyObject, filters: FilterObject[]) => {
      dispatch({ type: "dirty", dirty: false });
      onSearch?.({
        query,
        filters,
      });
    },
    [],
  );

  const [state, dispatch] = useReducer(
    (state: SearchState, action: SearchActions) => {
      if (action.type === "reset") {
        return {
          ...state,
          dirty: false,
          query: action.query,
          filters: action.filters,
        };
      }
      if (action.type === "dirty") {
        return { ...state, dirty: action.dirty };
      }
      if (action.type === "query") {
        !multiple && fireSearch(action.query ?? emptyValue, state.filters);
        return {
          ...state,
          dirty: !!multiple,
          query: action.query ?? emptyValue,
        };
      }
      if (action.type === "filter") {
        fireSearch(state.query, action.filters ?? []);
        return { ...state, dirty: false, filters: action.filters ?? [] };
      }
      return state;
    },
    {
      dirty: false,
      query,
      filters,
    },
  );

  useEffect(() => {
    dispatch({ type: "reset", filters, query });
  }, [filters, query]);

  const updateHistory = (value: string | string[]) => {
    const historyEntry = isArray(value) ? value : [value];
    setHistory(dedupe([...historyEntry, ...history]).slice(0, historyCount));
    dispatch({ type: "query", query: value });
  };

  const handleFilterChange = (filters: FilterObject[] = []) => {
    dispatch({ type: "filter", filters });
  };

  return (
    <div>
      <div className="flex flex-nowrap gap-1 mb-1">
        <Field data-inner={true} className="flex-1">
          {!hideFilters && (
            <Button
              variant="link"
              badge={filters.length}
              onClick={() => setCollapsed(!collapsed)}
            >
              {t("label.filters")}
            </Button>
          )}
          {prepend}
          <AutoComplete
            allowClear
            expandOnEdit
            ref={ref}
            multiple={multiple}
            history={history}
            value={state.query}
            decorateEnd={decorateEnd}
            decorateStart={decorateStart}
            onInput={() => dispatch({ type: "dirty", dirty: !multiple })}
            onSelect={updateHistory}
            data-ref="searchbarInput"
            onEnterPressed={() => fireSearch(state.query, state.filters)}
          />
          {append}
          <Button
            variant="solid"
            color={state.dirty ? "warning" : "primary"}
            onClick={() => fireSearch(state.query, state.filters)}
          >
            {t(state.dirty ? "label.update" : "label.refresh")}
          </Button>
        </Field>
        {children}
      </div>
      {!hideFilters && !collapsed && (
        <FilterBar
          {...filterProps}
          filters={state.filters}
          onFilterChanged={handleFilterChange}
        />
      )}
    </div>
  );
};
