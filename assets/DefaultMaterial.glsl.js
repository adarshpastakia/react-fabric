import{n as e}from"./rolldown-runtime.js";import{n as t,r as n,t as r}from"./glsl.js";import{n as ee,t as i}from"./ShaderBuilder.js";import{n as a,t as o}from"./FloatPassUniform.js";import{n as s,t as c}from"./Texture2DPassUniform.js";import{p as l}from"./ShaderOutput.js";import{n as u,r as te}from"./MaterialUtil.js";import{a as d,i as f}from"./Slice.glsl.js";import{n as p,t as m}from"./Float3PassUniform.js";import{a as h,n as ne,o as g,s as _,t as v}from"./VisualVariables.glsl.js";import{n as y,t as b}from"./Float4PassUniform.js";import{n as x,r as S,t as C}from"./View.glsl.js";import{n as re,t as w}from"./MixExternalColor.glsl.js";import{n as ie,t as T}from"./AlphaCutoff.js";import{c as E,s as D}from"./Emissions.glsl.js";import{n as O,t as k}from"./OutputColorHighlightOLID.glsl.js";import{i as A,r as j}from"./VerticalOffset.glsl.js";import{n as M,t as N}from"./Transform.glsl.js";import{n as P,t as F}from"./VertexColor.glsl.js";import{n as I,t as L}from"./NormalAttribute.glsl.js";import{n as R,o as z,s as B,t as V}from"./DiscardOrAdjustAlpha.glsl.js";import{n as H,t as U}from"./Offset.glsl.js";import{a as W,c as G,d as K,f as q,i as J,l as Y,m as ae,n as oe,o as se,p as ce,r as le,s as ue,t as de,u as fe}from"./TextureTransformUV.glsl.js";import{n as pe,r as me}from"./ComputeNormalTexture.glsl.js";import{r as he,t as ge}from"./PhysicallyBasedRendering.glsl.js";import{c as _e,i as ve,n as ye,r as be,s as xe,t as Se}from"./EvaluateSceneLighting.glsl.js";import{n as Ce,r as X}from"./MainLighting.glsl.js";import{n as we,t as Te}from"./Normals.glsl.js";import{i as Ee,n as De,r as Oe,t as ke}from"./SnowCover.glsl.js";import{n as Ae,r as je,t as Me}from"./ReadShadowMap.glsl.js";function Z(e){let r=new ee,{attributes:i,vertex:o,fragment:s,varyings:u}=r,{output:d,normalType:p,offsetBackfaces:h,spherical:v,snowCover:y,pbrMode:S,textureAlphaPremultiplied:w,instancedDoublePrecision:T,hasVertexColors:E,hasVertexTangents:k,hasColorTexture:j,hasNormalTexture:N,hasNormalTextureTransform:F,hasColorTextureTransform:L}=e;if(x(o,e),i.add(`position`,`vec3`),o.inputs.add(`position`,()=>`position`),u.add(`vpos`,`vec3`,{invariant:!0}),r.include(ne,e),r.include(q,e),r.include(A,e),r.include(de,e),!l(d))return r.include(ue,e),r;r.include(W,e),r.include(le,e),r.include(oe,e),r.include(se,e),C(o,e),r.include(I,e),r.include(M);let R=p===0||p===1;return R&&h&&r.include(U),r.include(me,e),r.include(B,e),r.include(ae,e),u.add(`vPositionLocal`,`vec3`),r.include(D,e),r.include(Y,e),r.include(P,e),o.uniforms.add(new b(`externalColor`,e=>e.externalColor,{supportsNaN:!0})),u.add(`vcolorExt`,`vec4`),o.include(_),o.include(g),r.include(T?Me:je,e),o.main.add(n`
    forwardVertexColor();

    MaskedColor maskedColor =
      applySymbolColor(applyVVColor(applyInstanceColor(createMaskedFromNaNColor(externalColor))));

    vcolorExt = maskedColor.color;
    forwardColorMixMode(maskedColor.mask);

    vpos = getVertexInLocalOriginSpace();
    vPositionLocal = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    ${t(R,`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`)}
    vpos = addVerticalOffset(vpos, localOrigin);
    ${t(k,`vTangent = dpTransformVertexTangent(tangent);`)}
    gl_Position = transformPosition(proj, view, vpos);
    ${t(R&&h,`gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);`)}

    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();

    if (opacityMixMode != ${n.int(te.ignore)} && vcolorExt.a < ${n.float(ie)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    }
    forwardLinearDepthToReadShadowMap();
  `),s.include(ve,e),s.include(_e,e),r.include(V,e),s.include(f,e),r.include(O,e),C(s,e),s.uniforms.add(o.uniforms.get(`localOrigin`),new m(`ambient`,e=>e.ambient),new m(`diffuse`,e=>e.diffuse),new a(`opacity`,e=>e.opacity),new a(`layerOpacity`,e=>e.layerOpacity)),j&&s.uniforms.add(new c(`tex`,e=>e.texture)),r.include(Ee,e),s.include(ge,e),s.include(re),r.include(we,e),s.include(ke,e),ye(s),Se(s),X(s),s.main.add(n`
    discardBySlice(vpos);
    ${j?n`
            vec4 texColor = texture(tex, ${L?`colorUV`:`vuv0`});
            ${t(w,`texColor.rgb /= texColor.a;`)}
            discardOrAdjustAlpha(texColor);`:n`vec4 texColor = vec4(1.0);`}
    shadingParams.viewDirection = normalize(vpos - cameraPosition);
    ${p===2?n`vec3 normal = screenDerivativeNormal(vPositionLocal);`:n`shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
    applyPBRFactors();
    float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

    vec3 posWorld = vpos + localOrigin;

    float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
    float shadow = readShadow(additionalAmbientScale, vpos);

    vec3 matColor = max(ambient, diffuse);
    vec3 albedo = mixExternalColor(${t(E,`vColor.rgb *`)} matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
    float opacity_ = layerOpacity * mixExternalOpacity(${t(E,`vColor.a * `)} opacity, texColor.a, vcolorExt.a, opacityMixMode);

    ${N?`mat3 tangentSpace = computeTangentSpace(${k?`normal`:`normal, vpos, vuv0`});\n           vec3 shadingNormal = computeTextureNormal(tangentSpace, ${F?`normalUV`:`vuv0`});`:`vec3 shadingNormal = normal;`}
    vec3 normalGround = ${v?`normalize(posWorld);`:`vec3(0.0, 0.0, 1.0);`}

    ${t(y,n`
          float snow = getSnow(normal, normalGround);
          albedo = mix(albedo, vec3(1), snow);
          shadingNormal = mix(shadingNormal, normal, snow);
          ssao = mix(ssao, 1.0, snow);`)}

    vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

    ${S===1||S===2?n`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            ${t(y,`mrr = applySnowToMRR(mrr, snow);`)}
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, additionalAmbientIrradiance);`:n`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
    vec4 finalColor = vec4(shadedColor, opacity_);
    outputColorHighlightOLID(applySlice(finalColor, vpos), albedo ${t(y,`, snow`)});
  `),r}var Q;function $(){return($=e((()=>{H(),d(),N(),ce(),K(),h(),L(),fe(),E(),F(),z(),j(),G(),pe(),xe(),be(),Ce(),Te(),he(),Oe(),Ae(),J(),v(),R(),w(),S(),p(),y(),o(),r(),s(),De(),u(),k(),i(),T(),Q=Object.freeze(Object.defineProperty({__proto__:null,build:Z},Symbol.toStringTag,{value:`Module`}))})))()}export{$ as n,Z as r,Q as t};