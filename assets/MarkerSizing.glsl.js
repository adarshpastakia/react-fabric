import{n as e}from"./chunk.js";import{n as t,t as n}from"./mat4f64.js";import{C as r,S as i,w as a}from"./mat4.js";import{a as o,r as s}from"./vec4f64.js";import{g as c,i as l,s as u}from"./enums.js";import{n as d,r as f,t as p}from"./glsl.js";import{n as m,t as h}from"./Float3PassUniform.js";import{n as g,t as ee}from"./FloatPassUniform.js";import{l as te,n as _,t as v,u as y}from"./Texture.js";import{n as b,t as x}from"./VisualVariables.glsl.js";import{n as S,t as ne}from"./FloatsPassUniform.js";import{i as re,n as ie,r as ae}from"./ScreenSizePerspective.glsl.js";import{n as oe,t as se}from"./FloatBindUniform.js";import{n as ce,t as le}from"./Matrix4DrawUniform.js";import{a as ue,r as C,t as w}from"./View.glsl.js";import{n as T,t as E}from"./ManagedTexture.js";function D(e,t){let{vertex:n,attributes:a}=e;n.uniforms.add(new g(`intrinsicWidth`,e=>e.width));let{hasScreenSizePerspective:o,spherical:s}=t;o?(e.include(ae,t),re(n),w(n,t),n.uniforms.add(new ce(`inverseViewMatrix`,(e,t)=>i(k,r(k,t.camera.viewMatrix,e.origin)))),n.code.add(f`
      float applyLineSizeScreenSizePerspective(float size, vec3 pos) {
        vec3 worldPos = (inverseViewMatrix * vec4(pos, 1)).xyz;
        vec3 groundUp = ${s?f`normalize(worldPos + localOrigin)`:f`vec3(0.0, 0.0, 1.0)`};
        float absCosAngle = abs(dot(groundUp, normalize(worldPos - cameraPosition)));

        return screenSizePerspectiveScaleFloat(size, absCosAngle, length(pos), screenSizePerspective);
      }
    `)):n.code.add(f`float applyLineSizeScreenSizePerspective(float size, vec3 pos) {
return size;
}`),t.hasVVSize?(a.add(`sizeFeatureAttribute`,`float`),n.uniforms.add(new h(`vvSizeMinSize`,e=>e.vvSize.minSize),new h(`vvSizeMaxSize`,e=>e.vvSize.maxSize),new h(`vvSizeOffset`,e=>e.vvSize.offset),new h(`vvSizeFactor`,e=>e.vvSize.factor),new h(`vvSizeFallback`,e=>e.vvSize.fallback)),n.code.add(f`
    float getSize(${d(o,`vec3 pos`)}) {
      float size = isnan(sizeFeatureAttribute)
        ? vvSizeFallback.x
        : intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;

      return ${d(o,`applyLineSizeScreenSizePerspective(size, pos)`,`size`)};
    }
    `)):(a.add(`size`,`float`),n.code.add(f`
    float getSize(${d(o,`vec3 pos`)}) {
      float fullSize = intrinsicWidth * size;
      return ${d(o,`applyLineSizeScreenSizePerspective(fullSize, pos)`,`fullSize`)};
    }
    `)),t.hasVVOpacity?(a.add(`opacityFeatureAttribute`,`float`),n.constants.add(`vvOpacityNumber`,`int`,8),n.uniforms.add(new S(`vvOpacityValues`,O,e=>e.vvOpacity.values),new S(`vvOpacityOpacities`,O,e=>e.vvOpacity.opacityValues),new g(`vvOpacityFallback`,e=>e.vvOpacity.fallback,{supportsNaN:!0})),n.code.add(f`
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
        return ${d(t.hasVVColor,`color`,`vec4(color.rgb, vvOpacityFallback)`)};
      }

      return vec4(color.rgb, interpolateOpacity(opacityFeatureAttribute));
    }
    `)):n.code.add(f`vec4 applyOpacity(vec4 color) {
return color;
}`),t.hasVVColor?(e.include(b,t),a.add(`colorFeatureAttribute`,`float`),n.code.add(f`vec4 getColor() {
vec4 color = interpolateVVColor(colorFeatureAttribute);
if (isnan(color.r)) {
return vec4(0);
}
return applyOpacity(color);
}`)):(a.add(`color`,`vec4`),n.code.add(f`vec4 getColor() {
return applyOpacity(color);
}`))}var O,k,A=e((()=>{a(),t(),x(),ie(),C(),m(),ee(),ne(),p(),le(),O=8,k=n()}));function j(e){e.vertex.code.add(`#define noPerspectiveWrite(x, w) (x * w)`)}function M(e){e.fragment.code.add(`#define noPerspectiveRead(x) (x * gl_FragCoord.w)`)}var N=e((()=>{}));function P(e){return e===`cross`||e===`x`}function F(e,t=128,n=t*J,r=0){let{data:i,parameters:a}=I(e,t,n,r);return new E(i,a)}function I(e,t=128,n=t*J,r=0){return{data:L(e,t,n,r),parameters:{mipmap:!1,wrap:{s:33071,t:33071},width:t,height:t,noUnpackFlip:!0,dataType:u.FLOAT,pixelFormat:6403,internalFormat:l.R16F,reloadable:!0}}}function L(e,t=128,n=t*J,r=0){switch(e){case`circle`:default:return de(t,n);case`square`:return R(t,n);case`cross`:return B(t,n,r);case`x`:return V(t,n,r);case`kite`:return z(t,n);case`triangle`:return H(t,n);case`arrow`:return fe(t,n)}}function de(e,t){let n=e/2-.5;return q(e,G(n,n,t/2))}function R(e,t){return U(e,t,!1)}function z(e,t){return U(e,t,!0)}function B(e,t,n=0){return W(e,t,!1,n)}function V(e,t,n=0){return W(e,t,!0,n)}function H(e,t){return q(e,K(e/2,t,t/2))}function fe(e,t){let n=t,r=t/2,i=e/2,a=.8*n,o=G(i,(e-t)/2-a,Math.sqrt(a*a+r*r)),s=K(i,n,r);return q(e,(e,t)=>Math.max(s(e,t),-o(e,t)))}function U(e,t,n){return n&&(t/=Math.SQRT2),q(e,(r,i)=>{let a=r-.5*e+.25,o=.5*e-i-.75;if(n){let e=(a+o)/Math.SQRT2;o=(o-a)/Math.SQRT2,a=e}return Math.max(Math.abs(a),Math.abs(o))-.5*t})}function W(e,t,n,r=0){t-=r,n&&(t*=Math.SQRT2);let i=.5*t;return q(e,(t,a)=>{let o,s=t-.5*e,c=.5*e-a-1;if(n){let e=(s+c)/Math.SQRT2;c=(c-s)/Math.SQRT2,s=e}return s=Math.abs(s),c=Math.abs(c),o=s>c?s>i?Math.sqrt((s-i)*(s-i)+c*c):c:c>i?Math.sqrt(s*s+(c-i)*(c-i)):s,o-=r/2,o})}function G(e,t,n){return(r,i)=>{let a=r-e,o=i-t;return Math.sqrt(a*a+o*o)-n}}function K(e,t,n){let r=Math.sqrt(t*t+n*n);return(i,a)=>{let o=Math.abs(i-e)-n,s=a-e+t/2+.75,c=(t*o+n*s)/r,l=-s;return Math.max(c,l)}}function q(e,t){let n=new Float32Array(e*e);for(let r=0;r<e;r++)for(let i=0;i<e;i++)n[i+e*r]=t(i,r)/e;return n}var J,Y,X=e((()=>{o(),T(),c(),J=.5,Y=s(J/2,J/2,1-J/2,1-J/2)}));function pe(e,t){let n=L(e,64,32,Z),r=new te(64);return r.internalFormat=l.R16F,r.dataType=u.FLOAT,r.pixelFormat=6403,r.wrapMode=33071,new v(t,r,n)}var Z,Q,$=e((()=>{X(),c(),_(),y(),Z=32/5,64/Z,Q=.25}));function me(e,t){let n=e.vertex,r=t.hasScreenSizePerspective;ue(n),n.uniforms.get(`markerScale`)??n.constants.add(`markerScale`,`float`,1),n.constants.add(`markerSizePerLineWidth`,`float`,10).code.add(f`
  float getLineWidth(${d(r,`vec3 pos`)}) {
     return max(getSize(${d(r,`pos`)}), 1.0) * pixelRatio;
  }

  float getScreenMarkerSize(float lineWidth) {
    return markerScale * markerSizePerLineWidth * lineWidth;
  }
  `),t.space===2&&(n.constants.add(`maxSegmentLengthFraction`,`float`,.45),n.uniforms.add(new oe(`perRenderPixelRatio`,e=>e.camera.perRenderPixelRatio)),n.code.add(f`
  bool areWorldMarkersHidden(vec3 pos, vec3 other) {
    vec3 midPoint = mix(pos, other, 0.5);
    float distanceToCamera = length(midPoint);
    float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
    float worldMarkerSize = getScreenMarkerSize(getLineWidth(${d(r,`pos`)})) * screenToWorldRatio;
    float segmentLen = length(pos - other);
    return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
  }

  float getWorldMarkerSize(vec3 pos) {
    float distanceToCamera = length(pos);
    float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
    return getScreenMarkerSize(getLineWidth(${d(r,`pos`)})) * screenToWorldRatio;
  }
  `))}var he=e((()=>{$(),C(),se(),p()}));export{$ as a,J as c,M as d,j as f,A as h,pe as i,F as l,D as m,he as n,P as o,N as p,Q as r,X as s,me as t,Y as u};