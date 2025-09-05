import{j as e,aJ as o,aK as a,r as t}from"./iframe-6XIGnDH8.js";const x={component:a,subcomponents:{ProgressCircle:o},title:"@core/components/Progress",parameters:{layout:"centered",controls:{exclude:/^(on.*|children|as)/},jest:["core/tests/ProgressBar.test.tsx"]},decorators:[s=>e.jsx("div",{className:"max-w-2xl w-screen p-4",children:e.jsx(s,{})})]},n={render:s=>{const[r,c]=t.useState(0);return t.useEffect(()=>{setTimeout(()=>{c(r>.99?0:r+.01)},100)},[r]),e.jsx(e.Fragment,{children:e.jsx(a,{...s,value:r})})},args:{}},l={render:s=>{const[r,c]=t.useState(0);return t.useEffect(()=>{setTimeout(()=>{c(r>.99?0:r+.01)},100)},[r]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(a,{...s,color:"primary-500",value:r}),e.jsx(a,{...s,size:"md",color:"accent-500",value:r}),e.jsx(a,{...s,size:"lg",color:"danger-500",value:r}),e.jsx(a,{...s,size:"xl",color:"warning-500",value:r}),e.jsxs("div",{className:"flex gap-2 items-center justify-center py-4",children:[e.jsx(o,{...s,color:"primary-500",value:r}),e.jsx(o,{...s,size:"md",color:"accent-500",value:r}),e.jsx(o,{...s,size:"lg",color:"danger-500",value:r}),e.jsx(o,{...s,size:"xl",color:"warning-500",value:r})]})]})})},args:{}};var u,i,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(i=n.parameters)==null?void 0:i.docs)==null?void 0:g.source}}};var m,d,v;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(v=(d=l.parameters)==null?void 0:d.docs)==null?void 0:v.source}}};const p=["_ProgressBar","Colors"],f=Object.freeze(Object.defineProperty({__proto__:null,Colors:l,_ProgressBar:n,__namedExportsOrder:p,default:x},Symbol.toStringTag,{value:"Module"}));export{l as C,f as P,n as _};
