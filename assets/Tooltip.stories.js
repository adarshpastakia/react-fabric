import{j as e,a6 as r,a3 as T,ae as h,a4 as n,ab as u}from"./iframe-BTaJxP5y.js";const C={component:r,title:"@core/components/Tooltip",parameters:{layout:"centered",controls:{exclude:/^(on.*|children|as)/},jest:["core/tests/Tooltip.test.tsx"]},decorators:[o=>e.jsx("div",{className:"flex gap-2 items-center p-4",children:e.jsx(o,{})})]},t={render:o=>e.jsxs(e.Fragment,{children:[e.jsx(r,{...o,children:e.jsx(T,{as:"a",children:"Button with tooltip"})}),e.jsx(r,{...o,children:e.jsx(h,{children:"Card with tooltip"})}),e.jsx(r,{...o,children:e.jsx(n,{size:"3rem",icon:"mdi mdi-react"})}),e.jsx(r,{...o,children:e.jsx(u,{size:"3rem",name:"Avatar"})})]}),args:{content:"Tooltip content"}},i={render:o=>e.jsxs(e.Fragment,{children:[e.jsx(r,{...o,children:e.jsx(n,{size:"3rem",icon:"mdi mdi-react"})}),e.jsx(r,{...o,color:"primary-200",textColor:"primary-800",children:e.jsx(n,{size:"3rem",icon:"mdi mdi-react",color:"primary"})}),e.jsx(r,{...o,color:"accent-200",textColor:"accent-800",children:e.jsx(n,{size:"3rem",icon:"mdi mdi-react",color:"accent"})}),e.jsx(r,{...o,color:"info-200",textColor:"info-800",children:e.jsx(n,{size:"3rem",icon:"mdi mdi-react",color:"info"})}),e.jsx(r,{...o,color:"danger-200",textColor:"danger-800",children:e.jsx(n,{size:"3rem",icon:"mdi mdi-react",color:"danger"})}),e.jsx(r,{...o,color:"success-200",textColor:"success-800",children:e.jsx(n,{size:"3rem",icon:"mdi mdi-react",color:"success"})}),e.jsx(r,{...o,color:"warning-200",textColor:"warning-800",children:e.jsx(n,{size:"3rem",icon:"mdi mdi-react",color:"warning"})})]}),args:{content:"Tooltip content"}},s={render:o=>e.jsx(e.Fragment,{children:e.jsx(r,{...o,content:e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx(u,{size:"2rem",rounded:!0,name:"Smeghead"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"text-md",children:"Smegheads"}),e.jsx("div",{className:"text-sm",children:"Boys from the dawrf!"})]})]}),children:e.jsx(n,{size:"3rem",icon:"mdi mdi-react"})})}),args:{copyContent:"Smeg"}};var c,a,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Tooltip {...args}>
          <Button as="a">Button with tooltip</Button>
        </Tooltip>
        <Tooltip {...args}>
          <Card>Card with tooltip</Card>
        </Tooltip>
        <Tooltip {...args}>
          <Icon size="3rem" icon="mdi mdi-react" />
        </Tooltip>
        <Tooltip {...args}>
          <Avatar size="3rem" name="Avatar" />
        </Tooltip>
      </Fragment>;
  },
  args: {
    content: "Tooltip content"
  }
}`,...(l=(a=t.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var m,d,p;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Tooltip {...args}>
          <Icon size="3rem" icon="mdi mdi-react" />
        </Tooltip>
        <Tooltip {...args} color="primary-200" textColor="primary-800">
          <Icon size="3rem" icon="mdi mdi-react" color="primary" />
        </Tooltip>
        <Tooltip {...args} color="accent-200" textColor="accent-800">
          <Icon size="3rem" icon="mdi mdi-react" color="accent" />
        </Tooltip>
        <Tooltip {...args} color="info-200" textColor="info-800">
          <Icon size="3rem" icon="mdi mdi-react" color="info" />
        </Tooltip>
        <Tooltip {...args} color="danger-200" textColor="danger-800">
          <Icon size="3rem" icon="mdi mdi-react" color="danger" />
        </Tooltip>
        <Tooltip {...args} color="success-200" textColor="success-800">
          <Icon size="3rem" icon="mdi mdi-react" color="success" />
        </Tooltip>
        <Tooltip {...args} color="warning-200" textColor="warning-800">
          <Icon size="3rem" icon="mdi mdi-react" color="warning" />
        </Tooltip>
      </Fragment>;
  },
  args: {
    content: "Tooltip content"
  }
}`,...(p=(d=i.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var x,g,j;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Tooltip {...args} content={<div className="flex gap-2 items-center">
              <Avatar size="2rem" rounded name="Smeghead" />
              <div className="flex-1">
                <div className="text-md">Smegheads</div>
                <div className="text-sm">Boys from the dawrf!</div>
              </div>
            </div>}>
          <Icon size="3rem" icon="mdi mdi-react" />
        </Tooltip>
      </Fragment>;
  },
  args: {
    copyContent: "Smeg"
  }
}`,...(j=(g=s.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};const z=["_Tooltip","Colors","StyledContent"],v=Object.freeze(Object.defineProperty({__proto__:null,Colors:i,StyledContent:s,_Tooltip:t,__namedExportsOrder:z,default:C},Symbol.toStringTag,{value:"Module"}));export{i as C,s as S,v as T,t as _};
