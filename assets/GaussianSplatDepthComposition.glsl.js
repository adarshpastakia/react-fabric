import{n as e}from"./rolldown-runtime.js";import{r as t,t as n}from"./glsl.js";import{n as r,t as i}from"./ScreenSpacePass.glsl.js";import{r as a,t as o}from"./NoParameters.js";import{n as s,t as c}from"./ShaderBuilder.js";import{n as l,t as u}from"./Texture2DPassUniform.js";import{n as d,t as f}from"./RgbNormalizedDepthEncoding.glsl.js";function p(){let e=new s;e.include(r);let n=e.fragment;return n.uniforms.add(new u(`splatOutputDepth`,e=>e.splatDepth)),n.include(d),n.main.add(t`vec4 splatDepth = texture(splatOutputDepth, uv);
float depth = decodeRGBToNormalizedDepth(splatDepth.xyz);
if(splatDepth.a < 1.0) {
discard;
}
gl_FragDepth = depth;`),e}var m,h;function g(){return(g=e((()=>{i(),f(),n(),l(),a(),c(),m=class extends o{},h=Object.freeze(Object.defineProperty({__proto__:null,GaussianSplatDepthCompositionPassParameters:m,build:p},Symbol.toStringTag,{value:`Module`}))})))()}export{h as i,g as n,p as r,m as t};