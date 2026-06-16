import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight, Dog, MapPin, HeartPulse } from 'lucide-react';
import { LocationId } from '../types';
import { locationsData } from '../data/locations';

interface LocationSelectorProps {
  onSelect: (loc: LocationId) => void;
}

export default function LocationSelector({ onSelect }: LocationSelectorProps) {
  const cards = [
    {
      id: 'south' as LocationId,
      name: 'PAZ SOUTH',
      neighborhood: 'South Austin',
      accent: 'from-[#4CAF93] to-[#4CAF93]/20',
      shadow: 'rgba(76,175,147,0.15)',
      desc: 'Our historical South Austin flagship clinic combining high medical power and rich holistic methods.',
    },
    {
      id: 'east' as LocationId,
      name: 'PAZ EAST',
      neighborhood: 'East Cesar Chavez',
      accent: 'from-[#7DB7C3] to-[#7DB7C3]/20',
      shadow: 'rgba(125,183,195,0.15)',
      desc: 'Community-forward veterinary healing and advanced therapeutic systems in high-vibe East Austin.',
    },
    {
      id: 'west' as LocationId,
      name: 'PAZ WEST',
      neighborhood: 'Tarrytown / Exposition',
      accent: 'from-[#3a95aa] to-[#3a95aa]/20',
      shadow: 'rgba(58,149,170,0.15)',
      desc: 'Elite attention, tailored preventative vaccines, and relaxing spa-like environments for pets.',
    },
    {
      id: 'north' as LocationId,
      name: 'PAZ NORTH',
      neighborhood: 'North Lamar Blvd',
      accent: 'from-[#5c6c7d] to-[#5c6c7d]/20',
      shadow: 'rgba(92,108,125,0.15)',
      desc: 'Specialized diagnostic suites, extensive bone surgical rooms, and compassionate care.',
    },
  ];

  return (
    <div
      id="location-selection-viewport"
      className="min-h-screen w-full flex flex-col items-center justify-center bg-[#05070A] text-white px-6 py-12 relative overflow-hidden select-none"
    >
      {/* Background Soft Aurora Effects */}
      <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-[#4CAF93]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-[#7DB7C3]/5 blur-[120px] pointer-events-none" />

      {/* Decorative Particle Paws floating in background */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-[10%] left-[10%] text-[#4CAF93] rotate-12"><HeartPulse className="h-24 w-24" /></div>
        <div className="absolute bottom-[20%] right-[12%] text-[#7DB7C3] -rotate-45"><HeartPulse className="h-16 w-16" /></div>
      </div>

      <div className="max-w-6xl w-full flex flex-col items-center relative z-10">
        {/* Title & Brand Intro */}
        <motion.div
          id="selection-brand-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#4CAF93]/10 border border-[#4CAF93]/20 rounded-full text-xs font-semibold tracking-wider text-[#4CAF93] mb-4">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>FEAR FREE CERTIFIED VETERINARY HUB OUT OF AUSTIN, TEXAS</span>
          </div>
          <h1 className="font-sans text-6xl md:text-8xl font-black tracking-widest text-[#FFFFFF] mb-3">
            PAZ
          </h1>
          <p className="font-sans text-sm md:text-base tracking-[0.4em] uppercase text-[#AAB3BD] mb-4 font-mono font-bold">
            VETERINARY CARE
          </p>
          <div className="h-[2px] w-24 bg-gradient-to-r from-[#4CAF93] to-[#7DB7C3] mx-auto rounded-full mb-6" />
          <p className="font-sans text-sm md:text-base text-[#AAB3BD] max-w-xl mx-auto leading-relaxed">
            Welcome to pet care redefined. Select a location to explore premium diagnostic suites, surgical therapies, and dedicated veterinary teams.
          </p>
        </motion.div>

        {/* Locations Grid - Premium Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-12">
          {cards.map((card, idx) => {
            const data = locationsData[card.id];
            return (
              <motion.div
                key={card.id}
                id={`location-card-${card.id}`}
                onClick={() => onSelect(card.id)}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.15 }}
                className="group relative cursor-pointer"
              >
                {/* 3D Lift & Shadow Layer */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-[#0E1318] to-[#151C23] border border-white/5 group-hover:border-white/15 rounded-2xl transition-all duration-500 overflow-hidden"
                  style={{
                    boxShadow: `0 8px 30px rgba(0,0,0,0.4), 0 0 0 rgba(0,0,0,0)`
                  }}
                />

                {/* Hover Glow Border Effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                  style={{
                    border: '1.5px solid transparent',
                    backgroundImage: `linear-gradient(135deg, ${card.id === 'south' ? '#4CAF93' : card.id === 'east' ? '#7DB7C3' : card.id === 'west' ? '#3a95aa' : '#5c6c7d'}, transparent)`,
                    WebkitMask: 'linear-gradient(%23fff 0 0) padding-box, linear-gradient(%23fff 0 0)',
                    WebkitMaskComposite: 'xor',
                  }}
                />

                {/* Top Colored Bar Accent */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${card.accent} rounded-t-2xl`} />

                {/* Content Block */}
                <div className="relative p-8 h-full flex flex-col justify-between z-10 transition-transform duration-500 group-hover:-translate-y-2">
                  <div>
                    {/* Header with Pin Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[10px] tracking-widest font-mono text-[#AAB3BD] uppercase font-bold">
                        {card.neighborhood}
                      </span>
                      <div className="h-8 w-8 flex items-center justify-center rounded-lg bg-white/5 text-[#AAB3BD] group-hover:text-white group-hover:bg-white/10 transition-all">
                        <MapPin className="h-4 w-4" />
                      </div>
                    </div>

                    {/* Location Headline */}
                    <h2 className="font-sans text-2xl font-black tracking-wider text-white mb-3 group-hover:text-white transition-colors">
                      {card.name}
                    </h2>

                    {/* Physical Details */}
                    <p className="font-sans text-xs text-[#AAB3BD] leading-relaxed mb-6">
                      {card.desc}
                    </p>
                  </div>

                  {/* Foot Action Button */}
                  <div className="flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest text-[#4CAF93] hover:text-[#7DB7C3] transition-colors mt-4">
                    <span>ENTER CLINIC</span>
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Ambient glow light background reveal */}
                <div
                  className="absolute inset-x-8 bottom-4 h-24 rounded-full bg-gradient-to-t filter blur-xl opacity-0 group-hover:opacity-35 transition-opacity duration-500 pointer-events-none"
                  style={{
                    backgroundImage: `linear-gradient(to top, ${card.id === 'south' ? '#4CAF93' : card.id === 'east' ? '#7DB7C3' : card.id === 'west' ? '#3a95aa' : '#5c6c7d'}, transparent)`
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Security badge & reassurance */}
        <motion.div
          id="selection-security-assurance"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center gap-2 mt-8 text-xs text-[#AAB3BD]"
        >
          <Dog className="h-4 w-4 text-[#4CAF93]" />
          <span>Austin owned and operated since 2012. Providing certified stress-free medical precision.</span>
        </motion.div>
      </div>
    </div>
  );
}
