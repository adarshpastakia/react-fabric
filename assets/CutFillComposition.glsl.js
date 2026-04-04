import{n as e}from"./chunk.js";import{a as t,o as n}from"./vec4f64.js";import{r,t as i}from"./glsl.js";import{n as a,t as o}from"./FloatPassUniform.js";import{n as s,t as c}from"./Texture2DPassUniform.js";import{n as l,t as u}from"./ShaderBuilder.js";import{n as d,t as f}from"./ScreenSpacePass.glsl.js";import{r as p,t as m}from"./NoParameters.js";import{n as h,t as g}from"./Float4PassUniform.js";function _(){let e=new l;return e.include(d),e.outputs.add(`fragColor`,`vec4`,0),e.fragment.uniforms.add(new c(`colorTexture`,e=>e.color),new c(`cutFillVolumes`,e=>e.cutFillVolumes),new c(`cutFillMask`,e=>e.cutFillMask),new a(`pixelRatio`,(e,t)=>t.camera.pixelRatio),new g(`borderColor`,e=>e.borderColor)).main.add(r`vec4 color = texture(colorTexture, uv, 0.0);
vec4 volumesColor = texture(cutFillVolumes, uv, 0.0);
ivec2 iuv = ivec2(uv * vec2(textureSize(cutFillMask, 0)));
vec2 m0 = texelFetch(cutFillMask, iuv, 0).rg;
vec2 m1 = texelFetch(cutFillMask, iuv + ivec2(-1, 0), 0).rg;
vec2 m2 = texelFetch(cutFillMask, iuv + ivec2(1, 0), 0).rg;
vec2 m3 = texelFetch(cutFillMask, iuv + ivec2(0, -1), 0).rg;
vec2 m4 = texelFetch(cutFillMask, iuv + ivec2(0, 1), 0).rg;
float d = (
step(1.5, abs(m0.r - m1.r) + abs(m0.g - m1.g))
+ step(1.5, abs(m0.r - m2.r) + abs(m0.g - m2.g))
+ step(1.5, abs(m0.r - m3.r) + abs(m0.g - m3.g))
+ step(1.5, abs(m0.r - m4.r) + abs(m0.g - m4.g))
) * 0.25 * pixelRatio;
vec4 base = mix(color, volumesColor, max(m0.r, m0.g) * volumesColor.a);
fragColor = mix(base, borderColor, d);`),e}var v,y,b=e((()=>{t(),f(),h(),o(),i(),s(),p(),u(),v=class extends m{constructor(){super(...arguments),this.borderColor=n()}},y=Object.freeze(Object.defineProperty({__proto__:null,CutFillCompositionPassParameters:v,build:_},Symbol.toStringTag,{value:`Module`}))}));export{y as i,b as n,v as r,_ as t};