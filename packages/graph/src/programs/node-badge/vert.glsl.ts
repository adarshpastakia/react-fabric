/* istanbul ignore file */

const POSITION: KeyValue = {
  "top-left": "0.0",
  "top-right": "1.0",
  "bottom-left": "2.0",
  "bottom-right": "3.0",
  top: "4.0",
  left: "5.0",
  right: "6.0",
  bottom: "7.0",
};

// language=GLSL
const VERTEX_SHADER_SOURCE = /* glsl */ `
attribute vec4 a_id;
attribute vec4 a_fill;
attribute vec4 a_color;
attribute vec2 a_position;
attribute float a_circle;
attribute float a_placement;
attribute float a_size;
attribute float a_angle;
attribute float a_opacity;
attribute vec4 a_texture;

uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_correctionRatio;

varying vec4 v_fill;
varying vec4 v_color;
varying vec2 v_diffVector;
varying float v_radius;
varying float v_opacity;
varying vec4 v_texture;

const float bias = 255.0 / 254.0;
const float marginRatio = 1.1;
const vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);

void main() {
  float size = (a_size / 4.0) * u_correctionRatio / u_sizeRatio * 4.0;
  float originalSize = a_size * u_correctionRatio / u_sizeRatio * 4.0;
  vec2 diffVector = size * vec2(cos(a_angle), sin(a_angle));
  vec2 position = a_position + diffVector * marginRatio;
  float divisor = a_circle == 1.0 ? 2.5 : 2.0;
  if(a_placement == ${POSITION["top-left"]}) {
    position.x -= originalSize / divisor;
    position.y += originalSize / divisor;
  }
  if(a_placement == ${POSITION["top-right"]}) {
    position.x += originalSize / divisor;
    position.y += originalSize / divisor;
  }
  if(a_placement == ${POSITION["bottom-left"]}) {
    position.x -= originalSize / divisor;
    position.y -= originalSize / divisor;
  }
  if(a_placement == ${POSITION["bottom-right"]}) {
    position.x += originalSize / divisor;
    position.y -= originalSize / divisor;
  }
  if(a_placement == ${POSITION.top}) {
    position.y += originalSize / 2.0;
  }
  if(a_placement == ${POSITION.bottom}) {
    position.y -= originalSize / 2.0;
  }
  if(a_placement == ${POSITION.left}) {
    position.x -= originalSize / 2.0;
  }
  if(a_placement == ${POSITION.right}) {
    position.x += originalSize / 2.0;
  }
  gl_Position = vec4(
    (u_matrix * vec3(position, 1)).xy,
    0,
    1
  );

  v_diffVector = diffVector;
  v_radius = size / 2.0 / marginRatio;

  #ifdef PICKING_MODE
  // For picking mode, we use the ID as the color:
  v_color = a_id;
  #else
  // For normal mode, we use the color:
  v_fill = mix(transparent, a_fill, a_opacity * bias);
  v_color = vec4(a_color.rgb, a_opacity * bias);
  v_opacity = a_opacity;
  // Pass the texture coordinates:
  v_texture = a_texture;
  #endif
}
`;

export default VERTEX_SHADER_SOURCE;
