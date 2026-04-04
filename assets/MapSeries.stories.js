import{a as e,n as t,r as n}from"./chunk.js";import{t as r}from"./react.js";import{t as i}from"./jsx-runtime.js";import{T as a,Y as o,t as s}from"./iframe-B-Wcw5ev.js";import{a as c,t as l}from"./src2.js";import{r as u,t as d}from"./dist28.js";var f=n({Example:()=>g,__namedExportsOrder:()=>_,default:()=>h}),p,m,h,g,_,v=t((()=>{d(),s(),p=e(r()),l(),m=i(),h={component:c,title:`@charts/MapSeries`,parameters:{layout:`centered`,controls:{exclude:`children`}}},g={render:e=>{let[t,n]=(0,p.useState)([]),r=(0,p.useCallback)(()=>{n(Array.from(Array(24),(e,t)=>({id:u.location.countryCode(`alpha-2`),count:u.number.int({min:99,max:499})})))},[]);return(0,p.useEffect)(()=>{r()},[]),(0,m.jsx)(a,{width:`48rem`,height:`24rem`,title:`Map Series chart`,expandable:!0,actions:(0,m.jsx)(o,{"aria-label":`loadData`,variant:`link`,icon:`mdi mdi-refresh`,onClick:r}),children:(0,m.jsx)(c,{...e,series:t})})},args:{}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
    return <Panel width="48rem" height="24rem" title="Map Series chart" expandable actions={<Button aria-label="loadData" variant="link" icon="mdi mdi-refresh" onClick={loadData} />}>
        <MapSeries {...args} series={data} />
      </Panel>;
  },
  args: {}
}`,...g.parameters?.docs?.source}}},_=[`Example`]}));v();export{g as Example,_ as __namedExportsOrder,h as default,v as n,f as t};