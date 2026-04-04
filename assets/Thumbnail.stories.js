import{n as e,r as t}from"./chunk.js";import{t as n}from"./jsx-runtime.js";import{h as r,m as i,t as a}from"./iframe-B-Wcw5ev.js";import{r as o,t as s}from"./dist28.js";import{n as c,t as l}from"./src7.js";var u=t({_Thumbnail:()=>p,__namedExportsOrder:()=>m,default:()=>f}),d,f,p,m,h=e((()=>{s(),a(),l(),d=n(),f={component:c,title:`@media/Thumbnail`,parameters:{layout:`centered`,controls:{exclude:`children`}}},p={render:e=>(0,d.jsxs)(r,{children:[(0,d.jsxs)(i,{children:[(0,d.jsx)(`p`,{children:`Valid image`}),(0,d.jsx)(c,{...e,src:o.image.url({width:256,height:256})})]}),(0,d.jsxs)(i,{children:[(0,d.jsx)(`p`,{children:`Fallback sources`}),(0,d.jsx)(c,{...e,src:[`badurl.png`,o.image.url({width:256,height:256})]})]}),(0,d.jsxs)(i,{children:[(0,d.jsx)(`p`,{children:`Transparent light`}),(0,d.jsx)(c,{...e,src:`/colorset/white1.png`})]}),(0,d.jsxs)(i,{children:[(0,d.jsx)(`p`,{children:`Transparent dark`}),(0,d.jsx)(c,{...e,src:`/colorset/black1.png`})]}),(0,d.jsxs)(i,{children:[(0,d.jsx)(`p`,{children:`Default icon`}),(0,d.jsx)(c,{...e,src:`badurl.png`})]})]}),args:{}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Row>
        <Col>
          <p>Valid image</p>
          <Thumbnail {...args} src={faker.image.url({
          width: 256,
          height: 256
        })} />
        </Col>
        <Col>
          <p>Fallback sources</p>
          <Thumbnail {...args} src={["badurl.png", faker.image.url({
          width: 256,
          height: 256
        })]} />
        </Col>
        <Col>
          <p>Transparent light</p>
          <Thumbnail {...args} src="/colorset/white1.png" />
        </Col>
        <Col>
          <p>Transparent dark</p>
          <Thumbnail {...args} src="/colorset/black1.png" />
        </Col>
        <Col>
          <p>Default icon</p>
          <Thumbnail {...args} src="badurl.png" />
        </Col>
      </Row>;
  },
  args: {}
}`,...p.parameters?.docs?.source}}},m=[`_Thumbnail`]}));h();export{p as _Thumbnail,m as __namedExportsOrder,f as default,h as n,u as t};