import{n as e}from"./chunk.js";import{n as t,r as n,t as r}from"./glsl.js";import{n as i,t as a}from"./Texture2DPassUniform.js";import{n as o,t as s}from"./ShaderBuilder.js";import{n as c,t as l}from"./ScreenSpacePass.glsl.js";import{n as u,r as d}from"./OITDim.glsl.js";function f(e){let r=new o;r.include(c);let{hasEmitters:i,frontFaceMask:s,computeHudOcclusion:l}=e,u=r.fragment;u.uniforms.add(new a(`colorTexture`,e=>e.colorTexture),new a(`alphaTexture`,e=>e.alphaTexture));let d=0;return r.outputs.add(`fragColor`,`vec4`,d++),i&&r.outputs.add(`fragEmission`,`vec4`,d++),l&&r.outputs.add(`fragOcclusion`,`vec4`,d++),u.uniforms.add(new a(`frontFaceTexture`,e=>e.frontFaceTexture)),i&&(u.uniforms.add(new a(`emissionTexture`,e=>e.emissionTexture)),u.uniforms.add(new a(`emissionFrontFaceTexture`,e=>e.emissionFrontFaceTexture))),u.main.add(n`
    float srcAlpha = texture(alphaTexture, uv).r;
    ${t(l,`fragOcclusion = vec4(1.0, 0.0, 0.0, 1.0);`)}

    if(srcAlpha == 0.0) {
      fragColor = vec4(0.0);
      ${t(i,`fragEmission = vec4(0.0);`)}
      return;
    }
    vec4 frontFace = texture(frontFaceTexture, uv);

    ${t(s,n`
    if (frontFace.a == 0.0) {
      fragColor = vec4(0.0);
      ${t(i,`fragEmission = vec4(0.0);`)}
      return;
    }`)}

    vec4 srcColor = texture(colorTexture, uv);
    fragColor = vec4(mix(srcColor.rgb / srcAlpha, frontFace.rgb, frontFace.a), 1.0 - srcColor.a);

    ${t(i,`vec4 emission = texture(emissionTexture, uv);
       vec4 emissionFrontFace = texture(emissionFrontFaceTexture, uv);

       // Modulate transparent emitter by front faces. This case is important for surfaces which contain emitter and
       // non-emitter at the same time. Non-emitter surface parts need to modulate emissions as well.
       emission.rgb = emission.rgb * (1.0 - frontFace.a);

       fragEmission = vec4(mix(emission.rgb / srcAlpha, emissionFrontFace.rgb, emissionFrontFace.a), 1.0 - srcColor.a);
      `)}

    ${t(l,`fragOcclusion.r = pow(srcColor.a, 0.5);`)}
  `),r}var p,m,h=e((()=>{l(),r(),i(),u(),s(),p=class extends d{},m=Object.freeze(Object.defineProperty({__proto__:null,OITBlendPassParameters:p,build:f},Symbol.toStringTag,{value:`Module`}))}));export{p as i,f as n,h as r,m as t};