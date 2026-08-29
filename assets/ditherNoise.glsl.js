import{n as e}from"./rolldown-runtime.js";function t(e,t){t.useFloatBlend?e.code.add(`float ditherNoise(vec4 color) { return 0.0; }`):e.code.add(`
      float ditherNoise(vec4 color) {
        vec2 seed = color.rg + color.ba + gl_FragCoord.xy + gl_FragCoord.z;
        return (fract(52.9829189 * fract(dot(seed, vec2(0.06711056, 0.00583715)))) - 0.5) / 255.0;
      }`)}function n(){return(n=e((()=>{})))()}export{t as n,n as t};