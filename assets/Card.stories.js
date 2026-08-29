import{n as e,r as t}from"./rolldown-runtime.js";import{t as n}from"./react.js";import{r}from"./EmptyContent.js";import{H as i,It as a,K as o,Lt as s,W as c,bt as l,gt as u,t as d,zt as f}from"./src2.js";import{t as p}from"./jsx-runtime.js";import{n as m,t as h}from"./chunk-NAVWDHVN.js";var g=t({ClickableCard:()=>C,FlipCard:()=>w,_Card:()=>S,__namedExportsOrder:()=>T,default:()=>b}),_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{d(),m(),_=n(),v=p(),y=p(),b={component:o,subcomponents:{CardCover:c},title:`@core/components/Card`,parameters:{layout:`centered`,jest:[`core/tests/components/Card.test.tsx`]},decorators:[e=>(0,y.jsx)(`div`,{className:`flex justify-center gap-4`,children:(0,y.jsx)(e,{})})]},x=h.lorem.paragraphs(2),S={render(e){return(0,y.jsx)(v.Fragment,{children:(0,y.jsxs)(o,{...e,title:`Card Title`,width:480,children:[(0,y.jsx)(s,{className:`px-4`,children:`Header`}),(0,y.jsx)(f,{children:(0,y.jsx)(u,{children:x})}),(0,y.jsx)(a,{className:`px-4`,children:`Footer`})]})})},args:{}},C={render(e){return(0,y.jsx)(v.Fragment,{children:(0,y.jsxs)(o,{...e,title:`Card Title`,width:480,onClick:()=>alert(`Card was clicked`),children:[(0,y.jsx)(s,{className:`px-4`,children:`Header`}),(0,y.jsxs)(f,{children:[(0,y.jsx)(u,{children:x}),(0,y.jsxs)(`div`,{className:`flex gap-2 mt-4`,children:[(0,y.jsx)(l,{onClick:e=>(e?.stopPropagation(),alert(`Anchor was clicked`)),children:`Inner link`}),(0,y.jsx)(r,{onClick:e=>(e?.stopPropagation(),alert(`Button was clicked`)),children:`Inner button`})]})]}),(0,y.jsx)(a,{className:`px-4`,children:`Footer`})]})})},args:{}},w={render:e=>{let t=(0,_.useRef)(null);return(0,y.jsxs)(o,{...e,width:480,children:[(0,y.jsx)(s,{children:(0,y.jsx)(r,{"data-testid":`flipToggle`,onClick:()=>t.current?.flipCard(),children:`Toggle Flip`})}),(0,y.jsxs)(i,{ref:t,children:[(0,y.jsx)(f,{"data-testid":`frontContent`,children:x}),(0,y.jsx)(f,{"data-testid":`backContent`,children:(0,y.jsx)(`table`,{children:(0,y.jsx)(`tbody`,{children:(0,y.jsxs)(`tr`,{children:[(0,y.jsx)(`td`,{children:`1`}),(0,y.jsx)(`td`,{children:`title`}),(0,y.jsx)(`td`,{children:`action`})]})})})})]})]})},args:{}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T=[`_Card`,`ClickableCard`,`FlipCard`]})))()}export{E as a,S as i,C as n,w as r,g as t};