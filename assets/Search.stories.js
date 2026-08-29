import{n as e}from"./rolldown-runtime.js";import{t}from"./react.js";import{s as n}from"./EmptyContent.js";import{C as r,D as i,O as a,b as o,k as s,w as c,y as l}from"./useHotkeySequence.js";import{f as u,t as d}from"./src.js";import{Qt as f,Zt as p,t as m}from"./src2.js";import{t as h}from"./jsx-runtime.js";function g(e,t,n={}){let a={...s().hotkey,...n},c=p(),l=(0,_.useRef)(null),u=(0,_.useRef)(t),d=(0,_.useRef)(a),f=(0,_.useRef)(c);u.current=t,d.current=a,f.current=c;let m=(0,_.useRef)(null),h=(0,_.useRef)(null),g=o(e,a.platform??r()),{target:v,...y}=a;(0,_.useEffect)(()=>{let e=i(d.current.target)?d.current.target.current:d.current.target??(typeof document<`u`?document:null);if(!e){l.current?.isActive&&(l.current.unregister(),l.current=null),m.current=null,h.current=null;return}let t=m.current!==null&&m.current!==e,n=h.current!==null&&h.current!==g;return l.current?.isActive&&(t||n)&&(l.current.unregister(),l.current=null),(!l.current||!l.current.isActive)&&(l.current=f.current.register(g,u.current,{...d.current,target:e})),m.current=e,h.current=g,()=>{l.current?.isActive&&(l.current.unregister(),l.current=null)}},[g]),l.current?.isActive&&(l.current.callback=t,l.current.setOptions(y))}var _;function v(){return(v=e((()=>{a(),c(),f(),l(),_=t()})))()}var y,b,x,S,C,w;function T(){return(T=e((()=>{m(),d(),v(),y=t(),b=h(),{fn:x}=__STORYBOOK_MODULE_TEST__,S={component:u,title:`@form/Inputs`,parameters:{layout:`centered`,jest:[`form/tests/Search.test.tsx`]},decorators:[e=>(0,b.jsx)(`div`,{className:`max-w-lg w-screen`,children:(0,b.jsx)(e,{})})]},C={render:e=>{let t=(0,y.useRef)(null);return g(`Shift+/`,()=>{t.current?.focus()}),(0,b.jsx)(u,{...e,ref:t,decorateEnd:(0,b.jsx)(n,{keys:`shift+/`})})},args:{label:`Search input`,placeholder:`Search input...`,allowClear:!0,onChange:x(),onSearch:x(),onEnterPressed:x()}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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