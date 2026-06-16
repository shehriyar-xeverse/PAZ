import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface ThreeDTiltProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  glowColor?: string; // e.g. 'rgba(76, 175, 147, 0.25)' (emerald) or 'rgba(125, 183, 195, 0.25)' (blue)
}

export default function ThreeDTilt({
  children,
  className = '',
  id,
  glowColor = 'rgba(76, 175, 147, 0.35)',
}: ThreeDTiltProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track mouse coordinates mapped between 0 and 1
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  
  // Setup responsive smooth spring kinematics parameters
  const springConfig = { damping: 25, stiffness: 220, mass: 0.7 };
  
  // Translate relative mouse offsets to clean perspective rotations
  const rotateX = useSpring(useTransform(y, [0, 1], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(x, [0, 1], [-12, 12]), springConfig);
  
  // Map highlights and shadows dynamically 
  const highlightX = useTransform(x, [0, 1], ['0%', '100%']);
  const highlightY = useTransform(y, [0, 1], ['0%', '100%']);
  const highlightOpacity = useSpring(useTransform(x, [0, 1], [0.1, 0.45]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Relative coordinates
    const relativeX = (e.clientX - rect.left) / width;
    const relativeY = (e.clientY - rect.top) / height;
    
    x.set(relativeX);
    y.set(relativeY);
  };

  const handleMouseLeave = () => {
    // Reset back to absolute center
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={containerRef}
      id={id}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative select-none ${className}`}
      style={{
        perspective: 1200,
        transformStyle: 'preserve-3d',
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{
          y: -10,
          scale: 1.03,
          boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 25px ${glowColor}`,
        }}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 220,
          mass: 0.8,
        }}
        className="w-full h-full relative rounded-2xl overflow-hidden"
      >
        {children}

        {/* Ambient Glossy Reflection Overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none mix-blend-overlay z-20"
          style={{
            background: `radial-gradient(circle at ${highlightX} ${highlightY}, rgba(255, 255, 255, 0.2) 0%, transparent 70%)`,
            opacity: highlightOpacity,
          }}
        />
      </motion.div>
    </motion.div>
  );
}
