import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, Mail, Pill, PhoneCall, X, FileCheck, Stethoscope, Sparkles } from 'lucide-react';
import AnimatedSection, { fadeUpVariant } from '../components/AnimatedSection';
import ThreeDTilt from '../components/ThreeDTilt';

interface TeamMember {
  id: string;
  name: string;
  image: string;
  role: string;
  bio: string;
  specialties: string[];
}

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const teamList: TeamMember[] = [
    {
      id: 'jade-berlin',
      name: 'Jade Berlin',
      image: 'https://res.cloudinary.com/dju25z9v3/image/upload/v1781633221/Jade-Berlin-headshot-square_fvvmvs.jpg',
      role: 'Support Coordinator',
      bio: 'Jade manages the core communication workflow for our online prescription home delivery system, ensuring rapid review times and smooth deliveries.',
      specialties: ['Prescription Synchronization', 'Courier Tracking', 'Client Communications'],
    },
    {
      id: 'jeanne',
      name: 'Jeanne',
      image: 'https://res.cloudinary.com/dju25z9v3/image/upload/v1781633221/RxR_Jeanne-square_h8or8m.jpg',
      role: 'Prescription Operations Specialist',
      bio: 'Jeanne checks prescription authorizations, handles therapeutic compounding approvals, and audits order accuracies for complete safety.',
      specialties: ['Clinical Audits', 'Therapeutic Compounding', 'Compliance Review'],
    },
    {
      id: 'chadra',
      name: 'Chadra',
      image: 'https://res.cloudinary.com/dju25z9v3/image/upload/v1781633221/RxR_Chadra-square_jgfnzg.jpg',
      role: 'Home Delivery Facilitator',
      bio: 'Chadra synchronizes pharmaceutical refills with chronic care timelines, ensuring no pet is missed or goes without essential support.',
      specialties: ['Multi-Pet Refills', 'Client Education', 'Inventory Coordination'],
    },
    {
      id: 'jenna-daiek',
      name: 'Jenna Daiek',
      image: 'https://res.cloudinary.com/dju25z9v3/image/upload/v1781633222/jenna-daiek-head-shot-square_durykp.jpg',
      role: 'Support Specialist',
      bio: 'Jenna fields medical queries, handles direct communications between our veterinarians and suppliers, and clarifies complex dietary schedules.',
      specialties: ['Chronic Diets Coordination', 'Supplier Diagnostics', 'Order Approvals'],
    } as any,
    {
      id: 'kathy',
      name: 'Kathy',
      image: 'https://res.cloudinary.com/dju25z9v3/image/upload/v1781633222/RxR_Kathy-square_l6ftqw.jpg',
      role: 'Online Refills Lead',
      bio: 'Kathy coordinates internal system refilling tools, audits pharmacy requests, and accelerates veterinary sign-offs for quick responses.',
      specialties: ['Priority Direct Refills', 'Platform Sync', 'Specialist Escalations'],
    },
    {
      id: 'mariah',
      name: 'Mariah',
      image: 'https://res.cloudinary.com/dju25z9v3/image/upload/v1781633222/RxR_Mariah-square_eh4jh8.jpg',
      role: 'Delivery Coordinator',
      bio: 'Mariah ensures the cold-chain shipping logistics are pristine for vaccines and heat-sensitive therapeutics, securing safe delivery of medicines.',
      specialties: ['Cold-Chain Deliveries', 'Client Helpdesk', 'Status Inquiries'],
    },
    {
      id: 'valerie',
      name: 'Valerie',
      image: 'https://res.cloudinary.com/dju25z9v3/image/upload/v1781633222/RxR_Valerie-square_ruorra.jpg',
      role: 'Clinical Liaison',
      bio: 'Valerie acts as the direct link between active ward vets and online deliveries, ensuring that medication adjustments conform to diagnostics.',
      specialties: ['Veterinary Oversight', 'Metric Review', 'Emergency Orders Courier'],
    },
  ];

  return (
    <div id="team-page-viewport" className="min-h-screen pt-32 pb-24 text-white overflow-hidden">
      {/* Page Header */}
      <AnimatedSection className="max-w-7xl mx-auto px-6 text-center mb-16" staggerDelay={0.1}>
        <motion.span variants={fadeUpVariant} className="text-[10px] uppercase font-bold tracking-widest text-[#4CAF93] bg-[#4CAF93]/10 px-3 py-1 rounded-full inline-flex items-center gap-1.5 mb-4">
          <Pill className="h-3.5 w-3.5 text-[#4CAF93] animate-spin-slow" />
          <span>PHARMACY HOME SERVICE LEADERS</span>
        </motion.span>
        <motion.h1 variants={fadeUpVariant} className="font-sans text-4xl md:text-6xl font-sans font-black tracking-tight text-white mb-4">
          Online Pharmacy Support
        </motion.h1>
        <motion.p variants={fadeUpVariant} className="font-sans text-xs md:text-sm text-[#AAB3BD] max-w-2xl mx-auto leading-relaxed">
          Our online pharmacy support team works collaboratively to manage the home delivery program for our veterinary practice, delivering pristine biological safety and rapid prescription processing.
        </motion.p>
      </AnimatedSection>

      {/* Team Cards Grid */}
      <AnimatedSection className="max-w-7xl mx-auto px-6 mb-12" staggerDelay={0.08}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamList.map((member) => (
            <motion.div
              key={member.id}
              id={`team-member-card-${member.id}`}
              variants={fadeUpVariant}
              onClick={() => setSelectedMember(member)}
            >
              <ThreeDTilt glowColor="rgba(76, 175, 147, 0.3)">
                <div
                  className="group relative rounded-2xl bg-[#0E1318]/70 backdrop-blur-md border border-white/5 hover:border-[#4CAF93]/35 overflow-hidden transition-all duration-300 shadow-xl flex flex-col justify-between cursor-pointer h-full min-h-[440px]"
                >
                  {/* Image Box */}
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 duration-700 transition filter brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E1318] via-transparent to-transparent opacity-85" />
                  </div>

                  {/* Profile Brief */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] font-mono tracking-widest text-[#4CAF93] uppercase font-extrabold block mb-1">
                        {member.role}
                      </span>
                      <h3 className="font-sans text-lg font-bold text-white mb-2 group-hover:text-[#4CAF93] transition-colors">
                        {member.name}
                      </h3>
                      <p className="font-sans text-[11px] leading-relaxed text-[#AAB3BD] line-clamp-2">
                        {member.bio}
                      </p>
                    </div>

                    <div className="border-t border-white/5 pt-4 mt-4 flex items-center justify-between text-[10px] font-bold text-[#7DB7C3] group-hover:text-white transition-colors uppercase tracking-widest">
                      <span>View Full Bio</span>
                      <span>&rarr;</span>
                    </div>
                  </div>
                </div>
              </ThreeDTilt>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Team Member Detail Modal (AnimatePresence Overlay) */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            id="team-detail-modal"
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-[#05070A]/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-2xl rounded-3xl bg-[#0E1318] border border-[#4CAF93]/40 shadow-[0_0_50px_rgba(76,175,147,0.2)] p-8 overflow-hidden"
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            >
              {/* Internal decorative flare */}
              <div className="absolute -top-16 -left-16 h-40 w-40 rounded-full bg-[#4CAF93]/5 blur-3xl pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-6 right-6 h-10 w-10 flex items-center justify-center rounded-xl bg-[#151C23] border border-white/10 text-[#AAB3BD] hover:text-white hover:border-white/25 transition-all cursor-pointer z-10 animate-fade-in"
                aria-label="Close bio details modal"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center relative z-10 pt-4">
                {/* Photo */}
                <div className="sm:col-span-5 rounded-2xl overflow-hidden border border-white/10 aspect-square shadow-xl">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover select-none pointer-events-none"
                  />
                </div>

                {/* Specifics */}
                <div className="sm:col-span-7 flex flex-col gap-5">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#4CAF93] uppercase font-black block mb-1">
                      {selectedMember.role}
                    </span>
                    <h2 className="font-sans text-3xl font-black tracking-tight text-white flex items-center gap-2">
                      <span>{selectedMember.name}</span>
                      <Sparkles className="h-4.5 w-4.5 text-[#4CAF93] animate-pulse" />
                    </h2>
                  </div>

                  <p className="font-sans text-xs md:text-sm leading-relaxed text-[#AAB3BD]">
                    {selectedMember.bio}
                  </p>

                  {/* Specialty Pills */}
                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-white/50 uppercase block mb-2">
                      CORE CLINICAL SKILLSETS
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.specialties.map((spec) => (
                        <span
                          key={spec}
                          className="text-[9px] font-extrabold uppercase px-2.5 py-1 bg-[#151C23]/80 border border-[#4CAF93]/20 text-[#4CAF93] rounded-lg tracking-wider"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Safe Direct Call Assistance */}
                  <div className="border-t border-white/5 pt-4 mt-2 flex items-center gap-3">
                    <div className="h-8 w-8 flex items-center justify-center rounded-lg bg-[#4CAF93]/15 text-[#4CAF93] border border-[#4CAF93]/20">
                      <PhoneCall className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-medium text-[#AAB3BD] leading-none uppercase tracking-wide">
                        REFILLS DIRECT HELPDESK
                      </span>
                      <span className="text-xs text-white font-bold leading-none mt-1">
                        1-800-PAZ-REFILL
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
