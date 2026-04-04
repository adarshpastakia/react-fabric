import{n as e}from"./chunk.js";import{i as t,l as n}from"./tslib.es6.js";import{n as r,r as i,t as a}from"./glsl.js";import{n as o,t as s}from"./ShaderBuilder.js";import{n as c,t as l}from"./olidUtils.js";import{n as u,r as d}from"./ShaderTechniqueConfiguration.js";import{n as f,r as p}from"./Slice.glsl.js";import{n as m,t as h}from"./DefaultTechniqueConfiguration.js";import{n as ee,t as g}from"./ObjectAndLayerIdColor.glsl.js";import{n as _,t as v}from"./VisualVariables.glsl.js";import{n as y,t as b}from"./Float4PassUniform.js";import{n as x,t as te}from"./FloatBindUniform.js";import{n as S,r as ne,t as re}from"./View.glsl.js";import{n as ie,t as ae}from"./ColorConversion.glsl.js";import{n as oe,t as se}from"./TerrainDepthTest.glsl.js";import{n as ce,t as le}from"./OutputColorHighlightOLID.glsl.js";import{i as ue,n as de}from"./InterleavedLayout.js";import{n as fe,t as C}from"./TextureBackedBufferLayout.js";import{n as w,t as T}from"./Transform.glsl.js";import{n as E,t as D}from"./VertexColor.glsl.js";import{i as O,n as k,r as A,t as j}from"./Texture2DUintDrawUniform.js";function M(e,t,n,r){return e.draped?null:e.hasVVColor?r:e.hasVertexColors?n:t}var N,P=e((()=>{n(),d(),h(),N=class extends m{constructor(){super(...arguments),this.cullFace=0,this.style=0,this.hasVertexColors=!1,this.polygonOffset=!1,this.hasOccludees=!1,this.enableOffset=!0,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.hasVVColor=!1,this.draped=!1,this.textureCoordinateType=0,this.emissionSource=0,this.discardInvisibleFragments=!0,this.writeDepth=!0,this.occlusionPass=!1,this.hasVVInstancing=!1,this.hasVVSize=!1,this.hasVVOpacity=!1,this.overlayEnabled=!1,this.snowCover=!1}},t([u({count:3})],N.prototype,`cullFace`,void 0),t([u({count:6})],N.prototype,`style`,void 0),t([u()],N.prototype,`hasVertexColors`,void 0),t([u()],N.prototype,`polygonOffset`,void 0),t([u()],N.prototype,`hasOccludees`,void 0),t([u()],N.prototype,`enableOffset`,void 0),t([u()],N.prototype,`terrainDepthTest`,void 0),t([u()],N.prototype,`cullAboveTerrain`,void 0),t([u()],N.prototype,`hasVVColor`,void 0),t([u()],N.prototype,`draped`,void 0)}));function F(e){let t=de().vec3f(`position`).vec4f(`uvMapSpace`);return e.draped?e.hasVVColor?t.f32(`colorFeatureAttribute`):e.hasVertexColors&&t.vec4u8(`color`,{glNormalized:!0}):t.u32(`textureElementIndex`,{integer:!0}),l()&&t.vec4u8(`olidColor`),t.freeze()}function I(e){return M(e,R,z,B)}var L,R,z,B,V=e((()=>{ue(),c(),fe(),P(),L=[{type:`mat3f32`,name:`boundingRect`}],R=new C(L),z=new C([...L,{type:`vec4unorm8`,name:`color`}]),B=new C([...L,{type:`f32`,name:`colorFeatureAttribute`}])}));function pe(e){return M(e,U,W,G)}var H,U,W,G,K=e((()=>{A(),k(),V(),P(),H=new j(`componentTextureBuffer`,e=>e.textureBuffer),U=new O({layout:R,itemIndexAttribute:`textureElementIndex`,bufferUniform:H}),W=new O({layout:z,itemIndexAttribute:`textureElementIndex`,bufferUniform:H}),G=new O({layout:B,itemIndexAttribute:`textureElementIndex`,bufferUniform:H,enableNaNSupport:!0})}));function q(e){let t=pe(e),n=t!=null,a=new o;n&&a.include(t.TextureBackedBufferModule,e);let{vertex:s,fragment:c,attributes:l,varyings:u}=a,d=e.output===8;S(s,e),a.include(w);let p=``;n?(e.hasVVColor&&(p=t.getTextureAttribute(`colorFeatureAttribute`)),e.hasVertexColors?(a.varyings.add(`vColor`,`vec4`),a.vertex.code.add(i`void forwardVertexColor() { vColor = ${t.getTextureAttribute(`color`)}; }`)):a.vertex.code.add(i`void forwardVertexColor() {}`),l.add(`textureElementIndex`,`uint`)):(a.include(E,e),e.hasVVColor&&(l.add(`colorFeatureAttribute`,`float`),p=`colorFeatureAttribute`)),a.include(_,e),a.include(g,e),a.fragment.include(f,e),a.include(le,e),a.include(se,e),e.draped&&s.uniforms.add(new x(`worldToScreenRatio`,e=>1/e.screenToPCSRatio)),l.add(`position`,`vec3`),l.add(`uvMapSpace`,`vec4`),e.hasVertexColors||u.add(`vColor`,`vec4`),u.add(`vpos`,`vec3`,{invariant:!0}),u.add(`vuv`,`vec2`),s.uniforms.add(new b(`uColor`,e=>e.color));let m=e.style===3||e.style===4||e.style===5;return m&&s.code.add(i`
      const mat2 rotate45 = mat2(${i.float(J)}, ${i.float(-Y)},
                                 ${i.float(Y)}, ${i.float(J)});
    `),!e.draped&&n&&(re(s,e),s.uniforms.add(new x(`worldToScreenPerDistanceRatio`,e=>1/e.camera.perScreenPixelRatio)),s.code.add(i`vec3 projectPointToLineSegment(vec3 center, vec3 halfVector, vec3 point) {
float projectedLength = dot(halfVector, point - center) / dot(halfVector, halfVector);
return center + halfVector * clamp(projectedLength, -1.0, 1.0);
}`),s.code.add(i`vec3 intersectRayPlane(vec3 rayDir, vec3 rayOrigin, vec3 planeNormal, vec3 planePoint) {
float d = dot(planeNormal, planePoint);
float t = (d - dot(planeNormal, rayOrigin)) / dot(planeNormal, rayDir);
return rayOrigin + t * rayDir;
}`),s.code.add(i`
      float boundingRectDistanceToCamera() {
        vec3 center = ${t.getTextureAttribute(`boundingRect`)}[0];
        vec3 halfU = ${t.getTextureAttribute(`boundingRect`)}[1];
        vec3 halfV = ${t.getTextureAttribute(`boundingRect`)}[2];
        vec3 n = normalize(cross(halfU, halfV));

        vec3 viewDir = - vec3(view[0][2], view[1][2], view[2][2]);

        float viewAngle = dot(viewDir, n);
        float minViewAngle = ${i.float(X)};

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
    `)),s.code.add(i`
    vec2 scaledUV() {
      vec2 uv = uvMapSpace.xy ${r(m,` * rotate45`)};
      vec2 uvCellOrigin = uvMapSpace.zw ${r(m,` * rotate45`)};

      ${r(!e.draped,i`float distanceToCamera = boundingRectDistanceToCamera();
               float worldToScreenRatio = worldToScreenPerDistanceRatio / distanceToCamera;`)}

      // Logarithmically discretize ratio to avoid jittering
      float step = 0.1;
      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);

      vec2 uvOffset = mod(uvCellOrigin * discreteWorldToScreenRatio, ${i.float(Z)});
      return uvOffset + (uv * discreteWorldToScreenRatio);
    }
  `),s.main.add(i`
    vuv = scaledUV();
    vpos = position;
    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    forwardVertexColor();
    forwardObjectAndLayerIdColor();
    ${e.hasVertexColors?`vColor *= uColor;`:e.hasVVColor?i`vColor = uColor * interpolateVVColor(${p});`:`vColor = uColor;`}
    gl_Position = transformPosition(proj, view, vpos);
  `),c.include(ae),e.draped&&c.uniforms.add(new x(`texelSize`,e=>1/e.camera.pixelRatio)),d||(c.code.add(i`
      const float lineWidth = ${i.float(Q)};
      const float spacing = ${i.float(Z)};
      const float spacingINV = ${i.float(1/Z)};

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
    `),e.draped||c.code.add(i`const int maxSamples = 5;
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
}`)),c.main.add(i`
    discardBySlice(vpos);
    discardByTerrainDepth();
    vec4 color = vColor;
    ${r(!d,i`color.a *= ${me(e)};`)}
    outputColorHighlightOLID(applySlice(color, vpos), color.rgb);
  `),a}function me(e){function t(t){return e.draped?i`coverage(vuv.${t}, texelSize)`:i`sampleAA(vuv.${t})`}switch(e.style){case 3:case 0:return t(`y`);case 4:case 1:return t(`x`);case 5:case 2:return i`1.0 - (1.0 - ${t(`x`)}) * (1.0 - ${t(`y`)})`;default:return`0.0`}}var J,Y,X,Z,Q,$,he=e((()=>{p(),T(),ee(),D(),oe(),v(),ie(),ne(),y(),te(),a(),ce(),K(),s(),J=.70710678118,Y=J,X=.08715574274,Z=10,Q=1,$=Object.freeze(Object.defineProperty({__proto__:null,build:q},Symbol.toStringTag,{value:`Module`}))}));export{I as a,P as c,K as i,N as l,$ as n,V as o,q as r,F as s,he as t};