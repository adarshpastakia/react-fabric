import{n as e}from"./chunk.js";import{r as t,s as n}from"./vec2f64.js";import{a as r,s as i}from"./ShaderOutput.js";import{n as a,r as o,t as s}from"./glsl.js";import{n as c,t as l}from"./Float3PassUniform.js";import{n as u,t as d}from"./FloatPassUniform.js";import{n as f,t as p}from"./ShaderBuilder.js";import{n as m,r as h}from"./Slice.glsl.js";import{i as g,n as ee,r as te,t as ne}from"./Float4sPassUniform.js";import{n as re,t as ie}from"./ObjectAndLayerIdColor.glsl.js";import{n as ae,t as oe}from"./Float4PassUniform.js";import{n as _,t as v}from"./FloatsPassUniform.js";import{i as y,n as b,r as x,t as S}from"./View.glsl.js";import{n as C,t as w}from"./ColorConversion.glsl.js";import{n as T,t as E}from"./TerrainDepthTest.glsl.js";import{n as D,t as O}from"./Float2PassUniform.js";import{n as k,t as A}from"./OutputHighlight.glsl.js";import{n as j,t as M}from"./OutputColorHighlightOLID.glsl.js";import{n as N,r as P}from"./ForwardLinearDepthToWriteShadowMap.glsl.js";import{n as F,t as I}from"./Transform.glsl.js";import{n as se,t as L}from"./OutputDepth.glsl.js";import{a as R,i as z,n as B,o as V,r as H,t as U}from"./EvaluateSceneLighting.glsl.js";import{n as W,r as G}from"./MainLighting.glsl.js";import{n as K,t as ce}from"./Normals.glsl.js";import{i as le,n as ue,r as de,t as fe}from"./SnowCover.glsl.js";import{n as q,t as pe}from"./ReadShadowMap.glsl.js";import{n as J,t as me}from"./NormalUtils.glsl.js";function he(e,t){let{attributes:n,vertex:r}=e;n.add(`position`,`vec3`),n.add(`profileVertexAndNormal`,`vec4`),n.add(`profileAuxData`,`vec3`),n.add(`profileRight`,`vec2`),n.add(`profileUp`,`vec2`),r.code.add(o`bool isCapVertex() {
return profileAuxData.z == 1.0;
}`),r.uniforms.add(new O(`size`,e=>e.size));let{hasVVSize:i,hasVVColor:s,hasVVOpacity:c}=t;i?(n.add(`sizeFeatureAttribute`,`float`),r.uniforms.add(new l(`vvSizeMinSize`,e=>e.vvSize.minSize),new l(`vvSizeMaxSize`,e=>e.vvSize.maxSize),new l(`vvSizeOffset`,e=>e.vvSize.offset),new l(`vvSizeFactor`,e=>e.vvSize.factor),new l(`vvSizeFallback`,e=>e.vvSize.fallback)),r.code.add(o`vec2 getSize() {
float value = sizeFeatureAttribute;
if (isnan(value)) {
return vvSizeFallback.xz;
}
return size * clamp(vvSizeOffset + value * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).xz;
}`)):r.code.add(o`vec2 getSize(){
return size;
}`),c?(n.add(`opacityFeatureAttribute`,`float`),r.constants.add(`vvOpacityNumber`,`int`,Y),r.uniforms.add(new _(`vvOpacityValues`,Y,e=>e.vvOpacity.values),new _(`vvOpacityOpacities`,Y,e=>e.vvOpacity.opacityValues),new u(`vvOpacityFallback`,e=>e.vvOpacity.fallback,{supportsNaN:!0})),r.code.add(o`
    vec4 applyOpacity(vec4 color) {
      // if we encounter NaN in the color it means the color is in the fallback case where the symbol color
      // is not defined and there is no valid color visual variable override. In this case just return a fully
      // transparent color
      if (isnan(color.r)) {
        return vec4(0);
      }

      float value = opacityFeatureAttribute;

      if (isnan(value)) {
        // If there is a color vv then it will already have taken care of applying the fallback
        return ${a(s,`color`,`vec4(color.rgb, vvOpacityFallback)`)};
      }

      if (value <= vvOpacityValues[0]) {
        return vec4(color.rgb, vvOpacityOpacities[0]);
      }

      for (int i = 1; i < vvOpacityNumber; ++i) {
        if (vvOpacityValues[i] >= value) {
          float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
          return vec4(color.rgb, mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f));
        }
      }

      return vec4( color.rgb, vvOpacityOpacities[vvOpacityNumber - 1]);
    }
    `)):r.code.add(o`vec4 applyOpacity(vec4 color){
return color;
}`),s?(n.add(`colorFeatureAttribute`,`float`),r.constants.add(`vvColorNumber`,`int`,8),r.uniforms.add(new _(`vvColorValues`,8,e=>e.vvColor.values),new ne(`vvColorColors`,8,e=>e.vvColor.colors),new oe(`vvColorFallback`,e=>e.vvColor.fallback)),r.code.add(o`vec4 getColor() {
float value = colorFeatureAttribute;
if (isnan(value)) {
return applyOpacity(vvColorFallback);
}
if (value <= vvColorValues[0]) {
return applyOpacity(vvColorColors[0]);
}
for (int i = 1; i < vvColorNumber; ++i) {
if (vvColorValues[i] >= value) {
float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
return applyOpacity(mix(vvColorColors[i-1], vvColorColors[i], f));
}
}
return applyOpacity(vvColorColors[vvColorNumber - 1]);
}`)):r.code.add(o`vec4 getColor(){
return applyOpacity(vec4(1, 1, 1, 1));
}`),r.code.add(o`vec3 decompressAxis(vec2 axis) {
float z = 1.0 - abs(axis.x) - abs(axis.y);
return normalize(vec3(axis + sign(axis) * min(z, 0.0), z));
}
vec3 calculateVPos() {
vec2 size = getSize();
vec3 origin = position;
vec3 right = decompressAxis(profileRight);
vec3 up = decompressAxis(profileUp);
vec2 profileVertex = profileVertexAndNormal.xy * size;`),r.code.add(o`if(isCapVertex()) {
float positionOffsetAlongProfilePlaneNormal = profileAuxData.x * size[0];
vec3 forward = cross(up, right);
vec3 offset = right * profileVertex.x + up * profileVertex.y + forward * positionOffsetAlongProfilePlaneNormal;
return origin + offset;
}
vec2 rotationRight = vec2(profileAuxData.x, profileAuxData.y);
float maxDistance = length(rotationRight);`),r.code.add(o`rotationRight = maxDistance > 0.0 ? normalize(rotationRight) : vec2(0, 0);
float rx = dot(profileVertex, rotationRight);
if (abs(rx) > maxDistance) {
vec2 rotationUp = vec2(-rotationRight.y, rotationRight.x);
float ry = dot(profileVertex, rotationUp);
profileVertex = rotationRight * maxDistance * sign(rx) + rotationUp * ry;
}
vec3 offset = right * profileVertex.x + up * profileVertex.y;
return origin + offset;
}`),r.code.add(o`vec3 localNormal() {
vec3 right = decompressAxis(profileRight);
vec3 up = decompressAxis(profileUp);
vec3 normal = right * profileVertexAndNormal.z + up * profileVertexAndNormal.w;
if(isCapVertex()) {
vec3 forward = cross(up, right);
normal += forward * profileAuxData.y;
}
return normal;
}`)}var Y,X,Z=e((()=>{t(),D(),c(),ae(),ee(),d(),v(),s(),te(),Y=8,X=class extends g{constructor(){super(...arguments),this.size=n(1,1)}}}));function Q(e){let t=new f,{vertex:n,fragment:r,varyings:s}=t;b(n,e),s.add(`vpos`,`vec3`,{invariant:!0}),t.include(he,e);let{output:c,spherical:d,pbrMode:p,snowCover:h}=e;switch((i(c)||c===9)&&(t.include(F),t.include(pe,e),t.include(ie,e),t.include(E,e),s.add(`vnormal`,`vec3`),s.add(`vcolor`,`vec4`),n.main.add(o`vpos = calculateVPos();
vnormal = normalize(localNormal());
forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
gl_Position = transformPosition(proj, view, vpos);
forwardObjectAndLayerIdColor();
vcolor = getColor();
forwardLinearDepthToReadShadowMap();`)),c){case 0:t.include(le,e),r.include(z,e),r.include(V,e),t.include(K,e),r.include(m,e),t.include(M,e),S(r,e),H(r),U(r),r.uniforms.add(n.uniforms.get(`localOrigin`),new l(`ambient`,e=>e.ambient),new l(`diffuse`,e=>e.diffuse),new u(`opacity`,e=>e.opacity)),r.include(w),r.include(fe,e),G(r),r.main.add(o`
        discardBySlice(vpos);
        discardByTerrainDepth();

        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        shadingParams.normalView = vnormal;
        vec3 normal = shadingNormal(shadingParams);
        float ssao = evaluateAmbientOcclusionInverse();

        vec3 posWorld = vpos + localOrigin;
        vec3 normalGround = ${d?`normalize(posWorld);`:`vec3(0.0, 0.0, 1.0);`}

        vec3 albedo = vcolor.rgb * max(ambient, diffuse); // combine the old material parameters into a single one
        float combinedOpacity = vcolor.a * opacity;

        ${a(h,o`float snow = getSnow(normal, normalGround);
                 albedo = mix(albedo, vec3(1), snow);
                 ssao = mix(ssao, 1.0, snow);`)}

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        float shadow = readShadow(additionalAmbientScale, vpos);

        ${a(p===2,`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];\n           ${a(h,`mrr = applySnowToMRR(mrr, snow);`)}`)}

        vec3 shadedColor = ${p===2?`evaluateSceneLightingPBR(normal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, additionalAmbientIrradiance);`:`evaluateSceneLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        vec4 finalColor = vec4(shadedColor, combinedOpacity);
        outputColorHighlightOLID(applySlice(finalColor, vpos), albedo ${a(h,`, snow`)});`);break;case 1:t.include(F),n.main.add(o`vpos = calculateVPos();
gl_Position = transformPosition(proj, view, vpos);`),t.fragment.include(m,e),r.main.add(o`discardBySlice(vpos);`);break;case 3:case 4:case 5:case 6:t.include(F),N(t),s.add(`depth`,`float`),n.main.add(o`vpos = calculateVPos();
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);`),t.fragment.include(m,e),t.include(L,e),r.main.add(o`discardBySlice(vpos);
outputDepth(depth);`);break;case 9:t.fragment.include(m,e),r.main.add(o`discardBySlice(vpos);
outputObjectAndLayerIdColor();`);break;case 2:t.include(F),t.include(J,e),y(n),s.add(`vnormal`,`vec3`),n.main.add(o`vpos = calculateVPos();
vnormal = normalize((viewNormal * vec4(localNormal(), 1.0)).xyz);
gl_Position = transformPosition(proj, view, vpos);`),t.fragment.include(m,e),r.main.add(o`discardBySlice(vpos);
vec3 normal = normalize(vnormal);
if (gl_FrontFacing == false) normal = -normal;
fragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);`);break;case 8:t.include(F),t.include(J,e),s.add(`vnormal`,`vec3`),n.main.add(o`vpos = calculateVPos();
gl_Position = transformPosition(proj, view, vpos);`),t.fragment.include(m,e),t.include(A,e),r.main.add(o`discardBySlice(vpos);
calculateOcclusionAndOutputHighlight();`)}return t}var $,ge=e((()=>{P(),r(),h(),I(),re(),Z(),se(),k(),R(),B(),W(),ce(),me(),de(),q(),T(),C(),x(),c(),d(),s(),ue(),j(),p(),$=Object.freeze(Object.defineProperty({__proto__:null,build:Q},Symbol.toStringTag,{value:`Module`}))}));export{X as a,Z as i,$ as n,ge as r,Q as t};