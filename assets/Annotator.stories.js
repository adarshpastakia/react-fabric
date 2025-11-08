import{j as r,s as a}from"./iframe-DwvN93Ge.js";import"./index.js";import{b as l}from"./Global.js";import{V as c}from"./Viewport.js";import{A as m}from"./VideoPlayer.js";import"./Section.js";import"./ErrorBoundary.js";import"./createClass.js";import"./Button.js";import"./Tooltip.js";import"./useResizeObserver.js";import"./useDebounce.js";import"./HeadFoot.js";import"./Divider.js";import"./Text.js";import"./usePropToggle.js";import"./types.js";import"./ColorPicker.js";import"./Google.js";import"./zh-CN.js";import"./endOfDay.js";import"./index5.js";import"./index2.js";import"./debounce.js";import"./isEqual.js";import"./ThemeProvider.js";import"./useResize.js";import"./Dropdown.js";import"./Card2.js";import"./nodeCheck.js";import"./InputWrapper.js";import"./ErrorIcon.js";import"./Panel.js";import"./Content.js";import"./Textarea.js";import"./eventHandlers.js";const d=""+new URL("sample_form-DG1G8AND.png",import.meta.url).href,{fn:f}=__STORYBOOK_MODULE_TEST__,W={component:m,title:"@media/Annotator",parameters:{layout:"fullscreen",controls:{exclude:"children"}}},o={render:s=>{const{showAlert:p}=l();return r.jsx("div",{className:"min-h-[600px]",children:r.jsx(c,{children:r.jsx(m,{...s,onAdd:()=>p({type:"prompt",message:"Annotation label"}).then(t=>a(t)?t:void 0)})})})},args:{src:d,onChange:f(),annotations:[{box:"30,30,240,48",label:"Tester"},{box:"30,90,240,48",label:"Tester",color:"#29a383"}]}};var n,e,i;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(e=o.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const X=["_Annotator"];export{o as _Annotator,X as __namedExportsOrder,W as default};
