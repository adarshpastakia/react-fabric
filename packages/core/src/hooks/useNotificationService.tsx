/**
 * React Fabric
 * @version 1.0.0
 * @license MIT
 * @copyright 2024 Adarsh Pastakia
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { isString, shortHash } from "@react-fabric/utilities";
import { useEffect, useRef } from "react";
import type { ToastT } from "sonner";
import { toast, useSonner } from "sonner";
import type { AlertProps } from "../components/alert/Alert";
import { Alert } from "../components/alert/Alert";
import { useGlobals } from "../context/context";
import { useIsRtl } from "./useIsRtl";

type POSITION = "top" | "bottom";

const DEFAULT_DURATION = 5000;

const TOAST_POSITIONS_LTR = {
  top: "top-right",
  bottom: "bottom-right",
};
const TOAST_POSITIONS_RTL = {
  top: "top-left",
  bottom: "bottom-left",
};
const MESSAGE_POSITIONS = {
  top: "top-center",
  bottom: "bottom-center",
};

interface Action {
  label: string;
  onClick: () => void;
}

interface ToastProps {
  message: string;
  type?: "info" | "error" | "success" | "warning";
  position?: POSITION;
  icon?: React.ReactElement;
  description?: string;
  actions?: Action[];
  link?: Action;
  duration?: number;
}
interface MessageProps {
  message: string;
  type?: "info" | "error" | "success" | "warning";
  position?: POSITION;
  icon?: React.ReactElement;
  link?: Action;
  duration?: number;
}

export function useNotificationService() {
  const isRtl = useIsRtl();
  const { toasts } = useSonner();
  const toastRef = useRef(toasts);
  const { showAlert } = useGlobals();

  const makeToastOptions = (options: string | ToastProps, promiseId?: string) => {
    const opts = isString(options) ? { message: options } : options;
    const id = promiseId ?? shortHash();
    const duration = opts.duration ?? DEFAULT_DURATION;
    return {
      message: (
        <>
          <div>{opts.message}</div>
          <button data-button data-close-all onClick={c}>
            Close All
          </button>
        </>
      ),
      id,
      position: (isRtl ? TOAST_POSITIONS_RTL : TOAST_POSITIONS_LTR)[opts.position ?? "top"] as ToastT["position"],
      icon: opts.icon,
      toasterId: "toasting",
      closeButton: true,
      action: (opts.actions || opts.link) && (
        <div data-actionbar>
          {opts.actions?.map((act) => (
            <button key={act.label} data-button data-action onClick={() => (act.onClick(), toast.dismiss(id))}>
              {act.label}
            </button>
          ))}
          {opts.link && (
            <button key={opts.link.label} data-link data-action onClick={() => (opts.link?.onClick(), toast.dismiss(id))}>
              {opts.link.label}
            </button>
          )}
        </div>
      ),
      className: duration > 0 ? "progress" : undefined,
      style: {
        "--sonner-duration": duration,
      } as React.CSSProperties,
      description: opts.description,
      duration: duration === 0 ? Infinity : duration,
    };
  };

  const makeMessageOptions = (options: string | MessageProps) => {
    const opts = isString(options) ? { message: options } : options;
    const id = shortHash();
    const duration = opts.duration ?? DEFAULT_DURATION;
    return {
      message: (
        <>
          <div>{opts.message}</div>
          <button data-button data-close-all onClick={c}>
            Close All
          </button>
        </>
      ),
      id,
      position: MESSAGE_POSITIONS[opts.position ?? "top"] as ToastT["position"],
      icon: opts.icon,
      toasterId: "toasting",
      closeButton: true,
      action: opts.link && (
        <div data-actionbar>
          {opts.link && (
            <button key={opts.link.label} data-link data-action onClick={() => (opts.link?.onClick(), toast.dismiss(id))}>
              {opts.link.label}
            </button>
          )}
        </div>
      ),
      className: duration > 0 ? "progress" : undefined,
      style: {
        "--sonner-duration": duration,
      } as React.CSSProperties,
      duration: duration === 0 ? Infinity : duration,
    };
  };

  useEffect(() => {
    toastRef.current = toasts;
  }, [toasts]);

  const c = () => {
    showAlert();
    toastRef.current.forEach((t) => {
      if (t.toasterId === "toasting" && !t.promise) toast.dismiss(t.id);
    });
  };

  const t = (props: string | ToastProps) => {
    const opts = makeToastOptions(props);
    const tt = !isString(props) && props.type ? toast[props.type] : toast;
    tt(opts.message, opts);
  };

  const m = (props: string | MessageProps) => {
    const opts = makeMessageOptions(props);
    const tt = !isString(props) && props.type ? toast[props.type] : toast;
    tt(opts.message, opts);
  };

  const p = (
    promise: Promise<string | ToastProps>,
    props?: {
      loading?: string;
      position?: "top" | "bottom";
      onCancel?: () => void;
    },
  ) => {
    const id = shortHash();
    toast.loading(
      <div className="flex items-center">
        <div className="flex-1">{props?.loading ?? "Loading"}</div>
        {props?.onCancel && (
          <button
            data-button
            data-cancel
            onClick={() => {
              void Promise.resolve(props.onCancel?.()).finally(() => {
                toast.dismiss(id);
              });
            }}
          >
            Cancel
          </button>
        )}
      </div>,
      {
        id,
        toasterId: "toasting",
        position: (isRtl ? TOAST_POSITIONS_RTL : TOAST_POSITIONS_LTR)[props?.position ?? "bottom"] as ToastT["position"],
      },
    );
    void promise
      .then((props) => {
        const opts = makeToastOptions(props, id);
        toast.success(opts.message, opts);
      })
      .catch((props: string | ToastProps) => {
        if (props) {
          const opts = makeToastOptions(props, id);
          toast.error(opts.message, opts);
        }
      });
  };

  const a = (props: AlertProps) => {
    return new Promise((r) => {
      showAlert(<Alert {...props} onClose={(ret) => (r(ret), showAlert())} />);
    });
  };

  return {
    alert: a,
    toast: t,
    message: m,
    promise: p,
    closeAll: c,
  };
}
