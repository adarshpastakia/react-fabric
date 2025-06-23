import{j as r,ai as F,ah as c,a6 as T,a3 as t,ad as N,aj as f}from"./iframe-wCO-hNtP.js";const w={component:c,subcomponents:{Navigator:F},title:"@core/components/ButtonGroup",parameters:{layout:"centered",controls:{exclude:/^(on.*|children|as)/},jest:["core/tests/buttons/ButtonGroup.test.tsx"]},decorators:[e=>r.jsx("div",{className:"flex gap-2 items-center p-4",children:r.jsx(e,{})})]},n={render:e=>r.jsx(r.Fragment,{children:r.jsxs(c,{...e,children:[r.jsx(T,{content:"Tester",children:r.jsx(t,{children:"First"})}),r.jsx(t,{children:"Second"}),r.jsx(t,{children:"Third"}),e.className==="red"&&r.jsx(t,{children:"Four"})]})}),args:{}},o={render:e=>r.jsx(r.Fragment,{children:r.jsxs(c,{...e,children:[r.jsx(N,{ping:!0,children:r.jsx(t,{children:"Action"})}),r.jsxs(f,{fitToParent:!0,showArrow:!0,placement:"bottom-end",children:[r.jsx(T,{content:"Tooltip",children:r.jsx(t,{icon:"mdi mdi-chevron-down","aria-label":"Extra"})}),r.jsx("div",{className:"p-2",children:"Dropdown"})]})]})}),args:{}},s={render:e=>r.jsx(r.Fragment,{children:r.jsxs(c,{...e,className:"w-[420px]",children:[r.jsx(t,{className:"flex-1",children:"First"}),r.jsx(t,{className:"flex-1",children:"Second"}),r.jsx(t,{className:"flex-1",children:"Third"}),r.jsx(t,{icon:"mdi mdi-react","aria-label":"Sample"})]})}),args:{}},a={render:e=>r.jsx(c,{...e}),args:{}};var d,i,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(i=n.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var l,p,m;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var x,B,g;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(g=(B=s.parameters)==null?void 0:B.docs)==null?void 0:g.source}}};var h,j,S;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <ButtonGroup {...args} />,
  args: {}
}`,...(S=(j=a.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};const G=["_ButtonGroup","SplitButton","StretchButtons","Tester"],_=Object.freeze(Object.defineProperty({__proto__:null,SplitButton:o,StretchButtons:s,Tester:a,_ButtonGroup:n,__namedExportsOrder:G,default:w},Symbol.toStringTag,{value:"Module"}));export{_ as B,o as S,n as _,s as a};
