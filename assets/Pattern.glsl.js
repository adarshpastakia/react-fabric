import{n as e}from"./rolldown-runtime.js";import{o as t,r as n}from"./tslib.es6.js";import{n as r,t as i}from"./olidUtils.js";import{n as a,r as o,t as s}from"./glsl.js";import{n as ee,t as c}from"./ShaderBuilder.js";import{n as l,r as u}from"./ShaderTechniqueConfiguration.js";import{a as d,i as f}from"./Slice.glsl.js";import{n as p,t as m}from"./ObjectAndLayerIdColor.glsl.js";import{n as h,t as g}from"./VisualVariables.glsl.js";import{n as _,t as v}from"./Float4PassUniform.js";import{n as y,t as b}from"./FloatBindUniform.js";import{n as x,r as te,t as ne}from"./View.glsl.js";import{n as re,t as ie}from"./ColorConversion.glsl.js";import{n as ae,t as S}from"./OutputColorHighlightOLID.glsl.js";import{i as C,n as w}from"./InterleavedLayout.js";import{n as oe,t as se}from"./TriangleTechniqueConfiguration.js";import{n as ce,t as T}from"./TextureBackedBufferLayout.js";import{n as le,t as ue}from"./Transform.glsl.js";import{n as de,t as fe}from"./VertexColor.glsl.js";import{i as E,n as D,r as O,t as k}from"./Texture2DUintDrawUniform.js";function A(e,t,n,r){return e.draped?null:e.hasVVColor?r:e.hasVertexColors?n:t}var j;function M(){return(M=e((()=>{t(),u(),se(),j=class extends oe{constructor(){super(...arguments),this.cullFace=0,this.style=0,this.emissionSource=0,this.hasVertexColors=!1,this.hasOccludees=!1,this.hasVVColor=!1,this.draped=!1,this.textureCoordinateType=0,this.discardInvisibleFragments=!0,this.writeDepth=!0,this.hasVVInstancing=!1,this.hasVVSize=!1,this.hasVVOpacity=!1,this.overlayEnabled=!1,this.snowCover=!1}},n([l({count:3})],j.prototype,`cullFace`,void 0),n([l({count:6})],j.prototype,`style`,void 0),n([l({count:8})],j.prototype,`emissionSource`,void 0),n([l()],j.prototype,`hasVertexColors`,void 0),n([l()],j.prototype,`hasOccludees`,void 0),n([l()],j.prototype,`hasVVColor`,void 0),n([l()],j.prototype,`draped`,void 0)})))()}function N(e){let t=w().vec3f(`position`).vec4f(`uvMapSpace`);return e.draped?e.hasVVColor?t.f32(`colorFeatureAttribute`):e.hasVertexColors&&t.vec4u8(`color`,{glNormalized:!0}):t.u32(`textureElementIndex`,{integer:!0}),i()&&t.vec4u8(`olidColor`),t.freeze()}function P(e){return A(e,I,L,R)}var F,I,L,R;function z(){return(z=e((()=>{C(),r(),ce(),M(),F=[{type:`mat3f32`,name:`boundingRect`}],I=new T(F),L=new T([...F,{type:`vec4unorm8`,name:`color`}]),R=new T([...F,{type:`f32`,name:`colorFeatureAttribute`}])})))()}function B(e){return A(e,H,U,W)}var V,H,U,W;function G(){return(G=e((()=>{E(),D(),z(),M(),V=new k(`componentTextureBuffer`,e=>e.textureBuffer),H=new O({layout:I,itemIndexAttribute:`textureElementIndex`,bufferUniform:V}),U=new O({layout:L,itemIndexAttribute:`textureElementIndex`,bufferUniform:V}),W=new O({layout:R,itemIndexAttribute:`textureElementIndex`,bufferUniform:V,enableNaNSupport:!0})})))()}function K(e){let t=B(e),n=t!=null,r=new ee;n&&r.include(t.TextureBackedBufferModule,e);let{vertex:i,fragment:s,attributes:c,varyings:l}=r,u=e.output===10;x(i,e),r.include(le);let d=``;n?(e.hasVVColor&&(d=t.getTextureAttribute(`colorFeatureAttribute`)),e.hasVertexColors?(r.varyings.add(`vColor`,`vec4`),r.vertex.code.add(o`void forwardVertexColor() { vColor = ${t.getTextureAttribute(`color`)}; }`)):r.vertex.code.add(o`void forwardVertexColor() {}`),c.add(`textureElementIndex`,`uint`)):(r.include(de,e),e.hasVVColor&&(c.add(`colorFeatureAttribute`,`float`),d=`colorFeatureAttribute`)),c.add(`position`,`vec3`),i.inputs.add(`position`,()=>`position`),r.include(h,e),r.include(m,e),s.include(f,e),r.include(ae,e),e.draped&&i.uniforms.add(new y(`worldToScreenRatio`,e=>1/e.screenToPCSRatio)),c.add(`uvMapSpace`,`vec4`),e.hasVertexColors||l.add(`vColor`,`vec4`),l.add(`vpos`,`vec3`,{invariant:!0}),l.add(`vuv`,`vec2`),i.uniforms.add(new v(`uColor`,e=>e.color));let p=e.style===3||e.style===4||e.style===5;return p&&i.code.add(o`
      const mat2 rotate45 = mat2(${o.float(q)}, ${o.float(-.70710678118)},
                                 ${o.float(J)}, ${o.float(q)});
    `),!e.draped&&n&&(ne(i,e),i.uniforms.add(new y(`worldToScreenPerDistanceRatio`,e=>1/e.camera.perScreenPixelRatio)),i.code.add(o`vec3 projectPointToLineSegment(vec3 center, vec3 halfVector, vec3 point) {
float projectedLength = dot(halfVector, point - center) / dot(halfVector, halfVector);
return center + halfVector * clamp(projectedLength, -1.0, 1.0);
}`),i.code.add(o`vec3 intersectRayPlane(vec3 rayDir, vec3 rayOrigin, vec3 planeNormal, vec3 planePoint) {
float d = dot(planeNormal, planePoint);
float t = (d - dot(planeNormal, rayOrigin)) / dot(planeNormal, rayDir);
return rayOrigin + t * rayDir;
}`),i.code.add(o`
      float boundingRectDistanceToCamera() {
        vec3 center = ${t.getTextureAttribute(`boundingRect`)}[0];
        vec3 halfU = ${t.getTextureAttribute(`boundingRect`)}[1];
        vec3 halfV = ${t.getTextureAttribute(`boundingRect`)}[2];
        vec3 n = normalize(cross(halfU, halfV));

        vec3 viewDir = - vec3(view[0][2], view[1][2], view[2][2]);

        float viewAngle = dot(viewDir, n);
        float minViewAngle = ${o.float(Y)};

        if (abs(viewAngle) < minViewAngle) {
          // view direction is (almost) parallel to plane -> clamp it to min angle
          float normalComponent = sign(viewAngle) * minViewAngle - viewAngle;
          viewDir = normalize(viewDir + normalComponent * n);
        }

        // intersect view direction with infinite plane that contains bounding rect
        vec3 planeProjected = intersectRayPlane(viewDir, cameraPosition, n, center);

        // clip to bounds by projecting to u and v line segments individually
        vec3 uProjected = projectPointToLineSegment(center, halfU, planeProjected);
        vec3 vProjected = projectPointToLineSegment(center, halfV, planeProjected);

        // use to calculate the closest point to camera on bounding rect
        vec3 closestPoint = uProjected + vProjected - center;

        return length(closestPoint - cameraPosition);
      }
    `)),i.code.add(o`
    vec2 scaledUV() {
      vec2 uv = uvMapSpace.xy ${a(p,` * rotate45`)};
      vec2 uvCellOrigin = uvMapSpace.zw ${a(p,` * rotate45`)};

      ${a(!e.draped,o`float distanceToCamera = boundingRectDistanceToCamera();
               float worldToScreenRatio = worldToScreenPerDistanceRatio / distanceToCamera;`)}

      // Logarithmically discretize ratio to avoid jittering
      float step = 0.1;
      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);

      vec2 uvOffset = mod(uvCellOrigin * discreteWorldToScreenRatio, ${o.float(X)});
      return uvOffset + (uv * discreteWorldToScreenRatio);
    }
  `),i.main.add(o`
    vuv = scaledUV();
    vpos = position;
    forwardVertexColor();
    forwardObjectAndLayerIdColor();
    ${e.hasVertexColors?`vColor *= uColor;`:e.hasVVColor?o`vColor = uColor * interpolateVVColor(${d});`:`vColor = uColor;`}
    gl_Position = transformPosition(proj, view, vpos);
  `),s.include(ie),e.draped&&s.uniforms.add(new y(`texelSize`,e=>1/e.camera.pixelRatio)),u||(s.code.add(o`
      const float lineWidth = ${o.float(Z)};
      const float spacing = ${o.float(X)};
      const float spacingINV = ${o.float(1/X)};

      float coverage(float p, float txlSize) {
        p = mod(p, spacing);

        float halfTxlSize = txlSize / 2.0;

        float start = p - halfTxlSize;
        float end = p + halfTxlSize;

        float coverage = (ceil(end * spacingINV) - floor(start * spacingINV)) * lineWidth;
        coverage -= min(lineWidth, mod(start, spacing));
        coverage -= max(lineWidth - mod(end, spacing), 0.0);

        return coverage / txlSize;
      }
    `),e.draped||s.code.add(o`const int maxSamples = 5;
float sampleAA(float p) {
vec2 dxdy = abs(vec2(dFdx(p), dFdy(p)));
float fwidth = dxdy.x + dxdy.y;
ivec2 samples = 1 + ivec2(clamp(dxdy, 0.0, float(maxSamples - 1)));
vec2 invSamples = 1.0 / vec2(samples);
float accumulator = 0.0;
for (int j = 0; j < maxSamples; j++) {
if(j >= samples.y) {
break;
}
for (int i = 0; i < maxSamples; i++) {
if(i >= samples.x) {
break;
}
vec2 step = vec2(i,j) * invSamples - 0.5;
accumulator += coverage(p + step.x * dxdy.x + step.y * dxdy.y, fwidth);
}
}
accumulator /= float(samples.x * samples.y);
return accumulator;
}`)),s.main.add(o`
    discardBySlice(vpos);
    vec4 color = vColor;
    ${a(!u,o`color.a *= ${pe(e)};`)}
    outputColorHighlightOLID(applySlice(color, vpos), color.rgb);
  `),r}function pe(e){function t(t){return e.draped?o`coverage(vuv.${t}, texelSize)`:o`sampleAA(vuv.${t})`}switch(e.style){case 3:case 0:return t(`y`);case 4:case 1:return t(`x`);case 5:case 2:return o`1.0 - (1.0 - ${t(`x`)}) * (1.0 - ${t(`y`)})`;default:return`0.0`}}var q,J,Y,X,Z,Q;function $(){return($=e((()=>{d(),ue(),p(),fe(),g(),re(),te(),_(),b(),s(),S(),G(),c(),q=.70710678118,J=q,Y=.08715574274,X=10,Z=1,Q=Object.freeze(Object.defineProperty({__proto__:null,build:K},Symbol.toStringTag,{value:`Module`}))})))()}export{P as a,M as c,G as i,j as l,$ as n,z as o,K as r,N as s,Q as t};