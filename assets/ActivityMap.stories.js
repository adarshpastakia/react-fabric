import{n as e,r as t}from"./rolldown-runtime.js";import{t as n}from"./react.js";import{r}from"./EmptyContent.js";import{m as i,t as a}from"./src2.js";import{t as o}from"./jsx-runtime.js";import{g as s,t as c}from"./src4.js";import{n as l,t as u}from"./chunk-NAVWDHVN.js";var d=t({Example:()=>h,__namedExportsOrder:()=>g,default:()=>m}),f,p,m,h,g;function _(){return(_=e((()=>{c(),a(),l(),f=n(),p=o(),m={component:s,title:`@charts/ActivityMap`,parameters:{layout:`centered`,controls:{exclude:`children`}}},h={render:e=>{let[t,n]=(0,f.useState)([]),a=(0,f.useCallback)(()=>{let e=Array(7),t=Array(24);n(Array.from(e,(e,n)=>Array.from(t,(e,t)=>[t,n,u.number.int({min:0,max:99})])))},[]);return(0,f.useEffect)(()=>{a()},[]),(0,p.jsx)(i,{maxWidth:`48rem`,width:`100vw`,height:`24rem`,title:`Activity Map chart`,actions:(0,p.jsx)(r,{"aria-label":`loadData`,variant:`link`,icon:`icon-[mdi--refresh]`,onClick:a}),children:(0,p.jsx)(s,{...e,series:t})})},args:{showThemeSelector:!0,showTypeSelector:!0}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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