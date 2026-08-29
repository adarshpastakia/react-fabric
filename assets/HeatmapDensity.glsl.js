import{n as e}from"./rolldown-runtime.js";import{r as t,t as n}from"./glsl.js";import{n as r,t as i}from"./ShaderBuilder.js";import{n as a,t as o}from"./FloatPassUniform.js";import{n as s,r as c}from"./View.glsl.js";function l(e){let n=new r,{vertex:i,fragment:o,attributes:c,varyings:l}=n;s(i,e);let{isAttributeDriven:u,usesHalfFloat:d}=e;return c.add(`position`,`vec3`),c.add(`uv0`,`vec2`),u&&(c.add(`featureAttribute`,`float`),l.add(`attributeValue`,`float`)),d&&o.constants.add(`compressionFactor`,`float`,.25),l.add(`unitCirclePos`,`vec2`),i.uniforms.add(new a(`radius`,({resolutionForScale:e,searchRadius:t},{camera:n,screenToWorldRatio:r,overlayStretch:i})=>2*t*(e===0?1:e/r)*n.pixelRatio/n.fullViewport[2]/i)),i.main.add(t`
    unitCirclePos = uv0;

    vec4 posProj = proj * (view * vec4(${`position`}, 1.0));
    vec4 quadOffset = vec4(unitCirclePos * radius, 0.0, 0.0);

    ${u?t`attributeValue = ${`featureAttribute`};`:``}
    gl_Position = posProj + quadOffset;
  `),o.main.add(t`
    float radiusRatioSquared = dot(unitCirclePos, unitCirclePos);
    if (radiusRatioSquared > 1.0) {
      fragColor = vec4(0.0);
    }
    else {
      float oneMinusRadiusRatioSquared = 1.0 - radiusRatioSquared;
      float density = oneMinusRadiusRatioSquared * oneMinusRadiusRatioSquared ${u?t` * attributeValue`:``} ${d?t` * compressionFactor`:``};
      fragColor = vec4(density);
    }
  `),n}var u;function d(){return(d=e((()=>{c(),o(),n(),i(),u=Object.freeze(Object.defineProperty({__proto__:null,build:l},Symbol.toStringTag,{value:`Module`}))})))()}export{d as n,l as r,u as t};