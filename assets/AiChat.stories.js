import{n as e}from"./rolldown-runtime.js";import{r as t}from"./EmptyContent.js";import{t as n}from"./jsx-runtime.js";import{t as r}from"./src2.js";import{n as i,t as a}from"./src3.js";var o,s,c,l,u,d,f;function p(){return(p=e((()=>{a(),r(),o=n(),s={component:i,title:`@ai/AiChat`,parameters:{layout:`fullscreen`,jest:[`ai/tests/AiChat.test.tsx`]},decorators:[e=>(0,o.jsx)(`div`,{className:`absolute inset-0 sectioned overflow-hidden`,children:(0,o.jsx)(e,{})})]},c={messages:[{id:`a-latest`,type:`answer`,tokens:128,duration:850,response:[{type:`thinking`,content:`The user is asking which database to use. I should clarify the requirements first.`},{type:`questionnaire`,content:`Need clarifications for the work to be done.`,questionnaire:[{question:`What is the primary workload?`,options:[`OLTP`,`OLAP`,`Mixed`],multiple:!1},{question:`Which features do you need?`,options:[`Do you want to use a mix of Full-text and JSON, trying to make this a long option label.
testing a new line`,`JSON support`,`Time-series`],multiple:!0}]}]},{id:`q-1`,type:`question`,text:`Which database should I use for my analytics app?`,questionnaire:{"Primary workload":`OLAP`,Features:`Full-text search, JSON support`}},{id:`a-1`,type:`answer`,tokens:96,duration:600,response:[{type:`reading`,content:`queried product-catalog schema (12 tables)`},{type:`answer`,content:`For an **analytics** app, a columnar database like **ClickHouse** or **DuckDB** is a strong fit.`},{type:`open_dashboard`,content:`Open the sales dashboard`,data:{dashboardId:`123`}},{type:`error`,content:`Note: the pricing endpoint timed out.`}]},{id:`q-0`,type:`question`,text:`Hello! Can you help me choose a database?`}],hasMore:!1,isLoadingMore:!1,onLoadMore:()=>console.log(`load more`),onSendMessage:e=>console.log(`send`,e),renderers:{open_dashboard:e=>(0,o.jsx)(t,{variant:`outlined`,icon:`icon-[mdi--chart-line]`,color:`primary`,children:e.content})}},l={tags:[`!autodocs`],render:e=>(0,o.jsx)(i,{...e}),args:c},u={render:e=>(0,o.jsx)(i,{...e}),args:c},d={render:e=>(0,o.jsx)(i,{...e}),args:{...c,hasMore:!0,isLoadingMore:!1}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  render: args => <AiChat {...args} />,
  args: baseArgs
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <AiChat {...args} />,
  args: baseArgs
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <AiChat {...args} />,
  args: {
    ...baseArgs,
    hasMore: true,
    isLoadingMore: false
  }
}`,...d.parameters?.docs?.source}}},f=[`Tester`,`Default`,`WithInfiniteScroll`]})))()}p();export{u as Default,l as Tester,d as WithInfiniteScroll,f as __namedExportsOrder,s as default};