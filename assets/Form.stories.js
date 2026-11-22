import{n as e,r as t}from"./rolldown-runtime.js";import{t as n}from"./react.js";import{r}from"./EmptyContent.js";import{n as i,t as a}from"./useTranslation.js";import{a as o,i as s,n as c,r as l}from"./index.esm.js";import{B as u,J as d,M as f,R as p,W as m,X as h,et as g,nt as _,t as v,v as y}from"./src.js";import{t as b}from"./jsx-runtime.js";import{$t as x,I as S,It as C,Kt as w,t as T,v as E,zt as D}from"./src2.js";import{n as O,t as k}from"./yup.js";import{n as A,t as j}from"./en.js";import{n as M,t as N}from"./src6.js";var P=t({_Form:()=>R,__namedExportsOrder:()=>B,default:()=>L}),F,I,L,R,z,B;function V(){return(V=e((()=>{T(),v(),N(),j(),k(),F=n(),a(),I=b(),L={component:g,subcomponents:{Controller:_,ArrayInput:h},title:`@form/Form`,parameters:{layout:`fullscreen`,controls:{exclude:`schema`},jest:[`form/tests/Form.test.tsx`]}},x(`form`,{en:{firstName:`First Name`,lastName:`Last Name`,age:`Age`,notes:`Notes`,username:`Username`,passwd:`Password`,files:`Files`,notStrong:`Password not strong enough, must have
2 uppercase, 2 lowercase, 2 numerals and 2 special character`}}),R={render:()=>{let{t:e}=i(`form`),[t,n]=(0,F.useState)([]),[a,h]=w(z),v=(0,F.useRef)(l({firstName:o().required().label(`form:firstName`),lastName:o().required().label(`form:lastName`),age:s().min(18).max(65).required().label(`form:age`),username:o().required().min(6).label(`form:username`),color:o().required().label(`form:color`),files:c().required().min(1).label(`form:files`),password:o().required().min(6).label(`form:passwd`).test(`isStrong`,(t,n)=>Array.from(t.matchAll(/[A-Z]/g)).length<2||Array.from(t.matchAll(/[a-z]/g)).length<2||Array.from(t.matchAll(/\d/g)).length<2||Array.from(t.matchAll(/\W/g)).length<2?n.createError({message:e(`notStrong`)}):!0)})),[b,x]=(0,F.useState)(0),C=(0,F.useCallback)((e=``)=>{e||x(0);let t=Array.from(e.matchAll(/[A-Z]/g)).length,n=Array.from(e.matchAll(/[a-z]/g)).length,r=Array.from(e.matchAll(/\d/g)).length,i=Array.from(e.matchAll(/\W/g)).length,a=Math.max(e.length/4,1);x((Math.min(t/a,1)+Math.min(n/a,1)+Math.min(r/a,1)+Math.min(i/a,1))/4)},[]);return(0,I.jsxs)(`div`,{className:`min-h-150`,children:[(0,I.jsx)(g,{resolver:O(v.current),defaultValues:{firstName:``,lastName:``,age:void 0},children:(0,I.jsxs)(`div`,{className:`mx-auto w-96`,children:[(0,I.jsx)(_,{name:`firstName`,children:(0,I.jsx)(u,{autoFocus:!0,required:!0,label:e(`firstName`)})}),(0,I.jsx)(_,{name:`lastName`,children:(0,I.jsx)(u,{required:!0,label:e(`lastName`)})}),(0,I.jsx)(_,{name:`age`,children:(0,I.jsx)(p,{required:!0,label:e(`age`),info:`Must be between 18 and 65 years`})}),(0,I.jsx)(_,{name:`color`,children:(0,I.jsx)(m,{required:!0,label:e(`color`)})}),(0,I.jsx)(_,{name:`notes`,children:(0,I.jsx)(f,{required:!0,label:e(`notes`)})}),(0,I.jsx)(S,{}),(0,I.jsx)(_,{name:`username`,children:(0,I.jsx)(u,{required:!0,label:e(`username`)})}),(0,I.jsx)(_,{name:`password`,children:(0,I.jsx)(y,{showToggle:!0,required:!0,label:e(`passwd`),onChange:e=>C(e??``),strength:b})}),(0,I.jsxs)(`div`,{className:`p-1 mt-4`,children:[(0,I.jsx)(_,{name:`files`,children:(0,I.jsx)(d,{hiddenValue:t})}),t.map((e,t)=>(0,I.jsxs)(`div`,{className:`flex gap-2 flex-nowrap text-sm`,children:[(0,I.jsx)(`div`,{className:`flex-1 truncate`,children:e.name}),(0,I.jsx)(`div`,{children:M.bytes(e.size)})]},t))]}),(0,I.jsxs)(`div`,{className:`flex justify-end gap-2 mt-8`,children:[(0,I.jsx)(r,{onClick:h,children:`Open Modal`}),(0,I.jsx)(r,{onClick:()=>n([...t,{name:A.system.fileName(),size:A.number.int({min:500,max:5e5})}]),children:`Add File`}),(0,I.jsx)(r,{type:`reset`,variant:`outlined`,onClick:()=>x(0),children:`Reset`}),(0,I.jsx)(r,{type:`submit`,variant:`solid`,children:`Submit`})]})]})}),(0,I.jsx)(a,{})]})},args:{}},z=e=>{let{t}=i(`form`),[n,a]=(0,F.useState)([]),c=(0,F.useRef)(l({firstName:o().required().label(`form:firstName`),lastName:o().required().label(`form:lastName`),age:s().min(18).max(65).required().label(`form:age`),username:o().required().min(6).label(`form:username`),password:o().required().min(6).label(`form:passwd`).test(`isStrong`,(e,n)=>Array.from(e.matchAll(/[A-Z]/g)).length<2||Array.from(e.matchAll(/[a-z]/g)).length<2||Array.from(e.matchAll(/\d/g)).length<2||Array.from(e.matchAll(/\W/g)).length<2?n.createError({message:t(`notStrong`)}):!0)})),[m,h]=(0,F.useState)(0),v=(0,F.useCallback)((e=``)=>{e||h(0);let t=Array.from(e.matchAll(/[A-Z]/g)).length,n=Array.from(e.matchAll(/[a-z]/g)).length,r=Array.from(e.matchAll(/\d/g)).length,i=Array.from(e.matchAll(/\W/g)).length,a=Math.max(e.length/4,1);h((Math.min(t/a,1)+Math.min(n/a,1)+Math.min(r/a,1)+Math.min(i/a,1))/4)},[]);return(0,I.jsx)(E,{title:`Modal Form`,width:`24rem`,onClose:e.onClose,children:(0,I.jsxs)(g,{resolver:O(c.current),defaultValues:{firstName:``,lastName:``,age:void 0},children:[(0,I.jsxs)(D,{children:[(0,I.jsx)(_,{name:`files`,children:(0,I.jsx)(d,{hiddenValue:n})}),(0,I.jsx)(_,{name:`firstName`,children:(0,I.jsx)(u,{autoFocus:!0,required:!0,label:t(`firstName`)})}),(0,I.jsx)(_,{name:`lastName`,children:(0,I.jsx)(u,{required:!0,label:t(`lastName`)})}),(0,I.jsx)(_,{name:`age`,children:(0,I.jsx)(p,{required:!0,label:t(`age`),info:`Must be between 18 and 65 years`})}),(0,I.jsx)(_,{name:`notes`,children:(0,I.jsx)(f,{required:!0,label:t(`notes`),expandable:!0})}),(0,I.jsx)(S,{}),(0,I.jsx)(_,{name:`username`,children:(0,I.jsx)(u,{required:!0,label:t(`username`)})}),(0,I.jsx)(_,{name:`password`,children:(0,I.jsx)(y,{showToggle:!0,required:!0,label:t(`passwd`),onChange:e=>v(e??``),strength:m})}),(0,I.jsx)(`div`,{className:`p-1 mt-4`,children:n.map((e,t)=>(0,I.jsxs)(`div`,{className:`flex gap-2 flex-nowrap text-sm`,children:[(0,I.jsx)(`div`,{className:`flex-1 truncate`,children:e.name}),(0,I.jsx)(`div`,{children:M.bytes(e.size)})]},t))})]}),(0,I.jsxs)(C,{className:`flex justify-end gap-2 mt-8`,children:[(0,I.jsx)(r,{onClick:()=>a([...n,{name:A.system.fileName(),size:A.number.int({min:500,max:5e5})}]),children:`Add File`}),(0,I.jsx)(r,{type:`reset`,variant:`outlined`,onClick:()=>h(0),children:`Reset`}),(0,I.jsx)(r,{type:`submit`,variant:`solid`,children:`Submit`})]})]})})},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
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
      color: yup.string().required().label("form:color"),
      files: yup.array().required().min(1).label("form:files"),
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
    return <div className="min-h-150">
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
            <Controller name="color">
              <ColorInput required label={t("color")} />
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
                <HiddenInput hiddenValue={files} />
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
              <Button type="reset" variant="outlined" onClick={() => setStrength(0)}>
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
}`,...R.parameters?.docs?.source}}},B=[`_Form`]})))()}export{R as n,V as r,P as t};