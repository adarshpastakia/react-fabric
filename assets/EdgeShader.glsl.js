import{n as e}from"./rolldown-runtime.js";import{O as t,x as n}from"./vec2.js";import{a as r,o as i,s as a}from"./vec2f64.js";import{n as o,r as s,t as c}from"./glsl.js";import{n as l,t as u}from"./Uniform.js";import{r as ee}from"./NoParameters.js";import{n as d,t as te}from"./ShaderBuilder.js";import{n as f,t as p}from"./FloatPassUniform.js";import{n as m,t as h}from"./Texture2DPassUniform.js";import{a as g,i as _}from"./Slice.glsl.js";import{n as v,t as y}from"./Float3PassUniform.js";import{n as b,t as x}from"./Matrix3PassUniform.js";import{n as S,t as C}from"./FloatBindUniform.js";import{n as w,t as T}from"./Matrix4BindUniform.js";import{n as E,t as D}from"./Float2BindUniform.js";import{n as O,t as ne}from"./Float4BindUniform.js";import{n as re,t as ie}from"./DoublePrecision.glsl.js";import{n as ae,t as oe}from"./NormalAttribute.glsl.js";import{i as se,n as ce,r as le,t as k}from"./Texture2DUintDrawUniform.js";import{o as A,r as j}from"./bufferLayouts.js";function M(e){let t=s`bool isNaN( float val )
{
return ( val < 0.0 || 0.0 < val || val == 0.0 ) ? false : true;
}`;e.code.add(t)}function N(){return(N=e((()=>{c()})))()}function P(e,t){let n=e.vertex;n.include(M),n.constants.add(`depthBias`,`vec2`,F),n.uniforms.add(new D(`inverseViewport`,e=>e.inverseViewport)),t.legacy?(n.uniforms.add(new w(`proj`,e=>e.camera.projectionMatrix)),n.code.add(s`vec2 calculateProjectedBiasXY(vec4 projPos, vec3 globalNormal) {
float offsetXY = depthBias.x;
vec4 projNormal = proj * localView * vec4(globalNormal, 0.0);
return offsetXY * projPos.w * 2.0 * inverseViewport * normalize(projNormal.xyz).xy;
}`)):(n.uniforms.add(new b(`transformNormalViewFromGlobal`,e=>e.transformNormalViewFromGlobal),new w(`transformProjFromView`,e=>e.camera.projectionMatrix)),n.code.add(s`vec2 calculateProjectedBiasXY(vec4 projPos, vec3 globalNormal) {
float offsetXY = depthBias.x;
vec4 projNormal = transformProjFromView * vec4(transformNormalViewFromGlobal * globalNormal, 0.0);
return offsetXY * projPos.w * 2.0 * inverseViewport * normalize(projNormal.xyz).xy;
}`)),n.code.add(s`float _calculateProjectedBiasZ(vec4 projPos) {
float offsetZ = depthBias.y;
return sqrt(max(projPos.z,0.0)) * offsetZ;
}
vec4 adjustProjectedPosition(vec4 projPos, vec3 worldNormal, float lineWidth) {
vec2 offsetXY = calculateProjectedBiasXY(projPos, worldNormal);
if (!isNaN(offsetXY.x) && !isNaN(offsetXY.y)) {
projPos.xy += offsetXY;
}
projPos.z += _calculateProjectedBiasZ(projPos);
return projPos;
}`)}var F;function I(){return(I=e((()=>{i(),N(),E(),c(),x(),T(),F=r(.5,-4e-4)})))()}function L(e,t){let n=e.vertex;t.silhouette?(n.code.add(s`bool isSilhouetteEdge(vec3 viewDir, vec3 normalA, vec3 normalB) {
float faceAVisible = dot(viewDir, normalA);
float faceBVisible = dot(viewDir, normalB);
return faceAVisible * faceBVisible < 0.0;
}`),t.legacy?n.code.add(s`bool discardNonSilhouetteEdges(vec3 viewPos, vec3 worldPos, ComponentData data) {
vec3 viewNormalA = _modelToViewNormal(data.normal);
vec3 viewNormalB = _modelToViewNormal(data.normal2);
vec3 viewDir = -viewPos;
if (isSilhouetteEdge(viewDir, viewNormalA, viewNormalB)) {
return false;
}
gl_Position = vec4(10.0, 10.0, 10.0, 1.0);
return true;
}`):n.code.add(s`bool discardNonSilhouetteEdges(vec3 viewPos, vec3 worldPos, ComponentData data) {
vec3 worldNormalA = _modelToWorldNormal(data.normal);
vec3 worldNormalB = _modelToWorldNormal(data.normal2);
vec3 viewDir = -worldPos;
if (isSilhouetteEdge(viewDir, worldNormalA, worldNormalB)) {
return false;
}
gl_Position = vec4(10.0, 10.0, 10.0, 1.0);
return true;
}`)):n.code.add(s`bool discardNonSilhouetteEdges(vec3 viewPos, vec3 worldPos, ComponentData data) {
return false;
}`)}function R(){return(R=e((()=>{c()})))()}function z(e,t){let{vertex:n}=e;e.include(ae,t);let{silhouette:r,legacy:i,spherical:a}=t;e.attributes.add(`componentIndex`,`uint`);let{getTextureAttribute:o,TextureBackedBufferModule:c}=V;e.include(c),n.constants.add(`lineWidthFractionFactor`,`float`,8),n.constants.add(`extensionLengthOffset`,`float`,128),n.code.add(s`
    struct ComponentData {
      vec4 color;
      vec3 normal;
      vec3 normal2;
      float lineWidth;
      float extensionLength;
      float type;
      float verticalOffset;
    };

    ComponentData readComponentData() {
      vec3 normal = normalModel();
      vec3 normal2 = ${r?s`decompressNormal(normal2Compressed)`:s`normal`};

      vec4 colorValue = ${o(`color`)};
      float lineWidth = float(${o(`lineWidth`)}) / lineWidthFractionFactor;
      float extensionLength = float(${o(`extensionLength`)}) - extensionLengthOffset;
      // SOLID (=0/255) needs to be > 0.0, SKETCHY (=1/255) needs to be <= 0;
      float type = -(float(${o(`materialType`)})) + 0.5;
      float opacity = ${o(`opacity`)};

      float verticalOffset = ${o(`elevationOffset`)};

      return ComponentData(
        vec4(colorValue.rgb, colorValue.a * opacity),
        normal, normal2,
        lineWidth,
        extensionLength,
        type,
        verticalOffset
      );
    }
  `),i?n.code.add(s`vec3 _modelToWorldNormal(vec3 normal) {
return (model * vec4(normal, 0.0)).xyz;
}
vec3 _modelToViewNormal(vec3 normal) {
return (localView * model * vec4(normal, 0.0)).xyz;
}`):n.uniforms.add(new H(`transformNormalGlobalFromModel`)).code.add(s`vec3 _modelToWorldNormal(vec3 normal) {
return transformNormalGlobalFromModel * normal;
}`),r?(e.attributes.add(`normal2Compressed`,`vec2`),n.code.add(s`vec3 worldNormal(ComponentData data) {
return _modelToWorldNormal(normalize(data.normal + data.normal2));
}`)):n.code.add(s`vec3 worldNormal(ComponentData data) {
return _modelToWorldNormal(data.normal);
}`),i?n.code.add(s`void worldAndViewFromModelPosition(vec3 modelPos, float verticalOffset, out vec3 worldPos, out vec3 viewPos) {
worldPos = (model * vec4(modelPos, 1.0)).xyz;
viewPos = (localView * vec4(worldPos, 1.0)).xyz;
}`):(n.include(ie),n.uniforms.add(new U(`transformWorldFromModelTL`),new U(`transformWorldFromModelTH`),new H(`transformWorldFromModelRS`),new b(`transformViewFromCameraRelativeRS`,e=>e.transformViewFromCameraRelativeRS),new y(`transformWorldFromViewTL`,e=>e.transformWorldFromViewTL),new y(`transformWorldFromViewTH`,e=>e.transformWorldFromViewTH)).code.add(s`
      void worldAndViewFromModelPosition(vec3 modelPos, float verticalOffset, out vec3 worldPos, out vec3 viewPos) {
        vec3 rotatedModelPosition = transformWorldFromModelRS * modelPos;
        vec3 transformCameraRelativeFromModel = dpAdd(
          transformWorldFromModelTL,
          transformWorldFromModelTH,
          -transformWorldFromViewTL,
          -transformWorldFromViewTH
        );

        worldPos = transformCameraRelativeFromModel + rotatedModelPosition;

        if (verticalOffset != 0.0) {
          vec3 vUp = ${a?`normalize(transformWorldFromModelTL + rotatedModelPosition);`:`vec3(0.0, 0.0, 1.0);`}
          worldPos += verticalOffset * vUp;
        }

        viewPos = transformViewFromCameraRelativeRS * worldPos;
      }
    `)),n.uniforms.add(new w(`transformProjFromView`,e=>e.camera.projectionMatrix)).code.add(s`vec4 projFromViewPosition(vec3 position) {
return transformProjFromView * vec4(position, 1.0);
}`),n.code.add(s`float calculateExtensionLength(float extensionLength, float lineLength) {
return extensionLength / (log2(max(1.0, 256.0 / lineLength)) * 0.2 + 1.0);
}`)}function B(e){return e===1||e===2}var V,H,U;function W(){return(W=e((()=>{se(),oe(),re(),v(),c(),x(),T(),ce(),A(),l(),V=new le({layout:j,itemIndexAttribute:`componentIndex`,bufferUniform:new k(`componentTextureBuffer`,e=>e.componentDataTextureBuffer?.texture)}),H=class extends u{constructor(e){super(e,`mat3`)}},U=class extends u{constructor(e){super(e,`vec3`)}}})))()}function G(e,t){let n=t.type===2,r=t.type===0;e.attributes.add(`sideness`,`vec2`),e.vertex.code.add(s`
    struct UnpackedAttributes {
      vec2 sideness;
      vec2 sidenessNorm;
      float lineWidthPixels;
      float extensionLengthPixels;
      ${o(n,`float type;`)}
    };
  `).code.add(s`
    UnpackedAttributes unpackAttributes(ComponentData component) {
      vec2 sidenessNorm = sideness;
      vec2 sideness = sidenessNorm * 2.0 - 1.0;
      float extensionLengthPixels = component.extensionLength;
      float lineWidth = component.lineWidth;
      ${o(n,`if (component.type <= 0.0) {`)}
      ${o(!r,`extensionLengthPixels *= variantExtension * 2.0 - 1.0;`)}
      ${o(n,`}`)}
      return UnpackedAttributes(sideness, sidenessNorm, lineWidth, extensionLengthPixels ${o(n,`, component.type`)});
    }
  `)}function K(){return(K=e((()=>{c()})))()}function ue(e,t){let n=e.vertex;switch(e.include(G,t),t.type){case 0:n.code.add(s`float calculateLineAmplitude(UnpackedAttributes unpackedAttributes) {
return 0.0;
}`);break;case 1:n.uniforms.add(new f(`strokesAmplitude`,e=>e.strokesTexture.amplitude)).code.add(s`float calculateLineAmplitude(UnpackedAttributes unpackedAttributes) {
return strokesAmplitude;
}`);break;case 2:n.uniforms.add(new f(`strokesAmplitude`,e=>e.strokesTexture.amplitude)).code.add(s`float calculateLineAmplitude(UnpackedAttributes unpackedAttributes) {
float type = unpackedAttributes.type;
if (type <= 0.0) {
return strokesAmplitude;
}
return 0.0;
}`);break;case 3:break;default:t.type}}function q(){return(q=e((()=>{p(),c(),K()})))()}function de(e,t){e.include(G,t);let{vertex:n,fragment:r}=e;switch(B(t.type)&&(e.varyings.add(`vStrokeUV`,`vec2`),n.uniforms.add(new h(`strokesTexture`,e=>e.strokesTexture.texture),new f(`strokesLog2Resolution`,e=>Math.log2(e.strokesTexture.resolution)),new f(`strokeVariants`,e=>e.strokesTexture.variants)).code.add(s`void calculateStyleOutputsSketch(float lineLength, UnpackedAttributes unpackedAttributes) {
vec2 sidenessNorm = unpackedAttributes.sidenessNorm;
float lineIndex = clamp(ceil(log2(lineLength)), 0.0, strokesLog2Resolution);
vStrokeUV = vec2(exp2(lineIndex) * sidenessNorm.y, lineIndex * strokeVariants + variantStroke + 0.5) / vec2(textureSize(strokesTexture, 0));
vStrokeUV.x += variantOffset;
}`),r.uniforms.add(new h(`strokesTexture`,e=>e.strokesTexture.texture)).code.add(s`float calculateLineOffsetSketch() {
return texture(strokesTexture, vStrokeUV).r;
}
float calculateLinePressureSketch() {
return texture(strokesTexture, vStrokeUV + vec2(0.0, 0.5)).r;
}`)),t.type){case 0:n.code.add(s`void calculateStyleOutputs(UnpackedAttributes unpackedAttributes) {}`),r.code.add(s`float calculateLineOffset() {
return 0.0;
}
float calculateLinePressure() {
return 1.0;
}`);break;case 1:n.code.add(s`void calculateStyleOutputs(UnpackedAttributes unpackedAttributes)
{
calculateStyleOutputsSketch(vLineLengthPixels, unpackedAttributes);
}`),r.code.add(s`float calculateLineOffset() {
return calculateLineOffsetSketch();
}
float calculateLinePressure() {
return calculateLinePressureSketch();
}`);break;case 2:e.varyings.add(`vType`,`float`),n.code.add(s`void calculateStyleOutputs(UnpackedAttributes unpackedAttributes)
{
vType = unpackedAttributes.type;
if (unpackedAttributes.type <= 0.0) {
calculateStyleOutputsSketch(vLineLengthPixels, unpackedAttributes);
}
}`),r.code.add(s`float calculateLineOffset() {
if (vType <= 0.0) {
return calculateLineOffsetSketch();
}
else {
return 0.0;
}
}
float calculateLinePressure() {
if (vType <= 0.0) {
return calculateLinePressureSketch();
}
else {
return 1.0;
}
}`);break;case 3:break;default:t.type}}function J(){return(J=e((()=>{p(),c(),m(),W(),K(),ee()})))()}function Y(e){let n=new d,{vertex:r,fragment:i,varyings:a,attributes:c}=n;e.legacy&&r.uniforms.add(new Z(`model`),new Z(`localView`)),n.include(P,e),n.include(z,e),n.include(ue,e),n.include(G,e),n.include(de,e),i.include(_,e),n.include(L,e),a.add(`vColor`,`vec4`),a.add(`vRadius`,`float`),a.add(`vPosition`,`vec3`,{invariant:!0}),a.add(`vWorldPosition`,`vec3`,{invariant:!0}),a.add(`vLineLengthPixels`,`float`),a.add(`vSizeFalloffFactor`,`float`),r.uniforms.add(new D(`pixelToNDC`,({camera:e})=>t(X,2/e.fullViewport[2],2/e.fullViewport[3])),new ne(`viewport`,e=>e.camera.fullViewport),new S(`pixelRatio`,e=>e.camera.pixelRatio)),c.add(`position0`,`vec3`),c.add(`position1`,`vec3`),c.add(`variantOffset`,`float`),c.add(`variantStroke`,`float`),c.add(`variantExtension`,`float`);let l=e.type===1,u=e.type===2;return r.uniforms.add(new f(`distanceFalloffFactor`,e=>e.distanceFalloffFactor)).code.add(s`
    float distanceBasedPerspectiveFactor(float distance) {
      return clamp(sqrt(distanceFalloffFactor / distance), 0.0, 1.0);
    }

    void calculateGeometricOutputs(vec3 viewPosV0, vec3 viewPosV1, vec3 worldPosV0, vec3 worldPosV1, vec3 worldNormal, UnpackedAttributes unpackedAttributes) {
      vec2 sideness = unpackedAttributes.sideness;
      vec2 sidenessNorm = unpackedAttributes.sidenessNorm;

      vWorldPosition = mix(worldPosV0, worldPosV1, sidenessNorm.y).xyz;

      vec3 viewPos = mix(viewPosV0, viewPosV1, sidenessNorm.y);

      vec4 projPosV0 = projFromViewPosition(viewPosV0);
      vec4 projPosV1 = projFromViewPosition(viewPosV1);
      vec4 projPos = projFromViewPosition(viewPos);

      vec3 screenSpaceLineNDC = (projPosV1.xyz / projPosV1.w - projPosV0.xyz / projPosV0.w);
      vec2 ndcToPixel = viewport.zw * 0.5;
      vec2 screenSpaceLinePixels = screenSpaceLineNDC.xy * ndcToPixel;
      float lineLengthPixels = length(screenSpaceLinePixels);

      float dzPerPixel = screenSpaceLineNDC.z / lineLengthPixels;
      vec2 screenSpaceDirection = screenSpaceLinePixels / lineLengthPixels;
      vec2 perpendicularScreenSpaceDirection = vec2(screenSpaceDirection.y, -screenSpaceDirection.x) * sideness.x;

      float falloffFactor = distanceBasedPerspectiveFactor(-viewPos.z) * pixelRatio;
      float lineWidthPixels = unpackedAttributes.lineWidthPixels * falloffFactor;

      float extensionLengthPixels = calculateExtensionLength(unpackedAttributes.extensionLengthPixels, lineLengthPixels) * falloffFactor;
      float lineAmplitudePixels = calculateLineAmplitude(unpackedAttributes) * pixelRatio;

      vSizeFalloffFactor = falloffFactor;

      float lineWidthAndAmplitudePixels = lineWidthPixels + lineAmplitudePixels + lineAmplitudePixels;
      float extendedLineLengthPixels = lineLengthPixels + extensionLengthPixels + extensionLengthPixels;

      // Line size with padding
      float halfAAPaddedLineWidthAndAmplitudePixels = lineWidthAndAmplitudePixels * 0.5 + ${s.float(1)};
      float aaPaddedRoundedCapSizePixels = lineWidthPixels * 0.5 + ${s.float(1)};

      // Half line width in NDC including padding for anti aliasing
      vec2 halfAAPaddedLineWidthAndAmplitudeNDC = halfAAPaddedLineWidthAndAmplitudePixels * pixelToNDC;
      vec2 aaPaddedRoundedCapSizeNDC = aaPaddedRoundedCapSizePixels * pixelToNDC;
      vec2 extensionLengthNDC = extensionLengthPixels * pixelToNDC;

      // Compute screen space position of vertex, offsetting for line size and end caps
      vec2 ndcOffset = (
          screenSpaceDirection * sideness.y * (aaPaddedRoundedCapSizeNDC + extensionLengthNDC)
        + perpendicularScreenSpaceDirection * halfAAPaddedLineWidthAndAmplitudeNDC
      );

      projPos.xy += ndcOffset * projPos.w;
      projPos.z += (dzPerPixel * (aaPaddedRoundedCapSizePixels + extensionLengthPixels)) * sideness.y * projPos.w;

      projPos = adjustProjectedPosition(projPos, worldNormal, 1.0 + max((lineWidthAndAmplitudePixels - 1.0) * 0.5, 0.0));

      // Line length with end caps
      float aaPaddedLineWithCapsLengthPixels = extendedLineLengthPixels + aaPaddedRoundedCapSizePixels + aaPaddedRoundedCapSizePixels;

      float pixelPositionAlongLine = aaPaddedLineWithCapsLengthPixels * sidenessNorm.y - aaPaddedRoundedCapSizePixels;

      // Position in pixels with origin at first vertex of line segment
      vPosition = vec3(
        halfAAPaddedLineWidthAndAmplitudePixels * sideness.x,
        pixelPositionAlongLine,
        pixelPositionAlongLine / extendedLineLengthPixels
      );

      // The line width radius in pixels
      vRadius = lineWidthPixels * 0.5;
      vLineLengthPixels = extendedLineLengthPixels;

      // discard short edges below a certain length threshold
      ${o(l||u,s`if (lineLengthPixels <= 3.0 ${o(u,` && unpackedAttributes.type <= 0.0`)}) {
                gl_Position = vec4(10.0, 10.0, 10.0, 1.0);
                return;
             }`)}
      gl_Position = projPos;
    }`),r.main.add(s`
    ComponentData component = readComponentData();
    UnpackedAttributes unpackedAttributes = unpackAttributes(component);

    vec3 worldPosV0, worldPosV1, viewPosV0, viewPosV1;
    worldAndViewFromModelPosition(position0, component.verticalOffset, worldPosV0, viewPosV0);
    worldAndViewFromModelPosition(position1, component.verticalOffset, worldPosV1, viewPosV1);

    // Component color
    vColor = component.color;

    // Discard fully transparent edges
    if (vColor.a < ${s.float(.00392156862745098)}) {
      gl_Position = vec4(10.0, 10.0, 10.0, 1.0);
      return;
    }

    if (discardNonSilhouetteEdges(viewPosV0, worldPosV0, component)) {
      return;
    }

    // General geometric computation for all types of edges
    calculateGeometricOutputs(viewPosV0, viewPosV1, worldPosV0, worldPosV1, worldNormal(component), unpackedAttributes);

    // Specific computation for different edge styles
    calculateStyleOutputs(unpackedAttributes);`),i.code.add(s`float lineWithCapsDistance(float radius, vec2 position, float lineLength) {
float positionX = position.x - calculateLineOffset();
if (radius < 1.0) {
float coverageX = clamp(min(radius, positionX + 0.5) - max(-radius, positionX - 0.5), 0.0, 1.0);
float coverageY = clamp(min(lineLength, position.y + 0.5) - max(0.0, position.y - 0.5), 0.0, 1.0);
return 0.5 - min(coverageX, coverageY);
}
else {
float positionOnCap = position.y - clamp(position.y, 0.0, lineLength);
return length(vec2(positionX, positionOnCap)) - radius;
}
}`),i.main.add(s`float radius = vRadius * calculateLinePressure();
float distance = lineWithCapsDistance(radius, vPosition.xy, vLineLengthPixels);
float coverage = clamp(0.5 - distance, 0.0, 1.0);
discardBySlice(vWorldPosition);
fragColor = vec4(vColor.rgb, vColor.a * coverage);`),n}var X,Z,Q;function $(){return($=e((()=>{n(),i(),g(),E(),O(),C(),p(),c(),I(),R(),W(),q(),J(),K(),te(),l(),X=a(),Z=class extends u{constructor(e){super(e,`mat4`)}},Q=Object.freeze(Object.defineProperty({__proto__:null,build:Y},Symbol.toStringTag,{value:`Module`}))})))()}export{q as a,R as c,J as i,I as l,$ as n,K as o,Y as r,W as s,Q as t};