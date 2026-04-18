import{a as e,n as t,r as n}from"./chunk.js";import{t as r}from"./react.js";import{t as i}from"./jsx-runtime.js";import{C as a,J as o,gt as s}from"./iframe-BBjx9o_X.js";import{c,t as l}from"./src2.js";import{r as u,t as d}from"./dist28.js";var f=n({Example:()=>_,__namedExportsOrder:()=>v,default:()=>g}),p,m,h,g,_,v,y=t((()=>{d(),a(),p=e(r()),l(),m=i(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={component:c,title:`@charts/CountSeries`,parameters:{layout:`centered`,controls:{exclude:`children`}}},_={render:e=>{let[t,n]=(0,p.useState)([]),r=(0,p.useCallback)(()=>{n(Array.from(Array(24),(e,t)=>({id:`key-${t}`,name:u.animal.cat(),count:u.number.int({min:99,max:12489})})))},[]);return(0,p.useEffect)(()=>{r()},[]),(0,m.jsx)(o,{width:`36rem`,height:`36rem`,title:`Count Series chart`,actions:(0,m.jsx)(s,{"aria-label":`loadData`,variant:`link`,icon:`mdi mdi-refresh`,onClick:r}),children:(0,m.jsx)(c,{...e,series:t})})},args:{onClick:h()}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [data, setData] = useState<AnyObject[]>([]);
    const loadData = useCallback(() => {
      setData(Array.from(Array(Math.ceil(24)), (_, i) => ({
        id: \`key-\${i}\`,
        name: faker.animal.cat(),
        count: faker.number.int({
          min: 99,
          max: 12489
        })
      })));
    }, []);
    useEffect(() => {
      loadData();
    }, []);
    return <Panel width="36rem" height="36rem" title="Count Series chart" actions={<Button aria-label="loadData" variant="link" icon="mdi mdi-refresh" onClick={loadData} />}>
        <CountSeries {...args} series={data} />
      </Panel>;
  },
  args: {
    onClick: fn()
  }
}`,..._.parameters?.docs?.source}}},v=[`Example`]}));y();export{_ as Example,v as __namedExportsOrder,g as default,y as n,f as t};