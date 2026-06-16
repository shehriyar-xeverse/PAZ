import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Filter, Landmark, ArrowUpRight, ShieldAlert, BadgeInfo } from 'lucide-react';
import { Partner } from '../types';
import { partnersData } from '../data/partners';
import AnimatedSection, { fadeUpVariant } from '../components/AnimatedSection';
import ThreeDTilt from '../components/ThreeDTilt';

export default function Village() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Health', 'Nutrition', 'Fitness', 'Community', 'Animal Welfare'];

  // Filters partners list based on active category
  const filteredPartners = activeCategory === 'All'
    ? partnersData
    : partnersData.filter((p) => p.category === activeCategory);

  return (
    <div id="village-page-viewport" className="min-h-screen pt-32 pb-24 text-white overflow-hidden">
      {/* Page Header */}
      <AnimatedSection className="max-w-7xl mx-auto px-6 text-center mb-16" staggerDelay={0.1}>
        <motion.span variants={fadeUpVariant} className="text-[10px] uppercase font-bold tracking-widest text-[#4CAF93] bg-[#4CAF93]/10 px-3 py-1 rounded-full inline-flex items-center gap-1.5 mb-4">
          <Landmark className="h-3.5 w-3.5" />
          <span>PAZ VILLAGE ECOSYSTEM</span>
        </motion.span>
        <motion.h1 variants={fadeUpVariant} className="font-sans text-4xl md:text-6xl font-sans font-black tracking-tight text-white mb-4">
          The Village Partner Directory
        </motion.h1>
        <motion.p variants={fadeUpVariant} className="font-sans text-xs md:text-sm text-[#AAB3BD] max-w-2xl mx-auto leading-relaxed">
          Paz partners with industry-leading nutritional developers, physical therapists, safety shelters, and fitness centers to secure a robust wellness blanket for our local community.
        </motion.p>
      </AnimatedSection>

      {/* Welfare Core Highlight Section */}
      <AnimatedSection className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div variants={fadeUpVariant}>
          <ThreeDTilt glowColor="rgba(76, 175, 147, 0.25)">
            <div
              id="welfare-alliance-highlight"
              className="p-8 rounded-3xl bg-[#0E1318]/90 border border-[#4CAF93]/40 shadow-[0_0_40px_rgba(76,175,147,0.12)] flex flex-col md:flex-row gap-8 items-center justify-between relative overflow-hidden h-full"
            >
              <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-[#4CAF93]/5 blur-3xl pointer-events-none" />
              
              <div className="flex items-start gap-4 flex-1">
                <div className="h-12 w-12 rounded-xl bg-[#4CAF93]/15 flex items-center justify-center border border-[#4CAF93]/35 shrink-0">
                  <Heart className="h-6 w-6 text-[#4CAF93] animate-pulse" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wide font-bold font-mono text-[#4CAF93]">ACTIVE WELFARE COOPERATION</span>
                  <h3 className="font-sans text-xl md:text-2xl font-black text-white mt-1 mb-2">
                    Austin Pets Alive! &amp; Austin Animal Center Alliance
                  </h3>
                  <p className="font-sans text-xs text-[#AAB3BD] leading-relaxed max-w-3xl">
                    Paz South works dynamically alongside <strong className="text-white">Austin Pets Alive!</strong> and <strong className="text-white">Austin Animal Center</strong>. We assist in critical, emergency trauma intakes, perform pre-adoption diagnostics sweeps, and support chronic medical programs to give shelter animals an authentic second chance.
                  </p>
                </div>
              </div>

              <div className="shrink-0 relative z-10">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://www.austinpetsalive.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-[#4CAF93]/15 hover:border-[#4CAF93]/50 text-white text-xs font-bold uppercase tracking-widest transition-all inline-flex items-center gap-1.5"
                >
                  <span>Learn About APA!</span>
                  <ArrowUpRight className="h-4 w-4" />
                </motion.a>
              </div>
            </div>
          </ThreeDTilt>
        </motion.div>
      </AnimatedSection>

      {/* Interactive Category Filter Menu */}
      <AnimatedSection className="max-w-7xl mx-auto px-6 mb-12" staggerDelay={0.05}>
        <motion.div variants={fadeUpVariant} className="flex items-center gap-2 mb-4">
          <Filter className="h-4 w-4 text-[#7DB7C3]" />
          <span className="text-xs uppercase font-bold tracking-widest font-mono text-white/50">Filter Alliance Categories</span>
        </motion.div>

        <div className="flex flex-wrap gap-2.5">
          {categories.map((cat) => {
            const isSel = activeCategory === cat;
            return (
              <motion.button
                variants={fadeUpVariant}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  isSel
                    ? 'bg-[#4CAF93] text-black shadow-lg shadow-[#4CAF93]/25 border border-[#4CAF93]'
                    : 'bg-[#0E1318]/80 border border-white/5 text-[#AAB3BD] hover:text-white hover:border-white/10'
                }`}
              >
                {cat}
              </motion.button>
            );
          })}
        </div>
      </AnimatedSection>

      {/* Partners Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPartners.map((partner) => (
              <motion.div
                key={partner.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ThreeDTilt glowColor="rgba(125, 183, 195, 0.2)">
                  <div className="group rounded-2xl bg-[#0E1318]/70 backdrop-blur-md border border-white/5 hover:border-[#4CAF93]/35 overflow-hidden shadow-xl flex flex-col justify-between h-full min-h-[420px]">
                    {/* Card Header Media */}
                    <div className="h-44 overflow-hidden relative">
                      <img
                        src={partner.image}
                        alt={partner.name}
                        className="w-full h-full object-cover filter brightness-[0.75] group-hover:scale-105 duration-700 transition-transform"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0E1318] via-transparent to-transparent opacity-90" />
                      
                      {/* Visual Category Label */}
                      <div className="absolute top-4 left-4 px-2.5 py-1 bg-[#4CAF93]/20 border border-[#4CAF93]/35 rounded text-[8px] font-bold uppercase tracking-widest text-[#4CAF93] font-mono z-10">
                        {partner.category}
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-sans text-lg font-bold text-white mb-2 group-hover:text-[#4CAF93] transition-colors">
                          {partner.name}
                        </h3>
                        <p className="font-sans text-xs leading-relaxed text-[#AAB3BD] mb-6 font-semibold">
                          {partner.description}
                        </p>
                      </div>

                      <div className="border-t border-white/5 pt-4 flex items-center justify-between">
                        {partner.link !== '#' ? (
                          <motion.a
                            whileHover={{ x: 3 }}
                            href={partner.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[10px] uppercase font-bold tracking-widest text-[#4CAF93] hover:text-white transition-colors flex items-center gap-1.5"
                          >
                            <span>Visit Partner Website</span>
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </motion.a>
                        ) : (
                          <span className="text-[10px] uppercase font-bold tracking-widest text-[#AAB3BD]/60 flex items-center gap-1.5 font-semibold">
                            <BadgeInfo className="h-3.5 w-3.5 text-[#7DB7C3]" />
                            <span>Official Local Sponsor</span>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </ThreeDTilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
