import{aS as S,r as s,aT as M,aV as l,aW as F,j as e,aR as k}from"./iframe-DL5PLccW.js";import{f as x}from"./index-CaHJoDsz.js";import{B as d}from"./Button-B4MR9BdT.js";import{b as R}from"./index-DPKHNOa8.js";import{F as V}from"./HeadFoot-BOKBTLfn.js";import{D as z}from"./Divider-DeNf5KPC.js";import{C as O}from"./Content-BWk5dK7X.js";import{a as W,C as n,F as v,u as P,H as B,I as u,N as T,T as E,P as _,M as Z}from"./DualList-BWd_coxF.js";const D={component:v,subcomponents:{Controller:n,ArrayInput:W},title:"@form/Form",parameters:{layout:"fullscreen",controls:{exclude:"schema"},jest:["form/tests/Form.test.tsx"]}};R("form",{en:{firstName:"First Name",lastName:"Last Name",age:"Age",notes:"Notes",username:"Username",passwd:"Password",notStrong:`Password not strong enough, must have
2 uppercase, 2 lowercase, 2 numerals and 2 special character`}});const g={render:p=>{const{t}=S("form"),[o,b]=s.useState([]),[j,A]=P(H),h=s.useRef(M({firstName:l().required().label("form:firstName"),lastName:l().required().label("form:lastName"),age:F().min(18).max(65).required().label("form:age"),username:l().required().min(6).label("form:username"),password:l().required().min(6).label("form:passwd").test("isStrong",(a,i)=>Array.from(a.matchAll(/[A-Z]/g)).length<2||Array.from(a.matchAll(/[a-z]/g)).length<2||Array.from(a.matchAll(/\d/g)).length<2||Array.from(a.matchAll(/\W/g)).length<2?i.createError({message:t("notStrong")}):!0)})),[N,r]=s.useState(0),m=s.useCallback((a="")=>{a||r(0);const i=Array.from(a.matchAll(/[A-Z]/g)).length,y=Array.from(a.matchAll(/[a-z]/g)).length,c=Array.from(a.matchAll(/\d/g)).length,I=Array.from(a.matchAll(/\W/g)).length,f=Math.max(a.length/4,1);r((Math.min(i/f,1)+Math.min(y/f,1)+Math.min(c/f,1)+Math.min(I/f,1))/4)},[]);return e.jsxs("div",{className:"min-h-[600px]",children:[e.jsx(v,{...p,schema:h.current,defaultValues:{firstName:"",lastName:"",age:void 0},children:e.jsxs("div",{className:"mx-auto w-96",children:[e.jsx(n,{name:"files",children:e.jsx(B,{hiddenValue:o})}),e.jsx(n,{name:"firstName",children:e.jsx(u,{autoFocus:!0,required:!0,label:t("firstName")})}),e.jsx(n,{name:"lastName",children:e.jsx(u,{required:!0,label:t("lastName")})}),e.jsx(n,{name:"age",children:e.jsx(T,{required:!0,label:t("age"),info:"Must be between 18 and 65 years"})}),e.jsx(n,{name:"notes",children:e.jsx(E,{required:!0,label:t("notes")})}),e.jsx(z,{}),e.jsx(n,{name:"username",children:e.jsx(u,{required:!0,label:t("username")})}),e.jsx(n,{name:"password",children:e.jsx(_,{showToggle:!0,required:!0,label:t("passwd"),onChange:a=>m(a??""),strength:N})}),e.jsx("div",{className:"p-1 mt-4",children:o.map((a,i)=>e.jsxs("div",{className:"flex gap-2 flex-nowrap text-sm",children:[e.jsx("div",{className:"flex-1 truncate",children:a.name}),e.jsx("div",{children:k.bytes(a.size)})]},i))}),e.jsxs("div",{className:"flex justify-end gap-2 mt-8",children:[e.jsx(d,{onClick:A,children:"Open Modal"}),e.jsx(d,{onClick:()=>b([...o,{name:x.system.fileName(),size:x.number.int({min:500,max:5e5})}]),children:"Add File"}),e.jsx(d,{type:"reset",variant:"outline",onClick:()=>r(0),children:"Reset"}),e.jsx(d,{type:"submit",variant:"solid",children:"Submit"})]})]})}),j]})},args:{}},H=p=>{const{t}=S("form"),[o,b]=s.useState([]),j=s.useRef(M({firstName:l().required().label("form:firstName"),lastName:l().required().label("form:lastName"),age:F().min(18).max(65).required().label("form:age"),username:l().required().min(6).label("form:username"),password:l().required().min(6).label("form:passwd").test("isStrong",(r,m)=>Array.from(r.matchAll(/[A-Z]/g)).length<2||Array.from(r.matchAll(/[a-z]/g)).length<2||Array.from(r.matchAll(/\d/g)).length<2||Array.from(r.matchAll(/\W/g)).length<2?m.createError({message:t("notStrong")}):!0)})),[A,h]=s.useState(0),N=s.useCallback((r="")=>{r||h(0);const m=Array.from(r.matchAll(/[A-Z]/g)).length,a=Array.from(r.matchAll(/[a-z]/g)).length,i=Array.from(r.matchAll(/\d/g)).length,y=Array.from(r.matchAll(/\W/g)).length,c=Math.max(r.length/4,1);h((Math.min(m/c,1)+Math.min(a/c,1)+Math.min(i/c,1)+Math.min(y/c,1))/4)},[]);return e.jsx(Z,{title:"Modal Form",width:"24rem",onClose:p.onClose,children:e.jsxs(v,{schema:j.current,defaultValues:{firstName:"",lastName:"",age:void 0},children:[e.jsxs(O,{children:[e.jsx(n,{name:"files",children:e.jsx(B,{hiddenValue:o})}),e.jsx(n,{name:"firstName",children:e.jsx(u,{autoFocus:!0,required:!0,label:t("firstName")})}),e.jsx(n,{name:"lastName",children:e.jsx(u,{required:!0,label:t("lastName")})}),e.jsx(n,{name:"age",children:e.jsx(T,{required:!0,label:t("age"),info:"Must be between 18 and 65 years"})}),e.jsx(n,{name:"notes",children:e.jsx(E,{required:!0,label:t("notes"),expandable:!0})}),e.jsx(z,{}),e.jsx(n,{name:"username",children:e.jsx(u,{required:!0,label:t("username")})}),e.jsx(n,{name:"password",children:e.jsx(_,{showToggle:!0,required:!0,label:t("passwd"),onChange:r=>N(r??""),strength:A})}),e.jsx("div",{className:"p-1 mt-4",children:o.map((r,m)=>e.jsxs("div",{className:"flex gap-2 flex-nowrap text-sm",children:[e.jsx("div",{className:"flex-1 truncate",children:r.name}),e.jsx("div",{children:k.bytes(r.size)})]},m))})]}),e.jsxs(V,{className:"flex justify-end gap-2 mt-8",children:[e.jsx(d,{onClick:()=>b([...o,{name:x.system.fileName(),size:x.number.int({min:500,max:5e5})}]),children:"Add File"}),e.jsx(d,{type:"reset",variant:"outline",onClick:()=>h(0),children:"Reset"}),e.jsx(d,{type:"submit",variant:"solid",children:"Submit"})]})]})})};var w,C,q;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation("form");
    const [files, setFiles] = useState<KeyValue[]>([]);
    const [ModalEl, openModal] = useOverlayService(ModalForm);
    const schema = useRef(yup.object({
      firstName: yup.string().required().label("form:firstName"),
      lastName: yup.string().required().label("form:lastName"),
      age: yup.number().min(18).max(65).required().label("form:age"),
      username: yup.string().required().min(6).label("form:username"),
      password: yup.string().required().min(6).label("form:passwd").test("isStrong", (value, context) => {
        if (Array.from(value.matchAll(/[A-Z]/g)).length < 2 || Array.from(value.matchAll(/[a-z]/g)).length < 2 || Array.from(value.matchAll(/\\d/g)).length < 2 || Array.from(value.matchAll(/\\W/g)).length < 2) {
          return context.createError({
            message: t("notStrong")
          });
        }
        return true;
      })
    }));
    const [strength, setStrength] = useState(0);
    const calculateStrength = useCallback((value: string = "") => {
      if (!value) setStrength(0);
      const upper = Array.from(value.matchAll(/[A-Z]/g)).length;
      const lower = Array.from(value.matchAll(/[a-z]/g)).length;
      const digit = Array.from(value.matchAll(/\\d/g)).length;
      const special = Array.from(value.matchAll(/\\W/g)).length;
      const delta = Math.max(value.length / 4, 1);
      setStrength((Math.min(upper / delta, 1) + Math.min(lower / delta, 1) + Math.min(digit / delta, 1) + Math.min(special / delta, 1)) / 4);
    }, []);
    return <div className="min-h-[600px]">
        <Form {...args} schema={schema.current} defaultValues={{
        firstName: "",
        lastName: "",
        age: undefined
      }}>
          <div className="mx-auto w-96">
            <Controller name="files">
              <HiddenInput hiddenValue={files} />
            </Controller>
            <Controller name="firstName">
              <Input autoFocus required label={t("firstName")} />
            </Controller>
            <Controller name="lastName">
              <Input required label={t("lastName")} />
            </Controller>
            <Controller name="age">
              <Number required label={t("age")} info="Must be between 18 and 65 years" />
            </Controller>
            <Controller name="notes">
              <Textarea required label={t("notes")} />
            </Controller>
            <Divider />
            <Controller name="username">
              <Input required label={t("username")} />
            </Controller>
            <Controller name="password">
              <Password showToggle required label={t("passwd")} onChange={v => calculateStrength(v ?? "")} strength={strength} />
            </Controller>

            <div className="p-1 mt-4">
              {files.map((file, idx) => <div key={idx} className="flex gap-2 flex-nowrap text-sm">
                  <div className="flex-1 truncate">{file.name}</div>
                  <div>{Format.bytes(file.size)}</div>
                </div>)}
            </div>

            <div className="flex justify-end gap-2 mt-8">
              <Button onClick={openModal}>Open Modal</Button>
              <Button onClick={() => setFiles([...files, {
              name: faker.system.fileName(),
              size: faker.number.int({
                min: 500,
                max: 500000
              })
            }])}>
                Add File
              </Button>
              <Button type="reset" variant="outline" onClick={() => setStrength(0)}>
                Reset
              </Button>
              <Button type="submit" variant="solid">
                Submit
              </Button>
            </div>
          </div>
        </Form>
        {ModalEl}
      </div>;
  },
  args: {}
}`,...(q=(C=g.parameters)==null?void 0:C.docs)==null?void 0:q.source}}};const $=["_Form"],ee=Object.freeze(Object.defineProperty({__proto__:null,_Form:g,__namedExportsOrder:$,default:D},Symbol.toStringTag,{value:"Module"}));export{ee as F,g as _};
