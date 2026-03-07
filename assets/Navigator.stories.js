import{r as c,j as r,ak as i}from"./iframe-BmpICDQJ.js";const h=(e=0,o=0)=>{const[a,d]=c.useState(o),v=c.useCallback(g=>{d(s=>g===-1?s>0?s-1:e-1:g===1?s+1<e?s+1:0:s)},[e]);return{headLabel:c.useMemo(()=>r.jsxs("span",{className:"text-muted leading-none select-none",children:[a+1,"/",e]}),[a,e]),onNavigate:v,currentIndex:a,setCurrentIndex:d}},f={component:i,title:"@core/components/ButtonGroup",parameters:{layout:"centered",controls:{exclude:/^(on.*|children|as)/},jest:["core/tests/buttons/Navigator.test.tsx"]},decorators:[e=>r.jsx("div",{className:"flex gap-2 items-center p-4",children:r.jsx(e,{})})]},t={render:e=>{const{headLabel:o,onNavigate:a}=h(99);return r.jsxs("div",{className:"flex gap-4 items-center",children:[o,r.jsx(i,{onNavigate:a})]})},args:{}},n={render:e=>r.jsx(i,{...e}),args:{}};var m,l,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var x,N,p;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <Navigator {...args} />,
  args: {}
}`,...(p=(N=n.parameters)==null?void 0:N.docs)==null?void 0:p.source}}};const L=["_Navigator","NavTester"];export{n as NavTester,t as _Navigator,L as __namedExportsOrder,f as default};
