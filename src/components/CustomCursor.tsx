import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Buttery-smooth spring kinematics parameters
  const springConfig = { damping: 30, stiffness: 350, mass: 0.6 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only engage custom cursor elements on pointer (mouse/trackpad) systems
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsDesktop(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    if (mediaQuery.matches) {
      window.addEventListener('mousemove', moveCursor);
    }

    // Monitor hover state transitions against buttons, links, and clickable selectors
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      const isHoverable = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a') || 
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer') ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT';
      
      setIsHovered(!!isHoverable);
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!isDesktop) return null;

  return (
    <>
      {/* Lag-following glowing outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border mix-blend-screen -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          width: isHovered ? 40 : 22,
          height: isHovered ? 40 : 22,
          backgroundColor: isHovered ? 'rgba(76,175,147,0.15)' : 'transparent',
          boxShadow: isHovered ? '0 0 15px rgba(76,175,147,0.45)' : 'none',
          borderColor: isHovered ? '#4CAF93' : 'rgba(255, 255, 255, 0.4)',
        }}
      />
      {/* Precise real-time inner dot focus center */}
      <motion.div
        className="fixed top-0 left-0 h-1.5 w-1.5 pointer-events-none z-50 rounded-full bg-[#4CAF93] -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />
    </>
  );
}
