import{j as e,ak as a,a3 as r,al as h}from"./iframe-BcXNitKG.js";const{fn:b}=__STORYBOOK_MODULE_TEST__,T={component:a,title:"@core/components/ToggleButtonGroup",parameters:{layout:"centered",controls:{exclude:/^(on.*|children|as)/},jest:["core/tests/buttons/ToggleButtonGroup.test.tsx"]},decorators:[n=>e.jsx("div",{className:"flex gap-2 items-center p-4",children:e.jsx(n,{})})]},t={render:n=>e.jsx(e.Fragment,{children:e.jsxs(a,{...n,children:[e.jsx(r,{value:"1",children:"First"}),e.jsx(r,{value:"2",children:"Second"}),e.jsx(r,{value:"3",children:"Third"})]})}),args:{value:["1","2"],onChange:b()}},o={render:n=>e.jsx(e.Fragment,{children:e.jsxs(a,{...n,children:[e.jsx(r,{value:"1",children:"First"}),e.jsx(r,{value:"2",children:"Second"}),e.jsx(r,{value:"3",children:"Third"})]})}),args:{value:"1",onChange:b()}},l={render:n=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"border border-muted p-1 flex gap-2 rounded",children:[e.jsxs(a,{value:"left",variant:"link",children:[e.jsx(r,{icon:"mdi mdi-format-align-left",value:"left","aria-label":"left"}),e.jsx(r,{icon:"mdi mdi-format-align-center",value:"center","aria-label":"center"}),e.jsx(r,{icon:"mdi mdi-format-align-right",value:"right","aria-label":"right"}),e.jsx(r,{icon:"mdi mdi-format-align-justify",value:"justify","aria-label":"justify"})]}),e.jsx(h,{vertical:!0}),e.jsxs(a,{value:[],variant:"link",children:[e.jsx(r,{icon:"mdi mdi-format-bold",value:"bold","aria-label":"bold"}),e.jsx(r,{icon:"mdi mdi-format-italic",value:"italic","aria-label":"italic"}),e.jsx(r,{icon:"mdi mdi-format-underline",value:"undeline","aria-label":"undeline"})]})]})}),args:{}},i={render:n=>e.jsx(a,{...n}),args:{}};var s,u,d;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <ToggleButtonGroup {...args}>
          <Button value="1">First</Button>
          <Button value="2">Second</Button>
          <Button value="3">Third</Button>
        </ToggleButtonGroup>
      </Fragment>;
  },
  args: {
    value: ["1", "2"],
    onChange: fn<any>()
  }
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var c,g,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <ToggleButtonGroup {...args}>
          <Button value="1">First</Button>
          <Button value="2">Second</Button>
          <Button value="3">Third</Button>
        </ToggleButtonGroup>
      </Fragment>;
  },
  args: {
    value: "1",
    onChange: fn<any>()
  }
}`,...(m=(g=o.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var v,p,f;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <div className="border border-muted p-1 flex gap-2 rounded">
          <ToggleButtonGroup value="left" variant="link">
            <Button icon="mdi mdi-format-align-left" value="left" aria-label="left" />
            <Button icon="mdi mdi-format-align-center" value="center" aria-label="center" />
            <Button icon="mdi mdi-format-align-right" value="right" aria-label="right" />
            <Button icon="mdi mdi-format-align-justify" value="justify" aria-label="justify" />
          </ToggleButtonGroup>
          <Divider vertical />
          <ToggleButtonGroup value={[]} variant="link">
            <Button icon="mdi mdi-format-bold" value="bold" aria-label="bold" />
            <Button icon="mdi mdi-format-italic" value="italic" aria-label="italic" />
            <Button icon="mdi mdi-format-underline" value="undeline" aria-label="undeline" />
          </ToggleButtonGroup>
        </div>
      </Fragment>;
  },
  args: {}
}`,...(f=(p=l.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var j,B,x;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <ToggleButtonGroup {...args} />,
  args: {}
}`,...(x=(B=i.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};const S=["_ToggleButtonGroup","SingleSelection","EditorToolbar","Tester"],_=Object.freeze(Object.defineProperty({__proto__:null,EditorToolbar:l,SingleSelection:o,Tester:i,_ToggleButtonGroup:t,__namedExportsOrder:S,default:T},Symbol.toStringTag,{value:"Module"}));export{l as E,o as S,_ as T,t as _};
