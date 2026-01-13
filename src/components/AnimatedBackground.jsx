import React from 'react';
import AnimatedBrain from './AnimatedBrain';

export default function AnimatedBackground() {
  return (
    <>
      <AnimatedBrain />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-transparent to-gray-900/60 backdrop-blur-[1px]" />
    </>
  );
}
