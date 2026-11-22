import{n as e,r as t}from"./rolldown-runtime.js";import{t as n}from"./react.js";import{r}from"./EmptyContent.js";import{t as i}from"./jsx-runtime.js";import{H as a,It as o,K as s,Lt as c,W as l,bt as u,gt as d,t as f,zt as p}from"./src2.js";import{n as m,t as h}from"./en.js";var g=t({ClickableCard:()=>S,FlipCard:()=>C,_Card:()=>x,__namedExportsOrder:()=>w,default:()=>y}),_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{f(),h(),_=n(),v=i(),y={component:s,subcomponents:{CardCover:l},title:`@core/components/Card`,parameters:{layout:`centered`,jest:[`core/tests/components/Card.test.tsx`]},decorators:[e=>(0,v.jsx)(`div`,{className:`flex justify-center gap-4`,children:(0,v.jsx)(e,{})})]},b=m.lorem.paragraphs(2),x={render(e){return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(s,{...e,title:`Card Title`,width:480,children:[(0,v.jsx)(c,{className:`px-4`,children:`Header`}),(0,v.jsx)(p,{children:(0,v.jsx)(d,{children:b})}),(0,v.jsx)(o,{className:`px-4`,children:`Footer`})]})})},args:{}},S={render(e){return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(s,{...e,title:`Card Title`,width:480,onClick:()=>alert(`Card was clicked`),children:[(0,v.jsx)(c,{className:`px-4`,children:`Header`}),(0,v.jsxs)(p,{children:[(0,v.jsx)(d,{children:b}),(0,v.jsxs)(`div`,{className:`flex gap-2 mt-4`,children:[(0,v.jsx)(u,{onClick:e=>(e?.stopPropagation(),alert(`Anchor was clicked`)),children:`Inner link`}),(0,v.jsx)(r,{onClick:e=>(e?.stopPropagation(),alert(`Button was clicked`)),children:`Inner button`})]})]}),(0,v.jsx)(o,{className:`px-4`,children:`Footer`})]})})},args:{}},C={render:e=>{let t=(0,_.useRef)(null);return(0,v.jsxs)(s,{...e,width:480,children:[(0,v.jsx)(c,{children:(0,v.jsx)(r,{"data-testid":`flipToggle`,onClick:()=>t.current?.flipCard(),children:`Toggle Flip`})}),(0,v.jsxs)(a,{ref:t,children:[(0,v.jsx)(p,{"data-testid":`frontContent`,children:b}),(0,v.jsx)(p,{"data-testid":`backContent`,children:(0,v.jsx)(`table`,{children:(0,v.jsx)(`tbody`,{children:(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:`1`}),(0,v.jsx)(`td`,{children:`title`}),(0,v.jsx)(`td`,{children:`action`})]})})})})]})]})},args:{}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <Fragment>
        <Card {...args} title="Card Title" width={480}>
          <Header className="px-4">Header</Header>
          <Content>
            <Text>{content}</Text>
          </Content>
          <Footer className="px-4">Footer</Footer>
        </Card>
      </Fragment>;
  },
  args: {}
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <Fragment>
        <Card {...args} title="Card Title" width={480} onClick={() => alert("Card was clicked")}>
          <Header className="px-4">Header</Header>
          <Content>
            <Text>{content}</Text>
            <div className="flex gap-2 mt-4">
              <Anchor onClick={e => (e?.stopPropagation(), alert("Anchor was clicked"))}>Inner link</Anchor>
              <Button onClick={e => (e?.stopPropagation(), alert("Button was clicked"))}>Inner button</Button>
            </div>
          </Content>
          <Footer className="px-4">Footer</Footer>
        </Card>
      </Fragment>;
  },
  args: {}
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => {
    const ref = useRef<FlipContentRef>(null);
    return <Card {...args} width={480}>
        <Header>
          <Button data-testid="flipToggle" onClick={() => ref.current?.flipCard()}>
            Toggle Flip
          </Button>
        </Header>
        <FlipContent ref={ref}>
          <Content data-testid="frontContent">{content}</Content>
          <Content data-testid="backContent">
            <table>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>title</td>
                  <td>action</td>
                </tr>
              </tbody>
            </table>
          </Content>
        </FlipContent>
      </Card>;
  },
  args: {}
}`,...C.parameters?.docs?.source}}},w=[`_Card`,`ClickableCard`,`FlipCard`]})))()}export{T as a,x as i,S as n,C as r,g as t};