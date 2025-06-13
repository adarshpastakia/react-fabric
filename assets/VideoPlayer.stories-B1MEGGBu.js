import{r as p,j as o}from"./iframe-CVyMRGSP.js";import"./index-D3XXfjI1.js";import{V as c}from"./Viewport-BXUQz2Et.js";import{V as s}from"./VideoPlayer-B5AvfIl2.js";import{s as d}from"./small_video-NX_N1r-3.js";import"./Section-BWnuMXLb.js";import"./ErrorBoundary-1v1ksgaq.js";import"./createClass-eMtQ1dFD.js";import"./Global-BZCLuW51.js";import"./Button-DAqx1TyP.js";import"./Tooltip-D82JqM4y.js";import"./useResizeObserver-CzVPFDEQ.js";import"./useDebounce-Bpvok1Zz.js";import"./HeadFoot-gLuWE0O1.js";import"./Divider-CVDW6mjR.js";import"./Text-B9zAnOfL.js";import"./usePropToggle-BOifV6nf.js";import"./types-DXUe1Zpb.js";import"./ColorPicker-BwNyvkQX.js";import"./Google-DJpRc7c-.js";import"./zh-CN-FLa9i-pX.js";import"./endOfDay-CyHfuoBH.js";import"./index-BJLwolNv.js";import"./index-iLbIT3XK.js";import"./InputWrapper-DFXsbVS4.js";import"./_debounce-BHO_GiD4.js";import"./_isEqual-C0Ek68wL.js";import"./ThemeProvider-CDO2-_ue.js";import"./Dropdown-DQ3PjC0k.js";import"./Panel-DtlJ813n.js";import"./Content-BDvcrf-C.js";import"./Textarea-DXZPjzA-.js";import"./eventHandlers-BD3d4itr.js";import"./floating-ui.react-DNZDxEHZ.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,J={component:s,title:"@media/VideoPlayer",parameters:{layout:"fullscreen",controls:{exclude:"children"}}},g=new Array(300).fill([]).map((r,e)=>[Math.random()*30.5,Math.random()]),h=`WEBVTT

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
