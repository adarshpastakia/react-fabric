import{n as e}from"./rolldown-runtime.js";import{D as t,E as n,w as r,y as i}from"./aaBoundingRect.js";import{o as a,s as o}from"./vec4f64.js";import{r as s,t as c}from"./glsl.js";import{n as l,t as u}from"./Uniform.js";import{n as d,t as f}from"./Texture2DUintPassUniform.js";import{n as p,t as m}from"./FloatPassUniform.js";import{n as h,t as g}from"./Texture2DPassUniform.js";import{p as _}from"./ShaderOutput.js";import{n as v,t as y}from"./OutputHighlight.glsl.js";import{i as b,n as x,r as S}from"./MainLighting.glsl.js";import{n as C,t as w}from"./WaterColor.glsl.js";var T;function E(){return(E=e((()=>{l(),T=class extends u{constructor(e,t,n){super(e,`vec4`,2,(r,i,a)=>r.setUniform4fv(e,t(i,a),n))}}})))()}function D(e,t){t.output===10&&(e.include(y,t),e.fragment.code.add(s`
    void calculateOcclusionAndOutputHighlight(uvec2 highlightToAdd) {
      uint levelBits = readLevelBits(highlightToAdd, highlightLevel);
      if ((levelBits & 1u) == 0u) discard;
      outputHighlight(isHighlightOccluded());
    }
  `))}function O(){return(O=e((()=>{v(),c()})))()}function k(e,t){let{vertex:n,fragment:r}=e;n.uniforms.add(new T(`overlayTexOffset`,(e,n)=>F(t.spherical,e,n)),new T(`overlayTexScale`,(e,n)=>I(t.spherical,e,n))),r.uniforms.add(new T(`overlayTexOffset`,(e,n)=>F(t.spherical,e,n)),new T(`overlayTexScale`,(e,n)=>I(t.spherical,e,n))),r.constants.add(`overlayOpacity`,`float`,1),r.uniforms.add(new g(`ovColorTex`,(e,t)=>A(e,t))),N(e,t)}function A(e,t){return e.identifier===0&&_(t.output)?e.occludedGround?t.overlay?.allSourcesOccluders?t.overlay?.getTexture(1):t.overlay?.getTexture(4):t.overlay?.getTexture(1):e.identifier===0&&t.output===11?t.overlay?.getTexture(5):e.identifier===2?t.overlay?.getTexture(2):null}function j(e,t){let{vertex:n,fragment:r}=e;n.uniforms.add(new R(`overlayTexOffset`),new R(`overlayTexScale`)),r.uniforms.add(new p(`overlayOpacity`,e=>e.overlayOpacity)),t.output!==10&&r.uniforms.add(new g(`ovColorTex`,(e,t)=>t.overlay?.getTexture(e.overlayContent))),N(e,t)}function M(e,t){switch(e){case 0:case 1:case 2:return t.slot!==9||t.overlay?.allSourcesOccluders?0:4;case 3:case 4:return 0;case 10:return 2;case 5:case 7:case 8:case 9:return null;case 11:return 5}return null}function N(e,t){let{hasWater:n,output:r}=t;n&&e.include(C,t);let{vertex:i,fragment:a,varyings:o}=e;o.add(`vtcOverlay`,`vec4`);let c=r===10;i.code.add(s`void setOverlayVTC(in vec2 uv) {
vtcOverlay = vec4(uv, uv) * overlayTexScale + overlayTexOffset;
}`),a.code.add(s`bool isValid(vec2 uv, vec2 dxdy) {
return (uv.x >= 0.0 + dxdy.x) && (uv.x <= 1.0 - dxdy.x) && (uv.y >= 0.0 + dxdy.y) && (uv.y <= 1.0 - dxdy.y);
}
vec4 getOverlayColor(sampler2D ov0Tex, vec4 texCoords) {
vec4 color0 = texture(ov0Tex, vec2(texCoords.x * 0.5, texCoords.y));
vec4 color1 = texture(ov0Tex, vec2(texCoords.z * 0.5 + 0.5, texCoords.w));
bool isValid0 = isValid(texCoords.xy, fwidth(texCoords.xy));
bool isValid1 = isValid(texCoords.zw, vec2(0.0, 0.0));
return mix(color1 * float(isValid1), color0, float(isValid0));
}`),c?a.uniforms.add(new f(`overlayHighlightTexture`,(e,t)=>t.overlay?.getTexture(2))).code.add(s`uvec2 getAllOverlayHighlightValuesEncoded() {
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
}`):(a.code.add(s`vec4 getCombinedOverlayColor() {
return overlayOpacity * getOverlayColor(ovColorTex, vtcOverlay);
}`),a.code.add(s`vec4 getOverlayColorTexel() {
vec4 texCoords = vtcOverlay;
vec2 texDim =  vec2(textureSize(ovColorTex, 0));
vec4 color0 = texelFetch(ovColorTex, ivec2(vec2(texCoords.x * 0.5, texCoords.y) * texDim), 0);
vec4 color1 = texelFetch(ovColorTex, ivec2(vec2(texCoords.z * 0.5 + 0.5, texCoords.w) * texDim), 0);
bool isValid0 = isValid(texCoords.xy, fwidth(texCoords.xy));
bool isValid1 = isValid(texCoords.zw, vec2(0.0, 0.0));
return mix(color1 * float(isValid1), color0, float(isValid0));
}`)),n&&(b(a),S(a),a.code.add(s`vec4 getOverlayWaterColor(vec4 maskInput, vec4 colorInput, vec3 vposEyeDir,
float shadow, vec3 localUp, mat3 tbn, vec3 position, vec3 positionWorld) {
vec3 n = normalize(tbn *  (2.0 * maskInput.rgb - vec3(1.0)));
vec3 v = vposEyeDir;
vec3 final = getWaterColor(n, v, mainLightDirection, colorInput.rgb, mainLightIntensity, localUp, 1.0 - shadow, maskInput.w, position, positionWorld);
return vec4(final, colorInput.w);
}`))}function P(e,t){return e.overlay?.overlays[t]?.extent}function F(e,n,a){let o=L,s=e&&!n.useENUForGlobalOverlayUV,c=s?0:n.toMapSpace[0],l=s?0:n.toMapSpace[1],u=(e,n)=>{let s=P(a,n);t(s)&&(o[e+0]=(c-s[0])/i(s),o[e+1]=(l-s[1])/r(s))};return u(0,0),u(2,1),o}function I(e,n,a){let o=L,s=e&&!n.useENUForGlobalOverlayUV,c=s?1:n.toMapSpace[2],l=s?1:n.toMapSpace[3],u=(e,n)=>{let s=P(a,n);t(s)&&(o[e+0]=c/i(s),o[e+1]=l/r(s))};return u(0,0),u(2,1),o}var L,R;function z(){return(z=e((()=>{a(),n(),x(),w(),E(),m(),c(),h(),d(),l(),L=o(),R=class extends u{constructor(e){super(e,`vec4`)}}})))()}export{O as a,E as c,k as i,j as n,D as o,M as r,T as s,z as t};