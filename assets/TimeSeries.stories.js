import{a as e,n as t,r as n}from"./chunk.js";import{t as r}from"./react.js";import{t as i}from"./jsx-runtime.js";import{T as a,Y as o,t as s}from"./iframe-B-Wcw5ev.js";import{i as c,t as l}from"./src2.js";import{r as u,t as d}from"./dist28.js";var f=n({Example:()=>_,__namedExportsOrder:()=>v,default:()=>g}),p,m,h,g,_,v,y=t((()=>{d(),s(),p=e(r()),l(),m=i(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={component:c,title:`@charts/TimeSeries`,parameters:{layout:`centered`,controls:{exclude:`children`}}},_={render:e=>{let[t,n]=(0,p.useState)({}),r=(0,p.useCallback)(()=>{let e=Array.from(Array(24),(e,t)=>new Date(2021,t,1));n({categoryAxisName:`Months`,valueAxisName:`Items`,categories:e,series:[{id:u.string.alphanumeric(5),name:u.animal.bear(),data:e.map(e=>[e,u.number.int({min:100,max:500})])},{id:u.string.alphanumeric(5),name:u.animal.cat(),data:e.map(e=>[e,u.number.int({min:100,max:500})])},{id:u.string.alphanumeric(5),name:u.animal.bird(),data:e.map(e=>[e,u.number.int({min:100,max:500})])}]})},[]);return(0,p.useEffect)(()=>{r()},[]),(0,m.jsx)(a,{width:`48rem`,height:`24rem`,title:`Time Series chart`,expandable:!0,actions:(0,m.jsx)(o,{"aria-label":`loadData`,variant:`link`,icon:`mdi mdi-refresh`,onClick:r}),children:(0,m.jsx)(c,{...e,...t})})},args:{onBrush:h(),onClick:h()}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
    return <Panel width="48rem" height="24rem" title="Time Series chart" expandable actions={<Button aria-label="loadData" variant="link" icon="mdi mdi-refresh" onClick={loadData} />}>
        <TimeSeries {...args} {...data} />
      </Panel>;
  },
  args: {
    onBrush: fn(),
    onClick: fn()
  }
}`,..._.parameters?.docs?.source}}},v=[`Example`]}));y();export{_ as Example,v as __namedExportsOrder,g as default,y as n,f as t};