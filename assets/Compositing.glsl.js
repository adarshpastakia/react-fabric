import{n as e}from"./chunk.js";import{n as t,r as n,t as r}from"./glsl.js";import{n as i,t as a}from"./FloatPassUniform.js";import{n as o,t as s}from"./Texture2DPassUniform.js";import{n as c,t as l}from"./ShaderBuilder.js";import{n as u,t as d}from"./ScreenSpacePass.glsl.js";import{r as f,t as p}from"./NoParameters.js";import{n as m,t as h}from"./Float2BindUniform.js";import{n as g,t as _}from"./ReadDepth.glsl.js";function v(e){e.code.add(n`const float MAX_RGBA_FLOAT =
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
}`)}var y=e((()=>{r()}));function b(e){let r=new c,{blendEmissive:a,blitMode:o,hasOpacityFactor:l}=e;r.include(u),r.fragment.uniforms.add(new s(`tex`,e=>e.texture)),l&&r.fragment.uniforms.add(new i(`opacity`,e=>e.opacity));let d=o===3;return d&&(r.fragment.uniforms.add(new h(`nearFar`,e=>e.camera.nearFar)),r.fragment.include(_),r.fragment.include(v)),a&&(r.outputs.add(`fragColor`,`vec4`,0),r.outputs.add(`fragEmission`,`vec4`,1)),r.fragment.main.add(n`
    ${d?n`
          float normalizedLinearDepth = (-linearDepthFromTexture(tex, uv) - nearFar[0]) / (nearFar[1] - nearFar[0]);
          fragColor = floatToRgba(normalizedLinearDepth);`:n`
          fragColor = texture(tex, uv) ${l?`* opacity`:``};`}
    ${t(a,`fragEmission = vec4(0.0, 0.0, 0.0, fragColor.a);`)}`),r}var x,S,C=e((()=>{d(),g(),y(),m(),a(),r(),o(),f(),l(),x=class extends p{constructor(){super(...arguments),this.opacity=1}},S=Object.freeze(Object.defineProperty({__proto__:null,CompositingPassParameters:x,build:b},Symbol.toStringTag,{value:`Module`}))}));export{y as a,x as i,b as n,C as r,S as t};