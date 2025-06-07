import{r as p,j as o}from"./iframe-BcXNitKG.js";import"./index-DUA9IMpG.js";import{V as c}from"./Viewport-y0mN7whU.js";import{V as s}from"./VideoPlayer-C89SP7JF.js";import{s as d}from"./small_video-NX_N1r-3.js";import"./Section-BAtoQgEv.js";import"./ErrorBoundary-C8J7aorp.js";import"./createClass-B8xyeRfs.js";import"./Global-HPy1X0OU.js";import"./Button-7R_E-GE9.js";import"./Tooltip-J_gHpl9C.js";import"./useResizeObserver-Cq2Z_pjG.js";import"./useDebounce-rX8HuXnO.js";import"./HeadFoot-DLpVmsEq.js";import"./Divider-DB8bkHxO.js";import"./Text-LNzV1gTO.js";import"./usePropToggle-Ck2VfQ2Q.js";import"./types-DXUe1Zpb.js";import"./ColorPicker-0pYYboV3.js";import"./Google-DOYfq3v8.js";import"./zh-CN-Bmeuy_N5.js";import"./endOfDay-BHO0gGVd.js";import"./index-Doar7ujF.js";import"./index-CqCs8NGq.js";import"./InputWrapper-DVhr945a.js";import"./_debounce-BHO_GiD4.js";import"./_isEqual-JedAdon-.js";import"./ThemeProvider-BdPoRI6b.js";import"./Dropdown-DUHKUE_z.js";import"./Panel-C49a1LM8.js";import"./Content-BJKCk6Ue.js";import"./Textarea-FrvDVWtZ.js";import"./eventHandlers-JUcml5Fv.js";import"./floating-ui.react-CCZcFCqr.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,J={component:s,title:"@media/VideoPlayer",parameters:{layout:"fullscreen",controls:{exclude:"children"}}},g=new Array(300).fill([]).map((r,e)=>[Math.random()*30.5,Math.random()]),h=`WEBVTT

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
