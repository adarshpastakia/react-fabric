/* istanbul ignore file */

// language=GLSL
const SHADER_SOURCE = /* glsl */ `
attribute vec4 a_id;
attribute vec4 a_color;
attribute vec4 a_border;
attribute vec2 a_position;
attribute float a_size;
attribute float a_angle;
attribute float a_opacity;

uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_correctionRatio;

varying vec4 v_color;
varying vec4 v_border;
varying vec2 v_diffVector;
varying float v_radius;

const float bias = 255.0 / 254.0;

void main() {
  float size = a_size * u_correctionRatio / u_sizeRatio * 4.0;
  vec2 diffVector = size * vec2(cos(a_angle), sin(a_angle));
  vec2 position = a_position + diffVector;
  gl_Position = vec4(
    (u_matrix * vec3(position, 1)).xy,
    0,
    1
  );

  v_diffVector = diffVector;
  v_radius = size / 2.0;

  #ifdef PICKING_MODE
    // For picking mode, we use the ID as the color:
    v_color = a_id;
  #else
    // For normal mode, we use the color:
    v_color = mix(vec4(0.0), a_color, a_opacity * bias);
  #endif
}
`;

export default SHADER_SOURCE;
