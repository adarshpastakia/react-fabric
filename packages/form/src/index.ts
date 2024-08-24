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

import "./i18n";

export { Controller } from "./form/Controller";
export { Form, type FormRef } from "./form/Form";

export { useFileUploader } from "./hooks/useFileUploader";
export { useFormBuilder } from "./hooks/useFormBuilder";

export { type FormSchema } from "./types/schema";

export { ArrayInput } from "./input/ArrayInput";
export { Checkbox } from "./input/Checkbox";
export { ColorInput } from "./input/ColorInput";
export { ColorPicker } from "./input/ColorPicker";
export { Field } from "./input/Field";
export { FileInput } from "./input/File";
export { HiddenInput } from "./input/Hidden";
export { Input } from "./input/Input";
export { Number } from "./input/Number";
export { Password } from "./input/Password";
export { Radio } from "./input/Radio";
export { RadioGroup } from "./input/RadioGroup";
export { Range } from "./input/Range";
export { Search } from "./input/Search";
export { Slider } from "./input/Slider";
export { Switch } from "./input/Switch";
export { Textarea } from "./input/Textarea";
export { AutoComplete } from "./select/AutoComplete";
export { DualList } from "./select/DualList";
export { List } from "./select/List";
export { Select } from "./select/Select";
