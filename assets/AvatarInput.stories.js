import{n as e}from"./rolldown-runtime.js";import{K as t,t as n}from"./src.js";import{t as r}from"./jsx-runtime.js";var i,a,o,s,c;function l(){return(l=e((()=>{n(),i=r(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={component:t,title:`@form/Inputs`,parameters:{layout:`centered`,jest:[`form/tests/ColorInput.test.tsx`]},decorators:[e=>(0,i.jsx)(`div`,{className:`max-w-lg`,children:(0,i.jsx)(e,{})})]},s={render:e=>(0,i.jsx)(t,{...e}),args:{onChange:a(),uploadHandler(){return Promise.resolve(`tester`)}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <AvatarInput {...args} />;
  },
  args: {
    onChange: fn(),
    uploadHandler() {
      return Promise.resolve("tester");
    }
  }
}`,...s.parameters?.docs?.source}}},c=[`_AvatarInput`]})))()}l();export{s as _AvatarInput,c as __namedExportsOrder,o as default};