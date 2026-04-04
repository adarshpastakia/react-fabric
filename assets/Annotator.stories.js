import{n as e}from"./chunk.js";import{t}from"./jsx-runtime.js";import{Dt as n,L as r}from"./ResizeObserver.es.js";import{V as i,d as a,t as o}from"./iframe-B-Wcw5ev.js";import{s,t as c}from"./src7.js";var l,u=e((()=>{l=``+new URL(`sample_form-DG1G8AND.png`,import.meta.url).href})),d,f,p,m,h;e((()=>{o(),r(),c(),u(),d=t(),{fn:f}=__STORYBOOK_MODULE_TEST__,p={component:s,title:`@media/Annotator`,parameters:{layout:`fullscreen`,controls:{exclude:`children`}}},m={render:e=>{let{showAlert:t}=i();return(0,d.jsx)(`div`,{className:`min-h-[600px]`,children:(0,d.jsx)(a,{children:(0,d.jsx)(s,{...e,onAdd:()=>t({type:`prompt`,message:`Annotation label`}).then(e=>n(e)?e:void 0)})})})},args:{src:l,onChange:f(),annotations:[{box:`30,30,240,48`,label:`Tester`},{box:`30,90,240,48`,label:`Tester`,color:`#29a383`}]}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      showAlert
    } = useNotificationService();
    return <div className="min-h-[600px]">
        <Viewport>
          <Annotator {...args} onAdd={() => showAlert({
          type: "prompt",
          message: "Annotation label"
        }).then(b => isString(b) ? b : undefined)} />
        </Viewport>
      </div>;
  },
  args: {
    src: form,
    onChange: fn(),
    annotations: [{
      box: "30,30,240,48",
      label: "Tester"
    }, {
      box: "30,90,240,48",
      label: "Tester",
      color: "#29a383"
    }]
  }
}`,...m.parameters?.docs?.source}}},h=[`_Annotator`]}))();export{m as _Annotator,h as __namedExportsOrder,p as default};