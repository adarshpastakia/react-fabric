import{n as e,r as t}from"./rolldown-runtime.js";import{t as n}from"./react.js";import{r}from"./EmptyContent.js";import{m as i,t as a}from"./src2.js";import{t as o}from"./jsx-runtime.js";import{n as s,t as c}from"./src4.js";import{n as l,t as u}from"./chunk-NAVWDHVN.js";var d=t({Example:()=>g,__namedExportsOrder:()=>_,default:()=>h}),f,p,m,h,g,_;function v(){return(v=e((()=>{c(),a(),l(),f=n(),p=o(),{fn:m}=__STORYBOOK_MODULE_TEST__,h={component:s,title:`@charts/WordBubble`,parameters:{layout:`centered`,controls:{exclude:`children`}}},g={render:e=>{let[t,n]=(0,f.useState)([]),a=(0,f.useCallback)(()=>{n(Array.from(Array(u.number.int({min:12,max:48})),(e,t)=>({id:t,label:u.commerce.product(),count:u.number.int({min:99,max:499})})))},[]);return(0,f.useEffect)(()=>{a()},[]),(0,p.jsx)(i,{width:`36rem`,height:`36rem`,title:`Word Bubble chart`,expandable:!0,actions:(0,p.jsx)(r,{"aria-label":`loadData`,variant:`link`,icon:`icon-[mdi--refresh]`,onClick:a}),children:(0,p.jsx)(s,{...e,series:t})})},args:{onClick:m()}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [data, setData] = useState<AnyObject[]>([]);
    const loadData = useCallback(() => {
      setData(Array.from(Array(faker.number.int({
        min: 12,
        max: 48
      })), (_, key) => ({
        id: key,
        label: faker.commerce.product(),
        count: faker.number.int({
          min: 99,
          max: 499
        })
      })));
    }, []);
    useEffect(() => {
      loadData();
    }, []);
    return <Panel width="36rem" height="36rem" title="Word Bubble chart" expandable actions={<Button aria-label="loadData" variant="link" icon="icon-[mdi--refresh]" onClick={loadData} />}>
        <WordBubble {...args} series={data} />
      </Panel>;
  },
  args: {
    onClick: fn()
  }
}`,...g.parameters?.docs?.source}}},_=[`Example`]})))()}export{d as n,v as r,g as t};