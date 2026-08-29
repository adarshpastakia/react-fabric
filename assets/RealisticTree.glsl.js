import{n as e}from"./rolldown-runtime.js";import{n as t,r as n,t as r}from"./glsl.js";import{n as i,t as a}from"./ShaderBuilder.js";import{n as o,t as s}from"./FloatPassUniform.js";import{n as c,t as ee}from"./Texture2DPassUniform.js";import{p as l}from"./ShaderOutput.js";import{n as u,r as d}from"./MaterialUtil.js";import{a as f,i as te}from"./Slice.glsl.js";import{n as p,t as m}from"./Float3PassUniform.js";import{a as h,n as g,o as ne,s as re,t as _}from"./VisualVariables.glsl.js";import{n as v,t as y}from"./Float4PassUniform.js";import{n as b,r as x,t as S}from"./View.glsl.js";import{n as C,t as w}from"./MixExternalColor.glsl.js";import{n as T,t as E}from"./alphaCutoff.glsl.js";import{c as D,s as O}from"./Emissions.glsl.js";import{n as k,t as A}from"./OutputColorHighlightOLID.glsl.js";import{i as j,r as M}from"./VerticalOffset.glsl.js";import{n as N,t as P}from"./Transform.glsl.js";import{n as F,t as I}from"./VertexColor.glsl.js";import{n as L,t as R}from"./NormalAttribute.glsl.js";import{n as z,t as B}from"./DiscardOrAdjustAlpha.glsl.js";import{n as V,t as H}from"./Offset.glsl.js";import{c as U,d as W,f as G,i as K,l as ie,m as q,p as J,r as Y,s as ae,t as oe,u as se}from"./TextureTransformUV.glsl.js";import{r as ce,t as le}from"./PhysicallyBasedRendering.glsl.js";import{c as ue,i as de,n as fe,r as pe,s as me,t as he}from"./EvaluateSceneLighting.glsl.js";import{i as ge,n as X,r as _e}from"./MainLighting.glsl.js";import{i as ve,n as ye,r as be,t as xe}from"./SnowCover.glsl.js";import{n as Se,r as Ce,t as we}from"./ReadShadowMap.glsl.js";function Z(e){let r=new i,{attributes:a,vertex:s,fragment:c,varyings:u}=r,{output:f,offsetBackfaces:p,pbrMode:h,snowCover:_,spherical:v}=e,x=h===1||h===2;if(b(s,e),a.add(`position`,`vec3`),s.inputs.add(`position`,()=>`position`),u.add(`vpos`,`vec3`,{invariant:!0}),r.include(g,e),r.include(G,e),r.include(j,e),r.include(oe,e),!l(f))return r.include(ae,e),r;r.include(Y,e),S(r.vertex,e),r.include(L,e),r.include(N),p&&r.include(H),u.add(`vNormalWorld`,`vec3`),u.add(`localvpos`,`vec3`,{invariant:!0}),r.include(O,e),r.include(ie,e),r.include(q,e),r.include(F,e),s.include(re),s.include(ne),s.uniforms.add(new y(`externalColor`,e=>e.externalColor,{supportsNaN:!0})),u.add(`vcolorExt`,`vec4`),r.include(e.instancedDoublePrecision?we:Ce,e),s.include(E),s.main.add(n`
    forwardVertexColor();

    MaskedColor maskedColorExt =
      applySymbolColor(applyVVColor(applyInstanceColor(createMaskedFromNaNColor(externalColor))));

    vcolorExt = maskedColorExt.color;
    forwardColorMixMode(maskedColorExt.mask);

    bool alphaCut = opacityMixMode != ${n.int(d.ignore)} && vcolorExt.a < alphaCutoff;
    vpos = getVertexInLocalOriginSpace();

    localvpos = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
    vpos = addVerticalOffset(vpos, localOrigin);
    vec4 basePosition = transformPosition(proj, view, vpos);

    forwardTextureCoordinates();
    forwardColorUV();
    forwardEmissiveUV();
    forwardLinearDepthToReadShadowMap();
    gl_Position = alphaCut ? vec4(1e38, 1e38, 1e38, 1.0) :
    ${t(p,`offsetBackfacingClipPosition(basePosition, vpos, vNormalWorld, cameraPosition);`,`basePosition;`)}
  `);let{hasColorTexture:w,hasColorTextureTransform:T}=e;return c.include(de,e),c.include(ue,e),r.include(B,e),c.include(te,e),r.include(k,e),S(c,e),ge(c),fe(c),he(c),c.uniforms.add(s.uniforms.get(`localOrigin`),s.uniforms.get(`view`),new m(`ambient`,e=>e.ambient),new m(`diffuse`,e=>e.diffuse),new o(`opacity`,e=>e.opacity),new o(`layerOpacity`,e=>e.layerOpacity)),w&&c.uniforms.add(new ee(`tex`,e=>e.texture)),r.include(ve,e),c.include(le,e),c.include(C),c.include(xe,e),_e(c),c.main.add(n`
      discardBySlice(vpos);
      vec4 texColor = ${w?`texture(tex, ${T?`colorUV`:`vuv0`})`:` vec4(1.0)`};
      ${t(w,`${t(e.textureAlphaPremultiplied,`texColor.rgb /= texColor.a;`)}\n        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = readShadow(additionalAmbientScale, vpos);
      vec3 matColor = max(ambient, diffuse);
      ${e.hasVertexColors?n`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, opacityMixMode);`:n`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, opacityMixMode);`}

      vec3 shadingNormal = normalize(vNormalWorld);
      vec3 groundNormal = ${v?`normalize(vpos + localOrigin)`:`vec3(0.0, 0.0, 1.0)`};

      ${t(_,`vec3 faceNormal = screenDerivativeNormal(vpos);
         float snow = getRealisticTreeSnow(faceNormal, shadingNormal, groundNormal);
         albedo = mix(albedo, vec3(1), snow);`)}

      ${n`albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}

      ${x?n`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            ${t(_,`mrr = applySnowToMRR(mrr, snow);`)}
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, groundNormal, mrr, additionalAmbientIrradiance);`:n`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOLID(applySlice(finalColor, vpos), albedo ${t(_,`, 1.0`)});`),r}var Q;function $(){return($=e((()=>{V(),f(),P(),J(),W(),h(),R(),se(),D(),I(),M(),U(),me(),pe(),X(),ce(),be(),Se(),K(),_(),z(),w(),x(),p(),v(),s(),r(),c(),ye(),u(),T(),A(),a(),Q=Object.freeze(Object.defineProperty({__proto__:null,build:Z},Symbol.toStringTag,{value:`Module`}))})))()}export{$ as n,Q as r,Z as t};