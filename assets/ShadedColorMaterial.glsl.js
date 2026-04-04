import{n as e}from"./chunk.js";import{a as t,o as n}from"./vec4f64.js";import{n as r,r as i,t as a}from"./glsl.js";import{n as o,t as s}from"./Float3PassUniform.js";import{n as c,t as l}from"./FloatPassUniform.js";import{n as u,t as d}from"./ShaderBuilder.js";import{n as f,r as p}from"./Slice.glsl.js";import{n as m,t as h}from"./Float4PassUniform.js";import{n as g,t as _}from"./FloatBindUniform.js";import{i as v,n as y,r as b,t as x}from"./View.glsl.js";import{n as S,t as C}from"./ColorConversion.glsl.js";import{n as w,t as T}from"./TerrainDepthTest.glsl.js";import{n as E,t as D}from"./OutputColorHighlightOLID.glsl.js";import{n as O,t as k}from"./Transform.glsl.js";function A(e,t){if(!t.screenSizeEnabled)return;let n=e.vertex;x(n,t),n.uniforms.add(new g(`perScreenPixelRatio`,e=>e.camera.perScreenPixelRatio),new c(`screenSizeScale`,e=>e.screenSizeScale)).code.add(i`float computeRenderPixelSizeAt( vec3 pWorld ){
vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
float viewDirectionDistance = abs(dot(viewForward, pWorld - cameraPosition));
return viewDirectionDistance * perScreenPixelRatio;
}
vec3 screenSizeScaling(vec3 position, vec3 anchor){
return position * screenSizeScale * computeRenderPixelSizeAt(anchor) + anchor;
}`)}var j=e((()=>{b(),_(),l(),a()}));function M(e){let t=new u;t.include(O),t.include(A,e),t.fragment.include(f,e),t.include(D,e),t.include(T,e);let{vertex:n,fragment:a}=t;return a.include(C),y(n,e),a.uniforms.add(new h(`uColor`,e=>e.color)),t.attributes.add(`position`,`vec3`),t.varyings.add(`vWorldPosition`,`vec3`),e.screenSizeEnabled&&t.attributes.add(`offset`,`vec3`),e.shadingEnabled&&(v(n),t.attributes.add(`normal`,`vec3`),t.varyings.add(`vViewNormal`,`vec3`),a.uniforms.add(new s(`shadingDirection`,e=>e.shadingDirection)),a.uniforms.add(new h(`shadedColor`,e=>N(e.shadingTint,e.color)))),n.main.add(i`
    vWorldPosition = ${e.screenSizeEnabled?i`screenSizeScaling(offset, position)`:i`position`};
    ${r(e.shadingEnabled,i`vec3 worldNormal = normal;
           vViewNormal = (viewNormal * vec4(worldNormal, 1)).xyz;`)}
    forwardViewPosDepth((view * vec4(vWorldPosition, 1.0)).xyz);
    gl_Position = transformPosition(proj, view, vWorldPosition);
  `),a.main.add(i`
      discardBySlice(vWorldPosition);
      discardByTerrainDepth();
      ${e.shadingEnabled?i`vec3 viewNormalNorm = normalize(vViewNormal);
             float shadingFactor = 1.0 - clamp(-dot(viewNormalNorm, shadingDirection), 0.0, 1.0);
             vec4 finalColor = mix(uColor, shadedColor, shadingFactor);`:i`vec4 finalColor = uColor;`}
      outputColorHighlightOLID(applySlice(finalColor, vWorldPosition), finalColor.rgb);`),t}function N(e,t){let n=1-e[3],r=e[3]+t[3]*n;return r===0?(P[3]=r,P):(P[0]=(e[0]*e[3]+t[0]*t[3]*n)/r,P[1]=(e[1]*e[3]+t[1]*t[3]*n)/r,P[2]=(e[2]*e[3]+t[2]*t[3]*n)/r,P[3]=t[3],P)}var P,F,I=e((()=>{t(),j(),p(),k(),w(),S(),b(),o(),m(),a(),E(),d(),P=n(),F=Object.freeze(Object.defineProperty({__proto__:null,build:M},Symbol.toStringTag,{value:`Module`}))}));export{j as i,I as n,M as r,F as t};