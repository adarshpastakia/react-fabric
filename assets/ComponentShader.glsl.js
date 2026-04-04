import{n as e}from"./chunk.js";import{i as t,l as n}from"./tslib.es6.js";import{i as r,n as i,r as a,t as o}from"./Ellipsoid.js";import{X as s,Y as c}from"./units.js";import{r as l,v as u}from"./mathUtils.js";import{b as d,h as f}from"./vec2.js";import{D as p,E as m}from"./vec3.js";import{a as h,r as g}from"./vec2f64.js";import{a as _,o as ee,s as v}from"./ShaderOutput.js";import{n as y,r as b,t as x}from"./glsl.js";import{a as te,i as S,o as C,r as w}from"./Emissions.glsl.js";import{n as T,t as E}from"./Uniform.js";import{n as D,t as O}from"./FloatDrawUniform.js";import{n as ne,t as k}from"./Texture2DDrawUniform.js";import{n as re,t as ie}from"./ShaderBuilder.js";import{n as ae,t as oe}from"./olidUtils.js";import{n as se,r as ce,t as le}from"./ShaderTechniqueConfiguration.js";import{a as ue,r as de}from"./Slice.glsl.js";import{n as fe,t as pe}from"./Float3BindUniform.js";import{n as me,t as he}from"./MixExternalColor.glsl.js";import{n as ge,t as _e}from"./PiUtils.glsl.js";import{n as ve,t as ye}from"./Float2BindUniform.js";import{n as be,t as xe}from"./ReadDepth.glsl.js";import{n as Se,t as Ce}from"./Texture2DBindUniform.js";import{n as we,t as Te}from"./TerrainDepthTest.glsl.js";import{n as Ee,t as De}from"./OutputHighlight.glsl.js";import{n as Oe,t as ke}from"./AlphaCutoff.js";import{n as Ae,t as je}from"./OutputColorHighlightOLID.glsl.js";import{h as Me,i as Ne,o as Pe}from"./DefaultLayouts.js";import{i as Fe,r as Ie}from"./ForwardLinearDepthToWriteShadowMap.glsl.js";import{n as A,r as j}from"./VertexPosition.glsl.js";import{n as M,t as N}from"./VertexColor.glsl.js";import{n as Le,t as Re}from"./OutputDepth.glsl.js";import{a as P,n as ze,o as F,r as Be}from"./DiscardOrAdjustAlpha.glsl.js";import{n as Ve,t as He}from"./ComputeNormalTexture.glsl.js";import{i as I,n as Ue,t as L}from"./EvaluateSceneLighting.glsl.js";import{i as We,n as Ge,r as Ke}from"./MainLighting.glsl.js";import{i as qe,n as Je,r as Ye,t as Xe}from"./SnowCover.glsl.js";import{i as Ze,n as Qe}from"./ReadShadowMap.glsl.js";import{n as $e,t as et}from"./SphereIntersect.glsl.js";import{i as R,n as tt,r as nt,t as rt}from"./Texture2DUintDrawUniform.js";import{a as it,c as z,i as at,o as ot,s as B,t as st}from"./Overlay.glsl.js";function ct(e){e.vertex.code.add(b`
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
  `)}var lt=e((()=>{x()})),V,ut=e((()=>{T(),V=class extends E{constructor(e,t){super(e,`int`,2,(n,r,i)=>n.setUniform1i(e,t(r,i)))}}}));function dt(e,t){switch(t.componentDataType){case 1:return pt(e,t);case 0:return mt(e,t);case 2:return;default:t.componentDataType}}function ft(){return oe()?G:W}function pt(e,t){let{vertex:n,fragment:r}=e,{output:i,hasEmission:a}=t,o=i===9,{getTextureAttribute:s,TextureBackedBufferModule:c}=ft();e.include(c,t),e.attributes.add(`componentIndex`,`uint`),e.varyings.add(`vExternalColorMixMode`,`mediump float`),e.varyings.add(`vExternalColor`,`vec4`),o&&e.varyings.add(`vObjectAndLayerIdColor`,`vec4`),a&&(e.varyings.add(`emissiveStrength`,`float`),e.varyings.add(`emissiveSource`,`int`)),e.include(ct),n.code.add(b`
  float readElevationOffset() {
    return ${s(`elevationOffset`)};
  }

  void forwardEmissiveStrength() {
    ${y(a,b`emissiveStrength = ${s(`emissiveStrength`)};
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
`)}function mt(e,t){let{vertex:n,fragment:r}=e;e.varyings.add(`vExternalColor`,`vec4`),r.uniforms.add(new D(`emissiveStrength`,e=>e.componentParameters.emissiveStrength)),n.uniforms.add(new B(`externalColor`,e=>e.componentParameters.externalColor)).code.add(b`float readElevationOffset() {
return 0.0;
}
void forwardObjectAndLayerIdColor() {}
void forwardEmissiveStrength() {}
vec4 forwardExternalColor(out bool castShadows) {
vExternalColor = externalColor;
castShadows = true;
return externalColor;
}`);let i=t.output===9;r.uniforms.add(new V(`externalColorMixMode`,e=>e.componentParameters.externalColorMixMode)).code.add(b`
    void readExternalColor(out vec4 color, out int colorMixMode) {
      color = vExternalColor;
      colorMixMode = externalColorMixMode;
    }

    void outputObjectAndLayerIdColor() {
      ${y(i,`fragColor = vec4(0, 0, 0, 0);`)}
    }
  `)}var H,U,W,G,K=e((()=>{lt(),nt(),z(),O(),x(),ut(),tt(),ae(),Pe(),H=(e,t)=>e===`emissiveSourceMode`||e===`emissiveStrength`?t.hasEmission:e!==`olidColor`||t.output===9,U=new rt(`componentTextureBuffer`,e=>e.textureBackedBuffer?.texture),W=new R({layout:Me,itemIndexAttribute:`componentIndex`,bufferUniform:U,fieldFilter:H}),G=new R({layout:Ne,itemIndexAttribute:`componentIndex`,bufferUniform:U,fieldFilter:H})}));function q(e,t){let n=e.fragment;switch(t.doubleSidedMode){case 0:n.code.add(b`vec3 _adjustDoublesided(vec3 normal) {
return normal;
}`);break;case 1:e.include(A,t),n.code.add(b`vec3 _adjustDoublesided(vec3 normal) {
return dot(normal, vPositionWorldCameraRelative) > 0.0 ? -normal : normal;
}`);break;case 2:n.code.add(b`vec3 _adjustDoublesided(vec3 normal) {
return gl_FrontFacing ? normal : -normal;
}`);break;default:t.doubleSidedMode;case 3:}switch(t.normalType){case 0:case 1:e.include(P,t),n.main.add(b`vec3 fragmentFaceNormal = _adjustDoublesided(normalize(vNormalWorld));
vec3 fragmentFaceNormalView = gl_FrontFacing ? normalize(vNormalView) : -normalize(vNormalView);`);break;case 2:e.include(A,t),n.main.add(b`vec3 fragmentFaceNormal = normalize(cross(dFdx(vPositionWorldCameraRelative), dFdy(vPositionWorldCameraRelative)));
vec3 fragmentFaceNormalView = normalize(cross(dFdx(vPosition_view), dFdy(vPosition_view)));`)}t.shadeNormals?n.main.add(b`vec3 fragmentShadingNormal = fragmentFaceNormal;`):t.spherical?(e.include(A,t),n.main.add(b`vec3 fragmentShadingNormal = normalize(positionWorld());`)):n.main.add(b`vec3 fragmentShadingNormal = vec3(0.0, 0.0, 1.0);`)}var J=e((()=>{F(),j(),x()}));function ht(e,t){e.include(M,t),e.fragment.include(he);let n=e.fragment;n.uniforms.add(new B(`baseColor`,e=>e.baseColor)),n.uniforms.add(new D(`objectOpacity`,e=>e.opacity)),t.hasVertexColors?n.code.add(b`vec3 _baseColor() {
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
}`)}var Y=e((()=>{N(),me(),z(),O(),x()}));function gt(e,t){let n=t.hasColorTexture&&(v(t.output)||t.alphaDiscardMode!==1);n&&(e.include(S,t),e.fragment.uniforms.add(new k(`baseColorTexture`,e=>e.texture))),e.fragment.code.add(b`
    vec4 readBaseColorTexture() {
      return ${n?`textureLookup(baseColorTexture, vuv0)`:`vec4(1.0)`};
    }
  `)}var X=e((()=>{_(),w(),x(),ne()})),Z,_t=e((()=>{T(),Z=class extends E{constructor(e,t){super(e,`bool`,2,(n,r,i)=>n.setUniform1b(e,t(r,i)))}}}));function vt(e,t){e.fragment.uniforms.add(new ye(`cameraHeights`,e=>{let n=e.camera,r=p(n.eye),i=Math.sqrt(r),a=yt(t)*c,o=r-a*a,s=l(4e6,5e6,i-a);return s=Math.min(s,.98),d(bt,s,o)}),new pe(`cameraPosition`,e=>e.camera.eye)),e.fragment.include(et),e.fragment.code.add(b`float sphereFade() {return cameraHeights[0];}
float sphereDepthInterpolate(vec3 worldRay, vec3 viewRay, float currentLinearDepth) {
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
}`)}function yt({ellipsoidMode:e}){switch(e){case 4:case 1:return r.radius;case 2:return o.radius;case 3:return a.radius}}var Q,bt,xt=e((()=>{n(),u(),f(),g(),m(),s(),i(),ve(),fe(),x(),ce(),$e(),Q=class extends le{constructor(){super(...arguments),this.ellipsoidMode=1}},t([se({count:4})],Q.prototype,`ellipsoidMode`,void 0),bt=h()}));function St(e){let t=new re,{vertex:n,fragment:r}=t;t.include(A,e),t.include(P,e),t.include(M,e),t.include(te,e),t.include(dt,e),t.include(Be,e),r.include(ue,e),t.include(gt,e),t.include(Te,e);let{output:i,pbrMode:a,hasNormalTexture:o,snowCover:s,receiveShadows:c,shadeNormals:l,spherical:u,sphericalSR:d,overlayEnabled:f,componentDataType:p,vertexDiscardMode:m,renderOccluded:h,isGroundSlice:g}=e,_=a===1||a===2;_&&(t.include(qe,e),o&&t.include(He,e));let x=ee(i),S=x&&p===1,C=yt(e);f&&(r.include(I,e),t.include(at,e),n.include(ge),n.uniforms.add(new Z(`useENUForGlobalOverlayUV`,e=>e.useENUForGlobalOverlayUV)),r.uniforms.add(new Z(`useENUForGlobalOverlayUV`,e=>e.useENUForGlobalOverlayUV)),n.constants.add(`invRadius`,`float`,1/C).code.add(`vec2 projectOverlay(vec3 pos) { return pos.xy ${y(u,`/ (1.0 + invRadius * pos.z)`)}; }`));let w=f&&v(i)&&a===4;w&&(t.varyings.add(`tbnTangent`,`vec3`),t.varyings.add(`tbnBiTangent`,`vec3`),t.varyings.add(`groundNormal`,`vec3`));let T=m===0,E=m===2;if(t.include(Ze,e),t.include(Fe,e),n.main.add(b`
    bool castShadows;
    vec4 externalColor = forwardExternalColor(castShadows);
    ${y(S,`if(!castShadows) { gl_Position = vec4(vec3(1e38), 1.0); return; }`)}
    ${y(!T,`{ if (externalColor.a ${E?`>`:`<=`} ${b.float(1-1/255)}) { gl_Position = vec4(vec3(1e38), 1.0); return; } }`)}
    ${y(i===9,`externalColor.a = 1.0;`)}

    forwardPosition(readElevationOffset());
    forwardViewPosDepth(vPosition_view);
    forwardNormal();
    forwardTextureCoordinates();
    forwardVertexColor();
    forwardLinearDepthToReadShadowMap();
    forwardLinearDepthToWriteShadowMap();
    forwardEmissiveStrength();
    forwardObjectAndLayerIdColor();
    ${y(w,u?b`
            groundNormal = normalize(positionWorld());
            tbnTangent = normalize(cross(vec3(0.0, 0.0, 1.0), groundNormal));
            tbnBiTangent = normalize(cross(groundNormal, tbnTangent));`:b`
            groundNormal = vec3(0.0, 0.0, 1.0);
            tbnTangent = vec3(1.0, 0.0, 0.0);
            tbnBiTangent = vec3(0.0, 1.0, 0.0);`)}
    ${y(f,y(u,`
        if (useENUForGlobalOverlayUV) {
          setOverlayVTC(projectOverlay(position));
        } else {
          vtcOverlay = vec4(0.0); // Definite assignment
        }
      `,`setOverlayVTC(projectOverlay(position));`))}

    if (externalColor.a < ${b.float(.003913894324853229)}) {
      // Discard this vertex
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    }
  `),v(i))return t.include(ht,e),t.include(q,e),r.include(I,e),t.include(je,e),r.include(Xe,e),r.constants.add(`pRadius`,`float`,C).code.add(b`
      float evaluateShadow() {
        return ${c?`readShadowMap(vPositionWorldCameraRelative, linearDepth)`:`0.0`};
      }
    `).main.add(b`
      ${y(!g,`discardBySlice(vPositionWorldCameraRelative);`)}
      discardByTerrainDepth();

      vec4 textureColor = readBaseColorTexture();
      discardOrAdjustAlpha(textureColor);

      // When rendering the occluded overlay, we still need to read the base color texture because we need to use the
      // same discard logic. However after that to render only the draped overlay, we simply set the base texture color
      // to zero.
      ${y(h,b`textureColor = vec4(0);`)}

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
        ${y(h,b`if (overlayColor.a < ${b.float(Oe)}) { discard; }`)}
        `)}

      vec4 externalColor;
      int externalColorMixMode;
      readExternalColor(externalColor, externalColorMixMode);

      vec4 materialColor = computeMaterialColor(textureColor, externalColor, externalColorMixMode);
    `),_?(Ke(r),u&&L(r),r.main.add(b`
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
        `)):(We(r),u&&L(r),w&&r.uniforms.add(new Ce(`ovNormalTex`,e=>e.overlay?.getTexture(3))),r.main.add(b`
        ${y(u,`float additionalAmbientScale = additionalDirectedAmbientLight(positionWorld());`)}
        float shadow = ${c?u?`max(lightingGlobalFactor * (1.0 - additionalAmbientScale), evaluateShadow())`:`evaluateShadow()`:u?`lightingGlobalFactor * (1.0 - additionalAmbientScale)`:`0.0`};

        ${y(c&&!l,b`
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
        ${y(w,b`vec4 overlayWaterMask = getOverlayColor(ovNormalTex, vtcOverlay);
                 float waterNormalLength = length(overlayWaterMask);
                 if (waterNormalLength > 0.95) {
                   mat3 tbnMatrix = mat3(tbnTangent, tbnBiTangent, groundNormal);
                   vec4 waterColorLinear = getOverlayWaterColor(overlayWaterMask, overlayColor, -normalize(vPositionWorldCameraRelative), shadow, groundNormal, tbnMatrix, vPosition_view, positionWorld());
                   vec4 waterColorNonLinear = delinearizeGamma(vec4(waterColorLinear.xyz, 1.0));
                   // un-gamma the ground color to mix in linear space
                   shadedColor = mix(shadedColor, waterColorNonLinear, waterColorLinear.w);
                 }`)}
      `)),r.main.add(`\n      ${y(g,`if(rejectBySlice(vPositionWorldCameraRelative)) shadedColor.a *= groundSliceOpacity;`)}\n\n      outputColorHighlightOLID(applySlice(shadedColor, vPositionWorldCameraRelative), materialColor.rgb ${y(s,`, snow`)});\n    `),e.sphereDepthInterpolate&&(t.include(vt,e),t.fragment.include(xe),r.main.add(b`if (sphereFade()>0.0) {
vec3 worldRay = normalize(vPositionWorldCameraRelative);
vec3 viewRay = normalize(vPosition_view);
gl_FragDepth = delinearizeDepth(sphereDepthInterpolate(worldRay, viewRay, linearizeDepth(gl_FragCoord.z)));
} else {
gl_FragDepth = gl_FragCoord.z;
}`)),t;let D=i===2,O=i===9,ne=i===8,k=x||i===6||i===7;return k&&t.include(Re,e),D&&t.include(q,e),f&&t.include(ot,e),t.include(De,e),r.main.add(b`
    ${y(!g,`discardBySlice(vPositionWorldCameraRelative);`)}

    vec4 textureColor = readBaseColorTexture();
    discardOrAdjustAlpha(textureColor);

    ${y(k,`outputDepth(linearDepth);`)}
    ${y(D,b`fragColor = vec4(vec3(0.5) + 0.5 * fragmentFaceNormalView, 1.0);`)}
    ${y(O,f?`fragColor = getOverlayColorTexel();`:`outputObjectAndLayerIdColor();`)}
    ${y(ne,y(f,b`calculateOcclusionAndOutputHighlight(getAllOverlayHighlightValuesEncoded());`,b`calculateOcclusionAndOutputHighlight();`))}`),t}var $,Ct=e((()=>{K(),Ie(),_(),de(),C(),N(),F(),j(),Le(),Ee(),it(),be(),J(),Y(),Ve(),Ue(),Ge(),Ye(),_e(),X(),Qe(),we(),st(),ze(),_t(),x(),Se(),Je(),Ae(),xt(),ie(),ke(),$=Object.freeze(Object.defineProperty({__proto__:null,build:St},Symbol.toStringTag,{value:`Module`}))}));export{Q as a,J as c,xt as i,K as l,$ as n,X as o,Ct as r,Y as s,St as t};