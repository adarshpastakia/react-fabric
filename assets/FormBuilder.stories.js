import{r as i,aQ as h,j as a,aS as c,br as B,aT as w,aM as g,aR as y,aL as O,aO as A}from"./iframe-DpfJK_wQ.js";import{I as R}from"./Tooltip.js";import{B as f}from"./Button.js";import"./index.js";import{T as D}from"./Title.js";import{H as q,F as L}from"./HeadFoot.js";import{V}from"./Viewport.js";import{h as H,H as k,a as I}from"./index6.js";import{n as r,o as M,F as j,p as P}from"./DualList.js";import{o as C}from"./BasePanel.js";import{E as G}from"./EmptyContent.js";import"./types.js";import"./useDebounce.js";import"./Google.js";import"./createClass.js";import"./zh-CN.js";import"./endOfDay.js";import"./index5.js";import"./Content.js";import"./useResizeObserver.js";import"./ErrorBoundary.js";import"./Global.js";import"./ToggleButtonGroup.js";import"./cloneElement.js";import"./Collapsable.js";import"./toArray.js";import"./Avatar2.js";import"./index2.js";import"./DatePanel.js";import"./getDay.js";import"./ButtonGroup2.js";import"./isEqual.js";import"./dedupe.js";const S=t=>{let e=c().trim();if(t.datatype===r.SCHEMA){const o=Object.fromEntries(t.schema.map(s=>[s.id,S(s)]));e=h(o)}return t.datatype===r.BOOL&&(e=B(),t.required&&(e=e.test({test:o=>!!o}))),(t.datatype===r.NUMBER||t.datatype===r.RANGE)&&(e=w(),!g(t.min)&&(e=e.min(t.min)),!g(t.max)&&(e=e.max(t.max)),t.datatype===r.RANGE&&(e=y(e))),t.datatype===r.STRING&&(t.options&&!t.allowCustom&&(e=e.oneOf(t.options)),t.regex&&(e=e.matches(new RegExp(t.regex)))),t.datatype===r.FILE&&(e=h({filename:c().required(),path:c().required()}).unknown(!0),t.required&&(e=e.test("is-empty",{key:"form:yup.empty",values:{path:t.id,label:t.label}},o=>!O(o)))),t.required&&(e=e.required()),t.multiple&&(e=y(e),t.required&&(e=e.required().min(1))),e.label(t.label)},U=(t,e={})=>{const o=i.useMemo(()=>{var n;return((n=t.filter)==null?void 0:n.call(t,m=>!!m.id))??[]},[t]),s=i.useMemo(()=>h(Object.fromEntries(o.map(n=>[n.id,S(n)]))),[o]),l=i.useMemo(()=>C(s),[s]);return{formDef:a.jsxs(i.Fragment,{children:[o.map((n,m)=>a.jsx("div",{className:"mb-4",children:n.datatype===r.SCHEMA?null:a.jsx(M,{...n,autoFocus:m===0,fileUrl:e.fileUrl,optionLists:e.optionLists,uploadHandler:e.uploadHandler,inline:e.inline,prefix:e.prefix})},n.id)),o.length===0&&a.jsx(G,{message:"No schema defined"})]}),resolver:l,schemaDef:s}},Fe={component:j,title:"@form/_Form Builder_",parameters:{layout:"fullscreen",controls:{exclude:"children"},msw:{handlers:[H.post("/api/upload",async({request:t})=>{const o=(await t.formData()).get("file");return k.json({path:"storage://fullpath/"+(o==null?void 0:o.name)})})]}}},_=[{id:"avatar",label:"Avatar",datatype:r.AVATAR,required:!0},{id:"name",label:"Name",datatype:r.STRING,required:!0},{id:"age",label:"Age",datatype:r.NUMBER,required:!0,min:16,max:65},{id:"dob",label:"DOB",datatype:r.DATE,required:!0,max:new Date},{id:"skills",label:"skills",datatype:r.STRING,required:!0,multiple:!0},{id:"range",label:"range",datatype:r.RANGE,min:1,max:10,step:.5},{id:"notes",label:"Notes",datatype:r.TEXT},{id:"option",label:"Option",datatype:r.STRING,optionList:"--CUSTOM--",options:["One","Two","Three"],allowCustom:!0},{id:"optionList",label:"Defined list",datatype:r.STRING,optionList:"countries"},{id:"files",label:"Files",datatype:r.FILE,required:!0,multiple:!0},{id:"agree",label:"Agreement?",datatype:r.BOOL}],p={render:t=>{const e=I.create({}),o=(u,E)=>e.postForm("/api/upload",u,E).then(T=>{var b;return((b=T.data)==null?void 0:b.path)??"pathfor file"}),[s,l]=i.useState(_),[d,n]=i.useState({name:"Person name",age:36,avatar:"storage://fullpath/avatar.png",files:[{path:"storage://fullpath/test.png",filename:"test.png",size:800,mime:"image/png"}]}),{formDef:m,resolver:F}=U(s,{uploadHandler:o,optionLists:{countries:{options:A.list,valueProperty:"iso2",labelProperty:"name",groupProperty:"continent"}}});return a.jsx("div",{className:"min-h-[600px]",children:a.jsxs(V,{children:[a.jsxs(q,{flex:!0,className:"px-2 py-1 bg-base",children:[a.jsx(D,{children:"Form Builder"}),a.jsxs("div",{className:"p-2 bg-tint-100 font-medium rounded",children:[a.jsx(R,{icon:"mdi mdi-flask"}),a.jsx("span",{children:"Experimental"})]})]}),a.jsxs("div",{className:"grid grid-cols-3 overflow-hidden area-content p-2 gap-2",children:[a.jsx("div",{className:"grid rounded-capped outline overflow-hidden bg-base",style:{gridTemplate:'"head" auto "content" 1fr "foot" auto / 1fr'},children:a.jsx(P,{dynamic:!0,schemaDef:s,onSubmit:u=>{l(u)},optionLists:["countries"],children:a.jsx(f,{type:"submit",variant:"solid",children:"Update"})})}),a.jsx("div",{className:"overflow-auto bg-base outline rounded-capped",children:a.jsxs(j,{resolver:F,defaultValues:d,onSubmit:n,children:[a.jsx("div",{className:"p-6",children:m}),a.jsxs(L,{flex:!0,justify:"end",className:"sticky bottom-0 border-t bg-base px-6 py-2",children:[a.jsx(f,{type:"reset",variant:"link",children:"Reset"}),a.jsx(f,{type:"submit",variant:"solid",children:"Submit"})]})]})}),a.jsx("div",{className:"overflow-auto p-6 bg-base outline rounded-capped",children:a.jsx("pre",{children:JSON.stringify(d,null,4)})})]})]})})},args:{}};var x,v,N;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
              <Form resolver={resolver} defaultValues={formValues} onSubmit={setFormValues}>
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
}`,...(N=(v=p.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};const Ee=["FormBuilder"];export{p as FormBuilder,Ee as __namedExportsOrder,Fe as default};
