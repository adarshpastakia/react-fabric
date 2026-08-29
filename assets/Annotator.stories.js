import{n as e}from"./rolldown-runtime.js";import{t}from"./react.js";import{g as n,m as r,t as i}from"./src.js";import{Et as a,J as o,Vt as s,t as c,zt as l}from"./src2.js";import{t as u}from"./jsx-runtime.js";import{f as d,m as f,t as p}from"./src3.js";var m;function h(){return(h=e((()=>{m=``+new URL(`sample_form-DG1G8AND.png`,import.meta.url).href})))()}var g;function _(){return(_=e((()=>{g=``+new URL(`sample_invoice1-PfjK_tZm.png`,import.meta.url).href})))()}var v;function y(){return(y=e((()=>{v=``+new URL(`sample_invoice2-yiwvgc2D.webp`,import.meta.url).href})))()}var b;function x(){return(x=e((()=>{b=``+new URL(`sample_invoice3-CTtEMUfa.jpeg`,import.meta.url).href})))()}var S,C,w,T,E;function D(){return(D=e((()=>{c(),i(),p(),S=t(),h(),_(),y(),x(),C=u(),w={component:d,title:`@media/Annotator`,parameters:{layout:`fullscreen`,controls:{exclude:`children`}}},T={render:e=>{let[t,i]=(0,S.useState)(m);return(0,C.jsx)(`div`,{className:`min-h-150`,children:(0,C.jsxs)(a,{children:[(0,C.jsx)(d,{...e,src:t,annotations:[{x:50,y:50,width:320,height:40,id:`1`,type:f.Text},{x:50,y:120,width:320,height:40,id:`2`,type:f.Number},{x:50,y:180,width:320,height:40,id:`3`,type:f.Float}]}),(0,C.jsx)(s,{align:`end`,children:(0,C.jsx)(l,{children:(0,C.jsxs)(o,{legend:`Scan samples`,children:[(0,C.jsx)(`p`,{className:`break-all`,children:t}),(0,C.jsxs)(r,{onChange:i,name:`src`,value:t,vertical:!0,children:[(0,C.jsx)(n,{value:m,label:`Sample Form`}),(0,C.jsx)(n,{value:g,label:`Sample Invoice 1`}),(0,C.jsx)(n,{value:v,label:`Sample Invoice 2`}),(0,C.jsx)(n,{value:b,label:`Sample Invoice 3`})]})]})})})]})})},args:{}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [src, setSrc] = useState(form);
    return <div className="min-h-150">
        <Viewport>
          <Annotator {...args} src={src} annotations={[{
          x: 50,
          y: 50,
          width: 320,
          height: 40,
          id: "1",
          type: AnnotatorFieldType.Text
        }, {
          x: 50,
          y: 120,
          width: 320,
          height: 40,
          id: "2",
          type: AnnotatorFieldType.Number
        }, {
          x: 50,
          y: 180,
          width: 320,
          height: 40,
          id: "3",
          type: AnnotatorFieldType.Float
        }]} />
          <Aside align="end">
            <Content>
              <Callout legend="Scan samples">
                <p className="break-all">{src}</p>
                <RadioGroup onChange={setSrc} name="src" value={src} vertical>
                  <Radio value={form} label="Sample Form" />
                  <Radio value={invoice1} label="Sample Invoice 1" />
                  <Radio value={invoice2} label="Sample Invoice 2" />
                  <Radio value={invoice3} label="Sample Invoice 3" />
                </RadioGroup>
              </Callout>
            </Content>
          </Aside>
        </Viewport>
      </div>;
  },
  args: {
    // onChange: fn(),
  }
}`,...T.parameters?.docs?.source}}},E=[`_Annotator`]})))()}D();export{T as _Annotator,E as __namedExportsOrder,w as default};