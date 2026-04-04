import{n as e}from"./chunk.js";import{b as t,h as n}from"./vec2.js";import{a as r,r as i}from"./vec2f64.js";import{r as a,t as o}from"./glsl.js";import{n as s,t as c}from"./Uniform.js";import{n as l,t as u}from"./IntegerPassUniform.js";import{n as d,t as f}from"./Texture2DUintPassUniform.js";import{r as p}from"./HighlightDownsample.glsl.js";var m,h=e((()=>{s(),m=class extends c{constructor(e,t){super(e,`ivec2`,1,(n,r,i)=>n.setUniform2iv(e,t(r,i)))}}}));function g(e){let{vertex:n}=e;n.uniforms.add(new f(`coverageTexture`,e=>e.coverageTexture),new m(`highlightRenderCellCount`,e=>t(_,e.horizontalCellCount,e.verticalCellCount)),new m(`highlightTextureResolution`,({highlightTexture:e})=>t(_,e.descriptor.width,e.descriptor.height)),new l(`highlightLevel`,e=>e.highlightLevel)).constants.add(`cellSize`,`int`,32),e.varyings.add(`sUV`,`vec2`),e.varyings.add(`vOutlinePossible`,`float`),n.code.add(a`const ivec2 cellVertices[4] = ivec2[4](ivec2(0,0), ivec2(1,0), ivec2(0,1), ivec2(1,1));`),n.main.add(a`int cellIndex = gl_InstanceID;
int cellX = cellIndex % highlightRenderCellCount[0];
int cellY = (cellIndex - cellX) / highlightRenderCellCount[0];
ivec2 cellPos = ivec2(cellX, cellY);
uvec2 covTexel = texelFetch(coverageTexture, cellPos, 0).rg;
int channelIndex = (highlightLevel >> 2) & 3;
uint channelValue = covTexel[channelIndex];
int highlightIndex = (highlightLevel & 3) << 1;
bool covered = ((channelValue >> highlightIndex) & 1u) == 1u;
if (!covered) {
gl_Position = vec4(0.0);
return;
}
vOutlinePossible = (((channelValue >> highlightIndex) & 2u) == 2u) ? 1.0 : 0.0;
ivec2 iPosInCell = cellVertices[gl_VertexID];
vec2 sPos = vec2(cellPos * cellSize + iPosInCell * (cellSize));
vec2 vPos = sPos / vec2(highlightTextureResolution);
sUV = vPos;
gl_Position = vec4(2.0 * vPos - vec2(1.0), 0.0, 1.0);`)}var _,v=e((()=>{n(),i(),o(),h(),u(),d(),p(),_=r()}));export{g as n,v as t};