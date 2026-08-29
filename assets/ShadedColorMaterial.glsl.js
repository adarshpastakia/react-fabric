import{n as e}from"./rolldown-runtime.js";import{o as t,s as n}from"./vec4f64.js";import{n as r,r as i,t as a}from"./glsl.js";import{n as o,t as s}from"./ShaderBuilder.js";import{n as c,t as l}from"./FloatPassUniform.js";import{a as u,i as d}from"./Slice.glsl.js";import{n as f,t as p}from"./Float3PassUniform.js";import{n as m,t as h}from"./Float4PassUniform.js";import{n as g,t as _}from"./FloatBindUniform.js";import{i as v,n as y,r as b,t as x}from"./View.glsl.js";import{n as S,t as C}from"./ColorConversion.glsl.js";import{n as w,t as T}from"./OutputColorHighlightOLID.glsl.js";import{n as E,t as D}from"./Transform.glsl.js";function O(e,t){if(!t.screenSizeEnabled)return;let n=e.vertex;x(n,t),n.uniforms.add(new g(`perScreenPixelRatio`,e=>e.camera.perScreenPixelRatio),new c(`screenSizeScale`,e=>e.screenSizeScale)).code.add(i`float computeRenderPixelSizeAt( vec3 pWorld ){
vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
float viewDirectionDistance = abs(dot(viewForward, pWorld - cameraPosition));
return viewDirectionDistance * perScreenPixelRatio;
}
vec3 screenSizeScaling(vec3 position, vec3 anchor){
return position * screenSizeScale * computeRenderPixelSizeAt(anchor) + anchor;
}`)}function k(){return(k=e((()=>{b(),_(),l(),a()})))()}function A(e){let t=new o;t.include(E),t.include(O,e),t.fragment.include(d,e),t.include(w,e);let{vertex:n,fragment:a}=t;return a.include(C),y(n,e),a.uniforms.add(new h(`uColor`,e=>e.color)),t.attributes.add(`position`,`vec3`),t.varyings.add(`vWorldPosition`,`vec3`),e.screenSizeEnabled&&t.attributes.add(`offset`,`vec3`),e.shadingEnabled&&(v(n),t.attributes.add(`normal`,`vec3`),t.varyings.add(`vViewNormal`,`vec3`),a.uniforms.add(new p(`shadingDirection`,e=>e.shadingDirection)),a.uniforms.add(new h(`shadedColor`,e=>j(e.shadingTint,e.color)))),n.main.add(i`
    vWorldPosition = ${e.screenSizeEnabled?i`screenSizeScaling(offset, position)`:i`position`};
    ${r(e.shadingEnabled,i`vec3 worldNormal = normal;
           vViewNormal = (viewNormal * vec4(worldNormal, 1)).xyz;`)}
    gl_Position = transformPosition(proj, view, vWorldPosition);
  `),a.main.add(i`
      discardBySlice(vWorldPosition);

      ${e.shadingEnabled?i`vec3 viewNormalNorm = normalize(vViewNormal);
             float shadingFactor = 1.0 - clamp(-dot(viewNormalNorm, shadingDirection), 0.0, 1.0);
             vec4 finalColor = mix(uColor, shadedColor, shadingFactor);`:i`vec4 finalColor = uColor;`}
      outputColorHighlightOLID(applySlice(finalColor, vWorldPosition), finalColor.rgb);`),t}function j(e,t){let n=1-e[3],r=e[3]+t[3]*n;return r===0?(M[3]=r,M):(M[0]=(e[0]*e[3]+t[0]*t[3]*n)/r,M[1]=(e[1]*e[3]+t[1]*t[3]*n)/r,M[2]=(e[2]*e[3]+t[2]*t[3]*n)/r,M[3]=t[3],M)}var M,N;function P(){return(P=e((()=>{t(),k(),u(),D(),S(),b(),f(),m(),a(),T(),s(),M=n(),N=Object.freeze(Object.defineProperty({__proto__:null,build:A},Symbol.toStringTag,{value:`Module`}))})))()}export{k as i,N as n,A as r,P as t};