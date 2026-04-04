import{n as e}from"./chunk.js";import{a as t,s as n}from"./ShaderOutput.js";import{n as r,r as i,t as a}from"./glsl.js";import{n as o,t as s}from"./Emissions.glsl.js";import{n as c,t as l}from"./ColorConversion.glsl.js";import{n as u,t as d}from"./OutputHighlight.glsl.js";import{n as f,t as p}from"./AlphaCutoff.js";function m(e,t){e.include(d,t),e.include(s,t),e.fragment.include(l);let{output:a,oitPass:o,hasEmission:c,discardInvisibleFragments:u,oitPremultipliedAlpha:p,snowCover:m}=t,h=a===9,g=n(a)&&o===1,_=n(a)&&o===2,v=n(a)&&o!==1,y=0;(v||g)&&e.outputs.add(`fragColor`,`vec4`,y++),c&&e.outputs.add(`fragEmission`,`vec4`,y++),g&&e.outputs.add(`fragAlpha`,`float`,y++),e.fragment.code.add(i`
    void outputColorHighlightOLID(vec4 finalColor, vec3 emissiveSymbolColor ${r(m,`, float snow`)}) {
      ${r(h,`finalColor.a = 1.0;`)}
      ${r(u,`if (finalColor.a < ${i.float(f)}) { discard; }`)}

      ${r(g,`${r(p,`fragColor = finalColor;`,`fragColor = premultiplyAlpha(finalColor);`)}\n           fragAlpha = finalColor.a;`)}
      ${r(_&&p&&u,`finalColor.rgb /= finalColor.a;`)}
      ${r(v,`fragColor = finalColor;`)}
      ${r(c,`fragEmission = ${r(m,`mix(finalColor.a * getEmissions(emissiveSymbolColor), vec4(0.0), snow);`,`finalColor.a * getEmissions(emissiveSymbolColor);`)}`)}
      calculateOcclusionAndOutputHighlight();
      ${r(h,`outputObjectAndLayerIdColor();`)}
    }
  `)}var h=e((()=>{t(),o(),u(),c(),a(),p()}));export{h as n,m as t};