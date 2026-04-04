import{n as e}from"./chunk.js";import{i as t,l as n}from"./tslib.es6.js";import{b as r,h as i}from"./vec2.js";import{l as a,o as ee}from"./vec3f64.js";import{a as o,r as te}from"./vec2f64.js";import{n as s,r as c,t as l}from"./glsl.js";import{n as u,t as d}from"./Float3PassUniform.js";import{n as f,t as p}from"./FloatPassUniform.js";import{n as m,t as h}from"./ShaderBuilder.js";import{n as g,t as _}from"./Texture2DUintPassUniform.js";import{r as v,t as y}from"./NoParameters.js";import{n as b,r as ne,t as re}from"./ShaderTechniqueConfiguration.js";import{n as x,t as S}from"./Float3BindUniform.js";import{n as C,t as w}from"./Matrix4BindUniform.js";import{n as T,t as E}from"./PositionOutsideClipSpace.js";import{n as D,t as O}from"./Float2BindUniform.js";import{n as k,t as A}from"./TerrainDepthTest.glsl.js";import{n as j,t as M}from"./Float2PassUniform.js";import{i as N,n as P,r as F,t as I}from"./EvaluateSceneLighting.glsl.js";import{n as ie,t as L}from"./NormalUtils.glsl.js";import{n as R,t as z}from"./RgbNormalizedDepthEncoding.glsl.js";function B(e){e.code.add(c`void computeCovariance3D(in mat3 rotation, in vec3 scale, out vec3 covarianceA, out vec3 covarianceB) {
mat3 scaleMatrix = mat3(
vec3(scale.x, 0.0, 0.0),
vec3(0.0, scale.y, 0.0),
vec3(0.0, 0.0, scale.z)
);
mat3 M = scaleMatrix * rotation;
mat3 covariance3D = transpose(M) * M;
covarianceA = vec3(covariance3D[0][0], covariance3D[0][1], covariance3D[0][2]);
covarianceB = vec3(covariance3D[1][1], covariance3D[1][2], covariance3D[2][2]);
}
vec3 computeCovariance2D(vec3 center, float focalLength, vec2 tanFov, float[6] cov3D, mat4 view) {
vec4 viewSpacePoint = vec4(center, 1);
vec2 max = 1.3 * tanFov;
vec2 normalized = viewSpacePoint.xy / viewSpacePoint.z;
viewSpacePoint.xy = clamp(normalized, -max, max) * viewSpacePoint.z;
float invZ = 1.0 / viewSpacePoint.z;
float invZSquared = invZ * invZ;
mat3 projectionJacobian = mat3(
focalLength * invZ,  0.0,                   -(focalLength * viewSpacePoint.x) * invZSquared,
0.0,                 focalLength * invZ,    -(focalLength * viewSpacePoint.y) * invZSquared,
0.0,                 0.0,                   0.0
);
mat3 worldToView = transpose(mat3(view));
mat3 T = worldToView * projectionJacobian;
mat3 covariance3D = mat3(
cov3D[0], cov3D[1], cov3D[2],
cov3D[1], cov3D[3], cov3D[4],
cov3D[2], cov3D[4], cov3D[5]
);
mat3 covariance2D = transpose(T) * transpose(covariance3D) * T;
const float regularization = 0.3;
covariance2D[0][0] += regularization;
covariance2D[1][1] += regularization;
return vec3(covariance2D[0][0], covariance2D[0][1], covariance2D[1][1]);
}`)}var V=e((()=>{l()}));function H(e){e.code.add(c`vec4 unpackColor(uvec4 packedGaussian) {
vec4 color;
color.r = float((packedGaussian.w >> 1u) & 0xfeu);
color.g = float((packedGaussian.w >> 9u) & 0xffu);
color.b = float((packedGaussian.w >> 16u) & 0xfeu);
color.a = float((packedGaussian.w >> 24u) & 0xffu);
return color / 255.0;
}`),e.code.add(c`vec3 unpackScale(uvec4 packedGaussian) {
uint sx = (packedGaussian.z >> 10u) & 0xffu;
uint sy = (packedGaussian.z >> 18u) & 0xffu;
uint szLow = (packedGaussian.z >> 26u) & 0x3fu;
uint szHigh = packedGaussian.a & 0x3u;
uint sz = szLow | (szHigh << 6u);
return exp(vec3(sx, sy, sz) / 16.0 - 10.0);
}`),e.code.add(c`const uint MASK_9_BITS = 0x1FFu;
const float SQRT_HALF = 0.7071067811865476;
const ivec3 COMPONENT_ORDER[4] = ivec3[4](
ivec3(3, 2, 1),
ivec3(3, 2, 0),
ivec3(3, 1, 0),
ivec3(2, 1, 0)
);
vec4 unpackQuaternion(uvec4 packedGaussian) {
uint packedRotation = packedGaussian.x;
uint largestComponent = packedRotation >> 30u;
vec4 quaternion = vec4(0.0);
float sumSquares = 0.0;
uint bitfield = packedRotation;
for (int j = 0; j < 3; ++j) {
int index = COMPONENT_ORDER[int(largestComponent)][j];
uint magnitude = bitfield & MASK_9_BITS;
uint signBit = (bitfield >> 9u) & 1u;
bitfield = bitfield >> 10u;
float value = SQRT_HALF * float(magnitude) / float(MASK_9_BITS);
quaternion[index] = signBit == 1u ? -value : value;
sumSquares += value * value;
}
quaternion[int(largestComponent)] = sqrt(1.0 - sumSquares);
return quaternion;
}`),e.code.add(c`vec3 unpackTileOriginRelativePosition(uvec4 packedGaussian) {
uint packedPositionLow = packedGaussian.y;
uint packedPositionHigh = packedGaussian.z;
uint x = packedPositionLow & 0x3FFFu;
uint y = (packedPositionLow >> 14u) & 0x3FFFu;
uint zLow = (packedPositionLow >> 28u) & 0xFu;
uint zHigh = packedPositionHigh & 0x3FFu;
uint z = zLow | (zHigh << 4u);
return vec3(float(x), float(y), float(z));
}`),e.uniforms.add(new d(`tileCameraPosition`,e=>e.tileCameraPosition),new d(`cameraDelta`,e=>e.cameraDelta)).code.add(c`vec3 unpackCameraRelativeGaussianPosition(uvec4 packedHeader, highp vec3 position) {
vec3 tileOrigin = uintBitsToFloat(packedHeader.xyz);
float invPosScale = 1.0 / exp2(float(packedHeader.w & 0xfu));
vec3 delta = tileOrigin.xyz - tileCameraPosition;
vec3 cameraRelativePosition = position * invPosScale + delta * 2.048 - cameraDelta;
return cameraRelativePosition;
}`)}var U,W=e((()=>{ee(),u(),l(),v(),U=class extends y{constructor(){super(...arguments),this.tileCameraPosition=a(),this.cameraDelta=a()}}}));function G(e){e.code.add(c`mat3 quaternionToRotationMatrix(vec4 q) {
float x2 = q.x + q.x;
float y2 = q.y + q.y;
float z2 = q.z + q.z;
float xx = x2 * q.x;
float yy = y2 * q.y;
float zz = z2 * q.z;
float xy = x2 * q.y;
float xz = x2 * q.z;
float yz = y2 * q.z;
float wx = x2 * q.w;
float wy = y2 * q.w;
float wz = z2 * q.w;
return mat3(
1.0 - (yy + zz), xy - wz, xz + wy,
xy + wz, 1.0 - (xx + zz), yz - wx,
xz - wy, yz + wx, 1.0 - (xx + yy)
);
}`)}var K=e((()=>{l()}));function q(e){switch(e){case 2:return .005;case 0:return .05;default:return .01}}var J,Y=e((()=>{n(),ne(),J=class extends re{constructor(e){super(),this.spherical=e,this.alphaCutoff=1,this.fadingEnabled=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.occlusionPass=!1,this.receiveAmbientOcclusion=!1,this.pbrMode=0,this.useCustomDTRExponentForWater=!1,this.useFillLights=!1,this.hasColorTexture=!0}},t([b({count:3})],J.prototype,`alphaCutoff`,void 0),t([b()],J.prototype,`fadingEnabled`,void 0),t([b()],J.prototype,`terrainDepthTest`,void 0),t([b()],J.prototype,`cullAboveTerrain`,void 0),t([b()],J.prototype,`receiveAmbientOcclusion`,void 0)}));function X(e){let t=new m;t.varyings.add(`vColor`,`vec4`),t.varyings.add(`conicOpacity`,`vec4`),t.varyings.add(`offsetFromCenter`,`vec2`),t.vertex.uniforms.add(new _(`splatOrderTexture`,e=>e.splatOrder),new _(`splatFadingTexture`,e=>e.splatFading),new _(`splatAtlasTexture`,e=>e.splatAtlas),new f(`focalLength`,e=>e.focalLength),new f(`minSplatRadius`,e=>e.minSplatRadius),new M(`tanFov`,e=>e.tanFov),new O(`screenSize`,({camera:e})=>r(Q,e.fullWidth,e.fullHeight)),new C(`proj`,e=>e.camera.projectionMatrix),new C(`view`,e=>e.camera.viewMatrix),new O(`nearFar`,e=>e.camera.nearFar),new S(`cameraPosition`,e=>e.camera.eye)),t.vertex.include(H),t.vertex.include(G),t.vertex.include(B),t.vertex.include(N,e),t.include(ie,e),F(t.vertex),I(t.vertex),t.include(A,e),t.outputs.add(`fragColor`,`vec4`,0),t.outputs.add(`fragDepthColor`,`vec4`,1);let n=q(e.alphaCutoff),i=Math.log(n),a=-2*i;return t.vertex.code.add(c`vec2 ndcToPixel(vec2 ndcCoord, vec2 screenSize) {
return ((ndcCoord + 1.0) * screenSize - 1.0) * 0.5;
}`),t.vertex.main.add(`\n    uint instanceID = uint(gl_InstanceID);\n\n    // Transform the instanceID into 2D coordinates\n    uint orderTextureWidth = uint(textureSize(splatOrderTexture, 0).x);\n    uint x = instanceID % orderTextureWidth;\n    uint y = instanceID / orderTextureWidth;\n\n    // Fetch the index of the remaining frontmost Gaussian\n    uint gaussianIndex = texelFetch(splatOrderTexture, ivec2(x, y), 0).r;\n\n    uint splatAtlasWidth = uint(textureSize(splatAtlasTexture, 0).x);\n\n    // Fetch the packed Gaussian according to the index\n    uint gaussianIndexX = gaussianIndex % splatAtlasWidth;\n    uint gaussianIndexY = gaussianIndex / splatAtlasWidth;\n    uvec4 packedGaussian = texelFetch(splatAtlasTexture, ivec2(gaussianIndexX, gaussianIndexY), 0);\n\n    // Fetch the header associated with the packed Gaussian (contains tile origin and number of fractional bits)\n    uint pageNum = gaussianIndex / 1024u;\n    uint headerIndex = (pageNum + 1u) * 1024u - 1u;\n    uint headerIndexX = headerIndex % splatAtlasWidth;\n    uint headerIndexY = headerIndex / splatAtlasWidth;\n    uvec4 packedHeader = texelFetch(splatAtlasTexture, ivec2(headerIndexX, headerIndexY), 0);\n\n    // Unpack the Gaussian\n    vColor = unpackColor(packedGaussian);\n\n    // Handle fading\n    ${s(e.fadingEnabled,`
      uint fadingTextureWidth = uint(textureSize(splatFadingTexture, 0).x);
      uint fadeX = pageNum  % fadingTextureWidth;
      uint fadeY = pageNum  / fadingTextureWidth;
      uint opacityModifierByte = texelFetch(splatFadingTexture, ivec2(fadeX , fadeY), 0).r;
      float opacityModifier = float(opacityModifierByte) / 255.0;
      vColor.a *= opacityModifier;
      `)}\n\n    // set default position outside clipspace for early returns\n    gl_Position = ${T};\n\n    if(vColor.a < ${n}) {\n      return;\n    }\n\n    vec3 scale = unpackScale(packedGaussian);\n    vec4 quaternion = unpackQuaternion(packedGaussian);\n    mat3 rotation = quaternionToRotationMatrix(quaternion);\n    vec3 tileOriginRelativePosition = unpackTileOriginRelativePosition(packedGaussian);\n\n    vec3 cameraRelativePosition = unpackCameraRelativeGaussianPosition(packedHeader, tileOriginRelativePosition);\n\n    vec4 viewPos = vec4(mat3(view) * cameraRelativePosition, 1);\n\n    if (viewPos.z > -nearFar.x || viewPos.z < -nearFar.y) {\n      return;\n    }\n\n    forwardViewPosDepth(viewPos.xyz);\n\n    // Handle environment (scene lighting)\n    vec3 groundNormal = ${e.spherical?c`normalize(cameraRelativePosition + cameraPosition)`:c`vec3(0.0, 0.0, 1.0)`};\n    float groundLightAlignment = dot(groundNormal, mainLightDirection);\n    float additionalAmbientScale = additionalDirectedAmbientLight(groundLightAlignment);\n    vec3 additionalLight = mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;\n    vColor.rgb = evaluateSceneLighting(groundNormal, vColor.rgb, 0.0, 0.0, mainLightIntensity);\n\n    vec3 covarianceA;\n    vec3 covarianceB;\n    computeCovariance3D(rotation, scale.xyz, covarianceA, covarianceB);\n\n    float covariance3D[6] = float[6](covarianceA.x, covarianceA.y, covarianceA.z, covarianceB.x, covarianceB.y, covarianceB.z);\n\n    vec3 covariance2D = computeCovariance2D(viewPos.xyz, focalLength, tanFov, covariance3D, view);\n\n    // Compute the Gaussians extent in screen space by finding the eigenvalues lambda1 and lambda2\n    // of the 2D covariance matrix\n    float mid = 0.5 * (covariance2D.x + covariance2D.z);\n    float radius = length(vec2((covariance2D.x - covariance2D.z) * 0.5, covariance2D.y));\n    float lambda1 = mid + radius;\n    float lambda2 = mid - radius;\n\n    // Compute the extents along the principal axes\n    float l1 = ceil(sqrt(lambda1 * ${a}));\n    float l2 = ceil(sqrt(lambda2 * ${a}));\n\n    float maxRadius = max(l1, l2);\n\n    // Ignore gaussians with very small contribution, with tolerance based on the quality profile\n    if(minSplatRadius > 0.0) {\n      float effectiveSize = maxRadius * vColor.a;\n      if(effectiveSize < minSplatRadius) {\n        return;\n      }\n    }\n\n    vec4 projPos = proj * viewPos;\n    float invW = 1. / (projPos.w + 1e-7);\n    vec3 ndcPos = projPos.xyz * invW;\n\n    // Screen space frustum culling\n    vec2 radiusNDC = maxRadius * 2.0 / screenSize;\n\n    if (any(greaterThan(abs(ndcPos.xy) - radiusNDC, vec2(1.0)))) {\n        return;\n    }\n\n    // Compute the principal diagonal direction (eigenvector for lambda1)\n    vec2 diagonalVector = normalize(vec2(covariance2D.y, lambda1 - covariance2D.x));\n\n    vec2 majorAxis = l1 * diagonalVector;\n    vec2 minorAxis = l2 * vec2(diagonalVector.y, -diagonalVector.x);\n\n    vec2 gaussianCenterScreenPos = ndcToPixel(ndcPos.xy, screenSize);\n\n    // This maps vertex IDs 0, 1, 2, 3 to (-1,-1), (1,-1), (-1,1), (1,1)\n    vec2 corner = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2) - 1.0;\n    offsetFromCenter = corner.x * majorAxis + corner.y * minorAxis;\n\n    // Invert covariance (EWA algorithm)\n    float determinant = (covariance2D.x * covariance2D.z - covariance2D.y * covariance2D.y);\n    if (determinant <= 0.) {\n      return;\n    }\n    float invDeterminant = 1. / determinant;\n\n    // We use a conic function to derive the opacity\n    vec3 conic = vec3(covariance2D.z, -covariance2D.y, covariance2D.x) * invDeterminant;\n    conicOpacity = vec4(conic, vColor.a);\n\n    // Convert from screen-space to clip-space using center + offset\n    vec2 clipPos = (gaussianCenterScreenPos + offsetFromCenter) / screenSize * 2. - 1.;\n\n    gl_Position = vec4(clipPos, ndcPos.z, 1.0);\n\n  `),t.fragment.include(R),t.fragment.main.add(`\n    discardByTerrainDepth();\n\n    // Evaluate the 2D elliptical Gaussian exponent using the general conic form: Ax^2+2Bxy+Cy^2\n    float x = offsetFromCenter.x;\n    float y = offsetFromCenter.y;\n    float conic = dot(conicOpacity.xyz, vec3(x * x, 2.0 * x * y, y * y));\n    float gaussianExponent = -0.5 * conic;\n\n    // A positive exponent indicates alpha > 1, this should not happen\n    // We also early check the alphaCutoff (i.e., ln(alphaCutoff)), to avoid unnecessary exp()\n    if (gaussianExponent > 0.0 || gaussianExponent < ${i}) {\n      discard;\n    }\n\n    float gaussianFalloff = exp(gaussianExponent);\n\n    // cap at 0.99 to avoid blending issues, such as seams between overlapping Gaussians\n    float alpha = min(.99f, conicOpacity.w * gaussianFalloff);\n\n    fragColor = vec4(vColor.rgb * alpha, alpha);\n\n    // We simulate first hit based depth using 0.25 as the opacity threshold.\n    // This works because we render in front-to-back order,\n    // i.e. the first hit that counts completelly saturates the alpha channel\n    // and further splats do not contribute.\n    float countHit = step(0.25, alpha);\n    float normalizedDepth = gl_FragCoord.z;\n    fragDepthColor = vec4(encodeNormalizedDepthToRGB(normalizedDepth) * countHit, countHit);\n  `),t}var Z,Q,$,ae=e((()=>{i(),te(),P(),L(),E(),k(),V(),W(),K(),z(),D(),j(),x(),p(),l(),w(),g(),Y(),h(),Z=class extends U{constructor(){super(...arguments),this.focalLength=-1,this.minSplatRadius=-1,this.tanFov=o()}},Q=o(),$=Object.freeze(Object.defineProperty({__proto__:null,GaussianSplatPassParameters:Z,build:X},Symbol.toStringTag,{value:`Module`}))}));export{Y as a,W as c,ae as i,V as l,$ as n,J as o,X as r,K as s,Z as t};