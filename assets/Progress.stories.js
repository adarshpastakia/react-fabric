import{a as e,n as t,r as n}from"./chunk.js";import{t as r}from"./react.js";import{t as i}from"./jsx-runtime.js";import{b as a,t as o,y as s}from"./src3.js";var c=n({Colors:()=>m,_ProgressBar:()=>p,__namedExportsOrder:()=>h,default:()=>f}),l,u,d,f,p,m,h,g=t((()=>{l=e(r()),u=i(),o(),d=i(),f={component:a,subcomponents:{ProgressCircle:s},title:`@core/components/Progress`,parameters:{layout:`centered`,controls:{exclude:/^(on.*|children|as)/},jest:[`core/tests/ProgressBar.test.tsx`]},decorators:[e=>(0,d.jsx)(`div`,{className:`max-w-2xl w-screen p-4`,children:(0,d.jsx)(e,{})})]},p={render:e=>{let[t,n]=(0,l.useState)(0);return(0,l.useEffect)(()=>{setTimeout(()=>{n(t>.99?0:t+.01)},100)},[t]),(0,d.jsx)(u.Fragment,{children:(0,d.jsx)(a,{...e,value:t})})},args:{}},m={render:e=>{let[t,n]=(0,l.useState)(0);return(0,l.useEffect)(()=>{setTimeout(()=>{n(t>.99?0:t+.01)},100)},[t]),(0,d.jsx)(u.Fragment,{children:(0,d.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,d.jsx)(a,{...e,color:`primary-500`,value:t}),(0,d.jsx)(a,{...e,size:`md`,color:`accent-500`,value:t}),(0,d.jsx)(a,{...e,size:`lg`,color:`danger-500`,value:t}),(0,d.jsx)(a,{...e,size:`xl`,color:`warning-500`,value:t}),(0,d.jsxs)(`div`,{className:`flex gap-2 items-center justify-center py-4`,children:[(0,d.jsx)(s,{...e,color:`primary-500`,value:t}),(0,d.jsx)(s,{...e,size:`md`,color:`accent-500`,value:t}),(0,d.jsx)(s,{...e,size:`lg`,color:`danger-500`,value:t}),(0,d.jsx)(s,{...e,size:`xl`,color:`warning-500`,value:t})]})]})})},args:{}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(0);
    useEffect(() => {
      setTimeout(() => {
        setValue(value > 0.99 ? 0.0 : value + 0.01);
      }, 100);
    }, [value]);
    return <Fragment>
        <ProgressBar {...args} value={value} />
      </Fragment>;
  },
  args: {}
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(0);
    useEffect(() => {
      setTimeout(() => {
        setValue(value > 0.99 ? 0.0 : value + 0.01);
      }, 100);
    }, [value]);
    return <Fragment>
        <div className="flex flex-col gap-2">
          <ProgressBar {...args} color="primary-500" value={value} />
          <ProgressBar {...args} size="md" color="accent-500" value={value} />
          <ProgressBar {...args} size="lg" color="danger-500" value={value} />
          <ProgressBar {...args} size="xl" color="warning-500" value={value} />

          <div className="flex gap-2 items-center justify-center py-4">
            <ProgressCircle {...args as any} color="primary-500" value={value} />
            <ProgressCircle {...args} size="md" color="accent-500" value={value} />
            <ProgressCircle {...args} size="lg" color="danger-500" value={value} />
            <ProgressCircle {...args} size="xl" color="warning-500" value={value} />
          </div>
        </div>
      </Fragment>;
  },
  args: {}
}`,...m.parameters?.docs?.source}}},h=[`_ProgressBar`,`Colors`]}));g();export{m as Colors,p as _ProgressBar,h as __namedExportsOrder,f as default,g as n,c as t};