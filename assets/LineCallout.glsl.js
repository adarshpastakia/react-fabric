import{n as e}from"./rolldown-runtime.js";import{O as t,x as n}from"./vec2.js";import{o as r,r as i}from"./vec4f64.js";import{o as a,s as o}from"./vec2f64.js";import{n as s,r as c,t as l}from"./glsl.js";import{n as u,t as d}from"./ShaderBuilder.js";import{n as f,t as p}from"./FloatPassUniform.js";import{a as m,n as h}from"./Slice.glsl.js";import{n as g,t as _}from"./Float4PassUniform.js";import{n as v,t as y}from"./ScreenSizePerspective.glsl.js";import{n as b,t as x}from"./Float2BindUniform.js";import{n as S,t as C}from"./Float4BindUniform.js";import{n as w,t as T}from"./Float2PassUniform.js";import{n as E,t as D}from"./OutputColorHighlightOLID.glsl.js";import{i as O,n as k,r as A,t as j}from"./AlignPixel.glsl.js";function M(e){let n=new u,{vertex:r,fragment:a}=n;return r.include(k),n.include(A,e),n.vertex.include(h,e),e.hudDepth||n.include(E,e),n.attributes.add(`uv0`,`vec2`),r.uniforms.add(new C(`viewport`,e=>e.camera.fullViewport),new f(`lineSize`,(e,t)=>e.size>0?Math.max(1,e.size)*t.camera.pixelRatio:0),new x(`pixelToNDC`,e=>t(P,2/e.camera.fullViewport[2],2/e.camera.fullViewport[3])),new f(`borderSize`,(e,t)=>e.borderColor?t.camera.pixelRatio:0),new T(`screenOffset`,(e,n)=>t(P,e.horizontalScreenOffset*n.camera.pixelRatio,0))),n.varyings.add(`coverageSampling`,`vec4`),n.varyings.add(`lineSizes`,`vec2`),e.hasScreenSizePerspective&&y(r),r.main.add(c`
    ProjectHUDAux projectAux;
    vec4 endPoint = projectPositionHUD(projectAux);

    vec3 vpos = projectAux.posModel;
    if (rejectBySlice(vpos)) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    }

    ${e.hasScreenSizePerspective?c`vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
               vec2 screenOffsetScaled = applyScreenSizePerspectiveScaleFactorVec2(screenOffset, perspectiveFactor);`:`vec2 screenOffsetScaled = screenOffset;`}
    // Add view dependent polygon offset to get exact same original starting point. This is mostly used to get the
    // correct depth value
    vec3 posView = (view * vec4(position, 1.0)).xyz;

    applyHUDViewDependentPolygonOffset(groundDistance, projectAux.absCosAngle, posView);
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
    gl_Position = projectedPosition;`),a.uniforms.add(new _(`uColor`,e=>e.color??i),new _(`borderColor`,e=>e.borderColor??i)),a.main.add(c`
    vec2 coverage = min(1.0 - clamp(abs(coverageSampling.xy) - coverageSampling.zw, 0.0, 1.0), lineSizes);

    float borderAlpha = uColor.a * borderColor.a * coverage.y;
    float colorAlpha = uColor.a * coverage.x;

    float finalAlpha = mix(borderAlpha, 1.0, colorAlpha);
    ${s(e.hudDepth,c`
    if (max(coverage.x, coverage.y) < ${c.float(N)}) discard;`,c`
    vec3 finalRgb = mix(borderColor.rgb * borderAlpha, uColor.rgb, colorAlpha);
    outputColorHighlightOLID(vec4(finalRgb, finalAlpha), finalRgb);`)}`),n}var N,P,F;function I(){return(I=e((()=>{n(),a(),r(),m(),j(),O(),v(),b(),w(),S(),g(),p(),l(),D(),d(),N=.5,P=o(),F=Object.freeze(Object.defineProperty({__proto__:null,build:M},Symbol.toStringTag,{value:`Module`}))})))()}export{M as n,F as r,I as t};