import{n as e}from"./chunk.js";import{a as t,s as n}from"./ShaderOutput.js";import{n as r,r as i,t as a}from"./glsl.js";import{n as o,t as s}from"./Gamma.glsl.js";import{n as c,t as l}from"./Float3DrawUniform.js";import{n as u,t as d}from"./Float3PassUniform.js";import{n as f,t as p}from"./FloatDrawUniform.js";import{n as m,t as h}from"./FloatPassUniform.js";import{n as g,t as _}from"./Texture2DDrawUniform.js";import{n as v,t as y}from"./Texture2DPassUniform.js";function b(e,t){switch(t.textureCoordinateType){case 1:e.attributes.add(`uv0`,`vec2`),e.varyings.add(`vuv0`,`vec2`),e.vertex.code.add(i`void forwardTextureCoordinates() { vuv0 = uv0; }`);return;case 2:e.attributes.add(`uv0`,`vec2`),e.attributes.add(`uvRegion`,`vec4`),e.varyings.add(`vuv0`,`vec2`),e.varyings.add(`vuvRegion`,`vec4`),e.vertex.code.add(i`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);return;default:t.textureCoordinateType;case 0:e.vertex.code.add(i`void forwardTextureCoordinates() {}`);return;case 3:return}}var x=e((()=>{a()}));function S(e){e.fragment.code.add(i`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}var C=e((()=>{a()}));function w(e,t){let{textureCoordinateType:n}=t;if(n===0||n===3)return;e.include(b,t);let r=n===2;r&&e.include(S),e.fragment.code.add(i`
    vec4 textureLookup(sampler2D tex, vec2 uv) {
      return ${r?`textureAtlasLookup(tex, uv, vuvRegion)`:`texture(tex, uv)`};
    }
  `)}var T=e((()=>{x(),C(),a()}));function E(e,t){if(!n(t.output))return;e.fragment.include(o);let{emissionSource:a,hasEmissiveTextureTransform:s,bindType:c}=t,u=a===3||a===4||a===5;u&&(e.include(w,t),e.fragment.uniforms.add(c===1?new y(`texEmission`,e=>e.textureEmissive):new _(`texEmission`,e=>e.textureEmissive)));let p=a===2||u;p&&e.fragment.uniforms.add(c===1?new d(`emissiveBaseColor`,e=>e.emissiveBaseColor):new l(`emissiveBaseColor`,e=>e.emissiveBaseColor));let h=a!==0;h&&!(a===7||a===6||a===4||a===5)&&e.fragment.uniforms.add(c===1?new m(`emissiveStrength`,e=>e.emissiveStrength??0):new f(`emissiveStrength`,e=>e.emissiveStrength??0));let g=a===7,v=a===5,b=a===1||a===6||g;e.fragment.code.add(i`
    vec4 getEmissions(vec3 symbolColor) {
      vec4 emissions = ${p?v?`emissiveSource == 0 ? vec4(emissiveBaseColor, 1.0): vec4(linearizeGamma(symbolColor), 1.0)`:`vec4(emissiveBaseColor, 1.0)`:b?g?`emissiveSource == 0 ? vec4(0.0): vec4(linearizeGamma(symbolColor), 1.0)`:`vec4(linearizeGamma(symbolColor), 1.0)`:`vec4(0.0)`};
      ${r(u,`${r(v,`if(emissiveSource == 0) {\n              vec4 emissiveFromTex = textureLookup(texEmission, ${s?`emissiveUV`:`vuv0`});\n              emissions *= vec4(linearizeGamma(emissiveFromTex.rgb), emissiveFromTex.a);\n           }`,`vec4 emissiveFromTex = textureLookup(texEmission, ${s?`emissiveUV`:`vuv0`});\n           emissions *= vec4(linearizeGamma(emissiveFromTex.rgb), emissiveFromTex.a);`)}\n        emissions.w = emissions.rgb == vec3(0.0) ? 0.0: emissions.w;`)}
      ${r(h,`emissions.rgb *= emissiveStrength * ${i.float(1)};`)}
      return emissions;
    }
  `)}var D=e((()=>{t(),T(),s(),c(),u(),p(),h(),a(),g(),v()}));export{b as a,w as i,D as n,x as o,T as r,E as t};