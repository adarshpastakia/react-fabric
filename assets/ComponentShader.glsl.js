import{n as e}from"./rolldown-runtime.js";import{o as t,r as n}from"./tslib.es6.js";import{i as r,n as i,r as a,t as o}from"./Ellipsoid.js";import{Q as s,Z as c}from"./units.js";import{E as l,l as u,y as d}from"./mathUtils.js";import{O as f,x as ee}from"./vec2.js";import{D as p,O as m}from"./vec3.js";import{o as h,s as g}from"./vec2f64.js";import{n as _,t as v}from"./olidUtils.js";import{n as y,r as b,t as x}from"./glsl.js";import{n as S,t as C}from"./Uniform.js";import{n as te,t as w}from"./ShaderBuilder.js";import{n as T,t as E}from"./Texture2DDrawUniform.js";import{d as ne,p as D}from"./ShaderOutput.js";import{n as O,r as k,t as re}from"./ShaderTechniqueConfiguration.js";import{a as ie,o as ae}from"./Slice.glsl.js";import{n as oe,t as se}from"./Float3BindUniform.js";import{n as ce,t as le}from"./FloatBindUniform.js";import{n as ue,t as de}from"./MixExternalColor.glsl.js";import{n as fe}from"./PiUtils.glsl.js";import{n as pe,t as me}from"./Float2BindUniform.js";import{n as he,t as A}from"./alphaCutoff.glsl.js";import{a as ge,c as _e,i as j,o as ve,r as M,s as ye}from"./Emissions.glsl.js";import{r as be,t as xe}from"./oitResolution.glsl.js";import{n as Se,t as Ce}from"./OutputHighlight.glsl.js";import{n as we,t as Te}from"./Texture2DBindUniform.js";import{n as Ee,t as De}from"./OutputColorHighlightOLID.glsl.js";import{r as Oe,t as ke}from"./ReadDepth.glsl.js";import{h as Ae,i as je,o as Me}from"./DefaultLayouts.js";import{a as Ne,n as N,o as Pe,r as Fe}from"./VertexPosition.glsl.js";import{i as Ie,r as Le}from"./ForwardLinearDepthToWriteShadowMap.glsl.js";import{n as Re,t as ze}from"./VertexColor.glsl.js";import{n as Be,t as Ve}from"./OutputDepth.glsl.js";import{n as He,o as Ue,r as We,s as Ge}from"./DiscardOrAdjustAlpha.glsl.js";import{n as Ke,t as qe}from"./ComputeNormalTexture.glsl.js";import{i as P,r as Je,t as F}from"./EvaluateSceneLighting.glsl.js";import{i as Ye,n as Xe,r as Ze}from"./MainLighting.glsl.js";import{i as Qe,n as $e,r as et,t as tt}from"./SnowCover.glsl.js";import{n as nt,t as rt}from"./ReadShadowMap.glsl.js";import{i as it,n as at,r as I,t as ot}from"./Texture2DUintDrawUniform.js";import{a as st,c as L,i as ct,o as lt,s as R,t as ut}from"./Overlay.glsl.js";import{n as dt,t as ft}from"./SphereIntersect.glsl.js";function pt(e){e.vertex.code.add(b`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${b.int(1)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${b.int(3)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${b.int(4)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${b.int(1)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function z(){return(z=e((()=>{x()})))()}function mt(e,t){switch(t.componentDataType){case 1:return gt(e,t);case 0:return _t(e,t);case 2:return;default:t.componentDataType}}function ht(){return v()?U:H}function gt(e,t){let{vertex:n,fragment:r}=e,{output:i,hasEmission:a}=t,o=i===11,{getTextureAttribute:s,TextureBackedBufferModule:c}=ht();e.include(c,t),e.attributes.add(`componentIndex`,`uint`),e.varyings.add(`vExternalColorMixMode`,`mediump float`),e.varyings.add(`vExternalColor`,`vec4`),o&&e.varyings.add(`vObjectAndLayerIdColor`,`vec4`),a&&(e.varyings.add(`emissiveStrength`,`float`),e.varyings.add(`emissiveSource`,`int`)),e.include(pt),n.include(be,t),n.code.add(b`
  float readElevationOffset() {
    return ${s(`elevationOffset`)};
  }

  void forwardEmissiveStrength() {
    ${y(a,b`emissiveStrength = clamp(${s(`emissiveStrength`)}, 0.0, maxEmissiveStrength);
           emissiveSource = ${s(`emissiveSourceMode`)} == 0u ? 0 : 1;`)}
  }

  void forwardObjectAndLayerIdColor() {
    ${y(o,b`vObjectAndLayerIdColor = vec4(${s(`olidColor`)})/255.0;`)}
  }

  void decodeColorAndCastShadow(uvec4 colorAndCastShadowEncoded, out vec4 color, out bool castShadow) {
    uvec4 componentColor = colorAndCastShadowEncoded;
    castShadow = bool(componentColor.b & 1u);
    componentColor.b = componentColor.b & 254u;
    color = vec4(componentColor);
  }

  vec4 forwardExternalColor(out bool castShadows) {
    vec4 componentColor;
    decodeColorAndCastShadow(${s(`colorAndCastShadows`)}, componentColor, castShadows);

    int decodedColorMixMode;
    vExternalColor = decodeSymbolColor(componentColor, decodedColorMixMode) * 0.003921568627451; // = 1/255;
    vExternalColorMixMode = float(decodedColorMixMode) + 0.5; // add 0.5 to avoid interpolation artifacts

    return vExternalColor;
  }
`),r.code.add(b`
  void readExternalColor(out vec4 externalColor, out int externalColorMixMode) {
    externalColor = vExternalColor;
    externalColorMixMode = int(vExternalColorMixMode);
  }

  void outputObjectAndLayerIdColor() {
     ${o?b`fragColor = vObjectAndLayerIdColor;`:``}
  }
`)}function _t(e,t){let{vertex:n,fragment:r}=e;e.varyings.add(`vExternalColor`,`vec4`),r.uniforms.add(new j(`emissiveStrength`,e=>e.componentParameters.emissiveStrength)),n.uniforms.add(new R(`externalColor`,e=>e.componentParameters.externalColor)).code.add(b`float readElevationOffset() {
return 0.0;
}
void forwardObjectAndLayerIdColor() {}
void forwardEmissiveStrength() {}
vec4 forwardExternalColor(out bool castShadows) {
vExternalColor = externalColor;
castShadows = true;
return externalColor;
}`);let i=t.output===11;r.uniforms.add(new Pe(`externalColorMixMode`,e=>e.componentParameters.externalColorMixMode)).code.add(b`
    void readExternalColor(out vec4 color, out int colorMixMode) {
      color = vExternalColor;
      colorMixMode = externalColorMixMode;
    }

    void outputObjectAndLayerIdColor() {
      ${y(i,`fragColor = vec4(0, 0, 0, 0);`)}
    }
  `)}var B,V,H,U;function W(){return(W=e((()=>{z(),it(),L(),M(),x(),Ne(),at(),_(),Me(),xe(),B=(e,t)=>e===`emissiveSourceMode`||e===`emissiveStrength`?t.hasEmission:e!==`olidColor`||t.output===11,V=new ot(`componentTextureBuffer`,e=>e.textureBackedBuffer?.texture),H=new I({layout:Ae,itemIndexAttribute:`componentIndex`,bufferUniform:V,fieldFilter:B}),U=new I({layout:je,itemIndexAttribute:`componentIndex`,bufferUniform:V,fieldFilter:B})})))()}function G(e,t){let n=e.fragment;switch(t.doubleSidedMode){case 0:n.code.add(b`vec3 _adjustDoublesided(vec3 normal) {
return normal;
}`);break;case 1:e.include(N,t),n.code.add(b`vec3 _adjustDoublesided(vec3 normal) {
return dot(normal, vPositionWorldCameraRelative) > 0.0 ? -normal : normal;
}`);break;case 2:n.code.add(b`vec3 _adjustDoublesided(vec3 normal) {
return gl_FrontFacing ? normal : -normal;
}`);break;default:t.doubleSidedMode;case 3:}switch(t.normalType){case 0:case 1:e.include(Ge,t),n.main.add(b`vec3 fragmentFaceNormal = _adjustDoublesided(normalize(vNormalWorld));
vec3 fragmentFaceNormalView = gl_FrontFacing ? normalize(vNormalView) : -normalize(vNormalView);`);break;case 2:e.include(N,t),n.main.add(b`vec3 fragmentFaceNormal = normalize(cross(dFdx(vPositionWorldCameraRelative), dFdy(vPositionWorldCameraRelative)));
vec3 fragmentFaceNormalView = normalize(cross(dFdx(vPosition_view), dFdy(vPosition_view)));`)}switch(t.shadeNormals){case 3:case 1:n.main.add(b`vec3 fragmentShadingNormal = fragmentFaceNormal;`);break;case 2:e.include(N,t),n.uniforms.add(new ce(`worldUpShading`,e=>l(20*(e.lighting.noonFactor-.9),0,1))).main.add(b`
            vec3 fragmentShadingNormal = fragmentFaceNormal;
            if (worldUpShading > 0.0){
              vec3 worldUpNormal = ${y(t.spherical,`normalize(positionWorld())`,`vec3(0.0, 0.0, 1.0)`)};
              fragmentShadingNormal = mix(fragmentShadingNormal, worldUpNormal, worldUpShading);
            }
          `);break;case 0:t.spherical?(e.include(N,t),n.main.add(b`vec3 fragmentShadingNormal = normalize(positionWorld());`)):n.main.add(b`vec3 fragmentShadingNormal = vec3(0.0, 0.0, 1.0);`);break;default:t.shadeNormals}}function K(){return(K=e((()=>{d(),Ue(),Fe(),le(),x()})))()}function vt(e,t){e.include(Re,t),e.fragment.include(ue);let n=e.fragment;n.uniforms.add(new R(`baseColor`,e=>e.baseColor)),n.uniforms.add(new j(`objectOpacity`,e=>e.opacity)),t.hasVertexColors?n.code.add(b`vec3 _baseColor() {
return baseColor.rgb * vColor.rgb;
}
float _baseOpacity() {
return baseColor.a * vColor.a;
}`):n.code.add(b`vec3 _baseColor() {
return baseColor.rgb;
}
float _baseOpacity() {
return baseColor.a;
}`),n.code.add(b`vec4 computeMaterialColor(vec4 textureColor, vec4 externalColor, int externalColorMixMode) {
vec3 baseColor = _baseColor();
float baseOpacity = _baseOpacity();
vec3 color = mixExternalColor(
baseColor,
textureColor.rgb,
externalColor.rgb,
externalColorMixMode
);
float opacity = objectOpacity * mixExternalOpacity(
baseOpacity,
textureColor.a,
externalColor.a,
externalColorMixMode
);
return vec4(color, opacity);
}`)}function q(){return(q=e((()=>{ze(),de(),L(),M(),x()})))()}function yt(e,t){t.hasColorTexture&&(D(t.output)||t.alphaDiscardMode!==1)?(e.include(ve,t),e.fragment.uniforms.add(new E(`baseColorTexture`,e=>e.texture,e=>e.textureSampler)).code.add(b`vec4 readBaseColorTexture() { return textureLookup(baseColorTexture, vuv0); }`)):e.fragment.code.add(b`vec4 readBaseColorTexture() { return vec4(1.0); }`)}function J(){return(J=e((()=>{ge(),x(),T()})))()}var Y;function bt(){return(bt=e((()=>{S(),Y=class extends C{constructor(e,t){super(e,`bool`,2,(n,r,i)=>n.setUniform1b(e,t(r,i)))}}})))()}function xt(e,t){e.fragment.uniforms.add(new me(`cameraHeights`,e=>{let n=e.camera,r=m(n.eye),i=Math.sqrt(r),a=X(t)*c,o=r-a*a,s=u(Q,wt,i-a);return s=Math.min(s,.98),f(Ct,s,o)}),new se(`cameraPosition`,e=>e.camera.eye)),e.fragment.include(ft),e.fragment.code.add(b`float sphereDepthInterpolate(vec3 worldRay, vec3 viewRay, float currentLinearDepth) {
vec2 rayPlanetIntersect = sphereIntersect(cameraPosition, worldRay, cameraHeights[1]);
bool hitsPlanet = (rayPlanetIntersect.x <= rayPlanetIntersect.y) && rayPlanetIntersect.x > 0.0;
if (hitsPlanet) {
float sphereDepth = rayPlanetIntersect.x;
viewRay *= viewRay.z*sphereDepth;
float linearDepth = length(viewRay);
float sphereFade = cameraHeights[0];
return (-linearDepth) * sphereFade + currentLinearDepth * (1.0 - sphereFade);
}
return currentLinearDepth;
}`)}function X({ellipsoidMode:e}){switch(e){case 4:case 1:return r.radius;case 2:return o.radius;case 3:return a.radius}}function St(e,t){let{eye:n}=e;return Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2])-X(t)*c>Q}var Z,Ct,Q,wt;function $(){return($=e((()=>{t(),d(),ee(),h(),p(),s(),i(),pe(),oe(),x(),k(),dt(),Z=class extends re{constructor(){super(...arguments),this.ellipsoidMode=1}},n([O({count:4})],Z.prototype,`ellipsoidMode`,void 0),Ct=g(),Q=4e6,wt=5e6})))()}function Tt(e){let t=new te,{vertex:n,fragment:r}=t;t.include(N,e),t.include(Ge,e),t.include(Re,e),t.include(ye,e),t.include(mt,e),t.include(We,e),r.include(ae,e),t.include(yt,e);let{output:i,pbrMode:a,hasNormalTexture:o,snowCover:s,receiveShadows:c,shadeNormals:l,spherical:u,sphericalSR:d,overlayEnabled:f,componentDataType:ee,vertexDiscardMode:p,renderOccluded:m,isGroundSlice:h}=e,g=a===1||a===2;g&&(t.include(Qe,e),o&&t.include(qe,e));let _=ne(i),v=i===11,x=_&&ee===1,S=X(e);f&&(r.include(P,e),t.include(ct,e),n.include(fe),n.uniforms.add(new Y(`useENUForGlobalOverlayUV`,e=>e.useENUForGlobalOverlayUV)),r.uniforms.add(new Y(`useENUForGlobalOverlayUV`,e=>e.useENUForGlobalOverlayUV)),n.constants.add(`invRadius`,`float`,1/S).code.add(`vec2 projectOverlay(vec3 pos) { return pos.xy ${y(u,`/ (1.0 + invRadius * pos.z)`)}; }`));let C=f&&D(i)&&a===4;C&&(t.varyings.add(`tbnTangent`,`vec3`),t.varyings.add(`tbnBiTangent`,`vec3`),t.varyings.add(`groundNormal`,`vec3`));let w=p===0,T=p===2;if(t.include(rt,e),t.include(Ie,e),n.include(A),n.main.add(b`
    bool castShadows;
    vec4 externalColor = forwardExternalColor(castShadows);
    ${y(x,`if(!castShadows) { gl_Position = vec4(vec3(1e38), 1.0); return; }`)}
    ${y(!w,`if (externalColor.a ${T?`>`:`<=`} opacityCutoff) {\n         gl_Position = vec4(vec3(1e38), 1.0); return;\n       }`)}
    ${y(v,`externalColor.a = 1.0;`)}

    forwardPosition(readElevationOffset());
    forwardNormal();
    forwardTextureCoordinates();
    forwardVertexColor();
    forwardLinearDepthToReadShadowMap();
    forwardLinearDepthToWriteShadowMap();
    forwardEmissiveStrength();
    forwardObjectAndLayerIdColor();
    ${y(C,u?b`
            groundNormal = normalize(positionWorld());
            tbnTangent = normalize(cross(vec3(0.0, 0.0, 1.0), groundNormal));
            tbnBiTangent = normalize(cross(groundNormal, tbnTangent));`:b`
            groundNormal = vec3(0.0, 0.0, 1.0);
            tbnTangent = vec3(1.0, 0.0, 0.0);
            tbnBiTangent = vec3(0.0, 1.0, 0.0);`)}
    ${y(f,y(u,`
        if (useENUForGlobalOverlayUV) {
          setOverlayVTC(projectOverlay(positionForDraping()));
        } else {
          vtcOverlay = vec4(0.0); // Definite assignment
        }
      `,`setOverlayVTC(projectOverlay(positionForDraping()));`))}

    if (externalColor.a < alphaCutoff) {
      // Discard this vertex
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    }
  `),D(i))return t.include(vt,e),t.include(G,e),t.include(Ee,e),r.include(P,e),r.include(tt,e),r.include(A),r.constants.add(`pRadius`,`float`,S).code.add(b`
      float evaluateShadow() {
        return ${c?`readShadowMap(vPositionWorldCameraRelative, linearDepth)`:`0.0`};
      }
    `).main.add(b`
      ${y(!h,`discardBySlice(vPositionWorldCameraRelative);`)}

      vec4 textureColor = readBaseColorTexture();
      discardOrAdjustAlpha(textureColor);

      // When rendering the occluded overlay, we still need to read the base color texture because we need to use the
      // same discard logic. However after that to render only the draped overlay, we simply set the base texture color
      // to zero.
      ${y(m,b`textureColor = vec4(0);`)}

      ${y(f,b`
        ${y(u,b`
            vec4 overlayUVs;
            if (useENUForGlobalOverlayUV) {
              overlayUVs = vtcOverlay;
            } else {
              const float rad2deg1 = 180.0 / PI;

              vec3 wPos = positionWorld();

              float oRadius = length(wPos.xyz);
              float oLonRad = atan(wPos.y, wPos.x);
              float sinLat = wPos.z / oRadius;

              ${y(d===1,b`
                  const float halfSemiMajorAxis = 0.5 * pRadius;
                  vec2 posWM = vec2(
                    oLonRad * pRadius,
                    halfSemiMajorAxis * log((1.0 + sinLat) / (1.0 - sinLat))
                  );

                  vec2 overlayUV = posWM;
              `,b`
                float oLatRad = asin(clamp(sinLat,-1.0,1.0));
                vec2 posWgs84 = vec2(rad2deg1 * oLonRad, rad2deg1 * oLatRad);
                vec2 overlayUV = posWgs84;
              `)}
              overlayUVs = vec4(overlayUV, overlayUV) * overlayTexScale + overlayTexOffset;
            }
          `,b`vec4 overlayUVs = vtcOverlay;`)}

        vec4 overlayColor = getOverlayColor(ovColorTex, overlayUVs);

        /* Early discard to only emit when we have overlay */
        ${y(m,b`if (overlayColor.a < alphaCutoff) { discard; }`)}
        `)}

      vec4 externalColor;
      int externalColorMixMode;
      readExternalColor(externalColor, externalColorMixMode);

      vec4 materialColor = computeMaterialColor(textureColor, externalColor, externalColorMixMode);
    `),g?(Ze(r),u&&F(r),r.main.add(b`
        applyPBRFactors();
        ${y(a===1,b`if (externalColorMixMode == 3) {
              mrr = vec3(0.0, 0.6, 0.2);
            }`)}
        float additionalIrradiance = 0.02 * mainLightIntensity[2];
        ${y(o,`mat3 tangentSpace = computeTangentSpace(fragmentFaceNormal, vPositionWorldCameraRelative, vuv0);`)}
        vec3 shadingNormal = ${o?`computeTextureNormal(tangentSpace, vuv0)`:`fragmentShadingNormal`};
        vec3 groundNormal = ${u?b`normalize(positionWorld())`:b`vec3(0.0, 0.0, 1.0)`};

        vec3 viewDir = normalize(vPositionWorldCameraRelative);
        float ssao = 1.0 - occlusion * evaluateAmbientOcclusionInverse();
        ${y(s,b`float snow = getSnow(fragmentFaceNormal, normalize(positionWorld()));
                 materialColor.rgb = mix(materialColor.rgb, vec3(1.1), snow);
                 ssao = mix(ssao, 0.5 * ssao, snow);
                 shadingNormal = mix(shadingNormal, fragmentFaceNormal, snow);`)}
        ${y(f,`materialColor = materialColor * (1.0 - overlayColor.a) + overlayColor;`)}

        vec3 additionalLight = evaluateAdditionalLighting(ssao, positionWorld());
        ${y(u,`float additionalAmbientScale = additionalDirectedAmbientLight(positionWorld());`)}
        ${u?b`float shadow = max(lightingGlobalFactor * (1.0 - additionalAmbientScale), evaluateShadow());`:`float shadow = evaluateShadow();`}
        vec4 shadedColor = vec4(evaluateSceneLightingPBR(shadingNormal, materialColor.rgb, shadow, ssao, additionalLight, viewDir, groundNormal, mrr, additionalIrradiance), materialColor.a);
        `)):(Ye(r),u&&F(r),C&&r.uniforms.add(new Te(`ovNormalTex`,e=>e.overlay?.getTexture(3))),r.main.add(b`
        ${y(u,`float additionalAmbientScale = additionalDirectedAmbientLight(positionWorld());`)}
        float shadow = ${c?u?`max(lightingGlobalFactor * (1.0 - additionalAmbientScale), evaluateShadow())`:`evaluateShadow()`:u?`lightingGlobalFactor * (1.0 - additionalAmbientScale)`:`0.0`};

        ${y(c&&l!==1,b`
            float dotFL = dot(fragmentFaceNormal, mainLightDirection);
            if( dotFL <= 0.0) shadow = 1.0;
        `)}
        ${y(s,b`float snow = getSnow(fragmentFaceNormal, normalize(positionWorld()));
               materialColor.rgb = mix(materialColor.rgb, vec3(1), snow);`)}

        // At global scale we create some additional ambient light based on the main light to simulate global illumination
        float ssao = evaluateAmbientOcclusion();
        vec3 additionalLight = evaluateAdditionalLighting(ssao, positionWorld());

        ${y(f,`materialColor = materialColor * (1.0 - overlayColor.a) + overlayColor;`)}

        vec4 shadedColor = vec4(evaluateSceneLighting(fragmentShadingNormal, materialColor.rgb, shadow, ssao, additionalLight), materialColor.a);
        ${y(C,b`vec4 overlayWaterMask = getOverlayColor(ovNormalTex, overlayUVs);
                 float waterNormalLength = length(overlayWaterMask);
                 if (waterNormalLength > 0.95) {
                   mat3 tbnMatrix = mat3(tbnTangent, tbnBiTangent, groundNormal);
                   vec4 waterColorLinear = getOverlayWaterColor(overlayWaterMask, overlayColor, -normalize(vPositionWorldCameraRelative), shadow, groundNormal, tbnMatrix, vPosition_view, positionWorld());
                   vec4 waterColorNonLinear = delinearizeGamma(vec4(waterColorLinear.xyz, 1.0));
                   // un-gamma the ground color to mix in linear space
                   shadedColor = mix(shadedColor, waterColorNonLinear, waterColorLinear.w);
                 }`)}
      `)),r.main.add(`\n      ${y(h,`if(rejectBySlice(vPositionWorldCameraRelative)) shadedColor.a *= groundSliceOpacity;`)}\n\n      outputColorHighlightOLID(applySlice(shadedColor, vPositionWorldCameraRelative), materialColor.rgb ${y(s,`, snow`)});\n    `),e.sphereDepthInterpolate&&(t.include(xt,e),t.fragment.include(ke),r.main.add(b`vec3 worldRay = normalize(vPositionWorldCameraRelative);
vec3 viewRay = normalize(vPosition_view);
gl_FragDepth = delinearizeDepth(sphereDepthInterpolate(worldRay, viewRay, linearizeDepth(gl_FragCoord.z)));`)),t;let E=i===4,O=i===10,k=_||i===8||i===9;return k&&t.include(Ve,e),E&&t.include(G,e),f&&t.include(lt,e),t.include(Ce,e),r.main.add(b`
    ${y(!h,`discardBySlice(vPositionWorldCameraRelative);`)}

    vec4 textureColor = readBaseColorTexture();
    discardOrAdjustAlpha(textureColor);

    ${y(k,`outputDepth(linearDepth);`)}
    ${y(E,b`fragColor = vec4(vec3(0.5) + 0.5 * fragmentFaceNormalView, 1.0);`)}
    ${y(v,f?`fragColor = getOverlayColorTexel();`:`outputObjectAndLayerIdColor();`)}
    ${y(O,y(f,b`calculateOcclusionAndOutputHighlight(getAllOverlayHighlightValuesEncoded());`,b`calculateOcclusionAndOutputHighlight();`))}`),t}var Et;function Dt(){return(Dt=e((()=>{W(),Le(),ie(),_e(),ze(),Ue(),Fe(),Be(),Se(),st(),Oe(),K(),q(),Ke(),Je(),Xe(),et(),J(),nt(),ut(),He(),bt(),x(),we(),$e(),he(),De(),$(),w(),Et=Object.freeze(Object.defineProperty({__proto__:null,build:Tt},Symbol.toStringTag,{value:`Module`}))})))()}export{Z as a,q as c,$ as i,K as l,Tt as n,St as o,Dt as r,J as s,Et as t,W as u};