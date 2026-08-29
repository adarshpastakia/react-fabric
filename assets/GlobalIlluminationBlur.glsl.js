import{n as e}from"./rolldown-runtime.js";import{o as t,s as n}from"./vec2f64.js";import{r,t as i}from"./glsl.js";import{n as a,t as o}from"./ScreenSpacePass.glsl.js";import{r as s,t as c}from"./NoParameters.js";import{n as l,t as u}from"./ShaderBuilder.js";import{n as d,t as f}from"./Float2DrawUniform.js";import{n as p,t as m}from"./FloatPassUniform.js";import{n as h,t as g}from"./Texture2DPassUniform.js";import{n as _,t as v}from"./Texture2DDrawUniform.js";import{n as y,t as b}from"./oitResolution.glsl.js";import{n as x}from"./ditherNoise.glsl.js";import{r as S,t as C}from"./ReadDepth.glsl.js";import{n as w,t as T}from"./CameraSpace.glsl.js";import{n as E,t as D}from"./BooleanBindUniform.js";import{n as O,t as k}from"./GlobalIlluminationColorQuantization.glsl.js";import{n as A,t as j}from"./GlobalIlluminationWeights.glsl.js";function M(){let e=new l,t=e.fragment;e.include(a),e.include(T),e.include(A),t.include(C),t.include(x,F),t.include(k);let n=5e4;t.uniforms.add(new E(`hasEmission`,e=>e.hasEmission),new g(`depthMap`,e=>e.depthTexture),new g(`normalMap`,e=>e.normalTexture),new v(`globalIlluminationTexture`,e=>e.texture),new v(`globalIlluminationWeightTexture`,e=>e.weightTexture),new f(`blurSize`,e=>e.blurSize),new p(`scaleGlobalIllumination`,e=>e.scaleGlobalIllumination),new p(`projScale`,(e,t)=>{let r=t.camera.distance;return r>n?Math.max(0,e.projScale-(r-n)):e.projScale}));let i=.03;return t.code.add(r`
    void accumulateBlurSample(
      vec2 sampleUv,
      float sampleOffset,
      float centerDepth,
      vec3 centerNormal,
      float depthSharpness,
      bool skipOcclusionBlur,
      inout float emissionWeightSum,
      inout vec3 emissionSum,
      inout float occlusionWeightSum,
      inout float occlusionSum,
      float centerOcclusionBlendWeight
    ) {
      vec4 sampleGlobalIllumination = texture(globalIlluminationTexture, sampleUv);
      vec3 sampleNormal = texture(normalMap, sampleUv).rgb;
      float sampleDepth = linearDepthFromTexture(depthMap, sampleUv);

      float depthDelta = sampleDepth - centerDepth;
      bool isScaledGlobalIllumination = scaleGlobalIllumination < 1.0;
      float normalSimilarityWeight = globalIlluminationNormalSimilarityWeight(sampleNormal, centerNormal);
      float depthNormalCorrection = globalIlluminationDepthNormalCorrection(sampleNormal);
      vec3 emission = sampleGlobalIllumination.rgb;
      float emissionSpatialWeightMultiplier = isScaledGlobalIllumination ? ${r.float(400)} : 1.0;

      float emissionWeight = exp(
        -sampleOffset * sampleOffset * ${r.float(.04081632653061224)} * ${r.float(.1)} * emissionSpatialWeightMultiplier
        - depthDelta * depthDelta * depthSharpness * depthNormalCorrection
      );
      emissionWeight *= normalSimilarityWeight;
      emissionWeightSum += emissionWeight;
      emissionSum += emissionWeight * emission;

      if (skipOcclusionBlur) {
        return;
      }

      float occlusionSpatialKernelScale = centerOcclusionBlendWeight > ${r.float(i)}
        ? ${r.float(.08)}
        : ${r.float(1.5)};
      float occlusionWeight = exp(-sampleOffset * sampleOffset * occlusionSpatialKernelScale - depthDelta * depthDelta * depthSharpness);
      occlusionWeight *= normalSimilarityWeight;
      occlusionWeightSum += occlusionWeight;
      occlusionSum += occlusionWeight * sampleGlobalIllumination.a;
    }
  `),t.main.add(r`
    vec3 emissionSum = vec3(0.0);
    float emissionWeightSum = 0.0;

    vec4 centerGlobalIllumination = texture(globalIlluminationTexture, uv);
    float centerOcclusionBlendWeight = texture(globalIlluminationWeightTexture, uv).r;
    bool isScaledGlobalIllumination = scaleGlobalIllumination < 1.0;
    bool shouldReuseCenterOcclusion = isScaledGlobalIllumination && centerOcclusionBlendWeight <= ${r.float(i)};
    bool shouldSkipLowQualityBlur = !hasEmission && shouldReuseCenterOcclusion;
    if (shouldSkipLowQualityBlur) {
      fragColor = vec4(
        quantizeGlobalIlluminationColor(centerGlobalIllumination.rgb),
        centerGlobalIllumination.a
      );
      return;
    }

    float centerDepth = linearDepthFromTexture(depthMap, uv);
    vec3 centerNormal = texture(normalMap, uv).rgb;
    float occlusionSum = 0.0;
    float occlusionWeightSum = 0.0;

    float depthSharpness = globalIlluminationDepthSharpness(projScale, centerDepth);
    for (int sampleOffset = -${r.int(N)}; sampleOffset <= ${r.int(N)}; ++sampleOffset) {
      float sampleOffsetFloat = float(sampleOffset);
      vec2 sampleUv = uv + sampleOffsetFloat * blurSize;
      accumulateBlurSample(
        sampleUv,
        sampleOffsetFloat,
        centerDepth,
        centerNormal,
        depthSharpness,
        shouldReuseCenterOcclusion,
        emissionWeightSum,
        emissionSum,
        occlusionWeightSum,
        occlusionSum,
        centerOcclusionBlendWeight
      );
    }

    float occlusion = shouldReuseCenterOcclusion ? centerGlobalIllumination.a : occlusionSum / occlusionWeightSum;
    vec3 blurredEmission = (emissionSum / emissionWeightSum).rgb;

    // heuristic dithering of the colors to remove banding, color shifts and wrong color accumulation
    float dither = ditherNoise(vec4(blurredEmission, occlusion)) - 1./32768.0;
    blurredEmission += isScaledGlobalIllumination ? 0.85 * dither : dither;

    fragColor = vec4(quantizeGlobalIlluminationColor(blurredEmission), occlusion);
  `),e}var N,P,F,I;function L(){return(L=e((()=>{t(),o(),S(),j(),w(),D(),d(),m(),i(),_(),h(),O(),b(),s(),u(),N=4,P=class extends c{constructor(){super(...arguments),this.blurSize=n()}},F=new y,F.useFloatBlend=!1,I=Object.freeze(Object.defineProperty({__proto__:null,GlobalIlluminationBlurDrawParameters:P,build:M},Symbol.toStringTag,{value:`Module`}))})))()}export{I as i,P as n,L as r,M as t};