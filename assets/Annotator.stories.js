import{a as e,n as t}from"./chunk.js";import{t as n}from"./react.js";import{t as r}from"./jsx-runtime.js";import{C as i,H as a,P as o,mt as s,z as c}from"./iframe-BBjx9o_X.js";import{a as l,o as u,t as d}from"./esm.js";import{c as f,s as p,t as m}from"./src7.js";var h,g=t((()=>{h=``+new URL(`sample_form-DG1G8AND.png`,import.meta.url).href})),_,v=t((()=>{_=``+new URL(`sample_invoice1-PfjK_tZm.png`,import.meta.url).href})),y,b=t((()=>{y=``+new URL(`sample_invoice2-yiwvgc2D.webp`,import.meta.url).href})),x,S=t((()=>{x=``+new URL(`sample_invoice3-CTtEMUfa.jpeg`,import.meta.url).href})),C,w,T,E,D;t((()=>{i(),d(),C=e(n()),m(),g(),v(),b(),S(),w=r(),T={component:p,title:`@media/Annotator`,parameters:{layout:`fullscreen`,controls:{exclude:`children`}}},E={render:e=>{let[t,n]=(0,C.useState)(h);return(0,w.jsx)(`div`,{className:`min-h-[600px]`,children:(0,w.jsxs)(o,{children:[(0,w.jsx)(p,{...e,src:t,annotations:[{x:50,y:50,width:320,height:40,id:`1`,type:f.Text},{x:50,y:120,width:320,height:40,id:`2`,type:f.Number},{x:50,y:180,width:320,height:40,id:`3`,type:f.Float}]}),(0,w.jsx)(a,{align:`end`,children:(0,w.jsx)(c,{children:(0,w.jsxs)(s,{legend:`Scan samples`,children:[(0,w.jsx)(`p`,{className:`break-all`,children:t}),(0,w.jsxs)(l,{onChange:n,name:`src`,value:t,vertical:!0,children:[(0,w.jsx)(u,{value:h,label:`Sample Form`}),(0,w.jsx)(u,{value:_,label:`Sample Invoice 1`}),(0,w.jsx)(u,{value:y,label:`Sample Invoice 2`}),(0,w.jsx)(u,{value:x,label:`Sample Invoice 3`})]})]})})})]})})},args:{}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [src, setSrc] = useState(form);
    return <div className="min-h-[600px]">
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
}`,...E.parameters?.docs?.source}}},D=[`_Annotator`]}))();export{E as _Annotator,D as __namedExportsOrder,T as default};