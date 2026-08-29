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
import { EMPTY_OBJECT } from "@react-fabric/utilities";
import { useCallback, useEffect, useImperativeHandle, useRef, useTransition, type PropsWithChildren, type Ref } from "react";
import { FormProvider, useForm as useFormHook, type FormState, type Path, type Resolver } from "react-hook-form";

type NestedKeyOf<T extends object> = {
  [K in keyof T & (string | number)]: T[K] extends object ? `${K}` | `${K}.${NestedKeyOf<T[K]>}` : K;
}[keyof T & (string | number)];

export interface FormRef<K extends KeyValue> {
  state: FormState<K>;
  reset: () => void;
  clear: () => void;
  submit: () => void;
  validate: () => Promise<boolean>;
  getValues: () => K;
  setValue: (key: NestedKeyOf<K>, value: unknown) => void;
  setValues: (values: K) => void;
}

export interface FormProps<K extends KeyValue = KeyValue> {
  formRef?: Ref<FormRef<K>>;
  /**
   * react-hook-form resolver for validation
   * @see {@link https://react-hook-form.com/ts#Resolver}
   */
  resolver?: Resolver<K>;
  /**
   * default data values
   */
  defaultValues?: K | Promise<K>;
  /**
   * reset values on defaultValues change (workaround for using fetch result)
   */
  resetOnChange?: boolean;
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

/**
 * Form component for managing form state and validation using react-hook-form and yup.
 * It provides a simple interface for form handling, including submission, validation, and value management.
 * It supports nested form structures and allows for custom validation schemas using Yup.
 *
 * @example
 * ```jsx
 * <Form
 *   formRef={formRef}
 *   resolver={hookformResolver(schema)}
 *   defaultValues={{ name: "", email: "" }}
 *   onSubmit={(values) => {
 *     console.log("Form submitted with values:", values);
 *   }}
 * >
 *   <input name="name" ref={form.register} placeholder="Name" />
 *   <input name="email" ref={form.register} placeholder="Email" />
 *   <button type="submit">Submit</button>
 * </Form>
 * ```
 *
 * @see {@link https://react-hook-form.com/docs/useform} for more details on the properties.
 */
export function Form<K extends KeyValue>({
  formRef,
  resolver,
  children,
  resetOnChange,
  defaultValues = EMPTY_OBJECT as K,
  onSubmit = DEFAULT_SUBMIT,
  onChange,
  ...rest
}: PropsWithChildren<FormProps<K>>) {
  const ref = useRef<HTMLFormElement>(null);
  const form = useFormHook<K>({
    shouldFocusError: true,
    resolver,
    defaultValues: async () => await Promise.resolve(defaultValues),
  });

  const [, startTransition] = useTransition();
  const changeHandler = useDebounce(onChange, [onChange], 300);
  useEffect(() => {
    const subscription = form.watch((value) => {
      startTransition(() => changeHandler?.(value));
    });
    return () => subscription.unsubscribe();
  }, [form.watch, changeHandler, form]);

  const handleReset = useCallback(
    (reset: K | Promise<K> = {} as K) => {
      void Promise.resolve(reset).then((resp) => {
        form.reset(resp);
        form.clearErrors();
        ref.current?.querySelector<HTMLElement>("[auto-focus], input, textarea")?.focus();
      });
    },
    [form],
  );

  useEffect(() => {
    if (resetOnChange) {
      handleReset(defaultValues);
    }
  }, [defaultValues, handleReset, resetOnChange]);

  useImperativeHandle(
    formRef,
    () => ({
      state: form.formState,
      reset: () => handleReset(defaultValues),
      clear: () => handleReset(),
      submit: () => form.handleSubmit(onSubmit),
      validate: async (fields?: Array<Path<K>>) => await form.trigger(fields),
      getValues: () => form.getValues(),
      setValues: (v) => setTimeout(() => form.reset(v), 50),
      setValue: (k, v) =>
        setTimeout(
          () =>
            // @ts-expect-error ignore
            form.setValue(k as AnyObject, v, {
              shouldDirty: false,
              shouldTouch: false,
            }),
          50,
        ),
    }),
    [defaultValues, form, handleReset, onSubmit],
  );

  const onInvalid = useCallback((_: AnyObject, e?: React.BaseSyntheticEvent) => {
    const el = e?.target as HTMLFormElement;
    setTimeout(
      () => el?.querySelector<HTMLInputElement>("input[aria-invalid='true'],textarea[aria-invalid='true']")?.focus(),
      10,
    );
  }, []);

  return (
    <FormProvider {...form}>
      <form
        ref={ref}
        onReset={() => handleReset(defaultValues)}
        onSubmit={(e) => {
          e.stopPropagation();
          void form.handleSubmit(onSubmit, onInvalid)(e);
        }}
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
}
