import{n as e}from"./chunk.js";import{r as t,t as n}from"./glsl.js";import{n as r,t as i}from"./FloatPassUniform.js";import{n as a,t as o}from"./Texture2DPassUniform.js";import{n as s,t as c}from"./ShaderBuilder.js";import{n as l,t as u}from"./HighlightCellGridScreenSpacePass.glsl.js";import{n as d,t as f}from"./IntegerPassUniform.js";import{n as p,t as m}from"./Texture2DUintPassUniform.js";import{o as h,r as g}from"./HighlightDownsample.glsl.js";import{n as _,t as v}from"./HighlightReadBitmap.glsl.js";import{n as y,t as b}from"./Float2DrawUniform.js";function x(){let e=new s;e.include(l);let{fragment:n}=e;return n.uniforms.add(new o(`blurInput`,e=>e.highlightBlurTexture),new b(`blurSize`,e=>e.blurSize),new m(`highlightTexture`,e=>e.highlightTexture),new o(`highlightOptionsTexture`,e=>e.highlightOptionsTexture),new d(`highlightLevel`,e=>e.highlightLevel),new r(`occludedIntensityFactor`,e=>e.occludedFactor)),n.constants.add(`inner`,`float`,1-(9-h)/9),e.include(_),n.main.add(t`vec2 highlightTextureSize = vec2(textureSize(highlightTexture,0));
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
fragColor = vec4(baseColor.rgb, intensity);`),e}var S,C=e((()=>{u(),v(),y(),i(),n(),f(),a(),p(),g(),c(),S=Object.freeze(Object.defineProperty({__proto__:null,build:x},Symbol.toStringTag,{value:`Module`}))}));export{x as n,C as r,S as t};