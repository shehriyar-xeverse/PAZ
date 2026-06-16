import { HeartPulse, CheckCircle2, ChevronRight, HelpCircle, CalendarRange, ArrowLeft, MoveRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ServiceDetail } from '../types';
import { servicesData } from '../data/services';
import AnimatedSection, { fadeUpVariant } from '../components/AnimatedSection';
import ThreeDTilt from '../components/ThreeDTilt';

interface ServicesPageProps {
  serviceId: string | null;
  setServiceId: (id: string | null) => void;
  setCurrentPage: (page: string) => void;
}

export default function Services({ serviceId, setServiceId, setCurrentPage }: ServicesPageProps) {
  // If serviceId is specified, show that specific detailed service.
  // Otherwise, show the general list/grid.
  const selectedService = servicesData.find((svc) => svc.id === serviceId);

  const handleBookClick = () => {
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (selectedService) {
    return (
      <div id={`service-detail-${selectedService.id}`} className="min-h-screen text-white pt-32 pb-24 overflow-hidden">
        {/* Breadcrumbs and back button */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-6 mb-8 flex items-center justify-between"
        >
          <motion.button
            whileHover={{ scale: 1.05, x: -3 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setServiceId(null)}
            className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#4CAF93] hover:text-white uppercase transition-all cursor-pointer group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Services</span>
          </motion.button>
          
          <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono uppercase text-[#AAB3BD]/60">
            <span>Services</span>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white">{selectedService.title}</span>
          </div>
        </motion.div>

        {/* Detailed Hero & Image */}
        <AnimatedSection className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20" staggerDelay={0.12}>
          <motion.div variants={fadeUpVariant} className="lg:col-span-6 flex flex-col gap-6">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#4CAF93] bg-[#4CAF93]/10 px-3 py-1 rounded-full self-start font-bold">
              PAZ CLINICAL FOCUS
            </span>
            <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              {selectedService.title}
            </h1>
            <p className="font-sans text-sm md:text-base leading-relaxed text-[#AAB3BD] font-medium">
              {selectedService.overview}
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(76, 175, 147, 0.45)' }}
              whileTap={{ scale: 0.98 }}
              onClick={handleBookClick}
              className="self-start px-6 py-3.5 rounded-xl bg-[#4CAF93] hover:bg-[#3d917b] text-black font-extrabold text-xs uppercase tracking-widest shadow-lg transition-all cursor-pointer"
            >
              Book {selectedService.title} Session &rarr;
            </motion.button>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="lg:col-span-6">
            <ThreeDTilt glowColor="rgba(76, 175, 147, 0.3)">
              <div className="relative rounded-2xl overflow-hidden aspect-square border border-white/10 shadow-2xl">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover filter brightness-[0.9] hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070A]/80 to-transparent" />
              </div>
            </ThreeDTilt>
          </motion.div>
        </AnimatedSection>

        {/* Benefits Cards Section */}
        <AnimatedSection className="bg-[#0E1318]/55 border-y border-white/5 py-16 mb-20 relative" staggerDelay={0.08}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2 variants={fadeUpVariant} className="font-sans text-2xl md:text-3xl font-sans font-black tracking-tight text-white mb-10 text-center">
              Key Medical Benefits & Outcomes
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {selectedService.benefits.map((benefit, i) => (
                <motion.div key={i} variants={fadeUpVariant}>
                  <ThreeDTilt glowColor="rgba(125, 183, 195, 0.2)">
                    <div
                      className="p-6 h-full rounded-xl bg-[#151C23] border border-white/5 hover:border-[#4CAF93]/30 transition-all flex gap-4 items-start"
                    >
                      <div className="h-8 w-8 rounded-lg bg-[#4CAF93]/10 flex items-center justify-center shrink-0 border border-[#4CAF93]/20">
                        <CheckCircle2 className="h-5 w-5 text-[#4CAF93]" />
                      </div>
                      <div>
                        <span className="block text-sm font-bold text-white mb-1 font-sans">Outcome Profile #{i + 1}</span>
                        <p className="text-xs text-[#AAB3BD] leading-relaxed">{benefit}</p>
                      </div>
                    </div>
                  </ThreeDTilt>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Treatment Process Timeline */}
        <AnimatedSection className="max-w-4xl mx-auto px-6 mb-20" staggerDelay={0.12}>
          <motion.h2 variants={fadeUpVariant} className="font-sans text-2xl md:text-3xl font-sans font-black tracking-tight text-white mb-12 text-center">
            Standard Treatment Process Timeline
          </motion.h2>
          <div className="relative border-l-2 border-white/10 pl-6 ml-4 flex flex-col gap-10">
            {selectedService.process.map((step, idx) => {
              const [title, details] = step.split(': ');
              return (
                <motion.div key={idx} variants={fadeUpVariant} className="relative">
                  {/* Timeline Badge */}
                  <motion.div 
                    whileHover={{ scale: 1.2, backgroundColor: '#4CAF93', color: '#05070A' }}
                    className="absolute -left-[35px] top-0.5 h-6 w-6 rounded-full bg-[#05070A] border-2 border-[#4CAF93] flex items-center justify-center font-mono text-[10px] font-bold text-[#4CAF93] transition-colors"
                  >
                    {idx + 1}
                  </motion.div>
                  <h3 className="font-sans text-base font-bold text-white mb-1">
                    {title}
                  </h3>
                  <p className="font-sans text-xs text-[#AAB3BD] leading-relaxed">
                    {details}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>

        {/* FAQs Section */}
        <AnimatedSection className="max-w-3xl mx-auto px-6 mb-20" staggerDelay={0.1}>
          <motion.h2 variants={fadeUpVariant} className="font-sans text-2xl md:text-3xl font-sans font-black tracking-tight text-white mb-10 text-center">
            Frequently Asked Questions
          </motion.h2>
          <div className="flex flex-col gap-4">
            {selectedService.faqs.map((faq, i) => (
              <motion.div key={i} variants={fadeUpVariant} className="p-6 rounded-xl bg-[#0E1318]/80 border border-white/5 hover:border-[#7DB7C3]/20 transition-all duration-300">
                <div className="flex gap-3 items-start mb-2">
                  <HelpCircle className="h-5 w-5 text-[#7DB7C3] shrink-0 mt-0.5" />
                  <h3 className="font-sans text-sm font-bold text-white">{faq.question}</h3>
                </div>
                <p className="font-sans text-xs text-[#AAB3BD] leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Booking CTA */}
        <AnimatedSection className="max-w-5xl mx-auto px-6" viewportAmount={0.2}>
          <motion.div variants={fadeUpVariant}>
            <ThreeDTilt glowColor="rgba(76, 175, 147, 0.4)">
              <div className="p-10 rounded-2xl bg-gradient-to-br from-[#0E1318] to-[#151C23] border border-white/10 text-center relative overflow-hidden shadow-2xl">
                <div className="absolute -bottom-16 -right-16 h-36 w-36 rounded-full bg-[#7DB7C3]/10 blur-2xl pointer-events-none" />
                
                <h3 className="font-sans text-2xl md:text-3xl font-sans font-black tracking-tight text-white mb-3">
                  Ready to Secure Proactive Care?
                </h3>
                <p className="font-sans text-xs text-[#AAB3BD] max-w-lg mx-auto mb-6 leading-relaxed">
                  Schedule your diagnostic sweep or routine immunizations with our award-winning, fear-free clinician crew. Same-day appointments available for priority items.
                </p>
                <div className="flex justify-center gap-4 relative z-10">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(76, 175, 147, 0.4)' }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleBookClick}
                    className="px-6 py-3 rounded-xl bg-[#4CAF93] hover:bg-[#3d917b] text-[#05070A] text-xs font-bold uppercase tracking-widest transition-all cursor-pointer shadow-lg"
                  >
                    Schedule Session Now
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setServiceId(null)}
                    className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white text-xs font-bold uppercase tracking-widest transition-all cursor-pointer"
                  >
                    All Services
                  </motion.button>
                </div>
              </div>
            </ThreeDTilt>
          </motion.div>
        </AnimatedSection>
      </div>
    );
  }

  // General listing sweep (when serviceId is empty)
  return (
    <div id="general-services-listing" className="min-h-screen text-white pt-32 pb-24 overflow-hidden">
      <AnimatedSection className="max-w-7xl mx-auto px-6 text-center mb-16" staggerDelay={0.1}>
        <motion.span variants={fadeUpVariant} className="text-[10px] uppercase font-bold tracking-widest text-[#4CAF93] bg-[#4CAF93]/10 px-3 py-1 rounded-full inline-flex items-center gap-1.5 mb-4">
          <HeartPulse className="h-3.5 w-3.5" />
          <span>PAZ MEDICAL ADVANCEMENTS</span>
        </motion.span>
        <motion.h1 variants={fadeUpVariant} className="font-sans text-4xl md:text-6xl font-sans font-black tracking-tight text-white mb-4">
          Clinical Specialties
        </motion.h1>
        <motion.p variants={fadeUpVariant} className="font-sans text-xs md:text-sm text-[#AAB3BD] max-w-2xl mx-auto leading-relaxed">
          From preventative vaccines to state-of-the-art diagnostics and complex surgeries, explore our fully custom, specialized modules below.
        </motion.p>
      </AnimatedSection>

      <AnimatedSection className="max-w-7xl mx-auto px-6" staggerDelay={0.08} viewportAmount={0.05}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((svc) => (
            <motion.div
              key={svc.id}
              variants={fadeUpVariant}
              onClick={() => {
                setServiceId(svc.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <ThreeDTilt glowColor="rgba(76, 175, 147, 0.3)">
                <div
                  className="group h-[380px] rounded-2xl bg-[#0E1318]/70 backdrop-blur-md border border-white/5 hover:border-[#4CAF93]/30 transition-all duration-300 overflow-hidden shadow-xl flex flex-col justify-between cursor-pointer"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img src={svc.image} alt={svc.title} className="w-full h-full object-cover group-hover:scale-105 duration-500 transition" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E1318] via-transparent to-transparent opacity-85" />
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-sans text-lg font-bold text-white mb-2 group-hover:text-[#4CAF93] transition-colors">
                        {svc.title}
                      </h3>
                      <p className="font-sans text-xs leading-relaxed text-[#AAB3BD] line-clamp-3">
                        {svc.description}
                      </p>
                    </div>

                    <div className="border-t border-white/5 pt-4 mt-4 flex items-center justify-between text-[10px] font-bold text-[#4CAF93] uppercase tracking-wider">
                      <span>Explore Technical Details</span>
                      <MoveRight className="h-3.5 w-3.5 group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </ThreeDTilt>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
