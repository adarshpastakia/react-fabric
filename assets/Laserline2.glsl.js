import{n as e}from"./chunk.js";import{T as t,v as n}from"./mathUtils.js";import{b as r,h as ee}from"./vec2.js";import{l as i,o as te}from"./vec3f64.js";import{_ as a,o as ne}from"./vec4.js";import{a as o,o as s}from"./vec4f64.js";import{A as c,E as l,S as u,b as d,j as f,r as p,u as re,v as m,y as h}from"./vec3.js";import{C as ie,b as g,h as _}from"./plane.js";import{a as ae,r as oe}from"./vec2f64.js";import{r as v,t as y}from"./glsl.js";import{n as se,t as b}from"./Float3PassUniform.js";import{n as x,t as ce}from"./FloatPassUniform.js";import{c as le,s as S}from"./lineSegment.js";import{n as C,t as w}from"./ShaderBuilder.js";import{n as T,t as E}from"./ScreenSpacePass.glsl.js";import{n as D,t as O}from"./Float4PassUniform.js";import{n as k,t as A}from"./Float3BindUniform.js";import{n as j,t as M}from"./FloatBindUniform.js";import{n as N,t as P}from"./Float2PassUniform.js";import{n as F,t as I}from"./Laserline.glsl.js";function L(e){let t=new C;t.include(T),t.include(F,e);let n=t.fragment;if(e.lineVerticalPlaneEnabled||e.heightManifoldEnabled)if(n.uniforms.add(new x(`maxPixelDistance`,(t,n)=>e.heightManifoldEnabled?2*n.camera.computeScreenPixelSizeAt(t.heightManifoldTarget):2*n.camera.computeScreenPixelSizeAt(t.lineVerticalPlaneSegment.origin))),n.code.add(v`float planeDistancePixels(vec4 plane, vec3 pos) {
float dist = dot(plane.xyz, pos) + plane.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`),e.spherical){let e=(e,t,n)=>p(e,t.heightManifoldTarget,n.camera.viewMatrix),t=(e,t)=>p(e,[0,0,0],t.camera.viewMatrix);n.uniforms.add(new O(`heightManifoldOrigin`,(n,r)=>(e(K,n,r),t(Y,r),u(Y,Y,K),m(q,Y),q[3]=h(Y),q)),new A(`globalOrigin`,e=>t(K,e)),new x(`cosSphericalAngleThreshold`,(e,t)=>1-Math.max(2,f(t.camera.eye,e.heightManifoldTarget)*t.camera.perRenderPixelRatio)/h(e.heightManifoldTarget))),n.code.add(v`float globeDistancePixels(float posInGlobalOriginLength) {
float dist = abs(posInGlobalOriginLength - heightManifoldOrigin.w);
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}
float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
vec3 posInGlobalOriginNorm = normalize(globalOrigin - pos);
float cosAngle = dot(posInGlobalOriginNorm, heightManifoldOrigin.xyz);
vec3 posInGlobalOrigin = globalOrigin - pos;
float posInGlobalOriginLength = length(posInGlobalOrigin);
float sphericalDistance = globeDistancePixels(posInGlobalOriginLength);
float planarDistance = planeDistancePixels(heightPlane, pos);
return cosAngle < cosSphericalAngleThreshold ? sphericalDistance : planarDistance;
}`)}else n.code.add(v`float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
return planeDistancePixels(heightPlane, pos);
}`);if(e.pointDistanceEnabled&&(n.uniforms.add(new x(`maxPixelDistance`,(e,t)=>2*t.camera.computeScreenPixelSizeAt(e.pointDistanceTarget))),n.code.add(v`float sphereDistancePixels(vec4 sphere, vec3 pos) {
float dist = distance(sphere.xyz, pos) - sphere.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`)),e.intersectsLineEnabled&&n.uniforms.add(new j(`perScreenPixelRatio`,e=>e.camera.perScreenPixelRatio)).code.add(v`float lineDistancePixels(vec3 start, vec3 dir, float radius, vec3 pos) {
float dist = length(cross(dir, pos - start)) / (length(pos) * perScreenPixelRatio);
return abs(dist) - radius;
}`),(e.lineVerticalPlaneEnabled||e.intersectsLineEnabled)&&n.code.add(v`bool pointIsWithinLine(vec3 pos, vec3 start, vec3 end) {
vec3 dir = end - start;
float t2 = dot(dir, pos - start);
float l2 = dot(dir, dir);
return t2 >= 0.0 && t2 <= l2;
}`),n.main.add(v`vec3 pos;
vec3 normal;
float angleCutoffAdjust;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, angleCutoffAdjust, depthDiscontinuityAlpha)) {
fragColor = vec4(0.0);
return;
}
vec4 color = vec4(0.0);`),e.heightManifoldEnabled){n.uniforms.add(new P(`angleCutoff`,e=>R(e)),new O(`heightPlane`,(e,t)=>U(e.heightManifoldTarget,e.renderCoordsHelper.worldUpAtPosition(e.heightManifoldTarget,K),t.camera.viewMatrix)));let t=e.spherical?v`normalize(globalOrigin - pos)`:v`heightPlane.xyz`;n.main.add(v`
      vec2 angleCutoffAdjusted = angleCutoff - angleCutoffAdjust;
      // Fade out laserlines on flat surfaces
      float heightManifoldAlpha = 1.0 - smoothstep(angleCutoffAdjusted.x, angleCutoffAdjusted.y, abs(dot(normal, ${t})));
      vec4 heightManifoldColor = laserlineProfile(heightManifoldDistancePixels(heightPlane, pos));
      color = max(color, heightManifoldColor * heightManifoldAlpha);`)}return e.pointDistanceEnabled&&(n.uniforms.add(new P(`angleCutoff`,e=>R(e)),new O(`pointDistanceSphere`,(e,t)=>z(e,t))),n.main.add(v`float pointDistanceSphereDistance = sphereDistancePixels(pointDistanceSphere, pos);
vec4 pointDistanceSphereColor = laserlineProfile(pointDistanceSphereDistance);
float pointDistanceSphereAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, normalize(pos - pointDistanceSphere.xyz))));
color = max(color, pointDistanceSphereColor * pointDistanceSphereAlpha);`)),e.lineVerticalPlaneEnabled&&(n.uniforms.add(new P(`angleCutoff`,e=>R(e)),new O(`lineVerticalPlane`,(e,t)=>B(e,t)),new b(`lineVerticalStart`,(e,t)=>V(e,t)),new b(`lineVerticalEnd`,(e,t)=>H(e,t))),n.main.add(v`if (pointIsWithinLine(pos, lineVerticalStart, lineVerticalEnd)) {
float lineVerticalDistance = planeDistancePixels(lineVerticalPlane, pos);
vec4 lineVerticalColor = laserlineProfile(lineVerticalDistance);
float lineVerticalAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, lineVerticalPlane.xyz)));
color = max(color, lineVerticalColor * lineVerticalAlpha);
}`)),e.intersectsLineEnabled&&(n.uniforms.add(new P(`angleCutoff`,e=>R(e)),new b(`intersectsLineStart`,(e,t)=>p(K,e.lineStartWorld,t.camera.viewMatrix)),new b(`intersectsLineEnd`,(e,t)=>p(K,e.lineEndWorld,t.camera.viewMatrix)),new b(`intersectsLineDirection`,(e,t)=>(c(q,e.intersectsLineSegment.vector),q[3]=0,m(K,a(q,q,t.camera.viewMatrix)))),new x(`intersectsLineRadius`,e=>e.intersectsLineRadius)),n.main.add(v`if (pointIsWithinLine(pos, intersectsLineStart, intersectsLineEnd)) {
float intersectsLineDistance = lineDistancePixels(intersectsLineStart, intersectsLineDirection, intersectsLineRadius, pos);
vec4 intersectsLineColor = laserlineProfile(intersectsLineDistance);
float intersectsLineAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, 1.0 - abs(dot(normal, intersectsLineDirection)));
color = max(color, intersectsLineColor * intersectsLineAlpha);
}`)),n.main.add(v`fragColor = laserlineOutput(color * depthDiscontinuityAlpha);`),t}function R(e){return r(G,Math.cos(e.angleCutoff),Math.cos(Math.max(0,e.angleCutoff-t(2))))}function z(e,t){return p(Q,e.pointDistanceOrigin,t.camera.viewMatrix),Q[3]=f(e.pointDistanceOrigin,e.pointDistanceTarget),Q}function B(e,t){let n=le(e.lineVerticalPlaneSegment,.5,K),r=re(K,e.renderCoordsHelper.worldUpAtPosition(n,J),m(Y,e.lineVerticalPlaneSegment.vector));return m(r,r),U(e.lineVerticalPlaneSegment.origin,r,t.camera.viewMatrix)}function V(e,t){let n=c(K,e.lineVerticalPlaneSegment.origin);return e.renderCoordsHelper.setAltitude(n,0),p(n,n,t.camera.viewMatrix)}function H(e,t){let n=d(K,e.lineVerticalPlaneSegment.origin,e.lineVerticalPlaneSegment.vector);return e.renderCoordsHelper.setAltitude(n,0),p(n,n,t.camera.viewMatrix)}function U(e,t,n){return p(X,e,n),c(q,t),q[3]=0,a(q,q,n),_(X,q,Z)}var W,G,K,q,J,Y,X,Z,Q,$,ue=e((()=>{n(),ee(),oe(),l(),te(),ne(),o(),S(),g(),I(),E(),N(),k(),se(),D(),M(),ce(),y(),w(),W=t(6),G=ae(),K=i(),q=s(),J=i(),Y=i(),X=i(),Z=ie(),Q=s(),$=Object.freeze(Object.defineProperty({__proto__:null,build:L,defaultAngleCutoff:W},Symbol.toStringTag,{value:`Module`}))}));export{L as i,$ as n,ue as r,W as t};