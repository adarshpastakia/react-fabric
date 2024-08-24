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

import { isEmpty } from "@react-fabric/utilities";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { type FilterObject } from "../types";
import { useFilterContext } from "./Context";
import { FilterForm } from "./FilterForm";
import { QueryForm } from "./QueryForm";

export const FilterEdit = ({
  filter,
  onRemove,
  onChange,
}: {
  filter?: FilterObject;
  onRemove?: () => void;
  onChange: (filter: FilterObject) => void;
}) => {
  const { t } = useTranslation("searchbar");
  const { fields } = useFilterContext();
  const [queryEdit, setQueryEdit] = useState(isEmpty(fields));

  useEffect(() => {
    setQueryEdit(!!filter && "query" in filter);
  }, [filter]);

  return (
    <div className="px-2 py-1 bg-base outline min-w-[420px]">
      {!isEmpty(fields) && (
        <div className="pb-4 flex justify-end">
          <span
            role="none"
            className="text-sm link"
            onClick={() => setQueryEdit(!queryEdit)}
          >
            {t(queryEdit ? "label.basicFilter" : "label.customQuery")}
          </span>
        </div>
      )}
      {!queryEdit && (
        <FilterForm filter={filter} onRemove={onRemove} onChange={onChange} />
      )}
      {queryEdit && (
        <QueryForm filter={filter} onRemove={onRemove} onChange={onChange} />
      )}
    </div>
  );
};
