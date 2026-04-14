import{n as e}from"./chunk.js";import{t}from"./jsx-runtime.js";import{i as n,t as r,w as i}from"./src3.js";var a,o,s,c,l,u=e((()=>{r(),a=t(),o={component:i,title:`@core/components/ButtonGroup`,parameters:{layout:`centered`,controls:{exclude:/^(on.*|children|as)/},jest:[`core/tests/buttons/Navigator.test.tsx`]},decorators:[e=>(0,a.jsx)(`div`,{className:`flex gap-2 items-center p-4`,children:(0,a.jsx)(e,{})})]},s={render:e=>{let{headLabel:t,onNavigate:r}=n(99);return(0,a.jsxs)(`div`,{className:`flex gap-4 items-center`,children:[t,(0,a.jsx)(i,{onNavigate:r})]})},args:{}},c={render:e=>(0,a.jsx)(i,{...e}),args:{}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      headLabel,
      onNavigate
    } = useNavigator(99);
    return <div className="flex gap-4 items-center">
        {headLabel}
        <Navigator onNavigate={onNavigate} />
      </div>;
  },
  args: {}
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <Navigator {...args} />,
  args: {}
}`,...c.parameters?.docs?.source}}},l=[`_Navigator`,`NavTester`]}));u();export{c as NavTester,s as _Navigator,l as __namedExportsOrder,o as default,u as t};