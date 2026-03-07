import{j as r,aK as p}from"./iframe-BmpICDQJ.js";import{I as m}from"./Tooltip.js";import"./index.js";import{i as n}from"./DualList.js";import"./HeadFoot.js";import"./useDebounce.js";import"./BasePanel.js";import"./Google.js";import"./createClass.js";import"./zh-CN.js";import"./endOfDay.js";import"./index5.js";import"./getDay.js";import"./Content.js";import"./useResizeObserver.js";import"./ErrorBoundary.js";import"./Global.js";import"./useOverlayService2.js";import"./asyncToGenerator.js";import"./ToggleButtonGroup.js";import"./cloneElement.js";import"./Collapsable.js";import"./toArray.js";import"./Avatar2.js";import"./index2.js";import"./DatePanel.js";import"./ButtonGroup2.js";import"./EmptyContent.js";import"./isEqual.js";import"./dedupe.js";const B={component:n,title:"@form/List",parameters:{layout:"centered",jest:["form/tests/DualList.test.tsx"]},decorators:[o=>r.jsx("div",{className:"max-w-xl w-screen",children:r.jsx(o,{})})]},t={render:o=>r.jsx(n,{...o,options:p.list,labelProperty:"name.common",valueProperty:"cca3",renderer:e=>r.jsxs("div",{className:"flex gap-2 items-center",children:[r.jsx(m,{icon:`iconify-color circle-flags--${e.iconCode}`}),r.jsx("span",{className:"flex-1 truncate",children:e.name.common}),r.jsx("span",{className:"rounded-full text-xs bg-tint-500/10 px-1 py-px",children:e.phone})]})}),args:{label:"DualList",groupProperty:"alpha"}};var s,a,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => {
    return <DualList {...args} options={Countries.list} labelProperty="name.common" valueProperty="cca3" renderer={opt => <div className="flex gap-2 items-center">
            <Icon icon={\`iconify-color circle-flags--\${opt.iconCode}\`} />
            <span className="flex-1 truncate">{opt.name.common}</span>
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
