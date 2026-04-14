import{n as e,r as t}from"./chunk.js";import{t as n}from"./jsx-runtime.js";import{C as r,L as i,R as a}from"./iframe-Du5FrOxJ.js";import{r as o,t as s}from"./dist28.js";import{n as c,t as l}from"./src7.js";import{i as u,n as d,r as f,t as p}from"./white1.js";var m=t({_Thumbnail:()=>_,__namedExportsOrder:()=>v,default:()=>g}),h,g,_,v,y=e((()=>{s(),r(),l(),u(),p(),h=n(),g={component:c,title:`@media/Thumbnail`,parameters:{layout:`centered`,controls:{exclude:`children`}}},_={render:e=>(0,h.jsxs)(a,{children:[(0,h.jsxs)(i,{children:[(0,h.jsx)(`p`,{children:`Valid image`}),(0,h.jsx)(c,{...e,src:o.image.url({width:256,height:256})})]}),(0,h.jsxs)(i,{children:[(0,h.jsx)(`p`,{children:`Fallback sources`}),(0,h.jsx)(c,{...e,src:[`badurl.png`,o.image.url({width:256,height:256})]})]}),(0,h.jsxs)(i,{children:[(0,h.jsx)(`p`,{children:`Transparent light`}),(0,h.jsx)(c,{...e,src:d})]}),(0,h.jsxs)(i,{children:[(0,h.jsx)(`p`,{children:`Transparent dark`}),(0,h.jsx)(c,{...e,src:f})]}),(0,h.jsxs)(i,{children:[(0,h.jsx)(`p`,{children:`Default icon`}),(0,h.jsx)(c,{...e,src:`badurl.png`})]})]}),args:{}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
          <Thumbnail {...args} src={sampleWhite} />
        </Col>
        <Col>
          <p>Transparent dark</p>
          <Thumbnail {...args} src={sampleBlack} />
        </Col>
        <Col>
          <p>Default icon</p>
          <Thumbnail {...args} src="badurl.png" />
        </Col>
      </Row>;
  },
  args: {}
}`,..._.parameters?.docs?.source}}},v=[`_Thumbnail`]}));y();export{_ as _Thumbnail,v as __namedExportsOrder,g as default,y as n,m as t};