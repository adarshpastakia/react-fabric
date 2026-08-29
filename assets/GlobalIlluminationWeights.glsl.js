import{n as e}from"./rolldown-runtime.js";import{r as t,t as n}from"./glsl.js";function r(e){e.fragment.code.add(t`
    float globalIlluminationNormalSimilarityWeight(vec3 sampleNormal, vec3 centerNormal) {
      return clamp(1.0 - ${t.float(i)} * length(sampleNormal - centerNormal), 0.0, 1.0);
    }

    float globalIlluminationDepthNormalCorrection(vec3 encodedNormal) {
      vec3 decodedNormal = normalize(encodedNormal * 2.0 - 1.0);
      return pow(max((1.0 - abs(decodedNormal.x)) * (1.0 - abs(decodedNormal.y)), 0.01), ${t.float(a)});
    }

    float globalIlluminationDepthSharpness(float projScale, float depth) {
      return ${t.float(o)} * projScale / depth;
    }

    float globalIlluminationDepthSharpness(float projScale, float depth, vec3 encodedNormal) {
      return globalIlluminationDepthSharpness(projScale, depth) * globalIlluminationDepthNormalCorrection(encodedNormal);
    }
  `)}var i,a,o;function s(){return(s=e((()=>{n(),i=15.3,a=5,o=-.05})))()}export{r as n,s as t};