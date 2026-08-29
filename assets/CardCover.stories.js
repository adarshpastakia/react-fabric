import{n as e,r as t}from"./rolldown-runtime.js";import{r as n}from"./EmptyContent.js";import{D as r,E as i,It as a,K as o,W as s,Yt as c,gt as l,mt as u,t as d,zt as f}from"./src2.js";import{t as p}from"./jsx-runtime.js";import{n as m,t as h}from"./chunk-NAVWDHVN.js";import{n as g,t as _}from"./small_video.js";var v=t({_CardCover:()=>w,__namedExportsOrder:()=>T,default:()=>x}),y,b,x,S,C,w,T;function E(){return(E=e((()=>{d(),m(),y=p(),_(),b=p(),x={component:s,title:`@core/components/Card`,parameters:{layout:`centered`,jest:[`core/tests/components/CardCover.test.tsx`]},decorators:[e=>(0,b.jsx)(`div`,{className:`flex justify-center gap-4`,children:(0,b.jsx)(e,{})})]},S=h.lorem.paragraph(),C=h.image.url(),w={render(e){return(0,b.jsxs)(y.Fragment,{children:[(0,b.jsxs)(o,{title:`Image Cover`,width:480,children:[(0,b.jsx)(s,{...e,title:(0,b.jsx)(c,{as:`h3`,children:`Cover Title`}),children:(0,b.jsx)(i,{src:C,alt:`Card Image`})}),(0,b.jsx)(f,{children:(0,b.jsx)(l,{children:S})}),(0,b.jsx)(a,{children:(0,b.jsxs)(u,{className:`w-full text-xl`,children:[(0,b.jsx)(n,{classNames:{button:`py-2`,icon:`text-jade-500`},icon:`icon-[mdi--whatsapp]`,"aria-label":`Whatsapp`}),(0,b.jsx)(n,{classNames:{button:`py-2`,icon:`text-coral-500`},icon:`icon-[mdi--instagram]`,"aria-label":`Instagram`})]})})]}),(0,b.jsxs)(o,{title:`Video Cover (Hover to play)`,width:480,children:[(0,b.jsx)(s,{...e,title:(0,b.jsxs)(`div`,{children:[(0,b.jsx)(c,{as:`h3`,children:`Cover Title`}),(0,b.jsx)(c,{as:`h6`,children:`Description`})]}),children:(0,b.jsx)(r,{reel:!0,src:g,playOnHover:!0})}),(0,b.jsx)(f,{children:(0,b.jsx)(l,{children:S})}),(0,b.jsx)(a,{children:(0,b.jsxs)(u,{className:`w-full text-xl`,children:[(0,b.jsx)(n,{classNames:{button:`py-2`},icon:`icon-[mdi--download]`,"aria-label":`Download`}),(0,b.jsx)(n,{classNames:{button:`py-2`},icon:`icon-[mdi--share-variant]`,"aria-label":`Share`})]})})]})]})},args:{height:320}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T=[`_CardCover`]})))()}export{w as n,E as r,v as t};