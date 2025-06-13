import{j as n}from"./iframe-CVyMRGSP.js";import"./index-D3XXfjI1.js";import{u as _}from"./useStorage-D3i0Ot7K.js";import{A as a}from"./DualList-DCn26jaf.js";import{d as w}from"./_dedupe-Z-qx8K2g.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,S={component:a,title:"@form/AutoComplete",parameters:{layout:"centered",jest:["form/tests/AutoComplete.test.tsx"]},decorators:[e=>n.jsx("div",{className:"max-w-[32rem] w-screen",children:n.jsx(e,{})})]},t={render:e=>n.jsx(a,{...e,multiple:!1}),args:{label:"AutoComplete",placeholder:"AutoComplete...",allowClear:!0,onEnterPressed:r(),onChange:r(),history:["anchor","tester","arkwright"]}},o={render:e=>n.jsx(a,{...e,multiple:!0}),args:{label:"AutoComplete",placeholder:"AutoComplete...",allowClear:!0,onEnterPressed:r(),onChange:r(),history:["anchor","tester","arkwright","granville","lister","smeghead","kryten"]}},s={render:e=>{const[l,y]=_("autocomplete:history",e.history??[]),A=(f=[])=>{y(w([f,...l].flat()).slice(0,50))};return n.jsx(a,{...e,multiple:!0,history:l,onSelect:A})},args:{label:"AutoComplete",placeholder:"AutoComplete...",allowClear:!0,onEnterPressed:r(),onChange:r(),history:["anchor","tester","arkwright","granville","lister","smeghead","kryten"]}};var u,i,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,c,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
    onChange: fn(),
    history: ["anchor", "tester", "arkwright", "granville", "lister", "smeghead", "kryten"]
  }
}`,...(C=(g=s.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};const x=["_AutoComplete","Multiple","WithHistory"],H=Object.freeze(Object.defineProperty({__proto__:null,Multiple:o,WithHistory:s,_AutoComplete:t,__namedExportsOrder:x,default:S},Symbol.toStringTag,{value:"Module"}));export{H as A,o as M,t as _};
