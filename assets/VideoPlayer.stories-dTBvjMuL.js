import{r as p,j as o}from"./iframe-DL5PLccW.js";import"./index-DPKHNOa8.js";import{V as c}from"./Viewport-v3RQO1q4.js";import{V as s}from"./VideoPlayer-BDAuu8SK.js";import{s as d}from"./small_video-NX_N1r-3.js";import"./Section-m1pcBAPK.js";import"./ErrorBoundary-Bl2NAeUv.js";import"./createClass-DjEsl4fx.js";import"./Global-Dhvrkiym.js";import"./Button-B4MR9BdT.js";import"./Tooltip-BPKa3gaw.js";import"./useResizeObserver-Bn-Pa1XM.js";import"./useDebounce-DUBqCfh2.js";import"./HeadFoot-BOKBTLfn.js";import"./Divider-DeNf5KPC.js";import"./Text-CwzsJ7bo.js";import"./usePropToggle-D4M8sFrj.js";import"./types-DXUe1Zpb.js";import"./ColorPicker-Cc5ydKIF.js";import"./Google-B5-g4RDV.js";import"./zh-CN-FY2s-MwU.js";import"./endOfDay-BUPtmEN8.js";import"./index-B0-PBx-s.js";import"./index-HqHJXvHv.js";import"./InputWrapper-M6su9Q9e.js";import"./_debounce-BHO_GiD4.js";import"./_isEqual-Q02tGGHK.js";import"./ThemeProvider-7wvBaeKK.js";import"./Dropdown-BkPoAgTO.js";import"./Panel-xJsBWFXK.js";import"./Content-BWk5dK7X.js";import"./Textarea-BRaMRzje.js";import"./eventHandlers-CcecLcKh.js";import"./floating-ui.react-CT9AAP4P.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,J={component:s,title:"@media/VideoPlayer",parameters:{layout:"fullscreen",controls:{exclude:"children"}}},g=new Array(300).fill([]).map((r,e)=>[Math.random()*30.5,Math.random()]),h=`WEBVTT

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
