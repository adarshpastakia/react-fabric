import{n as e}from"./rolldown-runtime.js";import{o as t,r as n}from"./tslib.es6.js";import{l as r,o as i,r as a}from"./vec3f64.js";import{C as o,D as s,F as c,p as l,x as u}from"./vec3.js";import{n as d,t as f}from"./mat4f64.js";import{C as p,w as m}from"./mat4.js";import{r as h,t as g}from"./glsl.js";import{r as _,t as v}from"./NoParameters.js";import{n as y,r as b,t as x}from"./ShaderTechniqueConfiguration.js";import{n as S,t as C}from"./Float3DrawUniform.js";import{n as w,t as T}from"./Float3PassUniform.js";var E;function D(){return(D=e((()=>{t(),b(),E=class extends x{constructor(){super(...arguments),this.output=0,this.hasEmission=!1,this.useFloatBlend=!0}},n([y({count:12})],E.prototype,`output`,void 0),n([y()],E.prototype,`hasEmission`,void 0),n([y()],E.prototype,`useFloatBlend`,void 0)})))()}var O;function k(){return(k=e((()=>{D(),O=class extends E{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}}})))()}function A(e,t){F(e,t,...I(t))}function j(e,t){F(e,t,...L(t))}function M(e,t){P(e,t,...L(t))}function N(e,t){P(e,t,...I(t))}function P(e,t,...n){t.hasSlicePlane?(e.uniforms.add(...n),e.code.add(G)):e.code.add(`bool rejectBySlice(vec3 pos) { return false; }`)}function F(e,t,...n){e.constants.add(`groundSliceOpacity`,`float`,.2),P(e,t,...n),t.hasSlicePlane?e.code.add(`
    void discardBySlice(vec3 pos) {
      if (rejectBySlice(pos)) {
        discard;
      }
    }

    vec4 applySliceOutline(vec4 color, vec3 pos) {
      SliceFactors factors = calculateSliceFactors(pos);

      factors.front /= 2.0 * fwidth(factors.front);
      factors.side0 /= 2.0 * fwidth(factors.side0);
      factors.side1 /= 2.0 * fwidth(factors.side1);
      factors.side2 /= 2.0 * fwidth(factors.side2);
      factors.side3 /= 2.0 * fwidth(factors.side3);

      // return after calling fwidth, to avoid aliasing caused by discontinuities in the input to fwidth
      if (sliceByFactors(factors)) {
        return color;
      }

      float outlineFactor = (1.0 - step(0.5, factors.front))
        * (1.0 - step(0.5, factors.side0))
        * (1.0 - step(0.5, factors.side1))
        * (1.0 - step(0.5, factors.side2))
        * (1.0 - step(0.5, factors.side3));

      return mix(color, vec4(vec3(0.0), color.a), outlineFactor * 0.3);
    }

    vec4 applySlice(vec4 color, vec3 pos) {
      return sliceEnabled() ? applySliceOutline(color, pos) : color;
    }
  `):e.code.add(h`void discardBySlice(vec3 pos) { }
vec4 applySlice(vec4 color, vec3 pos) { return color; }`)}function I(e){return[new T(`slicePlaneOrigin`,(t,n)=>V(e,t,n)),new T(`slicePlaneBasis1`,(t,n)=>H(e,t,n,n.slicePlane?.basis1)),new T(`slicePlaneBasis2`,(t,n)=>H(e,t,n,n.slicePlane?.basis2))]}function L(e){return[new C(`slicePlaneOrigin`,(t,n)=>V(e,t,n)),new C(`slicePlaneBasis1`,(t,n)=>H(e,t,n,n.slicePlane?.basis1)),new C(`slicePlaneBasis2`,(t,n)=>H(e,t,n,n.slicePlane?.basis2))]}function R(e,t,n){return e.instancedDoublePrecision?c(K,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]):t.slicePlaneLocalOrigin}function z(e,t){return e==null?t.origin:u(q,t.origin,e)}function B(e,t,n){return e.hasSliceTranslatedView?t==null?n.camera.viewMatrix:p(Y,n.camera.viewMatrix,t):null}function V(e,t,n){if(n.slicePlane==null)return a;let r=R(e,t,n),i=z(r,n.slicePlane),o=B(e,r,n);return o==null?i:l(q,i,o)}function H(e,t,n,r){if(r==null||n.slicePlane==null)return a;let i=R(e,t,n),s=z(i,n.slicePlane),c=B(e,i,n);return c==null?r:(o(J,r,s),l(q,s,c),l(J,J,c),u(J,J,q))}var U,W,G,K,q,J,Y;function X(){return(X=e((()=>{t(),m(),d(),s(),i(),k(),S(),w(),g(),b(),_(),U=class extends O{constructor(){super(...arguments),this.hasSlicePlane=!1,this.hasSliceTranslatedView=!1}},n([y()],U.prototype,`hasSlicePlane`,void 0),W=class extends v{constructor(e=null){super(),this.slicePlaneLocalOrigin=e}},G=h`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool rejectBySlice(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}`,K=r(),q=r(),J=r(),Y=f()})))()}export{X as a,E as c,j as i,D as l,M as n,A as o,W as r,N as s,U as t};