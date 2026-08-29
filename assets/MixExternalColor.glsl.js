import{n as e}from"./rolldown-runtime.js";import{r as t,t as n}from"./glsl.js";import{n as r,t as i}from"./ColorConversion.glsl.js";function a(e){e.include(i),e.code.add(t`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      if (mode == ${t.int(3)}) {
        return externalColor;
      }

      vec3 internalMixed = internalColor * textureColor;
      if (mode == ${t.int(2)}) {
        return internalMixed;
      }

      if (mode == ${t.int(1)}) {
        return internalMixed * externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      if (mode == ${t.int(3)}) {
        return externalOpacity;
      }

      float internalMixed = internalOpacity * textureOpacity;
      if (mode == ${t.int(2)}) {
        return internalMixed;
      }

      // multiply or tint (or something invalid)
      return internalMixed * externalOpacity;
    }
  `)}function o(){return(o=e((()=>{r(),n()})))()}export{a as n,o as t};