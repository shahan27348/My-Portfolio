import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const MorphingSphere: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor1: { value: new THREE.Color("#ec4899") },
      uColor2: { value: new THREE.Color("#8b5cf6") },
    }),
    [],
  );

  useFrame((state) => {
    uniforms.uTime.value = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  const vertexShader = `
    uniform float uTime;
    varying vec3 vNormal;
    varying vec3 vPosition;

    void main() {
      vNormal = normal;
      vPosition = position;

      vec3 pos = position;
      float displacement = sin(pos.x * 3.0 + uTime) * sin(pos.y * 3.0 + uTime) * sin(pos.z * 3.0 + uTime) * 0.3;
      pos += normal * displacement;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;

  const fragmentShader = `
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform float uTime;
    varying vec3 vNormal;
    varying vec3 vPosition;

    void main() {
      float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.0);
      vec3 color = mix(uColor1, uColor2, fresnel + sin(uTime * 0.5) * 0.3);
      gl_FragColor = vec4(color, 0.85);
    }
  `;

  return (
    <mesh ref={meshRef} position={[0, 0, -3]}>
      <sphereGeometry args={[2, 128, 128]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
      />
    </mesh>
  );
};

export default MorphingSphere;
