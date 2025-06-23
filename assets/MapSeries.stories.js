import{r as e,j as r}from"./iframe-wCO-hNtP.js";import{f as n}from"./index4.js";import{B as p}from"./Button.js";import"./index2.js";import{P as u}from"./Panel.js";import{M as l}from"./WordBubble.js";const f={component:l,title:"@charts/MapSeries",parameters:{layout:"centered",controls:{exclude:"children"}}},a={render:c=>{const[d,m]=e.useState([]),t=e.useCallback(()=>{m(Array.from(Array(Math.ceil(24)),(x,b)=>({id:n.address.countryCode("alpha-2"),count:n.number.int({min:99,max:499})})))},[]);return e.useEffect(()=>{t()},[]),r.jsx(u,{width:"48rem",height:"24rem",title:"Map Series chart",expandable:!0,actions:r.jsx(p,{"aria-label":"loadData",variant:"link",icon:"mdi mdi-refresh",onClick:t}),children:r.jsx(l,{...c,series:d})})},args:{}};var s,o,i;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
        <MapSeries {...args} series={data} />
      </Panel>;
  },
  args: {}
}`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const h=["Example"],k=Object.freeze(Object.defineProperty({__proto__:null,Example:a,__namedExportsOrder:h,default:f},Symbol.toStringTag,{value:"Module"}));export{a as E,k as M};
