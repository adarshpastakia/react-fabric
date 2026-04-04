import{n as e}from"./chunk.js";import{l as t,o as n}from"./vec3f64.js";import{n as r,t as i}from"./mat4f64.js";import{C as a,w as o}from"./mat4.js";import{E as s,P as c,v as l}from"./vec3.js";import{n as u,r as d,t as f}from"./glsl.js";import{a as p,o as m}from"./Emissions.glsl.js";import{n as h,t as g}from"./Uniform.js";import{n as ee,t as _}from"./ShaderBuilder.js";import{n as te,r as v}from"./Slice.glsl.js";import{n as y,t as ne}from"./Float3BindUniform.js";import{n as b,t as x}from"./Matrix4DrawUniform.js";import{i as re,n as ie,r as ae,t as oe}from"./View.glsl.js";import{n as se,t as ce}from"./Texture2DBindUniform.js";import{n as le,t as ue}from"./OutputHighlight.glsl.js";import{n as S,t as de}from"./AlphaCutoff.js";import{n as fe,t as pe}from"./OutputColorHighlightOLID.glsl.js";import{a as me,n as C,o as w,r as T}from"./ForwardLinearDepthToWriteShadowMap.glsl.js";import{n as E,t as D}from"./Transform.glsl.js";import{n as O,t as k}from"./OutputDepth.glsl.js";import{n as A,t as j}from"./NormalAttribute.glsl.js";import{a as M,i as N,n as P,o as F,r as I,t as L}from"./EvaluateSceneLighting.glsl.js";import{i as R,n as z,r as he}from"./MainLighting.glsl.js";import{n as B,r as ge,t as _e}from"./ReadShadowMap.glsl.js";import{n as ve,t as ye}from"./NormalUtils.glsl.js";import{n as be,t as xe}from"./BackgroundGrid.glsl.js";import{a as Se,n as V,o as Ce,t as we}from"./Overlay.glsl.js";function Te(e,t){e.varyings.add(`tbnTangent`,`vec3`),e.varyings.add(`tbnBiTangent`,`vec3`),t.spherical?e.vertex.code.add(d`void forwardVertexTangent(vec3 n) {
tbnTangent = normalize(cross(vec3(0.0, 0.0, 1.0), n));
tbnBiTangent = normalize(cross(n, tbnTangent));
}`):e.vertex.code.add(d`void forwardVertexTangent(vec3 n) {
tbnTangent = vec3(1.0, 0.0, 0.0);
tbnBiTangent = normalize(cross(n, tbnTangent));
}`),e.fragment.code.add(d`mat3 getTBNMatrix(vec3 n) {
return mat3(tbnTangent, tbnBiTangent, n);
}`)}var H=e((()=>{f()}));function Ee(e,t){let{vertex:n,fragment:r,varyings:i}=e;i.add(`vtc`,`vec2`),n.uniforms.add(new K(`texOffsetAndScale`)),r.uniforms.add(new q(`tex`)),r.uniforms.add(new G(`textureOpacities`));let{textureFadingEnabled:a,renderOccluded:o,tileBlendInput:s}=t,c=a&&!o;c&&(n.uniforms.add(new K(`nextTexOffsetAndScale`)),i.add(`nvtc`,`vec2`),r.uniforms.add(new q(`texNext`)),r.uniforms.add(new G(`nextTexOpacities`)),r.uniforms.add(new W(`fadeFactor`)));let l=s===2;l&&r.include(be);let f=s===1;f&&r.uniforms.add(new G(`backgroundColor`)),n.code.add(d`
  void forwardTextureCoordinatesWithTransform(in vec2 uv) {
    vtc = texOffsetAndScale.xy + uv * texOffsetAndScale.zw;
    ${u(c,`nvtc = nextTexOffsetAndScale.xy + uv * nextTexOffsetAndScale.zw;`)}
  }`),r.code.add(d`
    vec4 getColor(vec4 color, vec2 uv, vec3 opacities) {
      ${u(l||f,d`
          if (opacities.y <= 0.0) {
            return color * opacities.z * opacities.x;
          }
          vec4 bg = vec4(${f?d`backgroundColor`:d`gridColor(uv)`} * opacities.y, opacities.y);
          vec4 layer = color * opacities.z;
          return (bg * (1.0 - layer.a) + layer) * opacities.x;
        `,`return color;`)}
    }`),c?r.code.add(d`vec4 getTileColor() {
vec4 color = getColor(texture(tex, vtc), vtc, textureOpacities);
if (fadeFactor >= 1.0) {
return color;
}
vec4 nextColor = getColor(texture(texNext, nvtc), nvtc, nextTexOpacities);
return mix(nextColor, color, fadeFactor);
}`):r.code.add(d`vec4 getTileColor() {
return getColor(texture(tex, vtc), vtc, textureOpacities);
}`)}var U,W,G,K,q,J=e((()=>{B(),xe(),f(),h(),U=class extends ge{constructor(){super(...arguments),this.overlayOpacity=1}},W=class extends g{constructor(e){super(e,`float`)}},G=class extends g{constructor(e){super(e,`vec3`)}},K=class extends g{constructor(e){super(e,`vec4`)}},q=class extends g{constructor(e){super(e,`sampler2D`)}}}));function Y(e){let t=new ee,{attributes:n,vertex:r,fragment:i,varyings:o}=t;n.add(`position`,`vec3`),t.include(A,e),t.include(p,e);let s=()=>{t.include(ve,e),r.code.add(d`vec3 getNormal() {
float z = 1.0 - abs(normalCompressed.x) - abs(normalCompressed.y);
vec3 n = vec3(normalCompressed + vec2(normalCompressed.x >= 0.0 ? 1.0 : -1.0,
normalCompressed.y >= 0.0 ? 1.0 : -1.0) * min(z, 0.0), z);
return normalize(n);
}`)};ie(r,e),t.include(E);let{output:f,overlayMode:m,tileBorders:h,transparencyMode:g,overlayEnabled:_}=e,v=g===2||g===3,y=e.pbrMode!==0,x=_&&v;switch(f){case 0:{t.include(Ee,e),i.include(N,e),_&&t.include(V,e);let n=m===2;n&&t.include(Te,e),o.add(`vnormal`,`vec3`),o.add(`vpos`,`vec3`,{invariant:!0}),o.add(`vup`,`vec3`),s(),r.main.add(d`
          vpos = position;
          vec3 positionWorld = position + localOrigin;
          gl_Position = transformPosition(proj, view, vpos);
          vnormal = getNormal();
          vup = getLocalUp(position, localOrigin);
          ${u(n,d`forwardVertexTangent(vnormal);`)}

          forwardTextureCoordinatesWithTransform(uv0);
          ${u(_,`setOverlayVTC(uv0);`)}
          ${u(h,`forwardTextureCoordinates();`)}
          forwardLinearDepthToReadShadowMap();`),t.include(_e,e),i.include(te,e),i.include(N,e),i.include(F,e),t.include(pe,e),oe(i,e),I(i),L(i),i.uniforms.add(r.uniforms.get(`localOrigin`),new ne(`viewDirection`,({camera:e})=>l(Q,c(Q,e.viewMatrix[12],e.viewMatrix[13],e.viewMatrix[14])))),n&&i.uniforms.add(new ce(`ovWaterTex`,e=>e.overlay?.getTexture(3)),new b(`view`,({origin:e},{camera:t})=>a(Z,t.viewMatrix,e))),R(i),he(i),i.main.add(d`
          vec3 normal = normalize(vnormal);
          float lightAlignment = dot(normal, mainLightDirection);

          float additionalAmbientScale = additionalDirectedAmbientLight(lightAlignment);
          float shadow = readShadow(additionalAmbientScale, vpos);
          float ssao = evaluateAmbientOcclusionInverse();
          vec4 tileColor = getTileColor();

          ${u(_,d`vec4 overlayColorOpaque = getOverlayColor(ovColorTex, vtcOverlay);
                   vec4 overlayColor = overlayOpacity * overlayColorOpaque;
                   ${u(v,`if (overlayColor.a < ${d.float(S)}) { discard; }`)}
                   vec4 groundColor = tileColor;
                   tileColor = tileColor * (1.0 - overlayColor.a) + overlayColor;`)}

          if(tileColor.a < ${d.float(S)}) {
            discard;
          }

          bool sliced = rejectBySlice(vpos);
          if (sliced) {
            tileColor *= groundSliceOpacity;
          }

          vec3 albedo = tileColor.rgb;

          // heuristic shading function used in the old terrain, now used to add ambient lighting
          vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

          ${y?d`vec4 finalColor = vec4(evaluatePBRSimplifiedLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight, normalize(vpos - cameraPosition), vup), tileColor.a);`:d`vec4 finalColor = vec4(evaluateSceneLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight), tileColor.a);`}
          ${u(n,d`vec4 overlayWaterMask = getOverlayColor(ovWaterTex, vtcOverlay);
                 float waterNormalLength = length(overlayWaterMask);
                 if (waterNormalLength > 0.95) {
                   mat3 tbnMatrix = mat3(tbnTangent, tbnBiTangent, vnormal);
                   vec4 waterOverlayColor = vec4(overlayColor.w > 0.0 ? overlayColorOpaque.xyz/overlayColor.w : vec3(1.0), overlayColor.w);
                   vec4 viewPosition = view * vec4(vpos, 1.0);
                   vec4 waterColorLinear = getOverlayWaterColor(overlayWaterMask, waterOverlayColor, -normalize(vpos - cameraPosition), shadow, vnormal, tbnMatrix, viewPosition.xyz,  vpos + localOrigin);
                   vec4 waterColorNonLinear = delinearizeGamma(vec4(waterColorLinear.xyz, 1.0));
                   float opacity = sliced ? groundSliceOpacity : 1.0;
                   // un-gamma the ground color to mix in linear space
                   finalColor = mix(groundColor, waterColorNonLinear, waterColorLinear.w) * opacity;
                 }`)}
          ${u(h,d`vec2 dVuv = fwidth(vuv0);
                 vec2 edgeFactors = smoothstep(vec2(0.0), 1.5 * dVuv, min(vuv0, 1.0 - vuv0));
                 float edgeFactor = 1.0 - min(edgeFactors.x, edgeFactors.y);
                 finalColor = mix(finalColor, vec4(1.0, 0.0, 0.0, 1.0), edgeFactor);`)}
          outputColorHighlightOLID(applySlice(finalColor, vpos), finalColor.rgb);`)}break;case 1:x&&t.include(V,e),r.main.add(d`
        ${u(x,`setOverlayVTC(uv0);`)}
        gl_Position = transformPosition(proj, view, position);`),i.main.add(`${u(x,`if (getCombinedOverlayColor().a < ${d.float(S)}) discard;`)}`);break;case 3:case 4:case 5:case 6:case 7:t.include(k,e),w(t),C(t),r.main.add(d`gl_Position = transformPositionWithDepth(proj, view, position, nearFar, linearDepth);`),i.main.add(d`outputDepth(linearDepth);`);break;case 2:x&&t.include(V,e),o.add(`vnormal`,`vec3`),re(r),s(),r.main.add(d`
        ${u(x,`setOverlayVTC(uv0);`)}
        gl_Position = transformPosition(proj, view, position);
        vnormal = normalize((viewNormal * vec4(getNormal(), 1.0)).xyz);`),i.main.add(d`
        ${u(x,`if (getCombinedOverlayColor().a < ${d.float(S)}) discard;`)}
        vec3 normal = normalize(vnormal);
        if (gl_FrontFacing == false) {
          normal = -normal;
        }
        fragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);`);break;case 8:_&&(t.include(V,e),t.include(Ce,e)),r.main.add(d`
        ${u(_,`setOverlayVTC(uv0);`)}
        gl_Position = transformPosition(proj, view, position);`),t.include(ue,e),i.main.add(d`
        ${u(_,d`
           calculateOcclusionAndOutputHighlight(getAllOverlayHighlightValuesEncoded());`,`calculateOcclusionAndOutputHighlight();`)}
      `);break;case 9:if(_)t.include(V,e),r.main.add(d`gl_Position = transformPosition(proj, view, position);
setOverlayVTC(uv0);`),i.main.add(d`fragColor = getOverlayColorTexel();`);else{let e=g===0;r.main.add(d`${u(e,`gl_Position = transformPosition(proj, view, position);`)}`),i.main.add(d`fragColor = vec4(0.0);`)}}return t}var X,Z,Q,$,De=e((()=>{o(),r(),s(),n(),me(),T(),v(),D(),j(),m(),H(),O(),le(),Se(),M(),P(),z(),ye(),B(),we(),J(),ae(),y(),f(),x(),se(),fe(),_(),de(),X=class extends U{},Z=i(),Q=t(),$=Object.freeze(Object.defineProperty({__proto__:null,TerrainPassParameters:X,build:Y},Symbol.toStringTag,{value:`Module`}))}));export{J as a,De as i,X as n,H as o,Y as r,$ as t};