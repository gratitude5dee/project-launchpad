import { useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrthographicCamera } from '@react-three/drei';
import { extend } from '@react-three/fiber';

// Create a custom shader material
class NoiseShaderMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        uTime: { value: 0 }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        varying vec2 vUv;

        float random(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
        }

        void main() {
          vec2 st = vUv;
          float noise = random(st + uTime * 0.1);
          vec3 color1 = vec3(0.039, 0.059, 0.11);
          vec3 color2 = vec3(0.145, 0.161, 0.208);
          vec3 finalColor = mix(color1, color2, noise);
          gl_FragColor = vec4(finalColor, 1.0);
        }
      `
    });
  }
}

// Extend Three.js with our custom material
extend({ NoiseShaderMaterial });

function NoiseShader() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<NoiseShaderMaterial>(null);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <noiseShaderMaterial ref={materialRef} />
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