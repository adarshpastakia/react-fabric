import{a as e,n as t,r as n}from"./chunk.js";import{t as r}from"./react.js";import{t as i}from"./jsx-runtime.js";import{C as a,J as o,gt as s}from"./iframe-Du5FrOxJ.js";import{l as c,t as l}from"./src2.js";import{r as u,t as d}from"./dist28.js";var f=n({Example:()=>g,__namedExportsOrder:()=>_,default:()=>h}),p,m,h,g,_,v=t((()=>{d(),a(),p=e(r()),l(),m=i(),h={component:c,title:`@charts/ActivityMap`,parameters:{layout:`centered`,controls:{exclude:`children`}}},g={render:e=>{let[t,n]=(0,p.useState)([]),r=(0,p.useCallback)(()=>{let e=Array(7),t=Array(24);n(Array.from(e,(e,n)=>Array.from(t,(e,t)=>[t,n,u.number.int({min:0,max:99})])))},[]);return(0,p.useEffect)(()=>{r()},[]),(0,m.jsx)(o,{maxWidth:`48rem`,width:`100vw`,height:`24rem`,title:`Activity Map chart`,actions:(0,m.jsx)(s,{"aria-label":`loadData`,variant:`link`,icon:`mdi mdi-refresh`,onClick:r}),children:(0,m.jsx)(c,{...e,series:t})})},args:{}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
        <ActivityMap {...args} series={data} />
      </Panel>;
  },
  args: {}
}`,...g.parameters?.docs?.source}}},_=[`Example`]}));v();export{g as Example,_ as __namedExportsOrder,h as default,v as n,f as t};