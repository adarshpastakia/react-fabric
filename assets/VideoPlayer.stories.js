import{r as s,j as e}from"./iframe-qDaPDssc.js";import{B as v}from"./Button.js";import"./index.js";import{V as x}from"./Viewport.js";import{V as m}from"./VideoPlayer.js";import{b as w}from"./large_video.js";import"./ColorPicker.js";import"./Google.js";import{C as B}from"./Checkbox.js";import"./Tooltip.js";import"./Section.js";import"./ErrorBoundary.js";import"./createClass.js";import"./Global.js";import"./useResizeObserver.js";import"./useDebounce.js";import"./HeadFoot.js";import"./Divider.js";import"./Text.js";import"./usePropToggle.js";import"./types.js";import"./debounce.js";import"./isEqual.js";import"./ThemeProvider.js";import"./useResize.js";import"./Dropdown.js";import"./Card2.js";import"./nodeCheck.js";import"./InputWrapper.js";import"./ErrorIcon.js";import"./Panel.js";import"./Content.js";import"./Textarea.js";import"./eventHandlers.js";import"./index2.js";import"./zh-CN.js";import"./endOfDay.js";import"./index5.js";const y=""+new URL("sample-DaKAthRF.mp4",import.meta.url).href,{fn:T}=__STORYBOOK_MODULE_TEST__,he={component:m,title:"@media/VideoPlayer",parameters:{layout:"fullscreen",controls:{exclude:"children"}}},N=new Array(300).fill([]).map((t,n)=>[Math.random()*30.5,Math.random()]),j=`WEBVTT

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
`,r={render:t=>{const[n,o]=s.useState([[2.49,"Testing"],[18.24,"Testing"]]);return e.jsx("div",{className:"min-h-[600px]",children:e.jsx(x,{children:e.jsx(m,{...t,markers:N,vttText:j,comments:n,onCommentChange:o})})})},args:{src:y,onCut:T(),nsfwMessage({remove:t}){const[n,o]=s.useState(!1);return e.jsxs("div",{className:"p-4 bg-base rounded-capped shadow-xs",children:[e.jsx("h3",{className:"text-lg mb-2",children:"NSFW Content"}),e.jsx("p",{className:"mb-4",children:"This image has been marked as not safe for work."}),e.jsx("p",{children:e.jsx(B,{label:"I understand the risks",onChange:o})}),e.jsx(v,{className:"btn btn-primary",onClick:()=>t(),disabled:!n,children:"View Video"})]})}}},a={render:t=>{const[n,o]=s.useState([[2.49,"Testing"],[18.24,"Testing"]]),[f,V]=s.useState([{start:5,end:35,box:"878.0821384644843,194.20218353944534,311.53266942786024,238.70685060056823",fill:"#0F5F9051",stroke:2,labelTop:"Image 1",labelBottom:"80%",colorBottom:"#3D8C6BFF"},{start:5,end:35,box:"502.5,330,294,195",fill:"#F50F9051",stroke:2,labelTop:"Image 2",labelBottom:"50%",colorBottom:"#8B8725FF"}]),[l,i]=s.useState();return e.jsx("div",{className:"min-h-[600px]",children:e.jsxs(x,{children:[e.jsx(m,{...t,comments:n,onCommentChange:o,annotations:f,onCrop:(k,c,C)=>i(C),onExport:(k,c)=>i(c)}),l&&e.jsx("div",{onClick:()=>i(""),className:"absolute overflow-hidden inset-0 bg-black/90 z-10 p-8",children:e.jsx("img",{src:l,className:"size-full object-scale-down border-4 bg-black"})})]})})},args:{src:w}};var p,d,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
    onCut: fn(),
    nsfwMessage({
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
          <Button className="btn btn-primary" onClick={() => remove()} disabled={!checked}>
            View Video
          </Button>
        </div>;
    }
  }
}`,...(h=(d=r.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var g,b,u;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(u=(b=a.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};const ge=["_VideoPlayer","VideoPlayground"];export{a as VideoPlayground,r as _VideoPlayer,ge as __namedExportsOrder,he as default};
