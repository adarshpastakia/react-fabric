import{j as r,s as p}from"./iframe-DL5PLccW.js";import"./index-DPKHNOa8.js";import{b as l}from"./Global-Dhvrkiym.js";import{V as c}from"./Viewport-v3RQO1q4.js";import{A as m}from"./VideoPlayer-BDAuu8SK.js";import"./Section-m1pcBAPK.js";import"./ErrorBoundary-Bl2NAeUv.js";import"./createClass-DjEsl4fx.js";import"./Button-B4MR9BdT.js";import"./Tooltip-BPKa3gaw.js";import"./useResizeObserver-Bn-Pa1XM.js";import"./useDebounce-DUBqCfh2.js";import"./HeadFoot-BOKBTLfn.js";import"./Divider-DeNf5KPC.js";import"./Text-CwzsJ7bo.js";import"./usePropToggle-D4M8sFrj.js";import"./types-DXUe1Zpb.js";import"./ColorPicker-Cc5ydKIF.js";import"./Google-B5-g4RDV.js";import"./zh-CN-FY2s-MwU.js";import"./endOfDay-BUPtmEN8.js";import"./index-B0-PBx-s.js";import"./index-HqHJXvHv.js";import"./InputWrapper-M6su9Q9e.js";import"./_debounce-BHO_GiD4.js";import"./_isEqual-Q02tGGHK.js";import"./ThemeProvider-7wvBaeKK.js";import"./Dropdown-BkPoAgTO.js";import"./Panel-xJsBWFXK.js";import"./Content-BWk5dK7X.js";import"./Textarea-BRaMRzje.js";import"./eventHandlers-CcecLcKh.js";import"./floating-ui.react-CT9AAP4P.js";const d=""+new URL("sample_form-DG1G8AND.png",import.meta.url).href,{fn:f}=__STORYBOOK_MODULE_TEST__,J={component:m,title:"@media/Annotator",parameters:{layout:"fullscreen",controls:{exclude:"children"}}},o={render:s=>{const{showAlert:a}=l();return r.jsx("div",{className:"min-h-[600px]",children:r.jsx(c,{children:r.jsx(m,{...s,onAdd:()=>a({type:"prompt",message:"Annotation label"}).then(t=>p(t)?t:void 0)})})})},args:{src:d,onChange:f(),annotations:[{box:"30,30,240,48",label:"Tester"},{box:"30,90,240,48",label:"Tester",color:"#29a383"}]}};var n,e,i;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
