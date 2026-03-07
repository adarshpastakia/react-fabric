import{j as o,aK as n}from"./iframe-BmpICDQJ.js";import{I as p}from"./Tooltip.js";import"./index.js";import{H as a}from"./List.js";import"./ButtonGroup2.js";import"./cloneElement.js";import"./useDebounce.js";import"./EmptyContent.js";import"./isEqual.js";import"./memoize-one.esm.js";import"./Copy.js";import"./Text.js";import"./usePropToggle.js";import"./types.js";import"./HeadFoot.js";import"./Dropdown.js";import"./Menu.js";import"./nodeCheck.js";import"./Google.js";import"./createClass.js";import"./zh-CN.js";import"./endOfDay.js";import"./index5.js";import"./DateDisplay.js";import"./Global.js";import"./Divider.js";import"./DropdownTool.js";import"./ColorPicker.js";import"./index2.js";import"./Checkbox.js";import"./ErrorIcon.js";import"./Input.js";import"./eventHandlers.js";import"./dedupe.js";import"./debounce.js";import"./Section.js";import"./ErrorBoundary.js";const P={component:a,title:"@data/HtmlTable",parameters:{controls:{exclude:/^(on.*|children|as)/},jest:["data/tests/Table.test.tsx"]},decorators:[r=>o.jsx("div",{className:"max-w-2xl p-4",children:o.jsx(r,{})})]},t={render:r=>o.jsx(a,{...r}),args:{data:n.list,columns:[{id:"iconCode",align:"center",width:"2.5rem",renderer(r){return o.jsx(p,{size:"md",icon:`iconify-color circle-flags--${r}`})}},{id:"name.common",label:"Name"},{id:"capital",label:"Capital"}]}};var e,i,m;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: args => {
    return <HtmlTable {...args} />;
  },
  args: {
    data: Countries.list,
    columns: [{
      id: "iconCode",
      align: "center",
      width: "2.5rem",
      renderer(value) {
        return <Icon size="md" icon={\`iconify-color circle-flags--\${value}\`} />;
      }
    }, {
      id: "name.common",
      label: "Name"
    }, {
      id: "capital",
      label: "Capital"
    }]
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Q=["_HtmlTable"];export{t as _HtmlTable,Q as __namedExportsOrder,P as default};
