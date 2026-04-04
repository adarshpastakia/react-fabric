import{n as e}from"./chunk.js";import{i as t,n}from"./mat3f64.js";import{a as r,s as ee}from"./ShaderOutput.js";import{n as i,r as a,t as o}from"./glsl.js";import{a as te,o as s}from"./Emissions.glsl.js";import{n as c,t as l}from"./Float3PassUniform.js";import{n as u,t as d}from"./FloatPassUniform.js";import{n as f,t as ne}from"./Texture2DPassUniform.js";import{n as p,t as m}from"./ShaderBuilder.js";import{n as re,r as h}from"./Slice.glsl.js";import{n as g,r as _}from"./MaterialUtil.js";import{a as v,n as y,o as b,s as x,t as S}from"./VisualVariables.glsl.js";import{n as C,t as ie}from"./Float4PassUniform.js";import{n as w,t as T}from"./Matrix3PassUniform.js";import{n as E,r as D,t as O}from"./View.glsl.js";import{n as k,t as A}from"./MixExternalColor.glsl.js";import{n as j,t as M}from"./TerrainDepthTest.glsl.js";import{n as N,t as P}from"./AlphaCutoff.js";import{n as F,t as I}from"./OutputColorHighlightOLID.glsl.js";import{i as L,r as R}from"./VerticalOffset.glsl.js";import{n as z,t as B}from"./Transform.glsl.js";import{n as V,t as H}from"./VertexColor.glsl.js";import{n as U,t as W}from"./NormalAttribute.glsl.js";import{a as G,n as K,o as q,t as J}from"./DiscardOrAdjustAlpha.glsl.js";import{a as Y,c as ae,i as oe,l as se,n as ce,o as le,r as ue,s as de,t as fe,u as pe}from"./DefaultMaterialAuxiliaryPasses.glsl.js";import{n as me,r as he}from"./ComputeNormalTexture.glsl.js";import{n as ge,r as _e}from"./PhysicallyBasedRendering.glsl.js";import{a as ve,i as ye,n as be,o as xe,r as Se,t as Ce}from"./EvaluateSceneLighting.glsl.js";import{n as we,r as Te}from"./MainLighting.glsl.js";import{n as Ee,t as De}from"./Normals.glsl.js";import{i as Oe,n as ke,r as Ae,t as X}from"./SnowCover.glsl.js";import{i as je,n as Me,t as Ne}from"./ReadShadowMap.glsl.js";function Pe(e,n){n.hasColorTextureTransform?(e.varyings.add(`colorUV`,`vec2`),e.vertex.uniforms.add(new w(`colorTextureTransformMatrix`,e=>e.colorTextureTransformMatrix??t)).code.add(a`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(a`void forwardColorUV(){}`)}function Fe(e,n){n.hasNormalTextureTransform&&n.textureCoordinateType!==0?(e.varyings.add(`normalUV`,`vec2`),e.vertex.uniforms.add(new w(`normalTextureTransformMatrix`,e=>e.normalTextureTransformMatrix??t)).code.add(a`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(a`void forwardNormalUV(){}`)}function Ie(e,n){n.hasEmissionTextureTransform&&n.textureCoordinateType!==0?(e.varyings.add(`emissiveUV`,`vec2`),e.vertex.uniforms.add(new w(`emissiveTextureTransformMatrix`,e=>e.emissiveTextureTransformMatrix??t)).code.add(a`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(a`void forwardEmissiveUV(){}`)}function Le(e,n){n.hasOcclusionTextureTransform&&n.textureCoordinateType!==0?(e.varyings.add(`occlusionUV`,`vec2`),e.vertex.uniforms.add(new w(`occlusionTextureTransformMatrix`,e=>e.occlusionTextureTransformMatrix??t)).code.add(a`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(a`void forwardOcclusionUV(){}`)}function Re(e,n){n.hasMetallicRoughnessTextureTransform&&n.textureCoordinateType!==0?(e.varyings.add(`metallicRoughnessUV`,`vec2`),e.vertex.uniforms.add(new w(`metallicRoughnessTextureTransformMatrix`,e=>e.metallicRoughnessTextureTransformMatrix??t)).code.add(a`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(a`void forwardMetallicRoughnessUV(){}`)}var Z=e((()=>{n(),o(),T()}));function Q(e){let t=new p,{attributes:n,vertex:r,fragment:o,varyings:s}=t,{output:c,normalType:d,offsetBackfaces:f,spherical:m,snowCover:h,pbrMode:g,textureAlphaPremultiplied:v,instancedDoublePrecision:S,hasVertexColors:C,hasVertexTangents:w,hasColorTexture:T,hasNormalTexture:D,hasNormalTextureTransform:k,hasColorTextureTransform:j}=e;if(E(r,e),n.add(`position`,`vec3`),s.add(`vpos`,`vec3`,{invariant:!0}),t.include(y,e),t.include(le,e),t.include(L,e),t.include(Pe,e),!ee(c))return t.include(fe,e),t;t.include(Fe,e),t.include(Ie,e),t.include(Le,e),t.include(Re,e),O(r,e),t.include(U,e),t.include(z);let P=d===0||d===1;return P&&f&&t.include(se),t.include(he,e),t.include(G,e),t.include(ae,e),s.add(`vPositionLocal`,`vec3`),t.include(te,e),t.include(ue,e),t.include(V,e),r.uniforms.add(new ie(`externalColor`,e=>e.externalColor,{supportsNaN:!0})),s.add(`vcolorExt`,`vec4`),t.include(M,e),r.include(x),r.include(b),t.include(S?je:Ne,e),r.main.add(a`
    forwardVertexColor();

    MaskedColor maskedColor =
      applySymbolColor(applyVVColor(applyInstanceColor(createMaskedFromNaNColor(externalColor))));

    vcolorExt = maskedColor.color;
    forwardColorMixMode(maskedColor.mask);

    vpos = getVertexInLocalOriginSpace();
    vPositionLocal = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    ${i(P,`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`)}
    vpos = addVerticalOffset(vpos, localOrigin);
    ${i(w,`vTangent = dpTransformVertexTangent(tangent);`)}
    gl_Position = transformPosition(proj, view, vpos);
    ${i(P&&f,`gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);`)}

    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();

    if (opacityMixMode != ${a.int(_.ignore)} && vcolorExt.a < ${a.float(N)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    }
    forwardLinearDepthToReadShadowMap();
  `),o.include(ye,e),o.include(xe,e),t.include(J,e),o.include(re,e),t.include(I,e),O(o,e),o.uniforms.add(r.uniforms.get(`localOrigin`),new l(`ambient`,e=>e.ambient),new l(`diffuse`,e=>e.diffuse),new u(`opacity`,e=>e.opacity),new u(`layerOpacity`,e=>e.layerOpacity)),T&&o.uniforms.add(new ne(`tex`,e=>e.texture)),t.include(Oe,e),o.include(_e,e),o.include(A),t.include(Ee,e),o.include(X,e),Se(o),Ce(o),Te(o),o.main.add(a`
    discardBySlice(vpos);
    discardByTerrainDepth();
    ${T?a`
            vec4 texColor = texture(tex, ${j?`colorUV`:`vuv0`});
            ${i(v,`texColor.rgb /= texColor.a;`)}
            discardOrAdjustAlpha(texColor);`:a`vec4 texColor = vec4(1.0);`}
    shadingParams.viewDirection = normalize(vpos - cameraPosition);
    ${d===2?a`vec3 normal = screenDerivativeNormal(vPositionLocal);`:a`shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
    applyPBRFactors();
    float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

    vec3 posWorld = vpos + localOrigin;

    float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
    float shadow = readShadow(additionalAmbientScale, vpos);

    vec3 matColor = max(ambient, diffuse);
    vec3 albedo = mixExternalColor(${i(C,`vColor.rgb *`)} matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
    float opacity_ = layerOpacity * mixExternalOpacity(${i(C,`vColor.a * `)} opacity, texColor.a, vcolorExt.a, opacityMixMode);

    ${D?`mat3 tangentSpace = computeTangentSpace(${w?`normal`:`normal, vpos, vuv0`});\n            vec3 shadingNormal = computeTextureNormal(tangentSpace, ${k?`normalUV`:`vuv0`});`:`vec3 shadingNormal = normal;`}
    vec3 normalGround = ${m?`normalize(posWorld);`:`vec3(0.0, 0.0, 1.0);`}

    ${i(h,a`
          float snow = getSnow(normal, normalGround);
          albedo = mix(albedo, vec3(1), snow);
          shadingNormal = mix(shadingNormal, normal, snow);
          ssao = mix(ssao, 1.0, snow);`)}

    vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

    ${g===1||g===2?a`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            ${i(h,`mrr = applySnowToMRR(mrr, snow);`)}
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, additionalAmbientIrradiance);`:a`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
    vec4 finalColor = vec4(shadedColor, opacity_);
    outputColorHighlightOLID(applySlice(finalColor, vpos), albedo ${i(h,`, snow`)});
  `),t}var $,ze=e((()=>{pe(),r(),h(),B(),de(),Y(),v(),W(),oe(),s(),H(),q(),R(),ce(),me(),ve(),be(),we(),De(),ge(),Ae(),Me(),j(),Z(),S(),K(),k(),D(),c(),C(),d(),o(),f(),ke(),g(),F(),m(),P(),$=Object.freeze(Object.defineProperty({__proto__:null,build:Q},Symbol.toStringTag,{value:`Module`}))}));export{Z as i,$ as n,ze as r,Q as t};