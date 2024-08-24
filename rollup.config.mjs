import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import * as fs from "fs";
import path from "path";
import { createTransform } from "rollup-copy-transform-css";
import copy from "rollup-plugin-copy";
import excludeDependenciesFromBundle from "rollup-plugin-exclude-dependencies-from-bundle";
import css from "rollup-plugin-import-css";
import svg from "rollup-plugin-svg-import";

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
      nodeResolve(nodeOptions),
      typescript(typescriptOptions),
      commonjs(commonjsOptions),
      babel(babelOptions),
      copy({
        targets: [
          {
            src: "src/**/*.module.css",
            dest: ["dist/cjs", "dist/esm"],
            flatten: false,
            transform: createTransform({ inline: true, minify: true }),
            rename: (name, extension, fullPath) => {
              return fullPath.replace("src/", "");
            },
          },
        ],
      }),
      svg({
        stringify: true,
      }),
      json(),
      css(),
      {
        generateBundle(options, bundle) {
          Object.entries(bundle).forEach(([file, content]) => {
            if (file.includes(".module.css.js")) delete bundle[file];
            content.code = content.code.replace("module.css.js", "module.css");
          });
        },
      },
    ],
  },
];
