import { useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrthographicCamera } from '@react-three/drei';

function NoiseShader() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
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
  `;

  const shaderMaterial = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      uTime: { value: 0 }
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <primitive object={shaderMaterial} ref={materialRef} />
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