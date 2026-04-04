import{n as e}from"./chunk.js";import{b as t,h as n}from"./vec2.js";import{n as r,t as i}from"./mat4f64.js";import{C as a,w as o}from"./mat4.js";import{a as s,r as c}from"./vec2f64.js";import{n as l,r as u,t as d}from"./glsl.js";import{n as f,t as p}from"./FloatPassUniform.js";import{n as m,t as h}from"./ShaderBuilder.js";import{n as g,t as _}from"./FloatBindUniform.js";import{n as v,t as y}from"./Matrix4BindUniform.js";import{n as b,t as x}from"./Float2BindUniform.js";import{n as S,t as C}from"./Laserline.glsl.js";import{n as w,t as T}from"./Matrix4PassUniform.js";function E(e){let n=new m;n.include(S,e);let{vertex:r,fragment:i}=n;r.uniforms.add(new w(`modelView`,(e,{camera:t})=>a(O,t.viewMatrix,e.origin)),new v(`proj`,({camera:e})=>e.projectionMatrix),new f(`glowWidth`,(e,{camera:t})=>e.glowWidth*t.pixelRatio),new x(`pixelToNDC`,({camera:e})=>t(D,2/e.fullViewport[2],2/e.fullViewport[3]))),n.attributes.add(`start`,`vec3`),n.attributes.add(`end`,`vec3`),e.spherical&&(n.attributes.add(`startUp`,`vec3`),n.attributes.add(`endUp`,`vec3`)),n.attributes.add(`extrude`,`vec2`),n.varyings.add(`uv`,`vec2`),n.varyings.add(`vViewStart`,`vec3`),n.varyings.add(`vViewEnd`,`vec3`),n.varyings.add(`vViewSegmentNormal`,`vec3`),n.varyings.add(`vViewStartNormal`,`vec3`),n.varyings.add(`vViewEndNormal`,`vec3`);let o=!e.spherical;return r.main.add(u`
    vec3 pos = mix(start, end, extrude.x);

    vec4 viewPos = modelView * vec4(pos, 1);
    vec4 projPos = proj * viewPos;
    vec2 ndcPos = projPos.xy / projPos.w;

    // in planar we hardcode the up vectors to be Z-up */
    ${l(o,u`vec3 startUp = vec3(0, 0, 1);`)}
    ${l(o,u`vec3 endUp = vec3(0, 0, 1);`)}

    // up vector corresponding to the location of the vertex, selecting either startUp or endUp */
    vec3 up = extrude.y * mix(startUp, endUp, extrude.x);
    vec3 viewUp = (modelView * vec4(up, 0)).xyz;

    vec4 projPosUp = proj * vec4(viewPos.xyz + viewUp, 1);
    vec2 projUp = normalize(projPosUp.xy / projPosUp.w - ndcPos);

    // extrude ndcPos along projUp to the edge of the screen
    vec2 lxy = abs(sign(projUp) - ndcPos);
    ndcPos += length(lxy) * projUp;

    vViewStart = (modelView * vec4(start, 1)).xyz;
    vViewEnd = (modelView * vec4(end, 1)).xyz;

    vec3 viewStartEndDir = vViewEnd - vViewStart;

    vec3 viewStartUp = (modelView * vec4(startUp, 0)).xyz;

    // the normal of the plane that aligns with the segment and the up vector
    vViewSegmentNormal = normalize(cross(viewStartUp, viewStartEndDir));

    // the normal orthogonal to the segment normal and the start up vector
    vViewStartNormal = -normalize(cross(vViewSegmentNormal, viewStartUp));

    // the normal orthogonal to the segment normal and the end up vector
    vec3 viewEndUp = (modelView * vec4(endUp, 0)).xyz;
    vViewEndNormal = normalize(cross(vViewSegmentNormal, viewEndUp));

    // Add enough padding in the X screen space direction for "glow"
    float xPaddingPixels = sign(dot(vViewSegmentNormal, viewPos.xyz)) * (extrude.x * 2.0 - 1.0) * glowWidth;
    ndcPos.x += xPaddingPixels * pixelToNDC.x;

    // uv is used to read back depth to reconstruct the position at the fragment
    uv = ndcPos * 0.5 + 0.5;

    gl_Position = vec4(ndcPos, 0, 1);
  `),i.uniforms.add(new g(`perScreenPixelRatio`,e=>e.camera.perScreenPixelRatio)),i.code.add(u`float planeDistance(vec3 planeNormal, vec3 planeOrigin, vec3 pos) {
return dot(planeNormal, pos - planeOrigin);
}
float segmentDistancePixels(vec3 segmentNormal, vec3 startNormal, vec3 endNormal, vec3 pos, vec3 start, vec3 end) {
float distSegmentPlane = planeDistance(segmentNormal, start, pos);
float distStartPlane = planeDistance(startNormal, start, pos);
float distEndPlane = planeDistance(endNormal, end, pos);
float dist = max(max(distStartPlane, distEndPlane), abs(distSegmentPlane));
float width = fwidth(distSegmentPlane);
float maxPixelDistance = length(pos) * perScreenPixelRatio * 2.0;
float pixelDist = dist / min(width, maxPixelDistance);
return abs(pixelDist);
}`),i.main.add(u`fragColor = vec4(0.0);
vec3 dEndStart = vViewEnd - vViewStart;
if (dot(dEndStart, dEndStart) < 1e-5) {
return;
}
vec3 pos;
vec3 normal;
float angleCutoffAdjust;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, angleCutoffAdjust, depthDiscontinuityAlpha)) {
return;
}
float distance = segmentDistancePixels(
vViewSegmentNormal,
vViewStartNormal,
vViewEndNormal,
pos,
vViewStart,
vViewEnd
);
vec4 color = laserlineProfile(distance);
float alpha = (1.0 - smoothstep(0.995 - angleCutoffAdjust, 0.999 - angleCutoffAdjust, abs(dot(normal, vViewSegmentNormal))));
fragColor = laserlineOutput(color * alpha * depthDiscontinuityAlpha);`),n}var D,O,k,A=e((()=>{o(),r(),n(),c(),C(),b(),_(),p(),d(),y(),T(),h(),D=s(),O=i(),k=Object.freeze(Object.defineProperty({__proto__:null,build:E},Symbol.toStringTag,{value:`Module`}))}));export{A as n,E as r,k as t};