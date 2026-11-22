import{n as e}from"./rolldown-runtime.js";import{t}from"./react.js";import{s as n}from"./EmptyContent.js";import{l as r,u as i}from"./dist.js";import{C as a,D as o,O as s,b as c,k as l,w as u,y as d}from"./useHotkeySequence.js";import{f,t as p}from"./src.js";import{t as m}from"./jsx-runtime.js";import{t as h}from"./src2.js";function g(e,t,n={}){let i={...l().hotkey,...n},s=r(),u=(0,_.useRef)(null),d=(0,_.useRef)(t),f=(0,_.useRef)(i),p=(0,_.useRef)(s);d.current=t,f.current=i,p.current=s;let m=(0,_.useRef)(null),h=(0,_.useRef)(null),g=c(e,i.platform??a()),{target:v,...y}=i;(0,_.useEffect)(()=>{let e=o(f.current.target)?f.current.target.current:f.current.target??(typeof document<`u`?document:null);if(!e){u.current?.isActive&&(u.current.unregister(),u.current=null),m.current=null,h.current=null;return}let t=m.current!==null&&m.current!==e,n=h.current!==null&&h.current!==g;return u.current?.isActive&&(t||n)&&(u.current.unregister(),u.current=null),u.current&&u.current.isActive||(u.current=p.current.register(g,d.current,{...f.current,target:e})),m.current=e,h.current=g,()=>{u.current?.isActive&&(u.current.unregister(),u.current=null)}},[g]),u.current?.isActive&&(u.current.callback=t,u.current.setOptions(y))}var _;function v(){return(v=e((()=>{s(),u(),i(),d(),_=t()})))()}var y,b,x,S,C,w;function T(){return(T=e((()=>{h(),p(),v(),y=t(),b=m(),{fn:x}=__STORYBOOK_MODULE_TEST__,S={component:f,title:`@form/Inputs`,parameters:{layout:`centered`,jest:[`form/tests/Search.test.tsx`]},decorators:[e=>(0,b.jsx)(`div`,{className:`max-w-lg w-screen`,children:(0,b.jsx)(e,{})})]},C={render:e=>{let t=(0,y.useRef)(null);return g(`Shift+/`,()=>{t.current?.focus()}),(0,b.jsx)(f,{...e,ref:t,decorateEnd:(0,b.jsx)(n,{keys:`shift+/`})})},args:{label:`Search input`,placeholder:`Search input...`,allowClear:!0,onChange:x(),onSearch:x(),onEnterPressed:x()}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => {
    const elRef = useRef<HTMLInputElement>(null);
    useHotkey("Shift+/" as any, () => {
      elRef.current?.focus();
    });
    return <Search {...args} ref={elRef} decorateEnd={<Kbd keys="shift+/" />} />;
  },
  args: {
    label: "Search input",
    placeholder: "Search input...",
    allowClear: true,
    onChange: fn(),
    onSearch: fn(),
    onEnterPressed: fn()
  }
}`,...C.parameters?.docs?.source}}},w=[`_Search`]})))()}T();export{C as _Search,w as __namedExportsOrder,S as default};