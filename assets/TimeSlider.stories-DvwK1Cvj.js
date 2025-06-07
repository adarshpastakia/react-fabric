import{r as a,j as t}from"./iframe-BcXNitKG.js";import{f}from"./index-CaHJoDsz.js";import{B as x}from"./Button-7R_E-GE9.js";import"./index-DUA9IMpG.js";import{P as D}from"./Panel-C49a1LM8.js";import{a as m}from"./WordBubble-t_czKrTj.js";const g={component:m,title:"@charts/TimeSlider",parameters:{layout:"centered",controls:{exclude:"children"}}},e={render:c=>{const[l,d]=a.useState([]),r=a.useCallback(()=>{const p=Array.from(Array(1095),(n,u)=>new Date(2022,0,u+1));d(p.map(n=>[n,f.number.int({min:100,max:500})]))},[]);return a.useEffect(()=>{r()},[]),t.jsx(D,{width:"48rem",height:"8rem",title:"Time Series chart",expandable:!0,actions:t.jsx(x,{"aria-label":"loadData",variant:"link",icon:"mdi mdi-refresh",onClick:r}),children:t.jsx(m,{...c,data:l,range:{start:new Date(2022,9,1),end:new Date(2023,9,1)}})})},args:{}};var o,s,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => {
    const [data, setData] = useState<AnyObject[]>([]);
    const loadData = useCallback(() => {
      const categories = Array.from(Array(365 * 3), (_, i) => new Date(2022, 0, i + 1));
      setData(categories.map(c => [c, faker.number.int({
        min: 100,
        max: 500
      })]));
    }, []);
    useEffect(() => {
      loadData();
    }, []);
    return <Panel width="48rem" height="8rem" title="Time Series chart" expandable actions={<Button aria-label="loadData" variant="link" icon="mdi mdi-refresh" onClick={loadData} />}>
        <TimeSlider {...args} data={data} range={{
        start: new Date(2022, 9, 1),
        end: new Date(2023, 9, 1)
      }} />
      </Panel>;
  },
  args: {}
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const h=["Example"],T=Object.freeze(Object.defineProperty({__proto__:null,Example:e,__namedExportsOrder:h,default:g},Symbol.toStringTag,{value:"Module"}));export{e as E,T};
