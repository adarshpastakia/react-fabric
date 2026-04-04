import{a as e,n as t,r as n}from"./chunk.js";import{t as r}from"./react.js";import{t as i}from"./jsx-runtime.js";import{ct as a,dt as o,lt as s,t as c,ut as l}from"./src3.js";var u=n({Tester:()=>g,_Animations:()=>h,__namedExportsOrder:()=>_,default:()=>m}),d,f,p,m,h,g,_,v=t((()=>{d=e(r()),f=i(),c(),p=i(),m={component:a,subcomponents:{AnimationBars:s,AnimationSpinner:l,Skeleton:o},title:`@core/components/Animations`,parameters:{layout:`centered`,controls:{exclude:/^(on.*|children|as)/},jest:[`core/tests/animations/Animations.test.tsx`]},decorators:[e=>(0,p.jsx)(`div`,{className:`flex gap-2 items-center p-4 h-12`,children:(0,p.jsx)(e,{})})]},h={render:e=>{let[t,n]=(0,d.useState)(!1);return(0,d.useEffect)(()=>{let e=setInterval(()=>n(!t),t?2e3:200);return()=>{clearInterval(e)}},[t]),(0,p.jsx)(f.Fragment,{children:t&&(0,p.jsxs)(f.Fragment,{children:[(0,p.jsx)(a,{type:`check`,...e}),(0,p.jsx)(a,{type:`cross`,...e}),(0,p.jsx)(a,{type:`info`,...e}),(0,p.jsx)(a,{type:`exclaim`,...e}),(0,p.jsx)(a,{type:`question`,...e})]})})},args:{}},g={render:e=>(0,p.jsx)(a,{...e}),args:{}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [state, setState] = useState(false);
    useEffect(() => {
      const tmr = setInterval(() => setState(!state), state ? 2000 : 200);
      return () => {
        clearInterval(tmr);
      };
    }, [state]);
    return <Fragment>
        {state && <Fragment>
            <AnimationIndicator type="check" {...args} />
            <AnimationIndicator type="cross" {...args} />
            <AnimationIndicator type="info" {...args} />
            <AnimationIndicator type="exclaim" {...args} />
            <AnimationIndicator type="question" {...args} />
          </Fragment>}
      </Fragment>;
  },
  args: {}
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <AnimationIndicator {...args} />,
  args: {}
}`,...g.parameters?.docs?.source}}},_=[`_Animations`,`Tester`]}));v();export{g as Tester,h as _Animations,_ as __namedExportsOrder,m as default,v as n,u as t};