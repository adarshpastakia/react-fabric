import{n as e,r as t}from"./rolldown-runtime.js";import{At as n,Mt as r,t as i}from"./src2.js";import{t as a}from"./jsx-runtime.js";import{n as o,t as s}from"./src3.js";import{n as c,t as l}from"./chunk-NAVWDHVN.js";import{i as u,n as d,r as f,t as p}from"./white1.js";var m=t({_Thumbnail:()=>_,__namedExportsOrder:()=>v,default:()=>g}),h,g,_,v;function y(){return(y=e((()=>{i(),s(),c(),u(),p(),h=a(),g={component:o,title:`@media/Thumbnail`,parameters:{layout:`centered`,controls:{exclude:`children`}}},_={render:e=>(0,h.jsxs)(r,{children:[(0,h.jsxs)(n,{children:[(0,h.jsx)(`p`,{children:`Valid image`}),(0,h.jsx)(o,{...e,src:l.image.url({width:256,height:256})})]}),(0,h.jsxs)(n,{children:[(0,h.jsx)(`p`,{children:`Fallback sources`}),(0,h.jsx)(o,{...e,src:[`badurl.png`,l.image.url({width:256,height:256})]})]}),(0,h.jsxs)(n,{children:[(0,h.jsx)(`p`,{children:`Transparent light`}),(0,h.jsx)(o,{...e,src:d})]}),(0,h.jsxs)(n,{children:[(0,h.jsx)(`p`,{children:`Transparent dark`}),(0,h.jsx)(o,{...e,src:f})]}),(0,h.jsxs)(n,{children:[(0,h.jsx)(`p`,{children:`Default icon`}),(0,h.jsx)(o,{...e,src:`badurl.png`})]})]}),args:{}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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