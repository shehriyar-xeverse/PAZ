import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShieldCheck,
  CalendarDays,
  Heart,
  Stethoscope,
  ChevronRight,
  ArrowRight,
  Sparkles,
  ArrowDownLeft,
  ChevronLeft,
  Quote,
} from 'lucide-react';
import { LocationId } from '../types';
import { locationsData } from '../data/locations';
import { servicesData } from '../data/services';
import AnimatedSection, { fadeUpVariant } from '../components/AnimatedSection';
import ThreeDTilt from '../components/ThreeDTilt';

interface HomeProps {
  currentLocation: LocationId;
  setCurrentPage: (page: string) => void;
  setServiceId: (id: string | null) => void;
}

export default function Home({ currentLocation, setCurrentPage, setServiceId }: HomeProps) {
  const currentLocData = locationsData[currentLocation] || locationsData.south;

  // Title reveal and Typewriter implementation
  const [typedSubtitle, setTypedSubtitle] = useState('');
  const fullLocName = currentLocData.name.toLowerCase().includes('south')
    ? 'South Austin'
    : currentLocData.name.toLowerCase().includes('east')
    ? 'East Austin'
    : currentLocData.name.toLowerCase().includes('west')
    ? 'West Austin'
    : 'North Austin';

  const subtitleText = `Full-service ${fullLocName} veterinary care combining progressive medicine with holistic, fear-free approaches for your beloved pets.`;

  useEffect(() => {
    let index = 0;
    setTypedSubtitle('');
    const timer = setInterval(() => {
      setTypedSubtitle((prev) => prev + subtitleText.charAt(index));
      index++;
      if (index >= subtitleText.length) {
        clearInterval(timer);
      }
    }, 15);
    return () => clearInterval(timer);
  }, [currentLocation]);

  // Testimonials Carousel Logic
  const testimonials = [
    {
      quote: "PAZ has completely re-engineered veterinary care. The design of the clinic is so calming, there are zero fluorescent lights or strong odors, and the clinic staff treated my nervous dog with absolute compassion. He didn't even notice his vaccines!",
      author: "Sarah Jenkins & Barnaby",
      tag: "Austin, TX (South Care)",
    },
    {
      quote: "Our diagnostic study swept standard wait times away. We had advanced digital dental x-rays and precise blood profile readouts within fifteen minutes, letting us handle our cat's surgical repair safely. I could not recommend PAZ enough.",
      author: "Michael Torres & Whiskers",
      tag: "Austin, TX (East Care)",
    },
    {
      quote: "Dermatological allergies were driving our Labrador crazy. Dr. Thompson designed a custom hypoallergenic diet structure and biological barrier titrations. He has stopped scratching entirely. Exceptional skill!",
      author: "Emma Watson & Bailey",
      tag: "Austin, TX (West Care)",
    },
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const scrollTimer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(scrollTimer);
  }, [isHovered]);

  const handleNavigate = (page: string, svcId: string | null = null) => {
    setCurrentPage(page);
    setServiceId(svcId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="home-page-viewport" className="text-white">
      {/* 1. HERO SECTION WITH KEN BURNS & OVERLAY */}
      <section id="hero-section" className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-16 overflow-hidden">
        {/* Ken Burns Background Layer using absolute scale spring loop */}
        <motion.div 
          initial={{ scale: 1.02 }}
          animate={{ scale: 1.12 }}
          transition={{
            duration: 16,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
          className="absolute inset-0 z-0 select-none pointer-events-none"
        >
          <img
            src="https://res.cloudinary.com/dju25z9v3/image/upload/v1781632830/Paz-Winner_ehn5uy.jpg"
            alt="Beautiful dog standing outside PAZ Veterinary Care"
            className="w-full h-full object-cover brightness-[0.38]"
          />
          {/* Subtle gradient vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070A] via-transparent to-black/40" />
        </motion.div>

        {/* Content Box */}
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
          <div className="lg:col-span-8 flex flex-col justify-center">
            {/* Location Tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 self-start bg-[#4CAF93]/15 border border-[#4CAF93]/40 rounded-full text-xs font-bold tracking-widest text-[#4CAF93] uppercase mb-6 shadow-[0_0_15px_rgba(76,175,147,0.15)]"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#4CAF93]" />
              <span>{currentLocData.name} CLINIC</span>
            </motion.div>

            {/* Headline Reveal (Word by Word reveal) */}
            <div className="overflow-hidden mb-4">
              <motion.h1
                id="hero-headline-title"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.12,
                      delayChildren: 0.2
                    }
                  }
                }}
                initial="hidden"
                animate="visible"
                className="font-sans text-4xl md:text-6xl xl:text-7xl font-sans font-black tracking-tight leading-none text-white"
              >
                {currentLocData.fullName.split(' ').map((word, wIdx) => (
                  <motion.span
                    key={wIdx}
                    variants={{
                      hidden: { opacity: 0, y: 40 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className="inline-block mr-3"
                  >
                    {word}
                  </motion.span>
                ))}
                <motion.span 
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4CAF93] to-[#7DB7C3] mt-2"
                >
                  in Austin, Texas
                </motion.span>
              </motion.h1>
            </div>

            {/* Typewriter Subtitle */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="font-sans text-sm md:text-base text-[#AAB3BD] max-w-xl mb-10 min-h-[48px] leading-relaxed font-semibold"
            >
              {typedSubtitle}
              <span className="inline-block w-1.5 h-4 bg-[#4CAF93] ml-1 animate-pulse" />
            </motion.p>

            {/* Buttons Row with dynamic pulse CTA */}
            <motion.div
              id="hero-cta-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <motion.button
                onClick={() => handleNavigate('contact')}
                animate={{
                  boxShadow: [
                    '0 0 12px rgba(76, 175, 147, 0.2)',
                    '0 0 25px rgba(76, 175, 147, 0.65)',
                    '0 0 12px rgba(76, 175, 147, 0.2)'
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#4CAF93] to-[#3d917b] text-xs font-extrabold uppercase tracking-widest text-[#05070A] hover:brightness-110 shadow-lg cursor-pointer transition-all"
              >
                Book An Appointment
              </motion.button>

              <motion.button
                onClick={() => handleNavigate('tours')}
                whileHover={{ scale: 1.05, bg: 'rgba(255,255,255,0.12)' }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 rounded-xl border border-white/10 bg-white/5 hover:border-white/20 text-xs font-extrabold uppercase tracking-widest text-white transition-all cursor-pointer"
              >
                Virtual Tour &rarr;
              </motion.button>
            </motion.div>

            {/* 4 Trust Badges Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10 pt-8"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-lg bg-white/5 border border-white/10">
                  <ShieldCheck className="h-5 w-5 text-[#4CAF93]" />
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-white">Fear Free</span>
                  <span className="block text-[10px] text-[#AAB3BD]">Certified Team</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-lg bg-white/5 border border-white/10">
                  <CalendarDays className="h-5 w-5 text-[#7DB7C3]" />
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-white">Same Day</span>
                  <span className="block text-[10px] text-[#AAB3BD]">Diagnostic Appointments</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-lg bg-white/5 border border-white/10">
                  <Heart className="h-5 w-5 text-[#4CAF93]" />
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-white">Compassion</span>
                  <span className="block text-[10px] text-[#AAB3BD]">Holistic Empathetic Care</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-lg bg-white/5 border border-white/10">
                  <Stethoscope className="h-5 w-5 text-[#7DB7C3]" />
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-white">Diagnostics</span>
                  <span className="block text-[10px] text-[#AAB3BD]">Sterile Surgery Labs</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll down mouse indicator with fluid float translation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 select-none pointer-events-none opacity-60">
          <span className="text-[9px] font-bold tracking-[0.25em] uppercase text-[#AAB3BD]">SCROLL DOWN</span>
          <motion.div 
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="h-8 w-5 rounded-full border-2 border-[#AAB3BD] p-1 flex justify-center"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-[#4CAF93]" />
          </motion.div>
        </div>
      </section>

      {/* 2. SERVICES GRID SECTION */}
      <AnimatedSection id="services-grid-block" className="max-w-7xl mx-auto px-6 py-28" staggerDelay={0.08}>
        <motion.div variants={fadeUpVariant} className="text-center mb-16">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#4CAF93] block mb-2">ADVANCED SPECIALIZED CARE</span>
          <h2 className="font-sans text-3xl md:text-5xl font-sans font-black tracking-tight text-white mb-4">
            Our Elite Clinical Services
          </h2>
          <p className="font-sans text-xs md:text-sm text-[#AAB3BD] max-w-xl mx-auto leading-relaxed">
            From pediatric immunizations to advanced digital ultrasounds and complex orthopedic soft-tissue surgery, our Austin veterinary team keeps your animal protected.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((svc, idx) => {
            // Match diagnostic and medical specialties to visual icons
            const getIcon = () => {
              if (svc.id.includes('vaccine')) return <ShieldCheck className="h-4.5 w-4.5 text-[#4CAF93] group-hover:scale-110 transition-transform duration-300" />;
              if (svc.id.includes('derm')) return <Sparkles className="h-4.5 w-4.5 text-[#4CAF93] group-hover:scale-110 transition-transform duration-300" />;
              if (svc.id.includes('diag')) return <Stethoscope className="h-4.5 w-4.5 text-[#4CAF93] group-hover:scale-110 transition-transform duration-300" />;
              if (svc.id.includes('internal')) return <Heart className="h-4.5 w-4.5 text-[#4CAF93] group-hover:scale-110 transition-transform duration-300" />;
              if (svc.id.includes('emerg')) return <ShieldCheck className="h-4.5 w-4.5 text-[#4CAF93] group-hover:scale-110 transition-transform duration-300" />;
              return <Stethoscope className="h-4.5 w-4.5 text-[#4CAF93] group-hover:scale-110 transition-transform duration-300" />;
            };

            return (
              <motion.div key={svc.id} variants={fadeUpVariant}>
                <ThreeDTilt id={`service-card-${svc.id}`} glowColor="rgba(76, 175, 147, 0.35)">
                  <div
                    className="group relative h-full min-h-[460px] rounded-2xl bg-[#0E1318]/60 backdrop-blur-md border border-[#4CAF93]/15 hover:border-[#4CAF93]/40 overflow-hidden shadow-xl transition-all duration-500 flex flex-col justify-between"
                    style={{
                      boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                    }}
                  >
                    {/* Image header container with Zoom */}
                    <div className="h-56 overflow-hidden relative">
                      <img
                        src={svc.image}
                        alt={svc.title}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out brightness-[0.85] group-hover:brightness-[0.95]"
                      />
                      {/* Modern radial visual shading vignettes */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0E1318] via-[#0E1318]/20 to-transparent" />
                      
                      {/* Category Badge Pill */}
                      <div className="absolute top-4 left-4 px-2.5 py-0.5 bg-[#05070A]/85 backdrop-blur-sm border border-[#4CAF93]/30 rounded text-[9px] font-bold uppercase tracking-wider text-[#4CAF93]">
                        PAZ CLINICAL FOCUS
                      </div>

                      {/* Floating specialty icon floating ring */}
                      <div className="absolute right-4 bottom-4 h-9 w-9 rounded-full bg-[#05070A]/85 backdrop-blur-sm border border-white/10 flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.6)] group-hover:border-[#4CAF93]/40 group-hover:shadow-[0_0_15px_rgba(76,175,147,0.35)] transition-all duration-300">
                        {getIcon()}
                      </div>
                    </div>

                    {/* Card Body with structured border glow */}
                    <div className="p-6 flex-1 flex flex-col justify-between relative bg-[#0E1318]/40">
                      <div>
                        <h3 className="font-sans text-lg font-black text-white mb-2 group-hover:text-[#4CAF93] transition-colors">
                          {svc.title}
                        </h3>
                        <p className="font-sans text-xs leading-relaxed text-[#AAB3BD] mb-6 font-semibold line-clamp-3 font-medium">
                          {svc.description}
                        </p>
                      </div>

                      <div className="border-t border-white/5 pt-4 flex items-center justify-between">
                        <button
                          onClick={() => handleNavigate('service', svc.id)}
                          className="text-[10px] uppercase font-bold tracking-widest text-[#4CAF93] hover:text-[#7DB7C3] transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          <span>Read Details &rarr;</span>
                        </button>
                        <span className="text-[9px] font-mono uppercase text-[#AAB3BD]/30 tracking-wider">FEAR FREE CERT</span>
                      </div>
                    </div>
                  </div>
                </ThreeDTilt>
              </motion.div>
            );
          })}
        </div>
      </AnimatedSection>

      {/* 3. PROMOTIONAL GLASS CARD */}
      <AnimatedSection id="promo-offer-section" className="max-w-5xl mx-auto px-6 py-12">
        <motion.div variants={fadeUpVariant}>
          <ThreeDTilt glowColor="rgba(76, 175, 147, 0.45)">
            <div
              id="promotional-glass-card"
              className="relative rounded-3xl bg-[#0E1318]/90 border border-[#4CAF93]/35 shadow-[0_4px_30px_rgba(76, 175, 147, 0.1)] backdrop-blur-md p-10 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8"
            >
              {/* Internal soft green lighting blob */}
              <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-[#4CAF93]/10 blur-3xl pointer-events-none" />

              <div className="flex-1">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-[#4CAF93]/20 border border-[#4CAF93]/40 text-[#4CAF93] text-[9px] font-extrabold uppercase tracking-widest mb-4">
                  NEW CLIENT WELCOME COMPASS
                </div>
                <h3 className="font-sans text-3xl md:text-4xl font-sans font-black tracking-tight text-white mb-3">
                  50% Off Your Pet&apos;s First Exam
                </h3>
                <p className="font-sans text-xs text-[#AAB3BD] max-w-xl leading-relaxed">
                  New to the Austin neighborhood, or just adopted a new family champion? Let’s begin your veterinary journey with our complete, head-to-tail clinical wellness assessment at half the standard exam fee.
                </p>
              </div>

              <div className="shrink-0 flex flex-col items-center gap-3 relative z-10">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleNavigate('contact')}
                  className="px-6 py-3 rounded-xl bg-[#4CAF93] hover:bg-[#3d917b] text-[#05070A] text-xs font-bold uppercase tracking-widest transition-all cursor-pointer shadow-[0_4px_15px_rgba(76,175,147,0.2)]"
                >
                  Book Appointment
                </motion.button>
                <span className="text-[9px] font-mono tracking-widest text-[#AAB3BD]/50 uppercase">PAZ SOUTH &bull; EAST &bull; WEST &bull; NORTH</span>
              </div>
            </div>
          </ThreeDTilt>
        </motion.div>
      </AnimatedSection>

      {/* 4. STAFF SECTION (LEFT CONTENT, RIGHT IMAGE, SPLIT REVEAL) */}
      <AnimatedSection id="staff-showcase-section" className="max-w-7xl mx-auto px-6 py-28" staggerDelay={0.15}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content (Split reveal structure) */}
          <motion.div variants={fadeUpVariant} className="flex flex-col gap-6">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#7DB7C3] font-bold">MEET OUR CLINIC LEADERSHIP</span>
            <h2 className="font-sans text-3xl md:text-5xl font-sans font-black tracking-tight text-white leading-tight">
              Knowledgeable and Caring Veterinary Staff
            </h2>
            <div className="h-1 w-20 bg-[#4CAF93] rounded-full" />
            <p className="font-sans text-xs md:text-sm leading-relaxed text-[#AAB3BD]">
              At PAZ, our veterinary doctors, credentialed medical technicians, and dedicated fear-free assistants work as an integrated, collaborative unit. Led by progressive medicine innovators like Dr. Kate Thompson, our diagnostic approach treats the complete, unique physical environment of every domestic animal.
            </p>
            <p className="font-sans text-xs md:text-sm leading-relaxed text-[#AAB3BD]">
              We reject high-stress medical processing lines. We invest time in physical comforting loops, calm environmental sounds, warm treatment tables, and holistic acupuncture alignments. Because your pet is family, and family demands state-of-the-art diagnostic integrity combined with endless, soft-hearted empathy.
            </p>

            <div className="mt-4 flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleNavigate('team')}
                className="px-6 py-3 rounded-xl border border-white/10 bg-[#0E1318] hover:bg-white/5 hover:border-white/20 text-xs font-bold uppercase tracking-wider text-white transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Browse Support Team</span>
                <ChevronRight className="h-4 w-4 text-[#4CAF93]" />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Image with Ken Burns Zoom & Subtle Shadow wrapped inside ThreeDTilt */}
          <motion.div variants={fadeUpVariant}>
            <ThreeDTilt glowColor="rgba(125, 183, 195, 0.3)">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-[500px]">
                <img
                  src="https://res.cloudinary.com/dju25z9v3/image/upload/v1781632830/Kate_Thompson_j7hapa.jpg"
                  alt="Dr. Kate Thompson of PAZ Veterinary Care"
                  className="w-full h-full object-cover select-none pointer-events-none hover:scale-105 duration-[4000ms] transition"
                />
                {/* Visual bottom dark tag overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/50 to-transparent p-6 flex flex-col justify-end z-10">
                  <span className="text-[9px] font-bold tracking-widest text-[#4CAF93] uppercase mb-1">CLINIC NURTURE CHIEF</span>
                  <span className="text-sm font-bold text-white">Dr. Kate Thompson &bull; DVM, Fear Free Practitioner</span>
                </div>
              </div>
            </ThreeDTilt>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* 5. TESTIMONIALS SLIDER SECTION */}
      <AnimatedSection id="testimonials-block-section" className="border-t border-white/5 bg-[#0E1318]/40 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div variants={fadeUpVariant} className="flex justify-center mb-6">
            <div className="h-12 w-12 rounded-xl bg-[#4CAF93]/15 flex items-center justify-center border border-[#4CAF93]/30">
              <Quote className="h-5 w-5 text-[#4CAF93]" />
            </div>
          </motion.div>

          <motion.span variants={fadeUpVariant} className="text-[10px] uppercase font-mono tracking-widest text-[#7DB7C3] block mb-4 font-bold">COMMUNITY VOICES</motion.span>

          {/* Testimonial Active Display Card with Fade Transition */}
          <motion.div
            variants={fadeUpVariant}
            id="testimonial-slideshow-view"
            className="min-h-[220px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center"
              >
                <p className="font-sans text-sm md:text-lg italic leading-relaxed text-[#AAB3BD] mb-8 max-w-2xl px-4">
                  &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
                </p>
                <h4 className="font-sans text-sm font-bold text-white uppercase tracking-wider mb-1">
                  {testimonials[activeTestimonial].author}
                </h4>
                <p className="font-sans text-[10px] font-bold text-[#4CAF93] uppercase tracking-widest">
                  {testimonials[activeTestimonial].tag}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Slider Controllers: Dots and Arrows */}
          <motion.div variants={fadeUpVariant} className="flex items-center justify-center gap-6 mt-12 select-none">
            {/* Prev arrow */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="h-9 w-9 rounded-full bg-[#151C23] border border-white/10 flex items-center justify-center hover:text-[#4CAF93] hover:border-[#4CAF93]/40 transition-all cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </motion.button>

            {/* Pagination Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    activeTestimonial === i ? 'w-6 bg-[#4CAF93]' : 'w-2.5 bg-white/10 hover:bg-white/20'
                  }`}
                  aria-label={`Go to testimonial slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Next arrow */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="h-9 w-9 rounded-full bg-[#151C23] border border-white/10 flex items-center justify-center hover:text-[#4CAF93] hover:border-[#4CAF93]/40 transition-all cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </motion.button>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
}
