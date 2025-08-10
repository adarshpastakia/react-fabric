/* istanbul ignore file */

// language=GLSL
const SHADER_SOURCE = /* glsl */ `
attribute vec4 a_id;
${Array(10)
  .fill(0)
  .map((_, idx) => "attribute vec4 a_colors_" + idx + ";")
  .join("\n")}
attribute vec2 a_position;
attribute float a_size;
attribute float a_angle;
attribute float a_segments;
attribute float a_opacity;

uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_correctionRatio;

varying vec4 v_color;
${Array(10)
  .fill(0)
  .map((_, idx) => "varying vec4 v_colors_" + idx + ";")
  .join("\n")}
varying vec2 v_diffVector;
varying float v_radius;
varying float v_segmentAngle;
varying float v_opacity;

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
  v_opacity = a_opacity;
  // For normal mode, we use the color:
  ${Array(10)
    .fill(0)
    .map((_, idx) => "v_colors_" + idx + " = a_colors_" + idx + ";")
    .join("\n")}
  v_segmentAngle = 0.0;
  if(a_segments > 0.0) {
    v_segmentAngle = ${Math.PI * 2} / a_segments;
  }
  #endif
}
`;

export default SHADER_SOURCE;
