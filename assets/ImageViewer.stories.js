import{j as o,r as i}from"./iframe-DwvN93Ge.js";import{f as m}from"./index4.js";import"./index.js";import{V as b}from"./Viewport.js";import{I as a}from"./VideoPlayer.js";import"./Section.js";import"./ErrorBoundary.js";import"./createClass.js";import"./Global.js";import"./Button.js";import"./Tooltip.js";import"./useResizeObserver.js";import"./useDebounce.js";import"./HeadFoot.js";import"./Divider.js";import"./Text.js";import"./usePropToggle.js";import"./types.js";import"./ColorPicker.js";import"./Google.js";import"./zh-CN.js";import"./endOfDay.js";import"./index5.js";import"./index2.js";import"./debounce.js";import"./isEqual.js";import"./ThemeProvider.js";import"./useResize.js";import"./Dropdown.js";import"./Card2.js";import"./nodeCheck.js";import"./InputWrapper.js";import"./ErrorIcon.js";import"./Panel.js";import"./Content.js";import"./Textarea.js";import"./eventHandlers.js";const h=""+new URL("sample_large-DzFmAyKH.jpg",import.meta.url).href,{fn:F}=__STORYBOOK_MODULE_TEST__,ao={component:a,title:"@media/ImageViewer",parameters:{layout:"fullscreen",controls:{exclude:"children"}}},r={render:t=>o.jsx("div",{className:"min-h-[600px]",children:o.jsx(b,{children:o.jsx(a,{...t})})}),args:{src:"badimg",fallback:m.image.urlPicsumPhotos(),overlay:m.image.urlPicsumPhotos(),onCrop:F()}},e={render:t=>{const[u,w]=i.useState([{box:"878.0821384644843,194.20218353944534,311.53266942786024,238.70685060056823",fill:"#0F5F9051",stroke:2,labelTop:"Image 1",labelBottom:"80%",colorBottom:"#3D8C6BFF"},{box:"502.5,330,294,195",fill:"#F50F9051",stroke:2,labelTop:"Image 2",labelBottom:"50%",colorBottom:"#8B8725FF"}]),[s,n]=i.useState();return o.jsx("div",{className:"min-h-[600px]",children:o.jsxs(b,{children:[o.jsx(a,{...t,annotations:u,onExport:n,onCrop:(k,f)=>n(f)}),s&&o.jsx("div",{onClick:()=>n(""),className:"absolute overflow-hidden inset-0 bg-black/90 z-10 p-8",children:o.jsx("img",{src:s,className:"size-full object-scale-down border-4 bg-black"})})]})})},args:{src:h}};var p,l,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
    onCrop: fn()
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,g,x;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(x=(g=e.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const so=["_ImageViewer","ImagePlayground"];export{e as ImagePlayground,r as _ImageViewer,so as __namedExportsOrder,ao as default};
