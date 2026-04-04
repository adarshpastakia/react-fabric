import{n as e}from"./chunk.js";import{r as t,s as n}from"./vec2f64.js";import{r,t as i}from"./glsl.js";import{n as a,t as o}from"./ShaderBuilder.js";import{n as s,t as c}from"./ScreenSpacePass.glsl.js";import{r as l,t as u}from"./NoParameters.js";import{n as d,t as f}from"./Float2PassUniform.js";import{a as p,n as m,o as h,r as g,s as _}from"./NoiseTextureAtlasDimensions.js";function v(e){let t=new a;return t.include(s,!1),t.fragment.code.add(r`float remap(float x, float low1, float high1, float low2, float high2) {
return low2 + (x - low1) * (high2 - low2) / (high1 - low1);
}`),e.mode===0&&(t.fragment.code.add(r`float saturate(float x) {
return clamp(x, 0.0, 1.0);
}`),t.fragment.code.add(r`vec3 modulo(vec3 m, float n) {
return mod(mod(m, n) + n, n);
}
vec3 hash(vec3 p3, float frequency) {
p3 = modulo(p3, frequency);
p3 = fract(p3 * vec3(0.1031, 0.1030, 0.0973));
p3 += dot(p3, p3.yxz + 33.33);
return -1.0 + 2.0 * fract((p3.xxy + p3.yxx) * p3.zyx);
}`),t.fragment.code.add(r`vec3 fade(vec3 t) {
return (t * t * t) * (t * (t * 6.0 - 15.0) + 10.0);
}`),t.fragment.code.add(r`
    float gradientNoise(vec3 p, float frequency) {
      vec3 i = floor(p);
      vec3 f = fract(p);
      vec3 u = fade(f);
      return mix( mix( mix( dot( hash( i + vec3(0.0,0.0,0.0), frequency), f - vec3(0.0,0.0,0.0) ),
                            dot( hash( i + vec3(1.0,0.0,0.0), frequency), f - vec3(1.0,0.0,0.0) ), u.x),
                       mix( dot( hash( i + vec3(0.0,1.0,0.0), frequency), f - vec3(0.0,1.0,0.0) ),
                            dot( hash( i + vec3(1.0,1.0,0.0), frequency), f - vec3(1.0,1.0,0.0) ), u.x), u.y),
                  mix( mix( dot( hash( i + vec3(0.0,0.0,1.0), frequency), f - vec3(0.0,0.0,1.0) ),
                            dot( hash( i + vec3(1.0,0.0,1.0), frequency), f - vec3(1.0,0.0,1.0) ), u.x),
                       mix( dot( hash( i + vec3(0.0,1.0,1.0), frequency), f - vec3(0.0,1.0,1.0) ),
                            dot( hash( i + vec3(1.0,1.0,1.0), frequency), f - vec3(1.0,1.0,1.0) ), u.x), u.y), u.z );
    }

    float getPerlinNoise(vec3 pos, float frequency) {
      float octaveFrequency = 2.0;
      float sum = 0.0;
      float weightSum = 0.0;
      float weight = 1.0;

      for (int oct = 0; oct < 3; oct++) {
        vec3 p = pos * frequency;
        float val = 0.5 + 0.5 * gradientNoise(p, frequency);
        sum += val * weight;
        weightSum += weight;
        weight *= 0.5;
        frequency *= octaveFrequency;
      }

      float noise = (sum / weightSum);
      noise = saturate(noise);
      return noise;
    }

    float worley(vec3 pos, float numCells) {
      vec3 p = pos * numCells;
      float d = 1.0e10;

      for (int x = -1; x <= 1; x++) {
        for (int y = -1; y <= 1; y++) {
          for (int z = -1; z <= 1; z++) {
            vec3 tp = floor(p) + vec3(x, y, z);
            tp = p - tp - (hash(tp, numCells) * 0.5 + 0.5);
            d = min(d, dot(tp, tp));
          }
        }
      }

      return 1.0 - clamp(d, 0.0, 1.0);
    }

    vec3 get3Dfrom2D(vec2 uv) {
      vec2 tile = floor(uv);
      float z = floor(${r.float(p)} * tile.y + tile.x);
      return vec3(fract(uv), z);
    }

    float getTextureForPointPerlinWorley(vec3 p) {
      float perlinNoise = getPerlinNoise(p, ${r.float(8)});

      float worley0 = worley(p, ${r.float(2)} * 2.0);
      float worley1 = worley(p, ${r.float(2)} * 8.0);
      float worley2 = worley(p, ${r.float(2)} * 14.0);

      float worleyFBM = worley0 * 0.625 + worley1 * 0.25 + worley2 * 0.125;
      return remap(perlinNoise, 0.0, 1.0, worleyFBM, 1.0);
    }

    float getTextureForPointWorley(vec3 p) {
      float worley0 = worley(p, ${r.float(2)});
      float worley1 = worley(p, ${r.float(2)} * 2.0);
      float worley2 = worley(p, ${r.float(2)} * 4.0);
      float worley3 = worley(p, ${r.float(2)} * 8.0);

      float FBM0 = worley0 * 0.625 + worley1 * 0.25 + worley2 * 0.125;
      float FBM1 = worley1 * 0.625 + worley2 * 0.25 + worley3 * 0.125;
      float FBM2 = worley2 * 0.75 + worley3 * 0.25;

      return FBM0 * 0.625 + FBM1 * 0.25 + FBM2 * 0.125;
    }
  `)),t.fragment.uniforms.add(new f(`weatherTile`,e=>e.weatherTile)).code.add(r`
    vec2 modulo(vec2 m, float n){
      return mod(mod(m, n) + n, n);
    }

    vec2 hash(vec2 p){
      // Get position of p in weather tile
      p = modulo(p, ${r.float(128)});

      // Get global coordinates of p
      p += weatherTile * ${r.float(128)};

      // Limit position to avoid numerical instability
      p = modulo(p, ${r.float(h)});

      vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
      p3 += dot(p3, p3.yzx + 33.33);
      return 2.0 * fract((p3.xx + p3.yz) * p3.zy) - 1.0;
    }

    vec2 fade(vec2 t){
      return (t * t * t) * (t * (t * 6.0 - 15.0) + 10.0);
    }

    float gradientNoise(vec2 p){
      vec2 i = floor( p );
      vec2 f = fract( p );

      vec2 u = fade(f);

      // Bilinear interpolation of gradients at cell vertices around point
      return  mix(
                mix(dot( hash( i + vec2(0.0,0.0) ), f - vec2(0.0,0.0) ),
                    dot( hash( i + vec2(1.0,0.0) ), f - vec2(1.0,0.0) ), u.x),
                mix(dot( hash( i + vec2(0.0,1.0) ), f - vec2(0.0,1.0) ),
                    dot( hash( i + vec2(1.0,1.0) ), f - vec2(1.0,1.0) ), u.x),
                u.y);
    }

    float worley(vec2 p){
      float d = 1.0e10;
      for (int x = -1; x <= 1; x++){
        for (int y = -1; y <= 1; y++){
                vec2 tp = floor(p) + vec2(x, y);
                tp = p - tp - (0.5 + 0.5 * hash(tp));
                d = min(d, dot(tp, tp));
            }
        }
      return 1.0 - clamp(d, 0.0, 1.0);
    }
  `),e.mode===0?t.fragment.main.add(r`
      float padWidth = 1.0;
      float paddedSize = ${r.float(m)} + 2.0 * padWidth;
      float tileCount = ${r.float(p)} * ${r.float(p)};
      vec2 tile = floor((gl_FragCoord.xy - 0.5) / paddedSize);

      bool padCell = false;
      if (mod(gl_FragCoord.x, paddedSize) == 0.5 || mod(gl_FragCoord.x, paddedSize) == paddedSize - 0.5) {
        padCell = true;
      }

      if (mod(gl_FragCoord.y, paddedSize) == 0.5 || mod(gl_FragCoord.y, paddedSize) == paddedSize - 0.5) {
        padCell = true;
      }

      bool startPadX = false;
      bool startPadY = false;
      bool endPadX = false;
      bool endPadY = false;

      if (gl_FragCoord.x == tile.x * paddedSize + 0.5) {
        startPadX = true;
      }

      if (gl_FragCoord.y == tile.y * paddedSize + 0.5) {
        startPadY = true;
      }

      if (gl_FragCoord.x == (tile.x + 1.0) * paddedSize - 0.5) {
        endPadX = true;
      }

      if (gl_FragCoord.y == (tile.y + 1.0) * paddedSize - 0.5) {
        endPadY = true;
      }

      vec2 padding = vec2(2.0 * padWidth) * tile;
      vec2 uv;

      if (padCell) {
        vec2 pixel = gl_FragCoord.xy - padWidth - padding;

        if (startPadX) {
          pixel.x += ${r.float(m)};
        }

        if (startPadY) {
          pixel.y += ${r.float(m)};
        }

        if (endPadX) {
          pixel.x -= ${r.float(m)};
        }

        if (endPadY) {
          pixel.y -= ${r.float(m)};
        }

        uv = vec2(pixel.xy / ${r.float(m)});
      } else {
        vec2 pixel = gl_FragCoord.xy - padWidth - padding;
        uv = vec2(pixel.xy / ${r.float(m)});
      }

      vec3 p_ = get3Dfrom2D(uv);
      vec3 p = p_;
      p.z /= (${r.float(p)} * ${r.float(p)});

      float worleyPerlinNoise = getTextureForPointPerlinWorley(p);
      float worleyNoise = getTextureForPointWorley(p);

      fragColor.r = saturate(remap(worleyPerlinNoise, worleyNoise, 1.0, 0.0, 1.0));

      p_ = mod(p_ + 1.0, ${r.float(p)} * ${r.float(p)});
      p = p_;
      p.z /= (${r.float(p)} * ${r.float(p)});

      worleyPerlinNoise = getTextureForPointPerlinWorley(p);
      worleyNoise = getTextureForPointWorley(p);

      fragColor.g = saturate(remap(worleyPerlinNoise, worleyNoise, 1.0, 0.0, 1.0));

      vec2 mapUV = ${r.float(128)} * (gl_FragCoord.xy / ${r.float(_)});
      float map = abs(gradientNoise(mapUV));
      map = remap(map, 0.25 * (1.0 - worley(8.0 * mapUV)), 1.0, 0.0, 1.0);
      fragColor.ba = vec2(0.0, map);
      `):t.fragment.main.add(r`
      vec2 mapUV = ${r.float(128)} * (gl_FragCoord.xy / ${r.float(_)});
      float map = abs(gradientNoise(mapUV));
      map = remap(map, 0.25 * (1.0 - worley(8.0 * mapUV)), 1.0, 0.0, 1.0);
      fragColor = vec4(map);
    `),t}var y,b,x=e((()=>{t(),g(),c(),d(),i(),l(),o(),y=class extends u{constructor(){super(...arguments),this.weatherTile=n(0,0)}},b=Object.freeze(Object.defineProperty({__proto__:null,NoiseTextureAtlasPassParameters:y,build:v},Symbol.toStringTag,{value:`Module`}))}));export{b as i,x as n,v as r,y as t};