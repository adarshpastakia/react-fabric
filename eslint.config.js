import eslintReact from "@eslint-react/eslint-plugin";
import js from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y-x";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  // 1. Global Ignores (Flat Config style)
  {
    ignores: [
      "**/dist/**/*",
      "**/jest/**/*",
      "**/tests/**/*",
      "**/assets/**/*",
      "**/stories/**/*",
      "**/.storybook/**/*",
      "**/*.mjs",
      "**/*.js",
      "**/*.d.ts",
      "**/vite*.ts",
    ],
  },

  // 2. Base configurations
  eslintReact.configs.recommended,
  jsxA11yPlugin.configs.recommended,
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked, // Type-aware linting (v8 standard)

  // 3. React + TypeScript configuration block
  {
    files: ["packages/**/*.ts", "packages/**/*.tsx"],
    plugins: {
      react: eslintReact,
      "jsx-a11y": jsxA11yPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        // Point to your tsconfig file(s)
        project: ["./tsconfig.json"],
        // Ensures ESLint resolves paths relative to the project root
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      // React Recommended Rules (manually mapped for Flat Config)
      ...eslintReact.configs.recommended.rules,
      ...jsxA11yPlugin.configs.recommended.rules,
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "separate-type-imports", // Options: 'separate-type-imports' or 'inline-type-imports'
        },
      ],
      "@typescript-eslint/consistent-type-exports": [
        "error",
        {
          fixMixedExportsWithInlineTypeSpecifier: false, // Options: 'separate-type-imports' or 'inline-type-imports'
        },
      ],
      "@eslint-react/no-clone-element": "off",
      "@eslint-react/rules-of-hooks": [
        "error",
        {
          additionalHooks: "(useMemoDebugger|useEffectDebugger|useLayoutEffectDebugger)",
        },
      ],

      "@typescript-eslint/no-namespace": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "after-used",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
    },
  },

  // 4. Prettier (MUST be last to disable conflicting formatting rules)
  prettierConfig,
);
