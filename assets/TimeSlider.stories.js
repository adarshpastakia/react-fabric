import{n as e,r as t}from"./rolldown-runtime.js";import{t as n}from"./react.js";import{r}from"./EmptyContent.js";import{m as i,t as a}from"./src2.js";import{t as o}from"./jsx-runtime.js";import{i as s,t as c}from"./src4.js";import{n as l,t as u}from"./chunk-NAVWDHVN.js";var d=t({Example:()=>g,__namedExportsOrder:()=>_,default:()=>h}),f,p,m,h,g,_;function v(){return(v=e((()=>{c(),a(),l(),f=n(),p=o(),{fn:m}=__STORYBOOK_MODULE_TEST__,h={component:s,title:`@charts/TimeSlider`,parameters:{layout:`centered`,controls:{exclude:`children`}}},g={render:e=>{let[t,n]=(0,f.useState)([]),a=(0,f.useCallback)(()=>{let e=Array.from(Array(1095),(e,t)=>new Date(2022,0,t+1));n(e.map(e=>[e,u.number.int({min:100,max:500})]))},[]);return(0,f.useEffect)(()=>{a()},[]),(0,p.jsx)(i,{width:`48rem`,height:`8rem`,title:`Time Series chart`,expandable:!0,actions:(0,p.jsx)(r,{"aria-label":`loadData`,variant:`link`,icon:`icon-[mdi--refresh]`,onClick:a}),children:(0,p.jsx)(s,{...e,series:t,range:{start:new Date(2022,9,1),end:new Date(2023,9,1)}})})},args:{onBrush:m()}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
    return <Panel width="48rem" height="8rem" title="Time Series chart" expandable actions={<Button aria-label="loadData" variant="link" icon="icon-[mdi--refresh]" onClick={loadData} />}>
        <TimeSlider {...args} series={data} range={{
        start: new Date(2022, 9, 1),
        end: new Date(2023, 9, 1)
      }} />
      </Panel>;
  },
  args: {
    onBrush: fn()
  }
}`,...g.parameters?.docs?.source}}},_=[`Example`]})))()}export{d as n,v as r,g as t};