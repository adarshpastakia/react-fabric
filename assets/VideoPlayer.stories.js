import{r as c,j as o}from"./iframe-Ctw5u0Cj.js";import"./index2.js";import{V as d}from"./Viewport.js";import{V as m}from"./VideoPlayer.js";import{s as l}from"./small_video.js";import"./Section.js";import"./ErrorBoundary.js";import"./createClass.js";import"./Global.js";import"./Button.js";import"./Tooltip.js";import"./useResizeObserver.js";import"./useDebounce.js";import"./HeadFoot.js";import"./Divider.js";import"./Text.js";import"./usePropToggle.js";import"./types.js";import"./ColorPicker.js";import"./Google.js";import"./zh-CN.js";import"./endOfDay.js";import"./index5.js";import"./index3.js";import"./debounce.js";import"./isEqual.js";import"./ThemeProvider.js";import"./useResize.js";import"./Dropdown.js";import"./Card2.js";import"./nodeCheck.js";import"./InputWrapper.js";import"./ErrorIcon.js";import"./Panel.js";import"./Content.js";import"./Textarea.js";import"./eventHandlers.js";import"./floating-ui.react.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,$={component:m,title:"@media/VideoPlayer",parameters:{layout:"fullscreen",controls:{exclude:"children"}}},g=new Array(300).fill([]).map((r,n)=>[Math.random()*30.5,Math.random()]),h=`WEBVTT

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
`,t={render:r=>{const[n,p]=c.useState([[2.49,"Testing"],[18.24,"Testing"]]);return o.jsx("div",{className:"min-h-[600px]",children:o.jsx(d,{children:o.jsx(m,{...r,markers:g,vttText:h,annotations:n,onAnnotationChange:p})})})},args:{src:l,onCut:e(),onCrop:e()}};var i,a,s;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
    onCut: fn(),
    onCrop: fn()
  }
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const tt=["_VideoPlayer"];export{t as _VideoPlayer,tt as __namedExportsOrder,$ as default};
