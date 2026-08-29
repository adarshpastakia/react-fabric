import{n as e}from"./rolldown-runtime.js";import{a as t}from"./time.js";import{n,t as r}from"./uid.js";import{O as i,x as a}from"./vec2.js";import{n as o,r as s}from"./uuid.js";import{o as c,u as l}from"./vec4.js";import{o as u,r as d,s as f}from"./vec4f64.js";import{o as p,s as m}from"./vec2f64.js";import{g as ee,i as h,s as g}from"./enums.js";import{d as _,n as v,t as y,u as b}from"./Texture.js";import{n as x,r as S,t as C}from"./glsl.js";import{n as te,t as w}from"./ShaderBuilder.js";import{n as T,t as E}from"./FloatPassUniform.js";import{n as ne,t as re}from"./Texture2DPassUniform.js";import{a as ie,i as ae}from"./Slice.glsl.js";import{n as oe,t as se}from"./ObjectAndLayerIdColor.glsl.js";import{n as ce,t as D}from"./Float4PassUniform.js";import{n as le,t as O}from"./FloatBindUniform.js";import{n as ue,t as de}from"./Matrix4BindUniform.js";import{a as k,n as fe,r as A,t as pe}from"./View.glsl.js";import{d as j,f as me,h as he,m as ge,n as _e,t as ve}from"./MarkerSizing.glsl.js";import{n as ye,t as be}from"./ColorConversion.glsl.js";import{n as xe,t as Se}from"./MixExternalColor.glsl.js";import{n as Ce}from"./PiUtils.glsl.js";import{n as we,t as Te}from"./PositionOutsideClipSpace.js";import{n as Ee,t as De}from"./Float2BindUniform.js";import{n as Oe,t as ke}from"./Float4BindUniform.js";import{n as Ae,t as je}from"./alphaCutoff.glsl.js";import{n as Me,t as Ne}from"./Float2PassUniform.js";import{n as Pe,t as Fe}from"./OutputColorHighlightOLID.glsl.js";function M(e){return e!=null&&`image`in e}function Ie(e,t){return e==null?e:{pattern:e.slice(),pixelRatio:t}}function Le(e){return{pattern:[e,e],pixelRatio:2}}function Re(e){switch(e?.type){case`style`:return ze(e.style);case`image`:return new F(e.image,e.width,e.length);case void 0:case null:return null}return null}function ze(e){return e==null?null:Ie(Be[e],P)}var N,Be,P,F;function I(){return(I=e((()=>{o(),N={dash:[4,3],dot:[1,3],"long-dash":[8,3],"short-dash":[4,1],"short-dot":[1,1]},Be={dash:N.dash,"dash-dot":[...N.dash,...N.dot],dot:N.dot,"long-dash":N[`long-dash`],"long-dash-dot":[...N[`long-dash`],...N.dot],"long-dash-dot-dot":[...N[`long-dash`],...N.dot,...N.dot],none:null,"short-dash":N[`short-dash`],"short-dash-dot":[...N[`short-dash`],...N[`short-dot`]],"short-dash-dot-dot":[...N[`short-dash`],...N[`short-dot`],...N[`short-dot`]],"short-dot":N[`short-dot`],solid:null},P=8,F=class{constructor(e,t,n){this.image=e,this.width=t,this.length=n,this.uuid=s()}}})))()}var L,R;function z(){return(z=e((()=>{n(),L=class{constructor(e,t,n){this._createTexture=e,this._parametersKey=t,this._repository=new Map,this._orphanCache=n.newCache(`procedural-texture-repository:${r()}`,e=>e.dispose())}destroy(){for(let{texture:e}of this._repository.values())e.dispose();this._repository.clear(),this._orphanCache.destroy()}swap(e,t=null){let n=this._acquire(e);return this.release(t),n}release(e){if(e==null)return;let t=this._parametersKey(e),n=this._repository.get(t);if(n&&(n.refCount--,n.refCount===0)){this._repository.delete(t);let{texture:e}=n;this._orphanCache.put(t,e)}}_acquire(e){if(e==null)return null;let t=this._parametersKey(e),n=this._repository.get(t);if(n)return n.refCount++,n.texture;let r=this._orphanCache.pop(t)??this._createTexture(e),i=new R(r);return this._repository.set(t,i),r}},R=class{constructor(e){this.texture=e,this.refCount=1}}})))()}function Ve(e,t){return new L(t=>{if(M(t))return Ue(e,t.image);let{data:n,textureSize:r}=He(t),i=new b(r,1);return i.dataType=g.FLOAT,i.pixelFormat=6403,i.internalFormat=h.R16F,i.wrapMode=10497,new v(e,i,n)},e=>M(e)?`image-${e.uuid}`:`${e.pattern.join(`,`)}-r${e.pixelRatio}`,t)}function He(e){let t=B(e),n=1/e.pixelRatio,r=V(e),i=[],a=1;for(let e of t){for(let t=0;t<e;t++){let r=a*(Math.min(t,e-1-t)+.5)*n;i.push(r)}a=-a}let o=Math.round(t[0]/2);return{data:new Float32Array([...i.slice(o),...i.slice(0,o)]),textureSize:r}}function B(e){return e.pattern.map(t=>Math.round(t*e.pixelRatio))}function V(e){if(e==null)return 1;let t=B(e);return Math.floor(t.reduce((e,t)=>e+t))}function Ue(e,t){let{data:n,width:r,height:i}=t,a=new b(r,i);return a.dataType=g.UNSIGNED_BYTE,a.pixelFormat=6408,a.internalFormat=h.RGBA8,a.wrapMode={s:10497,t:33071},a.hasMipmap=!0,a.samplingMode=9987,new v(e,a,n)}function H(){return(H=e((()=>{I(),z(),ee(),y(),_()})))()}function We(e){return e==null?d:e.length===4?e:l(U,e[0],e[1],e[2],1)}var U;function W(){return(W=e((()=>{c(),u(),U=f()})))()}function Ge(e,t){if(!t.stippleEnabled)return void e.fragment.code.add(S`float getStippleAlpha(float lineWidth) { return 1.0; }
void discardByStippleAlpha(float stippleAlpha, float threshold) {}
vec4 blendStipple(vec4 color, float stippleAlpha) { return color; }`);let n=!(t.draped&&t.stipplePreferContinuous),{vertex:r,fragment:i}=e;t.draped||(pe(r,t),r.uniforms.add(new le(`worldToScreenPerDistanceRatio`,({camera:e})=>1/e.perScreenPixelRatio)).code.add(S`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),e.varyings.add(`vStippleDistance`,`float`),e.varyings.add(`vStippleDistanceLimits`,`vec2`),e.varyings.add(`vStipplePatternStretch`,`float`),r.code.add(S`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${S.float(K)};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),k(r),r.code.add(S`
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
  `),i.uniforms.add(new re(`stipplePatternTexture`,e=>e.stippleTexture),new T(`stipplePatternPixelSizeInv`,e=>1/G(e))),t.stippleOffColorEnabled&&i.uniforms.add(new D(`stippleOffColor`,e=>We(e.stippleOffColor))),e.include(j),t.worldSizedImagePattern?(e.varyings.add(`vStippleV`,`float`),e.fragment.include(xe),i.code.add(S`vec4 getStippleColor(out bool isClamped) {
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
}`)):i.code.add(S`
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
  `),i.code.add(S`
    void discardByStippleAlpha(float stippleAlpha, float threshold) {
     ${x(!t.stippleOffColorEnabled,`if (stippleAlpha < threshold) { discard; }`)}
    }
  `)}function G(e){let t=e.stipplePattern;return M(t)?t.length:t?V(t)/t.pixelRatio:1}var K;function q(){return(q=e((()=>{Se(),A(),ce(),O(),E(),C(),ne(),I(),H(),W(),K=.4})))()}var Ke,J,Y,qe,X;function Z(){return(Z=e((()=>{Ke=.1,J=t(1),Y=t(1),qe=1e3,X=27e6})))()}function Je(e,t){let{hasAnimation:n,animation:r}=t;if(!n)return;let{attributes:a,varyings:o,vertex:s,fragment:c}=e;a.add(`timeStamps`,`vec4`),o.add(`vTimeStamp`,`float`),o.add(`vFirstTime`,`float`),o.add(`vLastTime`,`float`),o.add(`vTransitionType`,`float`),s.main.add(S`vTimeStamp = timeStamps.x;
vFirstTime = timeStamps.y;
vLastTime = timeStamps.z;
vTransitionType = timeStamps.w;`),r===3&&c.constants.add(`decayRate`,`float`,2.3),c.code.add(S`
    float getTrailOpacity(float x) {
      if (x < 0.0) {
        return 0.0;
      }

      ${Ye(r)}
    }`),c.uniforms.add(new T(`timeElapsed`,e=>e.timeElapsed),new T(`trailLength`,e=>e.trailLength),new T(`speed`,e=>e.animationSpeed),new Ne(`startEndTime`,e=>i(Xe,e.startTime,e.endTime))),c.constants.add(`fadeInTime`,`float`,Y),c.constants.add(`fadeOutTime`,`float`,J),c.constants.add(`incomingTransition`,`int`,0),c.constants.add(`outgoingTransition`,`int`,2),c.code.add(S`float fadeIn(float x) {
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
}`)}function Ye(e){switch(e){case 2:return`return x >= 0.0 && x <= 1.0 ? 1.0 : 0.0;`;case 3:return`float cutOff = exp(-decayRate);
        return (exp(-decayRate * x) - cutOff) / (1.0 - cutOff);`;default:return`return 1.0;`}}var Xe;function Q(){return(Q=e((()=>{a(),p(),Z(),Me(),E(),C(),Xe=m()})))()}function Ze(e){let t=new te,{attributes:n,varyings:r,vertex:i,fragment:a}=t,{applyMarkerOffset:o,draped:s,output:c,capType:l,stippleEnabled:u,falloffEnabled:d,roundJoins:f,wireframe:p,innerColorEnabled:m,hasAnimation:ee,hasScreenSizePerspective:h,worldSizedImagePattern:g}=e;i.inputs.add(`position`,()=>`position`),a.include(Ce),t.include(ge,e),t.include(Ge,e),t.include(se,e),t.include(Je,e);let _=o&&!s;_&&(i.uniforms.add(new T(`markerScale`,e=>e.markerScale)),t.include(ve,{space:2,hasScreenSizePerspective:h})),fe(i,e),i.uniforms.add(new ue(`inverseProjectionMatrix`,e=>e.camera.inverseProjectionMatrix),new De(`nearFar`,e=>e.camera.nearFar),new T(`miterLimit`,e=>e.join===`miter`?e.miterLimit:0),new ke(`viewport`,e=>e.camera.fullViewport)),i.constants.add(`LARGE_HALF_FLOAT`,`float`,65500),i.constants.add(`EPS`,`float`,.001),i.constants.add(`NUM_JOIN_SUBDIVISIONS`,`float`,e.numJoinSubdivisions),n.add(`position`,`vec3`),n.add(`previousDelta`,`vec4`),n.add(`nextDelta`,`vec4`),n.add(`lineParameters`,`vec2`),n.add(`u0`,`float`),r.add(`vColor`,`vec4`),r.add(`vpos`,`vec3`,{invariant:!0}),r.add(`vLineDistance`,`float`),r.add(`vLineWidth`,`float`),u||(r.add(`vIsInsideJoin`,`int`),r.add(`vStretchFactor`,`float`),r.add(`vJoinCenterLineSDFs`,`vec2`),r.add(`vSubdivisionFactor`,`float`));let v=u;v&&r.add(`vLineSizeInv`,`float`);let y=l===2,b=u&&y,C=d||b;C&&r.add(`vLineDistanceNorm`,`float`),y&&(r.add(`vSegmentSDF`,`float`),r.add(`vReverseSegmentSDF`,`float`)),i.code.add(S`vec3 perpendicular(vec3 v) {
return vec3(v.y, -v.x, 0.0);
}
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec3 rotateZ(vec3 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return vec3(m * v.xy, v.z);
}`),i.code.add(S`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
posNdc.z /= posNdc.w;
return posNdc;
}`),i.code.add(S`void clip(
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
}`),k(i),i.constants.add(`aaWidth`,`float`,+!u).main.add(S`
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
  `),_&&i.main.add(S`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos.xyz, other.xyz);
if (!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos.xyz) * 0.5;
}`),t.include(me),i.main.add(S`
      clip(pos, prev, next, isStartVertex);

      vec3 clippedPos = pos.xyz;
      vec3 clippedCenter = mix(pos.xyz, isStartVertex ? next.xyz : prev.xyz, 0.5);

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);

      vec3 left = (pos.xyz - prev.xyz);
      vec3 right = (next.xyz - pos.xyz);

      float leftLen = length(left);
      float rightLen = length(right);

      float lineSize = getSize(${x(h,`clippedPos`)});
      ${x(u&&h,`float patternLineSize = getSize(clippedCenter);`)}
      ${x(u&&!h,`float patternLineSize = lineSize;`)}

      ${x(g,S`
          lineSize += aaWidth;
          float lineWidth = lineSize * pixelRatio * worldToScreenRatio;
          if (lineWidth < 1.0) {
            coverage = lineWidth;
            lineWidth = 1.0;
          }
        `,S`
          if (lineSize < 1.0) {
            coverage = lineSize; // convert sub-pixel coverage to alpha
            lineSize = 1.0;
          }

          lineSize += aaWidth;
          float lineWidth = lineSize * pixelRatio;
        `)}

      vLineWidth = noPerspectiveWrite(lineWidth, pos.w);
      ${v?S`vLineSizeInv = noPerspectiveWrite(1.0 / lineSize, pos.w);`:``}
  `),(u||y)&&i.main.add(S`
      float isEndVertex = float(!isStartVertex);
      vec3 segmentOrigin = mix(pos.xyz, prev.xyz, isEndVertex);
      vec3 segment = mix(right, left, isEndVertex);
      ${y?S`vec3 segmentEnd = mix(next.xyz, pos.xyz, isEndVertex);`:``}
    `),i.main.add(S`left = (leftLen > EPS) ? left/leftLen : vec3(0.0, 0.0, 0.0);
right = (rightLen > EPS) ? right/rightLen : vec3(0.0, 0.0, 0.0);
vec3 segmentDirection = isStartVertex ? right : left;
vec3 capDisplacementDir = vec3(0.0, 0.0, 0.0);
vec3 joinDisplacementDir = vec3(0.0, 0.0, 0.0);
float displacementLen = lineWidth;
float miterDisplacementLen = lineWidth;
float innerDisplacementLen = lineWidth;`),u||i.main.add(S`vIsInsideJoin = 0;
vStretchFactor = 1.0;
vSubdivisionFactor = 0.0;
vJoinCenterLineSDFs = vec2(LARGE_HALF_FLOAT);`),i.main.add(S`float subdivisionFactor = 0.0;
bool isOutside = false;
if (isJoin) {
isOutside = (left.x * right.y - left.y * right.x) * lineParameters.y > 0.0;
vec3 joinDirection = normalize(left + right);
joinDisplacementDir = perpendicular(joinDirection);
if (leftLen > EPS && rightLen > EPS) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
miterDisplacementLen = displacementLen;
innerDisplacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
if (!isOutside) {
displacementLen = innerDisplacementLen;
}
}
subdivisionFactor = lineParameters.x;`),u||i.main.add(S`if(subdivisionFactor > 0.0) {
vIsInsideJoin = 1;
}
vSubdivisionFactor = isOutside ? subdivisionFactor : 0.5;
if (miterDisplacementLen > miterLimit * lineWidth) {
vec2 leftScreenDir = left.xy;
vec2 rightScreenDir = right.xy;
float leftScreenLen = length(leftScreenDir);
float rightScreenLen = length(rightScreenDir);
if (leftScreenLen > EPS && rightScreenLen > EPS) {
leftScreenDir /= leftScreenLen;
rightScreenDir /= rightScreenLen;
float theta = acos(clamp(dot(leftScreenDir, rightScreenDir), -1.0, 1.0));
float subdividedTriangleHeight = (innerDisplacementLen + lineWidth) * cos(theta / (2.0 + 2.0 * NUM_JOIN_SUBDIVISIONS));
float bevelTriangleHeight = innerDisplacementLen + lineWidth * cos(theta * 0.5);
float triangleHeight = NUM_JOIN_SUBDIVISIONS > 0.0 ? subdividedTriangleHeight : bevelTriangleHeight;
vStretchFactor = noPerspectiveWrite(max(triangleHeight / (2.0 * lineWidth), 1.0), pos.w);
}
}`),i.main.add(S`if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),f?i.main.add(S`
        vec3 startDir = leftLen < EPS ? right : left;
        startDir = perpendicular(startDir);

        vec3 endDir = rightLen < EPS ? left : right;
        endDir = perpendicular(endDir);

        float factor = ${u?S`min(1.0, subdivisionFactor * ((NUM_JOIN_SUBDIVISIONS + 1.0) / NUM_JOIN_SUBDIVISIONS))`:S`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir.xy, endDir.xy), -1.0, 1.0));
        joinDisplacementDir = rotateZ(startDir, -sign(lineParameters.y) * factor * rotationAngle);
      `):i.main.add(S`
        vec3 startDir = perpendicular(leftLen < EPS ? right : left);
        vec3 endDir = perpendicular(rightLen < EPS ? left : right);

        ${x(u,S`joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? endDir : startDir;`,S`joinDisplacementDir = mix(startDir, endDir, subdivisionFactor);`)}
  `);let w=l!==0;return i.main.add(S`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = perpendicular(joinDisplacementDir);

      ${w?S`capDisplacementDir = vec3((isStartVertex ? -right : left).xy, 0.0);`:``}
    }
  `),i.main.add(S`
    // Displacement (in pixels) caused by join/or cap
    vec2 dposXY = (joinDisplacementDir.xy * sign(lineParameters.y) + capDisplacementDir.xy) * displacementLen;

    /**
     * To prevent z-fighting between layers, we also adjust the z value.
     * We want to ensure that the orientation of the final triangles is the same, regardless of the line width.
     * To do so, the below formula projects the xy displacement onto the original segment direction
     * to find the z-offset necessary so the triangle orientation is independent of the width.
     */
    float dposZ = dot(dposXY, segmentDirection.xy) / dot(segmentDirection.xy, segmentDirection.xy) * segmentDirection.z;
    vec3 dpos = vec3(dposXY, dposZ);

    float lineDistNorm = noPerspectiveWrite(sign(lineParameters.y), pos.w);

    vLineDistance = lineWidth * lineDistNorm;
    ${C?S`vLineDistanceNorm = lineDistNorm;`:``}

    pos.xyz += dpos;
  `),u||i.main.add(S`if (isJoin) {
vec2 joinCenterToVertex = dposXY;
vec2 leftCenterlineDir = left.xy;
vec2 rightCenterlineDir = right.xy;
float leftCenterlineLen = length(leftCenterlineDir);
float rightCenterlineLen = length(rightCenterlineDir);
leftCenterlineDir = leftCenterlineLen > EPS ? leftCenterlineDir / leftCenterlineLen : vec2(1.0, 0.0);
rightCenterlineDir = rightCenterlineLen > EPS ? rightCenterlineDir / rightCenterlineLen : leftCenterlineDir;
vJoinCenterLineSDFs = noPerspectiveWrite(
vec2(
dot(vec2(rightCenterlineDir.y, -rightCenterlineDir.x), joinCenterToVertex),
dot(vec2(leftCenterlineDir.y, -leftCenterlineDir.x), joinCenterToVertex)
),
pos.w
);
}`),y&&i.main.add(S`vec2 segmentDir = normalize(segment.xy);
vSegmentSDF = noPerspectiveWrite((isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin.xy, segmentDir)), pos.w);
vReverseSegmentSDF = noPerspectiveWrite((isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd.xy, -segmentDir)), pos.w);`),u&&(s?i.uniforms.add(new le(`worldToScreenRatio`,e=>1/e.screenToPCSRatio)):i.main.add(S`vec3 segmentCenter = mix((nextPosition + position) * 0.5, (position + prevPosition) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),i.main.add(S`float segmentLengthScreenDouble = length(segment.xy);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(nextPosition - position, position - prevPosition, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),s?i.main.add(S`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = u0 * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):i.main.add(S`float startPseudoScreen = mix(u0, u0 - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),i.uniforms.add(new T(`stipplePatternPixelSize`,e=>G(e))),i.main.add(S`
      float patternLength = patternLineSize * stipplePatternPixelSize;

      ${x(g,S`
          float uu = mix(u0, u0 - segmentLengthRender, isEndVertex);
          vStippleDistanceLimits = vec2(uu, uu + segmentLengthRender);
          vStipplePatternStretch = 1.0;

          // The v-coordinate used in case of an image pattern.
          bool isLeft = sign(lineParameters.y) < 0.0;
          vStippleV = isLeft ? 0.0 : 1.0;
        `,S`
          // Compute the coordinates at both start and end of the line segment, because we need both to clamp to in the
          // fragment shader
          vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);
        `)}

      vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);

      // Adjust the coordinate to the displaced position (the pattern is shortened/overextended on the in/outside of
      // joins)
      if (segmentLengthScreenDouble >= EPS) {
        // Project the actual vertex position onto the line segment. Note that the resulting factor is within [0..1]
        // at the original vertex positions, and slightly outside of that range at the displaced positions
        vec3 stippleDisplacement = pos.xyz - segmentOrigin;
        float stippleDisplacementFactor = dot(segment.xy, stippleDisplacement.xy) / (segmentLengthScreenDouble * segmentLengthScreenDouble);

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
    `)),i.main.add(S`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;
      pos.z = pos.z * pos.w;

      vColor = getColor();
      vColor.a = noPerspectiveWrite(vColor.a * coverage, pos.w);

      ${p&&!s?`pos.z -= EPS * pos.w;`:``}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }`),t.fragment.include(ae,e),t.include(Pe,e),a.include(be),a.main.add(S`discardBySlice(vpos);`),t.include(j),a.include(je),a.main.add(S`
    float lineWidth = noPerspectiveRead(vLineWidth);
    float lineDistance = noPerspectiveRead(vLineDistance);
    ${x(C,S`float lineDistanceNorm = noPerspectiveRead(vLineDistanceNorm);`)}
  `),p?a.main.add(S`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(y&&a.main.add(S`float sdf = noPerspectiveRead(min(vSegmentSDF, vReverseSegmentSDF));
vec2 fragmentPosition = vec2(min(sdf, 0.0), lineDistance);
float fragmentRadius = length(fragmentPosition);
float fragmentCapSDF = (fragmentRadius - lineWidth) * 0.5;
float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);
if (capCoverage < alphaCutoff) {
discard;
}`),b?a.main.add(S`vec2 stipplePosition = vec2(
min(getStippleSDF() * 2.0 - 1.0, 0.0),
lineDistanceNorm
);
float stippleRadius = length(stipplePosition * lineWidth);
float stippleCapSDF = (stippleRadius - lineWidth) * 0.5;
float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
float stippleAlpha = step(alphaCutoff, stippleCoverage);`):a.main.add(S`float stippleAlpha = getStippleAlpha(lineWidth);`),c!==11&&a.main.add(S`discardByStippleAlpha(stippleAlpha, alphaCutoff);`),t.include(j),a.uniforms.add(new D(`intrinsicColor`,e=>e.color)).main.add(S`vec4 color = intrinsicColor * vColor;
color.a = noPerspectiveRead(color.a);`),m&&a.uniforms.add(new D(`innerColor`,e=>e.innerColor??e.color),new T(`innerWidth`,(e,t)=>e.innerWidth*t.camera.pixelRatio)).main.add(S`float distToInner = abs(lineDistance) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`),a.main.add(S`vec4 finalColor = blendStipple(color, stippleAlpha);`),d&&(a.uniforms.add(new T(`falloff`,e=>e.falloff)),a.main.add(S`finalColor.a *= pow(max(0.0, 1.0 - abs(lineDistanceNorm)), falloff);`)),u||a.main.add(S`float stretchFactor = vIsInsideJoin == 1 ? noPerspectiveRead(vStretchFactor) : 1.0;
float featherWidth = 2.0;
float featherStartDistance = max(lineWidth - featherWidth / stretchFactor, 0.0);
float straightFeatherStartDistance = max(lineWidth - featherWidth, 0.0);
float value = abs(lineDistance);
float feather = (value - featherStartDistance) / (lineWidth - featherStartDistance);
vec2 joinCenterSDFs = noPerspectiveRead(vJoinCenterLineSDFs);
float joinCenterDistance = abs(vSubdivisionFactor > 0.5 ? joinCenterSDFs.x : joinCenterSDFs.y);
float straightFeather = (joinCenterDistance - straightFeatherStartDistance) / (lineWidth - straightFeatherStartDistance);
feather = vIsInsideJoin == 1 ? max(feather, straightFeather) : feather;
finalColor.a *= 1.0 - clamp(feather, 0.0, 1.0);`),ee&&a.main.add(S`
        finalColor = animate(finalColor);

        ${x(c!==11,S`
            if (finalColor.a <= alphaCutoff) {
              discard;
            }`)}
      `)),a.main.add(S`outputColorHighlightOLID(applySlice(finalColor, vpos), finalColor.rgb);`),t}var Qe,$e;function $(){return($=e((()=>{ie(),oe(),he(),q(),_e(),Te(),ye(),A(),Ee(),Oe(),ce(),O(),E(),C(),de(),Ae(),Q(),Fe(),w(),Qe=1,$e=Object.freeze(Object.defineProperty({__proto__:null,build:Ze,ribbonlineNumRoundJoinSubdivisions:1},Symbol.toStringTag,{value:`Module`}))})))()}export{Re as _,Q as a,Le as b,Ke as c,Y as d,q as f,L as g,z as h,$e as i,J as l,H as m,Qe as n,Z as o,Ve as p,$ as r,qe as s,Ze as t,X as u,M as v,I as y};