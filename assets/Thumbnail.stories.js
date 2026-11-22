import{n as e,r as t}from"./rolldown-runtime.js";import{t as n}from"./jsx-runtime.js";import{At as r,Mt as i,t as a}from"./src2.js";import{n as o,t as s}from"./en.js";import{n as c,t as l}from"./src8.js";import{i as u,n as d,r as f,t as p}from"./white1.js";var m=t({_Thumbnail:()=>_,__namedExportsOrder:()=>v,default:()=>g}),h,g,_,v;function y(){return(y=e((()=>{a(),l(),s(),u(),p(),h=n(),g={component:c,title:`@media/Thumbnail`,parameters:{layout:`centered`,controls:{exclude:`children`}}},_={render:e=>(0,h.jsxs)(i,{children:[(0,h.jsxs)(r,{children:[(0,h.jsx)(`p`,{children:`Valid image`}),(0,h.jsx)(c,{...e,src:o.image.url({width:256,height:256})})]}),(0,h.jsxs)(r,{children:[(0,h.jsx)(`p`,{children:`Fallback sources`}),(0,h.jsx)(c,{...e,src:[`badurl.png`,o.image.url({width:256,height:256})]})]}),(0,h.jsxs)(r,{children:[(0,h.jsx)(`p`,{children:`Transparent light`}),(0,h.jsx)(c,{...e,src:d})]}),(0,h.jsxs)(r,{children:[(0,h.jsx)(`p`,{children:`Transparent dark`}),(0,h.jsx)(c,{...e,src:f})]}),(0,h.jsxs)(r,{children:[(0,h.jsx)(`p`,{children:`Default icon`}),(0,h.jsx)(c,{...e,src:`badurl.png`})]})]}),args:{}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`_Thumbnail`]})))()}export{_ as n,y as r,m as t};