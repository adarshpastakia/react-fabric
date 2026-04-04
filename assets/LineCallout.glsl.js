import{n as e}from"./chunk.js";import{b as t,h as n}from"./vec2.js";import{a as r,n as i}from"./vec4f64.js";import{a,r as o}from"./vec2f64.js";import{n as s,r as c,t as l}from"./glsl.js";import{n as u,t as d}from"./FloatPassUniform.js";import{n as f,t as p}from"./ShaderBuilder.js";import{o as m,r as h}from"./Slice.glsl.js";import{n as g,t as _}from"./Float4PassUniform.js";import{n as v,t as y}from"./ScreenSizePerspective.glsl.js";import{n as b,t as x}from"./Float2BindUniform.js";import{n as S,t as C}from"./ReadDepth.glsl.js";import{n as w,t as T}from"./Texture2DBindUniform.js";import{n as E,t as D}from"./Float4BindUniform.js";import{n as O,t as k}from"./Float2PassUniform.js";import{n as A,t as j}from"./OutputColorHighlightOLID.glsl.js";import{a as M,i as N,n as P,o as F,r as I,t as L}from"./HUDVisibility.glsl.js";function R(e){e.include(C),e.uniforms.add(new T(`geometryDepthTexture`,e=>e.geometryDepth?.attachment)),e.code.add(c`bool geometryDepthTest(vec2 pos, float elementDepth) {
float geometryDepth = linearDepthFromTexture(geometryDepthTexture, pos);
return (elementDepth < (geometryDepth - 1.0));
}`)}var z=e((()=>{S(),l(),w()}));function B(e){let n=new f,{vertex:r,fragment:a}=n,{terrainDepthTest:o}=e;return r.include(N),n.include(M,e),n.vertex.include(m,e),e.hudDepth||n.include(j,e),n.attributes.add(`uv0`,`vec2`),r.uniforms.add(new D(`viewport`,e=>e.camera.fullViewport),new u(`lineSize`,(e,t)=>e.size>0?Math.max(1,e.size)*t.camera.pixelRatio:0),new x(`pixelToNDC`,e=>t(H,2/e.camera.fullViewport[2],2/e.camera.fullViewport[3])),new u(`borderSize`,(e,t)=>e.borderColor?t.camera.pixelRatio:0),new k(`screenOffset`,(e,n)=>t(H,e.horizontalScreenOffset*n.camera.pixelRatio,0))),n.varyings.add(`coverageSampling`,`vec4`),n.varyings.add(`lineSizes`,`vec2`),o&&n.varyings.add(`depth`,`float`),e.useVisibilityPixel&&n.include(P),e.hasScreenSizePerspective&&y(r),r.main.add(c`
    ProjectHUDAux projectAux;
    vec4 endPoint = projectPositionHUD(projectAux);

    vec3 vpos = projectAux.posModel;
    if (rejectBySlice(vpos)) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    }
    ${s(e.useVisibilityPixel,c`if (!testHUDVisibility(endPoint)) {
             gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
             return;
           }`)}

    ${e.hasScreenSizePerspective?c`vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
               vec2 screenOffsetScaled = applyScreenSizePerspectiveScaleFactorVec2(screenOffset, perspectiveFactor);`:`vec2 screenOffsetScaled = screenOffset;`}
    // Add view dependent polygon offset to get exact same original starting point. This is mostly used to get the
    // correct depth value
    vec3 posView = (view * vec4(position, 1.0)).xyz;
    ${s(o,`depth = posView.z;`)}

    applyHUDViewDependentPolygonOffset(centerOffsetAndDistance.w, projectAux.absCosAngle, posView);
    vec4 startPoint = proj * vec4(posView, 1.0);

    // Apply screen offset to both start and end point
    vec2 screenOffsetNorm = screenOffsetScaled * 2.0 / viewport.zw;
    startPoint.xy += screenOffsetNorm * startPoint.w;
    endPoint.xy += screenOffsetNorm * endPoint.w;

    // Align start and end to pixel origin
    vec4 startAligned = alignToPixelOrigin(startPoint, viewport.zw);
    vec4 endAligned = alignToPixelOrigin(endPoint, viewport.zw);
    ${s(e.hudDepth,e.hudDepthAlignStart?`endAligned = vec4(endAligned.xy / endAligned.w * startAligned.w, startAligned.zw);`:`startAligned = vec4(startAligned.xy / startAligned.w * endAligned.w, endAligned.zw);`)}
    vec4 projectedPosition = mix(startAligned, endAligned, uv0.y);

    // The direction of the line in screen space
    vec2 screenSpaceDirection = normalize(endAligned.xy / endAligned.w - startAligned.xy / startAligned.w);
    vec2 perpendicularScreenSpaceDirection = vec2(screenSpaceDirection.y, -screenSpaceDirection.x);
    ${e.hasScreenSizePerspective?c`float lineSizeScaled = applyScreenSizePerspectiveScaleFactorFloat(lineSize, perspectiveFactor);
               float borderSizeScaled = applyScreenSizePerspectiveScaleFactorFloat(borderSize, perspectiveFactor);`:c`float lineSizeScaled = lineSize;
               float borderSizeScaled = borderSize;`}
    float halfPixelSize = lineSizeScaled * 0.5;

    // Compute full ndc offset, adding 1px padding for doing anti-aliasing and the border size
    float padding = 1.0 + borderSizeScaled;
    vec2 ndcOffset = (-halfPixelSize - padding + uv0.x * (lineSizeScaled + padding + padding)) * pixelToNDC;

    // Offset x/y from the center of the line in screen space
    projectedPosition.xy += perpendicularScreenSpaceDirection * ndcOffset * projectedPosition.w;

    // Compute a coverage varying which we can use in the fragment shader to determine
    // how much a pixel is actually covered by the line (i.e. to anti alias the line).
    // This works by computing two coordinates that can be linearly interpolated and then
    // subtracted to find out how far away from the line edge we are.
    float edgeDirection = (uv0.x * 2.0 - 1.0);

    float halfBorderSize = 0.5 * borderSizeScaled;
    float halfPixelSizeAndBorder = halfPixelSize + halfBorderSize;
    float outerEdgeCoverageSampler = edgeDirection * (halfPixelSizeAndBorder + halfBorderSize + 1.0);

    float isOneSided = float(lineSizeScaled < 2.0 && borderSize < 2.0);

    coverageSampling = vec4(
      // Edge coordinate
      outerEdgeCoverageSampler,

      // Border edge coordinate
      outerEdgeCoverageSampler - halfPixelSizeAndBorder * isOneSided,

      // Line offset
      halfPixelSize - 0.5,

      // Border offset
      halfBorderSize - 0.5 + halfPixelSizeAndBorder * (1.0 - isOneSided)
    );

    lineSizes = vec2(lineSizeScaled, borderSizeScaled);
    gl_Position = projectedPosition;`),a.uniforms.add(new _(`uColor`,e=>e.color??i),new _(`borderColor`,e=>e.borderColor??i)),o&&(a.include(R,e),a.uniforms.add(new x(`inverseViewport`,e=>e.inverseViewport))),a.main.add(c`
    ${s(o,`if( geometryDepthTest(gl_FragCoord.xy * inverseViewport, depth) ){ discard; }`)}

    vec2 coverage = min(1.0 - clamp(abs(coverageSampling.xy) - coverageSampling.zw, 0.0, 1.0), lineSizes);

    float borderAlpha = uColor.a * borderColor.a * coverage.y;
    float colorAlpha = uColor.a * coverage.x;

    float finalAlpha = mix(borderAlpha, 1.0, colorAlpha);
    ${s(e.hudDepth,c`
    if (max(coverage.x, coverage.y) < ${c.float(V)}) discard;`,c`
    vec3 finalRgb = mix(borderColor.rgb * borderAlpha, uColor.rgb, colorAlpha);
    outputColorHighlightOLID(vec4(finalRgb, finalAlpha), finalRgb);`)}`),n}var V,H,U,W=e((()=>{n(),o(),r(),h(),I(),F(),L(),z(),v(),b(),O(),E(),g(),d(),l(),A(),p(),V=.5,H=a(),U=Object.freeze(Object.defineProperty({__proto__:null,build:B},Symbol.toStringTag,{value:`Module`}))}));export{z as i,B as n,U as r,W as t};