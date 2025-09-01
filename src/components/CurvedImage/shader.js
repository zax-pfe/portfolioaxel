// shader.js
export const vertex = `
varying vec2 vUv;
uniform float uTime;
uniform float uAmplitude;
uniform float uWaveLength;

void main() {
    vUv = uv;
    vec3 newPosition = position;

    // Wave sur l'axe Z
    newPosition.z += uAmplitude * sin(position.x * uWaveLength + uTime);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}
`;

export const fragment = `
uniform sampler2D uTexture;
varying vec2 vUv;
uniform float uOpacity;

void main() {
    // Simple affichage de la texture
    vec3 texture = texture2D(uTexture, vUv).rgb;
    gl_FragColor = vec4(texture, uOpacity);
}
`;
