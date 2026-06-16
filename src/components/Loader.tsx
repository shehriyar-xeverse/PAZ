import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HeartPulse } from 'lucide-react';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // 1.8s progress fill
    const totalDuration = 1800; 
    const intervalTime = 30;
    const steps = totalDuration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const p = Math.min((currentStep / steps) * 100, 100);
      setProgress(p);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(() => {
            onComplete();
          }, 600); // Wait for AnimatePresence transition
        }, 300);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          id="paz-loader-container"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#05070A] text-white select-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40, scale: 0.98, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
        >
          {/* Subtle glowing ambient behind logo */}
          <div className="absolute w-[300px] h-[300px] rounded-full bg-[#4CAF93]/10 blur-3xl pointer-events-none" />

          <div className="relative flex flex-col items-center">
            {/* Logo Mark */}
            <motion.div
              id="loader-logo-icon"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#0E1318] border border-[#4CAF93]/35 shadow-[0_0_25px_rgba(76,175,147,0.15)]"
            >
              <HeartPulse className="h-10 w-10 text-[#4CAF93] animate-pulse" />
            </motion.div>

            {/* Logo Typography - Headline Reveal */}
            <div className="overflow-hidden mb-2">
              <motion.h1
                id="loader-paz-title"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="font-sans text-5xl font-black tracking-widest text-center text-white"
              >
                PAZ
              </motion.h1>
            </div>

            <div className="overflow-hidden mb-8">
              <motion.p
                id="loader-subtitle"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 0.7 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                className="font-sans text-sm uppercase tracking-[0.25em] text-[#AAB3BD] text-center"
              >
                Veterinary Care
              </motion.p>
            </div>

            {/* Premium Progress Bar bar */}
            <div className="w-64 h-[3px] bg-[#0E1318] rounded-full overflow-hidden border border-white/5 relative">
              <motion.div
                id="loader-progress-bar-fill"
                className="h-full bg-gradient-to-r from-[#4CAF93] to-[#7DB7C3] relative"
                style={{ width: `${progress}%` }}
                layoutId="loaderProgress"
              >
                <div className="absolute right-0 top-0 h-full w-4 bg-white/40 blur-sm animate-pulse" />
              </motion.div>
            </div>

            {/* Count percentage */}
            <motion.p
              id="loader-percentage-counter"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              className="mt-3 font-mono text-[10px] tracking-widest text-[#AAB3BD]"
            >
              INITIALIZING MEDICAL CORE: {Math.round(progress)}%
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
