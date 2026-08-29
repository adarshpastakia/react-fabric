import{n as e}from"./rolldown-runtime.js";import{n as t,t as n}from"./mat3f64.js";import{l as r,o as i}from"./vec3f64.js";import{n as a,r as o,t as s}from"./glsl.js";import{n as c,t as l}from"./Uniform.js";import{r as u,t as d}from"./NoParameters.js";import{n as f,t as p}from"./Texture2DPassUniform.js";import{n as m,t as h}from"./Float3DrawUniform.js";import{n as g,t as _}from"./Float3PassUniform.js";import{n as v,t as y}from"./Matrix3PassUniform.js";import{n as b,t as x}from"./Matrix4BindUniform.js";import{n as S,t as C}from"./DoublePrecision.glsl.js";var w;function T(){return(T=e((()=>{c(),w=class extends l{constructor(e,t){super(e,`int`,2,(n,r,i)=>n.setUniform1i(e,t(r,i)))}}})))()}var E;function D(){return(D=e((()=>{c(),E=class extends l{constructor(e,t,n){super(e,`mat3`,2,(r,i,a)=>r.setUniformMatrix3fv(e,t(i,a),n))}}})))()}function O(e,t){let{attributes:n,vertex:r,varyings:i,fragment:s}=e;r.include(C),n.add(`position`,`vec3`),i.add(`vPositionWorldCameraRelative`,`vec3`),i.add(`vPosition_view`,`vec3`,{invariant:!0}),r.uniforms.add(new _(`transformWorldFromViewTH`,e=>e.transformWorldFromViewTH),new _(`transformWorldFromViewTL`,e=>e.transformWorldFromViewTL),new v(`transformViewFromCameraRelativeRS`,e=>e.transformViewFromCameraRelativeRS),new b(`transformProjFromView`,e=>e.camera.projectionMatrix));let{vertexPositionRotationType:c,useTransformationTexture:l}=t,u=c===1,d=c===2,f=u||d;l?r.uniforms.add(new w(`transformationDrawId`,e=>e.transformationDrawId),new p(`transformationTexture`,e=>e.transformationTexture)):(r.uniforms.add(new h(`transformWorldFromModelTH`,e=>e.transformWorldFromModelTH),new h(`transformWorldFromModelTL`,e=>e.transformWorldFromModelTL)),f&&r.uniforms.add(new E(`transformWorldFromModelRS`,e=>e.transformWorldFromModelRS))),r.code.add(o`
      ${a(f,o`
          mat3 modelTransformation() {
          ${a(l,o`
                return mat3(
                  texelFetch(transformationTexture, ivec2(2, transformationDrawId), 0).xyz,
                  texelFetch(transformationTexture, ivec2(3, transformationDrawId), 0).xyz,
                  texelFetch(transformationTexture, ivec2(4, transformationDrawId), 0).xyz
                );`,o`return transformWorldFromModelRS;`)}
          }
        `)}

      vec3 originL() {
        return ${a(l,o`texelFetch(transformationTexture, ivec2(0, transformationDrawId), 0).xyz;`,o`transformWorldFromModelTL;`)}
      }

      vec3 originH() {
        return ${a(l,o`texelFetch(transformationTexture, ivec2(1, transformationDrawId), 0).xyz;`,o`transformWorldFromModelTH;`)};
      }

      vec3 positionWorldCameraRelative() {

      vec3 rotatedModelPosition = ${a(u,o`modelTransformation() *`)} position;

      vec3 transform_CameraRelativeFromModel = dpAdd(
        originL(),
        originH(),
        -transformWorldFromViewTL,
        -transformWorldFromViewTH
      );

      return transform_CameraRelativeFromModel + rotatedModelPosition;
    }

    vec3 positionForDraping() {
      return ${a(d,o`modelTransformation() *`)} position;
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
  `),s.uniforms.add(new _(`transformWorldFromViewTL`,e=>e.transformWorldFromViewTL)),r.code.add(o`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),s.code.add(o`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}var k,A;function j(){return(j=e((()=>{t(),i(),S(),m(),g(),s(),T(),D(),y(),x(),f(),u(),k=class extends d{constructor(){super(...arguments),this.transformWorldFromViewTH=r(),this.transformWorldFromViewTL=r(),this.transformViewFromCameraRelativeRS=n()}},A=class extends d{constructor(){super(...arguments),this.transformWorldFromModelRS=n(),this.transformWorldFromModelTH=r(),this.transformWorldFromModelTL=r(),this.transformationDrawId=0}}})))()}export{T as a,k as i,O as n,w as o,j as r,A as t};