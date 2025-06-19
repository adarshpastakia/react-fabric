import{j as r,s as p}from"./iframe-DcfUrZ2L.js";import"./index-Bl9sirez.js";import{b as l}from"./Global-CmkQSaMP.js";import{V as c}from"./Viewport-CcMKmxve.js";import{A as m}from"./VideoPlayer-Bi-Ugs47.js";import"./Section-Dbs60dt2.js";import"./ErrorBoundary-CbzvQFF-.js";import"./createClass-D99gLwRj.js";import"./Button-7pM1lgGA.js";import"./Tooltip-Dv6V4Byx.js";import"./useResizeObserver-L_IFJsPD.js";import"./useDebounce-oR1dm03r.js";import"./HeadFoot-BdfsRs4J.js";import"./Divider-DRJ3j7C2.js";import"./Text-BAk0flt3.js";import"./usePropToggle-DoIYClWc.js";import"./types-DXUe1Zpb.js";import"./ColorPicker-B2sfWfiP.js";import"./Google-DSP-6Nrb.js";import"./zh-CN-DsRk4IYs.js";import"./endOfDay-Danle8jh.js";import"./index-zx9qXRA4.js";import"./index-Iz_3oi3Q.js";import"./InputWrapper-Bmbugn7q.js";import"./_debounce-BHO_GiD4.js";import"./_isEqual-PxFgnGsO.js";import"./ThemeProvider-CYuvVWYe.js";import"./Dropdown-Cqgvd0wk.js";import"./Panel-Gs9yXmgf.js";import"./Content-Cwxt_19N.js";import"./Textarea-DiMGPEUC.js";import"./eventHandlers-BDcAz1uA.js";import"./floating-ui.react-DaYvvi0U.js";const d=""+new URL("sample_form-DG1G8AND.png",import.meta.url).href,{fn:f}=__STORYBOOK_MODULE_TEST__,J={component:m,title:"@media/Annotator",parameters:{layout:"fullscreen",controls:{exclude:"children"}}},o={render:s=>{const{showAlert:a}=l();return r.jsx("div",{className:"min-h-[600px]",children:r.jsx(c,{children:r.jsx(m,{...s,onAdd:()=>a({type:"prompt",message:"Annotation label"}).then(t=>p(t)?t:void 0)})})})},args:{src:d,onChange:f(),annotations:[{box:"30,30,240,48",label:"Tester"},{box:"30,90,240,48",label:"Tester",color:"#29a383"}]}};var n,e,i;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(e=o.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const P=["_Annotator"];export{o as _Annotator,P as __namedExportsOrder,J as default};
