import{n as e,r as t}from"./rolldown-runtime.js";import{t as n}from"./react.js";import{r}from"./EmptyContent.js";import{m as i,t as a}from"./src2.js";import{t as o}from"./jsx-runtime.js";import{o as s,t as c}from"./src4.js";import{n as l,t as u}from"./chunk-NAVWDHVN.js";var d=t({Example:()=>g,__namedExportsOrder:()=>_,default:()=>h}),f,p,m,h,g,_;function v(){return(v=e((()=>{c(),a(),l(),f=n(),p=o(),{fn:m}=__STORYBOOK_MODULE_TEST__,h={component:s,title:`@charts/TimeSeries`,parameters:{layout:`centered`,controls:{exclude:`children`}}},g={render:e=>{let[t,n]=(0,f.useState)({}),a=(0,f.useCallback)(()=>{let e=Array.from(Array(24),(e,t)=>new Date(2021,t,1));n({categoryAxisName:`Months`,valueAxisName:`Items`,categories:e,series:[{id:u.string.alphanumeric(5),name:u.animal.bear(),data:e.map(e=>[e,u.number.int({min:100,max:500})])},{id:u.string.alphanumeric(5),name:u.animal.cat(),data:e.map(e=>[e,u.number.int({min:100,max:500})])},{id:u.string.alphanumeric(5),name:u.animal.bird(),data:e.map(e=>[e,u.number.int({min:100,max:500})])}]})},[]);return(0,f.useEffect)(()=>{a()},[]),(0,p.jsx)(i,{width:`48rem`,height:`24rem`,title:`Time Series chart`,expandable:!0,actions:(0,p.jsx)(r,{"aria-label":`loadData`,variant:`link`,icon:`icon-[mdi--refresh]`,onClick:a}),children:(0,p.jsx)(s,{...e,...t})})},args:{onBrush:m(),onClick:m(),showThemeSelector:!0,showTypeSelector:!0}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [data, setData] = useState<AnyObject>({});
    const loadData = useCallback(() => {
      const categories = Array.from(Array(24), (_, i) => new Date(2021, i, 1));
      setData({
        categoryAxisName: "Months",
        valueAxisName: "Items",
        categories,
        series: [{
          id: faker.string.alphanumeric(5),
          name: faker.animal.bear(),
          data: categories.map(c => [c, faker.number.int({
            min: 100,
            max: 500
          })])
        }, {
          id: faker.string.alphanumeric(5),
          name: faker.animal.cat(),
          data: categories.map(c => [c, faker.number.int({
            min: 100,
            max: 500
          })])
        }, {
          id: faker.string.alphanumeric(5),
          name: faker.animal.bird(),
          data: categories.map(c => [c, faker.number.int({
            min: 100,
            max: 500
          })])
        }]
      });
    }, []);
    useEffect(() => {
      loadData();
    }, []);
    return <Panel width="48rem" height="24rem" title="Time Series chart" expandable actions={<Button aria-label="loadData" variant="link" icon="icon-[mdi--refresh]" onClick={loadData} />}>
        <TimeSeries {...args} {...data} />
      </Panel>;
  },
  args: {
    onBrush: fn(),
    onClick: fn(),
    showThemeSelector: true,
    showTypeSelector: true
  }
}`,...g.parameters?.docs?.source}}},_=[`Example`]})))()}export{d as n,v as r,g as t};