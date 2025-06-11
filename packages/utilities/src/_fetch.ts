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

import { isString } from "./_isType";

declare type METHODS = "get" | "post" | "put" | "delete";
declare interface FetchOptions {
  body?: KeyValue | FormData;
  headers?: KeyValue;
  signal?: string | AbortSignal;
}

const _signals = new Map<string, AbortController>();

/**
 * Fetch utility function to make HTTP requests.
 * It supports GET, POST, PUT, and DELETE methods.
 * It automatically handles JSON responses and error codes.
 * It also supports aborting requests using an AbortController.
 *
 * @param method - The HTTP method to use (GET, POST, PUT, DELETE).
 * @param url - The URL to send the request to.
 * @param options.headers - Headers to include in the request.
 * @param options.body - The body of the request (for POST and PUT requests).
 * @param options.signal - An AbortSignal to cancel the request.
 * @returns A promise that resolves to the JSON response from the server.
 * @throws An error if the request fails or if the response contains an error code.
 */
export const _fetch = async (
  method: METHODS,
  url: string,
  { headers = {}, body, signal }: FetchOptions,
) => {
  const options: KeyValue = {
    method,
  };

  headers.accept = "application/json";
  if (method === "post" || method === "put") {
    options.body = body;
    /** ***************** set body to json when not FormData *******************/
    if (!(body instanceof FormData)) {
      headers["content-type"] = "application/json";
      options.body = JSON.stringify(body);
    }
  }

  /** ***************** reset abort signal *******************/
  if (signal && isString(signal)) {
    if (_signals.has(signal)) {
      const _s = _signals.get(signal);
      _s?.abort();
      _signals.delete(signal);
    }
    const ac = new AbortController();
    options.signal = ac.signal;
    _signals.set(signal, ac);
  } else if (signal instanceof AbortSignal) {
    options.signal = signal;
  }

  return await fetch(url, { ...options, headers })
    .then(async (resp) => {
      if (resp.status >= 200 && resp.status < 300) {
        return await resp.json();
      }
      // eslint-disable-next-line @typescript-eslint/no-throw-literal
      throw { status: resp.status, code: -1, message: resp.statusText };
    })
    .then((resp) => {
      /** ***************** check for possible error code propeties in response *******************/
      const code = resp.error_code ?? resp.errorCode ?? resp.error;
      const message = resp.error_message ?? resp.errorMessage ?? resp.message;
      if (resp.status === "error" || code) {
        // eslint-disable-next-line @typescript-eslint/no-throw-literal
        throw { status: 500, code, message };
      }
      return resp;
    });
};

/** ***************** attach isAborted helper to fetch method *******************/
_fetch.isAborted = ({ name }: Error) => name === "AbortError";

/** ***************** attach abort helper to fetch method *******************/
_fetch.abort = (signal: string) => {
  if (_signals.has(signal)) {
    const _s = _signals.get(signal);
    _s?.abort();
    _signals.delete(signal);
  }
};
