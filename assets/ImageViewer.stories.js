import{r as m,j as e}from"./iframe-qDaPDssc.js";import{f as c}from"./index4.js";import{B as p}from"./Button.js";import"./index.js";import{V as k}from"./Viewport.js";import{I as l}from"./VideoPlayer.js";import"./ColorPicker.js";import"./Google.js";import{C as w}from"./Checkbox.js";import"./Tooltip.js";import"./Section.js";import"./ErrorBoundary.js";import"./createClass.js";import"./Global.js";import"./useResizeObserver.js";import"./useDebounce.js";import"./HeadFoot.js";import"./Divider.js";import"./Text.js";import"./usePropToggle.js";import"./types.js";import"./debounce.js";import"./isEqual.js";import"./ThemeProvider.js";import"./useResize.js";import"./Dropdown.js";import"./Card2.js";import"./nodeCheck.js";import"./InputWrapper.js";import"./ErrorIcon.js";import"./Panel.js";import"./Content.js";import"./Textarea.js";import"./eventHandlers.js";import"./index2.js";import"./zh-CN.js";import"./endOfDay.js";import"./index5.js";const C=""+new URL("sample_large-DzFmAyKH.jpg",import.meta.url).href,{fn:j}=__STORYBOOK_MODULE_TEST__,me={component:l,title:"@media/ImageViewer",parameters:{layout:"fullscreen",controls:{exclude:"children"}}},s={render:o=>e.jsx("div",{className:"min-h-[600px]",children:e.jsx(k,{children:e.jsx(l,{...o})})}),args:{src:"badimg",fallback:c.image.urlPicsumPhotos(),overlay:c.image.urlPicsumPhotos(),onCrop:j(),nsfwMessage({hide:o,remove:t}){const[a,r]=m.useState(!1);return e.jsxs("div",{className:"p-4 bg-base rounded-capped shadow-xs",children:[e.jsx("h3",{className:"text-lg mb-2",children:"NSFW Content"}),e.jsx("p",{className:"mb-4",children:"This image has been marked as not safe for work."}),e.jsx("p",{children:e.jsx(w,{label:"I understand the risks",onChange:r})}),e.jsx(p,{className:"btn btn-primary",onClick:()=>o(),disabled:!a,children:"Glimpse Image"}),e.jsx(p,{className:"btn btn-primary",onClick:()=>t(),disabled:!a,children:"View Image"})]})}}},n={render:o=>{const[t,a]=m.useState([{box:"878.0821384644843,194.20218353944534,311.53266942786024,238.70685060056823",fill:"#0F5F9051",stroke:2,labelTop:"Image 1",labelBottom:"80%",colorBottom:"#3D8C6BFF"},{box:"502.5,330,294,195",fill:"#F50F9051",stroke:2,labelTop:"Image 2",labelBottom:"50%",colorBottom:"#8B8725FF"}]),[r,i]=m.useState();return e.jsx("div",{className:"min-h-[600px]",children:e.jsxs(k,{children:[e.jsx(l,{...o,annotations:t,onExport:i,onCrop:(I,f)=>i(f)}),r&&e.jsx("div",{onClick:()=>i(""),className:"absolute overflow-hidden inset-0 bg-black/90 z-10 p-8",children:e.jsx("img",{src:r,className:"size-full object-scale-down border-4 bg-black"})})]})})},args:{src:C}};var d,b,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    return <div className="min-h-[600px]">
        <Viewport>
          <ImageViewer {...args} />
        </Viewport>
      </div>;
  },
  args: {
    src: "badimg",
    fallback: faker.image.urlPicsumPhotos(),
    overlay: faker.image.urlPicsumPhotos(),
    onCrop: fn(),
    nsfwMessage({
      hide,
      remove
    }) {
      const [checked, setChecked] = useState(false);
      return <div className="p-4 bg-base rounded-capped shadow-xs">
          <h3 className="text-lg mb-2">NSFW Content</h3>
          <p className="mb-4">
            This image has been marked as not safe for work.
          </p>
          <p>
            <Checkbox label="I understand the risks" onChange={setChecked} />
          </p>
          <Button className="btn btn-primary" onClick={() => hide()} disabled={!checked}>
            Glimpse Image
          </Button>
          <Button className="btn btn-primary" onClick={() => remove()} disabled={!checked}>
            View Image
          </Button>
        </div>;
    }
  }
}`,...(g=(b=s.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var x,h,u;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    const [annotations, setAnnotations] = useState<ImageAnnotation[]>([{
      box: "878.0821384644843,194.20218353944534,311.53266942786024,238.70685060056823",
      fill: "#0F5F9051",
      stroke: 2,
      labelTop: "Image 1",
      labelBottom: "80%",
      colorBottom: "#3D8C6BFF"
    }, {
      box: "502.5,330,294,195",
      fill: "#F50F9051",
      stroke: 2,
      labelTop: "Image 2",
      labelBottom: "50%",
      colorBottom: "#8B8725FF"
    }]);
    const [exp, setExp] = useState<string>();
    return <div className="min-h-[600px]">
        <Viewport>
          <ImageViewer {...args} annotations={annotations} onExport={setExp} onCrop={(box, base64) => setExp(base64)} />
          {exp && <div onClick={() => setExp("")} className="absolute overflow-hidden inset-0 bg-black/90 z-10 p-8">
              <img src={exp} className="size-full object-scale-down border-4 bg-black" />
            </div>}
        </Viewport>
      </div>;
  },
  args: {
    src
  }
}`,...(u=(h=n.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const le=["_ImageViewer","ImagePlayground"];export{n as ImagePlayground,s as _ImageViewer,le as __namedExportsOrder,me as default};
