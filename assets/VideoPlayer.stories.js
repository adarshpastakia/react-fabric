import{r as s,j as t}from"./iframe-DwvN93Ge.js";import"./index.js";import{V as x}from"./Viewport.js";import{V as m}from"./VideoPlayer.js";import{b as y}from"./large_video.js";import"./Section.js";import"./ErrorBoundary.js";import"./createClass.js";import"./Global.js";import"./Button.js";import"./Tooltip.js";import"./useResizeObserver.js";import"./useDebounce.js";import"./HeadFoot.js";import"./Divider.js";import"./Text.js";import"./usePropToggle.js";import"./types.js";import"./ColorPicker.js";import"./Google.js";import"./zh-CN.js";import"./endOfDay.js";import"./index5.js";import"./index2.js";import"./debounce.js";import"./isEqual.js";import"./ThemeProvider.js";import"./useResize.js";import"./Dropdown.js";import"./Card2.js";import"./nodeCheck.js";import"./InputWrapper.js";import"./ErrorIcon.js";import"./Panel.js";import"./Content.js";import"./Textarea.js";import"./eventHandlers.js";const T=""+new URL("sample-DaKAthRF.mp4",import.meta.url).href,{fn:C}=__STORYBOOK_MODULE_TEST__,pt={component:m,title:"@media/VideoPlayer",parameters:{layout:"fullscreen",controls:{exclude:"children"}}},w=new Array(300).fill([]).map((o,e)=>[Math.random()*30.5,Math.random()]),F=`WEBVTT

00:11.000 --> 00:13.000
<v Roger Bingham>We are in New York City

00:13.000 --> 00:16.000
<v Roger Bingham>We’re actually at the Lucern Hotel, just down the street

00:16.000 --> 00:18.000
<v Roger Bingham>from the American Museum of Natural History

00:18.000 --> 00:20.000
<v Roger Bingham>And with me is Neil deGrasse Tyson

00:20.000 --> 00:22.000
<v Roger Bingham>Astrophysicist, Director of the Hayden Planetarium

00:22.000 --> 00:24.000
<v Roger Bingham>at the AMNH.

00:24.000 --> 00:26.000
<v Roger Bingham>Thank you for walking down here.

00:27.000 --> 00:30.000
<v Roger Bingham>And I want to do a follow-up on the last conversation we did.
`,n={render:o=>{const[e,a]=s.useState([[2.49,"Testing"],[18.24,"Testing"]]);return t.jsx("div",{className:"min-h-[600px]",children:t.jsx(x,{children:t.jsx(m,{...o,markers:w,vttText:F,comments:e,onCommentChange:a})})})},args:{src:T,onCut:C()}},r={render:o=>{const[e,a]=s.useState([[2.49,"Testing"],[18.24,"Testing"]]),[v,V]=s.useState([{start:5,end:35,box:"878.0821384644843,194.20218353944534,311.53266942786024,238.70685060056823",fill:"#0F5F9051",stroke:2,labelTop:"Image 1",labelBottom:"80%",colorBottom:"#3D8C6BFF"},{start:5,end:35,box:"502.5,330,294,195",fill:"#F50F9051",stroke:2,labelTop:"Image 2",labelBottom:"50%",colorBottom:"#8B8725FF"}]),[l,i]=s.useState();return t.jsx("div",{className:"min-h-[600px]",children:t.jsxs(x,{children:[t.jsx(m,{...o,comments:e,onCommentChange:a,annotations:v,onCrop:(f,p,B)=>i(B),onExport:(f,p)=>i(p)}),l&&t.jsx("div",{onClick:()=>i(""),className:"absolute overflow-hidden inset-0 bg-black/90 z-10 p-8",children:t.jsx("img",{src:l,className:"size-full object-scale-down border-4 bg-black"})})]})})},args:{src:y}};var c,d,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    const [annotations, setAnnotations] = useState<AnyObject>([[2.49, "Testing"], [18.24, "Testing"]]);
    return <div className="min-h-[600px]">
        <Viewport>
          <VideoPlayer {...args} markers={markers} vttText={vtt} comments={annotations} onCommentChange={setAnnotations} />
        </Viewport>
      </div>;
  },
  args: {
    src,
    onCut: fn()
  }
}`,...(g=(d=n.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var u,h,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    const [comments, setComments] = useState<AnyObject>([[2.49, "Testing"], [18.24, "Testing"]]);
    const [annotations, setAnnotations] = useState<VideoAnnotation[]>([{
      start: 5,
      end: 35,
      box: "878.0821384644843,194.20218353944534,311.53266942786024,238.70685060056823",
      fill: "#0F5F9051",
      stroke: 2,
      labelTop: "Image 1",
      labelBottom: "80%",
      colorBottom: "#3D8C6BFF"
    }, {
      start: 5,
      end: 35,
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
          <VideoPlayer {...args} comments={comments} onCommentChange={setComments} annotations={annotations} onCrop={(ts, box, base64) => setExp(base64)} onExport={(ts, base64) => setExp(base64)} />
          {exp && <div onClick={() => setExp("")} className="absolute overflow-hidden inset-0 bg-black/90 z-10 p-8">
              <img src={exp} className="size-full object-scale-down border-4 bg-black" />
            </div>}
        </Viewport>
      </div>;
  },
  args: {
    src: bunny
  }
}`,...(b=(h=r.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const ct=["_VideoPlayer","VideoPlayground"];export{r as VideoPlayground,n as _VideoPlayer,ct as __namedExportsOrder,pt as default};
