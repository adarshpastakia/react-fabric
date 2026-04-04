import{n as e}from"./chunk.js";import{c as t,p as n}from"./screenUtils.js";import{o as r,u as i}from"./vec4.js";import{a,o}from"./vec4f64.js";import{r as s,t as c}from"./glsl.js";import{n as l,t as u}from"./Float4PassUniform.js";import{n as d,r as f,t as p}from"./ScreenSizePerspective.glsl.js";import{r as m,t as h}from"./View.glsl.js";function g(e,t){let n=e.vertex;t.hasVerticalOffset?(_(n),t.hasScreenSizePerspective&&(e.include(f),p(n),h(e.vertex,t)),n.code.add(s`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${t.spherical?s`vec3 worldNormal = normalize(worldPos + localOrigin);`:s`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${t.hasScreenSizePerspective?s`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:s`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):n.code.add(s`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}function _(e){e.uniforms.add(new u(`verticalOffset`,(e,t)=>{let{minWorldLength:n,maxWorldLength:r,screenLength:a}=e.verticalOffset,o=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]);return i(y,a*(t.camera.pixelRatio||1),o,n,r)}))}var v,y,b=e((()=>{t(),r(),a(),d(),m(),l(),c(),v=class{constructor(e){this.screenLength=n(e.screenLength),this.minWorldLength=e.minWorldLength??0,this.maxWorldLength=e.maxWorldLength??1/0}},y=o()}));export{g as i,_ as n,b as r,v as t};