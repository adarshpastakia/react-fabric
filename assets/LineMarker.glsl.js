import{n as e}from"./rolldown-runtime.js";import{n as t,r as n,t as r}from"./glsl.js";import{n as i,t as a}from"./ShaderBuilder.js";import{n as o,t as s}from"./Texture2DPassUniform.js";import{a as c,i as l}from"./Slice.glsl.js";import{n as u,t as d}from"./Float4PassUniform.js";import{n as f,t as p}from"./FloatBindUniform.js";import{n as m,t as h}from"./Matrix4BindUniform.js";import{a as g,i as _,n as v,r as y}from"./View.glsl.js";import{a as b,d as x,f as S,h as C,m as w,n as T,t as E}from"./MarkerSizing.glsl.js";import{n as D,t as O}from"./ColorConversion.glsl.js";import{n as k,t as A}from"./PositionOutsideClipSpace.js";import{n as j,t as M}from"./Float2BindUniform.js";import{n as N,t as P}from"./Float4BindUniform.js";import{n as F,t as I}from"./OutputHighlight.glsl.js";import{n as L,t as R}from"./OutputColorHighlightOLID.glsl.js";function z(e){let r=new i,{space:a,anchor:o,hasTip:c,hasScreenSizePerspective:u}=e,p=a===2,h=a===1;r.attributes.add(`position`,`vec3`),r.vertex.inputs.add(`position`,()=>`position`),r.include(w,e),r.include(E,e);let{vertex:y,fragment:b,varyings:C}=r;v(y,e),r.attributes.add(`previousDelta`,`vec4`),r.attributes.add(`uv0`,`vec2`),C.add(`vColor`,`vec4`),C.add(`vpos`,`vec3`,{invariant:!0}),C.add(`vUV`,`vec2`),C.add(`vSize`,`float`),c&&C.add(`vLineWidth`,`float`),y.uniforms.add(new M(`nearFar`,({camera:e})=>e.nearFar),new P(`viewport`,({camera:e})=>e.fullViewport)).code.add(n`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),y.code.add(n`void clip(vec4 pos, inout vec4 prev) {
float vnp = nearFar[0] * 0.99;
if (prev.z > -nearFar[0]) {
float interpolation = (-vnp - pos.z) / (prev.z - pos.z);
prev = mix(pos, prev, interpolation);
}
}`),p?(r.attributes.add(`normal`,`vec3`),_(y),y.constants.add(`tiltThreshold`,`float`,.7),y.code.add(n`vec3 perpendicular(vec3 v) {
vec3 n = (viewNormal * vec4(normal.xyz, 1.0)).xyz;
vec3 n2 = cross(v, n);
vec3 forward = vec3(0.0, 0.0, 1.0);
float tiltDot = dot(forward, n);
return abs(tiltDot) < tiltThreshold ? n : n2;
}`)):y.code.add(n`vec2 perpendicular(vec2 v) {
return vec2(v.y, -v.x);
}`);let T=p?`vec3`:`vec2`;return y.code.add(n`
      ${T} normalizedSegment(${T} pos, ${T} prev) {
        ${T} segment = pos - prev;
        float segmentLen = length(segment);

        // normalize or zero if too short
        return (segmentLen > 0.001) ? segment / segmentLen : ${p?`vec3(0.0, 0.0, 0.0)`:`vec2(0.0, 0.0)`};
      }

      ${T} displace(${T} pos, ${T} prev, float displacementLen) {
        ${T} segment = normalizedSegment(pos, prev);

        ${T} displacementDirU = perpendicular(segment);
        ${T} displacementDirV = segment;

        ${o===1?`pos -= 0.5 * displacementLen * displacementDirV;`:``}

        return pos + displacementLen * (uv0.x * displacementDirU + uv0.y * displacementDirV);
      }
    `),h&&(y.uniforms.add(new m(`inverseProjectionMatrix`,({camera:e})=>e.inverseProjectionMatrix)),y.code.add(n`vec3 inverseProject(vec4 posScreen) {
posScreen.xy = (posScreen.xy / viewport.zw) * posScreen.w;
return (inverseProjectionMatrix * posScreen).xyz;
}`),y.code.add(n`bool rayIntersectPlane(vec3 rayDir, vec3 planeOrigin, vec3 planeNormal, out vec3 intersection) {
float cos = dot(rayDir, planeNormal);
float t = dot(planeOrigin, planeNormal) / cos;
intersection = t * rayDir;
return abs(cos) > 0.001 && t > 0.0;
}`),y.uniforms.add(new f(`perScreenPixelRatio`,({camera:e})=>e.perScreenPixelRatio)),y.code.add(n`
      vec4 toFront(vec4 displacedPosScreen, vec3 posLeft, vec3 posRight, vec3 prev, float lineWidth) {
        // Project displaced position back to camera space
        vec3 displacedPos = inverseProject(displacedPosScreen);

        // Calculate the plane that we want the marker to lie in. Note that this will always be an approximation since ribbon lines are generally
        // not planar and we do not know the actual position of the displaced prev vertices (they are offset in screen space, too).
        vec3 planeNormal = normalize(cross(posLeft - posRight, posLeft - prev));
        vec3 planeOrigin = posLeft;

        ${t(e.hasCap,`if(prev.z > posLeft.z) {
                vec2 diff = posLeft.xy - posRight.xy;
                planeOrigin.xy += perpendicular(diff) / 2.0;
             }`)};

        // Move the plane towards the camera by a margin dependent on the line width (approximated in world space). This tolerance corrects for the
        // non-planarity in most cases, but sharp joins can place the prev vertices at arbitrary positions so markers can still clip.
        float offset = lineWidth * perScreenPixelRatio;
        planeOrigin *= (1.0 - offset);

        // Intersect camera ray with the plane and make sure it is within clip space
        vec3 rayDir = normalize(displacedPos);
        vec3 intersection;
        if (rayIntersectPlane(rayDir, planeOrigin, planeNormal, intersection) && intersection.z < -nearFar[0] && intersection.z > -nearFar[1]) {
          return vec4(intersection.xyz, 1.0);
        }

        // Fallback: use depth of pos or prev, whichever is closer to the camera
        float minDepth = planeOrigin.z > prev.z ? length(planeOrigin) : length(prev);
        displacedPos *= minDepth / length(displacedPos);
        return vec4(displacedPos.xyz, 1.0);
      }
  `)),g(y),r.include(S),y.main.add(n`
    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = ${k};
    }
    else {
      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(position + previousDelta.xyz * previousDelta.w, 1.0);

      float lineWidth = getLineWidth(${t(u,`pos.xyz`)});
      float screenMarkerSize = getScreenMarkerSize(lineWidth);

      clip(pos, prev);

      ${p?n`${t(e.hideOnShortSegments,n`
                if (areWorldMarkersHidden(pos.xyz, prev.xyz)) {
                  gl_Position = ${k};
                  return;
                }`)}
            pos.xyz = displace(pos.xyz, prev.xyz, getWorldMarkerSize(pos.xyz));
            vec4 displacedPosScreen = projectAndScale(pos);`:n`
            vec4 posScreen = projectAndScale(pos);
            vec4 prevScreen = projectAndScale(prev);
            vec4 displacedPosScreen = posScreen;

            displacedPosScreen.xy = displace(posScreen.xy, prevScreen.xy, screenMarkerSize);
            ${t(h,n`
                vec2 displacementDirU = perpendicular(normalizedSegment(posScreen.xy, prevScreen.xy));

                // We need three points of the ribbon line in camera space to calculate the plane it lies in
                // Note that we approximate the third point, since we have no information about the join around prev
                vec3 lineRight = inverseProject(posScreen + lineWidth * vec4(displacementDirU.xy, 0.0, 0.0));
                vec3 lineLeft = pos.xyz + (pos.xyz - lineRight);

                pos = toFront(displacedPosScreen, lineLeft, lineRight, prev.xyz, lineWidth);
                displacedPosScreen = projectAndScale(pos);`)}`}
      // Convert back into NDC
      displacedPosScreen.xy = (displacedPosScreen.xy / viewport.zw) * displacedPosScreen.w;

      // Convert texture coordinate into [0,1]
      vUV = (uv0 + 1.0) / 2.0;
      ${t(!p,`vUV = noPerspectiveWrite(vUV, displacedPosScreen.w);`)}
      ${t(c,`vLineWidth = noPerspectiveWrite(lineWidth, displacedPosScreen.w);`)}

      vSize = screenMarkerSize;
      vColor = getColor();

      // Use camera space for slicing
      vpos = pos.xyz;

      gl_Position = displacedPosScreen;
    }`),b.include(l,e),r.include(L,e),b.include(O),b.uniforms.add(new d(`intrinsicColor`,({color:e})=>e),new s(`tex`,({markerTexture:e})=>e)).constants.add(`texelSize`,`float`,1/64).code.add(n`float markerAlpha(vec2 samplePos) {
samplePos += vec2(0.5, -0.5) * texelSize;
float sdf = texture(tex, samplePos).r;
float pixelDistance = sdf * vSize;
pixelDistance -= 0.5;
return clamp(0.5 - pixelDistance, 0.0, 1.0);
}`),c&&(r.include(x),b.constants.add(`relativeMarkerSize`,`float`,32/64).constants.add(`relativeTipLineWidth`,`float`,.25).code.add(n`
    float tipAlpha(vec2 samplePos) {
      // Convert coordinates s.t. they are in pixels and relative to the tip of an arrow marker
      samplePos -= vec2(0.5, 0.5 + 0.5 * relativeMarkerSize);
      samplePos *= vSize;

      float halfMarkerSize = 0.5 * relativeMarkerSize * vSize;
      float halfTipLineWidth = 0.5 * max(1.0, relativeTipLineWidth * noPerspectiveRead(vLineWidth));

      ${t(p,`halfTipLineWidth *= fwidth(samplePos.y);`)}

      float distance = max(abs(samplePos.x) - halfMarkerSize, abs(samplePos.y) - halfTipLineWidth);
      return clamp(0.5 - distance, 0.0, 1.0);
    }
  `)),r.include(I,e),r.include(x),b.main.add(n`
    discardBySlice(vpos);

    vec4 finalColor = intrinsicColor * vColor;

    // Cancel out perspective correct interpolation if in screen space or draped
    vec2 samplePos = ${t(!p,`noPerspectiveRead(vUV)`,`vUV`)};
    finalColor.a *= ${c?`max(markerAlpha(samplePos), tipAlpha(samplePos))`:`markerAlpha(samplePos)`};
    outputColorHighlightOLID(applySlice(finalColor, vpos), finalColor.rgb);`),r}var B;function V(){return(V=e((()=>{b(),c(),C(),F(),T(),A(),D(),y(),j(),N(),u(),p(),r(),h(),o(),R(),a(),B=Object.freeze(Object.defineProperty({__proto__:null,build:z},Symbol.toStringTag,{value:`Module`}))})))()}export{B as n,z as r,V as t};