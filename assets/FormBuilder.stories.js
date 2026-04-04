import{a as e,n as t}from"./chunk.js";import{t as n}from"./react.js";import{t as r}from"./jsx-runtime.js";import{L as i,lt as a}from"./ResizeObserver.es.js";import{H as o,L as s,R as c,Y as l,d as u,it as d,t as f}from"./iframe-B-Wcw5ev.js";import{a as p,i as m,n as h,r as g,t as _}from"./core2.js";import{D as v,E as y,O as b,_ as x,d as S,t as C}from"./src6.js";var w,T,E,D,O,k;t((()=>{f(),i(),m(),_(),w=e(n()),C(),v(),T=r(),E={component:b,title:`@form/_Form Builder_`,parameters:{layout:`fullscreen`,controls:{exclude:`children`},msw:{handlers:[g.post(`/api/upload`,async({request:e})=>{let t=(await e.formData()).get(`file`);return h.json({path:`storage://fullpath/`+t?.name})})]}}},D=[{id:`avatar`,label:`Avatar`,datatype:y.AVATAR,required:!0},{id:`name`,label:`Name`,datatype:y.STRING,required:!0},{id:`age`,label:`Age`,datatype:y.NUMBER,required:!0,min:16,max:65},{id:`dob`,label:`DOB`,datatype:y.DATE,required:!0,max:new Date},{id:`skills`,label:`skills`,datatype:y.STRING,required:!0,multiple:!0},{id:`range`,label:`range`,datatype:y.RANGE,min:1,max:10,step:.5},{id:`notes`,label:`Notes`,datatype:y.TEXT},{id:`option`,label:`Option`,datatype:y.STRING,optionList:`--CUSTOM--`,options:[`One`,`Two`,`Three`],allowCustom:!0},{id:`optionList`,label:`Defined list`,datatype:y.STRING,optionList:`countries`},{id:`files`,label:`Files`,datatype:y.FILE,required:!0,multiple:!0},{id:`agree`,label:`Agreement?`,datatype:y.BOOL}],O={render:e=>{let t=p.create({}),n=(e,n)=>t.postForm(`/api/upload`,e,n).then(e=>e.data?.path??`pathfor file`),[r,i]=(0,w.useState)(D),[f,m]=(0,w.useState)({name:`Person name`,age:36,avatar:`storage://fullpath/avatar.png`,files:[{path:`storage://fullpath/test.png`,filename:`test.png`,size:800,mime:`image/png`}]}),{formDef:h,resolver:g}=S(r,{uploadHandler:n,optionLists:{countries:{options:a.list,valueProperty:`cca3`,labelProperty:`name.common`,groupProperty:`region`}}});return(0,T.jsx)(`div`,{className:`min-h-[600px]`,children:(0,T.jsxs)(u,{children:[(0,T.jsxs)(c,{flex:!0,className:`px-2 py-1 bg-default`,children:[(0,T.jsx)(o,{children:`Form Builder`}),(0,T.jsxs)(`div`,{className:`p-2 bg-tint-100 font-medium rounded`,children:[(0,T.jsx)(d,{icon:`mdi mdi-flask`}),(0,T.jsx)(`span`,{children:`Experimental`})]})]}),(0,T.jsxs)(`div`,{className:`grid grid-cols-3 overflow-hidden area-content p-2 gap-2`,children:[(0,T.jsx)(`div`,{className:`grid rounded-capped outline overflow-hidden bg-default`,style:{gridTemplate:`"head" auto "content" 1fr "foot" auto / 1fr`},children:(0,T.jsx)(x,{dynamic:!0,schemaDef:r,onSubmit:e=>{i(e)},optionLists:[`countries`],children:(0,T.jsx)(l,{type:`submit`,variant:`solid`,children:`Update`})})}),(0,T.jsx)(`div`,{className:`overflow-auto bg-default outline rounded-capped`,children:(0,T.jsxs)(b,{resolver:g,defaultValues:f,onSubmit:m,children:[(0,T.jsx)(`div`,{className:`p-6`,children:h}),(0,T.jsxs)(s,{flex:!0,justify:`end`,className:`sticky bottom-0 border-t bg-default px-6 py-2`,children:[(0,T.jsx)(l,{type:`reset`,variant:`link`,children:`Reset`}),(0,T.jsx)(l,{type:`submit`,variant:`solid`,children:`Submit`})]})]})}),(0,T.jsx)(`div`,{className:`overflow-auto p-6 bg-default outline rounded-capped`,children:(0,T.jsx)(`pre`,{children:JSON.stringify(f,null,4)})})]})]})})},args:{}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => {
    const http = axios.create({});
    const uploadHandler = (data: FormData, config: AnyObject) => http.postForm("/api/upload", data, config).then(resp => resp.data?.path ?? "pathfor file");
    const [schema, setSchema] = useState<AnyObject[]>(defaultSchema);
    const [formValues, setFormValues] = useState<AnyObject>({
      name: "Person name",
      age: 36,
      avatar: "storage://fullpath/avatar.png",
      files: [{
        path: "storage://fullpath/test.png",
        filename: "test.png",
        size: 800,
        mime: "image/png"
      }]
    });
    const {
      formDef,
      resolver
    } = useFormBuilder(schema, {
      uploadHandler,
      optionLists: {
        countries: {
          options: Countries.list,
          valueProperty: "cca3",
          labelProperty: "name.common",
          groupProperty: "region"
        }
      }
    });
    return <div className="min-h-[600px]">
        <Viewport>
          <Header flex className="px-2 py-1 bg-default">
            <Title>Form Builder</Title>
            <div className="p-2 bg-tint-100 font-medium rounded">
              <Icon icon="mdi mdi-flask" />
              <span>Experimental</span>
            </div>
          </Header>
          <div className="grid grid-cols-3 overflow-hidden area-content p-2 gap-2">
            <div className="grid rounded-capped outline overflow-hidden bg-default" style={{
            gridTemplate: \`"head" auto "content" 1fr "foot" auto / 1fr\`
          }}>
              <SchemaEditor dynamic schemaDef={schema} onSubmit={m => {
              setSchema(m);
            }} optionLists={["countries"]}>
                <Button type="submit" variant="solid">
                  Update
                </Button>
              </SchemaEditor>
            </div>
            <div className="overflow-auto bg-default outline rounded-capped">
              <Form resolver={resolver} defaultValues={formValues} onSubmit={setFormValues}>
                <div className="p-6">{formDef}</div>

                <Footer flex justify="end" className="sticky bottom-0 border-t bg-default px-6 py-2">
                  <Button type="reset" variant="link">
                    Reset
                  </Button>
                  <Button type="submit" variant="solid">
                    Submit
                  </Button>
                </Footer>
              </Form>
            </div>
            <div className="overflow-auto p-6 bg-default outline rounded-capped">
              <pre>{JSON.stringify(formValues, null, 4)}</pre>
            </div>
          </div>
        </Viewport>
      </div>;
  },
  args: {}
}`,...O.parameters?.docs?.source}}},k=[`FormBuilder`]}))();export{O as FormBuilder,k as __namedExportsOrder,E as default};