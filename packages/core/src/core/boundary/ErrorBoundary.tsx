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
      <div className={classNames("fabric-boundaryMessage", "p-2")}>
        <EE error={error} />
      </div>
    </Fragment>
  );
};

const ErrorStack = ({ error, stack }: KeyValue) => {
  const [show, toggleShow] = usePropToggle(false);
  useLogger().error(error, {}, stack);
  return (
    <div
      className={classNames("fabric-boundaryDetail", "overflow-hidden grid")}
    >
      <div
        className={classNames(
          "fabric-boundaryLink",
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
            "fabric-boundaryStack",
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
 * ErrorBoundary component to catch JavaScript errors anywhere in the child component tree,
 * log those errors, and display a fallback UI.
 * It can also display a custom error element if provided.
 * This component is useful for preventing the entire application from crashing
 * when an error occurs in a part of the component tree.
 * It can be used to wrap any part of the application.
 * It supports custom error display components and provides a default error message.
 * It also conditionally displays the error stack trace in development mode.
 *
 * @example
 * ```jsx
 * <ErrorBoundary errorElement={CustomErrorComponent}>
 *   <YourComponent />
 * </ErrorBoundary>
 * ```
 *
 * @see {@link https://adarshpastakia.github.io/react-fabric/?path=/story/core-application--error-boundary}
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

  async render() {
    const env = process.env.NODE_ENV;
    if (this.state.hasError) {
      const { errorElement: E } = this.props;
      // You can render any custom fallback UI
      return (
        <div
          className={classNames(
            "fabric-errorBoundary",
            "grid grid-rows-1 overflow-hidden p-0.5 rounded-capped",
          )}
        >
          <div
            className={classNames(
              "fabric-boundaryContent",
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

    return await this.props.children;
  }
}
