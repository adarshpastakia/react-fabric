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

import { isObject, isString, uuid } from "@react-fabric/utilities";
import { Fragment, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Alert, type AlertProps } from "../overlays/alert/Alert";
import { Message, type MessageProps } from "../overlays/message/Message";
import { Toast, type ToastProps } from "../overlays/toast/Toast";

export interface NotificationManagerRef {
  showMessage: (
    props: string | MessageProps,
    timeout?: number,
  ) => Promise<boolean | string>;

  showToast: (
    props: string | ToastProps,
    timeout?: number,
  ) => Promise<boolean | string>;

  showAlert: (props: string | AlertProps) => Promise<boolean | string>;

  showError: (
    props: string | Omit<ToastProps, "color">,
  ) => Promise<boolean | string>;

  closeAll: () => void;
}

/** ***************** refactor props *******************/
const makeProps = (obj: AnyObject): AnyObject => {
  if (isString(obj)) {
    return { message: obj };
  } else if (isObject(obj)) {
    return { ...obj };
  }
  return { message: "" };
};

export const NotificationManager = ({ onLoad }: KeyValue) => {
  const refItems = useRef<KeyValue>({ toasts: {}, messages: {}, alerts: {} });

  const [messages, setMessages] = useState<AnyObject>({});
  const [toasts, setToasts] = useState<AnyObject>({});
  const [alerts, setAlerts] = useState<AnyObject>({});

  const updateMessages = useRef(() => {
    setMessages({ ...refItems.current.messages });
  });

  const updateToasts = useRef(() => {
    setToasts({ ...refItems.current.toasts });
  });

  const updateAlerts = useRef(() => {
    setAlerts({ ...refItems.current.alerts });
  });

  const handleCloseAll = useRef(() => {
    Object.values(refItems.current.messages).forEach((msg: AnyObject) =>
      msg[1]?.(false),
    );
    Object.values(refItems.current.toasts).forEach((msg: AnyObject) =>
      msg[1]?.(false),
    );
    Object.values(refItems.current.alerts).forEach((msg: AnyObject) =>
      msg[1]?.(false),
    );
    refItems.current.messages = {};
    refItems.current.toasts = {};
    refItems.current.alerts = {};
    updateMessages.current();
    updateToasts.current();
    updateAlerts.current();
  });

  const openNotification = useRef(
    async (
      map: KeyValue,
      update: AnyObject,
      Notif: React.ComponentType<AnyObject>,
      props: AnyObject,
      timeout = 5000,
    ) => {
      let timerRef: AnyObject = null;
      const obj: AnyObject = makeProps(props);
      return await new Promise<boolean | string>((resolve) => {
        const key = uuid();
        const handleClose = (b: boolean | string = false) => {
          clearTimeout(timerRef);
          setTimeout(() => {
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            delete map[key];
            update();
            resolve(b);
          }, 250);
        };
        map[key] = [
          <div key={key}>
            <Notif
              {...obj}
              onClose={handleClose}
              onCloseAll={handleCloseAll.current}
            />
          </div>,
          handleClose,
        ];
        update();
        if (obj.type !== "confirm" && timeout > 0) {
          timerRef = setTimeout(handleClose, timeout);
        }
      });
    },
  );

  const showMessage = useRef(
    async (props: string | MessageProps, timeout = 5000) => {
      return await openNotification.current(
        refItems.current.messages,
        updateMessages.current,
        Message,
        props,
        timeout,
      );
    },
  );

  const showToast = useRef(
    async (props: string | MessageProps, timeout = 5000) => {
      return await openNotification.current(
        refItems.current.toasts,
        updateToasts.current,
        Toast,
        props,
        timeout,
      );
    },
  );

  const showAlert = useRef(async (props: string | MessageProps) => {
    return await openNotification.current(
      refItems.current.alerts,
      updateAlerts.current,
      Alert,
      props,
      0,
    );
  });

  const showError = useRef(
    async (props: string | MessageProps, timeout = 5000) => {
      return await openNotification.current(
        refItems.current.toasts,
        Toast,
        { ...makeProps(props), color: "danger" },
        0,
      );
    },
  );

  useEffect(() => {
    onLoad({
      showMessage: showMessage.current,
      showToast: showToast.current,
      showAlert: showAlert.current,
      showError: showError.current,
      closeAll: handleCloseAll.current,
    });
  }, []);

  return (
    <Fragment>
      {createPortal(
        <div
          style={{ zIndex: "var(--z-overlay)" }}
          className="ruf-container__overlays pointer-events-none fixed inset-0 p-4 bg-transparent"
        >
          {Object.values(alerts).map(([el]: AnyObject) => el)}
        </div>,
        document.body,
      )}
      {createPortal(
        <div
          style={{ zIndex: "var(--z-notifications)" }}
          className="ruf-container__notifs flex flex-nowrap pointer-events-none fixed inset-0 p-2 bg-transparent flex-col-reverse items-center justify-end"
        >
          {Object.values(messages).map(([el]: AnyObject) => el)}
        </div>,
        document.body,
      )}
      {createPortal(
        <div
          style={{ zIndex: "var(--z-notifications)" }}
          className="ruf-container__toasts flex flex-nowrap pointer-events-none fixed inset-0 p-4 bg-transparent flex-col items-end justify-end overflow-auto scroll-hide"
        >
          {Object.values(toasts).map(([el]: AnyObject) => el)}
        </div>,
        document.body,
      )}
    </Fragment>
  );
};
