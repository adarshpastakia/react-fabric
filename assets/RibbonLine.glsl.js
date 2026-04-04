import{n as e}from"./chunk.js";import{i as t,t as n}from"./time.js";import{n as r,t as i}from"./uid.js";import{b as a,h as o}from"./vec2.js";import{n as s,r as c}from"./uuid.js";import{o as l,u}from"./vec4.js";import{a as d,n as f,o as p}from"./vec4f64.js";import{a as ee,r as m}from"./vec2f64.js";import{g as h,i as g,s as _}from"./enums.js";import{n as v,r as y,t as b}from"./glsl.js";import{n as x,t as S}from"./FloatPassUniform.js";import{n as C,t as w}from"./Texture2DPassUniform.js";import{l as T,n as te,t as E,u as ne}from"./Texture.js";import{n as re,t as ie}from"./ShaderBuilder.js";import{n as ae,r as oe}from"./Slice.glsl.js";import{n as se,t as ce}from"./ObjectAndLayerIdColor.glsl.js";import{n as D,t as O}from"./Float4PassUniform.js";import{n as k,t as A}from"./FloatBindUniform.js";import{n as le,t as ue}from"./Matrix4BindUniform.js";import{a as j,n as de,r as M,t as fe}from"./View.glsl.js";import{d as N,f as pe,h as me,m as he,n as ge,p as P,t as _e}from"./MarkerSizing.glsl.js";import{n as ve,t as ye}from"./ColorConversion.glsl.js";import{n as be,t as xe}from"./MixExternalColor.glsl.js";import{n as Se,t as Ce}from"./PiUtils.glsl.js";import{n as we,t as Te}from"./PositionOutsideClipSpace.js";import{n as Ee,t as De}from"./Float2BindUniform.js";import{n as Oe,t as ke}from"./TerrainDepthTest.glsl.js";import{n as Ae,t as je}from"./Float4BindUniform.js";import{n as Me,t as Ne}from"./Float2PassUniform.js";import{n as Pe,t as Fe}from"./AlphaCutoff.js";import{n as Ie,t as Le}from"./OutputColorHighlightOLID.glsl.js";function F(e){return e!=null&&`image`in e}function Re(e,t){return e==null?e:{pattern:e.slice(),pixelRatio:t}}function ze(e){return{pattern:[e,e],pixelRatio:2}}function Be(e){switch(e?.type){case`style`:return Ve(e.style);case`image`:return new z(e.image,e.width,e.length);case void 0:case null:return null}return null}function Ve(e){return e==null?null:Re(L[e],R)}var I,L,R,z,B=e((()=>{s(),I={dash:[4,3],dot:[1,3],"long-dash":[8,3],"short-dash":[4,1],"short-dot":[1,1]},L={dash:I.dash,"dash-dot":[...I.dash,...I.dot],dot:I.dot,"long-dash":I[`long-dash`],"long-dash-dot":[...I[`long-dash`],...I.dot],"long-dash-dot-dot":[...I[`long-dash`],...I.dot,...I.dot],none:null,"short-dash":I[`short-dash`],"short-dash-dot":[...I[`short-dash`],...I[`short-dot`]],"short-dash-dot-dot":[...I[`short-dash`],...I[`short-dot`],...I[`short-dot`]],"short-dot":I[`short-dot`],solid:null},R=8,z=class{constructor(e,t,n){this.image=e,this.width=t,this.length=n,this.uuid=c()}}})),V,H,U=e((()=>{r(),V=class{constructor(e,t,n){this._createTexture=e,this._parametersKey=t,this._repository=new Map,this._orphanCache=n.newCache(`procedural-texture-repository:${i()}`,e=>e.dispose())}destroy(){for(let{texture:e}of this._repository.values())e.dispose();this._repository.clear(),this._orphanCache.destroy()}swap(e,t=null){let n=this._acquire(e);return this.release(t),n}release(e){if(e==null)return;let t=this._parametersKey(e),n=this._repository.get(t);if(n&&(n.refCount--,n.refCount===0)){this._repository.delete(t);let{texture:e}=n;this._orphanCache.put(t,e)}}_acquire(e){if(e==null)return null;let t=this._parametersKey(e),n=this._repository.get(t);if(n)return n.refCount++,n.texture;let r=this._orphanCache.pop(t)??this._createTexture(e),i=new H(r);return this._repository.set(t,i),r}},H=class{constructor(e){this.texture=e,this.refCount=1}}}));function He(e,t){return new V(t=>{if(F(t))return We(e,t.image);let{data:n,textureSize:r}=Ue(t),i=new T(r,1);return i.dataType=_.FLOAT,i.pixelFormat=6403,i.internalFormat=g.R16F,i.wrapMode=10497,new E(e,i,n)},e=>F(e)?`image-${e.uuid}`:`${e.pattern.join(`,`)}-r${e.pixelRatio}`,t)}function Ue(e){let t=W(e),n=1/e.pixelRatio,r=G(e),i=[],a=1;for(let e of t){for(let t=0;t<e;t++){let r=a*(Math.min(t,e-1-t)+.5)*n;i.push(r)}a=-a}let o=Math.round(t[0]/2);return{data:new Float32Array([...i.slice(o),...i.slice(0,o)]),textureSize:r}}function W(e){return e.pattern.map(t=>Math.round(t*e.pixelRatio))}function G(e){if(e==null)return 1;let t=W(e);return Math.floor(t.reduce((e,t)=>e+t))}function We(e,t){let{data:n,width:r,height:i}=t,a=new T(r,i);return a.dataType=_.UNSIGNED_BYTE,a.pixelFormat=6408,a.internalFormat=g.RGBA8,a.wrapMode={s:10497,t:33071},a.hasMipmap=!0,a.samplingMode=9987,new E(e,a,n)}var K=e((()=>{B(),U(),h(),te(),ne()}));function Ge(e){return e==null?f:e.length===4?e:u(q,e[0],e[1],e[2],1)}var q,Ke=e((()=>{l(),d(),q=p()}));function qe(e,t){if(!t.stippleEnabled)return void e.fragment.code.add(y`float getStippleAlpha(float lineWidth) { return 1.0; }
void discardByStippleAlpha(float stippleAlpha, float threshold) {}
vec4 blendStipple(vec4 color, float stippleAlpha) { return color; }`);let n=!(t.draped&&t.stipplePreferContinuous),{vertex:r,fragment:i}=e;t.draped||(fe(r,t),r.uniforms.add(new k(`worldToScreenPerDistanceRatio`,({camera:e})=>1/e.perScreenPixelRatio)).code.add(y`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),e.varyings.add(`vStippleDistance`,`float`),e.varyings.add(`vStippleDistanceLimits`,`vec2`),e.varyings.add(`vStipplePatternStretch`,`float`),r.code.add(y`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${y.float(Y)};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),j(r),r.code.add(y`
    vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {

      // First check if the segment is long enough to support fully screen space patterns.
      // Force sparse mode for segments that are very large in screen space even if it is not allowed,
      // to avoid imprecision from calculating with large floats.
      if (segmentLengthPseudoScreen >= ${n?`patternLength`:`1e4`}) {
        // Round the screen length to get an integer number of pattern repetitions (minimum 1).
        float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
        float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
        float segmentLengthScreenRounded = flooredRepetitions * patternLength;

        float stretch = repetitions / flooredRepetitions;

        // We need to impose a lower bound on the stretch factor to prevent the dots from merging together when there is only 1 repetition.
        // 0.75 is the lowest possible stretch value for flooredRepetitions > 1, so it makes sense as lower bound.
        vStipplePatternStretch = max(0.75, stretch);

        return vec2(0.0, segmentLengthScreenRounded);
      }
      return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
    }
  `),i.uniforms.add(new w(`stipplePatternTexture`,e=>e.stippleTexture),new x(`stipplePatternPixelSizeInv`,e=>1/J(e))),t.stippleOffColorEnabled&&i.uniforms.add(new O(`stippleOffColor`,e=>Ge(e.stippleOffColor))),e.include(N),t.worldSizedImagePattern?(e.varyings.add(`vStippleV`,`float`),e.fragment.include(xe),i.code.add(y`vec4 getStippleColor(out bool isClamped) {
vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;
float u = vStippleDistance * stipplePatternPixelSizeInv;
float v = vStippleV == -1.0 ? 0.5 : vStippleV;
return texture(stipplePatternTexture, vec2(u, v));
}
vec4 getStippleColor() {
bool ignored;
return getStippleColor(ignored);
}
float getStippleSDF() {
vec4 color = getStippleColor();
return color.a == 0.0 ? -0.5 : 0.5;
}
float getStippleAlpha(float lineWidth) {
return getStippleColor().a;
}
vec4 blendStipple(vec4 color, float stippleAlpha) {
vec4 stippleColor = getStippleColor();
int mixMode  = 1;
vec3 col = mixExternalColor(color.rgb, vec3(1.0), stippleColor.rgb, mixMode);
float opacity = mixExternalOpacity(color.a, 1.0, stippleColor.a, mixMode);
return vec4(col, opacity);
}`)):i.code.add(y`
    float getStippleSDF(out bool isClamped) {
      float stippleDistanceClamped = noPerspectiveRead(clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y));
      float lineSizeInv = noPerspectiveRead(vLineSizeInv);

      vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
      isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;

      float u = stippleDistanceClamped * stipplePatternPixelSizeInv * lineSizeInv;
      u = fract(u);

      float sdf = texture(stipplePatternTexture, vec2(u, 0.5)).r;

      return (sdf - 0.5) * vStipplePatternStretch + 0.5;
    }

    float getStippleSDF() {
      bool ignored;
      return getStippleSDF(ignored);
    }

    float getStippleAlpha(float lineWidth) {
      bool isClamped;
      float stippleSDF = getStippleSDF(isClamped);
      float antiAliasedResult = clamp(stippleSDF * lineWidth + 0.5, 0.0, 1.0);
      return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
    }

    vec4 blendStipple(vec4 color, float stippleAlpha) {
      return ${t.stippleOffColorEnabled?`mix(color, stippleOffColor, stippleAlpha)`:`vec4(color.rgb, color.a * stippleAlpha)`};
    }
  `),i.code.add(y`
    void discardByStippleAlpha(float stippleAlpha, float threshold) {
     ${v(!t.stippleOffColorEnabled,`if (stippleAlpha < threshold) { discard; }`)}
    }
  `)}function J(e){let t=e.stipplePattern;return F(t)?t.length:t?G(t)/t.pixelRatio:1}var Y,X=e((()=>{be(),P(),M(),D(),A(),S(),b(),C(),B(),K(),Ke(),Y=.4})),Je,Z,Q,Ye,Xe,Ze=e((()=>{n(),Je=.1,Z=t(1),Q=t(1),Ye=1e3,Xe=27e6}));function Qe(e,t){let{hasAnimation:n,animation:r}=t;if(!n)return;let{attributes:i,varyings:o,vertex:s,fragment:c}=e;i.add(`timeStamps`,`vec4`),o.add(`vTimeStamp`,`float`),o.add(`vFirstTime`,`float`),o.add(`vLastTime`,`float`),o.add(`vTransitionType`,`float`),s.main.add(y`vTimeStamp = timeStamps.x;
vFirstTime = timeStamps.y;
vLastTime = timeStamps.z;
vTransitionType = timeStamps.w;`),r===3&&c.constants.add(`decayRate`,`float`,2.3),c.code.add(y`
    float getTrailOpacity(float x) {
      if (x < 0.0) {
        return 0.0;
      }

      ${$e(r)}
    }`),c.uniforms.add(new x(`timeElapsed`,e=>e.timeElapsed),new x(`trailLength`,e=>e.trailLength),new x(`speed`,e=>e.animationSpeed),new Ne(`startEndTime`,e=>a(et,e.startTime,e.endTime))),c.constants.add(`fadeInTime`,`float`,Q),c.constants.add(`fadeOutTime`,`float`,Z),c.constants.add(`incomingTransition`,`int`,0),c.constants.add(`outgoingTransition`,`int`,2),c.code.add(y`float fadeIn(float x) {
return smoothstep(0.0, fadeInTime, x);
}
float fadeOut(float x) {
return isinf(fadeOutTime) ? 1.0 : smoothstep(fadeOutTime, 0.0, x);
}
void updateAlphaIf(inout float alpha, bool condition, float newAlpha) {
alpha = condition ? min(alpha, newAlpha) : alpha;
}
vec4 animate(vec4 color) {
float startTime = startEndTime[0];
float endTime = startEndTime[1];
float totalTime = vLastTime - vFirstTime;
float actualFadeOutTime = min(fadeOutTime * speed, trailLength);
float longStreamlineThreshold = (fadeInTime + 1.0) * speed + actualFadeOutTime;
bool longStreamline = totalTime > longStreamlineThreshold;
float totalTimeWithFadeOut = longStreamline && actualFadeOutTime != trailLength ? totalTime : totalTime + actualFadeOutTime;
float fadeOutStartTime = longStreamline ? totalTime - actualFadeOutTime : totalTime;
float originTime =  -vFirstTime;
float actualEndTime = int(vTransitionType) == outgoingTransition ? min(endTime, startTime + vLastTime / speed) : endTime;
vec4 animatedColor = color;
if (speed == 0.0) {
float alpha = getTrailOpacity((totalTimeWithFadeOut - (vTimeStamp - vFirstTime)) / trailLength);
updateAlphaIf(alpha, !isinf(actualEndTime), fadeOut(timeElapsed - actualEndTime));
updateAlphaIf(alpha, true, fadeIn(timeElapsed - startTime));
animatedColor.a *= alpha;
return animatedColor;
}
float relativeStartTime = mod(startTime, totalTimeWithFadeOut);
float shiftedTimeElapsed = timeElapsed - relativeStartTime + originTime;
float headRelativeToFirst = mod(shiftedTimeElapsed * speed, totalTimeWithFadeOut);
float vRelativeToHead = headRelativeToFirst - originTime - vTimeStamp;
float vAbsoluteTime = timeElapsed - vRelativeToHead / speed;
if (startTime > timeElapsed) {
return vec4(0.0);
}
float alpha = getTrailOpacity(vRelativeToHead / trailLength);
updateAlphaIf(alpha, true, fadeIn(timeElapsed - startTime));
updateAlphaIf(alpha, !isinf(actualEndTime), fadeOut(timeElapsed - actualEndTime));
updateAlphaIf(alpha, int(vTransitionType) != incomingTransition, step(startTime, vAbsoluteTime));
updateAlphaIf(alpha, headRelativeToFirst > fadeOutStartTime, fadeOut((headRelativeToFirst - fadeOutStartTime) / speed));
alpha *= fadeIn(vTimeStamp - vFirstTime);
animatedColor.a *= alpha;
return animatedColor;
}`)}function $e(e){switch(e){case 2:return`return x >= 0.0 && x <= 1.0 ? 1.0 : 0.0;`;case 3:return`float cutOff = exp(-decayRate);
        return (exp(-decayRate * x) - cutOff) / (1.0 - cutOff);`;default:return`return 1.0;`}}var et,tt=e((()=>{o(),m(),Ze(),Me(),S(),b(),et=ee()}));function nt(e){let t=new re,{attributes:n,varyings:r,vertex:i,fragment:a}=t,{applyMarkerOffset:o,draped:s,output:c,capType:l,stippleEnabled:u,falloffEnabled:d,roundJoins:f,wireframe:p,innerColorEnabled:ee,hasAnimation:m,hasScreenSizePerspective:h,worldSizedImagePattern:g}=e;a.include(Se),t.include(he,e),t.include(qe,e),t.include(ce,e),t.include(ke,e),t.include(Qe,e);let _=o&&!s;_&&(i.uniforms.add(new x(`markerScale`,e=>e.markerScale)),t.include(_e,{space:2,hasScreenSizePerspective:h})),de(i,e),i.uniforms.add(new le(`inverseProjectionMatrix`,e=>e.camera.inverseProjectionMatrix),new De(`nearFar`,e=>e.camera.nearFar),new x(`miterLimit`,e=>e.join===`miter`?e.miterLimit:0),new je(`viewport`,e=>e.camera.fullViewport)),i.constants.add(`LARGE_HALF_FLOAT`,`float`,65500),n.add(`position`,`vec3`),n.add(`previousDelta`,`vec4`),n.add(`nextDelta`,`vec4`),n.add(`lineParameters`,`vec2`),n.add(`u0`,`float`),r.add(`vColor`,`vec4`),r.add(`vpos`,`vec3`,{invariant:!0}),r.add(`vLineDistance`,`float`),r.add(`vLineWidth`,`float`);let b=u;b&&r.add(`vLineSizeInv`,`float`);let S=l===2,C=u&&S,w=d||C;w&&r.add(`vLineDistanceNorm`,`float`),S&&(r.add(`vSegmentSDF`,`float`),r.add(`vReverseSegmentSDF`,`float`)),i.code.add(y`vec2 perpendicular(vec2 v) {
return vec2(v.y, -v.x);
}
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`),i.code.add(y`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),i.code.add(y`void clip(
inout vec4 pos,
inout vec4 prev,
inout vec4 next,
bool isStartVertex
) {
float vnp = nearFar[0] * 0.99;
if (pos.z > -nearFar[0]) {
if (!isStartVertex) {
if (prev.z < -nearFar[0]) {
pos = mix(prev, pos, interp(vnp, prev, pos));
next = pos;
} else {
pos = vec4(0.0, 0.0, 0.0, 1.0);
}
} else {
if (next.z < -nearFar[0]) {
pos = mix(pos, next, interp(vnp, pos, next));
prev = pos;
} else {
pos = vec4(0.0, 0.0, 0.0, 1.0);
}
}
} else {
if (prev.z > -nearFar[0]) {
prev = mix(pos, prev, interp(vnp, pos, prev));
}
if (next.z > -nearFar[0]) {
next = mix(next, pos, interp(vnp, next, pos));
}
}
}`),j(i),i.constants.add(`aaWidth`,`float`,u?0:1).main.add(y`
    // unpack values from vertex type
    bool isStartVertex = abs(abs(lineParameters.y) - 3.0) == 1.0;
    vec3 prevPosition = position + previousDelta.xyz * previousDelta.w;
    vec3 nextPosition = position + nextDelta.xyz * nextDelta.w;

    float coverage = 1.0;

    // Check for special value of lineParameters.y which is used by the Renderer when graphics are removed before the
    // VBO is recompacted. If this is the case, then we just project outside of clip space.
    if (lineParameters.y == 0.0) {
      gl_Position = ${we};
    }
    else {
      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(prevPosition, 1.0);
      vec4 next = view * vec4(nextPosition, 1.0);

      bool isJoin = abs(lineParameters.y) < 3.0;
  `),_&&i.main.add(y`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos.xyz, other.xyz);
if (!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos.xyz) * 0.5;
}`),t.include(pe),i.main.add(y`
      clip(pos, prev, next, isStartVertex);

      vec3 clippedPos = pos.xyz;
      vec3 clippedCenter = mix(pos.xyz, isStartVertex ? next.xyz : prev.xyz, 0.5);

      forwardViewPosDepth(pos.xyz);

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);

      vec2 left = (pos.xy - prev.xy);
      vec2 right = (next.xy - pos.xy);

      float leftLen = length(left);
      float rightLen = length(right);

      float lineSize = getSize(${v(h,`clippedPos`)});
      ${v(u&&h,`float patternLineSize = getSize(clippedCenter);`)}
      ${v(u&&!h,`float patternLineSize = lineSize;`)}

      ${v(g,y`
          lineSize += aaWidth;
          float lineWidth = lineSize * pixelRatio * worldToScreenRatio;
          if (lineWidth < 1.0) {
            coverage = lineWidth;
            lineWidth = 1.0;
          }
        `,y`
          if (lineSize < 1.0) {
            coverage = lineSize; // convert sub-pixel coverage to alpha
            lineSize = 1.0;
          }

          lineSize += aaWidth;
          float lineWidth = lineSize * pixelRatio;
        `)}

      vLineWidth = noPerspectiveWrite(lineWidth, pos.w);
      ${b?y`vLineSizeInv = noPerspectiveWrite(1.0 / lineSize, pos.w);`:``}
  `),(u||S)&&i.main.add(y`
      float isEndVertex = float(!isStartVertex);
      vec2 segmentOrigin = mix(pos.xy, prev.xy, isEndVertex);
      vec2 segment = mix(right, left, isEndVertex);
      ${S?y`vec2 segmentEnd = mix(next.xy, pos.xy, isEndVertex);`:``}
    `),i.main.add(y`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = (left.x * right.y - left.y * right.x) * lineParameters.y > 0.0;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = perpendicular(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
float subdivisionFactor = lineParameters.x;
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),f?i.main.add(y`
        vec2 startDir = leftLen < 0.001 ? right : left;
        startDir = perpendicular(startDir);

        vec2 endDir = rightLen < 0.001 ? left : right;
        endDir = perpendicular(endDir);

        float factor = ${u?y`min(1.0, subdivisionFactor * ${y.float(3/2)})`:y`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(lineParameters.y) * factor * rotationAngle);
      `):i.main.add(y`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = perpendicular(joinDisplacementDir);`);let T=l!==0;return i.main.add(y`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = perpendicular(joinDisplacementDir);

      ${T?y`capDisplacementDir = isStartVertex ? -right : left;`:``}
    }
  `),i.main.add(y`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(lineParameters.y) * displacementLen + capDisplacementDir * displacementLen;
    float lineDistNorm = noPerspectiveWrite(sign(lineParameters.y), pos.w);

    vLineDistance = lineWidth * lineDistNorm;
    ${w?y`vLineDistanceNorm = lineDistNorm;`:``}

    pos.xy += dpos;
  `),S&&i.main.add(y`vec2 segmentDir = normalize(segment);
vSegmentSDF = noPerspectiveWrite((isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir)), pos.w);
vReverseSegmentSDF = noPerspectiveWrite((isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir)), pos.w);`),u&&(s?i.uniforms.add(new k(`worldToScreenRatio`,e=>1/e.screenToPCSRatio)):i.main.add(y`vec3 segmentCenter = mix((nextPosition + position) * 0.5, (position + prevPosition) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),i.main.add(y`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(nextPosition - position, position - prevPosition, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),s?i.main.add(y`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = u0 * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):i.main.add(y`float startPseudoScreen = mix(u0, u0 - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),i.uniforms.add(new x(`stipplePatternPixelSize`,e=>J(e))),i.main.add(y`
      float patternLength = patternLineSize * stipplePatternPixelSize;

      ${v(g,y`
          float uu = mix(u0, u0 - segmentLengthRender, isEndVertex);
          vStippleDistanceLimits = vec2(uu, uu + segmentLengthRender);
          vStipplePatternStretch = 1.0;

          // The v-coordinate used in case of an image pattern.
          bool isLeft = sign(lineParameters.y) < 0.0;
          vStippleV = isLeft ? 0.0 : 1.0;
        `,y`
          // Compute the coordinates at both start and end of the line segment, because we need both to clamp to in the
          // fragment shader
          vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);
        `)}

      vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);

      // Adjust the coordinate to the displaced position (the pattern is shortened/overextended on the in/outside of
      // joins)
      if (segmentLengthScreenDouble >= 0.001) {
        // Project the actual vertex position onto the line segment. Note that the resulting factor is within [0..1]
        // at the original vertex positions, and slightly outside of that range at the displaced positions
        vec2 stippleDisplacement = pos.xy - segmentOrigin;
        float stippleDisplacementFactor = dot(segment, stippleDisplacement) / (segmentLengthScreenDouble * segmentLengthScreenDouble);

        // Apply this offset to the actual vertex coordinate (can be screen or pseudo-screen space)
        vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
      }

      // Cancel out perspective correct interpolation because we want this length the really represent the screen
      // distance
      vStippleDistanceLimits = noPerspectiveWrite(vStippleDistanceLimits, pos.w);
      vStippleDistance = noPerspectiveWrite(vStippleDistance, pos.w);

      // Disable stipple distance limits on caps
      vStippleDistanceLimits = isJoin ?
                                 vStippleDistanceLimits :
                                 isStartVertex ?
                                  vec2(-1e34, vStippleDistanceLimits.y) :
                                  vec2(vStippleDistanceLimits.x, 1e34);
    `)),i.main.add(y`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;

      vColor = getColor();
      vColor.a = noPerspectiveWrite(vColor.a * coverage, pos.w);

      ${p&&!s?`pos.z -= 0.001 * pos.w;`:``}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }`),t.fragment.include(ae,e),t.include(Le,e),a.include(ye),a.main.add(y`discardBySlice(vpos);
discardByTerrainDepth();`),t.include(N),a.main.add(y`
    float lineWidth = noPerspectiveRead(vLineWidth);
    float lineDistance = noPerspectiveRead(vLineDistance);
    ${v(w,y`float lineDistanceNorm = noPerspectiveRead(vLineDistanceNorm);`)}
  `),p?a.main.add(y`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(S&&a.main.add(y`
        float sdf = noPerspectiveRead(min(vSegmentSDF, vReverseSegmentSDF));
        vec2 fragmentPosition = vec2(min(sdf, 0.0), lineDistance);

        float fragmentRadius = length(fragmentPosition);
        float fragmentCapSDF = (fragmentRadius - lineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
        float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

        if (capCoverage < ${y.float(.003913894324853229)}) {
          discard;
        }
      `),C?a.main.add(y`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        lineDistanceNorm
      );
      float stippleRadius = length(stipplePosition * lineWidth);
      float stippleCapSDF = (stippleRadius - lineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${y.float(Pe)}, stippleCoverage);
      `):a.main.add(y`float stippleAlpha = getStippleAlpha(lineWidth);`),c!==9&&a.main.add(y`discardByStippleAlpha(stippleAlpha, ${y.float(.003913894324853229)});`),t.include(N),a.uniforms.add(new O(`intrinsicColor`,e=>e.color)).main.add(y`vec4 color = intrinsicColor * vColor;
color.a = noPerspectiveRead(color.a);`),ee&&a.uniforms.add(new O(`innerColor`,e=>e.innerColor??e.color),new x(`innerWidth`,(e,t)=>e.innerWidth*t.camera.pixelRatio)).main.add(y`float distToInner = abs(lineDistance) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`),a.main.add(y`vec4 finalColor = blendStipple(color, stippleAlpha);`),d&&(a.uniforms.add(new x(`falloff`,e=>e.falloff)),a.main.add(y`finalColor.a *= pow(max(0.0, 1.0 - abs(lineDistanceNorm)), falloff);`)),u||a.main.add(y`float featherStartDistance = max(lineWidth - 2.0, 0.0);
float value = abs(lineDistance);
float feather = (value - featherStartDistance) / (lineWidth - featherStartDistance);
finalColor.a *= 1.0 - clamp(feather, 0.0, 1.0);`),m&&a.main.add(y`
        finalColor = animate(finalColor);

        ${v(c!==9,y`
            if (finalColor.a <= ${y.float(.003913894324853229)}) {
              discard;
            }`)}
      `)),a.main.add(y`outputColorHighlightOLID(applySlice(finalColor, vpos), finalColor.rgb);`),t}var rt,$,it=e((()=>{oe(),se(),me(),X(),ge(),Ce(),Te(),Oe(),ve(),P(),M(),Ee(),Ae(),D(),A(),S(),b(),ue(),tt(),Ie(),ie(),Fe(),rt=1,$=Object.freeze(Object.defineProperty({__proto__:null,build:nt,ribbonlineNumRoundJoinSubdivisions:1},Symbol.toStringTag,{value:`Module`}))}));export{Be as _,tt as a,ze as b,Je as c,Q as d,X as f,V as g,U as h,nt as i,Z as l,K as m,it as n,Ze as o,He as p,rt as r,Ye as s,$ as t,Xe as u,F as v,B as y};