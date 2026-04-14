import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
import { Suspense } from "react";
import {
  FloatingSphere,
  FloatingBox,
  FloatingTorus,
  ParticleField,
} from "./FloatingShapes";
import InteractiveParticles from "./InteractiveParticles";
import MorphingSphere from "./MorphingSphere";

const Scene3D: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-40">
      <Canvas
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        onCreated={({ gl }) => {
          gl.setClearColor("#000000", 0);
        }}
      >
        <Suspense fallback={null}>
          {/* Camera */}
          <PerspectiveCamera makeDefault position={[0, 0, 10]} />

          {/* Lights */}
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight
            position={[-10, -10, -5]}
            intensity={0.5}
            color="#ec4899"
          />
          <spotLight
            position={[0, 10, 0]}
            angle={0.3}
            penumbra={1}
            intensity={1}
            castShadow
          />

          {/* Morphing Sphere */}
          <MorphingSphere />

          {/* Interactive Particles */}
          <InteractiveParticles count={1500} />

          {/* 3D Objects - Colorful palette */}
          <FloatingSphere position={[-4, 2, 0]} color="#ec4899" speed={0.8} />
          <FloatingSphere position={[5, -2, -3]} color="#8b5cf6" speed={1.2} />

          <FloatingBox position={[3, 3, -2]} color="#3b82f6" speed={0.6} />
          <FloatingBox position={[-5, -3, 2]} color="#22c55e" speed={1} />

          <FloatingTorus position={[0, 0, -5]} color="#ec4899" speed={0.5} />
          <FloatingTorus position={[-3, 1, 3]} color="#8b5cf6" speed={0.9} />

          {/* Particle Field */}
          <ParticleField />

          {/* Stars Background */}
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0.5}
            fade
            speed={1}
          />

          {/* Controls */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
