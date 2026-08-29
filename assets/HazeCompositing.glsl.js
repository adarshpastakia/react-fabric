import{n as e}from"./rolldown-runtime.js";import{r as t,t as n}from"./glsl.js";import{n as r,t as i}from"./ScreenSpacePass.glsl.js";import{r as a,t as o}from"./NoParameters.js";import{n as s,t as c}from"./ShaderBuilder.js";import{n as l,t as u}from"./Texture2DPassUniform.js";import{n as d,t as f}from"./Texture2DBindUniform.js";function p(){let e=new s;return e.include(r),e.fragment.uniforms.add(new u(`colorTexture`,e=>e.color),new f(`depthTexture`,e=>e.mainDepth)),e.fragment.main.add(t`float depthSample = texture(depthTexture, uv).r;
if (depthSample == 1.0 ) {
fragColor = vec4(0);
return;
}
fragColor = texture(colorTexture, uv);`),e}var m,h;function g(){return(g=e((()=>{i(),n(),d(),l(),a(),c(),m=class extends o{},h=Object.freeze(Object.defineProperty({__proto__:null,HazeCompositingPassParameters:m,build:p},Symbol.toStringTag,{value:`Module`}))})))()}export{p as i,g as n,h as r,m as t};