import{n as e}from"./chunk.js";import{i as t,l as n}from"./tslib.es6.js";import{n as r,t as i}from"./uid.js";import{K as a,W as o}from"./BufferView.js";import{a as s,i as c}from"./Util.js";import{n as l,r as u,t as d}from"./glsl.js";import{n as f,t as p}from"./Uniform.js";import{n as m,r as h,t as g}from"./ShaderTechniqueConfiguration.js";import{n as _,t as v}from"./FloatBindUniform.js";function y(e){switch(e.elementType){case`float`:switch(e.elementCount){case 1:return u`float`;case 2:return u`vec2`;case 3:return u`vec3`;case 4:return u`vec4`;case 9:return u`mat3`;default:e.elementCount}break;case`int`:switch(e.elementCount){case 1:return u`int`;case 2:return u`ivec2`;case 3:return u`ivec3`;case 4:return u`ivec4`;case 9:throw Error(`Invalid element count 9 for type int`);default:e.elementCount}break;case`uint`:switch(e.elementCount){case 1:return u`uint`;case 2:return u`uvec2`;case 3:return u`uvec3`;case 4:return u`uvec4`;case 9:throw Error(`Invalid element count 9 for type uint`);default:e.elementCount}break;default:e.elementType}throw Error(`unsupported field`)}function b(e,t){let n=t?.supportNaN;n&&(e.uniforms.add(w),e.code.add(u`bool bitsEncodeFloat16NaN(highp uint bits) {
const highp uint nanExponent = 0x00007c00u;
highp uint exponent = bits & nanExponent;
highp uint mantissa = bits & 0x000003ffu;
return exponent == nanExponent && mantissa != 0u;
}`)),e.code.add(u`
    mediump float unpackHalf2x8(highp uint bits0, highp uint bits1) {
      highp uint halfBits = (bits1 << 8u) | bits0;
      ${l(n,u`
        if (bitsEncodeFloat16NaN(halfBits)) {
          return const_NaN;
        }`)}
      return unpackHalf2x16(halfBits).x;
    }`)}function x(e,t){let n=t?.supportNaN;n&&(e.uniforms.add(w),e.code.add(u`bool bitsEncodeFloat32NaN(highp uint bits) {
const highp uint nanExponent = 0x7f800000u;
highp uint exponent = bits & nanExponent;
highp uint mantissa = bits & 0x007fffffu;
return exponent == nanExponent && mantissa != 0u;
}`)),e.code.add(u`
    highp float unpackFloat4x8(highp uint bits0, highp uint bits1, highp uint bits2, highp uint bits3) {
      highp uint floatBits = (bits3 << 24u) |(bits2 << 16u) | (bits1 << 8u) | bits0;
      ${l(n,u`
        if (bitsEncodeFloat32NaN(floatBits)) {
          return const_NaN;
        }`)}
      return uintBitsToFloat(floatBits);
    }`)}function S(e){let{fieldType:t}=e;return`${(0,E[t])(C(e))}`}function C(e){let{startTexel:t,byteOffset:n,texelByteStride:r,byteSize:i}=e,a=t,o=n%r,s=[];for(let e=0;e<i;++e){let e=u`texel${u.int(a)}.${D[o]}`;s.push(e),++o,o>=r&&(o=0,++a)}return s}var w,T,E,D,O=e((()=>{n(),o(),v(),d(),h(),w=new _(`const_NaN`,()=>NaN,{supportsNaN:!0}),T=class extends g{constructor(e){super(),this.supportNaN=e}},t([m()],T.prototype,`supportNaN`,void 0),E={u8:e=>u`${e[0]}`,unorm8:e=>u`float(${e[0]})/255.0`,vec4unorm8:e=>u`vec4(${`${e[0]}, ${e[1]}, ${e[2]}, ${e[3]}`})/255.0`,f16:a?e=>u`unpackHalf2x8(${`${e[0]}, ${e[1]}`})`:e=>u`unpackFloat4x8(${`${e[0]}, ${e[1]}, ${e[2]}, ${e[3]}`})`,f32:e=>u`unpackFloat4x8(${`${e[0]}, ${e[1]}, ${e[2]}, ${e[3]}`})`,vec4u8:e=>u`uvec4(${`${e[0]}, ${e[1]}, ${e[2]}, ${e[3]}`})`,mat3f32:e=>u`mat3(${e.reduce((e,t)=>{let n=e.at(-1);return n==null||n.length>=4?e.push([t]):n.push(t),e},[]).map(e=>u`unpackFloat4x8(${`${e[0]}, ${e[1]}, ${e[2]}, ${e[3]}`})`).join(`,
`)})`},D=[`x`,`y`,`z`,`w`]}));function k(e,t,n,r,i,a,o,s){let{vertex:l}=t;l.include(x,s),l.include(b,s);let d=`${e}tbbStride`,f=`${e}TextureBackedBufferItemData`,p=`${e}fetchTextureBackedBufferItemData`,m=j(e);for(let e of[d,f,p,m])c(e.length<1024,`Identifiers do not have a valid length`);l.constants.add(d,`uint`,a.texelStride),l.uniforms.add(i);let h=[];for(let e of a.fields.values())o(e.name,n)&&h.push(e);if(h.length===0)return;let g=[];for(let e=0;e<a.texelStride;++e)g.push(!1);for(let e of h)for(let t=0;t<e.numTexels;++t)g[e.startTexel+t]=!0;l.code.add(u`
  struct ${f} {`);for(let e of h)l.code.add(u`\t${y(e)} ${e.name};`);l.code.add(u`};`),l.code.add(u`
  ${f} ${p}(highp uint itemIndex) {
    ${f} itemData;
    highp uint index = itemIndex * ${d};
    highp uint rowWidth = uint(textureSize(${i.name}, 0).x);
    int coordX = int(index % rowWidth);
    int coordY = int(index / rowWidth);
  `);for(let e=0;e<g.length;++e)!1!==g[e]&&l.code.add(u`lowp uvec4 texel${u.int(e)} = texelFetch(${i.name}, ivec2(coordX + ${u.int(e)}, coordY), 0);`);for(let e of h)l.code.add(u`itemData.${e.name} = ${S(e)};`);l.code.add(u`return itemData;
}`),l.code.add(u`${f} ${m};`),l.main.add(u`${m} = ${p}(${r});`)}function A(e){let t=j(e);return e=>u`${t}.${e}`}function j(e){return`${e}ItemData`}var M,N,P,F=e((()=>{r(),O(),d(),s(),M=new T(!0),N=new T(!1),P=class{constructor(e){this.moduleId=i(),this.namespace=`_tbb_${this.moduleId}_`;let{itemIndexAttribute:t,bufferUniform:n,layout:r}=e,a=e.fieldFilter??(()=>!0),o=e.enableNaNSupport?M:N;this.TextureBackedBufferModule=(e,i)=>k(this.namespace,e,i,t,n,r,a,o),this.getTextureAttribute=A(this.namespace)}}})),I,L=e((()=>{f(),I=class extends p{constructor(e,t){super(e,`usampler2D`,2,(n,r,i)=>n.bindTexture(e,t(r,i)))}}}));export{P as i,L as n,F as r,I as t};