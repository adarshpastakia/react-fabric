import{n as e}from"./rolldown-runtime.js";import{a as t,c as n,p as r,u as i}from"./screenUtils.js";import{o as a,u as o}from"./vec4.js";import{o as s,s as c}from"./vec4f64.js";import{r as l,t as u}from"./glsl.js";import{r as d,t as f}from"./NoParameters.js";import{n as p,t as m}from"./ShaderBuilder.js";import{n as h,t as g}from"./Texture2DPassUniform.js";import{n as _,t as v}from"./Float4PassUniform.js";import{n as y,t as b}from"./BooleanPassUniform.js";function x(){let e=new p;return e.attributes.add(`position`,`vec2`),e.vertex.uniforms.add(new v(`drawPosition`,(e,t)=>S(e,t))),e.varyings.add(`vUV`,`vec2`),e.vertex.main.add(l`vUV = position;
gl_Position = vec4(drawPosition.xy + vec2(position - 0.5) * drawPosition.zw, 0.0, 1.0);`),e.fragment.uniforms.add(new g(`textureInput`,e=>e.input)),e.fragment.uniforms.add(new g(`textureMask`,e=>e.mask)),e.fragment.uniforms.add(new g(`textureOverlay`,e=>e.overlay)),e.fragment.uniforms.add(new y(`maskEnabled`,e=>e.magnifier.maskEnabled)),e.fragment.uniforms.add(new y(`overlayEnabled`,e=>e.magnifier.overlayEnabled)),e.fragment.code.add(l`const float barrelFactor = 1.1;
vec2 barrel(vec2 uv) {
vec2 uvn = uv * 2.0 - 1.0;
if (uvn.x == 0.0 && uvn.y == 0.0) {
return vec2(0.5, 0.5);
}
float theta = atan(uvn.y, uvn.x);
float r = pow(length(uvn), barrelFactor);
return r * vec2(cos(theta), sin(theta)) * 0.5 + 0.5;
}`),e.fragment.main.add(l`float mask = maskEnabled ? texture(textureMask, vUV).a : 1.0;
vec4 inputColor = texture(textureInput, barrel(vUV)) * mask;
vec4 overlayColor = overlayEnabled ? texture(textureOverlay, vUV) : vec4(0);
fragColor = overlayColor + (1.0 - overlayColor.a) * inputColor;`),e}function S(e,t){let r=t.camera.pixelRatio,i=e.magnifier.offset.x*r,a=e.magnifier.offset.y*r;n(e.magnifier.position,w);let s=t.camera.screenToRender(w,T),c=Math.ceil(r*e.magnifier.size),{fullWidth:l,fullHeight:u}=t.camera;return o(E,(s[0]+i)/l*2-1,(s[1]-a)/u*2-1,c/l*2,c/u*2)}var C,w,T,E,D;function O(){return(O=e((()=>{r(),a(),s(),b(),_(),u(),h(),d(),m(),C=class extends f{constructor(){super(...arguments),this.mask=null,this.overlay=null,this.input=null,this.size=0}},w=i(),T=t(),E=c(),D=Object.freeze(Object.defineProperty({__proto__:null,MagnifierPassParameters:C,build:x},Symbol.toStringTag,{value:`Module`}))})))()}export{O as i,C as n,x as r,D as t};