import{n as e,r as t}from"./rolldown-runtime.js";import{t as n}from"./react.js";import{r}from"./EmptyContent.js";import{P as i,g as a,m as o,t as s}from"./src.js";import{Et as c,J as l,Pt as u,Vt as d,i as f,n as p,t as m,zt as h}from"./src2.js";import{t as g}from"./jsx-runtime.js";import{c as _,t as v}from"./src3.js";import{c as y,d as b,l as x,t as S}from"./src6.js";import{n as C,t as w}from"./ascii.js";import{r as T,t as E}from"./workaround.js";import{n as D,t as O}from"./large_video.js";function k(e){return!b(e)&&!(e instanceof Date)&&typeof e==`object`&&!Array.isArray(e)}function A(e){return Array.isArray(e)}function j(e){return typeof e==`number`}function M(e){return typeof e==`boolean`}function N(){return(N=e((()=>{})))()}function P(e,t){if(!b(e)){if(b(t))return e;if(k(e)||A(e)){if(!b(e[t]))return e[t];if(t.includes(`.`)){let n=e,r=t.split(`.`);for(let e=r.length-1;e>=0;e--){let t=r.slice(0,e).join(`.`),i=r.slice(e).join(`.`);if(t in n)return n=n[t],A(n)?n[i]?n[i]:n.map(e=>P(e,i)).filter(e=>!x(e)):P(n,i)}}}}}function F(e,t,n=void 0){if(x(e)||x(t))return n;let r=P(e,t);return b(r)?n:r}function I(){return(I=e((()=>{y(),N()})))()}function L(e=`asc`,t){return(n,r)=>{let i=t&&k(n)?F(n,t,``):n,a=t&&k(r)?F(r,t,``):r,o=e===`asc`?1:-1,s=e===`desc`?1:-1;if(i===a)return 0;if(j(i)&&j(a))return i>a?o:s;if(M(i)&&M(a))return i?s:o;let c=w(i).toLowerCase(),l=w(a).toLowerCase();return c.localeCompare(l)===1?o:s}}function R(){return(R=e((()=>{I(),C(),N()})))()}var z;function B(){return(B=e((()=>{z=``+new URL(`sample-DOsI675H.mp3`,import.meta.url).href})))()}var V;function H(){return(H=e((()=>{V=``+new URL(`sample-77PFpiGU.wav`,import.meta.url).href})))()}var U=t({Playground:()=>J,__namedExportsOrder:()=>Y,default:()=>q}),W,G,K,q,J,Y;function X(){return(X=e((()=>{m(),s(),v(),S(),W=n(),T(),O(),B(),H(),G=g(),{fn:K}=__STORYBOOK_MODULE_TEST__,q={component:_,subcomponents:{AudioRegion:E},title:`@media/AudioPlayer`,parameters:{layout:`fullscreen`,controls:{exclude:`children`}}},J={render:e=>{let t=(0,W.useRef)(null),[n,s]=(0,W.useState)(z),[m,g]=(0,W.useState)(!1),[v,y]=(0,W.useState)([{id:`1`,start:.2,end:15.5,color:`#ffcc00`,channel:0},{id:`2`,start:5.2,end:9.5,color:`#ff00cc`,channel:1},{id:`3`,start:12.2,end:18.5,color:`#ff00cc`,channel:1}]);return(0,G.jsx)(`div`,{className:`min-h-150`,children:(0,G.jsxs)(c,{children:[(0,G.jsxs)(u,{className:`relative`,children:[(0,G.jsx)(_,{src:n,ref:t,autoPlay:!0,editable:m,showVideo:n===D,regions:v,onRegionsChange:y,onTimeChange:e.onTimeChange}),(0,G.jsx)(h,{className:`text-sm bg-content`,children:v.sort(L(`asc`,`start`)).map(e=>(0,G.jsx)(l,{legend:`Region ${e.id}`,classNames:{legend:`text-xs text-primary-600`},children:(0,G.jsxs)(`div`,{className:`flex items-center`,children:[(0,G.jsxs)(`p`,{className:`flex-1`,children:[`Start: `,e.start.toFixed(2),`s, End: `,e.end.toFixed(2),`s, Channel: `,e.channel]}),(0,G.jsx)(r,{size:`sm`,onClick:()=>t.current?.playRegion(e.id),children:`Play`})]})},e.id))})]}),(0,G.jsx)(d,{align:`end`,children:(0,G.jsx)(p,{orientation:`end`,activeTab:`basic`,children:(0,G.jsx)(f,{id:`basic`,icon:`icon-[mdi--image]`,tooltip:`Basic options`,children:(0,G.jsx)(u,{className:`text-sm`,children:(0,G.jsxs)(h,{children:[(0,G.jsxs)(l,{legend:`Audio Source`,children:[(0,G.jsx)(`p`,{className:`break-all`,children:n}),(0,G.jsxs)(o,{onChange:s,name:`src`,value:n,vertical:!0,children:[(0,G.jsx)(a,{value:z,label:`Sample MP3`}),(0,G.jsx)(a,{value:V,label:`Sample 7.1`}),(0,G.jsx)(a,{value:D,label:`Sample Video`}),(0,G.jsx)(a,{value:`/assets/samples/sample1.aiff`,label:`Unsupported Format`})]})]}),(0,G.jsx)(`div`,{children:(0,G.jsx)(i,{label:`Editable Regions`,checked:m,onChange:e=>g(e)})})]})})})})})]})})},args:{onTimeChange:K()}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y=[`Playground`]})))()}export{X as n,R as r,U as t};