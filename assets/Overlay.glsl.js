import{n as e}from"./chunk.js";import{A as t,_ as n,a as r,w as i}from"./aaBoundingRect.js";import{a,o}from"./vec4f64.js";import{a as s,s as c}from"./ShaderOutput.js";import{r as l,t as u}from"./glsl.js";import{n as d,t as f}from"./Uniform.js";import{n as p,t as m}from"./FloatPassUniform.js";import{n as h,t as g}from"./Texture2DPassUniform.js";import{n as _,t as v}from"./Texture2DUintPassUniform.js";import{n as y,t as b}from"./OutputHighlight.glsl.js";import{i as x,n as S,r as C}from"./MainLighting.glsl.js";import{n as w,t as T}from"./WaterColor.glsl.js";var E,D=e((()=>{d(),E=class extends f{constructor(e,t,n){super(e,`vec4`,2,(r,i,a)=>r.setUniform4fv(e,t(i,a),n))}}}));function O(e,t){t.output===8&&(e.include(b,t),e.fragment.code.add(l`
    void calculateOcclusionAndOutputHighlight(uvec2 highlightToAdd) {
      uint levelBits = readLevelBits(highlightToAdd, highlightLevel);
      if ((levelBits & 1u) == 0u) discard;
      outputHighlight(isHighlightOccluded());
    }
  `))}var k=e((()=>{y(),u()}));function A(e,t){let{vertex:n,fragment:r}=e;n.uniforms.add(new E(`overlayTexOffset`,(e,n)=>I(t.spherical,e,n)),new E(`overlayTexScale`,(e,n)=>L(t.spherical,e,n))),r.uniforms.add(new E(`overlayTexOffset`,(e,n)=>I(t.spherical,e,n)),new E(`overlayTexScale`,(e,n)=>L(t.spherical,e,n))),r.constants.add(`overlayOpacity`,`float`,1),r.uniforms.add(new g(`ovColorTex`,(e,t)=>j(e,t))),P(e,t)}function j(e,t){return e.identifier===0&&c(e.output)?e.occludedGround?t.overlay?.allSourcesOccluders?t.overlay?.getTexture(1):t.overlay?.getTexture(4):t.overlay?.getTexture(1):e.identifier===0&&e.output===9?t.overlay?.getTexture(5):e.identifier===2?t.overlay?.getTexture(2):null}function M(e,t){let{vertex:n,fragment:r}=e;n.uniforms.add(new z(`overlayTexOffset`),new z(`overlayTexScale`)),r.uniforms.add(new p(`overlayOpacity`,e=>e.overlayOpacity)),t.output!==8&&r.uniforms.add(new g(`ovColorTex`,(e,t)=>t.overlay?.getTexture(e.overlayContent))),P(e,t)}function N(e,t){switch(e){case 0:return t.slot!==10||t.overlay?.allSourcesOccluders?0:4;case 1:case 2:return 0;case 8:return 2;case 3:case 5:case 6:case 7:return null;case 9:return 5}return null}function P(e,t){let{hasWater:n,output:r}=t;n&&e.include(w,t);let{vertex:i,fragment:a,varyings:o}=e;o.add(`vtcOverlay`,`vec4`);let s=r===8;i.code.add(l`void setOverlayVTC(in vec2 uv) {
vtcOverlay = vec4(uv, uv) * overlayTexScale + overlayTexOffset;
}`),a.code.add(l`bool isValid(vec2 uv, vec2 dxdy) {
return (uv.x >= 0.0 + dxdy.x) && (uv.x <= 1.0 - dxdy.x) && (uv.y >= 0.0 + dxdy.y) && (uv.y <= 1.0 - dxdy.y);
}
vec4 getOverlayColor(sampler2D ov0Tex, vec4 texCoords) {
vec4 color0 = texture(ov0Tex, vec2(texCoords.x * 0.5, texCoords.y));
vec4 color1 = texture(ov0Tex, vec2(texCoords.z * 0.5 + 0.5, texCoords.w));
bool isValid0 = isValid(texCoords.xy, fwidth(texCoords.xy));
bool isValid1 = isValid(texCoords.zw, vec2(0.0, 0.0));
return mix(color1 * float(isValid1), color0, float(isValid0));
}`),s?a.uniforms.add(new v(`overlayHighlightTexture`,(e,t)=>t.overlay?.getTexture(2))).code.add(l`uvec2 getAllOverlayHighlightValuesEncoded() {
vec4 texCoords = vtcOverlay;
vec2 uvInner = texCoords.xy;
vec2 uvOuter = texCoords.zw;
bool isValidInner = isValid(uvInner, fwidth(uvInner));
bool isValidOuter = isValid(uvOuter, vec2(0.0, 0.0));
vec2 texelCoordInner = uvInner * vec2(0.5, 1.0);
vec2 texelCoordOuter = uvOuter * vec2(0.5, 1.0) + vec2(0.5,0.0);
vec2 texDim =  vec2(textureSize(overlayHighlightTexture, 0));
uvec2 texelValueInner = texelFetch(overlayHighlightTexture, ivec2(texelCoordInner * texDim), 0).rg;
uvec2 texelValueOuter = texelFetch(overlayHighlightTexture, ivec2(texelCoordOuter * texDim), 0).rg;
return
isValidInner ? texelValueInner :
isValidOuter ? texelValueOuter :
uvec2(0);
}`):(a.code.add(l`vec4 getCombinedOverlayColor() {
return overlayOpacity * getOverlayColor(ovColorTex, vtcOverlay);
}`),a.code.add(l`vec4 getOverlayColorTexel() {
vec4 texCoords = vtcOverlay;
vec2 texDim =  vec2(textureSize(ovColorTex, 0));
vec4 color0 = texelFetch(ovColorTex, ivec2(vec2(texCoords.x * 0.5, texCoords.y) * texDim), 0);
vec4 color1 = texelFetch(ovColorTex, ivec2(vec2(texCoords.z * 0.5 + 0.5, texCoords.w) * texDim), 0);
bool isValid0 = isValid(texCoords.xy, fwidth(texCoords.xy));
bool isValid1 = isValid(texCoords.zw, vec2(0.0, 0.0));
return mix(color1 * float(isValid1), color0, float(isValid0));
}`)),n&&(x(a),C(a),a.code.add(l`vec4 getOverlayWaterColor(vec4 maskInput, vec4 colorInput, vec3 vposEyeDir,
float shadow, vec3 localUp, mat3 tbn, vec3 position, vec3 positionWorld) {
vec3 n = normalize(tbn *  (2.0 * maskInput.rgb - vec3(1.0)));
vec3 v = vposEyeDir;
vec3 final = getWaterColor(n, v, mainLightDirection, colorInput.rgb, mainLightIntensity, localUp, 1.0 - shadow, maskInput.w, position, positionWorld);
return vec4(final, colorInput.w);
}`))}function F(e,t){return e.overlay?.overlays[t]?.extent}function I(e,i,a){let o=R,s=e&&!i.useENUForGlobalOverlayUV,c=s?0:i.toMapSpace[0],l=s?0:i.toMapSpace[1],u=(e,i)=>{let s=F(a,i);r(s)&&(o[e+0]=(c-s[0])/t(s),o[e+1]=(l-s[1])/n(s))};return u(0,0),u(2,1),o}function L(e,i,a){let o=R,s=e&&!i.useENUForGlobalOverlayUV,c=s?1:i.toMapSpace[2],l=s?1:i.toMapSpace[3],u=(e,i)=>{let s=F(a,i);r(s)&&(o[e+0]=c/t(s),o[e+1]=l/n(s))};return u(0,0),u(2,1),o}var R,z,B=e((()=>{a(),i(),s(),S(),T(),D(),m(),u(),h(),_(),d(),R=o(),z=class extends f{constructor(e){super(e,`vec4`)}}}));export{k as a,D as c,A as i,M as n,O as o,N as r,E as s,B as t};