import{n as e}from"./chunk.js";import{i as t,l as n}from"./tslib.es6.js";import{l as r,o as i,r as a}from"./vec3f64.js";import{n as o,t as s}from"./mat4f64.js";import{C as c,w as l}from"./mat4.js";import{E as u,P as d,S as f,b as p,r as m}from"./vec3.js";import{r as h,t as g}from"./glsl.js";import{n as _,t as v}from"./Float3DrawUniform.js";import{n as y,t as b}from"./Float3PassUniform.js";import{r as x,t as S}from"./NoParameters.js";import{n as C,r as w,t as T}from"./ShaderTechniqueConfiguration.js";var E,D=e((()=>{n(),w(),E=class extends T{constructor(){super(...arguments),this.output=0,this.hasEmission=!1}},t([C({count:10})],E.prototype,`output`,void 0),t([C()],E.prototype,`hasEmission`,void 0)})),O,k=e((()=>{D(),O=class extends E{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}}}));function A(e,t){P(e,t,new b(`slicePlaneOrigin`,(e,n)=>R(t,e,n)),new b(`slicePlaneBasis1`,(e,n)=>z(t,e,n,n.slicePlane?.basis1)),new b(`slicePlaneBasis2`,(e,n)=>z(t,e,n,n.slicePlane?.basis2)))}function j(e,t){P(e,t,new v(`slicePlaneOrigin`,(e,n)=>R(t,e,n)),new v(`slicePlaneBasis1`,(e,n)=>z(t,e,n,n.slicePlane?.basis1)),new v(`slicePlaneBasis2`,(e,n)=>z(t,e,n,n.slicePlane?.basis2)))}function M(e,t){N(e,t,new v(`slicePlaneOrigin`,(e,n)=>R(t,e,n)),new v(`slicePlaneBasis1`,(e,n)=>z(t,e,n,n.slicePlane?.basis1)),new v(`slicePlaneBasis2`,(e,n)=>z(t,e,n,n.slicePlane?.basis2)))}function N(e,t,...n){t.hasSlicePlane?(e.uniforms.add(...n),e.code.add(H)):e.code.add(`bool rejectBySlice(vec3 pos) { return false; }`)}function P(e,t,...n){e.constants.add(`groundSliceOpacity`,`float`,.2),N(e,t,...n),t.hasSlicePlane?e.code.add(`
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
vec4 applySlice(vec4 color, vec3 pos) { return color; }`)}function F(e,t,n){return e.instancedDoublePrecision?d(U,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]):t.slicePlaneLocalOrigin}function I(e,t){return e==null?t.origin:f(W,t.origin,e)}function L(e,t,n){return e.hasSliceTranslatedView?t==null?n.camera.viewMatrix:c(K,n.camera.viewMatrix,t):null}function R(e,t,n){if(n.slicePlane==null)return a;let r=F(e,t,n),i=I(r,n.slicePlane),o=L(e,r,n);return o==null?i:m(W,i,o)}function z(e,t,n,r){if(r==null||n.slicePlane==null)return a;let i=F(e,t,n),o=I(i,n.slicePlane),s=L(e,i,n);return s==null?r:(p(G,r,o),m(W,o,s),m(G,G,s),f(G,G,W))}var B,V,H,U,W,G,K,q=e((()=>{n(),l(),o(),u(),i(),k(),_(),y(),g(),w(),x(),B=class extends O{constructor(){super(...arguments),this.hasSlicePlane=!1,this.hasSliceTranslatedView=!1}},t([C()],B.prototype,`hasSlicePlane`,void 0),V=class extends S{constructor(e){super(),this.slicePlaneLocalOrigin=e}},H=h`struct SliceFactors {
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
}`,U=r(),W=r(),G=r(),K=s()}));export{A as a,O as c,B as i,E as l,j as n,M as o,q as r,k as s,V as t,D as u};