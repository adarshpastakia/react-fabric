import{n as e,r as t}from"./chunk.js";import{t as n}from"./jsx-runtime.js";import{$ as r,Q as i,W as a,at as o,st as s,t as c}from"./src3.js";var l=t({Colors:()=>m,StyledContent:()=>h,_Tooltip:()=>p,__namedExportsOrder:()=>g,default:()=>f}),u,d,f,p,m,h,g,_=e((()=>{u=n(),c(),d=n(),f={component:r,title:`@core/components/Tooltip`,parameters:{layout:`centered`,controls:{exclude:/^(on.*|children|as)/},jest:[`core/tests/Tooltip.test.tsx`]},decorators:[e=>(0,d.jsx)(`div`,{className:`flex gap-2 items-center p-4`,children:(0,d.jsx)(e,{})})]},p={render:e=>(0,d.jsxs)(u.Fragment,{children:[(0,d.jsx)(r,{...e,children:(0,d.jsx)(i,{as:`a`,children:`Button with tooltip`})}),(0,d.jsx)(r,{...e,children:(0,d.jsx)(a,{children:`Card with tooltip`})}),(0,d.jsx)(r,{...e,children:(0,d.jsx)(o,{size:`3rem`,icon:`mdi mdi-react`})}),(0,d.jsx)(r,{...e,children:(0,d.jsx)(s,{size:`3rem`,name:`Avatar`})})]}),args:{content:`Tooltip content`}},m={render:e=>(0,d.jsxs)(u.Fragment,{children:[(0,d.jsx)(r,{...e,children:(0,d.jsx)(o,{size:`3rem`,icon:`mdi mdi-react`})}),(0,d.jsx)(r,{...e,color:`primary-200`,textColor:`primary-800`,children:(0,d.jsx)(o,{size:`3rem`,icon:`mdi mdi-react`,color:`primary`})}),(0,d.jsx)(r,{...e,color:`accent-200`,textColor:`accent-800`,children:(0,d.jsx)(o,{size:`3rem`,icon:`mdi mdi-react`,color:`accent`})}),(0,d.jsx)(r,{...e,color:`info-200`,textColor:`info-800`,children:(0,d.jsx)(o,{size:`3rem`,icon:`mdi mdi-react`,color:`info`})}),(0,d.jsx)(r,{...e,color:`danger-200`,textColor:`danger-800`,children:(0,d.jsx)(o,{size:`3rem`,icon:`mdi mdi-react`,color:`danger`})}),(0,d.jsx)(r,{...e,color:`success-200`,textColor:`success-800`,children:(0,d.jsx)(o,{size:`3rem`,icon:`mdi mdi-react`,color:`success`})}),(0,d.jsx)(r,{...e,color:`warning-200`,textColor:`warning-800`,children:(0,d.jsx)(o,{size:`3rem`,icon:`mdi mdi-react`,color:`warning`})})]}),args:{content:`Tooltip content`}},h={render:e=>(0,d.jsx)(u.Fragment,{children:(0,d.jsx)(r,{...e,content:(0,d.jsxs)(`div`,{className:`flex gap-2 items-center`,children:[(0,d.jsx)(s,{size:`2rem`,rounded:!0,name:`Smeghead`}),(0,d.jsxs)(`div`,{className:`flex-1`,children:[(0,d.jsx)(`div`,{className:`text-md`,children:`Smegheads`}),(0,d.jsx)(`div`,{className:`text-sm`,children:`Boys from the dawrf!`})]})]}),children:(0,d.jsx)(o,{size:`3rem`,icon:`mdi mdi-react`})})}),args:{copyContent:`Smeg`}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g=[`_Tooltip`,`Colors`,`StyledContent`]}));_();export{m as Colors,h as StyledContent,p as _Tooltip,g as __namedExportsOrder,f as default,_ as n,l as t};