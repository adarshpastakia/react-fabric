import{j as r}from"./iframe-DZ_tjZ0H.js";import{f as a}from"./index4.js";import"./index2.js";import{R as l,C as t}from"./Responsive.js";import{T as i}from"./VideoPlayer.js";import"./Section.js";import"./ErrorBoundary.js";import"./createClass.js";import"./Global.js";import"./Button.js";import"./Tooltip.js";import"./useResizeObserver.js";import"./useDebounce.js";import"./HeadFoot.js";import"./Divider.js";import"./Text.js";import"./usePropToggle.js";import"./types.js";import"./ColorPicker.js";import"./Google.js";import"./zh-CN.js";import"./endOfDay.js";import"./index5.js";import"./index3.js";import"./InputWrapper.js";import"./ErrorIcon.js";import"./debounce.js";import"./isEqual.js";import"./ThemeProvider.js";import"./useResize.js";import"./Dropdown.js";import"./Panel.js";import"./Content.js";import"./Textarea.js";import"./eventHandlers.js";import"./floating-ui.react.js";const P={component:i,title:"@media/Thumbnail",parameters:{layout:"centered",controls:{exclude:"children"}}},o={render:m=>r.jsxs(l,{children:[r.jsxs(t,{children:[r.jsx("p",{children:"Valid image"}),r.jsx(i,{...m,src:a.image.url()})]}),r.jsxs(t,{children:[r.jsx("p",{children:"Fallback image"}),r.jsx(i,{...m,src:"badurl.png",fallback:a.image.url()})]}),r.jsxs(t,{children:[r.jsx("p",{children:"Default icon"}),r.jsx(i,{...m,src:"badurl.png"})]})]}),args:{}};var p,e,n;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    return <Row>
        <Col>
          <p>Valid image</p>
          <Thumbnail {...args} src={faker.image.url()} />
        </Col>
        <Col>
          <p>Fallback image</p>
          <Thumbnail {...args} src="badurl.png" fallback={faker.image.url()} />
        </Col>
        <Col>
          <p>Default icon</p>
          <Thumbnail {...args} src="badurl.png" />
        </Col>
      </Row>;
  },
  args: {}
}`,...(n=(e=o.parameters)==null?void 0:e.docs)==null?void 0:n.source}}};const Q=["_Thumbnail"];export{o as _Thumbnail,Q as __namedExportsOrder,P as default};
