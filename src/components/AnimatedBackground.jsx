import React from 'react';
import AnimatedBrain from './AnimatedBrain';

function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-[#0a0d1a] to-gray-950" />
      
      {/* Subtle radial ambient glows */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none" 
      />
      <div 
        className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none" 
      />

      {/* 3D Animated Brain / Particles Canvas */}
      <AnimatedBrain />

      {/* Subtle vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/60 via-transparent to-gray-950/80" />
    </div>
  );
}

export default React.memo(AnimatedBackground);
