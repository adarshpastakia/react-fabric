import{n as e}from"./chunk.js";import{d as t,u as n}from"./mat3.js";import{n as r,t as i}from"./mat3f64.js";import{l as a,o}from"./vec3f64.js";import{i as s,n as c}from"./mat4f64.js";import{E as l,P as u}from"./vec3.js";import{n as d,r as f,t as p}from"./glsl.js";import{a as m,o as ee}from"./Emissions.glsl.js";import{n as h,t as g}from"./Texture2DPassUniform.js";import{n as te,t as _}from"./IntegerPassUniform.js";import{r as v}from"./NoParameters.js";import{n as y,r as b,t as x}from"./doublePrecisionUtils.js";import{n as S,r as C}from"./Slice.glsl.js";import{n as ne,r as w}from"./MaterialUtil.js";import{n as re,t as ie}from"./ObjectAndLayerIdColor.glsl.js";import{a as T,i as E,n as D,r as O,s as k,t as A}from"./VisualVariables.glsl.js";import{n as j,t as M}from"./Matrix3PassUniform.js";import{n as N,t as P}from"./Float3BindUniform.js";import{i as F,n as I,r as L}from"./View.glsl.js";import{n as R,t as z}from"./OutputHighlight.glsl.js";import{n as B,t as V}from"./Matrix4PassUniform.js";import{n as H,r as U}from"./ForwardLinearDepthToWriteShadowMap.glsl.js";import{i as W,r as G}from"./Matrix3DrawUniform.js";import{n as K,t as q}from"./Transform.glsl.js";import{n as J,t as Y}from"./OutputDepth.glsl.js";import{n as ae,t as oe}from"./NormalAttribute.glsl.js";import{a as se,n as ce,o as le,t as X}from"./DiscardOrAdjustAlpha.glsl.js";function ue(e){e.vertex.code.add(f`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}var de=e((()=>{p()}));function fe(e,t){t.instancedColor?(e.attributes.add(`instanceColor`,`vec4`),e.vertex.include(k),e.vertex.include(E),e.vertex.include(O),e.vertex.code.add(f`
      MaskedColor applyInstanceColor(MaskedColor color) {
        return multiplyMaskedColors( color, createMaskedFromUInt8NaNColor(${`instanceColor`}));
      }
    `)):e.vertex.code.add(f`MaskedColor applyInstanceColor(MaskedColor color) {
return color;
}`)}var pe=e((()=>{T(),p()}));function me(e,n){let{hasModelTransformation:r,instancedDoublePrecision:i,instanced:a,output:o,hasVertexTangents:c}=n;r&&(e.vertex.uniforms.add(new B(`model`,e=>e.modelTransformation??s)),e.vertex.uniforms.add(new j(`normalLocalOriginFromModel`,e=>(t(Z,e.modelTransformation??s),Z)))),a&&i&&(e.attributes.add(`instanceModelOriginHi`,`vec3`),e.attributes.add(`instanceModelOriginLo`,`vec3`),e.attributes.add(`instanceModel`,`mat3`),e.attributes.add(`instanceModelNormal`,`mat3`));let l=e.vertex;i&&(l.include(G,n),l.uniforms.add(new P(`viewOriginHi`,e=>y(u(Q,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]),Q)),new P(`viewOriginLo`,e=>b(u(Q,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]),Q)))),l.code.add(f`
    vec3 getVertexInLocalOriginSpace() {
      return ${r?i?`(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz`:`(model * localPosition()).xyz`:i?`instanceModel * localPosition().xyz`:`localPosition().xyz`};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${i?f`
          // Issue: (should be resolved now with invariant position) https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -instanceModelOriginHi, -instanceModelOriginLo);
          return _pos - originDelta;`:`return vpos;`}
    }
    `),l.code.add(f`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${r?i?`normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)`:`normalLocalOriginFromModel * _normal.xyz`:i?`instanceModelNormal * _normal.xyz`:`_normal.xyz`});
    }
    `),o===2&&(F(l),l.code.add(f`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${r?i?`vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)`:`vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)`:i?`vec4(instanceModelNormal * _normal.xyz, 1.0)`:`_normal`}).xyz);
    }
    `)),c&&l.code.add(f`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${r?i?`return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);`:`return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);`:i?`return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);`:`return _tangent;`}
    }`)}var Z,Q,he=e((()=>{n(),r(),c(),l(),o(),W(),L(),N(),p(),M(),V(),x(),v(),Z=i(),Q=a()}));function ge(e,t){e.varyings.add(`colorMixMode`,`int`),e.varyings.add(`opacityMixMode`,`int`),e.vertex.uniforms.add(new te(`symbolColorMixMode`,e=>w[e.colorMixMode])),t.hasSymbolColors?(e.vertex.include(k),e.vertex.include(E),e.vertex.include(O),e.attributes.add(`symbolColor`,`vec4`),e.vertex.code.add(f`
    MaskedColor applySymbolColor(MaskedColor color) {
      return multiplyMaskedColors(color, createMaskedFromUInt8NaNColor(${`symbolColor`}));
    }
  `)):e.vertex.code.add(f`MaskedColor applySymbolColor(MaskedColor color) {
return color;
}`),e.vertex.code.add(f`
    void forwardColorMixMode(bvec4 mask) {
      colorMixMode = mask.r ? ${f.int(w.ignore)} : symbolColorMixMode;
      opacityMixMode = mask.a ? ${f.int(w.ignore)} : symbolColorMixMode;
    }
  `)}var $=e((()=>{T(),p(),_(),ne()}));function _e(e,t){let{vertex:n,fragment:r,varyings:i}=e,{hasColorTexture:a,alphaDiscardMode:o}=t,s=a&&o!==1,{output:c,normalType:l,hasColorTextureTransform:u}=t;switch(c){case 1:I(n,t),e.include(K),r.include(S,t),e.include(m,t),s&&r.uniforms.add(new g(`tex`,e=>e.texture)),n.main.add(f`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include(X,t),r.main.add(f`
        discardBySlice(vpos);
        ${d(s,f`vec4 texColor = texture(tex, ${u?`colorUV`:`vuv0`});
                discardOrAdjustAlpha(texColor);`)}`);break;case 3:case 4:case 5:case 6:case 9:I(n,t),e.include(K),e.include(m,t),e.include(D,t),e.include(Y,t),r.include(S,t),e.include(ie,t),H(e),i.add(`depth`,`float`,{invariant:!0}),s&&r.uniforms.add(new g(`tex`,e=>e.texture)),n.main.add(f`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),e.include(X,t),r.main.add(f`
        discardBySlice(vpos);
        ${d(s,f`vec4 texColor = texture(tex, ${u?`colorUV`:`vuv0`});
               discardOrAdjustAlpha(texColor);`)}
        ${c===9?f`outputObjectAndLayerIdColor();`:f`outputDepth(depth);`}`);break;case 2:{I(n,t),e.include(K),e.include(ae,t),e.include(se,t),e.include(m,t),e.include(D,t),s&&r.uniforms.add(new g(`tex`,e=>e.texture)),l===2&&i.add(`vPositionView`,`vec3`,{invariant:!0});let a=l===0||l===1;n.main.add(f`
        vpos = getVertexInLocalOriginSpace();
        ${a?f`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:f`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();`),r.include(S,t),e.include(X,t),r.main.add(f`
        discardBySlice(vpos);
        ${d(s,f`vec4 texColor = texture(tex, ${u?`colorUV`:`vuv0`});
                discardOrAdjustAlpha(texColor);`)}

        ${l===2?f`vec3 normal = screenDerivativeNormal(vPositionView);`:f`vec3 normal = normalize(vNormalWorld);
                    if (gl_FrontFacing == false){
                      normal = -normal;
                    }`}
        fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case 8:I(n,t),e.include(K),e.include(m,t),e.include(D,t),s&&r.uniforms.add(new g(`tex`,e=>e.texture)),n.main.add(f`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),r.include(S,t),e.include(X,t),e.include(z,t),r.main.add(f`
        discardBySlice(vpos);
        ${d(s,f`vec4 texColor = texture(tex, ${u?`colorUV`:`vuv0`});
                discardOrAdjustAlpha(texColor);`)}
        calculateOcclusionAndOutputHighlight();`)}}var ve=e((()=>{U(),C(),q(),oe(),re(),ee(),le(),J(),R(),A(),ce(),L(),p(),h()}));export{he as a,fe as c,$ as i,ue as l,ve as n,me as o,ge as r,pe as s,_e as t,de as u};