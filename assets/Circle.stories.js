import{j as e,aH as l,r as a}from"./iframe-wCO-hNtP.js";const i={component:l,title:"@core/components/Progress",parameters:{layout:"centered",controls:{exclude:/^(on.*|children|as)/},jest:["core/tests/ProgressCircle.test.tsx"]},decorators:[t=>e.jsx("div",{className:"max-w-2xl p-4",children:e.jsx(t,{})})]},s={render:t=>{const[r,u]=a.useState(0);return a.useEffect(()=>{setTimeout(()=>{u(r>.99?0:r+.01)},100)},[r]),e.jsx(e.Fragment,{children:e.jsx(l,{...t,value:r})})},args:{size:"lg"}};var n,o,c;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(c=(o=s.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const g=["_ProgressCircle"];export{s as _ProgressCircle,g as __namedExportsOrder,i as default};
