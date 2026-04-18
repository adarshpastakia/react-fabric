import{a as e,n as t,r as n}from"./chunk.js";import{t as r}from"./react.js";import{t as i}from"./jsx-runtime.js";import{C as a,J as o,gt as s}from"./iframe-BBjx9o_X.js";import{s as c,t as l}from"./src2.js";import{r as u,t as d}from"./dist28.js";var f=n({Example:()=>_,__namedExportsOrder:()=>v,default:()=>g}),p,m,h,g,_,v,y=t((()=>{d(),a(),p=e(r()),l(),m=i(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={component:c,title:`@charts/DataSeries`,parameters:{layout:`centered`,controls:{exclude:`children`}}},_={render:e=>{let[t,n]=(0,p.useState)({}),r=(0,p.useCallback)(()=>{let e=[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`];n({categoryAxisName:`Months`,valueAxisName:`Items`,categories:e,series:[{id:u.string.alpha(5),name:u.animal.dog(),data:e.map(()=>u.number.int({min:100,max:500}))},{id:u.string.alpha(5),name:u.animal.dog(),data:e.map(()=>u.number.int({min:100,max:500}))},{id:u.string.alpha(5),name:u.animal.dog(),data:e.map(()=>u.number.int({min:100,max:500}))}]})},[]);return(0,p.useEffect)(()=>{r()},[]),(0,m.jsx)(o,{width:`48rem`,height:`24rem`,title:`Data Series chart`,expandable:!0,actions:(0,m.jsx)(s,{"aria-label":`loadData`,variant:`link`,icon:`mdi mdi-refresh`,onClick:r}),children:(0,m.jsx)(c,{...e,...t})})},args:{onClick:h()}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
    return <Panel width="48rem" height="24rem" title="Data Series chart" expandable actions={<Button aria-label="loadData" variant="link" icon="mdi mdi-refresh" onClick={loadData} />}>
        <DataSeries {...args} {...data} />
      </Panel>;
  },
  args: {
    onClick: fn()
  }
}`,..._.parameters?.docs?.source}}},v=[`Example`]}));y();export{_ as Example,v as __namedExportsOrder,g as default,y as n,f as t};