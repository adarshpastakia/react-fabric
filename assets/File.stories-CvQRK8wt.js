import{j as e,r as N,aR as y}from"./iframe-DcfUrZ2L.js";import{I as d}from"./Tooltip-Dv6V4Byx.js";import{B as _}from"./Button-7pM1lgGA.js";import"./index-Bl9sirez.js";import{e as v,f as w,_ as z,g as C}from"./DualList-DiU7ycQJ.js";import{h as k,H as E,a as I}from"./index-G6hyGjK8.js";import"./HeadFoot-BdfsRs4J.js";import"./BasePanel-CZJafQ4J.js";import"./Google-DSP-6Nrb.js";import"./createClass-D99gLwRj.js";import"./zh-CN-DsRk4IYs.js";import"./endOfDay-Danle8jh.js";import"./index-zx9qXRA4.js";import"./getDay-B6LYz-AP.js";import"./useDebounce-oR1dm03r.js";import"./Content-Cwxt_19N.js";import"./useResizeObserver-L_IFJsPD.js";import"./ErrorBoundary-CbzvQFF-.js";import"./Global-CmkQSaMP.js";import"./ToggleButtonGroup-CVNQsquy.js";import"./cloneElement-B4wm8_Ia.js";import"./Collapsable-iyaaLFnt.js";import"./toArray-BwHKXXJA.js";import"./Avatar-5xRpn6_B.js";import"./floating-ui.react-DaYvvi0U.js";import"./index-Iz_3oi3Q.js";import"./DatePanel-2KNianNU.js";import"./ButtonGroup-87GcGUAF.js";import"./EmptyContent-6xVjGj3J.js";import"./_isEqual-PxFgnGsO.js";import"./_dedupe-BYXvNVJ3.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,le={component:v,title:"@form/Inputs",parameters:{layout:"centered",jest:["form/tests/File.test.tsx"],msw:{handlers:[k.post("/api/upload",()=>E.json({path:"xyz"}))]}},decorators:[s=>e.jsx("div",{className:"max-w-[32rem] w-screen",children:e.jsx(s,{})})]},t={render:s=>e.jsx(v,{...s}),args:{label:"File input",placeholder:"File input...",allowClear:!0,onChange:l(),onEnterPressed:l()}},n={render:()=>{const s=I.create({}),{pending:p,files:b,list:i,upload:j,remove:F}=w((r,o)=>s.postForm("/api/upload",r,o).then(a=>{var m;return((m=a.data)==null?void 0:m.path)??"pathfor file"}));return N.useEffect(()=>{i&&l()(i)},[i]),e.jsxs("div",{children:[e.jsx("div",{className:"inline-block",children:e.jsx(_,{badge:p>0?`${p}`:void 0,children:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Add file"}),e.jsx("input",{type:"file",multiple:!0,className:"absolute inset-0 opacity-0 z-5",onChange:r=>[j(r.target.files),r.target.value=""]})]})})}),e.jsx("br",{}),e.jsx("div",{children:b.map((r,o)=>e.jsxs("div",{className:"w-96 mb-4",children:[e.jsxs("div",{className:"flex flex-nowrap gap-1 items-center",children:[e.jsxs("div",{className:"flex-1 truncate",children:[r.name,e.jsx("br",{}),e.jsx("span",{className:"text-xs",children:z.mime(r.mime)})]}),e.jsx("div",{children:y.bytes(r.size)}),r.progress&&e.jsx(d,{icon:"mdi mdi-stop-circle",bg:"danger",color:"white",size:"sm",className:"p-[2px]","aria-label":"abort",onClick:()=>{var a;return(a=r.abort)==null?void 0:a.call(r)}}),!r.progress&&e.jsx(d,{icon:"mdi mdi-trash-can",color:"danger",size:"sm","aria-label":"remove",onClick:()=>F(r.key)})]}),r.progress&&e.jsx(C,{animate:!0,value:r.progress*100,size:"xxs"})]},o))})]})},args:{}};var c,u,x;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
