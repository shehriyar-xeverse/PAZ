import React from 'react';
import { motion } from 'motion/react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  staggerDelay?: number;
  viewportAmount?: number;
}

export default function AnimatedSection({
  children,
  className = '',
  id,
  staggerDelay = 0.1,
  viewportAmount = 0.15,
}: AnimatedSectionProps) {
  // Map standard layout orchestration variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.05,
      },
    },
  };

  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: viewportAmount }}
      variants={containerVariants}
    >
      {children}
    </motion.section>
  );
}

// Reusable individual child element variants for sequential stagger orchestration
export const fadeUpVariant = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1], // cinematic cubic-bezier curve
    },
  },
};

export const hoverButtonVariant = {
  hover: {
    scale: 1.05,
    boxShadow: '0 0 20px rgba(76, 175, 147, 0.55)',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};
