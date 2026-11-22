import{n as e}from"./rolldown-runtime.js";import{t}from"./jsx-runtime.js";import{nt as n,t as r,wt as i}from"./src2.js";var a,o,s,c,l;function u(){return(u=e((()=>{r(),a=t(),o={component:i,tags:[`autodocs`],title:`@core/components/Tooltip`,parameters:{layout:`centered`,jest:[`core/tests/components/Tooltip.test.tsx`]},decorators:[e=>(0,a.jsx)(`div`,{className:`flex gap-2 items-center p-4`,children:(0,a.jsx)(e,{})})]},s={render:e=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i,{...e,children:(0,a.jsx)(`div`,{className:`outline p-2`,children:`Hover Me!`})}),(0,a.jsx)(i,{...e,copyContent:!0,children:(0,a.jsx)(`div`,{className:`outline p-2`,children:`Copyable tooltip!`})})]}),args:{content:`Tooltip Content`}},c={render:e=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i,{...e,children:(0,a.jsx)(`div`,{className:`outline p-2`,children:`Hover Me!`})}),(0,a.jsx)(i,{...e,copyContent:`Title`,children:(0,a.jsx)(`div`,{className:`outline p-2`,children:`Copyable tooltip!`})})]}),args:{content:(0,a.jsxs)(`div`,{className:`flex gap-2`,children:[(0,a.jsx)(n,{name:`John Doe`,size:`3rem`}),(0,a.jsxs)(`div`,{className:`flex-1`,children:[(0,a.jsx)(`h5`,{children:`Title`}),(0,a.jsx)(`span`,{children:`Tooltip description goes here.`})]})]})}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l=[`_Tooltip`,`CustomContent`]})))()}u();export{c as CustomContent,s as _Tooltip,l as __namedExportsOrder,o as default};