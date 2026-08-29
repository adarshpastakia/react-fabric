import{n as e,r as t}from"./rolldown-runtime.js";import{t as n}from"./react.js";import{d as r,r as i}from"./EmptyContent.js";import{A as a,M as o,P as s,W as c,X as l,et as u,g as d,m as f,nt as p,t as m,u as h}from"./src.js";import{Et as g,It as _,J as v,Kt as y,Pt as b,S as x,Vt as S,en as C,i as w,n as T,t as E,v as D,w as O,zt as k}from"./src2.js";import{t as A}from"./jsx-runtime.js";import{t as j,u as M}from"./src3.js";import{n as N,t as P}from"./chunk-NAVWDHVN.js";import{t as F}from"./src6.js";import{t as I}from"./cn.js";import{i as L,n as R,r as z}from"./workaround.js";var B=t({Playground:()=>G,__namedExportsOrder:()=>K,default:()=>U}),V,H,U,W,G,K;function q(){return(q=e((()=>{E(),m(),F(),N(),V=n(),j(),z(),H=A(),U={component:M,subcomponents:{ImageAnnotationShape:R,TextShape:L},title:`@media/ImageViewer`,parameters:{layout:`fullscreen`,controls:{exclude:`children`}}},W=({width:e,height:t,value:n={type:`rect`,width:100,height:100,x:0,y:0},onClose:r})=>(0,H.jsx)(D,{onClose:r,children:(0,H.jsxs)(u,{defaultValues:n,onSubmit:e=>r?.(e),children:[(0,H.jsx)(k,{children:(0,H.jsxs)(`div`,{className:`flex flex-col flex-1 gap-1`,children:[(0,H.jsx)(p,{name:`type`,children:(0,H.jsx)(a,{options:[`rect`,`ellipse`]})}),(0,H.jsx)(p,{name:`x`,children:(0,H.jsx)(h,{inline:!0,labelWidth:`2rem`,label:`X`,min:0,max:e,showValue:!0})}),(0,H.jsx)(p,{name:`y`,children:(0,H.jsx)(h,{inline:!0,labelWidth:`2rem`,label:`Y`,min:0,max:t,showValue:!0})}),(0,H.jsx)(p,{name:`width`,children:(0,H.jsx)(h,{inline:!0,labelWidth:`2rem`,label:`Width`,min:100,max:e,showValue:!0})}),(0,H.jsx)(p,{name:`height`,children:(0,H.jsx)(h,{inline:!0,labelWidth:`2rem`,label:`Height`,min:100,max:t,showValue:!0})}),(0,H.jsx)(p,{name:`fill`,children:(0,H.jsx)(c,{label:`Shape Fill`,allowClear:!0})}),(0,H.jsx)(p,{name:`stroke`,children:(0,H.jsx)(c,{label:`Shape Stroke`,allowClear:!0})}),(0,H.jsx)(p,{name:`strokeWidth`,children:(0,H.jsx)(h,{label:`Shape Stroke`,min:0,max:5,showValue:!0})})]})}),(0,H.jsx)(_,{flex:!0,justify:`end`,className:`px-2 py-1`,children:(0,H.jsx)(i,{size:`sm`,variant:`soft`,color:`primary`,type:`submit`,children:`Update`})})]})}),G={render:e=>{let t=(0,V.useRef)(null),[n,a]=(0,V.useState)(`https://fastly.picsum.photos/id/88/1265/896.jpg?hmac=kZSw_Rfdjsa7ZPOei0Votn89lvyD7lax3Uli_PegGYM`),[m,h]=(0,V.useState)(!1),[E,D]=(0,V.useState)(`This image is marked as NSFW`),[A,j]=(0,V.useState)(`hover`),[N,F]=(0,V.useState)(null),[L,R]=(0,V.useState)(``),[z,B]=C((0,H.jsxs)(x,{children:[(0,H.jsx)(O,{label:`Export Frame`,onClick:()=>R(t.current?.export()??null)}),(0,H.jsx)(O,{label:`Export Crop`,onClick:()=>R(t.current?.crop({x:10,y:10,width:100,height:100})??null)})]})),[U,G]=(0,V.useState)(!1),[K,q]=(0,V.useState)(P.image.url({width:P.number.int({min:800,max:1800}),height:P.number.int({min:600,max:1200})})),[J,Y]=(0,V.useState)(!1),[X,Z]=(0,V.useState)({fill:P.color.rgb({includeAlpha:!0}),shapes:P.helpers.uniqueArray(()=>({type:`rect`,x:P.number.int({min:0,max:100}),y:P.number.int({min:0,max:100}),width:P.number.int({min:100,max:250}),height:P.number.int({min:100,max:250}),fill:P.color.rgb({includeAlpha:!0}),stroke:P.color.rgb(),strokeWidth:P.number.int({min:1,max:5}),textTop:{text:P.word.sample(),fontSize:P.number.int({min:12,max:24}),color:P.color.rgb(),fill:P.color.rgb()},textBottom:{text:P.word.sample(),fontSize:P.number.int({min:12,max:24}),color:P.color.rgb(),fill:P.color.rgb()}}),1)}),[Q,$]=y(W);return(0,H.jsx)(`div`,{className:`min-h-150`,children:(0,H.jsxs)(g,{children:[(0,H.jsxs)(b,{className:`relative`,children:[(0,H.jsx)(M,{src:n,ref:t,compareWith:U?K:void 0,onDebug:F,onExport:R,onCrop:R,onContextMenu:B,nsfw:m&&{message:E??``,trigger:A},annotations:J?X:void 0}),L&&(0,H.jsx)(`div`,{className:`bg-black/50 backdrop-blur-sm absolute inset-0 overflow-hidden p-8 grid grid-cols-1 grid-rows-1 place-items-center`,onClick:()=>R(null),children:(0,H.jsx)(`img`,{className:`object-contain max-w-full max-h-full outline outline-tint-500 shadow-lg bg-black`,src:L,alt:`Exported`})}),z]}),(0,H.jsx)(S,{align:`end`,children:(0,H.jsxs)(T,{orientation:`end`,activeTab:`basic`,children:[(0,H.jsx)(w,{id:`basic`,icon:`icon-[mdi--image]`,tooltip:`Basic options`,children:(0,H.jsxs)(b,{className:`text-sm`,children:[(0,H.jsxs)(k,{children:[(0,H.jsxs)(v,{legend:`Image Source`,children:[(0,H.jsx)(`p`,{className:`break-all`,children:n}),(0,H.jsx)(`div`,{className:`flex justify-end`,children:(0,H.jsx)(i,{size:`sm`,variant:`soft`,color:`primary`,onClick:()=>a(P.image.url({width:P.number.int({min:800,max:1800}),height:P.number.int({min:600,max:1200})})),children:`Refresh`})})]}),(0,H.jsxs)(v,{legend:`Toggle NSFW`,children:[(0,H.jsx)(s,{onChange:h,checked:m}),m&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(o,{allowClear:!0,label:`Message`,value:E,onChange:D}),(0,H.jsxs)(f,{value:A,onChange:j,children:[(0,H.jsx)(d,{value:`hover`,label:`Hover`}),(0,H.jsx)(d,{value:`click`,label:`Click`})]})]})]})]}),(0,H.jsxs)(_,{className:`p-4`,children:[(0,H.jsx)(`p`,{children:`Debug Info`}),(0,H.jsx)(`pre`,{className:`text-xs`,children:JSON.stringify(N,null,2)})]})]})}),(0,H.jsx)(w,{id:`overlay`,icon:`icon-[mdi--select-compare]`,tooltip:`Overlay options`,children:(0,H.jsx)(k,{children:(0,H.jsxs)(v,{legend:`Toggle Overlay`,children:[(0,H.jsx)(s,{onChange:G,checked:U}),U&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`p`,{className:`break-all`,children:K}),(0,H.jsx)(`div`,{className:`flex justify-end`,children:(0,H.jsx)(i,{size:`sm`,variant:`soft`,color:`primary`,onClick:()=>q(P.image.url({width:P.number.int({min:800,max:1800}),height:P.number.int({min:600,max:1200})})),children:`Refresh`})})]})]})})}),(0,H.jsx)(w,{id:`annotate`,icon:`icon-[mdi--select-all]`,tooltip:`Annotate options`,children:(0,H.jsxs)(k,{className:`flex flex-col gap-2`,children:[(0,H.jsx)(s,{onChange:Y,checked:J,label:`Toggle Annotations`}),J&&(0,H.jsx)(v,{children:(0,H.jsxs)(u,{defaultValues:X,onChange:Z,children:[(0,H.jsx)(p,{name:`fill`,children:(0,H.jsx)(c,{label:`Bg Fill`,allowClear:!0})}),(0,H.jsx)(l,{name:`shapes`,label:`Shapes`,onAdd:()=>$(),children:({item:e,index:t,onChange:n})=>(0,H.jsxs)(`div`,{className:`flex gap-1 items-center flex-1`,children:[(0,H.jsx)(`div`,{className:I(`w-16 h-6 border-2 flex items-center justify-center group cursor-pointer`,e.type===`ellipse`?`rounded-full`:``),style:{backgroundColor:e.fill,borderColor:e.stroke},onClick:()=>{$({value:e,width:N?.originalSize[0],height:N?.originalSize[1]}).then(n)},children:(0,H.jsx)(r,{icon:`icon-[mdi--pencil]`,className:`hidden group-hover:inline-block`})}),(0,H.jsxs)(`span`,{children:[`Shape #`,t+1]})]})})]})})]})}),(0,H.jsx)(w,{id:`editor`,icon:`icon-[mdi--draw]`,tooltip:`Editor options`,children:(0,H.jsx)(k,{children:`Editor options`})})]})}),Q()]})})},args:{}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: args => {
    const imageRef = useRef<ImageViewerRef>(null);
    const [src, setSrc] = useState("https://fastly.picsum.photos/id/88/1265/896.jpg?hmac=kZSw_Rfdjsa7ZPOei0Votn89lvyD7lax3Uli_PegGYM"
    // faker.image.url({
    //   width: faker.number.int({ min: 800, max: 1800 }),
    //   height: faker.number.int({ min: 600, max: 1200 }),
    // }),
    );
    const [nsfw, setNsfw] = useState(false);
    const [nsfwMessage, setNsfwMessage] = useState<string | undefined>("This image is marked as NSFW");
    const [nsfwTrigger, setNsfwTrigger] = useState<"hover" | "click">("hover");
    const [debugInfo, setDebugInfo] = useState<any>(null);
    const [exportSrc, setExport] = useState<string | null>("");
    const [ContextMenu, onContextMenu] = useContextMenu(<Menu>
        <MenuItem label="Export Frame" onClick={() => setExport(imageRef.current?.export() ?? null)} />
        <MenuItem label="Export Crop" onClick={() => setExport(imageRef.current?.crop({
        x: 10,
        y: 10,
        width: 100,
        height: 100
      }) ?? null)} />
      </Menu>);
    const [overlay, setOverlay] = useState(false);
    const [overlaySrc, setOverlaySrc] = useState(faker.image.url({
      width: faker.number.int({
        min: 800,
        max: 1800
      }),
      height: faker.number.int({
        min: 600,
        max: 1200
      })
    }));
    const [annotate, setAnnotate] = useState(false);
    const [annotations, setAnnotations] = useState({
      fill: faker.color.rgb({
        includeAlpha: true
      }),
      shapes: faker.helpers.uniqueArray(() => ({
        type: "rect",
        x: faker.number.int({
          min: 0,
          max: 100
        }),
        y: faker.number.int({
          min: 0,
          max: 100
        }),
        width: faker.number.int({
          min: 100,
          max: 250
        }),
        height: faker.number.int({
          min: 100,
          max: 250
        }),
        fill: faker.color.rgb({
          includeAlpha: true
        }),
        stroke: faker.color.rgb(),
        strokeWidth: faker.number.int({
          min: 1,
          max: 5
        }),
        textTop: {
          text: faker.word.sample(),
          fontSize: faker.number.int({
            min: 12,
            max: 24
          }),
          color: faker.color.rgb(),
          fill: faker.color.rgb()
        },
        textBottom: {
          text: faker.word.sample(),
          fontSize: faker.number.int({
            min: 12,
            max: 24
          }),
          color: faker.color.rgb(),
          fill: faker.color.rgb()
        }
      }), 1)
    } as ImageAnnotations);
    const [shapeEditorModal, openShapeEditor] = useOverlayService(ShapeEditor);
    return <div className="min-h-150">
        <Viewport>
          <Layout className="relative">
            <ImageViewer src={src} ref={imageRef} compareWith={overlay ? overlaySrc : undefined} onDebug={setDebugInfo} onExport={setExport} onCrop={setExport} onContextMenu={onContextMenu} nsfw={nsfw && {
            message: nsfwMessage ?? "",
            trigger: nsfwTrigger
          }} annotations={annotate ? annotations : undefined} />

            {exportSrc && <div className="bg-black/50 backdrop-blur-sm absolute inset-0 overflow-hidden p-8 grid grid-cols-1 grid-rows-1 place-items-center" onClick={() => setExport(null)}>
                <img className="object-contain max-w-full max-h-full outline outline-tint-500 shadow-lg bg-black" src={exportSrc} alt="Exported" />
              </div>}
            {ContextMenu}
          </Layout>
          <Aside align="end">
            <TabPanel orientation="end" activeTab="basic">
              <Tab id="basic" icon="icon-[mdi--image]" tooltip="Basic options">
                <Layout className="text-sm">
                  <Content>
                    <Callout legend="Image Source">
                      <p className="break-all">{src}</p>
                      <div className="flex justify-end">
                        <Button size="sm" variant="soft" color="primary" onClick={() => setSrc(faker.image.url({
                        width: faker.number.int({
                          min: 800,
                          max: 1800
                        }),
                        height: faker.number.int({
                          min: 600,
                          max: 1200
                        })
                      }))}>
                          Refresh
                        </Button>
                      </div>
                    </Callout>
                    <Callout legend="Toggle NSFW">
                      <Switch onChange={setNsfw} checked={nsfw} />
                      {nsfw && <>
                          <Textarea allowClear label="Message" value={nsfwMessage} onChange={setNsfwMessage} />
                          <RadioGroup value={nsfwTrigger} onChange={setNsfwTrigger}>
                            <Radio value="hover" label="Hover" />
                            <Radio value="click" label="Click" />
                          </RadioGroup>
                        </>}
                    </Callout>
                  </Content>
                  <Footer className="p-4">
                    <p>Debug Info</p>
                    <pre className="text-xs">{JSON.stringify(debugInfo, null, 2)}</pre>
                  </Footer>
                </Layout>
              </Tab>
              <Tab id="overlay" icon="icon-[mdi--select-compare]" tooltip="Overlay options">
                <Content>
                  <Callout legend="Toggle Overlay">
                    <Switch onChange={setOverlay} checked={overlay} />
                    {overlay && <>
                        <p className="break-all">{overlaySrc}</p>
                        <div className="flex justify-end">
                          <Button size="sm" variant="soft" color="primary" onClick={() => setOverlaySrc(faker.image.url({
                        width: faker.number.int({
                          min: 800,
                          max: 1800
                        }),
                        height: faker.number.int({
                          min: 600,
                          max: 1200
                        })
                      }))}>
                            Refresh
                          </Button>
                        </div>
                      </>}
                  </Callout>
                </Content>
              </Tab>
              <Tab id="annotate" icon="icon-[mdi--select-all]" tooltip="Annotate options">
                <Content className="flex flex-col gap-2">
                  <Switch onChange={setAnnotate} checked={annotate} label="Toggle Annotations" />
                  {annotate && <Callout>
                      <Form defaultValues={annotations} onChange={setAnnotations}>
                        <Controller name="fill">
                          <ColorInput label="Bg Fill" allowClear />
                        </Controller>

                        <ArrayInput<ImageAnnotationShape> name="shapes" label="Shapes" onAdd={() => openShapeEditor()}>
                          {({
                        item,
                        index,
                        onChange
                      }) => <div className="flex gap-1 items-center flex-1">
                              <div className={cn("w-16 h-6 border-2 flex items-center justify-center group cursor-pointer", item.type === "ellipse" ? "rounded-full" : "")} style={{
                          backgroundColor: item.fill,
                          borderColor: item.stroke
                        }} onClick={() => {
                          void openShapeEditor({
                            value: item,
                            width: debugInfo?.originalSize[0],
                            height: debugInfo?.originalSize[1]
                          }).then(onChange);
                        }}>
                                <Icon icon="icon-[mdi--pencil]" className="hidden group-hover:inline-block" />
                              </div>
                              <span>Shape #{index + 1}</span>
                            </div>}
                        </ArrayInput>
                      </Form>
                    </Callout>}
                </Content>
              </Tab>
              <Tab id="editor" icon="icon-[mdi--draw]" tooltip="Editor options">
                <Content>Editor options</Content>
              </Tab>
            </TabPanel>
          </Aside>

          {shapeEditorModal()}
        </Viewport>
      </div>;
  },
  args: {}
}`,...G.parameters?.docs?.source}}},K=[`Playground`]})))()}export{q as n,B as t};