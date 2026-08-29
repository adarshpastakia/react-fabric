import{n as e}from"./rolldown-runtime.js";import{o as t,r as n}from"./tslib.es6.js";import{f as r}from"./typedArrayUtil.js";import{n as i,t as a}from"./uid.js";import{J as o,K as s}from"./BufferView.js";import{a as c,i as l}from"./Util.js";import{n as u,r as d,t as f}from"./glsl.js";import{n as p,t as m}from"./Uniform.js";import{n as h,r as g,t as _}from"./ShaderTechniqueConfiguration.js";import{n as v,t as y}from"./FloatBindUniform.js";function b(e){switch(e.elementType){case`float`:switch(e.elementCount){case 1:return d`float`;case 2:return d`vec2`;case 3:return d`vec3`;case 4:return d`vec4`;case 9:return d`mat3`;default:e.elementCount}break;case`int`:switch(e.elementCount){case 1:return d`int`;case 2:return d`ivec2`;case 3:return d`ivec3`;case 4:return d`ivec4`;case 9:throw Error(`Invalid element count 9 for type int`);default:e.elementCount}break;case`uint`:switch(e.elementCount){case 1:return d`uint`;case 2:return d`uvec2`;case 3:return d`uvec3`;case 4:return d`uvec4`;case 9:throw Error(`Invalid element count 9 for type uint`);default:e.elementCount}break;default:e.elementType}throw Error(`unsupported field`)}function x(e,t){let n=t?.supportNaN;n&&(e.uniforms.add(D),e.code.add(d`bool bitsEncodeFloat16NaN(highp uint bits) {
const highp uint nanExponent = 0x00007c00u;
highp uint exponent = bits & nanExponent;
highp uint mantissa = bits & 0x000003ffu;
return exponent == nanExponent && mantissa != 0u;
}`)),e.code.add(d`
    mediump float unpackHalf1x16(highp uint bits) {
      ${u(n,d`
        if (bitsEncodeFloat16NaN(bits)) {
          return constNaN;
        }`)}
      return unpackHalf2x16(bits).x;
    }`),e.code.add(d`
    mediump vec2 unpackHalf2x16NaNSupport(highp uint bits) {
      vec2 result = unpackHalf2x16(bits);
      ${u(n,d`
        if (bitsEncodeFloat16NaN(bits)) {
          result.x = constNaN;
        }
        if (bitsEncodeFloat16NaN(bits >> ${d.uint(I[2])})) {
          result.y = constNaN;
        }
        `)}
      return result;
    }`)}function S(e,t){let n=t?.supportNaN;n&&(e.uniforms.add(D),e.code.add(d`bool bitsEncodeFloat32NaN(highp uint bits) {
const highp uint nanExponent = 0x7f800000u;
highp uint exponent = bits & nanExponent;
highp uint mantissa = bits & 0x007fffffu;
return exponent == nanExponent && mantissa != 0u;
}`)),e.code.add(d`
    highp float unpackFloat1x32(highp uint bits) {
      ${u(n,d`
        if (bitsEncodeFloat32NaN(bits)) {
          return constNaN;
        }`)}
      return uintBitsToFloat(bits);
    }`)}function C(e){e.code.add(d`mediump int unpackInt1x16(highp uint bits) {
highp uint signExtendedBits = (bits & 0x8000u) != 0u ? (bits | 0xffff0000u) : bits;
return int(signExtendedBits);
}`)}function w(e,t){let{fieldType:n}=e;return`${(0,P[n])(E(e,t))}`}function T(e,t){let n=[];for(let t of e){let e=d`unpackFloat1x32(${t})`;n.push(e)}return n.join(t)}function E(e,t){let{byteOffset:n,byteSize:r}=e,i=t.channelByteStride,a=t.byteStride,o=Math.ceil(r/F),s=R[t.channels],c=[];for(let e=0;e<o;++e){let t=e*F,o=n+t,l=r-t,u=Math.min(l,F),f=0,p=[];for(;f<u;){let e=o+f,t=Math.floor(e/a),n=e%a,r=Math.floor(n/i),c=n%i,l=i-c,m=u-f,h=Math.min(l,m),g=d`texel${d.int(t)}${s[r]}`,_=h===4?``:d` & ${d.hexuint(L[h])}`,v=c===0?``:d` >> ${d.uint(I[c])}`,y=d`((${g}${v})${_})`,b=f===0?``:d` << ${d.uint(I[f])}`,x=d`(${y})${b}`;p.push(x),f+=h}c.push(d`(${p.join(` | `)})`)}return c}var D,O,k,A,j,M,N,P,F,I,L,R;function z(){return(z=e((()=>{t(),r(),s(),y(),f(),g(),D=new v(`constNaN`,()=>NaN,{supportsNaN:!0}),O=class extends _{constructor(e){super(),this.supportNaN=e}},n([h()],O.prototype,`supportNaN`,void 0),k=e=>d`${e[0]}`,A=e=>{let t=e[0],n=d`uvec4(${d.uint(I[0])}, ${d.uint(I[1])}, ${d.uint(I[2])}, ${d.uint(I[3])})`,r=d`uvec4(${d.hexuint(L[1])})`;return d`((uvec4(${t}) >> ${n}) & ${r})`},j=e=>d`(float(${k(e)})/${d.float(255)})`,M=e=>d`unpackFloat1x32(${e[0]})`,N=e=>d`vec4(${T(e,`, `)})`,P={u8:k,unorm8:j,vec4unorm8:e=>d`(vec4(${A(e)})/${d.float(255)})`,snorm16:e=>d`unpackSnorm2x16(${e[0]}).x`,vec2snorm16:e=>d`unpackSnorm2x16(${e[0]})`,f16:o?e=>d`unpackHalf1x16(${e[0]})`:M,vec4f16:o?e=>d`vec4(unpackHalf2x16NaNSupport(${e[0]}), unpackHalf2x16NaNSupport(${e[1]}))`:N,f32:M,vec4u8:A,vec2f32:e=>d`vec2(${T(e,`, `)})`,vec3f32:e=>d`vec3(${T(e,`, `)})`,vec4f32:N,mat3f32:e=>d`mat3(${T(e,`,
`)})`},F=4,I=[0,8,16,24],L=[0,255,65535,16777215,4294967295],R={1:[d``],2:[d`.x`,d`.y`],4:[d`.x`,d`.y`,d`.z`,d`.w`]}})))()}function B(e,t,n,r,i,a,o,s){let{vertex:c}=t,{texelFormatInfo:u}=a;c.include(S,s),c.include(x,s),c.include(C);let f=`${e}tbbStride`,p=`${e}TextureBackedBufferItemData`,m=`${e}fetchTextureBackedBufferItemData`,h=H(e);for(let e of[f,p,m,h])l(e.length<1024,`Identifiers do not have a valid length`);c.constants.add(f,`uint`,a.texelStride),c.uniforms.add(i);let g=[];for(let e of a.fields.values())o(e.name,n)&&g.push(e);if(g.length===0)return;let _=[];for(let e=0;e<a.texelStride;++e)_.push(!1);for(let e of g)for(let t=0;t<e.numTexels;++t)_[e.startTexel+t]=!0;c.code.add(d`
  struct ${p} {`);for(let e of g)c.code.add(d`\t${b(e)} ${e.name};`);c.code.add(d`};`),c.code.add(d`
  ${p} ${m}(highp uint itemIndex) {
    ${p} itemData;
    highp uint index = itemIndex * ${f};
    highp uint rowWidth = uint(textureSize(${i.name}, 0).x);
    int coordX = int(index % rowWidth);
    int coordY = int(index / rowWidth);
  `);let v=K[u.channels],y=q[u.channels];for(let e=0;e<_.length;++e)!1!==_[e]&&c.code.add(d`highp ${v} texel${d.int(e)} = texelFetch(${i.name}, ivec2(coordX + ${d.int(e)}, coordY), 0)${y};`);for(let e of g)c.code.add(d`itemData.${e.name} = ${w(e,u)};`);c.code.add(d`return itemData;
}`),c.code.add(d`${p} ${h};`),c.main.add(d`${h} = ${m}(${r});`)}function V(e){let t=H(e);return e=>d`${t}.${e}`}function H(e){return`${e}ItemData`}var U,W,G,K,q;function J(){return(J=e((()=>{i(),z(),f(),c(),U=new O(!0),W=new O(!1),G=class{constructor(e){this.moduleId=a(),this.namespace=`_tbb_${this.moduleId}_`;let{itemIndexAttribute:t,bufferUniform:n,layout:r}=e,i=e.fieldFilter??(()=>!0),o=e.enableNaNSupport?U:W;this.TextureBackedBufferModule=(e,a)=>B(this.namespace,e,a,t,n,r,i,o),this.getTextureAttribute=V(this.namespace)}},K={1:d`uint`,2:d`uvec2`,4:d`uvec4`},q={1:d`.x`,2:d`.xy`,4:``}})))()}var Y;function X(){return(X=e((()=>{p(),Y=class extends m{constructor(e,t){super(e,`usampler2D`,2,(n,r,i)=>n.bindTexture(e,t(r,i)))}}})))()}export{J as i,X as n,G as r,Y as t};