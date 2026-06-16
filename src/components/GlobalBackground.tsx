import { useEffect, useRef } from 'react';
import { LocationId } from '../types';

interface GlobalBackgroundProps {
  currentLocation: LocationId | null;
}

export default function GlobalBackground({ currentLocation }: GlobalBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle class for Floating Paws and soft orbs
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      pulseSpeed: number;
      pulseVal: number;
      isPaw: boolean;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 6 + 2;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        this.opacity = Math.random() * 0.25 + 0.1;
        this.pulseSpeed = Math.random() * 0.02 + 0.005;
        this.pulseVal = Math.random() * Math.PI;
        this.isPaw = Math.random() > 0.75; // 25% of particles are paw-like shapes
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.pulseVal += this.pulseSpeed;

        // Wrap around borders
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw(context: CanvasRenderingContext2D) {
        const currentOpacity = this.opacity * (0.6 + Math.sin(this.pulseVal) * 0.4);
        
        context.save();
        context.globalAlpha = currentOpacity;
        
        let accentColor = '#4CAF93';
        if (currentLocation === 'east') accentColor = '#7DB7C3';
        if (currentLocation === 'west') accentColor = '#3a95aa';
        if (currentLocation === 'north') accentColor = '#5c6c7d';

        context.fillStyle = accentColor;

        if (this.isPaw) {
          // Drawing a tiny paw particle
          const r = this.size;
          context.beginPath();
          // Pad base pad
          context.arc(this.x, this.y, r, 0, Math.PI * 2);
          context.fill();
          // Draw 4 tiny toes
          context.beginPath();
          context.arc(this.x - r * 1.1, this.y - r * 1.1, r * 0.4, 0, Math.PI * 2); // Left outer toe
          context.arc(this.x - r * 0.4, this.y - r * 1.5, r * 0.45, 0, Math.PI * 2); // Left inner toe
          context.arc(this.x + r * 0.4, this.y - r * 1.5, r * 0.45, 0, Math.PI * 2); // Right inner toe
          context.arc(this.x + r * 1.1, this.y - r * 1.1, r * 0.4, 0, Math.PI * 2); // Right outer toe
          context.fill();
        } else {
          // Standard soft glowing particle
          context.beginPath();
          context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          context.fill();
        }

        context.restore();
      }
    }

    const particles: Particle[] = Array.from({ length: 45 }, () => new Particle());

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw active particles
      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [currentLocation]);

  // Determine ambient orb tint colors
  let orbAccentOne = 'bg-[#4CAF93]/8';
  let orbAccentTwo = 'bg-[#7DB7C3]/6';

  if (currentLocation === 'east') {
    orbAccentOne = 'bg-[#7DB7C3]/10';
    orbAccentTwo = 'bg-[#4CAF93]/5';
  } else if (currentLocation === 'west') {
    orbAccentOne = 'bg-[#3a95aa]/10';
    orbAccentTwo = 'bg-[#5c6c7d]/6';
  } else if (currentLocation === 'north') {
    orbAccentOne = 'bg-[#5c6c7d]/12';
    orbAccentTwo = 'bg-[#4CAF93]/5';
  }

  return (
    <div className="fixed inset-0 -z-30 h-full w-full bg-[#05070A] overflow-hidden">
      {/* Noise Texture Overlay */}
      <div 
        id="noise-texture-overlay" 
        className="absolute inset-0 z-20 pointer-events-none opacity-[0.03] select-none" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Floating Blob Orb 1 */}
      <div
        id="background-orb-left"
        className={`absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full ${orbAccentOne} blur-[140px] mix-blend-screen animate-pulse pointer-events-none`}
        style={{ animationDuration: '10s' }}
      />

      {/* Floating Blob Orb 2 */}
      <div
        id="background-orb-right"
        className={`absolute top-[40%] -right-40 h-[500px] w-[500px] rounded-full ${orbAccentTwo} blur-[120px] mix-blend-screen pointer-events-none`}
        style={{ animationDuration: '14s', animationName: 'pulse', animationIterationCount: 'infinite' }}
      />

      {/* Floating Blob Orb 3 */}
      <div
        id="background-orb-bottom"
        className={`absolute -bottom-40 left-[30%] h-[550px] w-[550px] rounded-full ${orbAccentOne} blur-[130px] mix-blend-screen pointer-events-none opacity-65`}
        style={{ animationDuration: '18s', animationName: 'pulse', animationIterationCount: 'infinite' }}
      />

      {/* Canvas layer for particles */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none block z-10" />
    </div>
  );
}
