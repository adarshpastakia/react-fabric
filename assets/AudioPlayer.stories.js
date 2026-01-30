import{j as r}from"./iframe-DpfJK_wQ.js";import"./index.js";import{V as c}from"./Viewport.js";import{a as i}from"./VideoPlayer.js";import{b as l}from"./large_video.js";import"./Section.js";import"./ErrorBoundary.js";import"./createClass.js";import"./Global.js";import"./Button.js";import"./Tooltip.js";import"./useResizeObserver.js";import"./useDebounce.js";import"./HeadFoot.js";import"./Divider.js";import"./Text.js";import"./usePropToggle.js";import"./types.js";import"./ColorPicker.js";import"./Google.js";import"./zh-CN.js";import"./endOfDay.js";import"./index5.js";import"./index2.js";import"./debounce.js";import"./isEqual.js";import"./ThemeProvider.js";import"./useResize.js";import"./Dropdown.js";import"./Card2.js";import"./nodeCheck.js";import"./InputWrapper.js";import"./ErrorIcon.js";import"./Panel.js";import"./Content.js";import"./Textarea.js";import"./eventHandlers.js";const u=""+new URL("sample-DOsI675H.mp3",import.meta.url).href,Y={component:i,title:"@media/AudioPlayer",parameters:{layout:"fullscreen",controls:{exclude:"children"}}},n={render:o=>r.jsx("div",{className:"min-h-[600px]",children:r.jsx(c,{children:r.jsx(i,{...o})})}),args:{src:u,regions:[{start:.1,end:1.3,channel:0,id:"any"},{start:5,end:9.3,channel:1,id:"2"}]}},e={render:o=>r.jsx("div",{className:"min-h-[600px]",children:r.jsx(c,{children:r.jsx(i,{forVideo:!0,...o})})}),args:{src:l,regions:[{start:.1,end:1.3,channel:0,id:"any"},{start:5,end:9.3,channel:1,id:"2"}]}};var t,a,s;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => {
    return <div className="min-h-[600px]">
        <Viewport>
          <AudioPlayer {...args} />
        </Viewport>
      </div>;
  },
  args: {
    src: audio,
    regions: [{
      start: 0.1,
      end: 1.3,
      channel: 0,
      id: "any"
    }, {
      start: 5,
      end: 9.3,
      channel: 1,
      id: "2"
    }]
  }
}`,...(s=(a=n.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var m,p,d;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    return <div className="min-h-[600px]">
        <Viewport>
          <AudioPlayer forVideo {...args} />
        </Viewport>
      </div>;
  },
  args: {
    src: video,
    regions: [{
      start: 0.1,
      end: 1.3,
      channel: 0,
      id: "any"
    }, {
      start: 5,
      end: 9.3,
      channel: 1,
      id: "2"
    }]
  }
}`,...(d=(p=e.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const Z=["_AudioPlayer","WithVideo"];export{e as WithVideo,n as _AudioPlayer,Z as __namedExportsOrder,Y as default};
