import{j as a}from"./iframe-BTaJxP5y.js";import{R as l,b as o}from"./RangePanel.js";import"./index2.js";const i={component:o,subcomponents:{RangePanel:l},title:"@date/Date Panel",parameters:{layout:"centered",controls:{exclude:"children",matchers:{date:/value|min|max/}}}},e={render:s=>a.jsx("div",{className:"outline",children:a.jsx(o,{...s})}),args:{withTime:!0,showHijriToggle:!0,max:new Date}};var r,t,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => {
    return <div className="outline">
        <DatePanel {...args} />
      </div>;
  },
  args: {
    withTime: true,
    showHijriToggle: true,
    max: new Date()
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const m=["_DatePanel"],p=Object.freeze(Object.defineProperty({__proto__:null,_DatePanel:e,__namedExportsOrder:m,default:i},Symbol.toStringTag,{value:"Module"}));export{p as D,e as _};
