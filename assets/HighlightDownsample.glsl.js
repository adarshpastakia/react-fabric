import{n as e}from"./chunk.js";import{r as t,t as n}from"./glsl.js";import{n as r,t as i}from"./ShaderBuilder.js";import{n as a,t as o}from"./Texture2DUintPassUniform.js";import{n as s,t as c}from"./ScreenSpacePass.glsl.js";import{r as l,t as u}from"./NoParameters.js";function d(){let e=new r,{outputs:n,fragment:i}=e;return e.include(s),i.uniforms.add(new o(`highlightTexture`,e=>e.highlightTexture)),i.constants.add(`outlineWidth`,`int`,9),i.constants.add(`cellSize`,`int`,32),n.add(`fragGrid`,`uvec2`),i.main.add(t`ivec2 inputTextureSize = textureSize(highlightTexture, 0);
ivec2 cellBottomLeftCornerInput = ivec2(ivec2(floor(gl_FragCoord.xy) * vec2(cellSize)));
ivec2 coordMid =  cellBottomLeftCornerInput + ivec2(cellSize >> 1);
uvec2 centreTexel = texelFetch(highlightTexture, coordMid, 0).rg & uvec2(0x55u);
float marginSquare = float(outlineWidth*outlineWidth);
uvec2 outputValue = centreTexel & uvec2(0x55u);
for(int y = -outlineWidth; y <= cellSize + outlineWidth; y+=2) {
int dy = y < 0 ? -y : y > cellSize ? y-cellSize : 0;
int xMargin = dy > 0 ? int(ceil(sqrt(marginSquare - float(dy*dy)))) : outlineWidth;
for(int x = -xMargin; x <= cellSize + xMargin; x+=2) {
ivec2 coord = cellBottomLeftCornerInput + ivec2(x, y);
uvec2[4] texels = uvec2[4] (
texelFetch(highlightTexture,coord+ivec2(0,0),0).rg & uvec2(0x55u),
texelFetch(highlightTexture,coord+ivec2(1,0),0).rg & uvec2(0x55u),
texelFetch(highlightTexture,coord+ivec2(0,1),0).rg & uvec2(0x55u),
texelFetch(highlightTexture,coord+ivec2(1,1),0).rg & uvec2(0x55u)
);
if (texels[0] == texels[1] && texels[1] == texels[2] && texels[2] == texels[3] && texels[3] ==  centreTexel) {
continue;
}
for (int i=0; i<4; ++i){
outputValue |= ((texels[i] ^ centreTexel) << 1);
outputValue |= texels[i];
}
}
}
fragGrid = outputValue;`),e}var f,p,m,h,g,_=e((()=>{c(),n(),a(),l(),i(),f=class extends u{},p=32,m=9,h=.4,g=Object.freeze(Object.defineProperty({__proto__:null,HighlightDownsampleDrawParameters:f,blurSize:h,build:d,gridCellPixelSize:32,outlineSize:9},Symbol.toStringTag,{value:`Module`}))}));export{f as a,m as i,d as n,h as o,_ as r,p as s,g as t};