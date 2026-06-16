import { motion } from 'motion/react';
import { MapPin, Phone, Mail, ArrowRight, Sparkles } from 'lucide-react';
import { LocationId } from '../types';
import { locationsData } from '../data/locations';
import AnimatedSection, { fadeUpVariant } from '../components/AnimatedSection';
import ThreeDTilt from '../components/ThreeDTilt';

interface LocationsProps {
  onSelect: (loc: LocationId) => void;
  currentLocation: LocationId | null;
}

export default function Locations({ onSelect, currentLocation }: LocationsProps) {
  const cards = [
    { id: 'south' as LocationId, color: 'text-[#4CAF93]', borderGlow: 'hover:border-[#4CAF93]/40', glow: 'rgba(76, 175, 147, 0.35)' },
    { id: 'east' as LocationId, color: 'text-[#7DB7C3]', borderGlow: 'hover:border-[#7DB7C3]/40', glow: 'rgba(125, 183, 195, 0.35)' },
    { id: 'west' as LocationId, color: 'text-[#3a95aa]', borderGlow: 'hover:border-[#3a95aa]/40', glow: 'rgba(58, 149, 170, 0.35)' },
    { id: 'north' as LocationId, color: 'text-[#5c6c7d]', borderGlow: 'hover:border-[#5c6c7d]/40', glow: 'rgba(92, 108, 125, 0.35)' },
  ];

  return (
    <div id="locations-list-viewport" className="min-h-screen pt-32 pb-24 text-white overflow-hidden">
      {/* Header */}
      <AnimatedSection className="max-w-7xl mx-auto px-6 text-center mb-16" staggerDelay={0.1}>
        <motion.span variants={fadeUpVariant} className="text-[10px] uppercase font-bold tracking-widest text-[#4CAF93] bg-[#4CAF93]/10 px-3 py-1 rounded-full inline-flex items-center gap-1.5 mb-4">
          <MapPin className="h-3.5 w-3.5 text-[#4CAF93]" />
          <span>PAZ AUSTIN NETWORK LOCATIONS</span>
        </motion.span>
        <motion.h1 variants={fadeUpVariant} className="font-sans text-4xl md:text-6xl font-sans font-black tracking-tight text-white mb-4">
          Our Advanced Clinics
        </motion.h1>
        <motion.p variants={fadeUpVariant} className="font-sans text-xs md:text-sm text-[#AAB3BD] max-w-2xl mx-auto leading-relaxed">
          Switch your active clinic environment. Changing location focus adapts the entire website, including hero titles, meta-tags, phone numbers, and local resources seamlessly.
        </motion.p>
      </AnimatedSection>

      {/* Grid */}
      <AnimatedSection className="max-w-7xl mx-auto px-6" staggerDelay={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {cards.map((card) => {
            const data = locationsData[card.id];
            const isActive = currentLocation === card.id;

            return (
              <motion.div
                key={card.id}
                variants={fadeUpVariant}
                onClick={() => {
                  onSelect(card.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <ThreeDTilt glowColor={isActive ? 'rgba(76, 175, 147, 0.45)' : card.glow}>
                  <div
                    className={`rounded-3xl bg-[#0E1318]/80 backdrop-blur-md border transition-all duration-300 p-8 flex flex-col justify-between cursor-pointer group shadow-2xl relative h-full min-h-[420px] ${
                      isActive ? 'border-[#4CAF93]/60 ring-1 ring-[#4CAF93]/30 shadow-[0_0_30px_rgba(76,175,147,0.15)]' : 'border-white/5 ' + card.borderGlow
                    }`}
                  >
                    {isActive && (
                      <div className="absolute top-4 right-4 bg-[#4CAF93]/20 border border-[#4CAF93]/55 rounded-full px-2.5 py-0.5 text-[8px] font-bold tracking-widest uppercase text-[#4CAF93] z-10 animate-pulse">
                        ACTIVE LOCATION FOCUS
                      </div>
                    )}

                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-[#AAB3BD]/70 uppercase block mb-3 font-semibold">
                        {data.city}, {data.state} {data.zip}
                      </span>
                      
                      <h2 className="font-sans text-2xl font-black text-white mb-3 group-hover:text-[#4CAF93] transition-colors flex items-center gap-2">
                        <span>{data.name} Veterinary Care</span>
                      </h2>

                      <p className="font-sans text-xs text-[#AAB3BD] leading-relaxed mb-6 font-semibold">
                        {data.tagline}
                      </p>

                      <p className="font-sans text-xs text-[#AAB3BD]/75 leading-relaxed mb-6 border-l border-[#4CAF93]/30 pl-4 italic">
                        {data.description}
                      </p>

                      {/* Specific Contacts */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/5 pt-6 text-xs text-[#AAB3BD]">
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-[#7DB7C3]" />
                          <span>{data.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-[#4CAF93]" />
                          <span className="truncate">{data.email}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="border-t border-white/10 pt-6 mt-6 flex items-center justify-between text-xs font-bold text-[#4CAF93] uppercase tracking-widest font-mono">
                      <span>Select {data.name} Clinic</span>
                      <div className="flex items-center gap-1 group-hover:text-white transition-colors">
                        <span>Switch Focus</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </ThreeDTilt>
              </motion.div>
            );
          })}
        </div>
      </AnimatedSection>
    </div>
  );
}
