import{n as e}from"./chunk.js";import{r as t,t as n}from"./glsl.js";import{n as r,t as i}from"./Texture2DPassUniform.js";import{n as a,t as o}from"./ShaderBuilder.js";import{n as s,t as c}from"./ScreenSpacePass.glsl.js";function l(){let e=new a;return e.include(s),e.outputs.add(`fragEdges`,`vec2`),e.fragment.code.add(t`float absMax3(vec3 v) {
vec3 t = abs(v);
return max(max(t.r, t.g), t.b);
}`),e.fragment.uniforms.add(new i(`colorTexture`,e=>e.color)).main.add(t`
    vec2 resolution = 1.0 / vec2(textureSize(colorTexture, 0));
    vec4 offsets[3];
    offsets[0] = vec4(uv.x - resolution.x, uv.y, uv.x, uv.y + resolution.y);
    offsets[1] = vec4(uv.x + resolution.x, uv.y, uv.x, uv.y - resolution.y);
    offsets[2] = vec4(uv.x - 2.0 * resolution.x, uv.y, uv.x, uv.y + 2.0 * resolution.y);

    // Calculate color deltas:
    vec3 C = texture(colorTexture, uv).rgb;
    vec3 Cleft = texture(colorTexture, offsets[0].xy).rgb;
    vec3 Ctop = texture(colorTexture, offsets[0].zw).rgb;
    vec2 delta = vec2(absMax3(C - Cleft), absMax3(C - Ctop));
    vec2 edges = step(vec2(${t.float(u)}), delta);

    // discard if there is no edge:
    if (dot(edges, vec2(1.0)) == 0.0) {
      fragEdges = vec2(0.0);
    }
    else {
      // Calculate right and bottom deltas:
      vec3 Cright = texture(colorTexture, offsets[1].xy).rgb;
      float horizontal = absMax3(C - Cright);

      vec3 Cbottom  = texture(colorTexture, offsets[1].zw).rgb;
      float vertical = absMax3(C - Cbottom);

      // Calculate the maximum delta in the direct neighborhood:
      float maxDelta = max(max(max(delta.x, delta.y), horizontal), vertical);

      // Calculate left-left and top-top deltas:
      vec3 Cleftleft  = texture(colorTexture, offsets[2].xy).rgb;
      horizontal = absMax3(C - Cleftleft);

      vec3 Ctoptop = texture(colorTexture, offsets[2].zw).rgb;
      vertical = absMax3(C - Ctoptop);

      // Calculate the final maximum delta:
      maxDelta = max(max(maxDelta, horizontal), vertical);

      // Local contrast adaptation in action:
      fragEdges = edges * step(maxDelta, float(${t.float(d)}) * delta);
    }
  `),e}var u,d,f,p=e((()=>{c(),n(),r(),o(),u=.05,d=2,f=Object.freeze(Object.defineProperty({__proto__:null,build:l},Symbol.toStringTag,{value:`Module`}))}));export{p as n,l as r,f as t};