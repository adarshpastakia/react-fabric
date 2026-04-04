import{n as e}from"./chunk.js";import{r as t,t as n}from"./glsl.js";import{n as r,t as i}from"./ShaderBuilder.js";import{n as a,r as o}from"./Slice.glsl.js";import{n as s,t as c}from"./Float4PassUniform.js";import{n as l,r as u}from"./View.glsl.js";import{n as d,t as f}from"./OutputColorHighlightOLID.glsl.js";import{n as p,t as m}from"./Transform.glsl.js";import{n as h,t as g}from"./VertexColor.glsl.js";function _(e){let n=new r,{vertex:i,fragment:o,varyings:s}=n;return n.fragment.include(a,e),n.include(p),n.include(h,e),n.include(f,e),l(i,e),n.attributes.add(`position`,`vec3`),s.add(`vpos`,`vec3`,{invariant:!0}),i.main.add(t`vpos = position;
forwardVertexColor();
gl_Position = transformPosition(proj, view, vpos);`),e.hasVertexColors||o.uniforms.add(new c(`constantColor`,e=>e.color)),o.main.add(t`
    discardBySlice(vpos);
    vec4 color = ${e.hasVertexColors?`vColor`:`constantColor`};
    outputColorHighlightOLID(applySlice(color, vpos), color.rgb);
  `),n}var v,y=e((()=>{o(),m(),g(),u(),s(),n(),d(),i(),v=Object.freeze(Object.defineProperty({__proto__:null,build:_},Symbol.toStringTag,{value:`Module`}))}));export{v as n,y as r,_ as t};