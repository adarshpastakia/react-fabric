import{n as e}from"./rolldown-runtime.js";import{nt as t,t as n,wt as r}from"./src2.js";import{t as i}from"./jsx-runtime.js";var a,o,s,c,l,u;function d(){return(d=e((()=>{n(),a=i(),o=i(),s={component:r,tags:[`autodocs`],title:`@core/components/Tooltip`,parameters:{layout:`centered`,jest:[`core/tests/components/Tooltip.test.tsx`]},decorators:[e=>(0,o.jsx)(`div`,{className:`flex gap-2 items-center p-4`,children:(0,o.jsx)(e,{})})]},c={render:e=>(0,o.jsxs)(a.Fragment,{children:[(0,o.jsx)(r,{...e,children:(0,o.jsx)(`div`,{className:`outline p-2`,children:`Hover Me!`})}),(0,o.jsx)(r,{...e,copyContent:!0,children:(0,o.jsx)(`div`,{className:`outline p-2`,children:`Copyable tooltip!`})})]}),args:{content:`Tooltip Content`}},l={render:e=>(0,o.jsxs)(a.Fragment,{children:[(0,o.jsx)(r,{...e,children:(0,o.jsx)(`div`,{className:`outline p-2`,children:`Hover Me!`})}),(0,o.jsx)(r,{...e,copyContent:`Title`,children:(0,o.jsx)(`div`,{className:`outline p-2`,children:`Copyable tooltip!`})})]}),args:{content:(0,o.jsxs)(`div`,{className:`flex gap-2`,children:[(0,o.jsx)(t,{name:`John Doe`,size:`3rem`}),(0,o.jsxs)(`div`,{className:`flex-1`,children:[(0,o.jsx)(`h5`,{children:`Title`}),(0,o.jsx)(`span`,{children:`Tooltip description goes here.`})]})]})}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Tooltip {...args}>
          <div className="outline p-2">Hover Me!</div>
        </Tooltip>
        <Tooltip {...args} copyContent>
          <div className="outline p-2">Copyable tooltip!</div>
        </Tooltip>
      </Fragment>;
  },
  args: {
    content: "Tooltip Content"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Fragment>
        <Tooltip {...args}>
          <div className="outline p-2">Hover Me!</div>
        </Tooltip>
        <Tooltip {...args} copyContent="Title">
          <div className="outline p-2">Copyable tooltip!</div>
        </Tooltip>
      </Fragment>;
  },
  args: {
    content: <div className="flex gap-2">
        <Avatar name="John Doe" size="3rem" />
        <div className="flex-1">
          <h5>Title</h5>
          <span>Tooltip description goes here.</span>
        </div>
      </div>
  }
}`,...l.parameters?.docs?.source}}},u=[`_Tooltip`,`CustomContent`]})))()}d();export{l as CustomContent,c as _Tooltip,u as __namedExportsOrder,s as default};