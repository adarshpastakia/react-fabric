import{n as e,r as t}from"./rolldown-runtime.js";import{t as n}from"./react.js";import{r}from"./EmptyContent.js";import{m as i,t as a}from"./src2.js";import{t as o}from"./jsx-runtime.js";import{f as s,t as c}from"./src4.js";import{n as l,t as u}from"./chunk-NAVWDHVN.js";var d=t({Example:()=>g,__namedExportsOrder:()=>_,default:()=>h}),f,p,m,h,g,_;function v(){return(v=e((()=>{c(),a(),l(),f=n(),p=o(),{fn:m}=__STORYBOOK_MODULE_TEST__,h={component:s,title:`@charts/DataSeries`,parameters:{layout:`centered`,controls:{exclude:`children`}}},g={render:e=>{let[t,n]=(0,f.useState)({}),a=(0,f.useCallback)(()=>{let e=[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`];n({categoryAxisName:`Months`,valueAxisName:`Items`,categories:e,series:[{id:u.string.alpha(5),name:u.animal.dog(),data:e.map(()=>u.number.int({min:100,max:500}))},{id:u.string.alpha(5),name:u.animal.dog(),data:e.map(()=>u.number.int({min:100,max:500}))},{id:u.string.alpha(5),name:u.animal.dog(),data:e.map(()=>u.number.int({min:100,max:500}))}]})},[]);return(0,f.useEffect)(()=>{a()},[]),(0,p.jsx)(i,{width:`48rem`,height:`24rem`,title:`Data Series chart`,expandable:!0,actions:(0,p.jsx)(r,{"aria-label":`loadData`,variant:`link`,icon:`icon-[mdi--refresh]`,onClick:a}),children:(0,p.jsx)(s,{...e,...t})})},args:{onClick:m(),showThemeSelector:!0,showTypeSelector:!0}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [data, setData] = useState<AnyObject>({});
    const loadData = useCallback(() => {
      const categories = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
      setData({
        categoryAxisName: "Months",
        valueAxisName: "Items",
        categories,
        series: [{
          id: faker.string.alpha(5),
          name: faker.animal.dog(),
          data: categories.map(() => faker.number.int({
            min: 100,
            max: 500
          }))
        }, {
          id: faker.string.alpha(5),
          name: faker.animal.dog(),
          data: categories.map(() => faker.number.int({
            min: 100,
            max: 500
          }))
        }, {
          id: faker.string.alpha(5),
          name: faker.animal.dog(),
          data: categories.map(() => faker.number.int({
            min: 100,
            max: 500
          }))
        }]
      });
    }, []);
    useEffect(() => {
      loadData();
    }, []);
    return <Panel width="48rem" height="24rem" title="Data Series chart" expandable actions={<Button aria-label="loadData" variant="link" icon="icon-[mdi--refresh]" onClick={loadData} />}>
        <DataSeries {...args} {...data} />
      </Panel>;
  },
  args: {
    onClick: fn(),
    showThemeSelector: true,
    showTypeSelector: true
  }
}`,...g.parameters?.docs?.source}}},_=[`Example`]})))()}export{g as n,v as r,d as t};