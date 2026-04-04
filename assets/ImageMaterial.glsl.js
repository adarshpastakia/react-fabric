import{n as e}from"./chunk.js";import{n as t,r as n,t as r}from"./glsl.js";import{n as i,t as a}from"./FloatPassUniform.js";import{n as o,t as s}from"./Texture2DPassUniform.js";import{n as c,t as l}from"./ShaderBuilder.js";import{r as u,t as d}from"./NoParameters.js";import{n as f,r as p}from"./Slice.glsl.js";import{n as m,r as h}from"./View.glsl.js";import{n as g,t as _}from"./ColorConversion.glsl.js";import{n as v,t as y}from"./TerrainDepthTest.glsl.js";import{n as b,t as x}from"./OutputColorHighlightOLID.glsl.js";import{n as S,t as C}from"./Transform.glsl.js";function w(e){let r=new c,{vertex:a,fragment:o,varyings:l}=r,{output:u,perspectiveInterpolation:d}=e;return m(a,e),r.include(S),r.include(y,e),r.fragment.include(f,e),r.fragment.code.add(n`void outputObjectAndLayerIdColor() {
    ${t(u===9,`fragColor = vec4(0, 0, 0, 1);`)}
    }`),r.include(x,e),r.attributes.add(`position`,`vec3`),r.attributes.add(`uv0`,`vec2`),d&&r.attributes.add(`perspectiveDivide`,`float`),a.main.add(n`
    vpos = position;
    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    vTexCoord = uv0;
    gl_Position = transformPosition(proj, view, vpos);
    ${t(d,`gl_Position *= perspectiveDivide;`)}`),l.add(`vpos`,`vec3`,{invariant:!0}),l.add(`vTexCoord`,`vec2`),o.include(_),o.uniforms.add(new i(`opacity`,e=>e.opacity),new s(`tex`,e=>e.texture)).main.add(n`discardBySlice(vpos);
discardByTerrainDepth();
vec4 finalColor = texture(tex, vTexCoord) * opacity;
outputColorHighlightOLID(applySlice(finalColor, vpos), finalColor.rgb);`),r}var T,E,D=e((()=>{p(),C(),v(),g(),h(),a(),r(),o(),b(),u(),l(),T=class extends d{},E=Object.freeze(Object.defineProperty({__proto__:null,ImageMaterialPassParameters:T,build:w},Symbol.toStringTag,{value:`Module`}))}));export{T as i,D as n,E as r,w as t};