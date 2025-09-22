import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import * as fs from "fs";
import path, { resolve } from "path";
import excludeDependenciesFromBundle from "rollup-plugin-exclude-dependencies-from-bundle";
import css from "rollup-plugin-import-css";
import svg from "rollup-plugin-svg-import";
import webWorkerLoader from "rollup-plugin-web-worker-loader";

const PACKAGE_NAME = process.cwd();
const pkg = JSON.parse(
  fs.readFileSync(path.join(PACKAGE_NAME, "package.json"), "utf-8"),
);

const commonjsOptions = {
  ignoreGlobal: true,
  include: /node_modules/,
};
const extensions = [".js", ".ts", ".tsx"];

const babelOptions = {
  exclude: /node_modules/,
  extensions,
  configFile: "../../.babelrc.json",
  babelHelpers: "runtime",
};
const nodeOptions = {
  extensions,
  preferBuiltins: true,
};
const typescriptOptions = {
  tsconfig: `${PACKAGE_NAME}/tsconfig.json`,
  include: ["packages/core/src/types/global.d.ts"],
};

export default [
  {
    input: pkg.source,
    external: [
      ...Object.keys(pkg.peerDependencies ?? {}),
      "react",
      "react-dom",
      "style-inject",
      "@babel/runtime",
      /.*\.module\.css/,
    ],
    output: [
      {
        dir: "dist/cjs/",
        format: "cjs",
        preserveModules: true,
      },
      {
        dir: "dist/esm/",
        format: "es",
        preserveModules: true,
        intro: "'use client';",
      },
    ],
    watch: {
      clearScreen: false,
    },
    plugins: [
      excludeDependenciesFromBundle({
        peerDependencies: true,
        dependencies: true,
      }),
      webWorkerLoader({
        external: [],
        tragetPlatform: "browser",
        webWorkerPattern: /(.+)\?worker/,
      }),
      nodeResolve(nodeOptions),
      typescript(typescriptOptions),
      commonjs(commonjsOptions),
      babel(babelOptions),
      svg({
        stringify: true,
      }),
      json(),
      css(),
    ],
  },
];
