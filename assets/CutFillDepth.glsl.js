import{n as e}from"./chunk.js";import{n as t,r as n,t as r}from"./glsl.js";import{n as i,t as a}from"./Texture2DPassUniform.js";import{n as o,t as s}from"./ShaderBuilder.js";import{n as c,t as l}from"./ScreenSpacePass.glsl.js";import{r as u,t as d}from"./NoParameters.js";import{n as f,t as p}from"./ReadDepth.glsl.js";function m(e){let{preparePass:r}=e,i=new o;return i.include(c),i.fragment.include(p),i.fragment.uniforms.add(new a(`cutFillReferenceDepthTexture`,e=>e.referenceDepthTexture),new a(`cutFillTargetDepthTexture`,e=>e.targetDepthTexture)),i.fragment.code.add(n`bool outsideFar(float depth) {
return depth >= 1.0;
}`),i.fragment.main.add(n`
    float referenceDepth = depthFromTexture(cutFillReferenceDepthTexture, uv);
    float targetDepth = depthFromTexture(cutFillTargetDepthTexture, uv);

    if (outsideFar(targetDepth)) {
      discard;
    }

    ${t(r===0,`
        float depth = referenceDepth - targetDepth;
        fragColor = vec4(min(0.0, depth), max(0.0, depth), 0.0, 0.0);
    `)}

    ${t(r===1,`
        ivec2 texSize = textureSize(cutFillReferenceDepthTexture, 0);
        ivec2 coords = ivec2(gl_FragCoord.xy);
        float packedCoords = float(coords.x) + float(coords.y) * float(texSize.x);

        fragColor = vec4(referenceDepth, packedCoords, 0.0, 0.0);
    `)}
  `),i}var h,g,_=e((()=>{l(),f(),r(),i(),u(),s(),h=class extends d{},g=Object.freeze(Object.defineProperty({__proto__:null,CutFillDepthParameters:h,build:m},Symbol.toStringTag,{value:`Module`}))}));export{h as i,g as n,_ as r,m as t};