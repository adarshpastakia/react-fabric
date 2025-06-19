import{r as p,j as o}from"./iframe-DcfUrZ2L.js";import"./index-Bl9sirez.js";import{V as c}from"./Viewport-CcMKmxve.js";import{V as s}from"./VideoPlayer-Bi-Ugs47.js";import{s as d}from"./small_video-NX_N1r-3.js";import"./Section-Dbs60dt2.js";import"./ErrorBoundary-CbzvQFF-.js";import"./createClass-D99gLwRj.js";import"./Global-CmkQSaMP.js";import"./Button-7pM1lgGA.js";import"./Tooltip-Dv6V4Byx.js";import"./useResizeObserver-L_IFJsPD.js";import"./useDebounce-oR1dm03r.js";import"./HeadFoot-BdfsRs4J.js";import"./Divider-DRJ3j7C2.js";import"./Text-BAk0flt3.js";import"./usePropToggle-DoIYClWc.js";import"./types-DXUe1Zpb.js";import"./ColorPicker-B2sfWfiP.js";import"./Google-DSP-6Nrb.js";import"./zh-CN-DsRk4IYs.js";import"./endOfDay-Danle8jh.js";import"./index-zx9qXRA4.js";import"./index-Iz_3oi3Q.js";import"./InputWrapper-Bmbugn7q.js";import"./_debounce-BHO_GiD4.js";import"./_isEqual-PxFgnGsO.js";import"./ThemeProvider-CYuvVWYe.js";import"./Dropdown-Cqgvd0wk.js";import"./Panel-Gs9yXmgf.js";import"./Content-Cwxt_19N.js";import"./Textarea-DiMGPEUC.js";import"./eventHandlers-BDcAz1uA.js";import"./floating-ui.react-DaYvvi0U.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,J={component:s,title:"@media/VideoPlayer",parameters:{layout:"fullscreen",controls:{exclude:"children"}}},g=new Array(300).fill([]).map((r,e)=>[Math.random()*30.5,Math.random()]),h=`WEBVTT

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
`,t={render:r=>{const[e,m]=p.useState([[2.49,"Testing"],[18.24,"Testing"]]);return o.jsx("div",{className:"min-h-[600px]",children:o.jsx(c,{children:o.jsx(s,{...r,markers:g,vttText:h,annotations:e,onAnnotationChange:m})})})},args:{src:d,onCut:l()}};var n,i,a;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => {
    const [annotations, setAnnotations] = useState<AnyObject>([[2.49, "Testing"], [18.24, "Testing"]]);
    return <div className="min-h-[600px]">
        <Viewport>
          <VideoPlayer {...args} markers={markers} vttText={vtt} annotations={annotations} onAnnotationChange={setAnnotations} />
        </Viewport>
      </div>;
  },
  args: {
    src,
    onCut: fn()
  }
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const Q=["_VideoPlayer"];export{t as _VideoPlayer,Q as __namedExportsOrder,J as default};
