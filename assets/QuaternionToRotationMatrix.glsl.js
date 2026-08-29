import{n as e}from"./rolldown-runtime.js";import{l as t,o as n}from"./vec3f64.js";import{r,t as i}from"./glsl.js";import{r as a,t as o}from"./NoParameters.js";import{n as s,t as c}from"./Float3PassUniform.js";var l,u,d,f,p,m,h;function g(){return(g=e((()=>{l=4096,u=1023,d=1024,l*64/d,f=d*4,p=u*4,m=l*64,h=class{constructor(e=256){this._pageCount=e;let t=Math.ceil(e/32);this._bitset=new Uint32Array(t)}get pageCount(){return this._pageCount}isAllocated(e){let t=e/32|0,n=e%32;return!!(this._bitset[t]&1<<n)}allocate(e){let t=e/32|0,n=e%32;this._bitset[t]|=1<<n}free(e){let t=e/32|0,n=e%32;this._bitset[t]&=~(1<<n)}findFirstFreePage(){for(let e=0;e<this._bitset.length;e++)if(this._bitset[e]!==4294967295)for(let t=0;t<32;t++){let n=32*e+t;if(n>=this._pageCount)break;if(!(this._bitset[e]&1<<t))return n}return null}resize(e){this._pageCount=e;let t=Math.ceil(e/32),n=this._bitset.length;if(t!==n){let e=new Uint32Array(t),r=Math.min(n,t);e.set(this._bitset.subarray(0,r)),this._bitset=e}this._clearExcessBits(this._bitset,e)}_clearExcessBits(e,t){let n=Math.floor((t-1)/32),r=(t-1)%32;if(t>0&&r<31){let t=(1<<r+1)-1;e[n]&=t}n+1<e.length&&e.fill(0,n+1)}}})))()}function _(e){e.code.add(r`void computeCovariance3D(in mat3 rotation, in vec3 scale, out vec3 covarianceA, out vec3 covarianceB) {
mat3 scaleMatrix = mat3(
vec3(scale.x, 0.0, 0.0),
vec3(0.0, scale.y, 0.0),
vec3(0.0, 0.0, scale.z)
);
mat3 scaledRotation = scaleMatrix * rotation;
mat3 covariance3D = transpose(scaledRotation) * scaledRotation;
covarianceA = vec3(covariance3D[0][0], covariance3D[0][1], covariance3D[0][2]);
covarianceB = vec3(covariance3D[1][1], covariance3D[1][2], covariance3D[2][2]);
}
vec3 computeGaussianCovariance2D(vec3 viewSpaceCenter, float focalLength, vec2 tanFov, float[6] cov3D, mat4 view) {
vec4 viewSpacePoint = vec4(viewSpaceCenter, 1);
vec2 clampLimit = 1.3 * tanFov;
vec2 normalized = viewSpacePoint.xy / viewSpacePoint.z;
viewSpacePoint.xy = clamp(normalized, -clampLimit, clampLimit) * viewSpacePoint.z;
float invZ = 1.0 / viewSpacePoint.z;
float invZSquared = invZ * invZ;
mat3 projectionJacobian = mat3(
focalLength * invZ,  0.0,                   -(focalLength * viewSpacePoint.x) * invZSquared,
0.0,                 focalLength * invZ,    -(focalLength * viewSpacePoint.y) * invZSquared,
0.0,                 0.0,                   0.0
);
mat3 worldToView = transpose(mat3(view));
mat3 covarianceProjection = worldToView * projectionJacobian;
mat3 covariance3D = mat3(
cov3D[0], cov3D[1], cov3D[2],
cov3D[1], cov3D[3], cov3D[4],
cov3D[2], cov3D[4], cov3D[5]
);
mat3 covariance2D = transpose(covarianceProjection) * transpose(covariance3D) * covarianceProjection;
const float regularization = 0.3;
covariance2D[0][0] += regularization;
covariance2D[1][1] += regularization;
return vec3(covariance2D[0][0], covariance2D[0][1], covariance2D[1][1]);
}
void computePackedGaussianCovariance3D(uvec4 packedGaussian, out vec3 covarianceA, out vec3 covarianceB) {
vec3 scale = unpackScale(packedGaussian);
vec4 quaternion = unpackQuaternion(packedGaussian);
mat3 rotation = quaternionToRotationMatrix(quaternion);
computeCovariance3D(rotation, scale.xyz, covarianceA, covarianceB);
}`)}function v(){return(v=e((()=>{i()})))()}function y(e){e.code.add(r`float computeGaussianCovarianceDeterminant(vec3 covariance2D) {
return covariance2D.x * covariance2D.z - covariance2D.y * covariance2D.y;
}
vec2 computeGaussianCovarianceEigenvalues(vec3 covariance2D) {
float mid = 0.5 * (covariance2D.x + covariance2D.z);
float radius = length(vec2((covariance2D.x - covariance2D.z) * 0.5, covariance2D.y));
return vec2(mid + radius, mid - radius);
}
vec2 computeGaussianAxisLengths(vec2 eigenvalues, float gaussianEllipseThreshold) {
return ceil(sqrt(eigenvalues * gaussianEllipseThreshold));
}
float computeGaussianEllipseThreshold(float gaussianLogAlphaCutoff) {
return max(0.0, -2.0 * gaussianLogAlphaCutoff);
}
bool rejectGaussianByMinimumRadius(float maxRadius, float opacity, float minSplatRadius) {
return minSplatRadius > 0.0 && maxRadius * opacity < minSplatRadius;
}
bool rejectGaussianByScreenBounds(vec2 ndcPosition, float maxRadius, vec2 clipSpacePixelScale) {
vec2 radiusNDC = maxRadius * clipSpacePixelScale;
return any(greaterThan(abs(ndcPosition) - radiusNDC, vec2(1.0)));
}
vec2 computeGaussianMajorAxisDirection(vec3 covariance2D, float majorEigenvalue) {
return normalize(vec2(covariance2D.y, majorEigenvalue - covariance2D.x));
}
vec2 computeGaussianUnitQuadCorner(int vertexID) {
return vec2((vertexID << 1) & 2, vertexID & 2) - 1.0;
}
vec2 computeGaussianQuadOffset(vec3 covariance2D, vec2 eigenvalues, vec2 axisLengths, int vertexID) {
vec2 majorAxisDirection = computeGaussianMajorAxisDirection(covariance2D, eigenvalues.x);
vec2 majorAxis = axisLengths.x * majorAxisDirection;
vec2 minorAxis = axisLengths.y * vec2(majorAxisDirection.y, -majorAxisDirection.x);
vec2 corner = computeGaussianUnitQuadCorner(vertexID);
return corner.x * majorAxis + corner.y * minorAxis;
}
vec3 computeGaussianConic(vec3 covariance2D, float determinant) {
return vec3(covariance2D.z, -covariance2D.y, covariance2D.x) * (1.0 / determinant);
}
float evaluateGaussianExponent(vec3 conic, vec2 offsetFromCenter) {
float x = offsetFromCenter.x;
float y = offsetFromCenter.y;
return -0.5 * dot(conic, vec3(x * x, 2.0 * x * y, y * y));
}`)}function b(){return(b=e((()=>{i()})))()}function x(e){e.code.add(r`
    uint fetchOrderedGaussianIndex(uint instanceID) {
      uint orderTextureWidth = uint(textureSize(splatOrderTexture, 0).x);
      uint x = instanceID % orderTextureWidth;
      uint y = instanceID / orderTextureWidth;

      return texelFetch(splatOrderTexture, ivec2(x, y), 0).r;
    }

    uvec4 fetchPackedGaussian(uint gaussianIndex) {
      uint gaussianIndexX = gaussianIndex & ${S}u;
      uint gaussianIndexY = gaussianIndex >> ${C}u;

      return texelFetch(splatAtlasTexture, ivec2(gaussianIndexX, gaussianIndexY), 0);
    }

    uvec4 fetchPackedGaussianHeader(uint gaussianIndex) {
      uint headerIndex = gaussianIndex | ${w}u;
      uint headerIndexX = headerIndex & ${S}u;
      uint headerIndexY = headerIndex >> ${C}u;

      return texelFetch(splatAtlasTexture, ivec2(headerIndexX, headerIndexY), 0);
    }

    vec3 fetchGaussianCameraRelativePosition(uint gaussianIndex, uvec4 packedGaussian) {
      uvec4 packedHeader = fetchPackedGaussianHeader(gaussianIndex);
      vec3 tileOriginRelativePosition = unpackTileOriginRelativePosition(packedGaussian);

      return unpackCameraRelativeGaussianPosition(packedHeader, tileOriginRelativePosition);
    }

    uint fetchGaussianPageIndex(uint gaussianIndex) {
      return gaussianIndex >> ${T}u;
    }
  `)}var S,C,w,T;function E(){return(E=e((()=>{g(),i(),S=``+(l-1),C=`${Math.log2(l)}`,w=``+(d-1),T=`${Math.log2(d)}`})))()}function D(e){e.code.add(r`float unpackOpacity(uvec4 packedGaussian) {
return float((packedGaussian.w >> 24u) & 0xffu) / 255.0;
}
vec4 unpackColor(uvec4 packedGaussian) {
vec4 color;
color.r = float((packedGaussian.w >> 1u) & 0xfeu);
color.g = float((packedGaussian.w >> 9u) & 0xffu);
color.b = float((packedGaussian.w >> 16u) & 0xfeu);
color.a = float((packedGaussian.w >> 24u) & 0xffu);
return color / 255.0;
}`),e.code.add(r`vec3 unpackScale(uvec4 packedGaussian) {
uint sx = (packedGaussian.z >> 10u) & 0xffu;
uint sy = (packedGaussian.z >> 18u) & 0xffu;
uint szLow = (packedGaussian.z >> 26u) & 0x3fu;
uint szHigh = packedGaussian.a & 0x3u;
uint sz = szLow | (szHigh << 6u);
return exp(vec3(sx, sy, sz) / 16.0 - 10.0);
}`),e.code.add(r`const uint MASK_9_BITS = 0x1FFu;
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
}`),e.code.add(r`vec3 unpackTileOriginRelativePosition(uvec4 packedGaussian) {
uint packedPositionLow = packedGaussian.y;
uint packedPositionHigh = packedGaussian.z;
uint x = packedPositionLow & 0x3FFFu;
uint y = (packedPositionLow >> 14u) & 0x3FFFu;
uint zLow = (packedPositionLow >> 28u) & 0xFu;
uint zHigh = packedPositionHigh & 0x3FFu;
uint z = zLow | (zHigh << 4u);
return vec3(float(x), float(y), float(z));
}`),e.uniforms.add(new c(`tileCameraPosition`,e=>e.tileCameraPosition),new c(`cameraDelta`,e=>e.cameraDelta)).code.add(r`vec3 unpackCameraRelativeGaussianPosition(uvec4 packedHeader, highp vec3 position) {
vec3 tileOrigin = uintBitsToFloat(packedHeader.xyz);
float invPosScale = 1.0 / exp2(float(packedHeader.w & 0xfu));
vec3 delta = tileOrigin.xyz - tileCameraPosition;
vec3 cameraRelativePosition = position * invPosScale + delta * 2.048 - cameraDelta;
return cameraRelativePosition;
}`)}var O;function k(){return(k=e((()=>{n(),s(),i(),a(),O=class extends o{constructor(){super(...arguments),this.tileCameraPosition=t(),this.cameraDelta=t()}}})))()}function A(e){e.code.add(r`mat3 quaternionToRotationMatrix(vec4 q) {
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
}`)}function j(){return(j=e((()=>{i()})))()}export{g as _,D as a,y as c,v as d,m as f,d as g,p as h,O as i,b as l,u as m,A as n,x as o,h as p,k as r,E as s,j as t,_ as u,f as v,l as y};