import{n as e}from"./rolldown-runtime.js";import{o as t,s as n}from"./vec2f64.js";import{r,t as i}from"./glsl.js";import{n as a,t as o}from"./HighlightCellGridScreenSpacePass.glsl.js";import{r as s,t as c}from"./NoParameters.js";import{n as l,t as u}from"./ShaderBuilder.js";import{n as d,t as f}from"./Float2DrawUniform.js";import{n as p,t as m}from"./Texture2DDrawUniform.js";function h(){let e=new l;return e.include(a),e.outputs.add(`fragHighlight`,`vec2`,0),e.fragment.uniforms.add(new f(`blurSize`,e=>e.blurSize),new m(`blurInput`,e=>e.blurInput)).main.add(r`vec2 highlightTextureSize = vec2(textureSize(blurInput,0));
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
}`),e}var g,_;function v(){return(v=e((()=>{t(),o(),d(),i(),p(),s(),u(),g=class extends c{constructor(){super(...arguments),this.blurSize=n()}},_=Object.freeze(Object.defineProperty({__proto__:null,HighlightBlurDrawParameters:g,build:h},Symbol.toStringTag,{value:`Module`}))})))()}export{g as i,v as n,h as r,_ as t};