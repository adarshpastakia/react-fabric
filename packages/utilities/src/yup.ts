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

/* istanbul ignore file */

import * as _yup from "yup";

_yup.setLocale({
  mixed: {
    default: ({ path, label }) => ({
      key: "form:yup.invalid",
      values: { path, label },
    }),
    required: ({ path, label }) => ({
      key: "form:yup.required",
      values: { path, label },
    }),
    notType: ({ type, path, label }) => ({
      key: "form:yup.invalidType",
      values: { type, path, label },
    }),
  },
  array: {
    min: ({ min, path, label }) => ({
      key: "form:yup.arrayMin",
      values: { min, path, label },
    }),
    max: ({ max, path, label }) => ({
      key: "form:yup.arrayMax",
      values: { max, path, label },
    }),
  },
  string: {
    min: ({ min, path, label }) => ({
      key: "form:yup.stringMin",
      values: { min, path, label },
    }),
    max: ({ max, path, label }) => ({
      key: "form:yup.stringMax",
      values: { max, path, label },
    }),
  },
  number: {
    min: ({ min, path, label }) => ({
      key: "form:yup.numberMin",
      values: { min, path, label },
    }),
    max: ({ max, path, label }) => ({
      key: "form:yup.numberMax",
      values: { max, path, label },
    }),
  },
  boolean: {},
});
export * as yup from "yup";
