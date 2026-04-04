import{n as e}from"./chunk.js";import{r as t,t as n}from"./glsl.js";import{n as r,t as i}from"./Texture2DPassUniform.js";import{n as a,t as o}from"./ShaderBuilder.js";import{n as s,t as c}from"./ScreenSpacePass.glsl.js";import{r as l,t as u}from"./NoParameters.js";import{n as d,t as f}from"./Texture2DBindUniform.js";function p(){let e=new a;return e.include(s),e.fragment.uniforms.add(new i(`colorTexture`,e=>e.color),new f(`depthTexture`,e=>e.mainDepth)),e.fragment.main.add(t`float depthSample = texture(depthTexture, uv).r;
if (depthSample != 1.0 ) {
fragColor = vec4(0);
return;
}
fragColor = texture(colorTexture, uv);`),e}var m,h,g=e((()=>{c(),n(),d(),r(),l(),o(),m=class extends u{},h=Object.freeze(Object.defineProperty({__proto__:null,AtmosphereCompositingPassParameters:m,build:p},Symbol.toStringTag,{value:`Module`}))}));export{p as i,g as n,h as r,m as t};