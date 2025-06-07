import{j as n}from"./iframe-BcXNitKG.js";import"./index-DUA9IMpG.js";import{u as _}from"./useStorage-VRxlaZRS.js";import{A as a}from"./DualList-rWC3PaES.js";import{d as w}from"./_dedupe-Dul_0PfE.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,x={component:a,title:"@form/AutoComplete",parameters:{layout:"centered",jest:["form/tests/AutoComplete.test.tsx"]},decorators:[e=>n.jsx("div",{className:"max-w-[32rem] w-screen",children:n.jsx(e,{})})]},t={render:e=>n.jsx(a,{...e,multiple:!1}),args:{label:"AutoComplete",placeholder:"AutoComplete...",allowClear:!0,onEnterPressed:r(),onChange:r(),history:["anchor","tester","arkwright"]}},o={render:e=>n.jsx(a,{...e,multiple:!0}),args:{label:"AutoComplete",placeholder:"AutoComplete...",allowClear:!0,onEnterPressed:r(),onChange:r(),history:["anchor","tester","arkwright","granville","lister","smeghead","kryten"]}},s={render:e=>{const[l,y]=_("autocomplete:history",e.history??[]),A=(f=[])=>{y(w([f,...l].flat()).slice(0,50))};return n.jsx(a,{...e,multiple:!0,history:l,onSelect:A})},args:{label:"AutoComplete",placeholder:"AutoComplete...",allowClear:!0,onEnterPressed:r(),onChange:r(),history:["anchor","tester","arkwright","granville","lister","smeghead","kryten"]}};var i,u,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    return <AutoComplete {...args} multiple={false} />;
  },
  args: {
    label: "AutoComplete",
    placeholder: "AutoComplete...",
    allowClear: true,
    onEnterPressed: fn(),
    // @ts-expect-error ignore
    onChange: fn(),
    history: ["anchor", "tester", "arkwright"]
  }
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,c,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    return <AutoComplete {...args} multiple />;
  },
  args: {
    label: "AutoComplete",
    placeholder: "AutoComplete...",
    allowClear: true,
    onEnterPressed: fn(),
    // @ts-expect-error ignore
    onChange: fn(),
    history: ["anchor", "tester", "arkwright", "granville", "lister", "smeghead", "kryten"]
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var h,g,C;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
    // @ts-expect-error ignore
    onChange: fn(),
    history: ["anchor", "tester", "arkwright", "granville", "lister", "smeghead", "kryten"]
  }
}`,...(C=(g=s.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};const S=["_AutoComplete","Multiple","WithHistory"],H=Object.freeze(Object.defineProperty({__proto__:null,Multiple:o,WithHistory:s,_AutoComplete:t,__namedExportsOrder:S,default:x},Symbol.toStringTag,{value:"Module"}));export{H as A,o as M,t as _};
