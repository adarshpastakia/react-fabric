import{n as e}from"./chunk.js";import{r as t,t as n}from"./glsl.js";import{n as r,t as i}from"./Texture2DPassUniform.js";import{n as a,t as o}from"./ShaderBuilder.js";import{n as s,t as c}from"./ScreenSpacePass.glsl.js";function l(){let e=new a;return e.include(s),e.fragment.uniforms.add(new i(`blendWeightsTexture`,e=>e.inputTexture),new i(`colorTexture`,e=>e.color)),e.fragment.main.add(t`vec2 resolution = 1.0 / vec2(textureSize(colorTexture, 0));
vec4 offsets = vec4(uv.x + resolution.x, uv.y, uv.x, uv.y - resolution.y);
vec4 a;
a.rb = texture(blendWeightsTexture, uv).rb;
a.g = texture(blendWeightsTexture, offsets.zw).g;
a.a = texture(blendWeightsTexture, offsets.xy).a;
if ( dot(a, vec4(1.0)) < 1e-5 ) {
fragColor = texture( colorTexture, uv, 0.0 );
} else {
vec2 offset;
offset.x = a.a > a.b ? a.a : -a.b;
offset.y = a.g > a.r ? -a.g : a.r;
if ( abs( offset.x ) > abs( offset.y )) {
offset.y = 0.0;
} else {
offset.x = 0.0;
}
vec4 C = texture( colorTexture, uv, 0.0 );
vec4 Cop = texture( colorTexture, uv + sign( offset ) * resolution.xy, 0.0 );
float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );
fragColor = mix(C, Cop, s);
}`),e}var u,d=e((()=>{c(),n(),r(),o(),u=Object.freeze(Object.defineProperty({__proto__:null,build:l},Symbol.toStringTag,{value:`Module`}))}));export{d as n,l as r,u as t};