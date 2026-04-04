import{n as e}from"./chunk.js";function t(e){e.code.add(`
  vec4 blendColorsPremultiplied(vec4 source, vec4 dest) {
    float oneMinusSourceAlpha = 1.0 - source.a;
    return source + dest * oneMinusSourceAlpha;
  }
  `)}function n(e,t){return e[0]=t[0]*t[3],e[1]=t[1]*t[3],e[2]=t[2]*t[3],e[3]=t[3],e}var r=e((()=>{}));export{r as n,n as r,t};