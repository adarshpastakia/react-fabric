import{n as e}from"./chunk.js";import{l as t,o as n}from"./vec3f64.js";import{E as r,r as i,v as a}from"./vec3.js";import{r as o,t as s}from"./glsl.js";import{n as c,t as l}from"./FloatPassUniform.js";import{n as u,t as d}from"./ShaderBuilder.js";import{n as f,t as p}from"./Texture2DUintPassUniform.js";import{n as m,t as h}from"./ScreenSpacePass.glsl.js";import{n as g,t as _}from"./Float4PassUniform.js";import{n as v,t as y}from"./Float3BindUniform.js";import{n as b,t as x}from"./ReadDepth.glsl.js";import{n as S,t as C}from"./Texture2DBindUniform.js";import{n as w,t as T}from"./CameraSpace.glsl.js";import{i as E,n as D,r as O,t as k}from"./Texture2DShadowBindUniform.js";import{n as A,t as j}from"./calculateUVZShadowFromDepth.glsl.js";function M(e){let t=e.fragment;e.include(T),t.include(x),t.code.add(o`vec3 normalFromDepth(sampler2D depthMap, vec3 pixelPos, vec2 fragCoord, vec2 uv) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthMap, 0)));
float leftPixelDepth = linearizeDepth(texelFetch(depthMap, iuv + ivec2(-1, 0), 0).r);
float rightPixelDepth = linearizeDepth(texelFetch(depthMap, iuv + ivec2(1, 0), 0).r);
float bottomPixelDepth = linearizeDepth(texelFetch(depthMap, iuv + ivec2(0, -1), 0).r);
float topPixelDepth = linearizeDepth(texelFetch(depthMap, iuv + ivec2(0, 1), 0).r);
bool pickLeft = abs(pixelPos.z - leftPixelDepth) < abs(pixelPos.z - rightPixelDepth);
bool pickBottom = abs(pixelPos.z - bottomPixelDepth) < abs(pixelPos.z - topPixelDepth);
vec3 fragCoordHorizontal = pickLeft
? vec3(fragCoord + vec2(-1.0, 0.0), leftPixelDepth)
: vec3(fragCoord + vec2(1.0, 0.0), rightPixelDepth);
vec3 fragCoordVertical = pickBottom
? vec3(fragCoord + vec2(0.0, -1.0), bottomPixelDepth)
: vec3(fragCoord + vec2(0.0, 1.0), topPixelDepth);
vec3 verticalPixelPos = reconstructPosition(fragCoordHorizontal.xy, fragCoordHorizontal.z);
vec3 horizontalPixelPos = reconstructPosition(fragCoordVertical.xy, fragCoordVertical.z);
vec3 normal = normalize(cross(verticalPixelPos - pixelPos, horizontalPixelPos - pixelPos));
return pickLeft == pickBottom ? normal : -normal;
}`)}var N=e((()=>{b(),w(),s()}));function P(){let e=new u;e.include(A),e.include(O),e.include(m),e.include(M);let t=e.fragment;return t.uniforms.add(new k(`shadowMapExcludingHighlight`,e=>e.shadowMap.getSnapshot(1)),new k(`shadowMapHighlight`,e=>e.shadowMap.getSnapshot(0)),new C(`depthMap`,e=>e.depth?.attachment),new p(`highlightTexture`,e=>e.highlightTexture),new _(`uColor`,e=>e.shadowColor),new c(`opacity`,e=>e.shadowOpacity),new c(`occludedOpacity`,e=>e.occludedShadowOpacity),new c(`terminationFactor`,e=>e.opacityElevation*e.dayNightTerminator),new y(`lightingMainDirectionView`,({lighting:e,camera:t})=>a(I,i(I,e.mainLight.direction,t.viewInverseTransposeMatrix)))),t.main.add(o`
    ivec2 highlightTextureSize = textureSize(highlightTexture, 0);
    ivec2 highlightIUV = ivec2(uv * vec2(highlightTextureSize));
    uvec2 highlightInfo = texelFetch(highlightTexture, highlightIUV, 0).rg;

    fragColor = vec4(0.0);

    // Calculate bit mask to check if pixel is highlit unoccluded at any level
    uint ored = (highlightInfo.r << 0) | (highlightInfo.g << 8);

    bool visiblyHighlighted = ((ored & ~(ored >> 1)) & (1u+4u+16u+64u)) != 0u;
    if (visiblyHighlighted) {
      return;
    }

    vec4 currentPixelPos;
    vec3 uvzShadow = calculateUVZShadowAndPixelPosFromDepth(uv, textureSize(shadowMapHighlight,0), depthMap, currentPixelPos);
    if (uvzShadow.z < 0.0) {
      return;
    }

    float shadowHighlightFactor = readShadowMapUVZ(uvzShadow, shadowMapHighlight);
    if (shadowHighlightFactor == 0.0) {
      return;
    }

    float shadowExcludingHighlightFactor = readShadowMapUVZ(uvzShadow, shadowMapExcludingHighlight);

    vec3 normal = normalFromDepth(depthMap, currentPixelPos.xyz, gl_FragCoord.xy, uv);
    bool shaded = dot(normal, lightingMainDirectionView) < ${o.float(F)};

    float occludedFactor = max(shadowExcludingHighlightFactor, shaded ? 1.0 : 0.0);
    float fragOpacity = mix(opacity, occludedOpacity, occludedFactor);
    fragColor = vec4(uColor.rgb, uColor.a * fragOpacity * terminationFactor);
  `),e}var F,I,L,R=e((()=>{r(),n(),N(),h(),j(),E(),v(),g(),l(),s(),S(),D(),f(),d(),F=.025,I=t(),L=Object.freeze(Object.defineProperty({__proto__:null,build:P},Symbol.toStringTag,{value:`Module`}))}));export{N as i,P as n,L as r,R as t};