import{r as n,j as a,ai as i}from"./iframe-CVyMRGSP.js";const h=(e=0,t=0)=>{const[s,d]=n.useState(t),r=n.useRef(t),x=n.useCallback(u=>{u===-1&&(r.current=r.current>0?r.current-1:e-1),u===1&&(r.current=r.current+1<e?r.current+1:0),d(r.current)},[e]);return{headLabel:n.useMemo(()=>a.jsxs("span",{className:"text-muted leading-none select-none",children:[s+1,"/",e]}),[s,e]),onNavigate:x,currentIndex:s,setCurrentIndex:d}},b={component:i,title:"@core/components/ButtonGroup",parameters:{layout:"centered",controls:{exclude:/^(on.*|children|as)/},jest:["core/tests/buttons/Navigator.test.tsx"]},decorators:[e=>a.jsx("div",{className:"flex gap-2 items-center p-4",children:a.jsx(e,{})})]},o={render:e=>{const{headLabel:t,onNavigate:s}=h(99);return a.jsxs("div",{className:"flex gap-4 items-center",children:[t,a.jsx(i,{onNavigate:s})]})},args:{}},c={render:e=>a.jsx(i,{...e}),args:{}};var g,m,l;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(l=(m=o.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var p,v,N;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <Navigator {...args} />,
  args: {}
}`,...(N=(v=c.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};const L=["_Navigator","NavTester"];export{c as NavTester,o as _Navigator,L as __namedExportsOrder,b as default};
