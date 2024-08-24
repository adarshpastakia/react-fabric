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

interface LogDetail {
  module?: string;
  process?: string;
  duration?: number;
  totalTime?: number;
}

enum LOG_LEVEL {
  OFF,
  WARNING,
  INFO,
  DEBUG,
}

/* istanbul ignore file */

const NODE = {
  LOG: "\u001B[38;5;144m",
  INFO: "\u001B[38;5;81m",
  DEBUG: "\u001B[38;5;110m",
  ERROR: "\u001B[38;5;161m",
  WARNING: "\u001B[38;5;209m",
  TIME: "\u001B[38;5;72m",
  PROCESS: "\u001B[38;5;108m",
  DURATION: "\u001B[38;5;140m",
  RESET: "\u001B[0m",

  logLevel() {
    return (
      // @ts-expect-error ignore
      global.LOG_LEVEL ??
      (process.env.NODE_ENV !== "production"
        ? LOG_LEVEL.DEBUG
        : LOG_LEVEL.WARNING)
    );
  },

  makeLog(
    level: string,
    { process, module, duration, totalTime }: LogDetail = {},
  ) {
    const ret = [];
    if (process) ret.push(`${this.PROCESS}Process: ${process}${this.RESET}`);
    if (module) ret.push(`${this.PROCESS}Module: ${module}${this.RESET}`);
    if (duration)
      ret.push(`${this.DURATION}Duration: ${duration}${this.RESET}`);
    if (module)
      ret.push(`${this.DURATION}TotalTime: ${totalTime}${this.RESET}`);

    return [
      `[${this.TIME}${new Date().toISOString()}${this.RESET}] ${level}`,
      ret.join(" "),
    ]
      .filter(Boolean)
      .join("\n");
  },

  log(msg: string, opts: LogDetail, ...rest: unknown[]) {
    if (+this.logLevel() < LOG_LEVEL.DEBUG) return;
    console.log(
      this.makeLog(`${this.LOG}LOG${this.RESET}`, opts),
      `\n${msg}\n`,
      ...rest,
    );
  },
  debug(msg: string, opts: LogDetail, ...rest: unknown[]) {
    if (+this.logLevel() < LOG_LEVEL.DEBUG) return;
    console.debug(
      this.makeLog(`${this.DEBUG}DEBUG${this.RESET}`, opts),
      `\n${msg}\n`,
      ...rest,
    );
  },
  info(msg: string, opts: LogDetail, ...rest: unknown[]) {
    if (+this.logLevel() < LOG_LEVEL.INFO) return;
    console.info(
      this.makeLog(`${this.INFO}INFO${this.RESET}`, opts),
      `\n${msg}\n`,
      ...rest,
    );
  },
  error(msg: string, opts: LogDetail, ...rest: unknown[]) {
    console.error(
      this.makeLog(`${this.ERROR}ERROR${this.RESET}`, opts),
      `\n${msg}\n`,
      ...rest,
    );
  },
  warning(msg: string, opts: LogDetail, ...rest: unknown[]) {
    if (+this.logLevel() < LOG_LEVEL.WARNING) return;
    console.warn(
      this.makeLog(`${this.WARNING}WARNING${this.RESET}`, opts),
      `\n${msg}\n`,
      ...rest,
    );
  },
};

const BROWSER = {
  LOG: "#afaf87",
  INFO: "#5fd7ff",
  DEBUG: "#87afd7",
  ERROR: "#d7005f",
  WARNING: "#ff875f",
  TIME: "#5faf87",
  PROCESS: "#87af87",
  DURATION: "#af87d7",

  logLevel() {
    return (
      // @ts-expect-error ignore
      (typeof window !== "undefined" ? window.LOG_LEVEL : undefined) ??
      (process.env.NODE_ENV !== "production"
        ? LOG_LEVEL.DEBUG
        : LOG_LEVEL.WARNING)
    );
  },

  makeLog(
    level: string,
    color: string,
    { process, module, duration, totalTime }: LogDetail = {},
  ) {
    const ret = [];
    const colors = [
      `color:${this.TIME};font-weight:bold;`,
      `color:${color};font-weight:bold;`,
    ];
    if (module) ret.push(`%cModule: ${module}`);
    if (process) ret.push(`%cProcess: ${process}`);
    if (duration) ret.push(`%cDuration: ${duration}`);
    if (module) ret.push(`%cTotalTime: ${totalTime}`);
    if (module) colors.push(`color:${this.PROCESS}`);
    if (process) colors.push(`color:${this.PROCESS}`);
    if (duration) colors.push(`color:${this.DURATION}`);
    if (module) colors.push(`color:${this.DURATION}`);

    return [
      [`%c[${new Date().toISOString()}] ${level}`, ret.join(" ")]
        .filter(Boolean)
        .join("\n"),
      colors,
    ];
  },

  log(msg: string, opts: LogDetail, ...rest: unknown[]) {
    if (+this.logLevel() < LOG_LEVEL.DEBUG) return;
    const [logs, colors] = this.makeLog(`%cLOG`, this.LOG, opts);
    console.log(logs, ...colors, `\n${msg}\n`, ...rest);
  },
  debug(msg: string, opts: LogDetail, ...rest: unknown[]) {
    if (+this.logLevel() < LOG_LEVEL.DEBUG) return;
    const [logs, colors] = this.makeLog(`%cDEBUG`, this.DEBUG, opts);
    console.debug(logs, ...colors, `\n${msg}\n`, ...rest);
  },
  info(msg: string, opts: LogDetail, ...rest: unknown[]) {
    if (+this.logLevel() < LOG_LEVEL.INFO) return;
    const [logs, colors] = this.makeLog(`%cINFO`, this.INFO, opts);
    console.info(logs, ...colors, `\n${msg}\n`, ...rest);
  },
  error(msg: string, opts: LogDetail, ...rest: unknown[]) {
    const [logs, colors] = this.makeLog(`%cERROR`, this.ERROR, opts);
    console.error(logs, ...colors, `\n${msg}\n`, ...rest);
  },
  warning(msg: string, opts: LogDetail, ...rest: unknown[]) {
    if (+this.logLevel() < LOG_LEVEL.WARNING) return;
    const [logs, colors] = this.makeLog(`%cWARNING`, this.WARNING, opts);
    console.warn(logs, ...colors, `\n${msg}\ntest`, ...rest);
  },
};

const logger = () => {
  if (typeof window === "undefined") return NODE;
  if (typeof window !== "undefined") return BROWSER;
};

/**
 * @internal
 */
export const useLogger = (mod?: string) => ({
  timer(process: string) {
    const startTime = new Date().getTime();
    let nextTime = new Date().getTime();
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    const getTime = () => {
      const ret = (new Date().getTime() - nextTime) / 1000;
      nextTime = new Date().getTime();
      return ret;
    };
    const getFullTime = () => {
      return (new Date().getTime() - startTime) / 1000;
    };
    return {
      log: (msg: string, ...rest: unknown[]) =>
        self.log(
          msg,
          {
            process,
            duration: getTime(),
            totalTime: getFullTime(),
          },
          ...rest,
        ),
      debug: (msg: string, ...rest: unknown[]) =>
        self.debug(
          msg,
          {
            process,
            duration: getTime(),
            totalTime: getFullTime(),
          },
          ...rest,
        ),
      info: (msg: string, ...rest: unknown[]) =>
        self.info(
          msg,
          {
            process,
            duration: getTime(),
            totalTime: getFullTime(),
          },
          ...rest,
        ),
      error: (msg: string, ...rest: unknown[]) =>
        self.error(
          msg,
          {
            process,
            duration: getTime(),
            totalTime: getFullTime(),
          },
          ...rest,
        ),
      warning: (msg: string, ...rest: unknown[]) =>
        self.warning(
          msg,
          {
            process,
            duration: getTime(),
            totalTime: getFullTime(),
          },
          ...rest,
        ),
      end: (msg = "completed", ...rest: unknown[]) =>
        self.info(
          msg,
          {
            process,
            duration: getTime(),
            totalTime: getFullTime(),
          },
          ...rest,
        ),
    };
  },

  log(msg: string, { module = mod, ...opts }: LogDetail, ...rest: unknown[]) {
    logger()?.log(msg, opts, ...rest);
  },

  debug(msg: string, { module = mod, ...opts }: LogDetail, ...rest: unknown[]) {
    logger()?.debug(msg, opts, ...rest);
  },

  info(msg: string, { module = mod, ...opts }: LogDetail, ...rest: unknown[]) {
    logger()?.info(msg, opts, ...rest);
  },

  error(msg: string, { module = mod, ...opts }: LogDetail, ...rest: unknown[]) {
    logger()?.error(msg, opts, ...rest);
  },

  warning(
    msg: string,
    { module = mod, ...opts }: LogDetail,
    ...rest: unknown[]
  ) {
    logger()?.warning(msg, opts, ...rest);
  },
});
