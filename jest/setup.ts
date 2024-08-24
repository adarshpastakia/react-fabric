/*
 * React Fabric
 * @version   : 1.0.0
 * @copyright : 2024
 * @author    : Adarsh Pastakia
 */

import { jest } from "@jest/globals";
import "@testing-library/jest-dom";
import "jsdom-global";
import "mutationobserver-shim";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

Object.defineProperty(window, "crypto", {
  value: { getRandomValues: () => new Uint8Array([Math.random() * 256]) },
});

Object.defineProperty(window, "CSS", {
  value: { supports: () => true },
});

// setupFile.js - this will run before the tests in jest.
import { setProjectAnnotations } from "@storybook/testing-react";
import TestWrapper from "./TestWrapper";
// path of your preview.js file
setProjectAnnotations(TestWrapper);

Element.prototype.getBoundingClientRect = jest.fn(
  () =>
    ({
      width: 120,
      height: 120,
      x: 0,
      y: 0,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    }) as DOMRect,
);

const warningPatterns = [
  /componentWillReceiveProps/,
  /The `css` function is deprecated/,
];
const errorPatterns = [/ErrorBoundary/, /badcall is not defined/];
const originalWarn = global.console.warn;
const originalError = global.console.error;
global.console = {
  ...global.console,
  warn: (...args) => {
    if (
      warningPatterns.some((pattern) => args.some((line) => pattern.test(line)))
    ) {
      return;
    }
    try {
      originalWarn(...args);
    } catch {
      console.warn(...args);
    }
  },
  error: (...args) => {
    if (
      errorPatterns.some((pattern) => args.some((line) => pattern.test(line)))
    ) {
      return;
    }
    try {
      originalError(...args);
    } catch {
      console.error(...args);
    }
  },
};

jest.useFakeTimers();
// @ts-expect-error ignore
const virtualConsole = global.window._virtualConsole;
const originalEmit = virtualConsole.emit;
const emit = jest.spyOn(virtualConsole, "emit");
emit.mockImplementation(function (type: string, error: any) {
  // you may skip the type check
  if (
    type === "jsdomError" &&
    error.detail.message?.includes?.("badcall is not defined")
  ) {
    return;
  }
  try {
    return originalEmit(virtualConsole, type, error);
  } catch {
    console.error(error);
  }
});
