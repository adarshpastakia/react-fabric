import{n as e}from"./chunk.js";import{b as t,h as n}from"./vec2.js";import{o as r,u as i}from"./vec4.js";import{a,o}from"./vec4f64.js";import{a as s,r as c}from"./vec2f64.js";import{a as l,s as u}from"./ShaderOutput.js";import{r as d,t as f}from"./glsl.js";import{n as p,t as ee}from"./FloatPassUniform.js";import{n as m,t as h}from"./Texture2DPassUniform.js";import{n as te,t as g}from"./ShaderBuilder.js";import{n as _,r as ne}from"./Slice.glsl.js";import{n as re,t as ie}from"./ObjectAndLayerIdColor.glsl.js";import{n as v,t as y}from"./Float4PassUniform.js";import{n as ae,r as b,t as x}from"./View.glsl.js";import{n as S,t as C}from"./ColorConversion.glsl.js";import{n as w,t as T}from"./TerrainDepthTest.glsl.js";import{n as E,t as D}from"./Float2PassUniform.js";import{n as O,t as k}from"./OutputHighlight.glsl.js";import{n as A,t as j}from"./AlphaCutoff.js";import{n as M,t as N}from"./OutputColorHighlightOLID.glsl.js";import{n as P,t as F}from"./Transform.glsl.js";import{n as oe,t as I}from"./EvaluateAmbientLighting.glsl.js";import{i as L,n as R,r as z}from"./MainLighting.glsl.js";import{n as B,t as V}from"./ReadShadowMap.glsl.js";import{n as H,t as U}from"./NormalUtils.glsl.js";import{i as W,n as G,r as K,t as q}from"./WaterColor.glsl.js";function J(e){e.fragment.uniforms.add(new h(`texWaveNormal`,e=>e.waveNormal),new h(`texWavePerturbation`,e=>e.wavePerturbation),new y(`waveParams`,e=>i(Y,e.waveStrength,e.waveTextureRepeat,e.flowStrength,e.flowOffset)),new D(`waveDirection`,e=>t(X,e.waveDirection[0]*e.waveVelocity,e.waveDirection[1]*e.waveVelocity))),e.fragment.include(W),e.fragment.code.add(d`const vec2  FLOW_JUMP = vec2(6.0/25.0, 5.0/24.0);
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
}`)}var Y,X,Z=e((()=>{n(),c(),r(),a(),K(),B(),E(),v(),f(),m(),Y=o(),X=s()}));function Q(e){let t=new te,{vertex:n,fragment:r,varyings:i}=t,{output:a,draped:o,receiveShadows:s}=e;ae(n,e),t.include(P),t.attributes.add(`position`,`vec3`),t.attributes.add(`uv0`,`vec2`);let c=new y(`waterColor`,e=>e.color);if(i.add(`vpos`,`vec3`,{invariant:!0}),n.uniforms.add(c),u(a)){if(o)return n.main.add(d`
      if (waterColor.a < ${d.float(A)}) {
        // Discard this vertex
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      }

      vpos = position;
      gl_Position = transformPosition(proj, view, vpos);`),r.uniforms.add(c),r.main.add(d`fragColor = waterColor;`),t;t.include(H,e),i.add(`vuv`,`vec2`),i.add(`vnormal`,`vec3`),i.add(`vtbnMatrix`,`mat3`),n.main.add(d`
      if (waterColor.a < ${d.float(A)}) {
        // Discard this vertex
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      }

      vuv = uv0;
      vpos = position;

      vnormal = getLocalUp(vpos, localOrigin);
      vtbnMatrix = getTBNMatrix(vnormal);
      forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);

      gl_Position = transformPosition(proj, view, vpos);
      forwardLinearDepthToReadShadowMap();`)}switch(t.include(V,e),t.include(T,e),a){case 0:r.include(oe,{pbrMode:0,lightingSphericalHarmonicsOrder:2}),t.include(J),t.include(G,e),r.include(_,e),t.include(N,e),r.include(C),x(r,e),L(r),z(r),r.uniforms.add(c,new p(`timeElapsed`,({timeElapsed:e})=>e),n.uniforms.get(`view`),n.uniforms.get(`localOrigin`)).main.add(d`
        discardBySlice(vpos);
        discardByTerrainDepth();
        vec3 localUp = vnormal;
        // the created normal is in tangent space
        vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);

        // we rotate the normal according to the tangent-bitangent-normal-Matrix
        vec3 n = normalize(vtbnMatrix * tangentNormalFoam.xyz);
        vec3 v = -normalize(vpos - cameraPosition);
        float shadow = ${s?d`1.0 - readShadowMap(vpos, linearDepth)`:`1.0`};
        vec4 vPosView = view * vec4(vpos, 1.0);
        vec4 final = vec4(getWaterColor(n, v, mainLightDirection, waterColor.rgb, mainLightIntensity, localUp, shadow, tangentNormalFoam.w, vPosView.xyz, vpos + localOrigin), waterColor.w);

        fragColor = delinearizeGamma(final);
        outputColorHighlightOLID(applySlice(fragColor, vpos), final.rgb);`);break;case 2:t.include(H,e),t.include(J,e),r.include(_,e),i.add(`vuv`,`vec2`),n.main.add(d`
        if (waterColor.a < ${d.float(A)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vuv = uv0;
        vpos = position;

        gl_Position = transformPosition(proj, view, vpos);`),r.uniforms.add(new p(`timeElapsed`,({timeElapsed:e})=>e)).main.add(d`discardBySlice(vpos);
vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);
tangentNormalFoam.xyz = normalize(tangentNormalFoam.xyz);
fragColor = vec4((tangentNormalFoam.xyz + vec3(1.0)) * 0.5, tangentNormalFoam.w);`);break;case 8:t.include(k,e),n.main.add(d`
        if (waterColor.a < ${d.float(A)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);`),r.include(_,e),r.main.add(d`discardBySlice(vpos);
calculateOcclusionAndOutputHighlight();`);break;case 9:t.include(ie,e),n.main.add(d`
        if (waterColor.a < ${d.float(A)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);
        forwardObjectAndLayerIdColor();`),r.include(_,e),r.main.add(d`discardBySlice(vpos);
outputObjectAndLayerIdColor();`)}return t}var $,se=e((()=>{l(),ne(),F(),re(),O(),I(),R(),U(),B(),w(),q(),Z(),S(),b(),v(),ee(),f(),M(),g(),j(),$=Object.freeze(Object.defineProperty({__proto__:null,build:Q},Symbol.toStringTag,{value:`Module`}))}));export{Z as i,Q as n,se as r,$ as t};