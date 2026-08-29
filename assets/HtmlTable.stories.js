import{n as e}from"./rolldown-runtime.js";import{d as t}from"./EmptyContent.js";import{t as n}from"./src2.js";import{t as r}from"./jsx-runtime.js";import{f as i,t as a}from"./src5.js";import{i as o,t as s}from"./src6.js";var c,l,u,d;function f(){return(f=e((()=>{n(),a(),s(),c=r(),l={component:i,title:`@data/HtmlTable`,parameters:{controls:{exclude:/^(on.*|children|as)/},jest:[`data/tests/Table.test.tsx`]},decorators:[e=>(0,c.jsx)(`div`,{className:`max-w-2xl p-4`,children:(0,c.jsx)(e,{})})]},u={render:e=>(0,c.jsx)(i,{...e}),args:{data:o.list,columns:[{id:`iconCode`,align:`center`,width:`2.5rem`,renderer(e){return(0,c.jsx)(t,{size:`md`,icon:`iconify-color circle-flags--${e}`})}},{id:`name.common`,label:`Name`},{id:`capital`,label:`Capital`}]}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d=[`_HtmlTable`]})))()}f();export{u as _HtmlTable,d as __namedExportsOrder,l as default};