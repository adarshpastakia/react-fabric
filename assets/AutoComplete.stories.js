import{n as e,r as t}from"./chunk.js";import{R as n,st as r}from"./ResizeObserver.es.js";import{t as i}from"./jsx-runtime.js";import{C as a,w as o}from"./iframe-Du5FrOxJ.js";import{i as s,t as c}from"./src6.js";var l=t({Multiple:()=>m,WithHistory:()=>h,_AutoComplete:()=>p,__namedExportsOrder:()=>g,default:()=>f}),u,d,f,p,m,h,g,_=e((()=>{a(),n(),c(),u=i(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={component:s,title:`@form/AutoComplete`,parameters:{layout:`centered`,jest:[`form/tests/AutoComplete.test.tsx`]},decorators:[e=>(0,u.jsx)(`div`,{className:`max-w-[32rem] w-screen`,children:(0,u.jsx)(e,{})})]},p={render:e=>(0,u.jsx)(s,{...e,multiple:!1}),args:{label:`AutoComplete`,placeholder:`AutoComplete...`,allowClear:!0,onEnterPressed:d(),onChange:d(),history:[`anchor`,`tester`,`arkwright`]}},m={render:e=>(0,u.jsx)(s,{...e,multiple:!0}),args:{label:`AutoComplete`,placeholder:`AutoComplete...`,allowClear:!0,onEnterPressed:d(),onChange:d(),history:[`anchor`,`tester`,`arkwright`,`granville`,`lister`,`smeghead`,`kryten`]}},h={render:e=>{let[t,n]=o(`autocomplete:history`,e.history??[]),i=(e=[])=>{n(r([e,...t].flat()).slice(0,50))};return(0,u.jsx)(s,{...e,multiple:!0,history:t,onSelect:i})},args:{label:`AutoComplete`,placeholder:`AutoComplete...`,allowClear:!0,onEnterPressed:d(),onChange:d(),history:[`anchor`,`tester`,`arkwright`,`granville`,`lister`,`smeghead`,`kryten`]}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g=[`_AutoComplete`,`Multiple`,`WithHistory`]}));_();export{m as Multiple,h as WithHistory,p as _AutoComplete,g as __namedExportsOrder,f as default,_ as n,l as t};