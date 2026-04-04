import{n as e}from"./chunk.js";import{a as t,c as n,i as r,l as i}from"./screenUtils.js";import{o as a,u as o}from"./vec4.js";import{a as s,o as c}from"./vec4f64.js";import{r as l,t as u}from"./glsl.js";import{n as d,t as f}from"./Texture2DPassUniform.js";import{n as p,t as m}from"./ShaderBuilder.js";import{r as h,t as g}from"./NoParameters.js";import{n as _,t as v}from"./Float4PassUniform.js";import{n as y,t as b}from"./BooleanPassUniform.js";function x(){let e=new p;return e.attributes.add(`position`,`vec2`),e.vertex.uniforms.add(new v(`drawPosition`,(e,t)=>S(e,t))),e.varyings.add(`vUV`,`vec2`),e.vertex.main.add(l`vUV = position;
gl_Position = vec4(drawPosition.xy + vec2(position - 0.5) * drawPosition.zw, 0.0, 1.0);`),e.fragment.uniforms.add(new f(`textureInput`,e=>e.input)),e.fragment.uniforms.add(new f(`textureMask`,e=>e.mask)),e.fragment.uniforms.add(new f(`textureOverlay`,e=>e.overlay)),e.fragment.uniforms.add(new y(`maskEnabled`,e=>e.magnifier.maskEnabled)),e.fragment.uniforms.add(new y(`overlayEnabled`,e=>e.magnifier.overlayEnabled)),e.fragment.code.add(l`const float barrelFactor = 1.1;
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
fragColor = overlayColor + (1.0 - overlayColor.a) * inputColor;`),e}function S(e,n){let r=n.camera.pixelRatio,i=e.magnifier.offset.x*r,a=e.magnifier.offset.y*r;t(e.magnifier.position,w);let s=n.camera.screenToRender(w,T),c=Math.ceil(r*e.magnifier.size),{fullWidth:l,fullHeight:u}=n.camera;return o(E,(s[0]+i)/l*2-1,(s[1]-a)/u*2-1,c/l*2,c/u*2)}var C,w,T,E,D,O=e((()=>{n(),a(),s(),b(),_(),u(),d(),h(),m(),C=class extends g{constructor(){super(...arguments),this.mask=null,this.overlay=null,this.input=null,this.size=0}},w=r(),T=i(),E=c(),D=Object.freeze(Object.defineProperty({__proto__:null,MagnifierPassParameters:C,build:x},Symbol.toStringTag,{value:`Module`}))}));export{O as i,C as n,x as r,D as t};