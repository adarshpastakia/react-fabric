import{j as n,M as l,T as i,A as s,S as r,D as c,aL as d,P as x,c as b,C as T,a as j}from"./iframe-Ctw5u0Cj.js";import{useMDXComponents as o}from"./index.js";import{T as m,_ as p}from"./TabPanel.stories.js";import"./index4.js";function t(e){const a={code:"code",pre:"pre",...o(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:m}),`
`,n.jsx(i,{children:"Tabbed Panel"}),`
`,n.jsx(s,{storyId:"TabPanel",children:n.jsx("div",{className:"hidden-anchor",children:n.jsx(r,{children:"Tab Panel"})})}),`
`,n.jsx(c,{of:d}),`
`,n.jsx(x,{}),`
`,n.jsxs(b,{className:"control-panel",children:[n.jsx("div",{children:"Controls"}),n.jsx(T,{of:p})]}),`
`,n.jsx("hr",{}),`
`,n.jsx(s,{storyId:"props",children:n.jsx(r,{children:"Props"})}),`
`,n.jsx(j,{sort:"requiredFirst"}),`
`,n.jsx(s,{storyId:"sample",children:n.jsx(r,{children:"Example"})}),`
`,n.jsx(a.pre,{children:n.jsx(a.code,{className:"language-tsx",children:`import { TabPanel, Button, Menu, MenuItem } from "@react-fabric/core";

export const Example = () => {
  return (
    <TabPanel>
      <Tab id="1" label="Tab Oner">
        <Content>...</Content>
      </Tab>
      <Tab id="2" label="Tab Two">
        <Content>...</Content>
      </Tab>
      <Tab id="3" label="Tab Three">
        <Content>...</Content>
      </Tab>
    </TabPanel>
  );
};
`})})]})}function f(e={}){const{wrapper:a}={...o(),...e.components};return a?n.jsx(a,{...e,children:n.jsx(t,{...e})}):t(e)}export{f as default};
