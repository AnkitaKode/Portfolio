import React from 'react';
import { Float, MeshDistortMaterial } from '@react-three/drei';

export default function AnimatedSphere() {
  return (
    <Float speed={1.4} rotationIntensity={0.8} floatIntensity={1.5}>
      <mesh scale={2.2}>
        <sphereGeometry args={[1, 32, 32]} />
        <MeshDistortMaterial
          color="#4338ca"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.1}
        />
      </mesh>
    </Float>
  );
}
