import{n as e}from"./chunk.js";import{r as t,t as n}from"./glsl.js";import{n as r,t as i}from"./Uniform.js";import{n as a,t as o}from"./HighlightReadBitmap.glsl.js";import{n as s,t as c}from"./Texture2DBindUniform.js";import{n as l,t as u}from"./IntegerBindUniform.js";var d,f=e((()=>{r(),d=class extends i{constructor(e,t){super(e,`ivec2`,0,(n,r)=>n.setUniform2iv(e,t(r)))}}})),p,m=e((()=>{r(),p=class extends i{constructor(e,t){super(e,`usampler2D`,0,(n,r)=>n.bindTexture(e,t(r)))}}}));function h(e,n){let{fragment:r}=e,{output:i,draped:o,hasHighlightMixTexture:s}=n;i===8?(r.uniforms.add(new l(`highlightLevel`,e=>e.highlightLevel??0),new d(`highlightMixOrigin`,e=>e.highlightMixOrigin)),e.outputs.add(`fragHighlight`,`uvec2`,0),e.include(a),s?r.uniforms.add(new p(`highlightMixTexture`,e=>e.highlightMixTexture)).code.add(t`uvec2 getAccumulatedHighlight() {
return texelFetch(highlightMixTexture, ivec2(gl_FragCoord.xy) - highlightMixOrigin, 0).rg;
}
void outputHighlight(bool occluded) {
if (highlightLevel == 0) {
uint bits = occluded ? 3u : 1u;
fragHighlight = uvec2(bits, 0);
} else {
int ll = (highlightLevel & 3) << 1;
int li = (highlightLevel >> 2) & 3;
uint bits;
if (occluded) {
bits = 3u << ll;
} else {
bits = 1u << ll;
}
uvec2 combinedHighlight = getAccumulatedHighlight();
combinedHighlight[li] |= bits;
fragHighlight = combinedHighlight;
}
}`):r.code.add(t`void outputHighlight(bool occluded) {
uint bits = occluded ? 3u : 1u;
fragHighlight = uvec2(bits, 0);
}`),o?r.code.add(t`bool isHighlightOccluded() {
return false;
}`):r.uniforms.add(new c(`depthTexture`,e=>e.mainDepth)).code.add(t`bool isHighlightOccluded() {
float sceneDepth = texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x;
return gl_FragCoord.z > sceneDepth + 5e-7;
}`),r.code.add(t`void calculateOcclusionAndOutputHighlight() {
outputHighlight(isHighlightOccluded());
}`)):r.code.add(t`void calculateOcclusionAndOutputHighlight() {}`)}var g=e((()=>{o(),n(),f(),u(),s(),m()}));export{g as n,h as t};