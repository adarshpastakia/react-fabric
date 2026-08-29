import { pathsToModuleNameMapper } from "ts-jest";
// Logically require your tsconfig.json file
import tsconfig from "./tsconfig.json" with { type: "json" };

export default {
  verbose: true,
  collectCoverage: false,
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./jest/setup.ts"],
  roots: ["<rootDir>/packages"],
  testRegex: "(/tests/.*\\.(test|spec))\\.[jt]sx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  transform: {
    "\\.(js|jsx|ts|tsx)$": [
      "ts-jest",
      {
        useESM: true,
        tsconfig: "tsconfig.test.json",
      },
    ],
    "\\.(js|jsx)$": "babel-jest",
    "\\.css$": "jest-transform-css",
    "\\.svg$": "jest-transform-stub",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(@storybook/react|@storybook/react\\-vite|storybook|@faker\\-js/faker|boring\\-avatars)/)",
  ],
  modulePaths: ["<rootDir>/packages", "<rootDir>/node_modules"],
  modulePathIgnorePatterns: ["<rootDir>/packages/*/dist"],
  moduleNameMapper: {
    "^@iconify-react": "<rootDir>/jest/blankComponent.js",
    "^@mdi/font/css/materialdesignicons.min.css": "<rootDir>/jest/blank.js",
    "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules",
    "\\.(mp4|mp3)$": "<rootDir>/jest/blank.js",
    ...pathsToModuleNameMapper(tsconfig.compilerOptions.paths, { prefix: "<rootDir>/" }),
  },
  collectCoverageFrom: ["packages/**/src/**/*.{ts,tsx}", "!**/@types/**/*", "!**/i18n/**/*", "!**/*.d.ts"],
  coveragePathIgnorePatterns: ["tests/", "stories/", "types/", "internals/", "node_modules/"],
  coverageDirectory: "<rootDir>/coverage",
  coverageReporters: ["json", "lcov", "text", "html-spa"],
};
