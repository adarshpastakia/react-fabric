import{n as e,r as t}from"./rolldown-runtime.js";import{t as n}from"./react.js";import{r}from"./EmptyContent.js";import{m as i,t as a}from"./src2.js";import{t as o}from"./jsx-runtime.js";import{m as s,t as c}from"./src4.js";import{n as l,t as u}from"./chunk-NAVWDHVN.js";var d=t({Example:()=>g,__namedExportsOrder:()=>_,default:()=>h}),f,p,m,h,g,_;function v(){return(v=e((()=>{c(),a(),l(),f=n(),p=o(),{fn:m}=__STORYBOOK_MODULE_TEST__,h={component:s,title:`@charts/CountSeries`,parameters:{layout:`centered`,controls:{exclude:`children`}}},g={render:e=>{let[t,n]=(0,f.useState)([]),a=(0,f.useCallback)(()=>{n(Array.from(Array(24),(e,t)=>({id:`key-${t}`,name:u.animal.cat(),count:u.number.int({min:99,max:12489})})))},[]);return(0,f.useEffect)(()=>{a()},[]),(0,p.jsx)(i,{width:`36rem`,height:`36rem`,title:`Count Series chart`,actions:(0,p.jsx)(r,{"aria-label":`loadData`,variant:`link`,icon:`icon-[mdi--refresh]`,onClick:a}),children:(0,p.jsx)(s,{...e,series:t})})},args:{onClick:m(),showThemeSelector:!0,showTypeSelector:!0}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
    return <Panel width="36rem" height="36rem" title="Count Series chart" actions={<Button aria-label="loadData" variant="link" icon="icon-[mdi--refresh]" onClick={loadData} />}>
        <CountSeries {...args} series={data} />
      </Panel>;
  },
  args: {
    onClick: fn(),
    showThemeSelector: true,
    showTypeSelector: true
  }
}`,...g.parameters?.docs?.source}}},_=[`Example`]})))()}export{g as n,v as r,d as t};