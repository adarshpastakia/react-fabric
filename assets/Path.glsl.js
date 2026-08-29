import{n as e}from"./rolldown-runtime.js";import{i as t,r as n}from"./memoryEstimations.js";import{a as r,d as i,l as a,o}from"./vec2f64.js";import{a as s,i as c}from"./Util.js";import{n as l,t as u}from"./olidUtils.js";import{n as d,r as f,t as p}from"./glsl.js";import{n as m,t as h}from"./Uniform.js";import{n as ee,t as te}from"./IntegerPassUniform.js";import{n as ne,t as re}from"./ShaderBuilder.js";import{n as g,t as _}from"./FloatPassUniform.js";import{p as ie}from"./ShaderOutput.js";import{n as ae,r as v,t as oe}from"./VisualVariablePassParameters.js";import{a as se,i as y}from"./Slice.glsl.js";import{n as b,t as x}from"./Float3PassUniform.js";import{n as ce,t as le}from"./ObjectAndLayerIdColor.glsl.js";import{n as ue,t as de}from"./Float4PassUniform.js";import{n as S,t as C}from"./Float4sPassUniform.js";import{n as w,t as fe}from"./FloatsPassUniform.js";import{i as pe,n as me,r as he,t as T}from"./View.glsl.js";import{n as ge,t as _e}from"./ColorConversion.glsl.js";import{n as E}from"./PiUtils.glsl.js";import{n as ve,t as ye}from"./Float2PassUniform.js";import{n as be,t as xe}from"./OutputHighlight.glsl.js";import{n as Se,t as Ce}from"./OutputColorHighlightOLID.glsl.js";import{i as we,n as Te}from"./InterleavedLayout.js";import{n as Ee,t as De}from"./TextureBackedBufferLayout.js";import{n as Oe,r as ke}from"./ForwardLinearDepthToWriteShadowMap.glsl.js";import{n as D,t as Ae}from"./Transform.glsl.js";import{n as je,t as Me}from"./OutputDepth.glsl.js";import{n as Ne,t as Pe}from"./Offset.glsl.js";import{c as Fe,i as Ie,n as Le,r as Re,s as ze,t as Be}from"./EvaluateSceneLighting.glsl.js";import{n as Ve,r as He}from"./MainLighting.glsl.js";import{n as Ue,t as We}from"./Normals.glsl.js";import{i as Ge,n as Ke,r as qe,t as Je}from"./SnowCover.glsl.js";import{n as O,r as Ye}from"./ReadShadowMap.glsl.js";import{n as k,t as Xe}from"./NormalUtils.glsl.js";import{i as Ze,n as Qe,r as $e,t as et}from"./Texture2DUintDrawUniform.js";function tt({sourceIndex:e,subdivision:t,type:n,capSide:r}){return c(e>=0&&e<=15,`invalid sourceIndex`),c(t>=0&&t<=7,`invalid subdivision`),(e&15)<<0|(t&7)<<4|(n&7)<<7|(r&1)<<10}function nt(e){return{sourceIndex:e>>0&15,subdivision:e>>4&7,type:e>>7&7,capSide:e>>10&1}}function A(){return(A=e((()=>{s()})))()}function j(e){let t=.5,n=new P(0),i={v0:0,v1:0};n.addPole(r(0,0));for(let e=0;e<10;++e){let i=2*e*Math.PI/10,a=Math.cos(i),o=Math.sin(i),s=r(a*t,o*t),c=r(a,o);n.addVertex(s,c)}for(let e=0;e<9;++e){let t={v0:e,v1:e+1};n.addSegment(t,i)}if(n.addSegment({v0:9,v1:0},i),e!==`center`){let t=F[e];n.translate(t[0],t[1])}return n}function M(e){let t=new P(1),n=r(-.5,-.5),i=r(.5,-.5),a=r(.5,.5),o=r(-.5,.5),s=r(0,-1),c=r(1,0),l=r(0,1),u=r(-1,0);if(t.addPole(r(0,.5),l),t.addPole(r(0,.5)),t.addPole(r(0,-.5)),t.addPole(r(0,-.5),s),t.addVertex(n,s),t.addVertex(i,s),t.addSegment({v0:0,v1:1},{v0:3,v1:3}),t.addVertex(i,c),t.addVertex(a,c),t.addSegment({v0:2,v1:3},{v0:2,v1:1}),t.addVertex(a,l),t.addVertex(o,l),t.addSegment({v0:4,v1:5},{v0:0,v1:0}),t.addVertex(o,u),t.addVertex(n,u),t.addSegment({v0:6,v1:7},{v0:1,v1:2}),e!==`center`){let n=F[e];t.translate(n[0],n[1])}return t}var N,P,F,I,L;function R(){return(R=e((()=>{t(),o(),N={0:{indexCount:20,poleCount:1,vertexCount:10},1:{indexCount:8,poleCount:4,vertexCount:8}},P=class{constructor(e){this.type=e,this.vertices=[],this.normals=[],this.indices=[],this.poles=[],this.poleIndices=[]}addVertex(e,t){return this.vertices.push(i(e)),this.normals.push(i(t)),this.vertices.length-1}addPole(e,t=null){return this.poles.push({position:i(e),normal:t?i(t):null}),this.poles.length-1}addSegment(e,t=null){this.indices.push(e.v0),this.indices.push(e.v1),t&&(this.poleIndices.push(t.v0),this.poleIndices.push(t.v1))}get numSegments(){return this.indices.length/2}translate(e,t){for(let n of this.vertices)n[0]+=e,n[1]+=t;for(let n of this.poles)n.position[0]+=e,n.position[1]+=t}get usedMemory(){return this.vertices.length*n(this.vertices[0])*2+n(this.indices)}},F={top:[0,-.5],bottom:[0,.5]},I={center:j(`center`),top:j(`top`),bottom:j(`bottom`)},L={center:M(`center`),top:M(`top`),bottom:M(`bottom`)}})))()}function rt(){let e=Te().u32(`pathVertexInfo`,{integer:!0}).u32(`textureElementIndex`,{integer:!0});return u()&&e.vec4u8(`olidColor`),e.freeze()}function z(e){let t=[{type:`vec3f32`,name:`position`},{type:`vec2snorm16`,name:`profileRight`},{type:`vec2snorm16`,name:`profileUp`}];return e.upVectorAlignment===1&&t.push({type:`vec2snorm16`,name:`pathRotationUp`}),e.hasVVSize&&t.push({type:`f32`,name:`sizeFeatureAttribute`}),e.hasVVColor&&t.push({type:`f32`,name:`colorFeatureAttribute`}),e.hasVVOpacity&&t.push({type:`f32`,name:`opacityFeatureAttribute`}),t.push({type:`f16`,name:`pathMaxStretchDistance`},{type:`snorm16`,name:`profileRotation`}),new De(t)}function B(){return(B=e((()=>{we(),l(),Ee()})))()}function it(e){let{attributes:t,vertex:n}=e;t.add(`pathVertexInfo`,`uint`),n.constants.add(`pathVertexInfoSourceIndexShift`,`uint`,0),n.constants.add(`pathVertexInfoSourceIndexMask`,`uint`,15),n.constants.add(`pathVertexInfoSubdivisionShift`,`uint`,4),n.constants.add(`pathVertexInfoSubdivisionMask`,`uint`,7),n.constants.add(`pathVertexInfoTypeShift`,`uint`,7),n.constants.add(`pathVertexInfoTypeMask`,`uint`,7),n.constants.add(`pathVertexInfoCapSideShift`,`uint`,10),n.constants.add(`pathVertexInfoCapSideMask`,`uint`,1),n.constants.add(`pathVertexCapSideEnd`,`uint`,1),n.code.add(f`struct PathVertexInfo {
uint sourceIndex;
float subdivision;
uint type;
bool isEnd;
};
PathVertexInfo decodePathVertexInfo() {
uint sourceIndex = (pathVertexInfo >> pathVertexInfoSourceIndexShift) & pathVertexInfoSourceIndexMask;
uint subdivision = (pathVertexInfo >> pathVertexInfoSubdivisionShift) & pathVertexInfoSubdivisionMask;
uint type = (pathVertexInfo >> pathVertexInfoTypeShift) & pathVertexInfoTypeMask;
uint capSide = (pathVertexInfo >> pathVertexInfoCapSideShift) & pathVertexInfoCapSideMask;
return PathVertexInfo(
sourceIndex,
float(subdivision),
type,
capSide == pathVertexCapSideEnd
);
}`)}function V(){return(V=e((()=>{p(),A()})))()}var H;function U(){return(U=e((()=>{m(),H=class extends h{constructor(e,t,n,r){super(e,`vec2`,1,(t,i,a)=>t.setUniform2fv(e,n(i,a),r),t)}}})))()}var W;function G(){return(G=e((()=>{m(),W=class extends h{constructor(e,t,n){super(e,`int`,1,(t,r,i)=>t.setUniform1iv(e,n(r,i)),t)}}})))()}function at(e,t){let{vertex:n}=e;e.include(it);let r=t.upVectorAlignment===1;n.uniforms.add(new g(`angleCutoff`,e=>e.cutoffAngle)),n.code.add(f`float reciprocalClamped(float value) {
float signValue = value < 0.0 ? -1.0 : 1.0;
return signValue / max(abs(value), 1e-6);
}`),r?n.code.add(f`vec2 applyMiterStretch(vec2 vertex, float rotationAngle, vec2 rotationRight) {
if (rotationAngle == 0.0) {
return vertex;
}
float k = reciprocalClamped(cos(0.5 * rotationAngle));
mat2 miterStretch = mat2(
1. + (k - 1.) * rotationRight.x * rotationRight.x,
(k - 1.) * rotationRight.x * rotationRight.y,
(k - 1.) * rotationRight.x * rotationRight.y,
1. + (k - 1.) * rotationRight.y * rotationRight.y
);
return miterStretch * vertex;
}`):n.code.add(f`vec2 applyMiterStretch(vec2 vertex, float rotationAngle) {
if (rotationAngle == 0.0) {
return vertex;
}
float k = reciprocalClamped(cos(0.5 * rotationAngle));
return vec2(k, 1.) * vertex;
}`);let{vertexCount:i,indexCount:a,poleCount:o}=N[t.pathProfileType];switch(n.uniforms.add(new H(`pathProfileVertices`,i,e=>e.profile.vertices.flat()),new H(`pathProfileNormals`,i,e=>e.profile.normals.flat())),n.code.add(f`mat3 mat3FromRotation(float angle, vec3 axis) {
float x = axis.x;
float y = axis.y;
float z = axis.z;
float s = sin(angle);
float c = cos(angle);
float t = 1.0 - c;
return mat3(
x * x * t + c,      y * x * t + z * s,  z * x * t - y * s,
x * y * t - z * s,  y * y * t + c,      z * y * t + x * s,
x * z * t + y * s,  y * z * t - x * s,  z * z * t + c
);
}`),n.code.add(f`struct ExtrusionFrame {
vec3 up;
vec3 right;
};
struct ExtrudedVertex {
ExtrusionFrame frame;
vec2 profileVertex;
vec2 profileNormal;
vec2 rotationRight;
float maxDistance;
float capPositionOffset;
float capNormalOffset;
bool isCap;
};`),r?n.code.add(f`vec2 getPathRotationRight(ExtrusionFrame frame) {
vec3 rotationUp = getFrameRotationUp();
float a = dot(rotationUp, frame.up);
float b = dot(rotationUp, frame.right);
vec3 vertex = normalize(frame.up * -b + frame.right * a);
return vec2(dot(vertex, frame.right), dot(vertex, frame.up));
}`):n.code.add(f`vec2 getPathRotationRight() {
return vec2(1., 0.);
}`),n.constants.add(`pathVertexTypeJoin`,`uint`,0),n.uniforms.add(new ee(`numJoinSubdivisions`,e=>e.numJoinSubdivisions)),n.code.add(f`
      ExtrudedVertex evaluateJoinVertex(PathVertexInfo vertexInfo, ExtrusionFrame frame) {
        vec2 profileVertex = pathProfileVertices[vertexInfo.sourceIndex];
        vec2 profileNormal = pathProfileNormals[vertexInfo.sourceIndex];
        float profileRotation = getProfileRotation();
        vec2 rotationRight = getPathRotationRight(${d(r,f`frame`)});
        bool isBevel = abs(profileRotation) >= angleCutoff;

        // determine if the current profile vertex is on the inside or outside of the rotationAxis
        // this determines if the geometry folds inwards or is bend outwards
        float b = dot(profileVertex, rotationRight);
        bool isBend = b * profileRotation >= 0.;

        bool isBevelBend = isBevel && isBend;

        if (isBevelBend) {
          float k = vertexInfo.subdivision;
          // rotate half rotation angle backwards to where the rotation starts
          // and then rotate a couple of times depending on the current subdivision segment
          float bendRotation = -profileRotation * 0.5 + (k * profileRotation) / float(numJoinSubdivisions);
          if (bendRotation != 0.) {
            vec3 rotationUp = getFrameRotationUp();
            mat3 transform  = mat3FromRotation(bendRotation, rotationUp);
            ${d(r,f`frame.up = normalize(transform * frame.up);`)}
            frame.right = normalize(transform * frame.right);
          }
        } else {
          profileVertex = applyMiterStretch(
            profileVertex,
            profileRotation${d(r,f`,
              rotationRight`)}
          );
        }

        rotationRight = isBend ? vec2(0.) : rotationRight;
        float maxDistance = isBend
        ? 0.
        : getMaxStretchDistance();

        return ExtrudedVertex(
          frame,
          profileVertex,
          profileNormal,
          rotationRight,
          maxDistance,
          0.,
          0.,
          false
        );
      }
    `),n.constants.add(`pathVertexTypeCapConnectingProfile`,`uint`,1),n.code.add(f`
        ExtrudedVertex evaluateConnectingVertex(PathVertexInfo vertexInfo, ExtrusionFrame frame) {
          vec2 profileVertex = pathProfileVertices[vertexInfo.sourceIndex];
          vec2 profileNormal = pathProfileNormals[vertexInfo.sourceIndex];

          float profilePlaneVertexOffset = ${d(t.pathCapType===2,f`vertexInfo.isEnd ? 0.5 : -0.5`,f`0.`)};

          return ExtrudedVertex(
            frame,
            profileVertex,
            profileNormal,
            vec2(0.),
            0.,
            profilePlaneVertexOffset,
            0.,
            true
          );
        }
    `),t.pathCapType){case 1:case 2:n.constants.add(`pathVertexTypeFlatCapProfile`,`uint`,2),n.code.add(f`
          ExtrudedVertex evaluateFlatCapVertex(PathVertexInfo vertexInfo, ExtrusionFrame frame) {
            vec2 profileVertex = pathProfileVertices[vertexInfo.sourceIndex];
            bool isEnd = vertexInfo.isEnd;
            float normalOffset = isEnd ? 1. : -1.;
            float profilePlaneOffset = ${d(t.pathCapType===2,f`isEnd ? 0.5 : -0.5`,f`0.0`)};
            vec2 normal = vec2(0.);

            return ExtrudedVertex(
              frame,
              profileVertex,
              normal,
              vec2(0.),
              0.,
              profilePlaneOffset,
              normalOffset,
              true
            );
          }
        `);break;case 3:n.uniforms.add(new C(`pathProfilePoles`,o,e=>e.profile.poles.flatMap(({position:e,normal:t})=>[...e,...t??K]),{supportsNaN:!0}),new W(`pathProfilePoleIndices`,a,e=>e.profile.poleIndices)),n.include(E),n.constants.add(`pathVertexTypeRoundCapPole`,`uint`,3),n.constants.add(`pathVertexTypeRoundCapInnerProfile`,`uint`,4),n.constants.add(`pathNumRoundCapExtrusionSubdivisions`,`float`,3),n.code.add(f`ExtrudedVertex evaluateRoundCapPoleVertex(PathVertexInfo vertexInfo, ExtrusionFrame frame) {
bool isEnd = vertexInfo.isEnd;
float capSign = isEnd ? 1. : -1.;
float offsetScale = capSign * 0.5;
vec4 pole = pathProfilePoles[vertexInfo.sourceIndex];
vec2 polePosition = pole.xy;
bool hasPoleNormal = !isnan(pole.z);
vec2 poleNormal = hasPoleNormal ? pole.zw : vec2(0.);
float normalOffset = hasPoleNormal ? 0. : capSign;
return ExtrudedVertex(
frame,
polePosition,
poleNormal,
vec2(0.),
0.,
offsetScale,
normalOffset,
true
);
}
ExtrudedVertex evaluateRoundCapInnerVertex(PathVertexInfo vertexInfo, ExtrusionFrame frame) {
bool isEnd = vertexInfo.isEnd;
float capSign = isEnd ? 1. : -1.;
float offsetScale = capSign * 0.5;
float subdivision = vertexInfo.subdivision;
float t = 1. - (subdivision + 1.) / pathNumRoundCapExtrusionSubdivisions;
float theta = t * HALF_PI;
float t1 = sin(theta);
float t2 = cos(theta);
int poleIndex = pathProfilePoleIndices[vertexInfo.sourceIndex];
vec4 pole = pathProfilePoles[poleIndex];
vec2 polePosition = pole.xy;
bool hasPoleNormal = !isnan(pole.z);
vec2 profileVertex = pathProfileVertices[vertexInfo.sourceIndex];
vec2 poleOffsetScaled = (profileVertex - polePosition) * t1;
vec2 poleVertex = poleOffsetScaled + polePosition;
vec2 profileNormal = hasPoleNormal
? pole.zw
: normalize(poleOffsetScaled) * t1;
float normalOffset = hasPoleNormal ? 0. : capSign * t2;
return ExtrudedVertex(
frame,
poleVertex,
profileNormal,
vec2(0.),
0.,
offsetScale * t2,
normalOffset,
true
);
}`)}n.code.add(f`
      ExtrudedVertex evaluateVertex() {
        PathVertexInfo vertexInfo = decodePathVertexInfo();
        ExtrusionFrame frame = ExtrusionFrame(
          getFrameUp(),
          getFrameRight()
        );

        switch (vertexInfo.type) {
          case pathVertexTypeJoin:
            return evaluateJoinVertex(vertexInfo, frame);

          case pathVertexTypeCapConnectingProfile:
            return evaluateConnectingVertex(vertexInfo, frame);

          ${d(t.pathCapType===1||t.pathCapType===2,f`
          case pathVertexTypeFlatCapProfile:
            return evaluateFlatCapVertex(vertexInfo, frame);
          `)}

          ${d(t.pathCapType===3,f`
          case pathVertexTypeRoundCapPole:
            return evaluateRoundCapPoleVertex(vertexInfo, frame);
          case pathVertexTypeRoundCapInnerProfile:
            return evaluateRoundCapInnerVertex(vertexInfo, frame);
          `)}

          default:
            return ExtrudedVertex(
              frame,
              vec2(0.),
              vec2(0.),
              vec2(0.),
              0.,
              0.,
              0.,
              false
            );
        }
      }
    `)}var K;function q(){return(q=e((()=>{o(),V(),U(),S(),_(),p(),te(),G(),R(),K=a(NaN,NaN)})))()}function ot(e,t){let{attributes:n,vertex:r}=e,i=new et(`componentTextureBuffer`,e=>e.textureBuffer),a=new $e({layout:z(t),itemIndexAttribute:`textureElementIndex`,bufferUniform:i});e.include(a.TextureBackedBufferModule,t),n.add(`textureElementIndex`,`uint`),r.uniforms.add(new ye(`size`,e=>e.size));let{hasVVSize:o,hasVVColor:s,hasVVOpacity:c}=t;o?(r.uniforms.add(new x(`vvSizeMinSize`,e=>e.vvSize.minSize),new x(`vvSizeMaxSize`,e=>e.vvSize.maxSize),new x(`vvSizeOffset`,e=>e.vvSize.offset),new x(`vvSizeFactor`,e=>e.vvSize.factor),new x(`vvSizeFallback`,e=>e.vvSize.fallback)),r.code.add(f`
    vec2 getSize() {
      float value = ${a.getTextureAttribute(`sizeFeatureAttribute`)};
      if (isnan(value)) {
        return vvSizeFallback.xz;
      }
      return size * clamp(vvSizeOffset + value * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).xz;
    }
    `)):r.code.add(f`vec2 getSize(){
return size;
}`),c?(r.constants.add(`vvOpacityNumber`,`int`,J),r.uniforms.add(new w(`vvOpacityValues`,J,e=>e.vvOpacity.values),new w(`vvOpacityOpacities`,J,e=>e.vvOpacity.opacityValues),new g(`vvOpacityFallback`,e=>e.vvOpacity.fallback,{supportsNaN:!0})),r.code.add(f`
    vec4 applyOpacity(vec4 color) {
      // if we encounter NaN in the color it means the color is in the fallback case where the symbol color
      // is not defined and there is no valid color visual variable override. In this case just return a fully
      // transparent color
      if (isnan(color.r)) {
        return vec4(0);
      }

      float value = ${a.getTextureAttribute(`opacityFeatureAttribute`)};

      if (isnan(value)) {
        // If there is a color vv then it will already have taken care of applying the fallback
        return ${d(s,`color`,`vec4(color.rgb, vvOpacityFallback)`)};
      }

      if (value <= vvOpacityValues[0]) {
        return vec4(color.rgb, vvOpacityOpacities[0]);
      }

      for (int i = 1; i < vvOpacityNumber; ++i) {
        if (vvOpacityValues[i] >= value) {
          float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
          return vec4(color.rgb, mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f));
        }
      }

      return vec4( color.rgb, vvOpacityOpacities[vvOpacityNumber - 1]);
    }
    `)):r.code.add(f`vec4 applyOpacity(vec4 color){
return color;
}`),s?(r.constants.add(`vvColorNumber`,`int`,v),r.uniforms.add(new w(`vvColorValues`,v,e=>e.vvColor.values),new C(`vvColorColors`,v,e=>e.vvColor.colors),new de(`vvColorFallback`,e=>e.vvColor.fallback)),r.code.add(f`
    vec4 getColor() {
      float value = ${a.getTextureAttribute(`colorFeatureAttribute`)};
      if (isnan(value)) {
        return applyOpacity(vvColorFallback);
      }

      if (value <= vvColorValues[0]) {
        return applyOpacity(vvColorColors[0]);
      }

      for (int i = 1; i < vvColorNumber; ++i) {
        if (vvColorValues[i] >= value) {
          float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
          return applyOpacity(mix(vvColorColors[i-1], vvColorColors[i], f));
        }
      }

      return applyOpacity(vvColorColors[vvColorNumber - 1]);
    }
    `)):r.code.add(f`vec4 getColor(){
return applyOpacity(vec4(1, 1, 1, 1));
}`),r.include(E),r.code.add(f`
    vec3 decompressAxis(vec2 axis) {
      float z = 1.0 - abs(axis.x) - abs(axis.y);
      return normalize(vec3(axis + sign(axis) * min(z, 0.0), z));
    }

    float getProfileRotation() {
      return PI * ${a.getTextureAttribute(`profileRotation`)};
    }

    float getMaxStretchDistance() {
      return ${a.getTextureAttribute(`pathMaxStretchDistance`)};
    }

    vec3 getFrameUp() {
      return decompressAxis(${a.getTextureAttribute(`profileUp`)});
    }

    vec3 getFrameRight() {
      return decompressAxis(${a.getTextureAttribute(`profileRight`)});
    }
  `),r.code.add(f`
    vec3 getFrameRotationUp() {
      return ${t.upVectorAlignment===1?f`decompressAxis(${a.getTextureAttribute(`pathRotationUp`)})`:f`getFrameUp()`};
    }
  `),e.include(at,t),r.code.add(f`
  vec3 calculateVPos(ExtrudedVertex extrudedVertex) {
    vec2 size = getSize();
    vec3 origin = ${a.getTextureAttribute(`position`)};
    vec3 right = extrudedVertex.frame.right;
    vec3 up = extrudedVertex.frame.up;
    vec2 profileVertex = extrudedVertex.profileVertex * size;
    `),r.code.add(f`if(extrudedVertex.isCap) {
float positionOffsetAlongProfilePlaneNormal = extrudedVertex.capPositionOffset * size[0];
vec3 forward = cross(up, right);
vec3 offset = right * profileVertex.x + up * profileVertex.y + forward * positionOffsetAlongProfilePlaneNormal;
return origin + offset;
}
vec2 rotationRight = extrudedVertex.rotationRight;
float maxDistance = extrudedVertex.maxDistance;`),r.code.add(f`rotationRight *= size;
rotationRight = length(rotationRight) > 0.0 ? normalize(rotationRight) : vec2(0, 0);
float rx = dot(profileVertex, rotationRight);
if (abs(rx) > maxDistance) {
vec2 rotationUp = vec2(-rotationRight.y, rotationRight.x);
float ry = dot(profileVertex, rotationUp);
profileVertex = rotationRight * maxDistance * sign(rx) + rotationUp * ry;
}
vec3 offset = right * profileVertex.x + up * profileVertex.y;
return origin + offset;
}`),r.code.add(f`vec3 localNormal(ExtrudedVertex extrudedVertex) {
vec3 right = extrudedVertex.frame.right;
vec3 up = extrudedVertex.frame.up;
vec2 profileNormal = extrudedVertex.profileNormal;
vec3 normal = right * profileNormal.x + up * profileNormal.y;
if(extrudedVertex.isCap) {
vec3 forward = cross(up, right);
normal += forward * extrudedVertex.capNormalOffset;
}
return normal;
}`)}var J,Y;function X(){return(X=e((()=>{o(),Ze(),q(),ve(),b(),ue(),S(),_(),fe(),p(),Qe(),R(),B(),ae(),J=8,Y=class extends oe{constructor(){super(...arguments),this.numJoinSubdivisions=1,this.size=r(1,1),this.cutoffAngle=0,this.profile=I.center}}})))()}function Z(e){let t=new ne,{vertex:n,fragment:r,varyings:i}=t;me(n,e),i.add(`vpos`,`vec3`,{invariant:!0}),t.include(ot,e);let{output:a,spherical:o,pbrMode:s,snowCover:c,offsetBackfaces:l}=e;switch((ie(a)||a===11)&&(t.include(D),t.include(Ye,e),t.include(le,e),l&&(T(n,e),t.include(Pe)),i.add(`vnormal`,`vec3`),i.add(`vcolor`,`vec4`),n.main.add(f`
      ExtrudedVertex extrudedVertex = evaluateVertex();
      vpos = calculateVPos(extrudedVertex);
      vnormal = normalize(localNormal(extrudedVertex));
      gl_Position = transformPosition(proj, view, vpos);
      ${d(l,`gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vnormal, cameraPosition);`)}

      forwardObjectAndLayerIdColor();
      vcolor = getColor();
      forwardLinearDepthToReadShadowMap();`)),a){case 0:case 1:case 2:t.include(Ge,e),r.include(Ie,e),r.include(Fe,e),t.include(Ue,e),r.include(y,e),t.include(Se,e),T(r,e),Le(r),Be(r),r.uniforms.add(n.uniforms.get(`localOrigin`),new x(`ambient`,e=>e.ambient),new x(`diffuse`,e=>e.diffuse),new g(`opacity`,e=>e.opacity)),r.include(_e),r.include(Je,e),He(r),r.main.add(f`
        discardBySlice(vpos);

        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        shadingParams.normalView = vnormal;
        vec3 normal = shadingNormal(shadingParams);
        float ssao = evaluateAmbientOcclusionInverse();

        vec3 posWorld = vpos + localOrigin;
        vec3 normalGround = ${o?`normalize(posWorld);`:`vec3(0.0, 0.0, 1.0);`}

        vec3 albedo = vcolor.rgb * max(ambient, diffuse); // combine the old material parameters into a single one
        float combinedOpacity = vcolor.a * opacity;

        ${d(c,f`float snow = getSnow(normal, normalGround);
                 albedo = mix(albedo, vec3(1), snow);
                 ssao = mix(ssao, 1.0, snow);`)}

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        float shadow = readShadow(additionalAmbientScale, vpos);

        ${d(s===2,`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];\n           ${d(c,`mrr = applySnowToMRR(mrr, snow);`)}`)}

        vec3 shadedColor = ${s===2?`evaluateSceneLightingPBR(normal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, additionalAmbientIrradiance);`:`evaluateSceneLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        vec4 finalColor = vec4(shadedColor, combinedOpacity);
        outputColorHighlightOLID(applySlice(finalColor, vpos), albedo ${d(c,`, snow`)});`);break;case 3:t.include(D),n.main.add(f`ExtrudedVertex extrudedVertex = evaluateVertex();
vpos = calculateVPos(extrudedVertex);
gl_Position = transformPosition(proj, view, vpos);`),t.fragment.include(y,e),r.main.add(f`discardBySlice(vpos);`);break;case 5:case 6:case 7:case 8:t.include(D),Oe(t),i.add(`depth`,`float`),n.main.add(f`ExtrudedVertex extrudedVertex = evaluateVertex();
vpos = calculateVPos(extrudedVertex);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);`),t.fragment.include(y,e),t.include(Me,e),r.main.add(f`discardBySlice(vpos);
outputDepth(depth);`);break;case 11:t.fragment.include(y,e),r.main.add(f`discardBySlice(vpos);
outputObjectAndLayerIdColor();`);break;case 4:t.include(D),t.include(k,e),pe(n),i.add(`vnormal`,`vec3`),n.main.add(f`ExtrudedVertex extrudedVertex = evaluateVertex();
vpos = calculateVPos(extrudedVertex);
vnormal = normalize((viewNormal * vec4(localNormal(extrudedVertex), 1.0)).xyz);
gl_Position = transformPosition(proj, view, vpos);`),t.fragment.include(y,e),r.main.add(f`discardBySlice(vpos);
vec3 normal = normalize(vnormal);
if (gl_FrontFacing == false) normal = -normal;
fragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);`);break;case 10:t.include(D),t.include(k,e),i.add(`vnormal`,`vec3`),n.main.add(f`ExtrudedVertex extrudedVertex = evaluateVertex();
vpos = calculateVPos(extrudedVertex);
gl_Position = transformPosition(proj, view, vpos);`),t.fragment.include(y,e),t.include(xe,e),r.main.add(f`discardBySlice(vpos);
calculateOcclusionAndOutputHighlight();`)}return t}var Q;function $(){return($=e((()=>{ke(),Ne(),se(),Ae(),ce(),X(),je(),be(),ze(),Re(),Ve(),We(),Xe(),qe(),O(),ge(),he(),b(),_(),p(),Ke(),Ce(),re(),Q=Object.freeze(Object.defineProperty({__proto__:null,build:Z},Symbol.toStringTag,{value:`Module`}))})))()}export{Y as a,rt as c,R as d,tt as f,X as i,I as l,nt as m,Q as n,B as o,A as p,$ as r,z as s,Z as t,L as u};