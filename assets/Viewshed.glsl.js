import{n as e}from"./rolldown-runtime.js";import{o as t,u as n}from"./vec3f64.js";import{i as r,n as i,t as a}from"./mat4f64.js";import{C as o,w as s,y as c}from"./mat4.js";import{r as l,t as u}from"./glsl.js";import{n as d,t as f}from"./IntegerPassUniform.js";import{n as p,t as m}from"./ScreenSpacePass.glsl.js";import{r as h,t as g}from"./NoParameters.js";import{n as _,t as v}from"./ShaderBuilder.js";import{n as y,t as b}from"./FloatPassUniform.js";import{n as x,t as S}from"./Texture2DPassUniform.js";import{n as C,t as w}from"./Float3PassUniform.js";import{n as T,t as E}from"./FloatsPassUniform.js";import{n as D,t as O}from"./Matrix4BindUniform.js";import{n as k}from"./PiUtils.glsl.js";import{n as A,t as j}from"./Float2PassUniform.js";import{n as M,t as N}from"./Texture2DBindUniform.js";import{r as P,t as F}from"./ReadDepth.glsl.js";import{n as I,t as L}from"./CameraSpace.glsl.js";import{n as R,t as z}from"./Matrix4PassUniform.js";import{n as B,t as V}from"./Matrix4sPassUniform.js";function H(e){e.include(L),e.fragment.uniforms.add(new R(`inverseViewMatrix`,(e,t)=>{let n=o(a(),t.camera.viewMatrix,e.localOrigin);return c(n,n)})).code.add(l`vec4 reconstructLocalPosition(vec2 coord, float linearDepth) {
vec4 cameraSpace = vec4(reconstructPosition(coord, linearDepth), 1.0);
return inverseViewMatrix * cameraSpace;
}`)}var U;function W(){return(W=e((()=>{s(),i(),t(),I(),u(),z(),h(),U=class extends g{constructor(){super(...arguments),this.localOrigin=n()}}})))()}function G(){let e=new _,t=e.fragment;return e.include(p),e.include(H),t.include(F),t.include(k),t.uniforms.add(new D(`inverseProjectionMatrix`,e=>e.camera.inverseProjectionMatrix),new D(`inverseViewNormalMatrix`,({camera:e})=>c(q,e.viewInverseTransposeMatrix)),new w(`viewshedObserverOffset`,e=>e.observerOffset),new w(`viewshedTargetVector`,e=>e.targetVector),new w(`viewshedUpVector`,e=>e.upVector),new j(`viewshedFOVs`,e=>e.fovs),new j(`viewshedHeadingAndTilt`,e=>e.headingAndTilt),new j(`viewshedNearFar`,e=>e.shadowMap.nearFar??[1,100]),new y(`viewshedVolumeOffset`,e=>e.volumeOffset),new S(`viewshedShadowMap`,e=>e.shadowMap.depthTexture),new B(`viewshedProjectionMatrices`,e=>e.projectionMatrices,6),new B(`viewshedViewMatrices`,e=>e.viewMatrices,6),new d(`viewshedNumFaces`,e=>e.shadowMap.numActiveFaces),new T(`viewshedAtlasRegions`,24,e=>e.shadowMap.atlasRegions.flat()),new N(`depthTexture`,e=>e.mainDepth),new S(`normalMap`,e=>e.normals)),t.constants.add(`visibleColor`,`vec4`,[0,1,0,.5]),t.constants.add(`occludedColor`,`vec4`,[1,0,0,.5]),t.code.add(l`vec2 getViewshedUv(vec4 worldPosition, int face) {
mat4 viewshedMatrix = viewshedProjectionMatrices[face];
vec4 viewshedUv4 = viewshedMatrix * worldPosition;
vec3 viewshedUv = viewshedUv4.xyz / viewshedUv4.w;
return viewshedUv.xy;
}
float viewshedDepthToFloat(float depth) {
return (depth - viewshedNearFar[0]) / (viewshedNearFar[1] - viewshedNearFar[0]);
}
float getOrthographicDepthToViewshed(vec4 worldPosition, int face) {
mat4 viewshedViewMatrix = viewshedViewMatrices[face];
vec4 viewshedUv4 = viewshedViewMatrix * worldPosition;
vec3 viewshedUv = viewshedUv4.xyz / viewshedUv4.w;
float depth = -viewshedUv.z;
return viewshedDepthToFloat(depth);
}
float viewshedReadShadowMapDepth(sampler2D _viewshedShadowmap, ivec2 uv) {
return texelFetch(_viewshedShadowmap, uv, 0).r;
}
float viewshedFilterShadow(sampler2D _viewshedShadowmap, vec2 uv) {
vec2 uvScaled = uv * vec2(textureSize(_viewshedShadowmap, 0));
vec2 st    = fract(uvScaled);
ivec2 base = ivec2(uvScaled);
float s00 = viewshedReadShadowMapDepth( _viewshedShadowmap, ivec2(base.x,     base.y    ));
float s10 = viewshedReadShadowMapDepth( _viewshedShadowmap, ivec2(base.x + 1, base.y    ));
float s11 = viewshedReadShadowMapDepth( _viewshedShadowmap, ivec2(base.x + 1, base.y + 1));
float s01 = viewshedReadShadowMapDepth( _viewshedShadowmap, ivec2(base.x,     base.y + 1));
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float viewshedTextureAtlasLookup(sampler2D _viewshedShadowmap, vec2 uv, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(uv) * atlasScale + atlasRegion.xy;
return viewshedFilterShadow(_viewshedShadowmap, uvAtlas);
}
float getDepthFromShadowMap(vec2 uv, int face) {
int index = 4 * face;
float umin = viewshedAtlasRegions[index];
float umax = viewshedAtlasRegions[index + 1];
float vmin = viewshedAtlasRegions[index + 2];
float vmax = viewshedAtlasRegions[index + 3];
vec4 atlasRegion = vec4(umin, vmin, umax, vmax);
return viewshedTextureAtlasLookup(viewshedShadowMap, uv, atlasRegion);
}
struct ViewshedPoint {
int face;
vec2 uv;
bool isWithin;
float orthographicDepth;
};
mat3 rotationMatrix(vec3 axis, float angle)
{
float s = sin(angle);
float c = cos(angle);
float oc = 1.0 - c;
return mat3(
oc * axis.xxz * axis.xyx + vec3(c, axis.zy) * vec3(1., -s, s),
oc * axis.xyy * axis.yyz + vec3(axis.z, c, axis.x) * vec3(s, 1., -s),
oc * axis.zyz * axis.xzz + vec3(axis.yx, c) * vec3(-s, s, 1.)
);
}
float distanceToPlane(vec3 position, vec3 normal) {
return dot(position, normal);
}
bool outsideViewshed(float distance) {
return distance > -viewshedVolumeOffset;
}
bool isWithinViewshed(vec3 position) {
float positionLength = length(position - viewshedObserverOffset);
float farSphereDistance = positionLength - viewshedNearFar[1];
if (outsideViewshed(farSphereDistance)) { return false; }
float nearSphereDistance = viewshedNearFar[0] - positionLength;
if (outsideViewshed(nearSphereDistance)) { return false; }
vec3 westVector = normalize(cross(viewshedUpVector, viewshedTargetVector));
bool leftOfTarget = distanceToPlane(position, westVector) > 0.0;
if (viewshedFOVs[0] < TWO_PI) {
float horAngle = viewshedFOVs[0] / 2.0;
horAngle = leftOfTarget ? horAngle : -horAngle;
vec3 sideVector = viewshedTargetVector * rotationMatrix(viewshedUpVector, horAngle);
bool inFront = distanceToPlane(position, sideVector) > 0.0;
if (inFront) {
vec3 sideNormal = cross(viewshedUpVector, sideVector) * (leftOfTarget ? 1. : -1.);
float sideDistance = distanceToPlane(position, normalize(sideNormal));
if (outsideViewshed(sideDistance)) { return false; }
} else if (viewshedFOVs[0] < PI) { return false; }
}
if (viewshedFOVs[1] < PI) {
float t = dot(viewshedUpVector, position);
vec3 nProjVector = normalize(position - t * viewshedUpVector);
float heading = acos(clamp(dot(normalize(viewshedTargetVector), nProjVector), -1.0, 1.0));
heading = leftOfTarget ? heading : -heading;
bool aboveTarget = distanceToPlane(position, viewshedUpVector) > 0.0;
float verFOV = viewshedFOVs[1] / 2.0;
verFOV = aboveTarget ? -verFOV : verFOV;
mat3 rotateByHeading = rotationMatrix(viewshedUpVector, heading);
vec3 sideVector = viewshedTargetVector * rotationMatrix(westVector, verFOV) * rotateByHeading;
vec3 leftVector = westVector * rotateByHeading;
vec3 sideNormal = cross(sideVector, leftVector) * (aboveTarget ? 1. : -1.);
float sideDistance = distanceToPlane(position, normalize(sideNormal));
if (outsideViewshed(sideDistance)) { return false; }
}
return true;
}
bool getViewshedPoint(vec4 localPosition, out ViewshedPoint point) {
for(int i=0; i < viewshedNumFaces; i++) {
vec2 viewshedUv = getViewshedUv(localPosition, i);
if (viewshedUv.x > 0. && viewshedUv.x < 1. && viewshedUv.y > 0. && viewshedUv.y < 1.) {
float orthoDepth = getOrthographicDepthToViewshed(localPosition, i);
if (orthoDepth >= 0.) {
bool isWithin = isWithinViewshed(localPosition.xyz);
point = ViewshedPoint(i, viewshedUv, isWithin, orthoDepth);
return true;
}
}
}
return false;
}
float normalCosAngle(float linearDepth, vec3 localPosition) {
vec4 normal4 = texture(normalMap, uv);
vec3 normalN = normalize(normal4.xyz * 2.0 - 1.0);
vec3 normal =  normalize((inverseViewNormalMatrix * vec4(normalN, 1.0)).xyz);
vec3 viewingDir = normalize(localPosition);
return dot(normal, viewingDir);
}`),t.main.add(l`float depth = depthFromTexture(depthTexture, uv);
if (depth >= 1.0 || depth <= 0.0) {
return;
}
float linearDepth = linearizeDepth(depth);
vec4 localPosition = reconstructLocalPosition(gl_FragCoord.xy, linearDepth);
ViewshedPoint point;
bool foundFace = getViewshedPoint(localPosition, point);
if (!foundFace || !point.isWithin) {
return;
}
float viewshedDepth = getDepthFromShadowMap(point.uv, point.face);
float distance = point.orthographicDepth;
bool visible = distance < viewshedDepth;
fragColor = visible ? visibleColor : occludedColor;
float cosAngle = normalCosAngle(linearDepth, localPosition.xyz);
float threshold = -0.01;
if (cosAngle > threshold) {
fragColor = occludedColor;
}`),e}var K,q,J;function Y(){return(Y=e((()=>{s(),i(),m(),P(),W(),A(),C(),b(),E(),u(),f(),O(),V(),M(),x(),v(),K=class extends U{constructor(){super(...arguments),this.shadowMap={depthTexture:null,nearFar:[1,100],numActiveFaces:1,atlasRegions:[[0,0,1,1]]},this.targetVector=[1,0,0],this.upVector=[0,0,1],this.fovs=[45,45],this.headingAndTilt=[0,0],this.observerOffset=[0,0,0],this.projectionMatrices=r.flat(),this.viewMatrices=r.flat(),this.volumeOffset=0}},q=a(),J=Object.freeze(Object.defineProperty({__proto__:null,ViewshedPassParameters:K,build:G},Symbol.toStringTag,{value:`Module`}))})))()}export{W as a,K as i,G as n,Y as r,J as t};