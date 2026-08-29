import{n as e}from"./rolldown-runtime.js";import{E as t,y as n}from"./mathUtils.js";import{n as r,r as i,t as a}from"./glsl.js";import{n as o,t as s}from"./Uniform.js";import{n as c,t as l}from"./FloatPassUniform.js";import{n as u,t as d}from"./Texture2DPassUniform.js";import{n as f,t as p}from"./Texture2DDrawUniform.js";import{p as m}from"./ShaderOutput.js";import{n as h,t as g}from"./Float3DrawUniform.js";import{n as _,t as v}from"./Float3PassUniform.js";import{n as y,t as b}from"./Gamma.glsl.js";import{t as x}from"./oitResolution.glsl.js";function S(e,t){switch(t.textureCoordinateType){case 1:e.attributes.add(`uv0`,`vec2`),e.varyings.add(`vuv0`,`vec2`),e.vertex.code.add(i`void forwardTextureCoordinates() { vuv0 = uv0; }`);return;case 2:e.attributes.add(`uv0`,`vec2`),e.attributes.add(`uvRegion`,`vec4`),e.varyings.add(`vuv0`,`vec2`),e.varyings.add(`vuvRegion`,`vec4`),e.vertex.code.add(i`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);return;default:t.textureCoordinateType;case 0:e.vertex.code.add(i`void forwardTextureCoordinates() {}`);return;case 3:return}}function C(){return(C=e((()=>{a()})))()}function w(e){e.fragment.code.add(i`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function T(){return(T=e((()=>{a()})))()}function E(e,t){let{textureCoordinateType:n}=t;if(n===0||n===3)return;e.include(S,t);let r=n===2;r&&e.include(w),e.fragment.code.add(i`
    vec4 textureLookup(sampler2D tex, vec2 uv) {
      return ${r?`textureAtlasLookup(tex, uv, vuvRegion)`:`texture(tex, uv)`};
    }
  `)}function D(){return(D=e((()=>{C(),T(),a()})))()}var O;function k(){return(k=e((()=>{o(),O=class extends s{constructor(e,t,n){super(e,`float`,2,(r,i,a)=>r.setUniform1f(e,t(i,a),n))}}})))()}function A(e,n){if(!m(n.output))return;e.fragment.include(b);let{emissionSource:a,hasEmissiveTextureTransform:o,bindType:s}=n,l=a===3||a===4||a===5;l&&(e.include(E,n),e.fragment.uniforms.add(s===1?new d(`texEmission`,e=>e.textureEmissive):new p(`texEmission`,e=>e.textureEmissive)));let u=a===2||l;u&&e.fragment.uniforms.add(s===1?new v(`emissiveBaseColor`,e=>e.emissiveBaseColor):new g(`emissiveBaseColor`,e=>e.emissiveBaseColor));let f=a!==0;if(f&&a!==7&&a!==6&&a!==4&&a!==5){let n=e=>t(e??0,0,16);e.fragment.uniforms.add(s===1?new c(`emissiveStrength`,e=>n(e.emissiveStrength)):new O(`emissiveStrength`,e=>n(e.emissiveStrength)))}let h=a===7,_=a===5,y=a===1||a===6||h;e.fragment.code.add(i`
    vec4 getEmissions(vec3 symbolColor) {
      vec4 emissions = ${u?_?`emissiveSource == 0 ? vec4(emissiveBaseColor, 1.0): vec4(linearizeGamma(symbolColor), 1.0)`:`vec4(emissiveBaseColor, 1.0)`:y?h?`emissiveSource == 0 ? vec4(0.0): vec4(linearizeGamma(symbolColor), 1.0)`:`vec4(linearizeGamma(symbolColor), 1.0)`:`vec4(0.0)`};
      ${r(l,`${r(_,`if(emissiveSource == 0) {\n              vec4 emissiveFromTex = textureLookup(texEmission, ${o?`emissiveUV`:`vuv0`});\n              emissions *= vec4(linearizeGamma(emissiveFromTex.rgb), emissiveFromTex.a);\n           }`,`vec4 emissiveFromTex = textureLookup(texEmission, ${o?`emissiveUV`:`vuv0`});\n           emissions *= vec4(linearizeGamma(emissiveFromTex.rgb), emissiveFromTex.a);`)}\n        emissions.a = emissions.rgb == vec3(0.0) ? 0.0: emissions.a;`)}
      ${r(f,`emissions.rgb *= emissiveStrength * ${i.float(1)};`)}
      return emissions;
    }
  `)}function j(){return(j=e((()=>{n(),D(),y(),h(),_(),k(),l(),a(),f(),u(),x()})))()}export{D as a,C as c,O as i,j as n,E as o,k as r,S as s,A as t};