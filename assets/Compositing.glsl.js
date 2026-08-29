import{n as e}from"./rolldown-runtime.js";import{n as t,r as n,t as r}from"./glsl.js";import{n as i,t as a}from"./ScreenSpacePass.glsl.js";import{r as o,t as s}from"./NoParameters.js";import{n as c,t as l}from"./ShaderBuilder.js";import{n as u,t as d}from"./FloatPassUniform.js";import{n as f,t as p}from"./Texture2DPassUniform.js";import{n as m,t as h}from"./Float2BindUniform.js";import{r as g,t as _}from"./ReadDepth.glsl.js";function v(e){e.code.add(n`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 floatToRgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}`),e.code.add(n`const vec4 RGBA_TO_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgbaToFloat(vec4 rgba) {
return dot(rgba, RGBA_TO_FLOAT_FACTORS);
}`)}function y(){return(y=e((()=>{r()})))()}function b(e){let r=new c,{blendEmissive:a,mode:o}=e;r.include(i),r.fragment.uniforms.add(new p(`tex`,({texture:e})=>e));let s=o===3;return s?(r.fragment.include(_),r.fragment.include(v),r.fragment.uniforms.add(new h(`nearFar`,e=>e.camera.nearFar))):r.fragment.uniforms.add(new u(`opacity`,e=>e.opacity),new u(`level`,({mipmapLevel:e})=>e)),a&&(r.outputs.add(`fragColor`,`vec4`,0),r.outputs.add(`fragEmission`,`vec4`,1)),r.fragment.main.add(n`
    ${s?n`
          float normalizedLinearDepth = (-linearDepthFromTexture(tex, uv) - nearFar[0]) / (nearFar[1] - nearFar[0]);
          fragColor = floatToRgba(normalizedLinearDepth);`:n`fragColor = textureLod(tex, uv, level) * opacity;`}
    ${t(a,`fragEmission = vec4(0.0, 0.0, 0.0, fragColor.a);`)}`),r}var x,S;function C(){return(C=e((()=>{a(),g(),y(),m(),d(),r(),f(),o(),l(),x=class extends s{constructor(){super(...arguments),this.opacity=1,this.mipmapLevel=0}},S=Object.freeze(Object.defineProperty({__proto__:null,CompositingPassParameters:x,build:b},Symbol.toStringTag,{value:`Module`}))})))()}export{y as a,x as i,b as n,C as r,S as t};