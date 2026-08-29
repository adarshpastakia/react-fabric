import{n as e}from"./rolldown-runtime.js";import{n as t,r as n,t as r}from"./glsl.js";import{o as i,p as a,r as o}from"./ShaderOutput.js";import{n as s,t as c}from"./ColorConversion.glsl.js";import{n as l,t as u}from"./alphaCutoff.glsl.js";import{n as d,t as f}from"./Emissions.glsl.js";import{r as p,t as m}from"./oitResolution.glsl.js";import{n as h,t as g}from"./OutputHighlight.glsl.js";import{n as _,t as v}from"./EmissionDimming.glsl.js";import{n as y}from"./ditherNoise.glsl.js";function b(e,r){e.include(g,r),e.include(f,r);let{fragment:s,outputs:l}=e,{output:d,hasEmission:m,discardInvisibleFragments:h,oitPremultipliedAlpha:v,snowCover:b,useFloatBlend:x,emissionDimmingPass:S}=r,C=d===11,w=o(d),T=i(d),E=a(d)&&!w,D=0;(E||w)&&l.add(`fragColor`,`vec4`,D++),w&&l.add(`fragAlpha`,`float`,D++),m&&l.add(`fragEmission`,`vec4`,D++),s.include(c),s.include(u),s.include(p,r),s.include(y,r),S&&s.include(_,r),s.code.add(n`
    void outputColorHighlightOLID(vec4 finalColor, vec3 emissiveSymbolColor ${t(b,`, float snow`)}) {
      ${t(C,`finalColor.a = 1.0;`)}
      ${t(h,`if (finalColor.a < alphaCutoff) { discard; }`)}

      ${t(w,`float noise = ditherNoise(finalColor);\n         fragColor = ${t(v,`finalColor`,`premultiplyAlpha(finalColor)`)};\n         fragColor = vec4(fragColor.rgb * floatBlendOutputScale + noise, fragColor.a);\n         float scaledAlpha = finalColor.a * floatBlendOutputScale;\n         fragAlpha = scaledAlpha + noise;\n         ${t(!x,`fragAlpha = fragAlpha < alphaCutoff ? scaledAlpha : fragAlpha;`)}`)}
      ${t(T&&v&&h,`finalColor.rgb /= finalColor.a;`)}
      ${t(E,`fragColor = finalColor;`)}
      ${t(m,S?`fragEmission = vec4(emissionDimming(premultiplyAlpha(finalColor).rgb, finalColor.a), 0.0);`:`fragEmission = ${t(b,`mix(finalColor.a * getEmissions(emissiveSymbolColor), vec4(0.0), snow);`,`finalColor.a * getEmissions(emissiveSymbolColor);`)}\n            float emissionNoise = ditherNoise(fragEmission);\n            fragEmission.rgb = fragEmission.rgb * floatBlendOutputScale + emissionNoise;\n            fragEmission.a = finalColor.a;\n            fragEmission = premultiplyAlpha(fragEmission);\n            `)}
      calculateOcclusionAndOutputHighlight();
      ${t(C,`outputObjectAndLayerIdColor();`)}
    }
  `)}function x(){return(x=e((()=>{d(),h(),s(),v(),r(),l(),m()})))()}export{b as n,x as t};