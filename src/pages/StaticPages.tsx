import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, Heart, Users, MapPin, Eye, GraduationCap, 
  Video, FileText, X, AlertCircle, Sparkles, Check 
} from 'lucide-react';
import AnimatedSection, { fadeUpVariant } from '../components/AnimatedSection';
import ThreeDTilt from '../components/ThreeDTilt';

interface StaticPagesProps {
  pageType: 'tours' | 'careers' | 'privacy' | 'terms' | 'accessibility';
}

export default function StaticPages({ pageType }: StaticPagesProps) {
  const [modalActive, setModalActive] = useState(false);
  const [activeModalTitle, setActiveModalTitle] = useState('');
  const [activeModalContent, setActiveModalContent] = useState('');
  const [activeModalType, setActiveModalType] = useState<'tour' | 'career'>('tour');
  const [careerSubmitted, setCareerSubmitted] = useState<string | null>(null);

  const showSimulationModal = (title: string, type: 'tour' | 'career', desc: string) => {
    setActiveModalTitle(title);
    setActiveModalType(type);
    setActiveModalContent(desc);
    setModalActive(true);
  };

  // 1. Tours Panel View
  if (pageType === 'tours') {
    const tourClinics = [
      {
        name: 'PAZ South (Austin Flagship)',
        address: '3024 S 1st St, Austin, TX',
        image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=600',
        highlights: ['Organic wood frame accents', 'Diffused LED non-glare lighting', 'Calm scent pheromone systems'],
        matterportDesc: 'You are now entering the South Austin flagship healing sanctuary. Feel the organic cedar wood frame accents, enjoy our warm non-glare LED lit ceiling paths, and experience our ambient pheromone diffuser arrays designed to ease feline and canine heartbeats.'
      },
      {
        name: 'PAZ East (Architectural Core)',
        address: '2515 E Cesar Chavez St, Austin, TX',
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600',
        highlights: ['Double height glass walls', 'In-wall acoustic panels', 'Integrated specialized ultrasound suites'],
        matterportDesc: 'Welcome to the East Cesar Chavez architectural core. Tour our soaring double-height glass reception zone, acoustic in-wall sound muffling dampeners, and our high-tier surgical preview rooms.'
      },
      {
        name: 'PAZ West (Spa-Like Sanctuary)',
        address: '2611 Exposition Blvd, Austin, TX',
        image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600',
        highlights: ['Zen gardens for pet parents', 'Ultra-mini quiet-flow diagnostic pumps', 'Comfort suites for seniors'],
        matterportDesc: 'Welcome to PAZ West. Relax in our parent Zen stone gardens, experience our state-of-the-art diagnostic imaging room with silent-frequency acoustic pumps, and peek into our custom Senior Care suites.'
      },
    ];

    return (
      <div className="min-h-screen text-white pt-32 pb-24 overflow-hidden">
        <AnimatedSection className="max-w-7xl mx-auto px-6 text-center mb-16" staggerDelay={0.1}>
          <motion.span variants={fadeUpVariant} className="text-[10px] uppercase font-bold tracking-widest text-[#4CAF93] bg-[#4CAF93]/10 px-3 py-1 rounded-full inline-flex items-center gap-1.5 mb-4">
            <Video className="h-3.5 w-3.5 animate-pulse" />
            <span>PAZ VIRTUAL WALKTHROUGHS</span>
          </motion.span>
          <motion.h1 variants={fadeUpVariant} className="font-sans text-4xl md:text-6xl font-sans font-black tracking-tight text-white mb-4">
            Clinic Virtual Tours
          </motion.h1>
          <motion.p variants={fadeUpVariant} className="font-sans text-xs md:text-sm text-[#AAB3BD] max-w-2xl mx-auto leading-relaxed">
            Take an immersive 3D visual step into our peaceful, carefully calibrated healing spaces. We build environment layouts that eliminate the fear of diagnostic treatments.
          </motion.p>
        </AnimatedSection>

        <AnimatedSection className="max-w-7xl mx-auto px-6" staggerDelay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tourClinics.map((clinic, i) => (
              <motion.div key={i} variants={fadeUpVariant}>
                <ThreeDTilt glowColor="rgba(76, 175, 147, 0.3)">
                  <div className="rounded-2xl overflow-hidden bg-[#0E1318]/80 backdrop-blur-md border border-white/5 shadow-2xl flex flex-col justify-between h-full group">
                    <div className="h-56 overflow-hidden relative">
                      <img src={clinic.image} alt={clinic.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.8]" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0E1318] to-transparent pointer-events-none" />
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[9px] font-mono tracking-widest text-[#4CAF93] uppercase font-bold block mb-1">AUSTIN, TEXAS</span>
                        <h3 className="font-sans text-lg font-bold text-white mb-1 group-hover:text-[#4CAF93] transition-colors">{clinic.name}</h3>
                        <p className="font-sans text-[11px] text-[#AAB3BD] mb-4">{clinic.address}</p>
                        
                        <div className="flex flex-col gap-2 pt-4 border-t border-white/5">
                          <span className="text-[9px] font-mono font-bold text-[#7DB7C3] uppercase tracking-wider">HOSPITAL HIGHLIGHTS:</span>
                          {clinic.highlights.map((h, k) => (
                            <div key={k} className="flex items-center gap-2 text-xs text-[#AAB3BD]">
                              <div className="h-1 w-1 bg-[#4CAF93] rounded-full shrink-0" />
                              <span className="truncate">{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-6">
                        <motion.button 
                          whileHover={{ scale: 1.02, boxShadow: '0 0 12px rgba(76, 175, 147, 0.3)' }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => showSimulationModal(clinic.name, 'tour', clinic.matterportDesc)} 
                          className="w-full py-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-xs font-bold uppercase tracking-widest text-center transition-all cursor-pointer"
                        >
                          Launch 3D Walkthrough
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </ThreeDTilt>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Cinematic Portal Simulation Modal */}
        <AnimatePresence>
          {modalActive && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#05070A]/90 backdrop-blur-lg"
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-2xl rounded-3xl bg-[#0E1318] border border-[#4CAF93]/40 p-8 shadow-[0_0_50px_rgba(76,175,147,0.25)] overflow-hidden"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setModalActive(false)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-all cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>

                {activeModalType === 'tour' ? (
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-[#4CAF93]/15 flex items-center justify-center border border-[#4CAF93]/40 text-[#4CAF93]">
                        <Video className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-[9px] font-mono tracking-widest text-[#4CAF93] font-bold uppercase block">3D PAZ MATTERPORT SYSTEM</span>
                        <h3 className="font-sans text-xl font-black text-white">{activeModalTitle}</h3>
                      </div>
                    </div>

                    <div className="h-64 rounded-xl bg-[#05070A] border border-white/5 relative overflow-hidden flex items-center justify-center">
                      {/* Grid scanning effect */}
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(76,175,147,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(76,175,147,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
                      
                      {/* Animated Scanner Bar */}
                      <motion.div 
                        initial={{ top: '0%' }}
                        animate={{ top: '100%' }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#4CAF93]/60 to-transparent shadow-[0_0_8px_#4CAF93]"
                      />

                      <div className="text-center p-6 flex flex-col items-center gap-4 relative z-10">
                        <Sparkles className="h-8 w-8 text-[#4CAF93] animate-bounce" />
                        <span className="text-[10px] font-mono tracking-widest text-[#4CAF93] font-bold uppercase animate-pulse">STREAMING DECIMATED POLYGON mesh</span>
                        <p className="text-xs text-[#AAB3BD] max-w-md italic">
                          &ldquo;Initializing progressive mesh rendering... High-contrast textures calibrated successfully.&rdquo;
                        </p>
                      </div>
                    </div>

                    <p className="text-xs leading-relaxed text-[#AAB3BD]">
                      {activeModalContent}
                    </p>

                    <div className="flex justify-end gap-3 border-t border-white/5 pt-6">
                      <button 
                        onClick={() => setModalActive(false)}
                        className="px-5 py-2.5 rounded-lg bg-[#4CAF93] hover:bg-[#3d917b] text-[#05070A] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                      >
                        Enter Fullscreen Mode
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-[#7DB7C3]/15 flex items-center justify-center border border-[#7DB7C3]/40 text-[#7DB7C3]">
                        <GraduationCap className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-[9px] font-mono tracking-widest text-[#7DB7C3] font-bold uppercase block">SECURE CLINIC ENROLLMENT</span>
                        <h3 className="font-sans text-xl font-black text-white">{activeModalTitle}</h3>
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#05070A]/50 border border-white/5 text-xs text-[#AAB3BD] leading-relaxed">
                      You are applying online for the <strong className="text-white">{activeModalTitle}</strong> position. Complete your interactive application simulation below to submit your credentials directly to our HR team.
                    </div>

                    {careerSubmitted ? (
                      <motion.div 
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="p-6 rounded-2xl bg-[#4CAF93]/10 border border-[#4CAF93]/30 text-center flex flex-col items-center gap-3"
                      >
                        <Check className="h-8 w-8 text-[#4CAF93] p-1 bg-[#4CAF93]/20 rounded-full" />
                        <h4 className="font-medium text-white text-sm">Application Sent Successfully!</h4>
                        <p className="text-[11px] text-[#AAB3BD] max-w-sm">
                          Your profile for {activeModalTitle} was signed securely as <code className="text-white bg-[#05070A] px-1.5 py-0.5 rounded">{careerSubmitted}</code> and delivered to our Clinical Nurture HR unit.
                        </p>
                      </motion.div>
                    ) : (
                      <form onSubmit={(e) => {
                        e.preventDefault();
                        const formData = new FormData(e.currentTarget);
                        const email = formData.get('email') as string;
                        setCareerSubmitted(email || 'anonymous@pazvet.com');
                      }} className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[9px] font-mono text-[#AAB3BD] uppercase font-bold">Your Email Address</label>
                          <input 
                            required
                            name="email"
                            type="email" 
                            placeholder="doc.paz@example.com" 
                            className="w-full bg-[#05070A] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:border-[#4CAF93] outline-none transition-colors"
                          />
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="text-[9px] font-mono text-[#AAB3BD] uppercase font-bold">Briefly, why does the PAZ Fear-Free philosophy speak to you?</label>
                          <textarea 
                            required
                            rows={3}
                            placeholder="I believe clinical pacing, acupuncture loops, and visual warm surfaces completely transform diagnostic outcomes..." 
                            className="w-full bg-[#05070A] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:border-[#4CAF93] outline-none transition-colors resize-none"
                          />
                        </div>

                        <button 
                          type="submit"
                          className="w-full py-3 rounded-xl bg-[#4CAF93] hover:bg-[#3d917b] text-black text-xs font-bold uppercase tracking-widest transition-all shadow-lg cursor-pointer"
                        >
                          Submit secure application &rarr;
                        </button>
                      </form>
                    )}
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // 2. Careers Panel View
  if (pageType === 'careers') {
    const jobs = [
      {
        title: 'Associate Veterinarian (DVM)',
        type: 'Full-Time &bull; South Flagship',
        desc: 'Seeking a progressive, forward-thinking veterinary practitioner certified in (or willing to obtain) fear-free and acupuncture systems. Excellent in diagnostic ultrasound and collaborative surgery.',
        salary: '$135,000 - $175,000 / Year base + production hooks',
      },
      {
        title: 'Licensed Veterinary Technician (LVT)',
        type: 'Full-Time &bull; East &amp; West Clinics',
        desc: 'Credentials required. Technical lead supervising blood chemical sweeps, pre-op anesthesia custom calibrators, and sub-gingival ultrasonic scaling workflows.',
        salary: '$24 - $30 / Hour + wellness health benefits',
      },
      {
        title: 'Client Care Coordinator (CCC)',
        type: 'Part-Time &bull; North Lamar Center',
        desc: 'Our frontline hospitality agents representing high-vibe Austin warmth. Familiar with online medicine refill operations and fear-free greetings.',
        salary: '$18 - $22 / Hour',
      },
    ];

    return (
      <div className="min-h-screen text-white pt-32 pb-24 overflow-hidden">
        <AnimatedSection className="max-w-7xl mx-auto px-6 text-center mb-16" staggerDelay={0.1}>
          <motion.span variants={fadeUpVariant} className="text-[10px] uppercase font-bold tracking-widest text-[#4CAF93] bg-[#4CAF93]/10 px-3 py-1 rounded-full inline-flex items-center gap-1.5 mb-4">
            <GraduationCap className="h-3.5 w-3.5" />
            <span>PAZ ADMISSIONS &amp; HOSPITAL ACADEMY</span>
          </motion.span>
          <motion.h1 variants={fadeUpVariant} className="font-sans text-4xl md:text-6xl font-sans font-black tracking-tight text-white mb-4">
            Veterinary Careers
          </motion.h1>
          <motion.p variants={fadeUpVariant} className="font-sans text-xs md:text-sm text-[#AAB3BD] max-w-2xl mx-auto leading-relaxed">
            Work inside high-vibe veterinary facilities equipped with state-of-the-art diagnostic machinery. We value mental health, pay realistic livable wages, and operate without toxic metrics.
          </motion.p>
        </AnimatedSection>

        <AnimatedSection className="max-w-4xl mx-auto px-6" staggerDelay={0.15}>
          <div className="flex flex-col gap-6">
            {jobs.map((job, idx) => (
              <motion.div key={idx} variants={fadeUpVariant}>
                <ThreeDTilt glowColor="rgba(125, 183, 195, 0.2)">
                  <div className="p-8 rounded-2xl bg-[#0E1318]/70 backdrop-blur-md border border-white/5 hover:border-[#4CAF93]/35 transition-all flex flex-col sm:flex-row gap-6 justify-between items-start">
                    <div className="flex-1">
                      <span className="text-[9px] font-mono tracking-widest text-[#7DB7C3] uppercase font-bold block mb-1">PAZ CAREERS OPENING</span>
                      <h3 className="font-sans text-xl font-bold text-white mb-2 group-hover:text-[#4CAF93] transition-colors">{job.title}</h3>
                      <p className="text-xs text-[#AAB3BD] font-medium leading-relaxed mb-4 font-semibold" dangerouslySetInnerHTML={{ __html: job.type }} />
                      <p className="text-xs text-[#AAB3BD]/85 leading-relaxed mb-4">{job.desc}</p>
                      <span className="text-[10px] font-mono text-[#4CAF93] font-bold block" dangerouslySetInnerHTML={{ __html: `Salary / Rate: ${job.salary}` }} />
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => showSimulationModal(job.title, 'career', job.desc)} 
                      className="px-5 py-3 rounded-xl bg-[#4CAF93] hover:bg-[#3d917b] text-black font-extrabold text-xs uppercase tracking-wider block shrink-0 cursor-pointer self-start sm:self-center transition-colors shadow-lg"
                    >
                      Apply Online Now
                    </motion.button>
                  </div>
                </ThreeDTilt>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Career/Tour secure modal */}
        <AnimatePresence>
          {modalActive && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#05070A]/90 backdrop-blur-lg"
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-2xl rounded-3xl bg-[#0E1318] border border-[#4CAF93]/40 p-8 shadow-[0_0_50px_rgba(76,175,147,0.25)] overflow-hidden"
              >
                {/* Close Button */}
                <button 
                  onClick={() => {
                    setModalActive(false);
                    setCareerSubmitted(null);
                  }}
                  className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-all cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>

                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-[#7DB7C3]/15 flex items-center justify-center border border-[#7DB7C3]/40 text-[#7DB7C3]">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono tracking-widest text-[#7DB7C3] font-bold uppercase block">SECURE CLINIC ENROLLMENT</span>
                      <h3 className="font-sans text-xl font-black text-white">{activeModalTitle}</h3>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#05070A]/50 border border-white/5 text-xs text-[#AAB3BD] leading-relaxed">
                    You are applying online for the <strong className="text-white">{activeModalTitle}</strong> position. Complete your interactive application simulation below to submit your credentials directly to our HR team.
                  </div>

                  {careerSubmitted ? (
                    <motion.div 
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="p-6 rounded-2xl bg-[#4CAF93]/10 border border-[#4CAF93]/30 text-center flex flex-col items-center gap-3"
                    >
                      <Check className="h-8 w-8 text-[#4CAF93] p-1 bg-[#4CAF93]/20 rounded-full" />
                      <h4 className="font-medium text-white text-sm">Application Sent Successfully!</h4>
                      <p className="text-[11px] text-[#AAB3BD] max-w-sm">
                        Your profile for {activeModalTitle} was signed securely as <code className="text-white bg-[#05070A] px-1.5 py-0.5 rounded">{careerSubmitted}</code> and delivered to our Clinical Nurture HR unit.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={(e) => {
                      e.preventDefault();
                      const formData = new FormData(e.currentTarget);
                      const email = formData.get('email') as string;
                      setCareerSubmitted(email || 'anonymous@pazvet.com');
                    }} className="flex flex-col gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[9px] font-mono text-[#AAB3BD] uppercase font-bold">Your Email Address</label>
                        <input 
                          required
                          name="email"
                          type="email" 
                          placeholder="doc.paz@example.com" 
                          className="w-full bg-[#05070A] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:border-[#4CAF93] outline-none transition-colors"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-[9px] font-mono text-[#AAB3BD] uppercase font-bold">Briefly, why does the PAZ Fear-Free philosophy speak to you?</label>
                        <textarea 
                          required
                          rows={3}
                          placeholder="I believe clinical pacing, acupuncture loops, and visual warm surfaces completely transform diagnostic outcomes..." 
                          className="w-full bg-[#05070A] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:border-[#4CAF93] outline-none transition-colors resize-none"
                        />
                      </div>

                      <button 
                        type="submit"
                        className="w-full py-3 rounded-xl bg-[#4CAF93] hover:bg-[#3d917b] text-black text-xs font-bold uppercase tracking-widest transition-all shadow-lg cursor-pointer"
                      >
                        Submit secure application &rarr;
                      </button>
                    </form>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // 3. Privacy, Terms, and Accessibility Views
  let titleText = '';
  let subText = '';
  let policyText = '';

  if (pageType === 'privacy') {
    titleText = 'Privacy Code Policy';
    subText = 'How we manage, protect, and encrypt client records and medical diagnostic sweeps.';
    policyText = 'At PAZ Veterinary, we treat your pet parent records with high confidentiality standards. We never monetize, package, or distribute demographic, email, or health index metrics to downstream marketing entities. All digital diagnostic records, custom blood chemical calculations, and orthodontic bone radiographs are stored inside high-grade encrypted clouds in compliance with healthcare security frameworks.';
  } else if (pageType === 'terms') {
    titleText = 'Terms of Clinical Engagement';
    subText = 'Standard terms regulating booking systems, payment timelines, and veterinary operations.';
    policyText = 'By booking appointments or accessing our online pharmacy deliveries, you validate that you represent the legal owner of the specified animal. Payments must be finalized during treatment dismissals. Same-day cancellations may incur nominal service holds; emergencies are exempted. Any auxiliary prescription compounding is routed directly via licensed partners at People’s Pharmacy.';
  } else if (pageType === 'accessibility') {
    titleText = 'Accessibility Statement (WCAG 2.1)';
    subText = 'Confirming our application satisfies highest high contrast standards and keyboard navigations.';
    policyText = 'We designed this digital web presence in strict compliance with Web Content Accessibility Guidelines (WCAG) 2.1 Level AA specifications to secure easy navigations. Our typography features Inter and custom displays formatted against deep charcoal #05070A backdrops to ensure perfect contrast markers. We maintain clean document keyboard focus lines, screen reader friendly ARIA labels, and explicit alternative descriptions.';
  }

  return (
    <div className="min-h-screen text-white pt-32 pb-24 overflow-hidden">
      <AnimatedSection className="max-w-4xl mx-auto px-6 text-center mb-12">
        <motion.span variants={fadeUpVariant} className="text-[10px] uppercase font-bold tracking-widest text-[#4CAF93] bg-[#4CAF93]/10 px-3 py-1 rounded-full inline-flex items-center gap-1.5 mb-4 mb-4">
          <FileText className="h-3.5 w-3.5 animate-pulse" />
          <span>PAZ LEGAL COMPASS</span>
        </motion.span>
        <motion.h1 variants={fadeUpVariant} className="font-sans text-4xl md:text-5xl font-sans font-black tracking-tight text-white mb-3 text-center">
          {titleText}
        </motion.h1>
        <motion.p variants={fadeUpVariant} className="font-sans text-xs md:text-sm text-[#AAB3BD] max-w-xl mx-auto leading-relaxed text-center">
          {subText}
        </motion.p>
      </AnimatedSection>

      <AnimatedSection className="max-w-4xl mx-auto px-6">
        <motion.div variants={fadeUpVariant}>
          <ThreeDTilt glowColor="rgba(125, 183, 195, 0.15)">
            <div className="p-8 md:p-12 rounded-3xl bg-[#0E1318]/90 backdrop-blur-md border border-white/5 shadow-2xl flex flex-col gap-6 text-xs leading-relaxed text-[#AAB3BD] font-semibold text-center sm:text-left">
              <p>{policyText}</p>
              <p>If you experience any difficulties accessing digital maps, appointment request portals, or online prescription synchronizers, contact us at <span className="text-[#4CAF93] underline hover:text-white cursor-pointer select-all">hello@pazvet.com</span> or call our flagship coordinator at our South clinic directly.</p>
              <div className="h-[1px] w-full bg-white/5 my-4" />
              <span className="text-[10px] tracking-widest font-mono text-white/40 uppercase">LAST POLISHED REVIEWS: JUNE 16, 2026 BY PAZ TRUST TEAM</span>
            </div>
          </ThreeDTilt>
        </motion.div>
      </AnimatedSection>
    </div>
  );
}
