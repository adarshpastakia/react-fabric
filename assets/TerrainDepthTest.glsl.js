import{n as e}from"./chunk.js";import{n as t,r as n,t as r}from"./glsl.js";import{n as i,t as a}from"./ReadDepth.glsl.js";import{n as o,t as s}from"./Texture2DBindUniform.js";function c(e,{occlusionPass:r,terrainDepthTest:i,cullAboveTerrain:o}){let{vertex:c,fragment:l,varyings:u}=e;if(!i)return c.code.add(`void forwardViewPosDepth(vec3 pos) {}`),void l.code.add(`${r?`bool`:`void`} discardByTerrainDepth() { ${t(r,`return false;`)}}`);u.add(`viewPosDepth`,`float`,{invariant:!0}),c.code.add(`void forwardViewPosDepth(vec3 pos) {
    viewPosDepth = pos.z;
  }`),l.include(a),l.uniforms.add(new s(`terrainDepthTexture`,e=>e.terrainDepth?.attachment)).code.add(n`
    ${r?`bool`:`void`} discardByTerrainDepth() {
      float depth = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0).r;
      float linearDepth = linearizeDepth(depth);
      ${r?`return viewPosDepth < linearDepth && depth < 1.0;`:`if(viewPosDepth ${o?`>`:`<=`} linearDepth) discard;`}
    }`)}var l=e((()=>{i(),r(),o()}));export{l as n,c as t};