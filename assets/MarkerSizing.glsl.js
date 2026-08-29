import{n as e}from"./rolldown-runtime.js";import{n as t,t as n}from"./mat4f64.js";import{C as r,S as i,w as a}from"./mat4.js";import{i as o,o as s}from"./vec4f64.js";import{g as c,i as l,s as u}from"./enums.js";import{d,n as ee,t as te,u as ne}from"./Texture.js";import{n as f,r as p,t as m}from"./glsl.js";import{n as h,t as re}from"./FloatPassUniform.js";import{n as ie,t as g}from"./Float3PassUniform.js";import{n as _,t as ae}from"./VisualVariables.glsl.js";import{n as v,t as y}from"./FloatsPassUniform.js";import{i as b,n as x,r as S}from"./ScreenSizePerspective.glsl.js";import{n as C,t as oe}from"./FloatBindUniform.js";import{n as se,t as ce}from"./Matrix4DrawUniform.js";import{a as le,r as w,t as ue}from"./View.glsl.js";import{n as de,t as T}from"./ManagedTexture.js";function E(e,t){let{vertex:n,attributes:a}=e;n.uniforms.add(new h(`intrinsicWidth`,e=>e.width));let{hasScreenSizePerspective:o,spherical:s}=t;o?(e.include(S,t),b(n),ue(n,t),n.uniforms.add(new se(`inverseViewMatrix`,(e,t)=>i(O,r(O,t.camera.viewMatrix,e.origin)))),n.code.add(p`
      float applyLineSizeScreenSizePerspective(float size, vec3 pos) {
        vec3 worldPos = (inverseViewMatrix * vec4(pos, 1)).xyz;
        vec3 groundUp = ${s?p`normalize(worldPos + localOrigin)`:p`vec3(0.0, 0.0, 1.0)`};
        float absCosAngle = abs(dot(groundUp, normalize(worldPos - cameraPosition)));

        return screenSizePerspectiveScaleFloat(size, absCosAngle, length(pos), screenSizePerspective);
      }
    `)):n.code.add(p`float applyLineSizeScreenSizePerspective(float size, vec3 pos) {
return size;
}`),t.hasVVSize?(a.add(`sizeFeatureAttribute`,`float`),n.uniforms.add(new g(`vvSizeMinSize`,e=>e.vvSize.minSize),new g(`vvSizeMaxSize`,e=>e.vvSize.maxSize),new g(`vvSizeOffset`,e=>e.vvSize.offset),new g(`vvSizeFactor`,e=>e.vvSize.factor),new g(`vvSizeFallback`,e=>e.vvSize.fallback)),n.code.add(p`
    float getSize(${f(o,`vec3 pos`)}) {
      float size = isnan(sizeFeatureAttribute)
        ? vvSizeFallback.x
        : intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;

      return ${f(o,`applyLineSizeScreenSizePerspective(size, pos)`,`size`)};
    }
    `)):(a.add(`size`,`float`),n.code.add(p`
    float getSize(${f(o,`vec3 pos`)}) {
      float fullSize = intrinsicWidth * size;
      return ${f(o,`applyLineSizeScreenSizePerspective(fullSize, pos)`,`fullSize`)};
    }
    `)),t.hasVVOpacity?(a.add(`opacityFeatureAttribute`,`float`),n.constants.add(`vvOpacityNumber`,`int`,8),n.uniforms.add(new v(`vvOpacityValues`,D,e=>e.vvOpacity.values),new v(`vvOpacityOpacities`,D,e=>e.vvOpacity.opacityValues),new h(`vvOpacityFallback`,e=>e.vvOpacity.fallback,{supportsNaN:!0})),n.code.add(p`
    float interpolateOpacity(float value) {
      if (value <= vvOpacityValues[0]) {
        return vvOpacityOpacities[0];
      }

      for (int i = 1; i < vvOpacityNumber; ++i) {
        if (vvOpacityValues[i] >= value) {
          float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
          return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
        }
      }

      return vvOpacityOpacities[vvOpacityNumber - 1];
    }

    vec4 applyOpacity(vec4 color) {
      if (isnan(opacityFeatureAttribute)) {
        // If there is a color vv then it will already have taken care of applying the fallback
        return ${f(t.hasVVColor,`color`,`vec4(color.rgb, vvOpacityFallback)`)};
      }

      return vec4(color.rgb, interpolateOpacity(opacityFeatureAttribute));
    }
    `)):n.code.add(p`vec4 applyOpacity(vec4 color) {
return color;
}`),t.hasVVColor?(e.include(_,t),a.add(`colorFeatureAttribute`,`float`),n.code.add(p`vec4 getColor() {
vec4 color = interpolateVVColor(colorFeatureAttribute);
if (isnan(color.r)) {
return vec4(0);
}
return applyOpacity(color);
}`)):(a.add(`color`,`vec4`),n.code.add(p`vec4 getColor() {
return applyOpacity(color);
}`))}var D,O;function k(){return(k=e((()=>{a(),t(),ae(),x(),w(),ie(),re(),y(),m(),ce(),D=8,O=n()})))()}function A(e){e.vertex.code.add(`#define noPerspectiveWrite(x, w) (x * w)`)}function j(e){e.fragment.code.add(`#define noPerspectiveRead(x) (x * gl_FragCoord.w)`)}function M(){return(M=e((()=>{})))()}function N(e){return e===`cross`||e===`x`}function P(e,t=128,n=t*q,r=0){let{data:i,parameters:a}=F(e,t,n,r);return new T(i,a)}function F(e,t=128,n=t*q,r=0){return{data:I(e,t,n,r),parameters:{mipmap:!1,wrap:{s:33071,t:33071},width:t,height:t,noUnpackFlip:!0,dataType:u.FLOAT,pixelFormat:6403,internalFormat:l.R16F,reloadable:!0}}}function I(e,t=128,n=t*q,r=0){switch(e){case`circle`:default:return L(t,n);case`square`:return R(t,n);case`cross`:return fe(t,n,r);case`x`:return B(t,n,r);case`kite`:return z(t,n);case`triangle`:return V(t,n);case`arrow`:return pe(t,n)}}function L(e,t){let n=e/2-.5;return K(e,W(n,n,t/2))}function R(e,t){return H(e,t,!1)}function z(e,t){return H(e,t,!0)}function fe(e,t,n=0){return U(e,t,!1,n)}function B(e,t,n=0){return U(e,t,!0,n)}function V(e,t){return K(e,G(e/2,t,t/2))}function pe(e,t){let n=t,r=t/2,i=e/2,a=.8*n,o=W(i,(e-t)/2-a,Math.sqrt(a*a+r*r)),s=G(i,n,r);return K(e,(e,t)=>Math.max(s(e,t),-o(e,t)))}function H(e,t,n){return n&&(t/=Math.SQRT2),K(e,(r,i)=>{let a=r-.5*e+.25,o=.5*e-i-.75;if(n){let e=(a+o)/Math.SQRT2;o=(o-a)/Math.SQRT2,a=e}return Math.max(Math.abs(a),Math.abs(o))-.5*t})}function U(e,t,n,r=0){t-=r,n&&(t*=Math.SQRT2);let i=.5*t;return K(e,(t,a)=>{let o,s=t-.5*e,c=.5*e-a-1;if(n){let e=(s+c)/Math.SQRT2;c=(c-s)/Math.SQRT2,s=e}return s=Math.abs(s),c=Math.abs(c),o=s>c?s>i?Math.sqrt((s-i)*(s-i)+c*c):c:c>i?Math.sqrt(s*s+(c-i)*(c-i)):s,o-=r/2,o})}function W(e,t,n){return(r,i)=>{let a=r-e,o=i-t;return Math.sqrt(a*a+o*o)-n}}function G(e,t,n){let r=Math.sqrt(t*t+n*n);return(i,a)=>{let o=Math.abs(i-e)-n,s=a-e+t/2+.75,c=(t*o+n*s)/r,l=-s;return Math.max(c,l)}}function K(e,t){let n=new Float32Array(e*e);for(let r=0;r<e;r++)for(let i=0;i<e;i++)n[i+e*r]=t(i,r)/e;return n}var q,J;function Y(){return(Y=e((()=>{s(),de(),c(),q=.5,J=o(q/2,q/2,1-q/2,1-q/2)})))()}function me(e,t){let n=I(e,64,32,X),r=new ne(64);return r.internalFormat=l.R16F,r.dataType=u.FLOAT,r.pixelFormat=6403,r.wrapMode=33071,new ee(t,r,n)}var X,Z;function Q(){return(Q=e((()=>{Y(),c(),te(),d(),X=32/5,64/X,Z=.25})))()}function he(e,t){let n=e.vertex,r=t.hasScreenSizePerspective;le(n),n.uniforms.get(`markerScale`)??n.constants.add(`markerScale`,`float`,1),n.constants.add(`markerSizePerLineWidth`,`float`,10).code.add(p`
  float getLineWidth(${f(r,`vec3 pos`)}) {
     return max(getSize(${f(r,`pos`)}), 1.0) * pixelRatio;
  }

  float getScreenMarkerSize(float lineWidth) {
    return markerScale * markerSizePerLineWidth * lineWidth;
  }
  `),t.space===2&&(n.constants.add(`maxSegmentLengthFraction`,`float`,.45),n.uniforms.add(new C(`perRenderPixelRatio`,e=>e.camera.perRenderPixelRatio)),n.code.add(p`
  bool areWorldMarkersHidden(vec3 pos, vec3 other) {
    vec3 midPoint = mix(pos, other, 0.5);
    float distanceToCamera = length(midPoint);
    float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
    float worldMarkerSize = getScreenMarkerSize(getLineWidth(${f(r,`pos`)})) * screenToWorldRatio;
    float segmentLen = length(pos - other);
    return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
  }

  float getWorldMarkerSize(vec3 pos) {
    float distanceToCamera = length(pos);
    float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
    return getScreenMarkerSize(getLineWidth(${f(r,`pos`)})) * screenToWorldRatio;
  }
  `))}function $(){return($=e((()=>{Q(),w(),oe(),m()})))()}export{Q as a,q as c,j as d,A as f,k as h,me as i,P as l,E as m,$ as n,N as o,M as p,Z as r,Y as s,he as t,J as u};