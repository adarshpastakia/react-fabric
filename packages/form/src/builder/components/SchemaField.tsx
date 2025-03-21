/*
 * React Fabric
 * @version: 1.0.0
 *
 *
 * The MIT License (MIT)
 * Copyright (c) 2025 Adarsh Pastakia
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

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  Button,
  Collapsable,
  Content,
  CoreIcons,
  Footer,
  Modal,
  type ModalProps,
  ToggleButtonGroup,
  useOverlayService,
} from "@react-fabric/core";
import { EMPTY_ARRAY } from "@react-fabric/utilities";
import classNames from "classnames";
import {
  Fragment,
  type PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Controller } from "../../form/Controller";
import { ArrayInput } from "../../input/ArrayInput";
import { Checkbox } from "../../input/Checkbox";
import { DateInput } from "../../input/DateInput";
import { Field } from "../../input/Field";
import { HiddenInput } from "../../input/Hidden";
import { Input } from "../../input/Input";
import { Number } from "../../input/Number";
import { Select } from "../../select/Select";
import {
  DATA_TYPES,
  type DateSchema,
  type DefaultSchema,
  type NumberSchema,
  SCHEMA_CUSTOM_LIST,
  type SchemaEditorProps,
  type StringSchema,
  type ValueType,
} from "../../types/schema";

export const SchemaField = ({
  id,
  field,
  fieldId,
  getModel,
  onRemove,
  defaultOpen = true,
  optionLists = EMPTY_ARRAY,
  dynamic,
  onTypeChange,
  acceptableTypes,
}: {
  id: string;
  field: string;
  fieldId: string;
  defaultOpen?: boolean;
  onRemove: () => void;
  getModel: () => KeyValue;
  onTypeChange: (val: KeyValue) => void;
} & Omit<SchemaEditorProps, "schemaDef" | "onChange">) => {
  const [type, setType] = useState<DATA_TYPES>();
  const [multiple, setMultiple] = useState(false);
  const [hasOptions, setHasOptions] = useState(false);
  const [customOptions, setCustomOptions] = useState(false);

  const SortableItem = useCallback(
    ({
      id,
      children,
      className,
    }: PropsWithChildren<{ id: AnyObject; className: string }>) => {
      if (dynamic) {
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
            <div
              className={classNames(
                "invisible group-hover/field:visible my-2 w-4",
                isDragging ? "cursor-grabbing" : "cursor-grab",
              )}
              {...attributes}
              {...listeners}
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='4' width='4'%3E%3Ccircle cx='2' cy='2' r='1' fill='%238888' /%3E%3C/svg%3E ")`,
              }}
            />
            {children}
          </div>
        );
      }

      return <div className={className}>{children}</div>;
    },
    [dynamic],
  );
  // @ts-expect-error ignore
  SortableItem.displayName = "SortableItem";

  const [OptionModal, openOptionModal] = useOverlayService(
    (props: ModalProps) => (
      <Modal {...props}>
        <Content>
          <ArrayInput name={`${field}.options`} onAdd={() => String("")}>
            <Controller>
              <Input />
            </Controller>
          </ArrayInput>
        </Content>
        <Footer
          flex
          justify="end"
          className="sticky bottom-0 border-t bg-base px-6 py-2"
        >
          <Button variant="link" onClick={props.onClose}>
            Close
          </Button>
        </Footer>
      </Modal>
    ),
  );

  useEffect(() => {
    setTimeout(() => {
      const model = getModel();
      setType(model.datatype);
      setMultiple(model.multiple);
      setHasOptions(!!model.optionList);
      setCustomOptions(model.optionList === SCHEMA_CUSTOM_LIST);
    }, 10);
  }, []);

  const handleTypeChange = useCallback(
    (type: DATA_TYPES) => {
      if (type) {
        const modelRef = getModel();
        let reset = {
          datatype: type,
          id,
          label: modelRef.label,
          defaultValue: modelRef.defaultValue,
          required: modelRef.required,
          multiple: type === DATA_TYPES.AVATAR ? false : modelRef.multiple,
          minItems: modelRef.minItems,
          maxItems: modelRef.maxItems,
        } as DefaultSchema & ValueType;
        if (type === DATA_TYPES.STRING) {
          reset = Object.assign(reset, {
            optionList: modelRef.optionList,
            options: modelRef.options,
            regex: modelRef.regex,
          } as StringSchema);
        } else if (type === DATA_TYPES.DATE) {
          reset = Object.assign(reset, {
            type: "date",
          } as DateSchema);
        } else if (type === DATA_TYPES.NUMBER || type === DATA_TYPES.RANGE) {
          reset = Object.assign(reset, {
            min: modelRef.min,
            max: modelRef.max,
            step: modelRef.step,
          } as NumberSchema);
        }
        if (type === DATA_TYPES.AVATAR) {
          setMultiple(false);
        }
        onTypeChange(reset);
        setType(type);
      }
    },
    [id],
  );

  return (
    <SortableItem id={fieldId} className="flex flex-nowrap gap-1 group/field">
      <Collapsable key={fieldId} open={defaultOpen} className="flex-1">
        <div className="flex flex-nowrap items-center">
          <span className="flex-1 truncate">{id}</span>
          {dynamic && (
            <Button
              size="sm"
              color="danger"
              variant="link"
              aria-label="Delete"
              stopPropagation
              icon={CoreIcons.trash}
              onClick={onRemove}
              className="invisible group-hover/field:visible"
            />
          )}
        </div>
        <div className="flex flex-col gap-1 pb-4">
          <Controller name={`${field}.id`}>
            <HiddenInput hiddenValue={id} />
          </Controller>
          <Controller name={`${field}.datatype`}>
            <Select
              inline
              label="Type"
              placeholder="Data type"
              options={acceptableTypes}
              onChange={(val) => handleTypeChange(val as unknown as DATA_TYPES)}
            />
          </Controller>
          <Controller name={`${field}.label`}>
            <Input
              inline
              label="Label"
              allowClear
              placeholder="Label..."
              decorateEndShowWhenEmpty
              decorateEnd={
                <span className="text-sm text-tint-300 px-1">OPTIONAL</span>
              }
            />
          </Controller>
          {type === DATA_TYPES.STRING && (
            <Fragment>
              <Controller name={`${field}.regex`}>
                <Input
                  inline
                  label="Regex validation"
                  allowClear
                  placeholder="Regex value..."
                  decorateEndShowWhenEmpty
                  decorateEnd={
                    <span className="text-sm text-tint-300 px-1">OPTIONAL</span>
                  }
                />
              </Controller>
              <Field inline label="Option list">
                <Controller name={`${field}.optionList`}>
                  <Select
                    allowClear
                    options={[SCHEMA_CUSTOM_LIST, ...optionLists]}
                    onChange={(v) => setCustomOptions(v === SCHEMA_CUSTOM_LIST)}
                  />
                </Controller>
                {customOptions && (
                  <Button
                    icon={CoreIcons.list}
                    aria-label="Custom options"
                    onClick={() => {
                      void openOptionModal({ title: `${id} Options` });
                    }}
                  />
                )}
              </Field>
              {OptionModal}
            </Fragment>
          )}
          {type === DATA_TYPES.FILE && (
            <Fragment>
              <Controller name={`${field}.accept`}>
                <Input
                  inline
                  label="Accept types"
                  allowClear
                  placeholder="Accept value..."
                  decorateEndShowWhenEmpty
                  decorateEnd={
                    <span className="text-sm text-tint-300 px-1">OPTIONAL</span>
                  }
                />
              </Controller>
            </Fragment>
          )}
          {[DATA_TYPES.NUMBER, DATA_TYPES.RANGE].includes(
            type as unknown as DATA_TYPES,
          ) && (
            <Fragment>
              <Controller name={`${field}.min`}>
                <Number
                  inline
                  label="Min value"
                  allowClear
                  placeholder="Minimum value..."
                  decorateEndShowWhenEmpty
                  decorateEnd={
                    <span className="text-sm text-tint-300 px-1">OPTIONAL</span>
                  }
                />
              </Controller>
              <Controller name={`${field}.max`}>
                <Number
                  inline
                  label="Max value"
                  allowClear
                  placeholder="Maximum value..."
                  decorateEndShowWhenEmpty
                  decorateEnd={
                    <span className="text-sm text-tint-300 px-1">OPTIONAL</span>
                  }
                />
              </Controller>
              <Controller name={`${field}.step`}>
                <Number
                  inline
                  label="Step value"
                  allowClear
                  placeholder="Step value..."
                  decorateEndShowWhenEmpty
                  decorateEnd={
                    <span className="text-sm text-tint-300 px-1">OPTIONAL</span>
                  }
                />
              </Controller>
            </Fragment>
          )}
          {type === DATA_TYPES.DATE && (
            <Fragment>
              <Field inline label="Type" plain>
                <Controller name={`${field}.type`}>
                  <ToggleButtonGroup value="" fullWidth className="flex-1">
                    <Button className="flex-1" value="date">
                      Date
                    </Button>
                    <Button className="flex-1" value="datetime">
                      Date Time
                    </Button>
                  </ToggleButtonGroup>
                </Controller>
              </Field>
              <Controller name={`${field}.min`}>
                <DateInput
                  inline
                  label="Min value"
                  allowClear
                  placeholder="Minimum value..."
                  decorateEndShowWhenEmpty
                  decorateEnd={
                    <span className="text-sm text-tint-300 px-1">OPTIONAL</span>
                  }
                />
              </Controller>
              <Controller name={`${field}.max`}>
                <DateInput
                  inline
                  label="Max value"
                  allowClear
                  placeholder="Maximum value..."
                  decorateEndShowWhenEmpty
                  decorateEnd={
                    <span className="text-sm text-tint-300 px-1">OPTIONAL</span>
                  }
                />
              </Controller>
            </Fragment>
          )}
          <Field label=" " inline plain>
            <Controller name={`${field}.required`}>
              <Checkbox label="Required" />
            </Controller>
            {type !== DATA_TYPES.AVATAR && (
              <Controller name={`${field}.multiple`}>
                <Checkbox label="Multiple" onChange={setMultiple} />
              </Controller>
            )}
            {hasOptions && (
              <Controller name={`${field}.allowCustom`}>
                <Checkbox label="Allow custom value" />
              </Controller>
            )}
          </Field>
          {multiple && (
            <Fragment>
              <Controller name={`${field}.minItems`}>
                <Number
                  inline
                  label="Min items"
                  allowClear
                  placeholder="Minimum items..."
                  decorateEndShowWhenEmpty
                  decorateEnd={
                    <span className="text-sm text-tint-300 px-1">OPTIONAL</span>
                  }
                />
              </Controller>
              <Controller name={`${field}.maxItems`}>
                <Number
                  inline
                  label="Max items"
                  allowClear
                  placeholder="Maximum items..."
                  decorateEndShowWhenEmpty
                  decorateEnd={
                    <span className="text-sm text-tint-300 px-1">OPTIONAL</span>
                  }
                />
              </Controller>
            </Fragment>
          )}
        </div>
      </Collapsable>
    </SortableItem>
  );
};
