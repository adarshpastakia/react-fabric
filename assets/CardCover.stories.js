import{n as e,r as t}from"./rolldown-runtime.js";import{r as n}from"./EmptyContent.js";import{t as r}from"./jsx-runtime.js";import{D as i,E as a,It as o,K as s,W as c,Yt as l,gt as u,mt as d,t as f,zt as p}from"./src2.js";import{n as m,t as h}from"./en.js";import{n as g,t as _}from"./small_video.js";var v=t({_CardCover:()=>C,__namedExportsOrder:()=>w,default:()=>b}),y,b,x,S,C,w;function T(){return(T=e((()=>{f(),h(),y=r(),_(),b={component:c,title:`@core/components/Card`,parameters:{layout:`centered`,jest:[`core/tests/components/CardCover.test.tsx`]},decorators:[e=>(0,y.jsx)(`div`,{className:`flex justify-center gap-4`,children:(0,y.jsx)(e,{})})]},x=m.lorem.paragraph(),S=m.image.url(),C={render(e){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(s,{title:`Image Cover`,width:480,children:[(0,y.jsx)(c,{...e,title:(0,y.jsx)(l,{as:`h3`,children:`Cover Title`}),children:(0,y.jsx)(a,{src:S,alt:`Card Image`})}),(0,y.jsx)(p,{children:(0,y.jsx)(u,{children:x})}),(0,y.jsx)(o,{children:(0,y.jsxs)(d,{className:`w-full text-xl`,children:[(0,y.jsx)(n,{classNames:{button:`py-2`,icon:`text-jade-500`},icon:`icon-[mdi--whatsapp]`,"aria-label":`Whatsapp`}),(0,y.jsx)(n,{classNames:{button:`py-2`,icon:`text-coral-500`},icon:`icon-[mdi--instagram]`,"aria-label":`Instagram`})]})})]}),(0,y.jsxs)(s,{title:`Video Cover (Hover to play)`,width:480,children:[(0,y.jsx)(c,{...e,title:(0,y.jsxs)(`div`,{children:[(0,y.jsx)(l,{as:`h3`,children:`Cover Title`}),(0,y.jsx)(l,{as:`h6`,children:`Description`})]}),children:(0,y.jsx)(i,{reel:!0,src:g,playOnHover:!0})}),(0,y.jsx)(p,{children:(0,y.jsx)(u,{children:x})}),(0,y.jsx)(o,{children:(0,y.jsxs)(d,{className:`w-full text-xl`,children:[(0,y.jsx)(n,{classNames:{button:`py-2`},icon:`icon-[mdi--download]`,"aria-label":`Download`}),(0,y.jsx)(n,{classNames:{button:`py-2`},icon:`icon-[mdi--share-variant]`,"aria-label":`Share`})]})})]})]})},args:{height:320}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <Fragment>
        <Card title="Image Cover" width={480}>
          <CardCover {...args} title={<Title as="h3">Cover Title</Title>}>
            <Image src={image} alt="Card Image" />
          </CardCover>
          <Content>
            <Text>{cover}</Text>
          </Content>
          <Footer>
            <ButtonGroup className="w-full text-xl">
              <Button classNames={{
              button: "py-2",
              icon: "text-jade-500"
            }} icon="icon-[mdi--whatsapp]" aria-label="Whatsapp" />
              <Button classNames={{
              button: "py-2",
              icon: "text-coral-500"
            }} icon="icon-[mdi--instagram]" aria-label="Instagram" />
            </ButtonGroup>
          </Footer>
        </Card>
        <Card title="Video Cover (Hover to play)" width={480}>
          <CardCover {...args} title={<div>
                <Title as="h3">Cover Title</Title>
                <Title as="h6">Description</Title>
              </div>}>
            <Video reel src={video} playOnHover />
          </CardCover>
          <Content>
            <Text>{cover}</Text>
          </Content>
          <Footer>
            <ButtonGroup className="w-full text-xl">
              <Button classNames={{
              button: "py-2"
            }} icon="icon-[mdi--download]" aria-label="Download" />
              <Button classNames={{
              button: "py-2"
            }} icon="icon-[mdi--share-variant]" aria-label="Share" />
            </ButtonGroup>
          </Footer>
        </Card>
      </Fragment>;
  },
  args: {
    height: 320
  }
}`,...C.parameters?.docs?.source}}},w=[`_CardCover`]})))()}export{C as n,T as r,v as t};