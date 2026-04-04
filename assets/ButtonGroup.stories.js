import{n as e,r as t}from"./chunk.js";import{t as n}from"./jsx-runtime.js";import{$ as r,C as i,Q as a,it as o,pt as s,t as c,tt as l}from"./src3.js";var u=t({SplitButton:()=>h,StretchButtons:()=>g,Tester:()=>_,_ButtonGroup:()=>m,__namedExportsOrder:()=>v,default:()=>p}),d,f,p,m,h,g,_,v,y=e((()=>{d=n(),c(),f=n(),p={component:s,subcomponents:{Navigator:i},title:`@core/components/ButtonGroup`,parameters:{layout:`centered`,controls:{exclude:/^(on.*|children|as)/},jest:[`core/tests/buttons/ButtonGroup.test.tsx`]},decorators:[e=>(0,f.jsx)(`div`,{className:`flex gap-2 items-center p-4`,children:(0,f.jsx)(e,{})})]},m={render:e=>(0,f.jsx)(d.Fragment,{children:(0,f.jsxs)(s,{...e,children:[(0,f.jsx)(r,{content:`Tester`,children:(0,f.jsx)(a,{children:`First`})}),(0,f.jsx)(a,{children:`Second`}),(0,f.jsx)(a,{children:`Third`}),e.className===`red`&&(0,f.jsx)(a,{children:`Four`})]})}),args:{}},h={render:e=>(0,f.jsx)(d.Fragment,{children:(0,f.jsxs)(s,{...e,children:[(0,f.jsx)(o,{ping:!0,children:(0,f.jsx)(a,{children:`Action`})}),(0,f.jsxs)(l,{fitToParent:!0,showArrow:!0,placement:`bottom-end`,children:[(0,f.jsx)(r,{content:`Tooltip`,children:(0,f.jsx)(a,{icon:`mdi mdi-chevron-down`,"aria-label":`Extra`})}),(0,f.jsx)(`div`,{className:`p-2`,children:`Dropdown`})]})]})}),args:{}},g={render:e=>(0,f.jsx)(d.Fragment,{children:(0,f.jsxs)(s,{...e,className:`w-[420px]`,children:[(0,f.jsx)(a,{className:`flex-1`,children:`First`}),(0,f.jsx)(a,{className:`flex-1`,children:`Second`}),(0,f.jsx)(a,{className:`flex-1`,children:`Third`}),(0,f.jsx)(a,{icon:`mdi mdi-react`,"aria-label":`Sample`})]})}),args:{}},_={render:e=>(0,f.jsx)(s,{...e}),args:{}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <ButtonGroup {...args}>
          <Tooltip content="Tester">
            <Button>First</Button>
          </Tooltip>
          <Button>Second</Button>
          <Button>Third</Button>
          {args.className === "red" && <Button>Four</Button>}
        </ButtonGroup>
      </Fragment>;
  },
  args: {}
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <ButtonGroup {...args}>
          <Badge ping>
            <Button>Action</Button>
          </Badge>
          <Dropdown fitToParent showArrow placement="bottom-end">
            <Tooltip content="Tooltip">
              <Button icon="mdi mdi-chevron-down" aria-label="Extra" />
            </Tooltip>
            <div className="p-2">Dropdown</div>
          </Dropdown>
        </ButtonGroup>
      </Fragment>;
  },
  args: {}
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <ButtonGroup {...args} className="w-[420px]">
          <Button className="flex-1">First</Button>
          <Button className="flex-1">Second</Button>
          <Button className="flex-1">Third</Button>
          <Button icon="mdi mdi-react" aria-label="Sample" />
        </ButtonGroup>
      </Fragment>;
  },
  args: {}
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <ButtonGroup {...args} />,
  args: {}
}`,..._.parameters?.docs?.source}}},v=[`_ButtonGroup`,`SplitButton`,`StretchButtons`,`Tester`]}));y();export{h as SplitButton,g as StretchButtons,_ as Tester,m as _ButtonGroup,v as __namedExportsOrder,p as default,y as n,u as t};