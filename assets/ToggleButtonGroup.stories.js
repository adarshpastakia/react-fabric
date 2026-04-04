import{n as e,r as t}from"./chunk.js";import{t as n}from"./jsx-runtime.js";import{M as r,Q as i,X as a,t as o}from"./src3.js";var s=t({EditorToolbar:()=>m,SingleSelection:()=>p,Tester:()=>h,_ToggleButtonGroup:()=>f,__namedExportsOrder:()=>g,default:()=>d}),c,l,u,d,f,p,m,h,g,_=e((()=>{c=n(),o(),l=n(),{fn:u}=__STORYBOOK_MODULE_TEST__,d={component:a,title:`@core/components/ToggleButtonGroup`,parameters:{layout:`centered`,controls:{exclude:/^(on.*|children|as)/},jest:[`core/tests/buttons/ToggleButtonGroup.test.tsx`]},decorators:[e=>(0,l.jsx)(`div`,{className:`flex gap-2 items-center p-4`,children:(0,l.jsx)(e,{})})]},f={render:e=>(0,l.jsx)(c.Fragment,{children:(0,l.jsxs)(a,{...e,children:[(0,l.jsx)(i,{value:1,children:`First`}),(0,l.jsx)(i,{value:2,children:`Second`}),(0,l.jsx)(i,{value:3,children:`Third`})]})}),args:{value:[1,2],onChange:u()}},p={render:e=>(0,l.jsx)(c.Fragment,{children:(0,l.jsxs)(a,{...e,children:[(0,l.jsx)(i,{value:1,children:`First`}),(0,l.jsx)(i,{value:2,children:`Second`}),(0,l.jsx)(i,{value:3,children:`Third`})]})}),args:{value:1,onChange:u()}},m={render:e=>(0,l.jsx)(c.Fragment,{children:(0,l.jsxs)(`div`,{className:`border border-soft p-1 flex gap-2 rounded`,children:[(0,l.jsxs)(a,{value:`left`,variant:`link`,onChange:e.onChange,children:[(0,l.jsx)(i,{icon:`mdi mdi-format-align-left`,value:`left`,"aria-label":`left`}),(0,l.jsx)(i,{icon:`mdi mdi-format-align-center`,value:`center`,"aria-label":`center`}),(0,l.jsx)(i,{icon:`mdi mdi-format-align-right`,value:`right`,"aria-label":`right`}),(0,l.jsx)(i,{icon:`mdi mdi-format-align-justify`,value:`justify`,"aria-label":`justify`})]}),(0,l.jsx)(r,{vertical:!0}),(0,l.jsxs)(a,{value:[],variant:`link`,onChange:e.onChange,children:[(0,l.jsx)(i,{icon:`mdi mdi-format-bold`,value:`bold`,"aria-label":`bold`}),(0,l.jsx)(i,{icon:`mdi mdi-format-italic`,value:`italic`,"aria-label":`italic`}),(0,l.jsx)(i,{icon:`mdi mdi-format-underline`,value:`undeline`,"aria-label":`undeline`})]})]})}),args:{onChange:u()}},h={render:e=>(0,l.jsx)(a,{...e}),args:{}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <div className="border border-soft p-1 flex gap-2 rounded">
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <ToggleButtonGroup {...args} />,
  args: {}
}`,...h.parameters?.docs?.source}}},g=[`_ToggleButtonGroup`,`SingleSelection`,`EditorToolbar`,`Tester`]}));_();export{m as EditorToolbar,p as SingleSelection,h as Tester,f as _ToggleButtonGroup,g as __namedExportsOrder,d as default,_ as n,s as t};