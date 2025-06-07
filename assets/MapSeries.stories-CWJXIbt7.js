import{r as e,j as r}from"./iframe-BcXNitKG.js";import{f as n}from"./index-CaHJoDsz.js";import{B as p}from"./Button-7R_E-GE9.js";import"./index-DUA9IMpG.js";import{P as u}from"./Panel-C49a1LM8.js";import{M as l}from"./WordBubble-t_czKrTj.js";const f={component:l,title:"@charts/MapSeries",parameters:{layout:"centered",controls:{exclude:"children"}}},a={render:c=>{const[d,m]=e.useState([]),t=e.useCallback(()=>{m(Array.from(Array(Math.ceil(24)),(x,b)=>({id:n.address.countryCode("alpha-2"),count:n.number.int({min:99,max:499})})))},[]);return e.useEffect(()=>{t()},[]),r.jsx(u,{width:"48rem",height:"24rem",title:"Map Series chart",expandable:!0,actions:r.jsx(p,{"aria-label":"loadData",variant:"link",icon:"mdi mdi-refresh",onClick:t}),children:r.jsx(l,{...c,data:d})})},args:{}};var o,s,i;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => {
    const [data, setData] = useState<AnyObject[]>([]);
    const loadData = useCallback(() => {
      setData(Array.from(Array(Math.ceil(24)), (_, i) => ({
        id: faker.address.countryCode("alpha-2"),
        count: faker.number.int({
          min: 99,
          max: 499
        })
      })));
    }, []);
    useEffect(() => {
      loadData();
    }, []);
    return <Panel width="48rem" height="24rem" title="Map Series chart" expandable actions={<Button aria-label="loadData" variant="link" icon="mdi mdi-refresh" onClick={loadData} />}>
        <MapSeries {...args} data={data} />
      </Panel>;
  },
  args: {}
}`,...(i=(s=a.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const h=["Example"],k=Object.freeze(Object.defineProperty({__proto__:null,Example:a,__namedExportsOrder:h,default:f},Symbol.toStringTag,{value:"Module"}));export{a as E,k as M};
