import{j as r,s as p}from"./iframe-BcXNitKG.js";import"./index-DUA9IMpG.js";import{b as l}from"./Global-HPy1X0OU.js";import{V as c}from"./Viewport-y0mN7whU.js";import{A as m}from"./VideoPlayer-C89SP7JF.js";import"./Section-BAtoQgEv.js";import"./ErrorBoundary-C8J7aorp.js";import"./createClass-B8xyeRfs.js";import"./Button-7R_E-GE9.js";import"./Tooltip-J_gHpl9C.js";import"./useResizeObserver-Cq2Z_pjG.js";import"./useDebounce-rX8HuXnO.js";import"./HeadFoot-DLpVmsEq.js";import"./Divider-DB8bkHxO.js";import"./Text-LNzV1gTO.js";import"./usePropToggle-Ck2VfQ2Q.js";import"./types-DXUe1Zpb.js";import"./ColorPicker-0pYYboV3.js";import"./Google-DOYfq3v8.js";import"./zh-CN-Bmeuy_N5.js";import"./endOfDay-BHO0gGVd.js";import"./index-Doar7ujF.js";import"./index-CqCs8NGq.js";import"./InputWrapper-DVhr945a.js";import"./_debounce-BHO_GiD4.js";import"./_isEqual-JedAdon-.js";import"./ThemeProvider-BdPoRI6b.js";import"./Dropdown-DUHKUE_z.js";import"./Panel-C49a1LM8.js";import"./Content-BJKCk6Ue.js";import"./Textarea-FrvDVWtZ.js";import"./eventHandlers-JUcml5Fv.js";import"./floating-ui.react-CCZcFCqr.js";const d=""+new URL("sample_form-DG1G8AND.png",import.meta.url).href,{fn:f}=__STORYBOOK_MODULE_TEST__,J={component:m,title:"@media/Annotator",parameters:{layout:"fullscreen",controls:{exclude:"children"}}},o={render:s=>{const{showAlert:a}=l();return r.jsx("div",{className:"min-h-[600px]",children:r.jsx(c,{children:r.jsx(m,{...s,onAdd:()=>a({type:"prompt",message:"Annotation label"}).then(t=>p(t)?t:void 0)})})})},args:{src:d,onChange:f(),annotations:[{box:"30,30,240,48",label:"Tester"},{box:"30,90,240,48",label:"Tester",color:"#29a383"}]}};var n,e,i;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
