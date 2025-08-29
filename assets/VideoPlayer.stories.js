import{r as p,j as o}from"./iframe-DvMcemLF.js";import"./index2.js";import{V as c}from"./Viewport.js";import{V as s}from"./VideoPlayer.js";import{s as d}from"./small_video.js";import"./Section.js";import"./ErrorBoundary.js";import"./createClass.js";import"./Global.js";import"./Button.js";import"./Tooltip.js";import"./useResizeObserver.js";import"./useDebounce.js";import"./HeadFoot.js";import"./Divider.js";import"./Text.js";import"./usePropToggle.js";import"./types.js";import"./ColorPicker.js";import"./Google.js";import"./zh-CN.js";import"./endOfDay.js";import"./index5.js";import"./index3.js";import"./debounce.js";import"./isEqual.js";import"./ThemeProvider.js";import"./useResize.js";import"./Dropdown.js";import"./Card2.js";import"./nodeCheck.js";import"./InputWrapper.js";import"./ErrorIcon.js";import"./Panel.js";import"./Content.js";import"./Textarea.js";import"./eventHandlers.js";import"./floating-ui.react.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,$={component:s,title:"@media/VideoPlayer",parameters:{layout:"fullscreen",controls:{exclude:"children"}}},g=new Array(300).fill([]).map((r,e)=>[Math.random()*30.5,Math.random()]),h=`WEBVTT

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
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const tt=["_VideoPlayer"];export{t as _VideoPlayer,tt as __namedExportsOrder,$ as default};
