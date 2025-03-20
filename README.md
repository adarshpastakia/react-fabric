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
![Maintain](https://img.shields.io/codeclimate/maintainability/adarshpastakia/react-fabric?style=flat-square&logo=code%20climate&labelColor=333&label=maintainability)
![Coverage](https://img.shields.io/codeclimate/coverage/adarshpastakia/react-fabric?style=flat-square&logo=code%20climate&labelColor=333&label=coverage)
![Issues](https://img.shields.io/codeclimate/issues/adarshpastakia/react-fabric?style=flat-square&logo=code%20climate&labelColor=333&label=issues)

[![lerna](https://img.shields.io/badge/lerna-677ef8.svg?style=flat-square&labelColor=333&logo=lerna)](https://lerna.js.org/)
[![yarn](https://img.shields.io/badge/yarn-2C8EBB.svg?style=flat-square&labelColor=333&logo=yarn)](https://yarnpkg.com/)
[![react](https://img.shields.io/badge/react-61DAFB.svg?style=flat-square&labelColor=333&logo=react)](http://reactjs.org/)
[![ts](https://img.shields.io/badge/typescript-3178C6.svg?style=flat-square&labelColor=333&logo=typescript)](https://typescriptlang.org/)
[![emotion](https://img.shields.io/badge/tailwindcss-06B6D4.svg?style=flat-square&labelColor=333&logo=tailwindcss)](https://tailwindcss.com/)
[![prettier](https://img.shields.io/badge/prettier-EA4C89.svg?style=flat-square&labelColor=333&logo=prettier)](https://prettier.io/)
[![codeclimate](https://img.shields.io/badge/code%20climate-272425.svg?style=flat-square&labelColor=333&logo=code%20climate)](http://codeclimate.com/)

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
yarn add @react-fabric/core @react-fabric/utilities

# data components
yarn add @react-fabric/data

# form components
yarn add @react-fabric/form

# advanced media viewers
yarn add @react-fabric/media

# comprehensive searchbar for data tools
yarn add @react-fabric/searchbar

# relative date selector with event calendar
yarn add @react-fabric/superdate

# eCharts wrappers
yarn add @react-fabric/chart

# lexical editor
yarn add @react-fabric/lexical

# mdx editor for markdown input
yarn add @react-fabric/mdx

# monaco editor
yarn add @react-fabric/monaco

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
yarn dist

# watch changes
yarn watch

# run tests
yarn test

# run storybook
yarn storybook

```
