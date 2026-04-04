import{n as e}from"./chunk.js";import{a as t,r as n}from"./vec2f64.js";import{r,t as i}from"./glsl.js";import{n as a,t as o}from"./Texture2DDrawUniform.js";import{n as s,t as c}from"./ShaderBuilder.js";import{n as l,t as u}from"./HighlightCellGridScreenSpacePass.glsl.js";import{r as d,t as f}from"./NoParameters.js";import{n as p,t as m}from"./Float2DrawUniform.js";function h(){let e=new s;return e.include(l),e.outputs.add(`fragHighlight`,`vec2`,0),e.fragment.uniforms.add(new m(`blurSize`,e=>e.blurSize),new o(`blurInput`,e=>e.blurInput)).main.add(r`vec2 highlightTextureSize = vec2(textureSize(blurInput,0));
vec2 center = texture(blurInput, sUV).rg;
if (vOutlinePossible == 0.0) {
fragHighlight = center;
} else {
vec2 sum = center * 0.204164;
sum += texture(blurInput, sUV + blurSize * 1.407333).rg * 0.304005;
sum += texture(blurInput, sUV - blurSize * 1.407333).rg * 0.304005;
sum += texture(blurInput, sUV + blurSize * 3.294215).rg * 0.093913;
sum += texture(blurInput, sUV - blurSize * 3.294215).rg * 0.093913;
fragHighlight = sum;
}`),e}var g,_,v=e((()=>{n(),u(),p(),i(),a(),d(),c(),g=class extends f{constructor(){super(...arguments),this.blurSize=t()}},_=Object.freeze(Object.defineProperty({__proto__:null,HighlightBlurDrawParameters:g,build:h},Symbol.toStringTag,{value:`Module`}))}));export{g as i,v as n,h as r,_ as t};