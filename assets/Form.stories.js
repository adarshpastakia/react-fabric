import{a as e,n as t,r as n}from"./chunk.js";import{t as r}from"./react.js";import{i,t as a}from"./es.js";import{R as o,nt as s}from"./ResizeObserver.es.js";import{a as c,i as l,n as u,r as d}from"./index.esm.js";import{t as f}from"./jsx-runtime.js";import{A as p,C as m,N as h,T as g,et as _,gt as v,ot as y,z as b}from"./iframe-Du5FrOxJ.js";import{r as x,t as S}from"./dist28.js";import{f as C,p as w}from"./es2.js";import{O as T,T as E,b as D,f as O,k,l as A,t as j,w as M,y as N}from"./src6.js";var P=n({_Form:()=>R,__namedExportsOrder:()=>B,default:()=>L}),F,I,L,R,z,B,V=t((()=>{S(),C(),m(),o(),F=e(r()),a(),j(),I=f(),L={component:T,subcomponents:{Controller:k,ArrayInput:E},title:`@form/Form`,parameters:{layout:`fullscreen`,controls:{exclude:`schema`},jest:[`form/tests/Form.test.tsx`]}},h(`form`,{en:{firstName:`First Name`,lastName:`Last Name`,age:`Age`,notes:`Notes`,username:`Username`,passwd:`Password`,notStrong:`Password not strong enough, must have
2 uppercase, 2 lowercase, 2 numerals and 2 special character`}}),R={render:e=>{let{t}=i(`form`),[n,r]=(0,F.useState)([]),[a,o]=g(z),f=(0,F.useRef)(d({firstName:c().required().label(`form:firstName`),lastName:c().required().label(`form:lastName`),age:l().min(18).max(65).required().label(`form:age`),username:c().required().min(6).label(`form:username`),files:u().required().min(1),password:c().required().min(6).label(`form:passwd`).test(`isStrong`,(e,n)=>Array.from(e.matchAll(/[A-Z]/g)).length<2||Array.from(e.matchAll(/[a-z]/g)).length<2||Array.from(e.matchAll(/\d/g)).length<2||Array.from(e.matchAll(/\W/g)).length<2?n.createError({message:t(`notStrong`)}):!0)})),[p,m]=(0,F.useState)(0),h=(0,F.useCallback)((e=``)=>{e||m(0);let t=Array.from(e.matchAll(/[A-Z]/g)).length,n=Array.from(e.matchAll(/[a-z]/g)).length,r=Array.from(e.matchAll(/\d/g)).length,i=Array.from(e.matchAll(/\W/g)).length,a=Math.max(e.length/4,1);m((Math.min(t/a,1)+Math.min(n/a,1)+Math.min(r/a,1)+Math.min(i/a,1))/4)},[]);return(0,I.jsxs)(`div`,{className:`min-h-[600px]`,children:[(0,I.jsx)(T,{resolver:w(f.current),defaultValues:{firstName:``,lastName:``,age:void 0},children:(0,I.jsxs)(`div`,{className:`mx-auto w-96`,children:[(0,I.jsx)(k,{name:`firstName`,children:(0,I.jsx)(M,{autoFocus:!0,required:!0,label:t(`firstName`)})}),(0,I.jsx)(k,{name:`lastName`,children:(0,I.jsx)(M,{required:!0,label:t(`lastName`)})}),(0,I.jsx)(k,{name:`age`,children:(0,I.jsx)(N,{required:!0,label:t(`age`),info:`Must be between 18 and 65 years`})}),(0,I.jsx)(k,{name:`notes`,children:(0,I.jsx)(O,{required:!0,label:t(`notes`)})}),(0,I.jsx)(_,{}),(0,I.jsx)(k,{name:`username`,children:(0,I.jsx)(M,{required:!0,label:t(`username`)})}),(0,I.jsx)(k,{name:`password`,children:(0,I.jsx)(A,{showToggle:!0,required:!0,label:t(`passwd`),onChange:e=>h(e??``),strength:p})}),(0,I.jsxs)(`div`,{className:`p-1 mt-4`,children:[(0,I.jsx)(k,{name:`files`,children:(0,I.jsx)(D,{value:n})}),n.map((e,t)=>(0,I.jsxs)(`div`,{className:`flex gap-2 flex-nowrap text-sm`,children:[(0,I.jsx)(`div`,{className:`flex-1 truncate`,children:e.name}),(0,I.jsx)(`div`,{children:s.bytes(e.size)})]},t))]}),(0,I.jsxs)(`div`,{className:`flex justify-end gap-2 mt-8`,children:[(0,I.jsx)(v,{onClick:o,children:`Open Modal`}),(0,I.jsx)(v,{onClick:()=>r([...n,{name:x.system.fileName(),size:x.number.int({min:500,max:5e5})}]),children:`Add File`}),(0,I.jsx)(v,{type:`reset`,variant:`outline`,onClick:()=>m(0),children:`Reset`}),(0,I.jsx)(v,{type:`submit`,variant:`solid`,children:`Submit`})]})]})}),(0,I.jsx)(a,{})]})},args:{}},z=e=>{let{t}=i(`form`),[n,r]=(0,F.useState)([]),a=(0,F.useRef)(d({firstName:c().required().label(`form:firstName`),lastName:c().required().label(`form:lastName`),age:l().min(18).max(65).required().label(`form:age`),username:c().required().min(6).label(`form:username`),password:c().required().min(6).label(`form:passwd`).test(`isStrong`,(e,n)=>Array.from(e.matchAll(/[A-Z]/g)).length<2||Array.from(e.matchAll(/[a-z]/g)).length<2||Array.from(e.matchAll(/\d/g)).length<2||Array.from(e.matchAll(/\W/g)).length<2?n.createError({message:t(`notStrong`)}):!0)})),[o,u]=(0,F.useState)(0),f=(0,F.useCallback)((e=``)=>{e||u(0);let t=Array.from(e.matchAll(/[A-Z]/g)).length,n=Array.from(e.matchAll(/[a-z]/g)).length,r=Array.from(e.matchAll(/\d/g)).length,i=Array.from(e.matchAll(/\W/g)).length,a=Math.max(e.length/4,1);u((Math.min(t/a,1)+Math.min(n/a,1)+Math.min(r/a,1)+Math.min(i/a,1))/4)},[]);return(0,I.jsx)(p,{title:`Modal Form`,width:`24rem`,onClose:e.onClose,children:(0,I.jsxs)(T,{resolver:w(a.current),defaultValues:{firstName:``,lastName:``,age:void 0},children:[(0,I.jsxs)(b,{children:[(0,I.jsx)(k,{name:`files`,children:(0,I.jsx)(D,{value:n})}),(0,I.jsx)(k,{name:`firstName`,children:(0,I.jsx)(M,{autoFocus:!0,required:!0,label:t(`firstName`)})}),(0,I.jsx)(k,{name:`lastName`,children:(0,I.jsx)(M,{required:!0,label:t(`lastName`)})}),(0,I.jsx)(k,{name:`age`,children:(0,I.jsx)(N,{required:!0,label:t(`age`),info:`Must be between 18 and 65 years`})}),(0,I.jsx)(k,{name:`notes`,children:(0,I.jsx)(O,{required:!0,label:t(`notes`),expandable:!0})}),(0,I.jsx)(_,{}),(0,I.jsx)(k,{name:`username`,children:(0,I.jsx)(M,{required:!0,label:t(`username`)})}),(0,I.jsx)(k,{name:`password`,children:(0,I.jsx)(A,{showToggle:!0,required:!0,label:t(`passwd`),onChange:e=>f(e??``),strength:o})}),(0,I.jsx)(`div`,{className:`p-1 mt-4`,children:n.map((e,t)=>(0,I.jsxs)(`div`,{className:`flex gap-2 flex-nowrap text-sm`,children:[(0,I.jsx)(`div`,{className:`flex-1 truncate`,children:e.name}),(0,I.jsx)(`div`,{children:s.bytes(e.size)})]},t))})]}),(0,I.jsxs)(y,{className:`flex justify-end gap-2 mt-8`,children:[(0,I.jsx)(v,{onClick:()=>r([...n,{name:x.system.fileName(),size:x.number.int({min:500,max:5e5})}]),children:`Add File`}),(0,I.jsx)(v,{type:`reset`,variant:`outline`,onClick:()=>u(0),children:`Reset`}),(0,I.jsx)(v,{type:`submit`,variant:`solid`,children:`Submit`})]})]})})},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
      files: yup.array().required().min(1),
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
        <Form resolver={yupResolver(schema.current)} defaultValues={{
        firstName: "",
        lastName: "",
        age: undefined
      } as AnyObject}>
          <div className="mx-auto w-96">
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
              <Controller name="files">
                <HiddenInput value={files} />
              </Controller>
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
        <ModalEl />
      </div>;
  },
  args: {}
}`,...R.parameters?.docs?.source}}},B=[`_Form`]}));V();export{R as _Form,B as __namedExportsOrder,L as default,V as n,P as t};