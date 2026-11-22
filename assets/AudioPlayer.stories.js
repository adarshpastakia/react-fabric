import{n as e,r as t}from"./rolldown-runtime.js";import{t as n}from"./react.js";import{r}from"./EmptyContent.js";import{P as i,g as a,m as o,t as s}from"./src.js";import{t as c}from"./jsx-runtime.js";import{Et as l,J as u,Pt as d,Vt as f,i as p,n as m,t as h,zt as g}from"./src2.js";import{d as _,p as v,t as y,u as b}from"./src6.js";import{n as x,t as S}from"./ascii.js";import{c as C,t as w}from"./src8.js";import{r as T,t as E}from"./workaround.js";import{n as D,t as O}from"./large_video.js";function k(e){return!v(e)&&!(e instanceof Date)&&typeof e==`object`&&!Array.isArray(e)}function A(e){return Array.isArray(e)}function j(e){return typeof e==`number`}function M(e){return typeof e==`boolean`}function N(){return(N=e((()=>{})))()}function P(e,t){if(!v(e)){if(v(t))return e;if(k(e)||A(e)){if(!v(e[t]))return e[t];if(t.includes(`.`)){let n=e,r=t.split(`.`);for(let e=r.length-1;e>=0;e--){let t=r.slice(0,e).join(`.`),i=r.slice(e).join(`.`);if(t in n)return n=n[t],A(n)?n[i]?n[i]:n.map(e=>P(e,i)).filter(e=>!_(e)):P(n,i)}}}}}function F(e,t,n=void 0){if(_(e)||_(t))return n;let r=P(e,t);return v(r)?n:r}function I(){return(I=e((()=>{b(),N()})))()}function L(e=`asc`,t){return(n,r)=>{let i=t&&k(n)?F(n,t,``):n,a=t&&k(r)?F(r,t,``):r,o=e===`asc`?1:-1,s=e===`desc`?1:-1;if(i===a)return 0;if(j(i)&&j(a))return i>a?o:s;if(M(i)&&M(a))return i?s:o;let c=S(i).toLowerCase(),l=S(a).toLowerCase();return c.localeCompare(l)===1?o:s}}function R(){return(R=e((()=>{I(),x(),N()})))()}var z;function B(){return(B=e((()=>{z=``+new URL(`sample-DOsI675H.mp3`,import.meta.url).href})))()}var V;function H(){return(H=e((()=>{V=``+new URL(`sample-77PFpiGU.wav`,import.meta.url).href})))()}var U=t({Playground:()=>J,__namedExportsOrder:()=>Y,default:()=>q}),W,G,K,q,J,Y;function X(){return(X=e((()=>{h(),s(),w(),R(),y(),W=n(),T(),O(),B(),H(),G=c(),{fn:K}=__STORYBOOK_MODULE_TEST__,q={component:C,subcomponents:{AudioRegion:E},title:`@media/AudioPlayer`,parameters:{layout:`fullscreen`,controls:{exclude:`children`}}},J={render:e=>{let t=(0,W.useRef)(null),[n,s]=(0,W.useState)(z),[c,h]=(0,W.useState)(!1),[_,v]=(0,W.useState)([{id:`1`,start:.2,end:15.5,color:`#ffcc00`,channel:0},{id:`2`,start:5.2,end:9.5,color:`#ff00cc`,channel:1},{id:`3`,start:12.2,end:18.5,color:`#ff00cc`,channel:1}]);return(0,G.jsx)(`div`,{className:`min-h-150`,children:(0,G.jsxs)(l,{children:[(0,G.jsxs)(d,{className:`relative`,children:[(0,G.jsx)(C,{src:n,ref:t,autoPlay:!0,editable:c,showVideo:n===D,regions:_,onRegionsChange:v,onTimeChange:e.onTimeChange}),(0,G.jsx)(g,{className:`text-sm bg-content`,children:_.sort(L(`asc`,`start`)).map(e=>(0,G.jsx)(u,{legend:`Region ${e.id}`,classNames:{legend:`text-xs text-primary-600`},children:(0,G.jsxs)(`div`,{className:`flex items-center`,children:[(0,G.jsxs)(`p`,{className:`flex-1`,children:[`Start: `,e.start.toFixed(2),`s, End: `,e.end.toFixed(2),`s, Channel: `,e.channel]}),(0,G.jsx)(r,{size:`sm`,onClick:()=>t.current?.playRegion(e.id),children:`Play`})]})},e.id))})]}),(0,G.jsx)(f,{align:`end`,children:(0,G.jsx)(m,{orientation:`end`,activeTab:`basic`,children:(0,G.jsx)(p,{id:`basic`,icon:`icon-[mdi--image]`,tooltip:`Basic options`,children:(0,G.jsx)(d,{className:`text-sm`,children:(0,G.jsxs)(g,{children:[(0,G.jsxs)(u,{legend:`Audio Source`,children:[(0,G.jsx)(`p`,{className:`break-all`,children:n}),(0,G.jsxs)(o,{onChange:s,name:`src`,value:n,vertical:!0,children:[(0,G.jsx)(a,{value:z,label:`Sample MP3`}),(0,G.jsx)(a,{value:V,label:`Sample 7.1`}),(0,G.jsx)(a,{value:D,label:`Sample Video`}),(0,G.jsx)(a,{value:`/assets/samples/sample1.aiff`,label:`Unsupported Format`})]})]}),(0,G.jsx)(`div`,{children:(0,G.jsx)(i,{label:`Editable Regions`,checked:c,onChange:e=>h(e)})})]})})})})})]})})},args:{onTimeChange:K()}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: args => {
    const audioRef = useRef<AudioPlayerRef>(null);
    const [src, setSrc] = useState(sampleAudio);
    const [editable, setEditable] = useState(false);
    const [regions, setRegions] = useState<AudioRegion[]>([{
      id: "1",
      start: 0.2,
      end: 15.5,
      color: "#ffcc00",
      channel: 0
    }, {
      id: "2",
      start: 5.2,
      end: 9.5,
      color: "#ff00cc",
      channel: 1
    }, {
      id: "3",
      start: 12.2,
      end: 18.5,
      color: "#ff00cc",
      channel: 1
    }]);
    return <div className="min-h-150">
        <Viewport>
          <Layout className="relative">
            <AudioPlayer src={src} ref={audioRef} autoPlay editable={editable} showVideo={src === largeVideo} regions={regions} onRegionsChange={setRegions} onTimeChange={args.onTimeChange} />
            <Content className="text-sm bg-content">
              {regions.sort(compareValues("asc", "start")).map(r => <Callout key={r.id} legend={\`Region \${r.id}\`} classNames={{
              legend: "text-xs text-primary-600"
            }}>
                  <div className="flex items-center">
                    <p className="flex-1">
                      Start: {r.start.toFixed(2)}s, End: {r.end.toFixed(2)}s, Channel: {r.channel}
                    </p>
                    <Button size="sm" onClick={() => audioRef.current?.playRegion(r.id)}>
                      Play
                    </Button>
                  </div>
                </Callout>)}
            </Content>
          </Layout>
          <Aside align="end">
            <TabPanel orientation="end" activeTab="basic">
              <Tab id="basic" icon="icon-[mdi--image]" tooltip="Basic options">
                <Layout className="text-sm">
                  <Content>
                    <Callout legend="Audio Source">
                      <p className="break-all">{src}</p>
                      <RadioGroup onChange={setSrc} name="src" value={src} vertical>
                        <Radio value={sampleAudio} label="Sample MP3" />
                        <Radio value={sample7Audio} label="Sample 7.1" />
                        <Radio value={largeVideo} label="Sample Video" />
                        <Radio value={"/assets/samples/sample1.aiff"} label="Unsupported Format" />
                      </RadioGroup>
                    </Callout>
                    <div>
                      <Switch label="Editable Regions" checked={editable} onChange={e => setEditable(e)} />
                    </div>
                  </Content>
                </Layout>
              </Tab>
            </TabPanel>
          </Aside>
        </Viewport>
      </div>;
  },
  args: {
    onTimeChange: fn()
  }
}`,...J.parameters?.docs?.source}}},Y=[`Playground`]})))()}export{X as n,U as t};