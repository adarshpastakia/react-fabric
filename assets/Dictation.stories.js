import{n as e,r as t}from"./rolldown-runtime.js";import{t as n}from"./react.js";import{t as r}from"./jsx-runtime.js";import{i,t as a}from"./src3.js";var o=t({_Dictation:()=>d,__namedExportsOrder:()=>f,default:()=>u}),s,c,l,u,d,f;function p(){return(p=e((()=>{a(),s=n(),c=r(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={component:i,title:`@media/Dictation`,parameters:{layout:`centered`,jest:[`media/tests/Dictation.test.tsx`]},decorators:[e=>(0,c.jsx)(`div`,{className:`flex gap-2 items-center p-4`,children:(0,c.jsx)(e,{})})]},d={render:e=>{let[t,n]=(0,s.useState)(``);return(0,c.jsxs)(`div`,{className:`w-xl`,children:[(0,c.jsx)(`div`,{className:`flex justify-center`,children:(0,c.jsx)(i,{...e,onTranscribe:n})}),(0,c.jsx)(`div`,{className:`py-4`,children:t})]})},args:{onRecord:l()}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [transcription, setTranscription] = useState("");
    return <div className="w-xl">
        <div className="flex justify-center">
          <Dictation {...args} onTranscribe={setTranscription} />
        </div>
        <div className="py-4">{transcription}</div>
      </div>;
  },
  args: {
    onRecord: fn()
  }
}`,...d.parameters?.docs?.source}}},f=[`_Dictation`]})))()}export{d as n,p as r,o as t};