import{j as e,r as N,aR as y}from"./iframe-BcXNitKG.js";import{I as d}from"./Tooltip-J_gHpl9C.js";import{B as _}from"./Button-7R_E-GE9.js";import"./index-DUA9IMpG.js";import{e as v,f as w,_ as z,g as C}from"./DualList-rWC3PaES.js";import{h as k,H as E,a as I}from"./index-BIXAkJbY.js";import"./HeadFoot-DLpVmsEq.js";import"./BasePanel-DkxgOkoR.js";import"./Google-DOYfq3v8.js";import"./createClass-B8xyeRfs.js";import"./zh-CN-Bmeuy_N5.js";import"./endOfDay-BHO0gGVd.js";import"./index-Doar7ujF.js";import"./getDay-G_5ar-z-.js";import"./useDebounce-rX8HuXnO.js";import"./Content-BJKCk6Ue.js";import"./useResizeObserver-Cq2Z_pjG.js";import"./ErrorBoundary-C8J7aorp.js";import"./Global-HPy1X0OU.js";import"./ToggleButtonGroup-BKgoITDu.js";import"./cloneElement-Bgycha4-.js";import"./Collapsable-GlVs_tGp.js";import"./toArray-DlTuwiZT.js";import"./Avatar-CTJ9ye12.js";import"./floating-ui.react-CCZcFCqr.js";import"./index-CqCs8NGq.js";import"./DatePanel-DygvepWU.js";import"./ButtonGroup-CZyLy_kH.js";import"./EmptyContent-CnA5ADIa.js";import"./_isEqual-JedAdon-.js";import"./_dedupe-Dul_0PfE.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,le={component:v,title:"@form/Inputs",parameters:{layout:"centered",jest:["form/tests/File.test.tsx"],msw:{handlers:[k.post("/api/upload",()=>E.json({path:"xyz"}))]}},decorators:[s=>e.jsx("div",{className:"max-w-[32rem] w-screen",children:e.jsx(s,{})})]},t={render:s=>e.jsx(v,{...s}),args:{label:"File input",placeholder:"File input...",allowClear:!0,onChange:l(),onEnterPressed:l()}},n={render:()=>{const s=I.create({}),{pending:p,files:b,list:i,upload:j,remove:F}=w((r,o)=>s.postForm("/api/upload",r,o).then(a=>{var m;return((m=a.data)==null?void 0:m.path)??"pathfor file"}));return N.useEffect(()=>{i&&l()(i)},[i]),e.jsxs("div",{children:[e.jsx("div",{className:"inline-block",children:e.jsx(_,{badge:p>0?`${p}`:void 0,children:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Add file"}),e.jsx("input",{type:"file",multiple:!0,className:"absolute inset-0 opacity-0 z-5",onChange:r=>[j(r.target.files),r.target.value=""]})]})})}),e.jsx("br",{}),e.jsx("div",{children:b.map((r,o)=>e.jsxs("div",{className:"w-96 mb-4",children:[e.jsxs("div",{className:"flex flex-nowrap gap-1 items-center",children:[e.jsxs("div",{className:"flex-1 truncate",children:[r.name,e.jsx("br",{}),e.jsx("span",{className:"text-xs",children:z.mime(r.mime)})]}),e.jsx("div",{children:y.bytes(r.size)}),r.progress&&e.jsx(d,{icon:"mdi mdi-stop-circle",bg:"danger",color:"white",size:"sm",className:"p-[2px]","aria-label":"abort",onClick:()=>{var a;return(a=r.abort)==null?void 0:a.call(r)}}),!r.progress&&e.jsx(d,{icon:"mdi mdi-trash-can",color:"danger",size:"sm","aria-label":"remove",onClick:()=>F(r.key)})]}),r.progress&&e.jsx(C,{animate:!0,value:r.progress*100,size:"xxs"})]},o))})]})},args:{}};var c,u,x;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    return <FileInput {...args} />;
  },
  args: {
    label: "File input",
    placeholder: "File input...",
    allowClear: true,
    onChange: fn(),
    onEnterPressed: fn()
  }
}`,...(x=(u=t.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var g,f,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const http = axios.create({});
    const {
      pending,
      files,
      list,
      upload,
      remove
    } = useFileUploader((data, config) => http.postForm("/api/upload", data, config).then(resp => resp.data?.path ?? "pathfor file"));
    useEffect(() => {
      list && fn()(list);
    }, [list]);
    return <div>
        <div className="inline-block">
          <Button badge={pending > 0 ? \`\${pending}\` : undefined}>
            <Fragment>
              <span>Add file</span>
              <input type="file" multiple className="absolute inset-0 opacity-0 z-5" onChange={e => [upload(e.target.files), e.target.value = ""]} />
            </Fragment>
          </Button>
        </div>
        <br />
        <div>
          {files.map((file, idx) => <div key={idx} className="w-96 mb-4">
              <div className="flex flex-nowrap gap-1 items-center">
                <div className="flex-1 truncate">
                  {file.name}
                  <br />
                  <span className="text-xs">{FileUtil.mime(file.mime)}</span>
                </div>
                <div>{Format.bytes(file.size)}</div>
                {file.progress && <Icon icon="mdi mdi-stop-circle" bg="danger" color="white" size="sm" className="p-[2px]" aria-label="abort" onClick={() => file.abort?.()} />}
                {!file.progress && <Icon icon="mdi mdi-trash-can" color="danger" size="sm" aria-label="remove" onClick={() => remove(file.key)} />}
              </div>
              {file.progress && <ProgressBar animate value={file.progress * 100} size="xxs" />}
            </div>)}
        </div>
      </div>;
  },
  args: {}
}`,...(h=(f=n.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const pe=["_FileInput","FileUploader"];export{n as FileUploader,t as _FileInput,pe as __namedExportsOrder,le as default};
