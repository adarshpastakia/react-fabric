/* istanbul ignore file */

// language=GLSL
const SHADER_SOURCE = /* glsl */ `
precision highp float;

varying vec4 v_fill;
varying vec4 v_color;
varying vec4 v_texture;
varying vec2 v_diffVector;
varying float v_opacity;
varying float v_radius;

uniform sampler2D u_atlas;
uniform float u_correctionRatio;
uniform float u_cameraAngle;
uniform float u_percentagePadding;
uniform bool u_keepWithinCircle;
uniform bool u_shape;

const vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);

const float radius = 0.5;

void main(void) {
  float border = 2.0 * u_correctionRatio;
  float dist = length(v_diffVector);
  vec4 color = v_fill;

  float c = cos(-u_cameraAngle);
  float s = sin(-u_cameraAngle);
  vec2 diffVector = mat2(c, s, -s, c) * (v_diffVector);

  // No antialiasing for picking mode:
  #ifdef PICKING_MODE
  border = 0.0;
  color = v_color;

  #else
  // First case: No image to display
  if (v_texture.w <= 0.0) {
     color = v_fill;
  }

  // Second case: Image loaded into the texture
  else {
    float paddingRatio = 1.0 + 2.0 * u_percentagePadding;
    float coef = 1.0;
    vec2 coordinateInTexture = diffVector * vec2(paddingRatio, -paddingRatio) / v_radius / 2.0 * coef + vec2(0.5, 0.5);
    vec4 texel = texture2D(u_atlas, (v_texture.xy + coordinateInTexture * v_texture.zw), -1.0);

    // Colorize all visible image pixels:
    color = mix(v_fill, v_color, texel.a);
    
    // Erase pixels "in the padding":
    if (abs(diffVector.x) > v_radius / paddingRatio || abs(diffVector.y) > v_radius / paddingRatio) {
      color = v_fill;
    }
  }
  #endif

  // Crop in a circle when u_keepWithinCircle is truthy:
  if(v_opacity == 0.0) {
    gl_FragColor = transparent;
  }
  else if (dist - v_radius + border > border)
    gl_FragColor = transparent;
  else if (dist - v_radius + border > 0.0) {
    gl_FragColor = mix(v_fill, transparent, (dist - v_radius + border) / border);
  }
  else  {
    gl_FragColor = mix(v_fill, color, v_opacity);
  }
  

}
`;

export default SHADER_SOURCE;
