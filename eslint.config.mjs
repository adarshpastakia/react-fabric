import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import jsxA11Y from "eslint-plugin-jsx-a11y";
import { reactRefresh } from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  globalIgnores([
    "**/dist/**/*",
    "**/jest/**/*",
    "**/tests/**/*",
    "**/assets/**/*",
    "**/stories/**/*",
    "**/.storybook/**/*",
    "**/*.mjs",
    "**/*.js",
  ]),
  {
    extends: compat.extends("plugin:jsx-a11y/recommended", "prettier"),

    plugins: {
      "@stylistic": stylistic,
      "jsx-a11y": jsxA11Y,
      "react-refresh": reactRefresh.plugin,
    },

    files: ["packages/**/*.ts", "packages/**/*.tsx"],

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },

        project: "./tsconfig.json",
        warnOnUnsupportedTypeScriptVersion: false,
        EXPERIMENTAL_useProjectService: true,
      },
    },

    rules: {
      "react/react-in-jsx-scope": "off",
      "jsx-a11y/no-autofocus": "off",
      "react-refresh/only-export-components": "error",
      "jsx-a11y/click-events-have-key-events": "off",
      "@typescript-eslint/no-namespace": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-misused-promises": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/strict-boolean-expressions": "off",
      "@typescript-eslint/consistent-type-assertions": "off",
      "@typescript-eslint/no-confusing-void-expression": "off",
    },
  },
]);
