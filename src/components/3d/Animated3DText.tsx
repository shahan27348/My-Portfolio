import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text3D, Center } from "@react-three/drei";
import * as THREE from "three";

interface Animated3DTextProps {
  text: string;
  position?: [number, number, number];
  color?: string;
}

const Animated3DText: React.FC<Animated3DTextProps> = ({
  text,
  position = [0, 0, 0],
  color = "#64ffda",
}) => {
  const textRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!textRef.current) return;
    const time = state.clock.getElapsedTime();
    textRef.current.position.y = position[1] + Math.sin(time) * 0.1;
    textRef.current.rotation.x = Math.sin(time * 0.5) * 0.05;
    textRef.current.rotation.y = Math.cos(time * 0.3) * 0.05;
  });

  return (
    <Center position={position}>
      <Text3D
        ref={textRef}
        font="/fonts/helvetiker_regular.typeface.json"
        size={0.5}
        height={0.2}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
      >
        {text}
        <meshStandardMaterial
          color={color}
          metalness={0.8}
          roughness={0.2}
          emissive={color}
          emissiveIntensity={0.5}
        />
      </Text3D>
    </Center>
  );
};

export default Animated3DText;
