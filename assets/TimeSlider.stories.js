import{a as e,n as t,r as n}from"./chunk.js";import{t as r}from"./react.js";import{t as i}from"./jsx-runtime.js";import{C as a,J as o,gt as s}from"./iframe-Du5FrOxJ.js";import{r as c,t as l}from"./src2.js";import{r as u,t as d}from"./dist28.js";var f=n({Example:()=>_,__namedExportsOrder:()=>v,default:()=>g}),p,m,h,g,_,v,y=t((()=>{d(),a(),p=e(r()),l(),m=i(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={component:c,title:`@charts/TimeSlider`,parameters:{layout:`centered`,controls:{exclude:`children`}}},_={render:e=>{let[t,n]=(0,p.useState)([]),r=(0,p.useCallback)(()=>{n(Array.from(Array(365*3),(e,t)=>new Date(2022,0,t+1)).map(e=>[e,u.number.int({min:100,max:500})]))},[]);return(0,p.useEffect)(()=>{r()},[]),(0,m.jsx)(o,{width:`48rem`,height:`8rem`,title:`Time Series chart`,expandable:!0,actions:(0,m.jsx)(s,{"aria-label":`loadData`,variant:`link`,icon:`mdi mdi-refresh`,onClick:r}),children:(0,m.jsx)(c,{...e,series:t,range:{start:new Date(2022,9,1),end:new Date(2023,9,1)}})})},args:{onBrush:h()}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
        <TimeSlider {...args} series={data} range={{
        start: new Date(2022, 9, 1),
        end: new Date(2023, 9, 1)
      }} />
      </Panel>;
  },
  args: {
    onBrush: fn()
  }
}`,..._.parameters?.docs?.source}}},v=[`Example`]}));y();export{_ as Example,v as __namedExportsOrder,g as default,y as n,f as t};