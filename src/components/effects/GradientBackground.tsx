import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const fragmentShader = `
  uniform float time;
  uniform vec2 resolution;
  
  void main() {
    vec2 uv = gl_FragCoord.xy/resolution.xy;
    vec3 color1 = vec3(0.1, 0.1, 0.2);
    vec3 color2 = vec3(0.3, 0.2, 0.5);
    float noise = fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453);
    vec3 color = mix(color1, color2, noise + 0.5 * sin(time));
    gl_FragColor = vec4(color, 1.0);
  }
`;

const vertexShader = `
  void main() {
    gl_Position = vec4(position, 1.0);
  }
`;

export const GradientBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const cameraRef = useRef<THREE.Camera>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const materialRef = useRef<THREE.ShaderMaterial>();
  const startTime = useRef(Date.now());

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    sceneRef.current = new THREE.Scene();
    cameraRef.current = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    
    rendererRef.current = new THREE.WebGLRenderer({ alpha: true });
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(rendererRef.current.domElement);

    // Create shader material
    materialRef.current = new THREE.ShaderMaterial({
      fragmentShader,
      vertexShader,
      uniforms: {
        time: { value: 0.0 },
        resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
      }
    });

    // Create mesh
    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, materialRef.current);
    sceneRef.current.add(mesh);

    // Animation loop
    const animate = () => {
      if (!materialRef.current || !rendererRef.current || !sceneRef.current || !cameraRef.current) return;
      
      const elapsedTime = (Date.now() - startTime.current) / 1000;
      materialRef.current.uniforms.time.value = elapsedTime;
      
      rendererRef.current.render(sceneRef.current, cameraRef.current);
      requestAnimationFrame(animate);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!rendererRef.current || !materialRef.current) return;
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      materialRef.current.uniforms.resolution.value.set(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(rendererRef.current!.domElement);
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 -z-10" />;
};