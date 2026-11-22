import{n as e,r as t}from"./rolldown-runtime.js";import{t as n}from"./react.js";import{r}from"./EmptyContent.js";import{t as i}from"./jsx-runtime.js";import{m as a,t as o}from"./src2.js";import{c as s,t as c}from"./src4.js";import{n as l,t as u}from"./en.js";var d=t({Example:()=>h,__namedExportsOrder:()=>g,default:()=>m}),f,p,m,h,g;function _(){return(_=e((()=>{c(),o(),u(),f=n(),p=i(),m={component:s,title:`@charts/MapSeries`,parameters:{layout:`centered`,controls:{exclude:`children`}}},h={render:e=>{let[t,n]=(0,f.useState)([]),i=(0,f.useCallback)(()=>{n(Array.from(Array(24),(e,t)=>({id:l.location.countryCode(`alpha-2`),count:l.number.int({min:99,max:499})})))},[]);return(0,f.useEffect)(()=>{i()},[]),(0,p.jsx)(a,{width:`48rem`,height:`24rem`,title:`Map Series chart`,expandable:!0,actions:(0,p.jsx)(r,{"aria-label":`loadData`,variant:`link`,icon:`icon-[mdi--refresh]`,onClick:i}),children:(0,p.jsx)(s,{...e,series:t})})},args:{}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [data, setData] = useState<AnyObject[]>([]);
    const loadData = useCallback(() => {
      setData(Array.from(Array(Math.ceil(24)), (_, i) => ({
        id: faker.location.countryCode("alpha-2"),
        count: faker.number.int({
          min: 99,
          max: 499
        })
      })));
    }, []);
    useEffect(() => {
      loadData();
    }, []);
    return <Panel width="48rem" height="24rem" title="Map Series chart" expandable actions={<Button aria-label="loadData" variant="link" icon="icon-[mdi--refresh]" onClick={loadData} />}>
        <MapSeries {...args} series={data} />
      </Panel>;
  },
  args: {}
}`,...h.parameters?.docs?.source}}},g=[`Example`]})))()}export{d as n,_ as r,h as t};