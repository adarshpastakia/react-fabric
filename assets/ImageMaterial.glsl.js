import{n as e}from"./rolldown-runtime.js";import{n as t,r as n,t as r}from"./glsl.js";import{r as i,t as a}from"./NoParameters.js";import{n as o,t as s}from"./ShaderBuilder.js";import{n as c,t as l}from"./FloatPassUniform.js";import{n as u,t as d}from"./Texture2DPassUniform.js";import{a as f,i as p}from"./Slice.glsl.js";import{n as m,r as h}from"./View.glsl.js";import{n as g,t as _}from"./ColorConversion.glsl.js";import{n as v,t as y}from"./OutputColorHighlightOLID.glsl.js";import{n as b,t as x}from"./Transform.glsl.js";function S(e){let r=new o,{vertex:i,fragment:a,varyings:s}=r,{output:l,perspectiveInterpolation:u,emissionDimmingPass:f}=e;return m(i,e),r.include(b),r.fragment.include(p,e),r.fragment.code.add(n`void outputObjectAndLayerIdColor() {
    ${t(l===11,`fragColor = vec4(0, 0, 0, 1);`)}
    }`),r.include(v,e),r.attributes.add(`position`,`vec3`),r.attributes.add(`uv0`,`vec2`),u&&r.attributes.add(`perspectiveDivide`,`float`),i.main.add(n`
    vpos = position;
    vTexCoord = uv0;
    gl_Position = transformPosition(proj, view, vpos);
    ${t(u,`gl_Position *= perspectiveDivide;`)}`),s.add(`vpos`,`vec3`,{invariant:!0}),s.add(`vTexCoord`,`vec2`),a.include(_),a.uniforms.add(new c(`opacity`,e=>e.opacity),new d(`tex`,e=>e.texture)).main.add(n`
    discardBySlice(vpos);
    vec4 finalColor = texture(tex, vTexCoord) * opacity;
    ${t(f,`if (finalColor.a > 0.0) { finalColor.rgb /= finalColor.a; }`)}
    outputColorHighlightOLID(applySlice(finalColor, vpos), finalColor.rgb);`),r}var C,w;function T(){return(T=e((()=>{f(),x(),g(),h(),l(),r(),u(),y(),i(),s(),C=class extends a{},w=Object.freeze(Object.defineProperty({__proto__:null,ImageMaterialPassParameters:C,build:S},Symbol.toStringTag,{value:`Module`}))})))()}export{C as i,S as n,w as r,T as t};