import{a as e,n as t}from"./chunk.js";import{t as n}from"./react.js";import{t as r}from"./jsx-runtime.js";import{b as i,t as a}from"./src3.js";var o,s,c,l,u,d,f=t((()=>{o=e(n()),s=r(),a(),c=r(),l={component:i,title:`@core/components/Progress`,parameters:{layout:`centered`,controls:{exclude:/^(on.*|children|as)/},jest:[`core/tests/ProgressCircle.test.tsx`]},decorators:[e=>(0,c.jsx)(`div`,{className:`max-w-2xl p-4`,children:(0,c.jsx)(e,{})})]},u={render:e=>{let[t,n]=(0,o.useState)(0);return(0,o.useEffect)(()=>{setTimeout(()=>{n(t>.99?0:t+.01)},100)},[t]),(0,c.jsx)(s.Fragment,{children:(0,c.jsx)(i,{...e,value:t})})},args:{size:`lg`}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(0);
    useEffect(() => {
      setTimeout(() => {
        setValue(value > 0.99 ? 0.0 : value + 0.01);
      }, 100);
    }, [value]);
    return <Fragment>
        <ProgressCircle {...args} value={value} />
      </Fragment>;
  },
  args: {
    size: "lg"
  }
}`,...u.parameters?.docs?.source}}},d=[`_ProgressCircle`]}));f();export{u as _ProgressCircle,d as __namedExportsOrder,l as default,f as t};