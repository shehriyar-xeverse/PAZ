import { motion } from 'motion/react';
import { Compass, Home, HeartPulse } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 py-24 select-none relative overflow-hidden">
      <SEO
        title="Page Not Found | PAZ Veterinary Care"
        description="The page you are looking for has wandered off. Let's guide you back home."
      />

      {/* Decorative Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-[#4CAF93]/5 blur-[80px] pointer-events-none" />

      {/* Animated Icon */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: 'spring' }}
        className="h-20 w-20 rounded-2xl bg-[#0E1318] border border-white/10 flex items-center justify-center text-[#4CAF93] mb-8 shadow-2xl shadow-black"
      >
        <Compass className="h-10 w-10 animate-spin-slow" style={{ animationDuration: '10s', animationTimingFunction: 'linear', animationIterationCount: 'infinite' }} />
      </motion.div>

      {/* Main headings */}
      <motion.span
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 0.8 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-[10px] uppercase font-bold tracking-widest text-[#7DB7C3] mb-3"
      >
        ERROR CODE 404
      </motion.span>

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="font-sans text-3xl md:text-5xl font-black tracking-tight text-white mb-4"
      >
        Mavens Lost in the Wilderness?
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 0.6 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-xs md:text-sm text-[#AAB3BD] max-w-md mx-auto leading-relaxed mb-10"
      >
        The coordinate you requested has wandered off into the brush. Let's gather your companion and guide you back to the main trail.
      </motion.p>

      {/* Action CTA */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col sm:flex-row items-center gap-4"
      >
        <button
          onClick={() => navigate('/home')}
          className="px-6 py-3 rounded-xl bg-[#4CAF93] hover:bg-[#3d917b] text-black font-extrabold text-xs uppercase tracking-widest flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-[#4CAF93]/10"
        >
          <Home className="h-4 w-4" />
          <span>Back To Home</span>
        </button>

        <button
          onClick={() => navigate('/contact')}
          className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white text-xs font-extrabold uppercase tracking-widest flex items-center gap-2 transition-all cursor-pointer"
        >
          <HeartPulse className="h-4 w-4 text-[#7DB7C3]" />
          <span>Book An Appointment</span>
        </button>
      </motion.div>
    </div>
  );
}
