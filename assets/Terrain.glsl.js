import{n as e}from"./rolldown-runtime.js";import{l as t,o as n}from"./vec3f64.js";import{D as r,F as i,y as a}from"./vec3.js";import{n as o,t as s}from"./mat4f64.js";import{C as c,w as l}from"./mat4.js";import{n as u,r as d,t as f}from"./glsl.js";import{n as p,t as m}from"./Uniform.js";import{n as ee,t as h}from"./ShaderBuilder.js";import{a as g,i as te}from"./Slice.glsl.js";import{n as _,t as ne}from"./Float3BindUniform.js";import{n as re,t as v}from"./Matrix4DrawUniform.js";import{i as ie,n as ae,r as y,t as b}from"./View.glsl.js";import{n as oe,t as x}from"./alphaCutoff.glsl.js";import{c as se,s as ce}from"./Emissions.glsl.js";import{n as le,t as ue}from"./OutputHighlight.glsl.js";import{n as de,t as fe}from"./Texture2DBindUniform.js";import{n as pe,t as me}from"./OutputColorHighlightOLID.glsl.js";import{n as he,t as S}from"./ForwardLinearDepth.glsl.js";import{n as C,r as w}from"./ForwardLinearDepthToWriteShadowMap.glsl.js";import{n as T,t as E}from"./Transform.glsl.js";import{n as D,t as O}from"./OutputDepth.glsl.js";import{n as k,t as A}from"./NormalAttribute.glsl.js";import{c as j,i as M,n as N,r as P,s as F,t as I}from"./EvaluateSceneLighting.glsl.js";import{i as L,n as R,r as ge}from"./MainLighting.glsl.js";import{a as _e,n as z,r as ve}from"./ReadShadowMap.glsl.js";import{n as ye,t as be}from"./NormalUtils.glsl.js";import{n as xe,t as Se}from"./BackgroundGrid.glsl.js";import{a as Ce,n as B,o as we,t as Te}from"./Overlay.glsl.js";function Ee(e,t){e.varyings.add(`tbnTangent`,`vec3`),e.varyings.add(`tbnBiTangent`,`vec3`),t.spherical?e.vertex.code.add(d`void forwardVertexTangent(vec3 n) {
tbnTangent = normalize(cross(vec3(0.0, 0.0, 1.0), n));
tbnBiTangent = normalize(cross(n, tbnTangent));
}`):e.vertex.code.add(d`void forwardVertexTangent(vec3 n) {
tbnTangent = vec3(1.0, 0.0, 0.0);
tbnBiTangent = normalize(cross(n, tbnTangent));
}`),e.fragment.code.add(d`mat3 getTBNMatrix(vec3 n) {
return mat3(tbnTangent, tbnBiTangent, n);
}`)}function V(){return(V=e((()=>{f()})))()}function De(e,t){let{vertex:n,fragment:r,varyings:i}=e;i.add(`vtc`,`vec2`),n.uniforms.add(new G(`texOffsetAndScale`)),r.uniforms.add(new K(`tex`)),r.uniforms.add(new W(`textureOpacities`));let{textureFadingEnabled:a,renderOccluded:o,tileBlendInput:s}=t,c=a&&!o;c&&(n.uniforms.add(new G(`nextTexOffsetAndScale`)),i.add(`nvtc`,`vec2`),r.uniforms.add(new K(`texNext`)),r.uniforms.add(new W(`nextTexOpacities`)),r.uniforms.add(new U(`fadeFactor`)));let l=s===2;l&&r.include(xe);let f=s===1;f&&r.uniforms.add(new W(`backgroundColor`)),n.code.add(d`
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
}`)}var H,U,W,G,K;function q(){return(q=e((()=>{z(),Se(),f(),p(),H=class extends _e{constructor(){super(...arguments),this.overlayOpacity=1}},U=class extends m{constructor(e){super(e,`float`)}},W=class extends m{constructor(e){super(e,`vec3`)}},G=class extends m{constructor(e){super(e,`vec4`)}},K=class extends m{constructor(e){super(e,`sampler2D`)}}})))()}function J(e){let t=new ee,{attributes:n,vertex:r,fragment:o,varyings:s}=t;n.add(`position`,`vec3`),t.include(k,e),t.include(ce,e);let l=()=>{t.include(ye,e),r.code.add(d`vec3 getNormal() {
float z = 1.0 - abs(normalCompressed.x) - abs(normalCompressed.y);
vec3 n = vec3(normalCompressed + vec2(normalCompressed.x >= 0.0 ? 1.0 : -1.0,
normalCompressed.y >= 0.0 ? 1.0 : -1.0) * min(z, 0.0), z);
return normalize(n);
}`)};ae(r,e),t.include(T),o.include(x);let{output:f,overlayMode:p,tileBorders:m,transparencyMode:h,overlayEnabled:g}=e,_=h===2||h===3,v=e.pbrMode!==0,y=g&&_;switch(f){case 0:case 1:case 2:{t.include(De,e),o.include(M,e),g&&t.include(B,e);let n=p===2;n&&t.include(Ee,e),s.add(`vnormal`,`vec3`),s.add(`vpos`,`vec3`,{invariant:!0}),s.add(`vup`,`vec3`),l(),r.main.add(d`
          vpos = position;
          vec3 positionWorld = position + localOrigin;
          gl_Position = transformPosition(proj, view, vpos);
          vnormal = getNormal();
          vup = getLocalUp(position, localOrigin);
          ${u(n,d`forwardVertexTangent(vnormal);`)}

          forwardTextureCoordinatesWithTransform(uv0);
          ${u(g,`setOverlayVTC(uv0);`)}
          ${u(m,`forwardTextureCoordinates();`)}
          forwardLinearDepthToReadShadowMap();`),t.include(ve,e),o.include(te,e),o.include(M,e),o.include(j,e),t.include(pe,e),b(o,e),N(o),I(o),o.uniforms.add(r.uniforms.get(`localOrigin`),new ne(`viewDirection`,({camera:e})=>a(Z,i(Z,e.viewMatrix[12],e.viewMatrix[13],e.viewMatrix[14])))),n&&o.uniforms.add(new fe(`ovWaterTex`,e=>e.overlay?.getTexture(3)),new re(`view`,({origin:e},{camera:t})=>c(X,t.viewMatrix,e))),L(o),ge(o),o.main.add(d`
          vec3 normal = normalize(vnormal);
          float lightAlignment = dot(normal, mainLightDirection);

          float additionalAmbientScale = additionalDirectedAmbientLight(lightAlignment);
          float shadow = readShadow(additionalAmbientScale, vpos);
          float ssao = evaluateAmbientOcclusionInverse();
          vec4 tileColor = getTileColor();

          ${u(g,d`vec4 overlayColorOpaque = getOverlayColor(ovColorTex, vtcOverlay);
                 vec4 overlayColor = overlayOpacity * overlayColorOpaque;
                 ${u(_,`if (overlayColor.a < alphaCutoff) { discard; }`)}
                 vec4 groundColor = tileColor;
                 tileColor = tileColor * (1.0 - overlayColor.a) + overlayColor;`)}

          if(tileColor.a < alphaCutoff) {
            discard;
          }

          bool sliced = rejectBySlice(vpos);
          if (sliced) {
            tileColor *= groundSliceOpacity;
          }

          vec3 albedo = tileColor.rgb;

          // heuristic shading function used in the old terrain, now used to add ambient lighting
          vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

          ${v?d`vec4 finalColor = vec4(evaluatePBRSimplifiedLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight, normalize(vpos - cameraPosition), vup), tileColor.a);`:d`vec4 finalColor = vec4(evaluateSceneLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight), tileColor.a);`}
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
          ${u(m,d`vec2 dVuv = fwidth(vuv0);
                 vec2 edgeFactors = smoothstep(vec2(0.0), 1.5 * dVuv, min(vuv0, 1.0 - vuv0));
                 float edgeFactor = 1.0 - min(edgeFactors.x, edgeFactors.y);
                 finalColor = mix(finalColor, vec4(1.0, 0.0, 0.0, 1.0), edgeFactor);`)}
          outputColorHighlightOLID(applySlice(finalColor, vpos), finalColor.rgb);`)}break;case 3:y&&t.include(B,e),r.main.add(d`
        ${u(y,`setOverlayVTC(uv0);`)}
        gl_Position = transformPosition(proj, view, position);`),o.main.add(`${u(y,`if (getCombinedOverlayColor().a < alphaCutoff) discard;`)}`);break;case 5:case 6:case 7:case 8:case 9:t.include(O,e),he(t),C(t),r.main.add(d`gl_Position = transformPositionWithDepth(proj, view, position, nearFar, linearDepth);`),o.main.add(d`outputDepth(linearDepth);`);break;case 4:y&&t.include(B,e),s.add(`vnormal`,`vec3`),ie(r),l(),r.main.add(d`
        ${u(y,`setOverlayVTC(uv0);`)}
        gl_Position = transformPosition(proj, view, position);
        vnormal = normalize((viewNormal * vec4(getNormal(), 1.0)).xyz);`),o.main.add(d`
        ${u(y,`if (getCombinedOverlayColor().a < alphaCutoff) discard;`)}
        vec3 normal = normalize(vnormal);
        if (gl_FrontFacing == false) {
          normal = -normal;
        }
        fragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);`);break;case 10:g&&(t.include(B,e),t.include(we,e)),r.main.add(d`
        ${u(g,`setOverlayVTC(uv0);`)}
        gl_Position = transformPosition(proj, view, position);`),t.include(ue,e),o.main.add(d`
        ${u(g,d`
           calculateOcclusionAndOutputHighlight(getAllOverlayHighlightValuesEncoded());`,`calculateOcclusionAndOutputHighlight();`)}
      `);break;case 11:if(g)t.include(B,e),r.main.add(d`gl_Position = transformPosition(proj, view, position);
setOverlayVTC(uv0);`),o.main.add(d`fragColor = getOverlayColorTexel();`);else{let e=h===0;r.main.add(d`${u(e,`gl_Position = transformPosition(proj, view, position);`)}`),o.main.add(d`fragColor = vec4(0.0);`)}}return t}var Y,X,Z,Q;function $(){return($=e((()=>{l(),o(),r(),n(),S(),w(),g(),E(),A(),se(),V(),D(),le(),Ce(),F(),P(),R(),be(),z(),Te(),q(),y(),_(),f(),v(),de(),oe(),me(),h(),Y=class extends H{constructor(){super(...arguments),this.useStencil=!1}},X=s(),Z=t(),Q=Object.freeze(Object.defineProperty({__proto__:null,TerrainPassParameters:Y,build:J},Symbol.toStringTag,{value:`Module`}))})))()}export{q as a,$ as i,Y as n,V as o,J as r,Q as t};