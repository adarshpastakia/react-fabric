import{n as e}from"./rolldown-runtime.js";import{_ as t,y as n}from"./mathUtils.js";import{O as r,x as i}from"./vec2.js";import{l as a,o}from"./vec3f64.js";import{C as s,D as ee,M as c,b as l,d as u,j as d,p as f,x as p,y as m}from"./vec3.js";import{_ as h,o as te}from"./vec4.js";import{o as ne,s as g}from"./vec4f64.js";import{o as re,s as _}from"./vec2f64.js";import{S as v,m as ie,y as ae}from"./plane.js";import{s as y,t as b}from"./lineSegment.js";import{r as x,t as oe}from"./glsl.js";import{n as se,t as ce}from"./ScreenSpacePass.glsl.js";import{n as le,t as ue}from"./ShaderBuilder.js";import{n as S,t as C}from"./FloatPassUniform.js";import{n as w,t as T}from"./Float3PassUniform.js";import{n as E,t as D}from"./Float4PassUniform.js";import{n as O,t as k}from"./Float3BindUniform.js";import{n as A,t as j}from"./FloatBindUniform.js";import{n as M,t as N}from"./Float2PassUniform.js";import{n as P,t as F}from"./Laserline.glsl.js";function I(e){let t=new le;t.include(se),t.include(P,e);let n=t.fragment;if(e.lineVerticalPlaneEnabled||e.heightManifoldEnabled)if(n.uniforms.add(new S(`maxPixelDistance`,(t,n)=>e.heightManifoldEnabled?2*n.camera.computeScreenPixelSizeAt(t.heightManifoldTarget):2*n.camera.computeScreenPixelSizeAt(t.lineVerticalPlaneSegment.origin))),n.code.add(x`float planeDistancePixels(vec4 plane, vec3 pos) {
float dist = dot(plane.xyz, pos) + plane.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`),e.spherical){let e=(e,t,n)=>f(e,t.heightManifoldTarget,n.camera.viewMatrix),t=(e,t)=>f(e,[0,0,0],t.camera.viewMatrix);n.uniforms.add(new D(`heightManifoldOrigin`,(n,r)=>(e(G,n,r),t(J,r),p(J,J,G),m(K,J),K[3]=l(J),K)),new k(`globalOrigin`,e=>t(G,e)),new S(`cosSphericalAngleThreshold`,(e,t)=>1-Math.max(2,c(t.camera.eye,e.heightManifoldTarget)*t.camera.perRenderPixelRatio)/l(e.heightManifoldTarget))),n.code.add(x`float globeDistancePixels(float posInGlobalOriginLength) {
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
}`)}else n.code.add(x`float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
return planeDistancePixels(heightPlane, pos);
}`);if(e.pointDistanceEnabled&&(n.uniforms.add(new S(`maxPixelDistance`,(e,t)=>2*t.camera.computeScreenPixelSizeAt(e.pointDistanceTarget))),n.code.add(x`float sphereDistancePixels(vec4 sphere, vec3 pos) {
float dist = distance(sphere.xyz, pos) - sphere.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`)),e.intersectsLineEnabled&&n.uniforms.add(new A(`perScreenPixelRatio`,e=>e.camera.perScreenPixelRatio)).code.add(x`float lineDistancePixels(vec3 start, vec3 dir, float radius, vec3 pos) {
float dist = length(cross(dir, pos - start)) / (length(pos) * perScreenPixelRatio);
return abs(dist) - radius;
}`),(e.lineVerticalPlaneEnabled||e.intersectsLineEnabled)&&n.code.add(x`bool pointIsWithinLine(vec3 pos, vec3 start, vec3 end) {
vec3 dir = end - start;
float t2 = dot(dir, pos - start);
float l2 = dot(dir, dir);
return t2 >= 0.0 && t2 <= l2;
}`),n.main.add(x`vec3 pos;
vec3 normal;
float angleCutoffAdjust;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, angleCutoffAdjust, depthDiscontinuityAlpha)) {
fragColor = vec4(0.0);
return;
}
vec4 color = vec4(0.0);`),e.heightManifoldEnabled){n.uniforms.add(new N(`angleCutoff`,e=>L(e)),new D(`heightPlane`,(e,t)=>H(e.heightManifoldTarget,e.renderCoordsHelper.worldUpAtPosition(e.heightManifoldTarget,G),t.camera.viewMatrix)));let t=e.spherical?x`normalize(globalOrigin - pos)`:x`heightPlane.xyz`;n.main.add(x`
      vec2 angleCutoffAdjusted = angleCutoff - angleCutoffAdjust;
      // Fade out laserlines on flat surfaces
      float heightManifoldAlpha = 1.0 - smoothstep(angleCutoffAdjusted.x, angleCutoffAdjusted.y, abs(dot(normal, ${t})));
      vec4 heightManifoldColor = laserlineProfile(heightManifoldDistancePixels(heightPlane, pos));
      color = max(color, heightManifoldColor * heightManifoldAlpha);`)}return e.pointDistanceEnabled&&(n.uniforms.add(new N(`angleCutoff`,e=>L(e)),new D(`pointDistanceSphere`,(e,t)=>R(e,t))),n.main.add(x`float pointDistanceSphereDistance = sphereDistancePixels(pointDistanceSphere, pos);
vec4 pointDistanceSphereColor = laserlineProfile(pointDistanceSphereDistance);
float pointDistanceSphereAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, normalize(pos - pointDistanceSphere.xyz))));
color = max(color, pointDistanceSphereColor * pointDistanceSphereAlpha);`)),e.lineVerticalPlaneEnabled&&(n.uniforms.add(new N(`angleCutoff`,e=>L(e)),new D(`lineVerticalPlane`,(e,t)=>z(e,t)),new T(`lineVerticalStart`,(e,t)=>B(e,t)),new T(`lineVerticalEnd`,(e,t)=>V(e,t))),n.main.add(x`if (pointIsWithinLine(pos, lineVerticalStart, lineVerticalEnd)) {
float lineVerticalDistance = planeDistancePixels(lineVerticalPlane, pos);
vec4 lineVerticalColor = laserlineProfile(lineVerticalDistance);
float lineVerticalAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, lineVerticalPlane.xyz)));
color = max(color, lineVerticalColor * lineVerticalAlpha);
}`)),e.intersectsLineEnabled&&(n.uniforms.add(new N(`angleCutoff`,e=>L(e)),new T(`intersectsLineStart`,(e,t)=>f(G,e.lineStartWorld,t.camera.viewMatrix)),new T(`intersectsLineEnd`,(e,t)=>f(G,e.lineEndWorld,t.camera.viewMatrix)),new T(`intersectsLineDirection`,(e,t)=>(d(K,e.intersectsLineSegment.vector),K[3]=0,m(G,h(K,K,t.camera.viewMatrix)))),new S(`intersectsLineRadius`,e=>e.intersectsLineRadius)),n.main.add(x`if (pointIsWithinLine(pos, intersectsLineStart, intersectsLineEnd)) {
float intersectsLineDistance = lineDistancePixels(intersectsLineStart, intersectsLineDirection, intersectsLineRadius, pos);
vec4 intersectsLineColor = laserlineProfile(intersectsLineDistance);
float intersectsLineAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, 1.0 - abs(dot(normal, intersectsLineDirection)));
color = max(color, intersectsLineColor * intersectsLineAlpha);
}`)),n.main.add(x`fragColor = laserlineOutput(color * depthDiscontinuityAlpha);`),t}function L(e){return r(W,Math.cos(e.angleCutoff),Math.cos(Math.max(0,e.angleCutoff-t(2))))}function R(e,t){return f(Z,e.pointDistanceOrigin,t.camera.viewMatrix),Z[3]=c(e.pointDistanceOrigin,e.pointDistanceTarget),Z}function z(e,t){let n=b(e.lineVerticalPlaneSegment,.5,G),r=e.renderCoordsHelper.worldUpAtPosition(n,q),i=m(J,e.lineVerticalPlaneSegment.vector),a=u(G,r,i);return m(a,a),H(e.lineVerticalPlaneSegment.origin,a,t.camera.viewMatrix)}function B(e,t){let n=d(G,e.lineVerticalPlaneSegment.origin);return e.renderCoordsHelper.setAltitude(n,0),f(n,n,t.camera.viewMatrix)}function V(e,t){let n=s(G,e.lineVerticalPlaneSegment.origin,e.lineVerticalPlaneSegment.vector);return e.renderCoordsHelper.setAltitude(n,0),f(n,n,t.camera.viewMatrix)}function H(e,t,n){return f(Y,e,n),d(K,t),K[3]=0,h(K,K,n),ie(Y,K,X)}var U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{n(),i(),re(),ee(),o(),te(),ne(),y(),ae(),F(),ce(),M(),O(),w(),E(),j(),C(),oe(),ue(),U=t(6),W=_(),G=a(),K=g(),q=a(),J=a(),Y=a(),X=v(),Z=g(),Q=Object.freeze(Object.defineProperty({__proto__:null,build:I,defaultAngleCutoff:U},Symbol.toStringTag,{value:`Module`}))})))()}export{I as i,Q as n,$ as r,U as t};