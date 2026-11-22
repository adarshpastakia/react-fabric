import{n as e,r as t}from"./rolldown-runtime.js";import{t as n}from"./react.js";import{r}from"./EmptyContent.js";import{t as i}from"./jsx-runtime.js";import{m as a,t as o}from"./src2.js";import{g as s,t as c}from"./src4.js";import{n as l,t as u}from"./en.js";var d=t({Example:()=>h,__namedExportsOrder:()=>g,default:()=>m}),f,p,m,h,g;function _(){return(_=e((()=>{c(),o(),u(),f=n(),p=i(),m={component:s,title:`@charts/ActivityMap`,parameters:{layout:`centered`,controls:{exclude:`children`}}},h={render:e=>{let[t,n]=(0,f.useState)([]),i=(0,f.useCallback)(()=>{let e=Array(7),t=Array(24);n(Array.from(e,(e,n)=>Array.from(t,(e,t)=>[t,n,l.number.int({min:0,max:99})])))},[]);return(0,f.useEffect)(()=>{i()},[]),(0,p.jsx)(a,{maxWidth:`48rem`,width:`100vw`,height:`24rem`,title:`Activity Map chart`,actions:(0,p.jsx)(r,{"aria-label":`loadData`,variant:`link`,icon:`icon-[mdi--refresh]`,onClick:i}),children:(0,p.jsx)(s,{...e,series:t})})},args:{showThemeSelector:!0,showTypeSelector:!0}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
    return <Panel maxWidth="48rem" width="100vw" height="24rem" title="Activity Map chart" actions={<Button aria-label="loadData" variant="link" icon="icon-[mdi--refresh]" onClick={loadData} />}>
        <ActivityMap {...args} series={data} />
      </Panel>;
  },
  args: {
    showThemeSelector: true,
    showTypeSelector: true
  }
}`,...h.parameters?.docs?.source}}},g=[`Example`]})))()}export{h as n,_ as r,d as t};