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

import { useLogger } from "@react-fabric/utilities";
import classNames from "classnames";
import { Component } from "react";
import { useTranslation } from "react-i18next";
import { Fragment } from "react/jsx-runtime";
import { useMemoDebugger } from "../../hooks/useEffectDebugger";
import { usePropToggle } from "../../hooks/usePropToggle";
import { type ChildrenProp } from "../../types";
import classes from "./ErrorBoundary.module.css";
import { ErrorIcon } from "./ErrorIcon";
import { useGlobals } from "../../context/Global";

const DefaultError = ({ error }: { error?: string }) => {
  const { t } = useTranslation("core");
  return (
    <Fragment>
      <h6>{t("error.title")}</h6>
      <p className="line-clamp-4">{error}</p>
    </Fragment>
  );
};

const ErrorMessage = ({ error, errorElement }: KeyValue) => {
  const { errorElement: globalError } = useGlobals();
  const EE = useMemoDebugger(
    () => errorElement ?? globalError ?? DefaultError,
    [],
    "ErrorBoundary element",
  );
  return (
    <Fragment>
      <ErrorIcon />
      <div className={classNames(classes.boundaryMessage, "p-2")}>
        <EE error={error} />
      </div>
    </Fragment>
  );
};

const ErrorStack = ({ error, stack }: KeyValue) => {
  const [show, toggleShow] = usePropToggle(false);
  useLogger().error(error, {}, stack);
  return (
    <div className={classNames(classes.boundaryDetail, "overflow-hidden grid")}>
      <div
        className={classNames(
          classes.boundaryLink,
          "px-2 py-1 text-xs text-end",
        )}
      >
        <span role="link" tabIndex={0} className="link" onClick={toggleShow}>
          {show ? "Hide Detail" : "Show Detail"}
        </span>
      </div>
      {show && (
        <div
          className={classNames(
            classes.boundaryStack,
            "overflow-auto p-2 text-xs border-t",
          )}
        >
          <pre className="whitespace-pre-wrap">{stack}</pre>
        </div>
      )}
    </div>
  );
};

/**
 * An error boundary wrapper higher-order component designed to provide consistent error display across the application will trap runtime errors
 */
export class ErrorBoundary extends Component<
  {
    /**
     * custom error display
     */
    errorElement?: React.ComponentType<{ error?: string }>;
  } & ChildrenProp,
  { hasError: boolean; error?: string; stack?: AnyObject }
> {
  public static getDerivedStateFromError(error: Error) {
    return { hasError: true, error: error.message, stack: error.stack };
  }

  constructor(props: AnyObject) {
    super(props);
    this.state = { hasError: false };
  }

  public componentDidCatch(error: Error) {
    this.setState({ hasError: true, error: error.message, stack: error.stack });
  }

  render() {
    const env = process.env.NODE_ENV;
    if (this.state.hasError) {
      const { errorElement: E } = this.props;
      // You can render any custom fallback UI
      return (
        <div
          className={classNames(
            classes.errorBoundary,
            "grid grid-rows-1 overflow-hidden p-0.5 rounded-capped",
          )}
        >
          <div
            className={classNames(
              classes.boundaryContent,
              "overflow-hidden grid rounded-capped",
            )}
          >
            <ErrorMessage error={this.state.error} errorElement={E} />
            {env === "development" && (
              <ErrorStack error={this.state.error} stack={this.state.stack} />
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
