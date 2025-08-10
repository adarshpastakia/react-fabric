import{r as p,aT as c,j as a,aV as d,bq as B,aW as w,aO as b,aU as g,aN as D,aR as O}from"./iframe-DZ_tjZ0H.js";import{I as A}from"./Tooltip.js";import{B as u}from"./Button.js";import"./index2.js";import{T as R}from"./Title.js";import{H as q,F as V}from"./HeadFoot.js";import{V as H}from"./Viewport.js";import{h as L,H as k,a as I}from"./index6.js";import{n as r,o as P,F as N,p as C}from"./DualList.js";import{E as G}from"./EmptyContent.js";import"./types.js";import"./BasePanel.js";import"./Google.js";import"./createClass.js";import"./zh-CN.js";import"./endOfDay.js";import"./index5.js";import"./getDay.js";import"./useDebounce.js";import"./Content.js";import"./useResizeObserver.js";import"./ErrorBoundary.js";import"./Global.js";import"./ToggleButtonGroup.js";import"./cloneElement.js";import"./Collapsable.js";import"./toArray.js";import"./Avatar2.js";import"./floating-ui.react.js";import"./index3.js";import"./DatePanel.js";import"./ButtonGroup2.js";import"./isEqual.js";import"./dedupe.js";const j=t=>{let e=d().trim();if(t.datatype===r.SCHEMA){const n=Object.fromEntries(t.schema.map(s=>[s.id,j(s)]));e=c(n)}return t.datatype===r.BOOL&&(e=B(),t.required&&(e=e.test({test:n=>!!n}))),(t.datatype===r.NUMBER||t.datatype===r.RANGE)&&(e=w(),!b(t.min)&&(e=e.min(t.min)),!b(t.max)&&(e=e.max(t.max)),t.datatype===r.RANGE&&(e=g(e))),t.datatype===r.STRING&&(t.options&&!t.allowCustom&&(e=e.oneOf(t.options)),t.regex&&(e=e.matches(new RegExp(t.regex)))),t.datatype===r.FILE&&(e=c({filename:d().required(),path:d().required()}).unknown(!0),t.required&&(e=e.test("is-empty",{key:"form:yup.empty",values:{path:t.id,label:t.label}},n=>!D(n)))),t.required&&(e=e.required()),t.multiple&&(e=g(e),t.required&&(e=e.required().min(1))),e.label(t.label)},U=(t,e={})=>{const n=p.useMemo(()=>{var o;return((o=t.filter)==null?void 0:o.call(t,i=>!!i.id))??[]},[t]),s=c(Object.fromEntries(n.map(o=>[o.id,j(o)])));return{formDef:a.jsxs(p.Fragment,{children:[n.map((o,i)=>a.jsx("div",{className:"mb-4",children:o.datatype===r.SCHEMA?null:a.jsx(P,{...o,autoFocus:i===0,fileUrl:e.fileUrl,optionLists:e.optionLists,uploadHandler:e.uploadHandler,inline:e.inline,prefix:e.prefix})},o.id)),n.length===0&&a.jsx(G,{message:"No schema defined"})]}),schemaDef:s}},Fe={component:N,title:"@form/_Form Builder_",parameters:{layout:"fullscreen",controls:{exclude:"children"},msw:{handlers:[L.post("/api/upload",async({request:t})=>{const n=(await t.formData()).get("file");return k.json({path:"storage://fullpath/"+(n==null?void 0:n.name)})})]}}},M=[{id:"avatar",label:"Avatar",datatype:r.AVATAR,required:!0},{id:"name",label:"Name",datatype:r.STRING,required:!0},{id:"age",label:"Age",datatype:r.NUMBER,required:!0,min:16,max:65},{id:"dob",label:"DOB",datatype:r.DATE,required:!0,max:new Date},{id:"skills",label:"skills",datatype:r.STRING,required:!0,multiple:!0},{id:"range",label:"range",datatype:r.RANGE,min:1,max:10,step:.5},{id:"notes",label:"Notes",datatype:r.TEXT},{id:"option",label:"Option",datatype:r.STRING,optionList:"--CUSTOM--",options:["One","Two","Three"],allowCustom:!0},{id:"optionList",label:"Defined list",datatype:r.STRING,optionList:"countries"},{id:"files",label:"Files",datatype:r.FILE,required:!0,multiple:!0},{id:"agree",label:"Agreement?",datatype:r.BOOL}],m={render:t=>{const e=I.create({}),n=(l,E)=>e.postForm("/api/upload",l,E).then(T=>{var h;return((h=T.data)==null?void 0:h.path)??"pathfor file"}),[s,f]=p.useState(M),[o,i]=p.useState({name:"Person name",age:36,avatar:"storage://fullpath/avatar.png",files:[{path:"storage://fullpath/test.png",filename:"test.png",size:800,mime:"image/png"}]}),{formDef:S,schemaDef:F}=U(s,{uploadHandler:n,optionLists:{countries:{options:O.list,valueProperty:"iso2",labelProperty:"name",groupProperty:"continent"}}});return a.jsx("div",{className:"min-h-[600px]",children:a.jsxs(H,{children:[a.jsxs(q,{flex:!0,className:"px-2 py-1 bg-base",children:[a.jsx(R,{children:"Form Builder"}),a.jsxs("div",{className:"p-2 bg-tint-100 font-medium rounded",children:[a.jsx(A,{icon:"mdi mdi-flask"}),a.jsx("span",{children:"Experimental"})]})]}),a.jsxs("div",{className:"grid grid-cols-3 overflow-hidden area-content p-2 gap-2",children:[a.jsx("div",{className:"grid rounded-capped outline overflow-hidden bg-base",style:{gridTemplate:'"head" auto "content" 1fr "foot" auto / 1fr'},children:a.jsx(C,{dynamic:!0,schemaDef:s,onSubmit:l=>{f(l)},optionLists:["countries"],children:a.jsx(u,{type:"submit",variant:"solid",children:"Update"})})}),a.jsx("div",{className:"overflow-auto bg-base outline rounded-capped",children:a.jsxs(N,{schema:F,defaultValues:o,onSubmit:i,children:[a.jsx("div",{className:"p-6",children:S}),a.jsxs(V,{flex:!0,justify:"end",className:"sticky bottom-0 border-t bg-base px-6 py-2",children:[a.jsx(u,{type:"reset",variant:"link",children:"Reset"}),a.jsx(u,{type:"submit",variant:"solid",children:"Submit"})]})]})}),a.jsx("div",{className:"overflow-auto p-6 bg-base outline rounded-capped",children:a.jsx("pre",{children:JSON.stringify(o,null,4)})})]})]})})},args:{}};var y,x,v;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
      schemaDef
    } = useFormBuilder(schema, {
      uploadHandler,
      optionLists: {
        countries: {
          options: Countries.list,
          valueProperty: "iso2",
          labelProperty: "name",
          groupProperty: "continent"
        }
      }
    });
    return <div className="min-h-[600px]">
        <Viewport>
          <Header flex className="px-2 py-1 bg-base">
            <Title>Form Builder</Title>
            <div className="p-2 bg-tint-100 font-medium rounded">
              <Icon icon="mdi mdi-flask" />
              <span>Experimental</span>
            </div>
          </Header>
          <div className="grid grid-cols-3 overflow-hidden area-content p-2 gap-2">
            <div className="grid rounded-capped outline overflow-hidden bg-base" style={{
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
            <div className="overflow-auto bg-base outline rounded-capped">
              <Form schema={schemaDef} defaultValues={formValues} onSubmit={setFormValues}>
                <div className="p-6">{formDef}</div>

                <Footer flex justify="end" className="sticky bottom-0 border-t bg-base px-6 py-2">
                  <Button type="reset" variant="link">
                    Reset
                  </Button>
                  <Button type="submit" variant="solid">
                    Submit
                  </Button>
                </Footer>
              </Form>
            </div>
            <div className="overflow-auto p-6 bg-base outline rounded-capped">
              <pre>{JSON.stringify(formValues, null, 4)}</pre>
            </div>
          </div>
        </Viewport>
      </div>;
  },
  args: {}
}`,...(v=(x=m.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const Ee=["FormBuilder"];export{m as FormBuilder,Ee as __namedExportsOrder,Fe as default};
