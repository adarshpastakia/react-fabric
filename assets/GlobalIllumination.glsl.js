import{n as e}from"./rolldown-runtime.js";import{g as t,n as ee}from"./enums.js";import{n,r,t as i}from"./glsl.js";import{n as te,t as ne}from"./ScreenSpacePass.glsl.js";import{r as re,t as ie}from"./NoParameters.js";import{n as ae,t as a}from"./ShaderBuilder.js";import{n as o,t as oe}from"./FloatPassUniform.js";import{n as s,t as c}from"./Texture2DPassUniform.js";import{n as l,t as u}from"./Matrix4BindUniform.js";import{n as d,t as f}from"./Float2BindUniform.js";import{n as p,t as m}from"./Gamma.glsl.js";import{n as h,t as g}from"./Texture2DBindUniform.js";import{n as _,r as v,t as y}from"./ReadDepth.glsl.js";import{n as b,t as x}from"./CameraSpace.glsl.js";import{i as S,n as C}from"./MainLighting.glsl.js";import{n as w,t as se}from"./ScreenSpaceRayMarching.glsl.js";import{n as ce,t as T}from"./GlobalIlluminationColorQuantization.glsl.js";function le(e){e.include(y),e.uniforms.add(new f(`zProjectionMapLastFrame`,e=>_(e.reprojection.lastFrameCamera))),e.code.add(r`float linearDepthFromTextureLastFrame(sampler2D depthTexture, vec2 uv) {
return linearizeDepth(depthFromTexture(depthTexture, uv), zProjectionMapLastFrame);
}`)}function E(){return(E=e((()=>{v(),d(),i()})))()}function D(e){let t=new ae,i=t.fragment;return t.include(te),t.include(x),S(i),i.include(le),i.include(m),i.include(T),t.include(se,e),i.uniforms.add(new c(`normalMap`,e=>e.normalTexture),new c(`depthMap`,e=>e.depthTexture),new g(`lastFrameColorTexture`,e=>e.reprojection.lastFrameColor?.getTexture()),new g(`lastFrameDepthTexture`,e=>e.reprojection.lastFrameDepth?.attachment),new g(`lastFrameGlobalIlluminationTexture`,e=>e.globalIllumination?.getTexture()),new g(`lastFrameGlobalIlluminationWeightTexture`,e=>e.globalIllumination?.getTexture(ee)),new l(`reprojectionViewMatrix`,e=>e.reprojection.viewMatrix),new l(`view`,e=>e.camera.viewMatrix),new o(`accumulatedFrames`,e=>e.accumulatedFrames),new o(`temporalSampleFrame`,e=>e.temporalSampleFrame),new o(`scaleGlobalIllumination`,e=>e.scaleGlobalIllumination)),i.uniforms.add(new o(`rayMarchMinReach`,e=>e.rayMarchMinReach),new o(`rayMarchMaxReach`,e=>e.rayMarchMaxReach),new o(`rayMarchWorldReach`,e=>e.rayMarchWorldReach),new o(`rayMarchMinReachEmissionWeight`,e=>e.rayMarchMinReachEmissionWeight),new o(`rayMarchMaxReachEmissionWeight`,e=>e.rayMarchMaxReachEmissionWeight),new o(`rayMarchMaxSteps`,e=>e.rayMarchMaxSteps),new o(`colorBleedWeight`,e=>e.colorBleedWeight)),e.hasEmission&&i.uniforms.add(new g(`lastFrameEmissionTexture`,e=>e.reprojection.lastFrameEmission?.attachment)),i.code.add(r`
    float computeIdleColorBlendWeight(float accumulatedFrames) {
      float idleColorBlendProgress = clamp(
        accumulatedFrames / ${r.float(L)},
        0.0,
        1.0
      );
      return mix(
        ${r.float(F)},
        ${r.float(I)},
        idleColorBlendProgress
      );
    }

    float computeIdleOcclusionBlendWeight(float accumulatedFrames) {
      float idleOcclusionBlendProgress = clamp(
        accumulatedFrames / ${r.float(B)},
        0.0,
        1.0
      );
      return mix(
        ${r.float(R)},
        ${r.float(z)},
        pow(idleOcclusionBlendProgress, ${r.float(V)})
      );
    }

    bool isEdgeDepth(float centerDepth, vec2 sampleUv) {
      vec2 texelSize = 1.0 / vec2(textureSize(depthMap, 0));
      float depthLeft = linearizeDepth(depthFromTexture(depthMap, sampleUv + vec2(-texelSize.x, 0.0)));
      float depthRight = linearizeDepth(depthFromTexture(depthMap, sampleUv + vec2(texelSize.x, 0.0)));
      float depthUp = linearizeDepth(depthFromTexture(depthMap, sampleUv + vec2(0.0, texelSize.y)));
      float depthDown = linearizeDepth(depthFromTexture(depthMap, sampleUv + vec2(0.0, -texelSize.y)));

      float maxDifference = max(max(abs(centerDepth - depthLeft), abs(centerDepth - depthRight)), max(abs(centerDepth - depthUp), abs(centerDepth - depthDown)));

      return abs(maxDifference / centerDepth) > 0.01;
    }

    vec3 sampleCosineHemisphere(vec2 u) {
      float phi = 6.28318530718 * u.x;
      float radius = sqrt(u.y);
      float x = radius * cos(phi);
      float y = radius * sin(phi);
      float z = sqrt(max(0.0, 1.0 - u.y));

      return vec3(x, y, z);
    }

    mat3 basisFromNormal(vec3 n) {
      vec3 up = abs(n.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
      vec3 tangent = normalize(cross(up, n));
      vec3 bitangent = cross(n, tangent);

      return mat3(tangent, bitangent, n);
    }

    float blueNoiseDitherValue(vec2 pixel, float frame, vec2 axis, float phase) {
      float scroll = 5.588238 * mod(frame, 512.0);
      vec2 p = pixel + vec2(scroll);
      vec2 rotated = vec2(
        axis.x * p.x + axis.y * p.y,
        -axis.y * p.x + axis.x * p.y
      );

      return fract(52.9829189 * fract(0.06711056 * rotated.x + 0.00583715 * rotated.y + phase));
    }

    vec4 blueNoiseDither(vec2 pixel, float frame) {
      vec4 value = vec4(
        blueNoiseDitherValue(pixel, frame, vec2(0.9659258, 0.25881904), 0.0),
        blueNoiseDitherValue(pixel, frame, vec2(0.70710677, 0.70710677), 0.17),
        blueNoiseDitherValue(pixel, frame, vec2(0.25881904, 0.9659258), 0.37),
        blueNoiseDitherValue(pixel, frame, vec2(1.0, 0.0), 0.61)
      );

      return value * 2.0 - 1.0;
    }
  `),t.outputs.add(`fragGlobalIllumination`,`vec4`,0),t.outputs.add(`fragWeight`,`float`,1),i.main.add(r`
    float depth = depthFromTexture(depthMap, uv);

    // Early out if depth is out of range, such as in the sky
    if (depth >= 1.0 || depth <= 0.0) {
      fragGlobalIllumination = vec4(0.0, 0.0, 0.0, 1.0);
      fragWeight = 0.0;
      return;
    }

    // Get the normal of current fragment
    ivec2 iuv = ivec2(uv * vec2(textureSize(normalMap, 0)));
    vec4 normal4 = texelFetch(normalMap, iuv, 0);
    if (normal4.a != 1.0) {
      fragGlobalIllumination = vec4(0.0, 0.0, 0.0, 1.0);
      fragWeight = 0.0;
      return;
    }
    vec3 normal = normalize(normal4.xyz * 2.0 - 1.0);

    // Reconstruct view space position of current fragment
    float currentPixelDepth = linearizeDepth(depth);
    vec3 currentPixelPos = reconstructPosition(uv * vec2(textureSize(normalMap, 0)), currentPixelDepth);
    vec4 viewPos = vec4(currentPixelPos, 1.0);

    // Reproject current view position to last frame
    vec4 reprojectedViewPos = reprojectionViewMatrix * viewPos;
    vec4 reprojectedCoordinate = applyProjectionMat(proj, reprojectedViewPos.xyz);

    // Read last frame reprojected depth and GI history
    float lastFrameDepthViewPos = -linearDepthFromTextureLastFrame(lastFrameDepthTexture, reprojectedCoordinate.xy);
    vec4 lastFrameGlobalIllumination = texture(lastFrameGlobalIlluminationTexture, reprojectedCoordinate.xy);
    float historyOcclusionBlendWeight = texture(lastFrameGlobalIlluminationWeightTexture, reprojectedCoordinate.xy).r;

    int steps;
    float occlusionBlendWeight = 1.0;
    float colorBlendWeight = 1.0;
    float idleColorBlendWeight = computeIdleColorBlendWeight(accumulatedFrames);
    float idleOcclusionBlendWeight = computeIdleOcclusionBlendWeight(accumulatedFrames);
    float reprojectionDepthMismatch = abs((lastFrameDepthViewPos + reprojectedViewPos.z) / max(lastFrameDepthViewPos, reprojectedViewPos.z));
    bool hasReprojectionMismatch = reprojectionDepthMismatch > ${r.float(O)};
    bool isScaledGlobalIllumination = scaleGlobalIllumination < 1.0;
    bool isLowQualityEdgePixel = isScaledGlobalIllumination && isEdgeDepth(currentPixelDepth, uv);
    bool resetColorHistory = false;

    // Heuristic to determine blending weights and number of steps for occlusion and color
    if (hasReprojectionMismatch) {
      if (isLowQualityEdgePixel) {
        steps = 1;
        occlusionBlendWeight = ${r.float(k)};
        resetColorHistory = true;
      } else {
        steps = 6;
        occlusionBlendWeight = 1.0;
        resetColorHistory = true;
      }
    } else {
      steps = 1;
      if (historyOcclusionBlendWeight > ${r.float(j)}) {
        occlusionBlendWeight = ${r.float(N)};
        colorBlendWeight = ${r.float(P)};
      } else if (historyOcclusionBlendWeight > ${r.float(M)}) {
        occlusionBlendWeight = historyOcclusionBlendWeight - 0.05;
        colorBlendWeight = ${r.float(P)};
      } else {
        occlusionBlendWeight = isScaledGlobalIllumination ? ${r.float(k)} : idleOcclusionBlendWeight;
        colorBlendWeight = isScaledGlobalIllumination ? ${r.float(A)} : idleColorBlendWeight;
      }
    }

    vec4 randomDirectionSample;
    mat3 normalBasis = basisFromNormal(normal);
    int temporalSampleStride = min(64 / steps, 6);
    float temporalFrameOffset = mod(temporalSampleFrame, float(64 / steps));

    // For each ray determine if it hits geometry and accumulate occlusion or color
    float stepSize = 1.0 / float(steps);
    for (int i = 0; i < steps; ++i) {
      float sampleIndex = float(i * temporalSampleStride + int(temporalFrameOffset));
      randomDirectionSample = blueNoiseDither(floor(gl_FragCoord.xy), sampleIndex);
      vec2 hemisphereSample = randomDirectionSample.rg * 0.5 + 0.5;
      float offsetSample = randomDirectionSample.a * 0.5 + 0.5;
      vec3 rayDirection = normalBasis * sampleCosineHemisphere(hemisphereSample);
      float rayMarchScreenReach = rayMarchScreenReachFromWorldReach(viewPos.xyz, rayDirection, rayMarchWorldReach);
      rayMarchScreenReach = clamp(rayMarchScreenReach, rayMarchMinReach, rayMarchMaxReach);
      vec3 hit = screenSpaceIntersectionWithLimits(
        rayDirection,
        viewPos.xyz,
        normalize(viewPos.xyz),
        normal,
        offsetSample,
        rayMarchScreenReach,
        rayMarchMaxSteps
      );

      if (hit.z > 0.0) {
        ${n(e.hasColor,r`
          // Emission and color bleed - Reproject the current receiver and sampled hit to estimate bounced color
          vec3 receiverColor = texture(lastFrameColorTexture, reprojectedCoordinate.xy).rgb;

          vec2 hitReprojectedCoordinate = reprojectionCoordinate(hit);
          vec3 sourceColor = texture(lastFrameColorTexture, hitReprojectedCoordinate).rgb;
          vec3 sourceColorLinear = linearizeGamma(sourceColor);
          vec3 sourceEmission = ${n(e.hasEmission,`texture(lastFrameEmissionTexture, hitReprojectedCoordinate).xyz`,`vec3(0.0)`)};

          float emissionWeight = mix(
            rayMarchMinReachEmissionWeight,
            rayMarchMaxReachEmissionWeight,
            (rayMarchScreenReach - rayMarchMinReach) / max(rayMarchMaxReach - rayMarchMinReach, 0.00001)
          );
          fragGlobalIllumination.rgb += ((sourceColorLinear * colorBleedWeight) + sourceEmission * emissionWeight) * stepSize;
          `)}
      } else {
        // Occlusion - heuristic modulating sky intensity based on angle to main light
        vec4 viewMainLightDirection = view * vec4(mainLightDirection, 0.0);
        float skyModulation = pow(max(dot(rayDirection, viewMainLightDirection.xyz), 0.0), 3.0) * 5.5;
        float skyFacingWeight = clamp(3.5 * dot(viewMainLightDirection.xyz, normal), 0.0, 1.0);
        skyModulation = mix(1.0, skyModulation * 0.2 + 0.8, skyFacingWeight);
        fragGlobalIllumination.a += skyModulation * stepSize;
      }
    }

    // Rendering trick add noise to reduce accumulation artifacts
    float accumulationDither = occlusionBlendWeight < 1.0
      ? randomDirectionSample.b * ${r.float(H)}
      : 0.0;

    ${n(e.hasColor,r`
      // Accumulate color
      vec3 lastFrameColor = lastFrameGlobalIllumination.rgb;
      float colorDitherScale = isScaledGlobalIllumination ? ${r.float(U)} : 1.0;
      fragGlobalIllumination.rgb = resetColorHistory
        ? vec3(0.0)
        : mix(lastFrameColor + accumulationDither * colorDitherScale, fragGlobalIllumination.rgb, colorBlendWeight);
      `,r`
      fragGlobalIllumination.rgb = vec3(0.0);
      `)}
    fragGlobalIllumination.rgb = quantizeGlobalIlluminationColor(fragGlobalIllumination.rgb);

    // Accumulate occlusion
    fragGlobalIllumination.a = mix(lastFrameGlobalIllumination.a + accumulationDither, fragGlobalIllumination.a, occlusionBlendWeight);

    fragWeight = occlusionBlendWeight;
  `),t}var O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{ne(),E(),p(),C(),w(),b(),oe(),i(),u(),h(),s(),ce(),t(),re(),a(),O=.01,k=.008,A=.002,j=.5,M=.02,N=.1,P=.008,F=.012,I=.008,L=40,R=.095,z=.008,B=60,V=2,H=.0039,U=.25,W=.15,G=25,K=.15,q=.5,J=1,Y=1,X=16,Z=class extends ie{constructor(){super(...arguments),this.projScale=1,this.scaleGlobalIllumination=1,this.accumulatedFrames=0,this.temporalSampleFrame=0,this.rayMarchMinReach=K,this.rayMarchMaxReach=q,this.rayMarchWorldReach=25,this.rayMarchMinReachEmissionWeight=1,this.rayMarchMaxReachEmissionWeight=1,this.rayMarchMaxSteps=16,this.colorBleedWeight=W}},Q=Object.freeze(Object.defineProperty({__proto__:null,GlobalIlluminationPassParameters:Z,build:D,defaultColorBleedWeight:W,defaultRayMarchMaxReach:q,defaultRayMarchMaxReachEmissionWeight:1,defaultRayMarchMaxSteps:16,defaultRayMarchMinReach:K,defaultRayMarchMinReachEmissionWeight:1,defaultRayMarchWorldReach:25},Symbol.toStringTag,{value:`Module`}))})))()}export{Z as a,Q as c,W as d,E as f,X as i,D as l,J as n,K as o,G as r,q as s,Y as t,$ as u};