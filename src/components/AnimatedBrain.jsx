import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function BrainParticles() {
  const ref = useRef();

  const sphere = useMemo(() => {
    const count = 900;
    const positions = new Float32Array(count * 3);
    
    // Create brain-like structure with interconnected nodes
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 2 + Math.random() * 2.8;
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      const d = Math.min(delta, 0.05);
      ref.current.rotation.x -= d * 0.05;
      ref.current.rotation.y -= d * 0.07;
      
      // Gentle pulsing effect
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.4) * 0.06;
      ref.current.scale.setScalar(scale);
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#818cf8"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

function NeuralConnections() {
  const ref = useRef();
  
  const connections = useMemo(() => {
    const count = 70;
    const positions = new Float32Array(count * 6);
    
    for (let i = 0; i < count; i++) {
      const idx = i * 6;
      positions[idx] = (Math.random() - 0.5) * 7;
      positions[idx + 1] = (Math.random() - 0.5) * 7;
      positions[idx + 2] = (Math.random() - 0.5) * 7;

      positions[idx + 3] = (Math.random() - 0.5) * 7;
      positions[idx + 4] = (Math.random() - 0.5) * 7;
      positions[idx + 5] = (Math.random() - 0.5) * 7;
    }
    
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      const d = Math.min(delta, 0.05);
      ref.current.rotation.y += d * 0.06;
      if (ref.current.material) {
        ref.current.material.opacity = 0.12 + Math.sin(state.clock.elapsedTime * 0.8) * 0.04;
      }
    }
  });

  return (
    <lineSegments ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={connections.length / 3}
          array={connections}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial
        color="#a855f7"
        transparent
        opacity={0.15}
        blending={THREE.AdditiveBlending}
      />
    </lineSegments>
  );
}

const FloatingDots = React.memo(function FloatingDots() {
  const dots = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: `${(i * 8.3 + 4) % 96}%`,
      top: `${(i * 17.1 + 7) % 94}%`,
      delay: `${(i * 0.4) % 4}s`,
      duration: `${4 + (i % 4)}s`,
      size: i % 3 === 0 ? 'w-2 h-2' : 'w-1.5 h-1.5'
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((dot) => (
        <div
          key={dot.id}
          className={`absolute ${dot.size} bg-indigo-400/25 rounded-full animate-pulse`}
          style={{
            left: dot.left,
            top: dot.top,
            animationDelay: dot.delay,
            animationDuration: dot.duration
          }}
        />
      ))}
    </div>
  );
});

function AnimatedBrain() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* 3D Canvas with restricted DPR and high-performance settings */}
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, powerPreference: 'high-performance', alpha: true }}
        className="w-full h-full"
        style={{ pointerEvents: 'none' }}
      >
        <ambientLight intensity={0.4} />
        <BrainParticles />
        <NeuralConnections />
      </Canvas>
      
      {/* Lightweight floating ambiance */}
      <FloatingDots />
    </div>
  );
}

export default React.memo(AnimatedBrain);
