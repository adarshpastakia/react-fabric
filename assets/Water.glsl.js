import{n as e}from"./rolldown-runtime.js";import{n as t,t as n}from"./Error.js";import{O as r,x as i}from"./vec2.js";import{o as a,u as o}from"./vec4.js";import{o as s,s as c}from"./vec4f64.js";import{o as l,s as ee}from"./vec2f64.js";import{r as u,t as d}from"./glsl.js";import{n as f,t as p}from"./ShaderBuilder.js";import{n as m,t as te}from"./FloatPassUniform.js";import{n as h,t as g}from"./Texture2DPassUniform.js";import{p as _}from"./ShaderOutput.js";import{a as v,i as y}from"./Slice.glsl.js";import{n as ne,t as re}from"./ObjectAndLayerIdColor.glsl.js";import{n as b,t as x}from"./Float4PassUniform.js";import{n as ie,r as ae,t as S}from"./View.glsl.js";import{n as C,t as w}from"./ColorConversion.glsl.js";import{n as T,t as E}from"./AlphaCutoff.js";import{n as D,t as O}from"./Float2PassUniform.js";import{n as k,t as A}from"./OutputHighlight.glsl.js";import{n as j,t as M}from"./OutputColorHighlightOLID.glsl.js";import{n as N,t as P}from"./Transform.glsl.js";import{n as F,t as I}from"./EvaluateAmbientLighting.glsl.js";import{i as oe,n as L,r as R}from"./MainLighting.glsl.js";import{n as z,r as B}from"./ReadShadowMap.glsl.js";import{n as V,t as H}from"./NormalUtils.glsl.js";import{i as U,n as W,r as G,t as K}from"./WaterColor.glsl.js";function q(e){e.fragment.uniforms.add(new g(`texWaveNormal`,e=>e.waveNormal),new g(`texWavePerturbation`,e=>e.wavePerturbation),new x(`waveParams`,e=>o(J,e.waveStrength,e.waveTextureRepeat,e.flowStrength,e.flowOffset)),new O(`waveDirection`,e=>r(Y,e.waveDirection[0]*e.waveVelocity,e.waveDirection[1]*e.waveVelocity))),e.fragment.include(U),e.fragment.code.add(u`const vec2  FLOW_JUMP = vec2(6.0/25.0, 5.0/24.0);
vec2 textureDenormalized2D(sampler2D _tex, vec2 _uv) {
return 2.0 * texture(_tex, _uv).rg - 1.0;
}
float sampleNoiseTexture(vec2 _uv) {
return texture(texWavePerturbation, _uv).b;
}
vec3 textureDenormalized3D(sampler2D _tex, vec2 _uv) {
return 2.0 * texture(_tex, _uv).rgb - 1.0;
}
float computeProgress(vec2 uv, float time) {
return fract(time);
}
float computeWeight(vec2 uv, float time) {
float progress = computeProgress(uv, time);
return 1.0 - abs(1.0 - 2.0 * progress);
}
vec3 computeUVPerturbedWeigth(sampler2D texFlow, vec2 uv, float time, float phaseOffset) {
float flowStrength = waveParams[2];
float flowOffset = waveParams[3];
vec2 flowVector = textureDenormalized2D(texFlow, uv) * flowStrength;
float progress = computeProgress(uv, time + phaseOffset);
float weight = computeWeight(uv, time + phaseOffset);
vec2 result = uv;
result -= flowVector * (progress + flowOffset);
result += phaseOffset;
result += (time - progress) * FLOW_JUMP;
return vec3(result, weight);
}
const float TIME_NOISE_TEXTURE_REPEAT = 0.3737;
const float TIME_NOISE_STRENGTH = 7.77;
vec3 getWaveLayer(sampler2D _texNormal, sampler2D _dudv, vec2 _uv, vec2 _waveDir, float time) {
float waveStrength = waveParams[0];
vec2 waveMovement = time * -_waveDir;
float timeNoise = sampleNoiseTexture(_uv * TIME_NOISE_TEXTURE_REPEAT) * TIME_NOISE_STRENGTH;
vec3 uv_A = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.0);
vec3 uv_B = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.5);
vec3 normal_A = textureDenormalized3D(_texNormal, uv_A.xy) * uv_A.z;
vec3 normal_B = textureDenormalized3D(_texNormal, uv_B.xy) * uv_B.z;
vec3 mixNormal = normalize(normal_A + normal_B);
mixNormal.xy *= waveStrength;
mixNormal.z = sqrt(1.0 - dot(mixNormal.xy, mixNormal.xy));
return mixNormal;
}
vec4 getSurfaceNormalAndFoam(vec2 _uv, float _time) {
float waveTextureRepeat = waveParams[1];
vec3 normal = getWaveLayer(texWaveNormal, texWavePerturbation, _uv * waveTextureRepeat, waveDirection, _time);
float foam  = normals2FoamIntensity(normal, waveParams[0]);
return vec4(normal, foam);
}`)}var J,Y;function X(){return(X=e((()=>{i(),l(),a(),s(),G(),z(),D(),b(),d(),h(),J=c(),Y=ee()})))()}function Z(e){let n=new f,{vertex:r,fragment:i,varyings:a}=n,{output:o,draped:s,receiveShadows:c}=e;ie(r,e),n.include(N),n.attributes.add(`position`,`vec3`),n.attributes.add(`uv0`,`vec2`);let l=new x(`waterColor`,e=>e.color);if(a.add(`vpos`,`vec3`,{invariant:!0}),r.uniforms.add(l),_(o)){if(s)return r.main.add(u`
      if (waterColor.a < ${u.float(T)}) {
        // Discard this vertex
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      }

      vpos = position;
      gl_Position = transformPosition(proj, view, vpos);`),i.uniforms.add(l),i.main.add(u`fragColor = waterColor;`),n;n.include(V,e),a.add(`vuv`,`vec2`),a.add(`vnormal`,`vec3`),a.add(`vtbnMatrix`,`mat3`),r.main.add(u`
      if (waterColor.a < ${u.float(T)}) {
        // Discard this vertex
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      }

      vuv = uv0;
      vpos = position;

      vnormal = getLocalUp(vpos, localOrigin);
      vtbnMatrix = getTBNMatrix(vnormal);

      gl_Position = transformPosition(proj, view, vpos);
      forwardLinearDepthToReadShadowMap();`)}switch(n.include(B,e),o){case 0:case 1:case 2:i.include(I,{pbrMode:0}),n.include(q),n.include(W,e),i.include(y,e),n.include(j,e),i.include(w),S(i,e),oe(i),R(i),i.uniforms.add(l,new m(`timeElapsed`,({timeElapsed:e})=>e),r.uniforms.get(`view`),r.uniforms.get(`localOrigin`)).main.add(u`
        discardBySlice(vpos);
        vec3 localUp = vnormal;
        // the created normal is in tangent space
        vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);

        // we rotate the normal according to the tangent-bitangent-normal-Matrix
        vec3 n = normalize(vtbnMatrix * tangentNormalFoam.xyz);
        vec3 v = -normalize(vpos - cameraPosition);
        float shadow = ${c?u`1.0 - readShadowMap(vpos, linearDepth)`:`1.0`};
        vec4 vPosView = view * vec4(vpos, 1.0);
        vec4 final = vec4(getWaterColor(n, v, mainLightDirection, waterColor.rgb, mainLightIntensity, localUp, shadow, tangentNormalFoam.w, vPosView.xyz, vpos + localOrigin), waterColor.w);

        fragColor = delinearizeGamma(final);
        outputColorHighlightOLID(applySlice(fragColor, vpos), final.rgb);`);break;case 4:n.include(V,e),n.include(q,e),i.include(y,e),a.add(`vuv`,`vec2`),r.main.add(u`
        if (waterColor.a < ${u.float(T)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vuv = uv0;
        vpos = position;

        gl_Position = transformPosition(proj, view, vpos);`),i.uniforms.add(new m(`timeElapsed`,({timeElapsed:e})=>e)).main.add(u`discardBySlice(vpos);
vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);
tangentNormalFoam.xyz = normalize(tangentNormalFoam.xyz);
fragColor = vec4((tangentNormalFoam.xyz + vec3(1.0)) * 0.5, tangentNormalFoam.w);`);break;case 3:r.main.add(u`
        if (waterColor.a < ${u.float(T)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);`),i.include(y,e),i.main.add(`discardBySlice(vpos);`);break;case 10:n.include(A,e),r.main.add(u`
        if (waterColor.a < ${u.float(T)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);`),i.include(y,e),i.main.add(u`discardBySlice(vpos);
calculateOcclusionAndOutputHighlight();`);break;case 11:n.include(re,e),r.main.add(u`
        if (waterColor.a < ${u.float(T)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);
        forwardObjectAndLayerIdColor();`),i.include(y,e),i.main.add(u`discardBySlice(vpos);
outputObjectAndLayerIdColor();`);break;default:throw new t(`shaderbuilder:missing-output`,`Unimplemented shader output ${o} for WaterTechnique`)}return n}var Q;function $(){return($=e((()=>{n(),v(),P(),ne(),k(),F(),L(),H(),z(),K(),X(),C(),ae(),b(),te(),d(),M(),p(),E(),Q=Object.freeze(Object.defineProperty({__proto__:null,build:Z},Symbol.toStringTag,{value:`Module`}))})))()}export{X as i,Q as n,$ as r,Z as t};