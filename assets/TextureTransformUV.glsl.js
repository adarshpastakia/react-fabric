import{n as e}from"./rolldown-runtime.js";import{d as t,u as n}from"./mat3.js";import{i as r,n as i,t as a}from"./mat3f64.js";import{l as o,o as s}from"./vec3f64.js";import{D as c,F as l}from"./vec3.js";import{i as u,n as ee}from"./mat4f64.js";import{n as d,r as f,t as p}from"./glsl.js";import{n as te,t as m}from"./IntegerPassUniform.js";import{r as ne}from"./NoParameters.js";import{n as h,t as g}from"./Texture2DPassUniform.js";import{n as _,r as re,t as ie}from"./doublePrecisionUtils.js";import{n as ae,r as v}from"./MaterialUtil.js";import{a as oe,i as y}from"./Slice.glsl.js";import{n as b,t as x}from"./ObjectAndLayerIdColor.glsl.js";import{a as S,i as C,n as w,r as T,s as E,t as se}from"./VisualVariables.glsl.js";import{n as D,t as O}from"./Matrix3PassUniform.js";import{n as ce,t as k}from"./Float3BindUniform.js";import{i as A,n as j,r as M}from"./View.glsl.js";import{c as N,s as P}from"./Emissions.glsl.js";import{n as F,t as I}from"./OutputHighlight.glsl.js";import{n as L,t as R}from"./Matrix4PassUniform.js";import{n as z,t as B}from"./DoublePrecision.glsl.js";import{n as V,r as H}from"./ForwardLinearDepthToWriteShadowMap.glsl.js";import{n as U,t as W}from"./Transform.glsl.js";import{n as G,t as le}from"./OutputDepth.glsl.js";import{n as ue,t as de}from"./NormalAttribute.glsl.js";import{n as fe,o as pe,s as me,t as K}from"./DiscardOrAdjustAlpha.glsl.js";function he(e,t){t.instancedColor?(e.attributes.add(`instanceColor`,`vec4`),e.vertex.include(E),e.vertex.include(C),e.vertex.include(T),e.vertex.code.add(f`
      MaskedColor applyInstanceColor(MaskedColor color) {
        return multiplyMaskedColors( color, createMaskedFromUInt8NaNColor(${`instanceColor`}));
      }
    `)):e.vertex.code.add(f`MaskedColor applyInstanceColor(MaskedColor color) {
return color;
}`)}function q(){return(q=e((()=>{S(),p()})))()}function ge(e,n){let{hasModelTransformation:r,instancedDoublePrecision:i,instanced:a,output:o,hasVertexTangents:s}=n;r&&(e.vertex.uniforms.add(new L(`model`,e=>e.modelTransformation??u)),e.vertex.uniforms.add(new D(`normalLocalOriginFromModel`,e=>(t(J,e.modelTransformation??u),J)))),a&&i&&(e.attributes.add(`instanceModelOriginHi`,`vec3`),e.attributes.add(`instanceModelOriginLo`,`vec3`),e.attributes.add(`instanceModel`,`mat3`),e.attributes.add(`instanceModelNormal`,`mat3`));let c=e.vertex;i&&(c.include(B),c.uniforms.add(new k(`viewOriginHi`,e=>_(l(Y,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]),Y)),new k(`viewOriginLo`,e=>re(l(Y,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]),Y)))),c.code.add(f`
    vec3 getVertexInLocalOriginSpace() {
      return ${r?i?`(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz`:`(model * localPosition()).xyz`:i?`instanceModel * localPosition().xyz`:`localPosition().xyz`};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${i?f`
          // Issue: (should be resolved now with invariant position) https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -instanceModelOriginHi, -instanceModelOriginLo);
          return _pos - originDelta;`:`return vpos;`}
    }
    `),c.code.add(f`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${r?i?`normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)`:`normalLocalOriginFromModel * _normal.xyz`:i?`instanceModelNormal * _normal.xyz`:`_normal.xyz`});
    }
    `),o===4&&(A(c),c.code.add(f`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${r?i?`vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)`:`vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)`:i?`vec4(instanceModelNormal * _normal.xyz, 1.0)`:`_normal`}).xyz);
    }
    `)),s&&c.code.add(f`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${r?i?`return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);`:`return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);`:i?`return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);`:`return _tangent;`}
    }`)}var J,Y;function X(){return(X=e((()=>{n(),i(),ee(),c(),s(),z(),M(),ce(),p(),O(),R(),ie(),ne(),J=a(),Y=o()})))()}function _e(e,t){e.varyings.add(`colorMixMode`,`int`),e.varyings.add(`opacityMixMode`,`int`),e.vertex.uniforms.add(new te(`symbolColorMixMode`,e=>v[e.colorMixMode])),t.hasSymbolColors?(e.vertex.include(E),e.vertex.include(C),e.vertex.include(T),e.attributes.add(`symbolColor`,`vec4`),e.vertex.code.add(f`
    MaskedColor applySymbolColor(MaskedColor color) {
      return multiplyMaskedColors(color, createMaskedFromUInt8NaNColor(${`symbolColor`}));
    }
  `)):e.vertex.code.add(f`MaskedColor applySymbolColor(MaskedColor color) {
return color;
}`),e.vertex.code.add(f`
    void forwardColorMixMode(bvec4 mask) {
      colorMixMode = mask.r ? ${f.int(v.ignore)} : symbolColorMixMode;
      opacityMixMode = mask.a ? ${f.int(v.ignore)} : symbolColorMixMode;
    }
  `)}function Z(){return(Z=e((()=>{S(),p(),m(),ae()})))()}function ve(e,t){let{vertex:n,fragment:r,varyings:i}=e,{hasColorTexture:a,alphaDiscardMode:o}=t,s=a&&o!==1,{output:c,normalType:l,hasColorTextureTransform:u}=t;switch(c){case 3:j(n,t),e.include(U),r.include(y,t),e.include(P,t),s&&r.uniforms.add(new g(`tex`,e=>e.texture)),n.main.add(f`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include(K,t),r.main.add(f`
        discardBySlice(vpos);
        ${d(s,f`vec4 texColor = texture(tex, ${u?`colorUV`:`vuv0`});
                discardOrAdjustAlpha(texColor);`)}`);break;case 5:case 6:case 7:case 8:case 11:j(n,t),e.include(U),e.include(P,t),e.include(w,t),e.include(le,t),r.include(y,t),e.include(x,t),V(e),i.add(`depth`,`float`,{invariant:!0}),s&&r.uniforms.add(new g(`tex`,e=>e.texture)),n.main.add(f`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),e.include(K,t),r.main.add(f`
        discardBySlice(vpos);
        ${d(s,f`vec4 texColor = texture(tex, ${u?`colorUV`:`vuv0`});
               discardOrAdjustAlpha(texColor);`)}
        ${c===11?f`outputObjectAndLayerIdColor();`:f`outputDepth(depth);`}`);break;case 4:{j(n,t),e.include(U),e.include(ue,t),e.include(me,t),e.include(P,t),e.include(w,t),s&&r.uniforms.add(new g(`tex`,e=>e.texture)),l===2&&i.add(`vPositionView`,`vec3`,{invariant:!0});let a=l===0||l===1;n.main.add(f`
        vpos = getVertexInLocalOriginSpace();
        ${a?f`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:f`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();`),r.include(y,t),e.include(K,t),r.main.add(f`
        discardBySlice(vpos);
        ${d(s,f`vec4 texColor = texture(tex, ${u?`colorUV`:`vuv0`});
                discardOrAdjustAlpha(texColor);`)}

        ${l===2?f`vec3 normal = screenDerivativeNormal(vPositionView);`:f`vec3 normal = normalize(vNormalWorld);
                    if (gl_FrontFacing == false){
                      normal = -normal;
                    }`}
        fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case 10:j(n,t),e.include(U),e.include(P,t),e.include(w,t),s&&r.uniforms.add(new g(`tex`,e=>e.texture)),n.main.add(f`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),r.include(y,t),e.include(K,t),e.include(I,t),r.main.add(f`
        discardBySlice(vpos);
        ${d(s,f`vec4 texColor = texture(tex, ${u?`colorUV`:`vuv0`});
                discardOrAdjustAlpha(texColor);`)}
        calculateOcclusionAndOutputHighlight();`)}}function Q(){return(Q=e((()=>{H(),oe(),W(),de(),b(),N(),pe(),G(),F(),se(),fe(),M(),p(),h()})))()}function ye(e,t){t.hasColorTextureTransform?(e.varyings.add(`colorUV`,`vec2`),e.vertex.uniforms.add(new D(`colorTextureTransformMatrix`,e=>e.colorTextureTransformMatrix??r)).code.add(f`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(f`void forwardColorUV(){}`)}function be(e,t){t.hasNormalTextureTransform&&t.textureCoordinateType!==0?(e.varyings.add(`normalUV`,`vec2`),e.vertex.uniforms.add(new D(`normalTextureTransformMatrix`,e=>e.normalTextureTransformMatrix??r)).code.add(f`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(f`void forwardNormalUV(){}`)}function xe(e,t){t.hasEmissionTextureTransform&&t.textureCoordinateType!==0?(e.varyings.add(`emissiveUV`,`vec2`),e.vertex.uniforms.add(new D(`emissiveTextureTransformMatrix`,e=>e.emissiveTextureTransformMatrix??r)).code.add(f`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(f`void forwardEmissiveUV(){}`)}function Se(e,t){t.hasOcclusionTextureTransform&&t.textureCoordinateType!==0?(e.varyings.add(`occlusionUV`,`vec2`),e.vertex.uniforms.add(new D(`occlusionTextureTransformMatrix`,e=>e.occlusionTextureTransformMatrix??r)).code.add(f`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(f`void forwardOcclusionUV(){}`)}function Ce(e,t){t.hasMetallicRoughnessTextureTransform&&t.textureCoordinateType!==0?(e.varyings.add(`metallicRoughnessUV`,`vec2`),e.vertex.uniforms.add(new D(`metallicRoughnessTextureTransformMatrix`,e=>e.metallicRoughnessTextureTransformMatrix??r)).code.add(f`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(f`void forwardMetallicRoughnessUV(){}`)}function $(){return($=e((()=>{i(),p(),O()})))()}export{be as a,Q as c,X as d,ge as f,$ as i,_e as l,he as m,Se as n,Ce as o,q as p,xe as r,ve as s,ye as t,Z as u};