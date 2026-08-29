import{n as e}from"./rolldown-runtime.js";import{o as t,s as n}from"./vec4f64.js";import{r,t as i}from"./glsl.js";import{n as a,t as o}from"./ScreenSpacePass.glsl.js";import{r as s,t as c}from"./NoParameters.js";import{n as l,t as u}from"./ShaderBuilder.js";import{n as d,t as f}from"./FloatPassUniform.js";import{n as p,t as m}from"./Texture2DPassUniform.js";import{n as h,t as g}from"./Float4PassUniform.js";function _(){let e=new l;return e.include(a),e.outputs.add(`fragColor`,`vec4`,0),e.fragment.uniforms.add(new m(`colorTexture`,e=>e.color),new m(`cutVolume`,e=>e.cutVolume),new m(`fillVolume`,e=>e.fillVolume),new m(`cutFillMask`,e=>e.cutFillMask),new m(`depthTexture`,e=>e.sceneDepth),new m(`cutFillReferenceDepthTexture`,e=>e.referenceDepth),new d(`pixelRatio`,(e,t)=>t.camera.pixelRatio),new g(`borderColor`,e=>e.borderColor)).main.add(r`vec4 color = texture(colorTexture, uv, 0.0);
vec4 cutVolume = texture(cutVolume, uv, 0.0);
vec4 fillVolume = texture(fillVolume, uv, 0.0);
float sceneDepth = texture(depthTexture, uv, 0.0).r;
float referenceDepth = texture(cutFillReferenceDepthTexture, uv, 0.0).r;
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
float visibleAgainstScene = step(referenceDepth, sceneDepth);
vec4 base = mix(color, cutVolume, m0.r * cutVolume.a * visibleAgainstScene);
base = mix(base, fillVolume, m0.g * fillVolume.a);
float borderFade = mix(0.5, 1.0, visibleAgainstScene);
fragColor = mix(base, borderColor, d * borderFade);`),e}var v,y;function b(){return(b=e((()=>{t(),o(),h(),f(),i(),p(),s(),u(),v=class extends c{constructor(){super(...arguments),this.borderColor=n()}},y=Object.freeze(Object.defineProperty({__proto__:null,CutFillCompositionPassParameters:v,build:_},Symbol.toStringTag,{value:`Module`}))})))()}export{_ as i,b as n,y as r,v as t};