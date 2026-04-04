import{n as e}from"./chunk.js";import{C as t,b as n,h as r}from"./vec2.js";import{a as i,n as a}from"./vec4f64.js";import{a as o,r as s}from"./vec2f64.js";import{n as c,r as l,t as u}from"./glsl.js";import{n as d,t as f}from"./FloatPassUniform.js";import{n as p,t as m}from"./Texture2DPassUniform.js";import{n as h,t as g}from"./ShaderBuilder.js";import{o as ee,r as _}from"./Slice.glsl.js";import{n as v,t as te}from"./ObjectAndLayerIdColor.glsl.js";import{n as ne,t as y}from"./VisualVariables.glsl.js";import{n as b,t as x}from"./Float4PassUniform.js";import{i as S,n as C,r as re,t as ie}from"./ScreenSizePerspective.glsl.js";import{a as ae,r as w}from"./View.glsl.js";import{n as T,t as E}from"./ColorConversion.glsl.js";import{n as oe,t as D}from"./PositionOutsideClipSpace.js";import{n as O,t as se}from"./ReadDepth.glsl.js";import{n as k,t as A}from"./Texture2DBindUniform.js";import{n as j,t as M}from"./TerrainDepthTest.glsl.js";import{n as N,t as ce}from"./Float4BindUniform.js";import{n as P,t as F}from"./Float2PassUniform.js";import{n as I,t as L}from"./OutputHighlight.glsl.js";import{n as R,t as z}from"./AlphaCutoff.js";import{a as B,i as V,n as H,o as U,r as W,t as le}from"./HUDVisibility.glsl.js";function ue(e,t){let{vertex:n,fragment:r}=e;e.include(M,t),n.include(V),n.main.add(l`vec4 posProjCenter;
if (dot(position, position) > 0.0) {
ProjectHUDAux projectAux;
vec4 posProj = projectPositionHUD(projectAux);
posProjCenter = alignToPixelCenter(posProj, viewport.zw);
forwardViewPosDepth(projectAux.posView);
vec3 vpos = projectAux.posModel;
if (rejectBySlice(vpos)) {
posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
}
} else {
posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
}
gl_Position = posProjCenter;
gl_PointSize = 1.0;`),r.main.add(l`fragColor = vec4(1);
if(discardByTerrainDepth()) {
fragColor.g = 0.5;
}`)}var G=e((()=>{W(),j(),u()}));function K(e){let t=new h;if(t.include(B,e),t.vertex.include(ee,e),e.occlusionPass)return t.include(ue,e),t;let{output:r,oitPass:i,hasOcclusionTexture:o,signedDistanceFieldEnabled:s,useVisibilityPixel:u,pixelSnappingEnabled:f,hasEmission:p,hasScreenSizePerspective:g,debugDrawLabelBorder:_,hasVVSize:v,hasVVColor:y,hasRotation:b,occludedFragmentFade:C,sampleSignedDistanceFieldTexelCenter:w}=e;t.include(re),t.include(ne,e),t.include(te,e),u&&t.include(H);let{vertex:T,fragment:D}=t;D.include(E),t.varyings.add(`vcolor`,`vec4`),t.varyings.add(`vtc`,`vec2`),t.varyings.add(`vsize`,`vec2`);let O=r===8,k=O&&u;k&&t.varyings.add(`voccluded`,`float`),T.uniforms.add(new ce(`viewport`,e=>e.camera.fullViewport),new F(`screenOffset`,(e,t)=>n(Y,2*e.screenOffset[0]*t.camera.pixelRatio,2*e.screenOffset[1]*t.camera.pixelRatio)),new F(`anchorPosition`,e=>J(e)),new x(`materialColor`,({color:e})=>e),new d(`materialRotation`,e=>e.rotation),new m(`tex`,e=>e.texture)),ae(T),s&&(T.uniforms.add(new x(`outlineColor`,e=>e.outlineColor)),D.uniforms.add(new x(`outlineColor`,e=>q(e)?e.outlineColor:a),new d(`outlineSize`,e=>q(e)?e.outlineSize:0))),f&&T.include(V),g&&(S(T),ie(T)),_&&t.varyings.add(`debugBorderCoords`,`vec4`),t.attributes.add(`uv0`,`vec2`),t.attributes.add(`uvi`,`vec4`),t.attributes.add(`color`,`vec4`),t.attributes.add(`size`,`vec2`),t.attributes.add(`rotation`,`float`),(v||y)&&t.attributes.add(`featureAttribute`,`vec4`),T.main.add(l`
    ProjectHUDAux projectAux;
    vec4 posProj = projectPositionHUD(projectAux);
    forwardObjectAndLayerIdColor();

    if (rejectBySlice(projectAux.posModel)) {
      gl_Position = ${oe};
      return;
    }

    vec2 inputSize;
    ${c(g,l`
        inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
        vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);`,l`
        inputSize = size;
        vec2 screenOffsetScaled = screenOffset;`)}
    ${c(v,l`inputSize *= vvScale(featureAttribute).xx;`)}

    vec2 combinedSize = inputSize * pixelRatio;
    vec4 quadOffset = vec4(0.0);

    ${c(u,l`
        bool visible = testHUDVisibility(posProj);
        if (!visible) {
          vtc = vec2(0.0);
          ${c(_,`debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);`)}
          return;
        }
      `)}
    ${c(k,l`voccluded = visible ? 0.0 : 1.0;`)}
  `);let j=l`
    vec2 uv = mix(uvi.xy, uvi.zw, bvec2(uv0));
    vec2 texSize = vec2(textureSize(tex, 0));
    uv = mix(vec2(1.0), uv / texSize, lessThan(uv, vec2(${Q})));
    quadOffset.xy = (uv0 - anchorPosition) * 2.0 * combinedSize;

    ${c(b,l`
        float angle = radians(materialRotation + rotation);
        float cosAngle = cos(angle);
        float sinAngle = sin(angle);
        mat2 rotate = mat2(cosAngle, -sinAngle, sinAngle,  cosAngle);

        quadOffset.xy = rotate * quadOffset.xy;
      `)}

    quadOffset.xy = (quadOffset.xy + screenOffsetScaled) / viewport.zw * posProj.w;
  `,M=f?s?l`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:l`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:l`posProj += quadOffset;`;T.main.add(l`
    ${j}
    ${y?`vcolor = interpolateVVColor(featureAttribute.y) * materialColor;`:`vcolor = color * materialColor;`}

    ${c(r===9,l`vcolor.a = 1.0;`)}

    bool alphaDiscard = vcolor.a < ${l.float(R)};
    ${c(s,`alphaDiscard = alphaDiscard && outlineColor.a < ${l.float(R)};`)}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${M}
      gl_Position = posProj;
    }

    vtc = uv;

    ${c(_,l`debugBorderCoords = vec4(uv0, 1.5 / combinedSize);`)}
    vsize = inputSize;
  `),D.uniforms.add(new m(`tex`,e=>e.texture)),C&&!O&&(D.include(se),D.uniforms.add(new A(`depthMap`,e=>e.mainDepth),new d(`occludedOpacity`,e=>e.occludedFragmentOpacity?.value??1))),o&&D.uniforms.add(new A(`texOcclusion`,e=>e.hudOcclusion?.attachment));let N=_?l`(isBorder > 0.0 ? 0.0 : ${l.float(R)})`:l.float(R),P=l`
    ${c(_,l`float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`)}

    vec2 samplePos = vtc;

    ${c(w,l`
      float txSize = float(textureSize(tex, 0).x);
      float texelSize = 1.0 / txSize;

      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      samplePos += (vec2(1.0, -1.0) * texelSize) * scaleFactor;`)}

    ${s?l`
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
          outlineAlphaFactor + fillAlphaFactor < ${N} ||
          fillPixelColor.a + outlinePixelColor.a < ${l.float(R)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
                              vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        ${c(!O,l`fragColor = vec4(compositeColor, compositeAlpha);`)}
      } else {
        if (fillAlphaFactor < ${N}) {
          discard;
        }

        ${c(!O,l`fragColor = premultiplyAlpha(fillPixelColor);`)}
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-pixelDistance/vsize.x*2.0, 0.0, 1.0), clamp(pixelDistance/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:l`
          vec4 texColor = texture(tex, samplePos, -0.5);
          if (texColor.a < ${N}) {
            discard;
          }
          ${c(!O,l`fragColor = texColor * premultiplyAlpha(vcolor);`)}
          `}

    ${c(C&&!O,l`
        float zSample = -linearizeDepth(texelFetch(depthMap, ivec2(gl_FragCoord.xy), 0).x);
        float zFragment = -linearizeDepth(gl_FragCoord.z);
        if (zSample < ${l.float(1-X)} * zFragment) {
          fragColor *= occludedOpacity;
        }
      `)}
    ${c(o,l`fragColor *= texelFetch(texOcclusion, ivec2(gl_FragCoord.xy), 0).r;`)}

    ${c(!O&&_,l`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`)}

    ${c(i===2,l`
    if (fragColor.a < ${l.float(R)}) {
      discard;
    }`)}
  `;switch(r){case 0:t.outputs.add(`fragColor`,`vec4`,0),p&&t.outputs.add(`fragEmission`,`vec4`,1),i===1&&t.outputs.add(`fragAlpha`,`float`,p?2:1),D.main.add(l`
        ${P}
        // Unlike other materials, the fragment shader outputs premultiplied colors.
        // Disable this for front face rendering for correct OIT compositing.
        ${c(i===2,l`fragColor.rgb /= fragColor.a;`)}
        ${c(p,l`fragEmission = vec4(0.0);`)}
        ${c(i===1,l`fragAlpha = fragColor.a;`)}`);break;case 9:D.main.add(l`
        ${P}
        outputObjectAndLayerIdColor();`);break;case 8:t.include(L,e),D.main.add(l`
        ${P}
        outputHighlight(${c(k,l`voccluded == 1.0`,l`false`)});`)}return t}function q(e){return e.outlineColor[3]>0&&e.outlineSize>0}function J(e){return e.textureIsSignedDistanceField?de(e.anchorPosition,e.distanceFieldBoundingBox,Y):t(Y,e.anchorPosition),Y}function de(e,t,r){n(r,e[0]*(t[2]-t[0])+t[0],e[1]*(t[3]-t[1])+t[1])}var Y,X,Z,Q,$,fe=e((()=>{r(),s(),i(),_(),v(),W(),U(),G(),le(),I(),O(),D(),y(),T(),C(),w(),P(),N(),b(),f(),u(),k(),p(),g(),z(),Y=o(),X=.08,Z=32e3,Q=l.float(Z),$=Object.freeze(Object.defineProperty({__proto__:null,build:K,calculateAnchorPosition:J,fullUV:Z},Symbol.toStringTag,{value:`Module`}))}));export{fe as a,Z as i,$ as n,G as o,K as r,J as t};