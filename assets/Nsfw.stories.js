import{n as e}from"./chunk.js";import{t}from"./jsx-runtime.js";import{C as n,L as r,M as i,R as a,Tt as o,gt as s}from"./iframe-BBjx9o_X.js";import{r as c,t as l}from"./dist28.js";import{n as u,t as d}from"./src7.js";var f,p,m,h;e((()=>{l(),n(),d(),f=t(),p={title:`@media/NSFW Overlay`,parameters:{layout:`centered`,controls:{exclude:`children`}}},m={render:e=>(0,f.jsxs)(a,{noWrap:!1,justify:`center`,children:[(0,f.jsx)(r,{flex:`full`,children:(0,f.jsx)(i,{align:`center`,as:`h4`,color:`primary`,children:`NSFW Overlay Tester`})}),(0,f.jsxs)(r,{children:[(0,f.jsx)(`p`,{children:`Basic`}),(0,f.jsx)(u,{...e,nsfw:{trigger:`none`,message:`Sensitive Content`},src:c.image.url({width:256,height:256})})]}),(0,f.jsxs)(r,{children:[(0,f.jsx)(`p`,{children:`Hover trigger`}),(0,f.jsx)(u,{...e,nsfw:{trigger:`hover`,message:`Hover to reveal`},src:c.image.url({width:256,height:256})})]}),(0,f.jsxs)(r,{children:[(0,f.jsx)(`p`,{children:`Click trigger`}),(0,f.jsx)(u,{...e,nsfw:{trigger:`click`,message:`Click to reveal`},src:c.image.url({width:256,height:256})})]}),(0,f.jsxs)(r,{children:[(0,f.jsx)(`p`,{children:`Custom message`}),(0,f.jsx)(u,{...e,nsfw:{message({hide:e,remove:t}){return(0,f.jsxs)(`div`,{children:[(0,f.jsx)(o,{icon:`icon-[mdi--shield-lock]`,className:`text-[2em]`}),(0,f.jsx)(`p`,{className:`text-xs`,children:`Reveal for few moments, or hide`}),(0,f.jsxs)(`div`,{className:`flex gap-1 justify-center`,children:[(0,f.jsx)(s,{size:`xs`,variant:`soft`,onClick:e,children:`Reveal`}),(0,f.jsx)(s,{size:`xs`,variant:`soft`,onClick:t,children:`Show`})]})]})}},src:c.image.url({width:256,height:256})})]})]}),args:{nsfw:{message:`Sensitive Content`},width:`16rem`,height:`16rem`}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Row noWrap={false} justify="center">
        <Col flex="full">
          <Title align="center" as="h4" color="primary">
            NSFW Overlay Tester
          </Title>
        </Col>
        <Col>
          <p>Basic</p>
          <Thumbnail {...args} nsfw={{
          trigger: "none",
          message: "Sensitive Content"
        }} src={faker.image.url({
          width: 256,
          height: 256
        })} />
        </Col>
        <Col>
          <p>Hover trigger</p>
          <Thumbnail {...args} nsfw={{
          trigger: "hover",
          message: "Hover to reveal"
        }} src={faker.image.url({
          width: 256,
          height: 256
        })} />
        </Col>
        <Col>
          <p>Click trigger</p>
          <Thumbnail {...args} nsfw={{
          trigger: "click",
          message: "Click to reveal"
        }} src={faker.image.url({
          width: 256,
          height: 256
        })} />
        </Col>
        <Col>
          <p>Custom message</p>
          <Thumbnail {...args} nsfw={{
          message({
            hide,
            remove
          }) {
            return <div>
                    <Icon icon="icon-[mdi--shield-lock]" className="text-[2em]" />
                    <p className="text-xs">Reveal for few moments, or hide</p>
                    <div className="flex gap-1 justify-center">
                      <Button size="xs" variant="soft" onClick={hide}>
                        Reveal
                      </Button>
                      <Button size="xs" variant="soft" onClick={remove}>
                        Show
                      </Button>
                    </div>
                  </div>;
          }
        }} src={faker.image.url({
          width: 256,
          height: 256
        })} />
        </Col>
      </Row>;
  },
  args: {
    nsfw: {
      message: "Sensitive Content"
    },
    width: "16rem",
    height: "16rem"
  }
}`,...m.parameters?.docs?.source}}},h=[`_NSFWOverlay`]}))();export{m as _NSFWOverlay,h as __namedExportsOrder,p as default};