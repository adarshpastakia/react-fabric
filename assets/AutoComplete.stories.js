import{n as e,r as t}from"./rolldown-runtime.js";import{c as n,t as r}from"./src.js";import{t as i}from"./jsx-runtime.js";import{Wt as a,t as o}from"./src2.js";import{d as s,t as c,u as l}from"./src6.js";function u(e,t){let n=e.filter(e=>!s(e));return t?Array.from(new Map(n.map(e=>[e[t],e])).values()):Array.from(new Set(n).values())}function d(){return(d=e((()=>{l()})))()}var f=t({Multiple:()=>_,WithHistory:()=>v,_AutoComplete:()=>g,__namedExportsOrder:()=>y,default:()=>h}),p,m,h,g,_,v,y;function b(){return(b=e((()=>{o(),r(),d(),c(),p=i(),{fn:m}=__STORYBOOK_MODULE_TEST__,h={component:n,title:`@form/AutoComplete`,parameters:{layout:`centered`,jest:[`form/tests/AutoComplete.test.tsx`]},decorators:[e=>(0,p.jsx)(`div`,{className:`max-w-lg w-screen`,children:(0,p.jsx)(e,{})})]},g={render:e=>(0,p.jsx)(n,{...e,multiple:!1}),args:{label:`AutoComplete`,placeholder:`AutoComplete...`,allowClear:!0,onEnterPressed:m(),onChange:m(),history:[`anchor`,`tester`,`arkwright`]}},_={render:e=>(0,p.jsx)(n,{...e,multiple:!0}),args:{label:`AutoComplete`,placeholder:`AutoComplete...`,allowClear:!0,onEnterPressed:m(),onChange:m(),history:[`anchor`,`tester`,`arkwright`,`granville`,`lister`,`smeghead`,`kryten`]}},v={render:e=>{let[t,r]=a(`autocomplete:history`,e.history??[]),i=(e=[])=>{r(u([e,...t].flat()).slice(0,50))};return(0,p.jsx)(n,{...e,multiple:!0,history:t,onSelect:i})},args:{label:`AutoComplete`,placeholder:`AutoComplete...`,allowClear:!0,onEnterPressed:m(),onChange:m(),history:[`anchor`,`tester`,`arkwright`,`granville`,`lister`,`smeghead`,`kryten`]}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <AutoComplete {...args} multiple={false} />;
  },
  args: {
    label: "AutoComplete",
    placeholder: "AutoComplete...",
    allowClear: true,
    onEnterPressed: fn(),
    onChange: fn(),
    history: ["anchor", "tester", "arkwright"]
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <AutoComplete {...args} multiple />;
  },
  args: {
    label: "AutoComplete",
    placeholder: "AutoComplete...",
    allowClear: true,
    onEnterPressed: fn(),
    onChange: fn(),
    history: ["anchor", "tester", "arkwright", "granville", "lister", "smeghead", "kryten"]
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [history, setHistory] = useLocalStorage<string[]>("autocomplete:history", args.history ?? []);
    const updateHistory = (values: string[] = []) => {
      setHistory(dedupe([values, ...history].flat()).slice(0, 50));
    };
    return <AutoComplete {...args} multiple history={history} onSelect={updateHistory} />;
  },
  args: {
    label: "AutoComplete",
    placeholder: "AutoComplete...",
    allowClear: true,
    onEnterPressed: fn(),
    onChange: fn(),
    history: ["anchor", "tester", "arkwright", "granville", "lister", "smeghead", "kryten"]
  }
}`,...v.parameters?.docs?.source}}},y=[`_AutoComplete`,`Multiple`,`WithHistory`]})))()}export{b as i,_ as n,g as r,f as t};