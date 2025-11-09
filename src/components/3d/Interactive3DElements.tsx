import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

interface FloatingCardProps {
  position: [number, number, number];
  rotationSpeed?: number;
}

export const FloatingCard3D: React.FC<FloatingCardProps> = ({
  position,
  rotationSpeed = 0.5,
}) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();
    groupRef.current.rotation.y = time * rotationSpeed;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={groupRef} position={position}>
        <mesh>
          <boxGeometry args={[2, 3, 0.2]} />
          <meshStandardMaterial
            color="#0a192f"
            metalness={0.9}
            roughness={0.1}
            emissive="#64ffda"
            emissiveIntensity={0.1}
          />
        </mesh>
        {/* Card border glow */}
        <mesh position={[0, 0, 0.1]}>
          <boxGeometry args={[2.1, 3.1, 0.05]} />
          <meshStandardMaterial
            color="#64ffda"
            metalness={0.8}
            roughness={0.2}
            emissive="#64ffda"
            emissiveIntensity={0.5}
            transparent
            opacity={0.3}
          />
        </mesh>
      </group>
    </Float>
  );
};

export const CodeBlockMesh: React.FC<{
  position: [number, number, number];
}> = ({ position }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(time * 0.3) * 0.1;
    meshRef.current.rotation.y = time * 0.2;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#64ffda"
          wireframe
          emissive="#64ffda"
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
};

export const TechIconSphere: React.FC<{
  position: [number, number, number];
  color: string;
}> = ({ position, color }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.4;
    meshRef.current.rotation.y = time * 0.3;
    meshRef.current.position.y = position[1] + Math.sin(time * 2) * 0.3;
  });

  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[0.5, 1]} />
        <meshStandardMaterial
          color={color}
          metalness={0.8}
          roughness={0.2}
          emissive={color}
          emissiveIntensity={0.4}
          wireframe
        />
      </mesh>
    </Float>
  );
};
