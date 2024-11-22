import { useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrthographicCamera } from '@react-three/drei';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float time;
  varying vec2 vUv;
  
  void main() {
    vec3 color1 = vec3(0.1, 0.1, 0.4);
    vec3 color2 = vec3(0.3, 0.2, 0.5);
    float noise = fract(sin(dot(vUv, vec2(12.9898, 78.233))) * 43758.5453123);
    vec3 finalColor = mix(color1, color2, noise + sin(time * 0.5) * 0.5);
    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

function NoiseShader() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = state.clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          time: { value: 0 }
        }}
      />
    </mesh>
  );
}

export const GradientBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <OrthographicCamera makeDefault position={[0, 0, 1]} />
        <NoiseShader />
      </Canvas>
    </div>
  );
};