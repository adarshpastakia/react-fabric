import{j as r,aO as n}from"./iframe-DpfJK_wQ.js";import{I as m}from"./Tooltip.js";import"./index.js";import{j as p}from"./DualList.js";import"./HeadFoot.js";import"./useDebounce.js";import"./BasePanel.js";import"./Button.js";import"./Google.js";import"./createClass.js";import"./zh-CN.js";import"./endOfDay.js";import"./index5.js";import"./getDay.js";import"./Content.js";import"./useResizeObserver.js";import"./ErrorBoundary.js";import"./Global.js";import"./ToggleButtonGroup.js";import"./cloneElement.js";import"./Collapsable.js";import"./toArray.js";import"./Avatar2.js";import"./index2.js";import"./DatePanel.js";import"./ButtonGroup2.js";import"./EmptyContent.js";import"./isEqual.js";import"./dedupe.js";const B={component:p,title:"@form/List",parameters:{layout:"centered",jest:["form/tests/DualList.test.tsx"]},decorators:[e=>r.jsx("div",{className:"max-w-[36rem] w-screen",children:r.jsx(e,{})})]},t={render:e=>r.jsx(p,{...e,options:n.list,labelProperty:"name",valueProperty:"iso3",renderer:s=>r.jsxs("div",{className:"flex gap-2 items-center",children:[r.jsx(m,{icon:`icon-[circle-flags--${s.iso2}]`}),r.jsx("span",{className:"flex-1 truncate",children:s.name}),r.jsx("span",{className:"rounded-full text-xs bg-tint-500/10 px-1 py-px",children:s.phone})]})}),args:{label:"DualList",groupProperty:"alpha"}};var o,a,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => {
    return <DualList {...args} options={Countries.list} labelProperty="name" valueProperty="iso3" renderer={opt => <div className="flex gap-2 items-center">
            <Icon icon={\`icon-[circle-flags--\${opt.iso2}]\`} />
            <span className="flex-1 truncate">{opt.name}</span>
            <span className="rounded-full text-xs bg-tint-500/10 px-1 py-px">
              {opt.phone}
            </span>
          </div>} />;
  },
  args: {
    label: "DualList",
    groupProperty: "alpha"
  }
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const F=["_DualList"];export{t as _DualList,F as __namedExportsOrder,B as default};
