import{n as e}from"./rolldown-runtime.js";import{O as t,x as n}from"./vec2.js";import{l as r,o as i}from"./vec3f64.js";import{o as a,s as o}from"./vec2f64.js";import{n as s,r as c,t as l}from"./glsl.js";import{n as u,t as d}from"./Texture2DUintPassUniform.js";import{n as f,t as p}from"./ShaderBuilder.js";import{n as m,t as h}from"./FloatPassUniform.js";import{a as g,s as _}from"./Slice.glsl.js";import{n as v,t as y}from"./Float3PassUniform.js";import{n as b,t as x}from"./Matrix4BindUniform.js";import{n as S,t as C}from"./PositionOutsideClipSpace.js";import{n as w,t as T}from"./Float2BindUniform.js";import{a as E,c as D,d as O,i as k,l as A,n as j,o as M,r as N,s as P,t as F,u as I}from"./QuaternionToRotationMatrix.glsl.js";function L(e){let{clippingEnabled:n,hasSlicePlane:r}=e,i=new f,{fragment:a,varyings:o,vertex:l}=i;o.add(`conic`,`vec3`),o.add(`gaussianLogAlphaCutoff`,`float`),o.add(`offsetFromCenter`,`vec2`),l.uniforms.add(new d(`splatOrderTexture`,e=>e.splatOrder),new d(`splatAtlasTexture`,e=>e.splatAtlas),new m(`minSplatRadius`,e=>e.minSplatRadius),new T(`inverseScreenSize`,({camera:e})=>t(z,1/e.fullWidth,1/e.fullHeight)),new b(`proj`,e=>e.camera.projectionMatrix),new b(`view`,e=>e.camera.viewMatrix),new T(`nearFar`,e=>e.camera.nearFar)),n&&l.uniforms.add(new y(`clipMin`,e=>e.clipMinCameraRelative),new y(`clipMax`,e=>e.clipMaxCameraRelative)),l.include(E),l.include(M),l.include(j),l.include(I),l.include(D),l.include(_,e),l.code.add(c`float safeClipW(float clipW) {
return abs(clipW) < 1e-7 ? (clipW < 0.0 ? -1e-7 : 1e-7) : clipW;
}`),l.code.add(c`vec3 computeProjectivePixelGradient(
vec3 clipGradient,
vec3 clipWGradient,
float clipValue,
float safeW,
float invWSquared,
float halfScreenSize
) {
return (clipGradient * safeW - clipValue * clipWGradient) * invWSquared * halfScreenSize;
}`),l.code.add(c`vec3 multiplyCovariance3D(float[6] covariance3D, vec3 value) {
return vec3(
covariance3D[0] * value.x + covariance3D[1] * value.y + covariance3D[2] * value.z,
covariance3D[1] * value.x + covariance3D[3] * value.y + covariance3D[4] * value.z,
covariance3D[2] * value.x + covariance3D[4] * value.y + covariance3D[5] * value.z
);
}`),l.code.add(c`vec3 computeProjectiveCovariance2D(vec3 pixelXGradient, vec3 pixelYGradient, float[6] covariance3D, mat4 view) {
mat3 worldToView = transpose(mat3(view));
vec3 axisX = worldToView * pixelXGradient;
vec3 axisY = worldToView * pixelYGradient;
vec3 covarianceAxisX = multiplyCovariance3D(covariance3D, axisX);
vec3 covarianceAxisY = multiplyCovariance3D(covariance3D, axisY);
const float regularization = 0.3;
float covarianceXX = dot(axisX, covarianceAxisX) + regularization;
float covarianceXY = dot(axisX, covarianceAxisY);
float covarianceYY = dot(axisY, covarianceAxisY) + regularization;
return vec3(covarianceXX, covarianceXY, covarianceYY);
}`),l.code.add(c`float biasDepth(float linearDepth) {
const float bias = 80.0 * .000015259;
return min(linearDepth + bias, 1.0);
}`);let u=.25,p=Math.log(u);return l.main.add(`\n    uint gaussianIndex = fetchOrderedGaussianIndex(uint(gl_InstanceID));\n    uvec4 packedGaussian = fetchPackedGaussian(gaussianIndex);\n\n    float opacity = unpackOpacity(packedGaussian);\n\n    gl_Position = ${S};\n\n    if (opacity < ${u}) {\n      return;\n    }\n\n    vec3 cameraRelativePosition = fetchGaussianCameraRelativePosition(gaussianIndex, packedGaussian);\n\n    ${s(n,c`if (cameraRelativePosition.x < clipMin.x || cameraRelativePosition.y < clipMin.y || cameraRelativePosition.z < clipMin.z ||
cameraRelativePosition.x > clipMax.x || cameraRelativePosition.y > clipMax.y || cameraRelativePosition.z > clipMax.z) {
return;
}`)}\n\n    ${s(r,c`if (rejectBySlice(cameraRelativePosition)) {
return;
}`)}\n\n    vec4 viewPos = vec4(mat3(view) * cameraRelativePosition, 1.0);\n\n    if (viewPos.z > -nearFar.x || viewPos.z < -nearFar.y) {\n      return;\n    }\n\n    vec3 covarianceA;\n    vec3 covarianceB;\n    computePackedGaussianCovariance3D(packedGaussian, covarianceA, covarianceB);\n\n    float covariance3D[6] = float[6](covarianceA.x, covarianceA.y, covarianceA.z, covarianceB.x, covarianceB.y, covarianceB.z);\n\n    vec4 projPos = proj * viewPos;\n    float safeW = safeClipW(projPos.w);\n    float invWSquared = 1.0 / (safeW * safeW);\n    vec2 halfScreenSize = 0.5 / inverseScreenSize;\n    float maxShadowSplatRadius = max(halfScreenSize.x, halfScreenSize.y);\n\n    // Projection matrix columns are the clip-space derivatives with respect to view-space xyz.\n    vec3 clipWGradient = vec3(proj[0][3], proj[1][3], proj[2][3]);\n    vec3 pixelXGradient = computeProjectivePixelGradient(\n      vec3(proj[0][0], proj[1][0], proj[2][0]),\n      clipWGradient,\n      projPos.x,\n      safeW,\n      invWSquared,\n      halfScreenSize.x\n    );\n    vec3 pixelYGradient = computeProjectivePixelGradient(\n      vec3(proj[0][1], proj[1][1], proj[2][1]),\n      clipWGradient,\n      projPos.y,\n      safeW,\n      invWSquared,\n      halfScreenSize.y\n    );\n    vec3 covariance2D = computeProjectiveCovariance2D(pixelXGradient, pixelYGradient, covariance3D, view);\n\n    float determinant = computeGaussianCovarianceDeterminant(covariance2D);\n    if (determinant <= 0.0) {\n      return;\n    }\n\n    vec2 eigenvalues = computeGaussianCovarianceEigenvalues(covariance2D);\n\n    gaussianLogAlphaCutoff = ${p} - log(opacity);\n    float gaussianEllipseThreshold = computeGaussianEllipseThreshold(gaussianLogAlphaCutoff);\n    vec2 axisLengths = computeGaussianAxisLengths(eigenvalues, gaussianEllipseThreshold);\n    float maxRadius = max(axisLengths.x, axisLengths.y);\n\n    // Avoid invalid/extremely large footprints.\n    if (maxRadius < 0.0 || maxRadius > maxShadowSplatRadius) {\n      return;\n    }\n\n    if (rejectGaussianByMinimumRadius(maxRadius, opacity, minSplatRadius)) {\n      return;\n    }\n\n    vec3 ndcPos = projPos.xyz / safeW;\n    vec2 clipSpacePixelScale = 2.0 * inverseScreenSize;\n\n    if (rejectGaussianByScreenBounds(ndcPos.xy, maxRadius, clipSpacePixelScale)) {\n      return;\n    }\n\n    offsetFromCenter = computeGaussianQuadOffset(covariance2D, eigenvalues, axisLengths, gl_VertexID);\n    conic = computeGaussianConic(covariance2D, determinant);\n    float linearDepth = (-viewPos.z - nearFar.x) / (nearFar.y - nearFar.x);\n    float biasedDepth = biasDepth(linearDepth);\n\n    vec2 clipPos = ndcPos.xy + offsetFromCenter * clipSpacePixelScale - inverseScreenSize;\n    gl_Position = vec4(clipPos, biasedDepth * 2.0 - 1.0, 1.0);\n  `),a.include(D),a.main.add(c`float gaussianExponent = evaluateGaussianExponent(conic, offsetFromCenter);
if (gaussianExponent > 0.0 || gaussianExponent < gaussianLogAlphaCutoff) {
discard;
}`),i}var R,z,B;function V(){return(V=e((()=>{n(),a(),i(),g(),C(),O(),A(),P(),N(),F(),w(),v(),h(),l(),x(),u(),p(),R=class extends k{constructor(){super(...arguments),this.clipMinCameraRelative=r(),this.clipMaxCameraRelative=r(),this.minSplatRadius=-1}},z=o(),B=Object.freeze(Object.defineProperty({__proto__:null,GaussianSplatShadowPassParameters:R,build:L},Symbol.toStringTag,{value:`Module`}))})))()}export{R as i,V as n,B as r,L as t};