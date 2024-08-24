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

import { yupResolver } from "@hookform/resolvers/yup";
import { useDebounce } from "@react-fabric/core";
import { type yup } from "@react-fabric/utilities";
import {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useTransition,
  type PropsWithChildren,
  type Ref,
} from "react";
import {
  FormProvider,
  useForm,
  type DefaultValues,
  type FormState,
} from "react-hook-form";

export interface FormRef<K extends KeyValue> {
  state: FormState<K>;
  reset: () => void;
  clear: () => void;
  submit: () => void;
  validate: () => Promise<boolean>;
  getValues: () => K;
  setValue: (key: keyof K, value: AnyObject) => void;
  setValues: (values: K) => void;
}

export interface FormProps<K extends KeyValue = KeyValue> {
  formRef?: Ref<FormRef<K>>;
  /**
   * form data schema
   */
  schema?: yup.ObjectSchema<K>;
  /**
   * default data values
   */
  defaultValues?: K;
  /**
   * change callback
   */
  onChange?: (values: K) => void;
  /**
   * submit callback after successful validation
   */
  onSubmit?: (values: K) => void;
}

const DEFAULT_SUBMIT = () => undefined;

export const Form = <K extends KeyValue>({
  formRef,
  schema,
  children,
  defaultValues,
  onSubmit = DEFAULT_SUBMIT,
  onChange,
  ...rest
}: PropsWithChildren<FormProps<K>>) => {
  const ref = useRef<HTMLFormElement>(null);
  const form = useForm<K>({
    shouldFocusError: true,
    resolver: schema && (yupResolver(schema) as AnyObject),
    defaultValues: defaultValues as DefaultValues<K>,
  });

  const [, startTransition] = useTransition();
  const changeHandler = useDebounce(onChange, [onChange]);
  useEffect(() => {
    const subscription = form.watch((value) => {
      startTransition(() => changeHandler?.(value as K));
    });
    return () => subscription.unsubscribe();
  }, [form.watch, changeHandler]);

  const handleReset = useCallback(
    (reset: AnyObject = {}) => {
      form.reset(reset);
      form.clearErrors();
      ref.current
        ?.querySelector<HTMLElement>("[auto-focus], input, textarea")
        ?.focus();
    },
    [defaultValues],
  );

  useImperativeHandle(
    formRef,
    () => ({
      state: form.formState,
      reset: () => handleReset(defaultValues),
      clear: () => handleReset(),
      submit: () => form.handleSubmit(onSubmit),
      validate: async () => await form.trigger(),
      getValues: () => form.getValues(),
      setValues: (v) => form.reset(v),
      setValue: (k, v) =>
        form.setValue(k as AnyObject, v, {
          shouldDirty: false,
          shouldTouch: false,
        }),
    }),
    [onSubmit, form, form.formState, defaultValues],
  );

  const onInvalid = useCallback((_: AnyObject, e: AnyObject) => {
    const el = e.target;
    setTimeout(
      () =>
        el
          .querySelector(
            "input[aria-invalid='true'],textarea[aria-invalid='true']",
          )
          ?.focus(),
      10,
    );
  }, []);

  return (
    <FormProvider {...form}>
      <form
        ref={ref}
        onReset={() => handleReset(defaultValues)}
        onSubmit={form.handleSubmit(onSubmit, onInvalid) as AnyObject}
        data-loading={form.formState.isSubmitting}
        className="contents"
        autoComplete="off"
        {...rest}
      >
        {children}
        <input type="submit" className="absolute invisible" />
      </form>
    </FormProvider>
  );
};
