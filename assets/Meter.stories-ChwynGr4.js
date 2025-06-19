import{j as e,az as s}from"./iframe-DL5PLccW.js";const i={component:s,title:"@core/components/Meter",parameters:{layout:"centered",controls:{exclude:/^(on.*|children|as)/},jest:["core/tests/Meter.test.tsx"]},decorators:[r=>e.jsx("div",{className:"w-screen max-w-sm p-4 flex flex-col gap-2",children:e.jsx(r,{})})]},a={render:r=>e.jsx(e.Fragment,{children:e.jsx(s,{...r})}),args:{value:94.2}},t={render:r=>e.jsxs(e.Fragment,{children:[e.jsx(s,{...r,className:"text-primary-600"}),e.jsx(s,{...r,className:"text-accent-600"}),e.jsx(s,{...r,className:"text-danger-600"})]}),args:{value:94.2}},n={render:r=>e.jsxs(e.Fragment,{children:[e.jsx(s,{...r,className:"text-xs"}),e.jsx(s,{...r,className:"text-md"}),e.jsx(s,{...r,className:"text-2xl"})]}),args:{value:94.2}};var c,o,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Meter {...args} />
      </Fragment>;
  },
  args: {
    value: 94.2
  }
}`,...(m=(o=a.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var l,x,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Meter {...args} className="text-primary-600" />
        <Meter {...args} className="text-accent-600" />
        <Meter {...args} className="text-danger-600" />
      </Fragment>;
  },
  args: {
    value: 94.2
  }
}`,...(d=(x=t.parameters)==null?void 0:x.docs)==null?void 0:d.source}}};var g,u,p;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Meter {...args} className="text-xs" />
        <Meter {...args} className="text-md" />
        <Meter {...args} className="text-2xl" />
      </Fragment>;
  },
  args: {
    value: 94.2
  }
}`,...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const j=["_Meter","Colors","Sizes"],N=Object.freeze(Object.defineProperty({__proto__:null,Colors:t,Sizes:n,_Meter:a,__namedExportsOrder:j,default:i},Symbol.toStringTag,{value:"Module"}));export{t as C,N as M,n as S,a as _};
