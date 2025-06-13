import{j as r,s as p}from"./iframe-CVyMRGSP.js";import"./index-D3XXfjI1.js";import{b as l}from"./Global-BZCLuW51.js";import{V as c}from"./Viewport-BXUQz2Et.js";import{A as m}from"./VideoPlayer-B5AvfIl2.js";import"./Section-BWnuMXLb.js";import"./ErrorBoundary-1v1ksgaq.js";import"./createClass-eMtQ1dFD.js";import"./Button-DAqx1TyP.js";import"./Tooltip-D82JqM4y.js";import"./useResizeObserver-CzVPFDEQ.js";import"./useDebounce-Bpvok1Zz.js";import"./HeadFoot-gLuWE0O1.js";import"./Divider-CVDW6mjR.js";import"./Text-B9zAnOfL.js";import"./usePropToggle-BOifV6nf.js";import"./types-DXUe1Zpb.js";import"./ColorPicker-BwNyvkQX.js";import"./Google-DJpRc7c-.js";import"./zh-CN-FLa9i-pX.js";import"./endOfDay-CyHfuoBH.js";import"./index-BJLwolNv.js";import"./index-iLbIT3XK.js";import"./InputWrapper-DFXsbVS4.js";import"./_debounce-BHO_GiD4.js";import"./_isEqual-C0Ek68wL.js";import"./ThemeProvider-CDO2-_ue.js";import"./Dropdown-DQ3PjC0k.js";import"./Panel-DtlJ813n.js";import"./Content-BDvcrf-C.js";import"./Textarea-DXZPjzA-.js";import"./eventHandlers-BD3d4itr.js";import"./floating-ui.react-DNZDxEHZ.js";const d=""+new URL("sample_form-DG1G8AND.png",import.meta.url).href,{fn:f}=__STORYBOOK_MODULE_TEST__,J={component:m,title:"@media/Annotator",parameters:{layout:"fullscreen",controls:{exclude:"children"}}},o={render:s=>{const{showAlert:a}=l();return r.jsx("div",{className:"min-h-[600px]",children:r.jsx(c,{children:r.jsx(m,{...s,onAdd:()=>a({type:"prompt",message:"Annotation label"}).then(t=>p(t)?t:void 0)})})})},args:{src:d,onChange:f(),annotations:[{box:"30,30,240,48",label:"Tester"},{box:"30,90,240,48",label:"Tester",color:"#29a383"}]}};var n,e,i;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
