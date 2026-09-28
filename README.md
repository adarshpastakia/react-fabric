![Logo](./assets/poster.png)

### React UI framework for business applications

---

[![Stars](https://img.shields.io/github/stars/adarshpastakia/react-fabric.svg?logoColor=blue&style=social&logo=github "GitHub Stars")](https://github.com/adarshpastakia/react-fabric/stargazers)
[![Forks](https://img.shields.io/github/forks/adarshpastakia/react-fabric.svg?logoColor=blue&style=social&logo=github "GitHub Forks")](https://github.com/adarshpastakia/react-fabric/network/members)
[![Issues](https://img.shields.io/github/issues/adarshpastakia/react-fabric.svg?logoColor=blue&style=social&logo=github "GitHub Issues")](https://github.com/adarshpastakia/react-fabric/issues)
[![Discussions](https://img.shields.io/github/discussions/adarshpastakia/react-fabric?style=social&logo=github&logoColor=blue "GitHub Discussions")](https://github.com/adarshpastakia/react-fabric/discussions)

![license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square&labelColor=333&logo=none)
![node](https://img.shields.io/github/package-json/minNode/adarshpastakia/react-fabric?logo=node.js&logoColor=white&label=node&color=5FA04E)
![Build](https://img.shields.io/github/actions/workflow/status/adarshpastakia/react-fabric/build.yml?style=flat-square&logo=github&labelColor=333&label=build)
![npm](https://img.shields.io/npm/v/%40react-fabric%2Fcore?style=flat-square&logo=npm&labelColor=333&label=release&color=CB3837)

![Deps](https://img.shields.io/librariesio/github/adarshpastakia/react-fabric?style=flat-square&logo=libraries.io&logoColor=fff&labelColor=333&label=dependencies)
[![Maintainability](https://qlty.sh/badges/6e1b5fbc-a45d-44b3-a7ec-63f00fb29acc/maintainability.svg)](https://qlty.sh/gh/adarshpastakia/projects/react-fabric)
[![Code Coverage](https://qlty.sh/badges/6e1b5fbc-a45d-44b3-a7ec-63f00fb29acc/test_coverage.svg)](https://qlty.sh/gh/adarshpastakia/projects/react-fabric)

[![react](https://img.shields.io/badge/react-61DAFB.svg?style=flat-square&labelColor=333&logo=react)](http://reactjs.org/)
[![ts](https://img.shields.io/badge/typescript-3178C6.svg?style=flat-square&labelColor=333&logo=typescript)](https://typescriptlang.org/)
[![tailwindcss](https://img.shields.io/badge/tailwindcss-06B6D4.svg?style=flat-square&labelColor=333&logo=tailwindcss)](https://tailwindcss.com/)
[![npm](https://img.shields.io/badge/npm-CB3837.svg?style=flat-square&labelColor=333&logo=npm)](https://npmjs.com/)
[![turborepo](https://img.shields.io/badge/turborepo-FF1E56.svg?style=flat-square&labelColor=333&logo=turborepo)](https://turborepo.dev/)
[![prettier](https://img.shields.io/badge/prettier-EA4C89.svg?style=flat-square&labelColor=333&logo=prettier)](https://prettier.io/)
[![qlty](https://img.shields.io/badge/qlty-66FAEC.svg?style=flat-square&labelColor=333&logo=qlty)](https://qlty.sh/)

---

A complete UI framework that provides a comprehensive suite of tools for building interactive and visually appealing applications. Here's an overview of the key features and components it includes:

1. **Common UI Components**: These foundational elements are essential for constructing user interfaces. They typically include buttons, links, modals, tooltips, and other basic elements that facilitate user interactions and navigation.

2. **Form Inputs**: This category encompasses various input elements used to collect data from users. Common form inputs include text fields, checkboxes, radio buttons, select dropdowns, date pickers, and toggles. These components are often designed with built-in validation and styling options to ensure consistency and usability.

3. **Data Display Components**: Data based components to enable effective data management, visualization, and interaction within applications.

4. **Charting Components**: These components offer various ways to visualize data, including line charts, bar charts, pie charts, and scatter plots. They are designed to present complex data in a more digestible format, aiding in analysis and decision-making.

5. **Styling and Customization**: The framework generally includes options for customizing the appearance of components, allowing developers to align the design with their application's branding and user experience requirements. This may include themes, color schemes, and responsive design features.

Overall, this UI framework provides a robust set of components that cater to a wide range of use cases, from basic user interface elements to advanced data visualization tools. It enables developers to build feature-rich and user-friendly applications with a consistent and cohesive design.

## Install

```bash
# core components
npm install @react-fabric/core @react-fabric/utilities

# data components
npm install @react-fabric/data

# form components
npm install @react-fabric/form

# advanced media viewers
npm install @react-fabric/media

# comprehensive searchbar for data tools
npm install @react-fabric/searchbar

# relative date selector with event calendar
npm install @react-fabric/superdate

# eCharts wrappers
npm install @react-fabric/chart

# lexical editor
npm install @react-fabric/lexical

# mdx editor for markdown input
npm install @react-fabric/mdx

# monaco editor
npm install @react-fabric/monaco

```

## Setup

Setup postcss for processing `TailwindCss`

```js
// .postcssrc.js
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

Include `TailwindCss` and `React Fabric` styles in main stylesheet

```css
/* main.css */
@import url("tailwindcss");
@import url("@react-fabric/core/css/styles.css");
@import url("@react-fabric/data/css/styles.css");
@import url("@react-fabric/date/css/styles.css");
@import url("@react-fabric/form/css/styles.css");
@import url("@react-fabric/lexical/css/styles.css");
@import url("@react-fabric/mdx/css/styles.css");
@import url("@react-fabric/media/css/styles.css");
@import url("@react-fabric/monaco/css/styles.css");
@import url("@react-fabric/superdate/css/styles.css");

/* helper css with base64 flag images for windows */
@import "@react-fabric/core/css/flags.rect.css";
@import "@react-fabric/core/css/flags.wavy.css";
```

Include `main.css` in react root file

```tsx
// main.tsx
import "./main.css";

import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";

createRoot(document.getElementById("root")!).render(<App />);
```

## Development

```bash

# build library
npm run dist

# watch changes
npm run watch

# run tests
npm run test

# run storybook
npm run storybook

```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the development workflow — the per-component
lifecycle, a command cheatsheet, the husky git gates, and the cross-cutting guards. For the
deep architecture and build internals, see [CLAUDE.md](./CLAUDE.md).
