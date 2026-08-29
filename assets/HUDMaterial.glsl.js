import{n as e}from"./rolldown-runtime.js";import{O as t,T as n,x as r}from"./vec2.js";import{o as i,r as ee}from"./vec4f64.js";import{o as a,s as o}from"./vec2f64.js";import{n as s,r as c,t as l}from"./glsl.js";import{n as te,t as u}from"./IntegerPassUniform.js";import{n as d,t as f}from"./ShaderBuilder.js";import{n as p,t as m}from"./FloatPassUniform.js";import{n as h,t as g}from"./Texture2DPassUniform.js";import{p as _}from"./ShaderOutput.js";import{a as v,n as ne}from"./Slice.glsl.js";import{n as y,t as b}from"./ObjectAndLayerIdColor.glsl.js";import{n as re,t as x}from"./VisualVariables.glsl.js";import{n as S,t as C}from"./Float4PassUniform.js";import{i as ie,n as w,r as T,t as E}from"./ScreenSizePerspective.glsl.js";import{a as D,r as O}from"./View.glsl.js";import{n as k,t as ae}from"./ColorConversion.glsl.js";import{n as oe,t as A}from"./PositionOutsideClipSpace.js";import{n as j,t as se}from"./Float4BindUniform.js";import{n as M,t as ce}from"./alphaCutoff.glsl.js";import{n as N,t as P}from"./Float2PassUniform.js";import{n as F,t as I}from"./OutputHighlight.glsl.js";import{n as L,t as R}from"./Texture2DBindUniform.js";import{n as z,t as B}from"./OutputColorHighlightOLID.glsl.js";import{n as V,r as H}from"./FocusAreaColorNode.js";import{r as U,t as W}from"./ReadDepth.glsl.js";import{i as G,n as le,r as ue,t as de}from"./AlignPixel.glsl.js";function K(e){let n=new d;n.include(ue,e),n.vertex.include(ne,e);let{output:r,hasOcclusionTexture:i,signedDistanceFieldEnabled:a,pixelSnappingEnabled:o,hasEmission:l,hasScreenSizePerspective:u,debugDrawLabelBorder:f,hasVVSize:m,hasVVColor:h,hasRotation:v,occludedFragmentFade:y,sampleSignedDistanceFieldTexelCenter:x,hasVertexColor:S,hasVertexSize:w,hasVertexRotation:O,hasVertexUVi:k}=e;n.include(T),n.include(re,e),n.include(b,e),n.include(z,e);let{vertex:A,fragment:j}=n;j.include(ae),j.code.add(c`
    vec4 applyFocusAreaStyle(vec4 color, int style) {
      const float factor = 0.46;
      const float factorBright = 0.32;

      if (style == ${c.int(0)}) {
        float luma = (color.r + color.g + color.b) / 3.0;
        float bright = luma * (1.0 - 0.6 * factorBright) + 0.6 * factorBright * color.a;
        float brightScaled = bright * factorBright;
        return vec4(brightScaled, brightScaled, brightScaled, color.a * factorBright);
      }

      float darkScaled = factor * factor;
      return vec4(color.rgb * darkScaled, color.a * factor);
    }
  `),n.varyings.add(`vcolor`,`vec4`),n.varyings.add(`vtc`,`vec2`),n.varyings.add(`vsize`,`vec2`);let M=r===10;A.uniforms.add(new se(`viewport`,e=>e.camera.fullViewport),new P(`screenOffset`,(e,n)=>t(X,2*e.screenOffset[0]*n.camera.pixelRatio,2*e.screenOffset[1]*n.camera.pixelRatio)),new P(`anchorPosition`,e=>J(e)),new C(`materialColor`,({color:e})=>e),new p(`materialRotation`,e=>e.rotation),new P(`materialSize`,e=>e.size),new g(`tex`,e=>e.texture)),D(A),a&&(A.uniforms.add(new C(`outlineColor`,e=>e.outlineColor)),j.uniforms.add(new C(`outlineColor`,e=>q(e)?e.outlineColor:ee),new p(`outlineSize`,e=>q(e)?e.outlineSize:0))),o&&A.include(le),u&&(ie(A),E(A)),f&&n.varyings.add(`debugBorderCoords`,`vec4`),n.attributes.add(`uv0`,`vec2`),k&&n.attributes.add(`uvi`,`vec4`),S&&n.attributes.add(`color`,`vec4`),w&&n.attributes.add(`size`,`vec2`),O&&n.attributes.add(`rotation`,`float`),(m||h)&&n.attributes.add(`featureAttribute`,`vec4`),A.main.add(c`
    ProjectHUDAux projectAux;
    vec4 posProj = projectPositionHUD(projectAux);
    forwardObjectAndLayerIdColor();

    if (rejectBySlice(projectAux.posModel)) {
      gl_Position = ${oe};
      return;
    }

    vec2 vertexSize = materialSize${s(w,` * size`)};
    vec2 inputSize;
    ${s(u,c`
        inputSize = screenSizePerspectiveScaleVec2(vertexSize, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
        vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);`,c`
        inputSize = vertexSize;
        vec2 screenOffsetScaled = screenOffset;`)}
    ${s(m,c`inputSize *= vvScale(featureAttribute).xx;`)}

    vec2 combinedSize = inputSize * pixelRatio;
    vec4 quadOffset = vec4(0.0);
  `);let N=c`
  ${s(k,c`
    vec2 texSize = vec2(textureSize(tex, 0));
    vec2 uv = mix(uvi.xy, uvi.zw, bvec2(uv0)) / texSize;
    `,c`
    vec2 uv = mix(vec2(0.), vec2(1.), bvec2(uv0));
    `)}

    quadOffset.xy = (uv0 - anchorPosition) * 2.0 * combinedSize;

    ${s(v,c`
        float angle = radians(materialRotation${s(O,` + rotation`)});
        float cosAngle = cos(angle);
        float sinAngle = sin(angle);
        mat2 rotate = mat2(cosAngle, -sinAngle, sinAngle,  cosAngle);

        quadOffset.xy = rotate * quadOffset.xy;
      `)}

    quadOffset.xy = (quadOffset.xy + screenOffsetScaled) / viewport.zw * posProj.w;
  `,F=o?a?c`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:c`posProj += quadOffset;
if (inputSize.x == vertexSize.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:c`posProj += quadOffset;`;A.include(ce),A.main.add(c`
    ${N}
    ${h?`vcolor = interpolateVVColor(featureAttribute.y) * materialColor;`:S?`vcolor = color * materialColor;`:`vcolor = materialColor;`}

    ${s(r===11,c`vcolor.a = 1.0;`)}

    bool alphaDiscard = vcolor.a < alphaCutoff;
    ${s(a,`alphaDiscard = alphaDiscard && outlineColor.a < alphaCutoff;`)}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${F}
      gl_Position = posProj;
    }

    vtc = uv;

    ${s(f,c`debugBorderCoords = vec4(uv0, 1.5 / combinedSize);`)}
    vsize = inputSize;
  `);let L=_(r)&&e.hasFocusAreaStyle&&!e.draped;switch(j.uniforms.add(new g(`tex`,e=>e.texture)),L&&j.uniforms.add(new te(`focusAreaStyle`,e=>Y(e.focusAreaStyle))),y&&!M&&(j.include(W),j.uniforms.add(new R(`depthMap`,e=>e.mainDepth),new p(`occludedOpacity`,e=>e.occludedFragmentOpacity?.value??1))),i&&j.uniforms.add(new R(`texOcclusion`,e=>e.hudOcclusion?.attachment)),f?j.main.add(`
        float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));
        // don't discard fragments on debug border
        float textureAlphaCutoff = isBorder > 0.0 ? 0.0 : alphaCutoff;
      `):j.main.add(`float textureAlphaCutoff = alphaCutoff;`),j.main.add(`vec2 samplePos = vtc;`),x&&j.main.add(c`float txSize = float(textureSize(tex, 0).x);
float texelSize = 1.0 / txSize;
vec2 scaleFactor = (vsize - txSize) * texelSize;
samplePos += (vec2(1.0, -1.0) * texelSize) * scaleFactor;`),a?j.main.add(c`
      vec4 fillPixelColor = vcolor;

      // Get distance in output units (i.e. pixels)

      float sdf = texture(tex, samplePos).r;
      float pixelDistance = sdf * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - pixelDistance, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(pixelDistance) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < textureAlphaCutoff ||
          fillPixelColor.a + outlinePixelColor.a < alphaCutoff
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
                              vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        ${s(!M,c`fragColor = vec4(compositeColor, compositeAlpha);`)}
      } else {
        if (fillAlphaFactor < textureAlphaCutoff) {
          discard;
        }

        ${s(!M,c`fragColor = premultiplyAlpha(fillPixelColor);`)}
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-pixelDistance/vsize.x*2.0, 0.0, 1.0), clamp(pixelDistance/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `):j.main.add(c`
        vec4 texColor = texture(tex, samplePos, -0.5);
        if (texColor.a < textureAlphaCutoff) {
          discard;
        }
        ${s(!M,c`fragColor = texColor * premultiplyAlpha(vcolor);`)}
      `),y&&!M&&j.main.add(c`
        float zSample = -linearizeDepth(texelFetch(depthMap, ivec2(gl_FragCoord.xy), 0).x);
        float zFragment = -linearizeDepth(gl_FragCoord.z);
        if (zSample < ${c.float(1-Z)} * zFragment) {
          fragColor *= occludedOpacity;
        }
      `),i&&j.main.add(`fragColor *= texelFetch(texOcclusion, ivec2(gl_FragCoord.xy), 0).r;`),!M&&f&&j.main.add(`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`),r===2&&j.main.add(c`if (fragColor.a < alphaCutoff) {
discard;
}`),L&&j.main.add(c`fragColor = applyFocusAreaStyle(fragColor, focusAreaStyle);`),_(r)&&l&&j.main.add(`fragEmission = vec4(0.0);`),r){case 1:j.main.add(`
        fragColor = vec4(fragColor.rgb * floatBlendOutputScale, fragColor.a);
        fragAlpha = fragColor.a * floatBlendOutputScale;
      `);break;case 2:j.main.add(`fragColor.rgb /= fragColor.a;`);break;case 11:j.main.add(`outputObjectAndLayerIdColor();`);break;case 10:n.include(I,e),j.main.add(`outputHighlight(false);`)}return n}function q(e){return e.outlineColor[3]>0&&e.outlineSize>0}function J(e){return e.textureIsSignedDistanceField?fe(e.anchorPosition,e.distanceFieldBoundingBox,X):n(X,e.anchorPosition),X}function fe(e,n,r){t(r,e[0]*(n[2]-n[0])+n[0],e[1]*(n[3]-n[1])+n[1])}var Y,X,Z,Q;function $(){return($=e((()=>{r(),a(),i(),v(),y(),de(),G(),F(),U(),A(),x(),k(),w(),O(),N(),j(),S(),m(),l(),u(),L(),h(),H(),M(),B(),f(),Y=e=>e?V[e]:0,X=o(),Z=.08,Q=Object.freeze(Object.defineProperty({__proto__:null,anchorPosition:J,build:K},Symbol.toStringTag,{value:`Module`}))})))()}export{$ as i,J as n,Q as r,K as t};