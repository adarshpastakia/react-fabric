import{n as e}from"./chunk.js";import{r as t,t as n}from"./glsl.js";function r(e){e.code.add(t`
    float lineFactorAtPosition(float value) {
      float pos = value * ${t.float(257)};
      if(pos < 0.5 || pos > ${t.float(256.5)}) {
        return 1.0;
      }

      pos = pos + 0.5;
      float modulo = mod(pos, 16.0);
      return modulo <= 2.0 ?  1.0 - abs(modulo - 1.0) : 0.0;
    }

    float lineFactorAtUV(vec2 uv) {
      return max(lineFactorAtPosition(uv.x), lineFactorAtPosition(uv.y));
    }

    float lineFactor(vec2 uv) {
      vec2 offset = fwidth(uv) * 0.25;
      return (lineFactorAtUV(vec2(uv.x + offset.x, uv.y + offset.y)) +
              lineFactorAtUV(vec2(uv.x - offset.x, uv.y + offset.y)) +
              lineFactorAtUV(vec2(uv.x + offset.x, uv.y - offset.y)) +
              lineFactorAtUV(vec2(uv.x - offset.x, uv.y - offset.y))) / 4.0;
    }

    vec3 gridColor(vec2 uv) {
      float line = lineFactor(uv) * 0.1 + 0.9;
      return vec3(1.0, 0.972, 0.918) * line;
    }`)}var i=e((()=>{n()}));export{r as n,i as t};