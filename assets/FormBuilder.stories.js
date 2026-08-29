import{n as e}from"./rolldown-runtime.js";import{t}from"./react.js";import{d as n,r}from"./EmptyContent.js";import{O as i,T as a,et as o,k as s,n as c,t as l}from"./src.js";import{Et as u,It as d,Lt as f,Yt as p,t as m}from"./src2.js";import{t as h}from"./jsx-runtime.js";import{c as g,s as _}from"./cookieStore.js";import{i as v,n as y,r as b,t as x}from"./axios.js";import{i as S,t as C}from"./src6.js";var w,T,E,D,O,k;function A(){return(A=e((()=>{m(),l(),C(),y(),v(),g(),w=t(),s(),T=h(),E={component:o,title:`@form/_Form Builder_`,parameters:{layout:`fullscreen`,controls:{exclude:`children`},msw:{handlers:[b.post(`/api/upload`,async({request:e})=>{let t=(await e.formData()).get(`file`);return _.json({path:`storage://fullpath/`+t?.name})})]}}},D=[{id:`avatar`,label:`Avatar`,datatype:i.AVATAR,required:!0},{id:`name`,label:`Name`,datatype:i.STRING,required:!0},{id:`age`,label:`Age`,datatype:i.NUMBER,required:!0,min:16,max:65},{id:`dob`,label:`DOB`,datatype:i.DATE,required:!0,max:new Date},{id:`skills`,label:`skills`,datatype:i.STRING,required:!0,multiple:!0},{id:`range`,label:`range`,datatype:i.RANGE,min:1,max:10,step:.5},{id:`notes`,label:`Notes`,datatype:i.TEXT},{id:`option`,label:`Option`,datatype:i.STRING,optionList:`--CUSTOM--`,options:[`One`,`Two`,`Three`],allowCustom:!0},{id:`optionList`,label:`Defined list`,datatype:i.STRING,optionList:`countries`},{id:`files`,label:`Files`,datatype:i.FILE,required:!0,multiple:!0},{id:`agree`,label:`Agreement?`,datatype:i.BOOL}],O={render:e=>{let t=x.create({}),i=(e,n)=>t.postForm(`/api/upload`,e,n).then(e=>e.data?.path??`pathfor file`),[s,l]=(0,w.useState)(D),[m,h]=(0,w.useState)({name:`Person name`,age:36,avatar:`storage://fullpath/avatar.png`,files:[{path:`storage://fullpath/test.png`,filename:`test.png`,size:800,mime:`image/png`}]}),{formDef:g,resolver:_}=a(s,{uploadHandler:i,optionLists:{countries:{options:S.list,valueProperty:`cca3`,labelProperty:`name.common`,groupProperty:`region`}}});return(0,T.jsx)(`div`,{className:`min-h-150`,children:(0,T.jsxs)(u,{children:[(0,T.jsxs)(f,{flex:!0,className:`px-2 py-1 bg-default`,children:[(0,T.jsx)(p,{children:`Form Builder`}),(0,T.jsxs)(`div`,{className:`p-2 bg-tint-100 font-medium rounded`,children:[(0,T.jsx)(n,{icon:`mdi mdi-flask`}),(0,T.jsx)(`span`,{children:`Experimental`})]})]}),(0,T.jsxs)(`div`,{className:`grid grid-cols-3 overflow-hidden area-content p-2 gap-2`,children:[(0,T.jsx)(`div`,{className:`grid rounded-capped outline overflow-hidden bg-default`,style:{gridTemplate:`"header" auto "content" 1fr "footer" auto / 1fr`},children:(0,T.jsx)(c,{dynamic:!0,schemaDef:s,onSubmit:e=>{l(e)},optionLists:[`countries`],children:(0,T.jsx)(r,{type:`submit`,variant:`solid`,children:`Update`})})}),(0,T.jsx)(`div`,{className:`overflow-auto bg-default outline rounded-capped`,children:(0,T.jsxs)(o,{resolver:_,defaultValues:m,onSubmit:h,children:[(0,T.jsx)(`div`,{className:`p-6`,children:g}),(0,T.jsxs)(d,{flex:!0,justify:`end`,className:`sticky bottom-0 border-t bg-default px-6 py-2`,children:[(0,T.jsx)(r,{type:`reset`,variant:`link`,children:`Reset`}),(0,T.jsx)(r,{type:`submit`,variant:`solid`,children:`Submit`})]})]})}),(0,T.jsx)(`div`,{className:`overflow-auto p-6 bg-default outline rounded-capped`,children:(0,T.jsx)(`pre`,{children:JSON.stringify(m,null,4)})})]})]})})},args:{}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
    return <div className="min-h-150">
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
            gridTemplate: \`"header" auto "content" 1fr "footer" auto / 1fr\`
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
}`,...O.parameters?.docs?.source}}},k=[`FormBuilder`]})))()}A();export{O as FormBuilder,k as __namedExportsOrder,E as default};