import{n as e}from"./chunk.js";import{r as t,t as n}from"./glsl.js";import{n as r,t as i}from"./ShaderBuilder.js";import{n as a,r as o}from"./Slice.glsl.js";import{n as s,t as c}from"./ObjectAndLayerIdColor.glsl.js";import{n as l,t as u}from"./VisualVariables.glsl.js";import{n as d,t as f}from"./Float4PassUniform.js";import{n as p,r as m}from"./View.glsl.js";import{n as h,t as g}from"./ColorConversion.glsl.js";import{n as _,t as v}from"./TerrainDepthTest.glsl.js";import{n as y,t as b}from"./OutputColorHighlightOLID.glsl.js";import{n as x,t as S}from"./Transform.glsl.js";import{n as C,t as w}from"./VertexColor.glsl.js";function T(e){let n=new r,{vertex:i,fragment:o,attributes:s,varyings:u}=n,{hasVVColor:d,hasVertexColors:m}=e;return p(i,e),n.include(x),n.include(C,e),n.include(l,e),n.include(c,e),o.include(a,e),n.include(b,e),n.include(v,e),s.add(`position`,`vec3`),d&&s.add(`colorFeatureAttribute`,`float`),m||u.add(`vColor`,`vec4`),u.add(`vpos`,`vec3`,{invariant:!0}),i.uniforms.add(new f(`uColor`,e=>e.color)),i.main.add(t`
      vpos = position;
      forwardVertexColor();
      forwardObjectAndLayerIdColor();

      ${m?`vColor *= uColor;`:d?`vColor = uColor * interpolateVVColor(colorFeatureAttribute);`:`vColor = uColor;`}
      forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
      gl_Position = transformPosition(proj, view, vpos);`),o.include(g),o.main.add(t`discardBySlice(vpos);
discardByTerrainDepth();
outputColorHighlightOLID(applySlice(vColor, vpos), vColor.rgb);`),n}var E,D=e((()=>{o(),S(),s(),w(),_(),u(),h(),m(),d(),n(),y(),i(),E=Object.freeze(Object.defineProperty({__proto__:null,build:T},Symbol.toStringTag,{value:`Module`}))}));export{T as n,E as r,D as t};