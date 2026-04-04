import{n as e,r as t}from"./chunk.js";import{t as n}from"./jsx-runtime.js";import{n as r,r as i,t as a}from"./src5.js";var o=t({_DatePanel:()=>l,__namedExportsOrder:()=>u,default:()=>c}),s,c,l,u,d=e((()=>{a(),s=n(),c={component:i,subcomponents:{RangePanel:r},title:`@date/Date Panel`,parameters:{layout:`centered`,controls:{exclude:`children`,matchers:{date:/value|min|max/}}}},l={render:e=>(0,s.jsx)(`div`,{className:`outline`,children:(0,s.jsx)(i,{...e})}),args:{withTime:!0,showHijriToggle:!0,max:new Date}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u=[`_DatePanel`]}));d();export{l as _DatePanel,u as __namedExportsOrder,c as default,d as n,o as t};