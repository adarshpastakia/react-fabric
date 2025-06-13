import{r as t,j as r}from"./iframe-CVyMRGSP.js";import{f}from"./index-CaHJoDsz.js";import{B as y}from"./Button-DAqx1TyP.js";import"./index-D3XXfjI1.js";import{P as A}from"./Panel-DtlJ813n.js";import{A as s}from"./WordBubble-C-dwUiuU.js";const x={component:s,title:"@charts/ActivityMap",parameters:{layout:"centered",controls:{exclude:"children"}}},a={render:c=>{const[m,l]=t.useState([]),e=t.useCallback(()=>{const d=Array(7),p=Array(24);l(Array.from(d,(v,u)=>Array.from(p,(b,h)=>[h,u,f.number.int({min:0,max:99})])))},[]);return t.useEffect(()=>{e()},[]),r.jsx(A,{maxWidth:"48rem",width:"100vw",height:"24rem",title:"Activity Map chart",actions:r.jsx(y,{"aria-label":"loadData",variant:"link",icon:"mdi mdi-refresh",onClick:e}),children:r.jsx(s,{...c,data:m})})},args:{}};var n,o,i;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => {
    const [data, setData] = useState<AnyObject[]>([]);
    const loadData = useCallback(() => {
      const high = Array(7);
      const low = Array(24);
      setData(Array.from(high, (_, day) => Array.from(low, (_, hour) => [hour, day, faker.number.int({
        min: 0,
        max: 99
      })])));
    }, []);
    useEffect(() => {
      loadData();
    }, []);
    return <Panel maxWidth="48rem" width="100vw" height="24rem" title="Activity Map chart" actions={<Button aria-label="loadData" variant="link" icon="mdi mdi-refresh" onClick={loadData} />}>
        <ActivityMap {...args} data={data} />
      </Panel>;
  },
  args: {}
}`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const g=["Example"],M=Object.freeze(Object.defineProperty({__proto__:null,Example:a,__namedExportsOrder:g,default:x},Symbol.toStringTag,{value:"Module"}));export{M as A,a as E};
