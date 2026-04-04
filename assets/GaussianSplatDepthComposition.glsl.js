import{n as e}from"./chunk.js";import{r as t,t as n}from"./glsl.js";import{n as r,t as i}from"./Texture2DPassUniform.js";import{n as a,t as o}from"./ShaderBuilder.js";import{n as s,t as c}from"./ScreenSpacePass.glsl.js";import{r as l,t as u}from"./NoParameters.js";import{n as d,t as f}from"./RgbNormalizedDepthEncoding.glsl.js";function p(){let e=new a;e.include(s);let n=e.fragment;return n.uniforms.add(new i(`splatOutputDepth`,e=>e.splatDepth)),n.include(d),n.main.add(t`vec4 splatDepth = texture(splatOutputDepth, uv);
float depth = decodeRGBToNormalizedDepth(splatDepth.xyz);
if(splatDepth.a < 1.0) {
discard;
}
gl_FragDepth = depth;`),e}var m,h,g=e((()=>{c(),f(),n(),r(),l(),o(),m=class extends u{},h=Object.freeze(Object.defineProperty({__proto__:null,GaussianSplatDepthCompositionPassParameters:m,build:p},Symbol.toStringTag,{value:`Module`}))}));export{h as i,g as n,p as r,m as t};