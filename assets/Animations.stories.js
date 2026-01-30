import{j as e,a9 as x,aa as j,ab as A,a8 as n,r as o}from"./iframe-DpfJK_wQ.js";const f={component:n,subcomponents:{AnimationBars:A,AnimationSpinner:j,Skeleton:x},title:"@core/components/Animations",parameters:{layout:"centered",controls:{exclude:/^(on.*|children|as)/},jest:["core/tests/animations/Animations.test.tsx"]},decorators:[t=>e.jsx("div",{className:"flex gap-2 items-center p-4 h-12",children:e.jsx(t,{})})]},a={render:t=>{const[s,u]=o.useState(!1);return o.useEffect(()=>{const g=setInterval(()=>u(!s),s?2e3:200);return()=>{clearInterval(g)}},[s]),e.jsx(e.Fragment,{children:s&&e.jsxs(e.Fragment,{children:[e.jsx(n,{type:"check",...t}),e.jsx(n,{type:"cross",...t}),e.jsx(n,{type:"info",...t}),e.jsx(n,{type:"exclaim",...t}),e.jsx(n,{type:"question",...t})]})})},args:{}},r={render:t=>e.jsx(n,{...t}),args:{}};var i,c,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,d,l;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <AnimationIndicator {...args} />,
  args: {}
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const y=["_Animations","Tester"],I=Object.freeze(Object.defineProperty({__proto__:null,Tester:r,_Animations:a,__namedExportsOrder:y,default:f},Symbol.toStringTag,{value:"Module"}));export{I as A,a as _};
