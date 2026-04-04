import{n as e}from"./chunk.js";import{a as t,s as n}from"./ShaderOutput.js";import{n as r,r as i,t as a}from"./glsl.js";import{a as o,o as s}from"./Emissions.glsl.js";import{n as c,t as l}from"./Float3PassUniform.js";import{n as u,t as d}from"./FloatPassUniform.js";import{n as f,t as p}from"./Texture2DPassUniform.js";import{n as ee,t as m}from"./ShaderBuilder.js";import{n as h,r as g}from"./Slice.glsl.js";import{n as _,r as te}from"./MaterialUtil.js";import{a as v,n as ne,o as y,s as b,t as x}from"./VisualVariables.glsl.js";import{n as S,t as C}from"./Float4PassUniform.js";import{n as w,r as T,t as E}from"./View.glsl.js";import{n as D,t as O}from"./MixExternalColor.glsl.js";import{n as k,t as A}from"./TerrainDepthTest.glsl.js";import{n as j,t as M}from"./AlphaCutoff.js";import{n as N,t as P}from"./OutputColorHighlightOLID.glsl.js";import{i as F,r as I}from"./VerticalOffset.glsl.js";import{n as L,t as R}from"./Transform.glsl.js";import{n as z,t as B}from"./VertexColor.glsl.js";import{n as V,t as H}from"./NormalAttribute.glsl.js";import{n as U,t as W}from"./DiscardOrAdjustAlpha.glsl.js";import{a as G,c as K,i as re,l as q,n as J,o as Y,r as X,s as ie,t as ae,u as oe}from"./DefaultMaterialAuxiliaryPasses.glsl.js";import{n as se,r as ce}from"./PhysicallyBasedRendering.glsl.js";import{a as le,i as ue,n as de,o as fe,r as pe,t as me}from"./EvaluateSceneLighting.glsl.js";import{i as he,n as Z,r as ge}from"./MainLighting.glsl.js";import{i as _e,n as ve,r as ye,t as be}from"./SnowCover.glsl.js";import{i as xe,n as Se,t as Ce}from"./ReadShadowMap.glsl.js";function Q(e){let t=new ee,{attributes:a,vertex:s,fragment:c,varyings:d}=t,{output:f,offsetBackfaces:m,pbrMode:g,snowCover:_,spherical:v}=e,x=g===1||g===2;if(w(s,e),a.add(`position`,`vec3`),d.add(`vpos`,`vec3`,{invariant:!0}),t.include(ne,e),t.include(Y,e),t.include(F,e),t.include(A,e),!n(f))return t.include(ae,e),t;E(t.vertex,e),t.include(V,e),t.include(L),m&&t.include(q),d.add(`vNormalWorld`,`vec3`),d.add(`localvpos`,`vec3`,{invariant:!0}),t.include(o,e),t.include(X,e),t.include(K,e),t.include(z,e),s.include(b),s.include(y),s.uniforms.add(new C(`externalColor`,e=>e.externalColor,{supportsNaN:!0})),d.add(`vcolorExt`,`vec4`),t.include(e.instancedDoublePrecision?xe:Ce,e),s.main.add(i`
    forwardVertexColor();

    MaskedColor maskedColorExt =
      applySymbolColor(applyVVColor(applyInstanceColor(createMaskedFromNaNColor(externalColor))));

    vcolorExt = maskedColorExt.color;
    forwardColorMixMode(maskedColorExt.mask);

    bool alphaCut = opacityMixMode != ${i.int(te.ignore)} && vcolorExt.a < ${i.float(j)};
    vpos = getVertexInLocalOriginSpace();

    localvpos = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
    vpos = addVerticalOffset(vpos, localOrigin);
    vec4 basePosition = transformPosition(proj, view, vpos);

    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    forwardTextureCoordinates();
    forwardLinearDepthToReadShadowMap();
    gl_Position = alphaCut ? vec4(1e38, 1e38, 1e38, 1.0) :
    ${r(m,`offsetBackfacingClipPosition(basePosition, vpos, vNormalWorld, cameraPosition);`,`basePosition;`)}
  `);let{hasColorTexture:S,hasColorTextureTransform:T}=e;return c.include(ue,e),c.include(fe,e),t.include(W,e),c.include(h,e),t.include(P,e),E(c,e),he(c),pe(c),me(c),c.uniforms.add(s.uniforms.get(`localOrigin`),s.uniforms.get(`view`),new l(`ambient`,e=>e.ambient),new l(`diffuse`,e=>e.diffuse),new u(`opacity`,e=>e.opacity),new u(`layerOpacity`,e=>e.layerOpacity)),S&&c.uniforms.add(new p(`tex`,e=>e.texture)),t.include(_e,e),c.include(ce,e),c.include(O),c.include(be,e),ge(c),c.main.add(i`
      discardBySlice(vpos);
      discardByTerrainDepth();
      vec4 texColor = ${S?`texture(tex, ${T?`colorUV`:`vuv0`})`:` vec4(1.0)`};
      ${r(S,`${r(e.textureAlphaPremultiplied,`texColor.rgb /= texColor.a;`)}\n        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = readShadow(additionalAmbientScale, vpos);
      vec3 matColor = max(ambient, diffuse);
      ${e.hasVertexColors?i`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, opacityMixMode);`:i`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, opacityMixMode);`}

      vec3 shadingNormal = normalize(vNormalWorld);
      vec3 groundNormal = ${v?`normalize(vpos + localOrigin)`:`vec3(0.0, 0.0, 1.0)`};

      ${r(_,`vec3 faceNormal = screenDerivativeNormal(vpos);
         float snow = getRealisticTreeSnow(faceNormal, shadingNormal, groundNormal);
         albedo = mix(albedo, vec3(1), snow);`)}

      ${i`albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}

      ${x?i`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            ${r(_,`mrr = applySnowToMRR(mrr, snow);`)}
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, groundNormal, mrr, additionalAmbientIrradiance);`:i`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOLID(applySlice(finalColor, vpos), albedo ${r(_,`, 1.0`)});`),t}var $,we=e((()=>{oe(),t(),g(),R(),ie(),G(),v(),H(),re(),s(),B(),I(),J(),le(),de(),Z(),se(),ye(),Se(),k(),x(),U(),D(),T(),c(),S(),d(),a(),f(),ve(),_(),N(),m(),M(),$=Object.freeze(Object.defineProperty({__proto__:null,build:Q},Symbol.toStringTag,{value:`Module`}))}));export{we as n,$ as r,Q as t};