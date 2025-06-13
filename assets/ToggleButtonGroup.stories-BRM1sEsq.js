import{j as e,ak as a,a3 as n,al as b}from"./iframe-CVyMRGSP.js";const{fn:s}=__STORYBOOK_MODULE_TEST__,T={component:a,title:"@core/components/ToggleButtonGroup",parameters:{layout:"centered",controls:{exclude:/^(on.*|children|as)/},jest:["core/tests/buttons/ToggleButtonGroup.test.tsx"]},decorators:[r=>e.jsx("div",{className:"flex gap-2 items-center p-4",children:e.jsx(r,{})})]},t={render:r=>e.jsx(e.Fragment,{children:e.jsxs(a,{...r,children:[e.jsx(n,{value:1,children:"First"}),e.jsx(n,{value:2,children:"Second"}),e.jsx(n,{value:3,children:"Third"})]})}),args:{value:[1,2],onChange:s()}},o={render:r=>e.jsx(e.Fragment,{children:e.jsxs(a,{...r,children:[e.jsx(n,{value:1,children:"First"}),e.jsx(n,{value:2,children:"Second"}),e.jsx(n,{value:3,children:"Third"})]})}),args:{value:1,onChange:s()}},l={render:r=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"border border-muted p-1 flex gap-2 rounded",children:[e.jsxs(a,{value:"left",variant:"link",onChange:r.onChange,children:[e.jsx(n,{icon:"mdi mdi-format-align-left",value:"left","aria-label":"left"}),e.jsx(n,{icon:"mdi mdi-format-align-center",value:"center","aria-label":"center"}),e.jsx(n,{icon:"mdi mdi-format-align-right",value:"right","aria-label":"right"}),e.jsx(n,{icon:"mdi mdi-format-align-justify",value:"justify","aria-label":"justify"})]}),e.jsx(b,{vertical:!0}),e.jsxs(a,{value:[],variant:"link",onChange:r.onChange,children:[e.jsx(n,{icon:"mdi mdi-format-bold",value:"bold","aria-label":"bold"}),e.jsx(n,{icon:"mdi mdi-format-italic",value:"italic","aria-label":"italic"}),e.jsx(n,{icon:"mdi mdi-format-underline",value:"undeline","aria-label":"undeline"})]})]})}),args:{onChange:s()}},i={render:r=>e.jsx(a,{...r}),args:{}};var u,d,c;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <ToggleButtonGroup {...args}>
          <Button value={1}>First</Button>
          <Button value={2}>Second</Button>
          <Button value={3}>Third</Button>
        </ToggleButtonGroup>
      </Fragment>;
  },
  args: {
    value: [1, 2],
    onChange: fn<any>()
  }
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var g,m,v;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <ToggleButtonGroup {...args}>
          <Button value={1}>First</Button>
          <Button value={2}>Second</Button>
          <Button value={3}>Third</Button>
        </ToggleButtonGroup>
      </Fragment>;
  },
  args: {
    value: 1,
    onChange: fn<any>()
  }
}`,...(v=(m=o.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var p,h,f;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <div className="border border-muted p-1 flex gap-2 rounded">
          <ToggleButtonGroup value="left" variant="link" onChange={args.onChange as any}>
            <Button icon="mdi mdi-format-align-left" value="left" aria-label="left" />
            <Button icon="mdi mdi-format-align-center" value="center" aria-label="center" />
            <Button icon="mdi mdi-format-align-right" value="right" aria-label="right" />
            <Button icon="mdi mdi-format-align-justify" value="justify" aria-label="justify" />
          </ToggleButtonGroup>
          <Divider vertical />
          <ToggleButtonGroup value={[]} variant="link" onChange={args.onChange}>
            <Button icon="mdi mdi-format-bold" value="bold" aria-label="bold" />
            <Button icon="mdi mdi-format-italic" value="italic" aria-label="italic" />
            <Button icon="mdi mdi-format-underline" value="undeline" aria-label="undeline" />
          </ToggleButtonGroup>
        </div>
      </Fragment>;
  },
  args: {
    onChange: fn<any>()
  }
}`,...(f=(h=l.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var j,B,x;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <ToggleButtonGroup {...args} />,
  args: {}
}`,...(x=(B=i.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};const S=["_ToggleButtonGroup","SingleSelection","EditorToolbar","Tester"],_=Object.freeze(Object.defineProperty({__proto__:null,EditorToolbar:l,SingleSelection:o,Tester:i,_ToggleButtonGroup:t,__namedExportsOrder:S,default:T},Symbol.toStringTag,{value:"Module"}));export{l as E,o as S,_ as T,t as _};
