import{n as e}from"./rolldown-runtime.js";import{r as t,t as n}from"./glsl.js";import{n as r,t as i}from"./HighlightCellGridScreenSpacePass.glsl.js";import{n as a,t as o}from"./IntegerPassUniform.js";import{n as s,t as c}from"./Texture2DUintPassUniform.js";import{n as l,t as u}from"./ShaderBuilder.js";import{o as d,r as f}from"./HighlightDownsample.glsl.js";import{n as p,t as m}from"./HighlightReadBitmap.glsl.js";import{n as h,t as g}from"./Float2DrawUniform.js";import{n as _,t as v}from"./FloatPassUniform.js";import{n as y,t as b}from"./Texture2DPassUniform.js";function x(){let e=new l;e.include(r);let{fragment:n}=e;return n.uniforms.add(new b(`blurInput`,e=>e.highlightBlurTexture),new g(`blurSize`,e=>e.blurSize),new c(`highlightTexture`,e=>e.highlightTexture),new b(`highlightOptionsTexture`,e=>e.highlightOptionsTexture),new a(`highlightLevel`,e=>e.highlightLevel),new _(`occludedIntensityFactor`,e=>e.occludedFactor)),n.constants.add(`inner`,`float`,1-(9-d)/9),e.include(p),n.main.add(t`vec2 highlightTextureSize = vec2(textureSize(highlightTexture,0));
vec2 uv = sUV;
vec2 center = texture(blurInput, uv).rg;
vec2 blurredHighlightValue = (vOutlinePossible == 0.0)
? center
: center * 0.204164
+ texture(blurInput, uv + blurSize * 1.407333).rg * 0.304005
+ texture(blurInput, uv - blurSize * 1.407333).rg * 0.304005
+ texture(blurInput, uv + blurSize * 3.294215).rg * 0.093913
+ texture(blurInput, uv - blurSize * 3.294215).rg * 0.093913;
float highlightIntensity = blurredHighlightValue.r;
float occlusionWeight = blurredHighlightValue.g;
if (highlightIntensity <= 0.01) {
discard;
}
vec4 fillColor    = texelFetch(highlightOptionsTexture, ivec2(highlightLevel, 0), 0);
vec4 outlineColor = texelFetch(highlightOptionsTexture, ivec2(highlightLevel, 1), 0);
uvec2 centerTexel = texelFetch(highlightTexture, ivec2(uv * highlightTextureSize), 0).rg;
uint centerBits = readLevelBits(centerTexel, highlightLevel);
bool centerFilled = (centerBits & 1u) == 1u;
bool centerOccluded = (centerBits & 3u) == 3u;
bool occluded = centerOccluded || (0.5 * highlightIntensity < occlusionWeight);
float occlusionFactor = occluded ? occludedIntensityFactor : 1.0;
float outlineFactor = centerFilled ? 1.0 : smoothstep(0.0, inner, highlightIntensity);
float fillFactor = centerFilled ? 1.0 : 0.0;
vec4 baseColor = mix(outlineColor, fillColor, fillFactor);
float intensity = baseColor.a * occlusionFactor * outlineFactor;
fragColor = vec4(baseColor.rgb, intensity);`),e}var S;function C(){return(C=e((()=>{i(),m(),h(),v(),n(),o(),y(),s(),f(),u(),S=Object.freeze(Object.defineProperty({__proto__:null,build:x},Symbol.toStringTag,{value:`Module`}))})))()}export{x as n,C as r,S as t};