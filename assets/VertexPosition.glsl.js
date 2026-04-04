import{n as e}from"./chunk.js";import{n as t,t as n}from"./mat3f64.js";import{l as r,o as i}from"./vec3f64.js";import{n as a,r as o,t as s}from"./glsl.js";import{n as c,t as l}from"./Float3DrawUniform.js";import{n as u,t as d}from"./Float3PassUniform.js";import{r as f,t as p}from"./NoParameters.js";import{n as m,t as h}from"./Matrix3PassUniform.js";import{n as g,t as _}from"./Matrix4BindUniform.js";import{i as v,n as y,r as b,t as x}from"./Matrix3DrawUniform.js";function S(e,t){let{attributes:n,vertex:r,varyings:i,fragment:s}=e;r.include(b,t),n.add(`position`,`vec3`),i.add(`vPositionWorldCameraRelative`,`vec3`),i.add(`vPosition_view`,`vec3`,{invariant:!0}),r.uniforms.add(new d(`transformWorldFromViewTH`,e=>e.transformWorldFromViewTH),new d(`transformWorldFromViewTL`,e=>e.transformWorldFromViewTL),new m(`transformViewFromCameraRelativeRS`,e=>e.transformViewFromCameraRelativeRS),new g(`transformProjFromView`,e=>e.camera.projectionMatrix),new l(`transformWorldFromModelTH`,e=>e.transformWorldFromModelTH),new l(`transformWorldFromModelTL`,e=>e.transformWorldFromModelTL));let{hasModelRotationScale:c}=t;c&&r.uniforms.add(new y(`transformWorldFromModelRS`,e=>e.transformWorldFromModelRS)),r.code.add(o`
      vec3 positionWorldCameraRelative() {
      vec3 rotatedModelPosition = ${a(c,o`transformWorldFromModelRS * `)} position;

      vec3 transform_CameraRelativeFromModel = dpAdd(
        transformWorldFromModelTL,
        transformWorldFromModelTH,
        -transformWorldFromViewTL,
        -transformWorldFromViewTH
      );

      return transform_CameraRelativeFromModel + rotatedModelPosition;
    }
  `),r.code.add(o`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${t.spherical?o`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:o`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),s.uniforms.add(new d(`transformWorldFromViewTL`,e=>e.transformWorldFromViewTL)),r.code.add(o`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),s.code.add(o`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}var C,w,T=e((()=>{t(),i(),v(),c(),u(),s(),x(),h(),_(),f(),C=class extends p{constructor(){super(...arguments),this.transformWorldFromViewTH=r(),this.transformWorldFromViewTL=r(),this.transformViewFromCameraRelativeRS=n()}},w=class extends p{constructor(){super(...arguments),this.transformWorldFromModelRS=n(),this.transformWorldFromModelTH=r(),this.transformWorldFromModelTL=r()}}}));export{C as i,S as n,T as r,w as t};