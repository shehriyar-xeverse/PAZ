import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShieldAlert,
  PiggyBank,
  CheckCircle,
  HelpCircle,
  Pill,
  BookOpen,
  UserCheck,
  ShieldCheck,
  Award,
  ChevronDown,
  Sparkles,
  Lock,
  ArrowRight,
  Sparkle
} from 'lucide-react';
import AnimatedSection, { fadeUpVariant } from '../components/AnimatedSection';
import ThreeDTilt from '../components/ThreeDTilt';

interface ResourcesPageProps {
  initialTab?: string;
  setCurrentPage: (page: string) => void;
}

export default function Resources({ initialTab = 'portal', setCurrentPage }: ResourcesPageProps) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [portalEmail, setPortalEmail] = useState('');
  const [portalSubmitted, setPortalSubmitted] = useState<string | null>(null);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const handleBookClick = () => {
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 1. FAQs Data
  const faqs = [
    {
      q: 'What is a "Fear Free" veterinary clinic designation?',
      a: 'Fear Free clinics use specialized physical holding techniques, specific off-angle LED diagnostic lighting, calming pheromone diffusers, and customized medication protocols to remove physical trauma and mental anxiety from veterinary visits.',
    },
    {
      q: 'Do you offer same-day diagnostics or emergency surgery?',
      a: 'Yes. Every clinic features high-end in-office blood work chemical analysis, digital skeletal radiographic units, and HEPA sterile surgery rooms for prompt trauma stabilizing same-day.',
    },
    {
      q: 'Can I compound medication flavors for my cat?',
      a: 'Absolutely. We cooperate with People’s Pharmacy to compound specialized medications into pleasant flavors (tuna, chicken, liver) to make administration stress-free.',
    },
    {
      q: 'Do you accept CareCredit or Scratchpay financial models?',
      a: 'Yes, we accept both CareCredit and Scratchpay. We also supply instant digital invoices and work with all major pet insurance companies to secure rapid reimbursement.',
    },
  ];

  // 2. Guides and Care Checklists
  const clinicalGuides = [
    {
      title: 'Vaccination Guide & Lifestyle Schedule',
      desc: 'Customize immunizations to your pet’s exact age, weight, genetics, and exposure risks (e.g. greenbelt ticks, urban dog parks). Includes core canine/feline lines.',
      checklist: [
        '6-8 Weeks: Core Distemper/Parvovirus initial shot, Feline Leukemia panel evaluation.',
        '10-12 Weeks: Second core booster shots, Bordetella protection sweep.',
        '14-16 Weeks: Third core booster shots, Rabies mandatory validation certification.',
        'Annual sweeps: Customized exposure tethers (Leptospirosis, Lyme) based on Austin neighborhood exposure logs.',
      ],
    },
    {
      title: 'Dental Care Guide & Preventative Hygiene',
      desc: 'Dental tartar triggers systemic heart, liver, and kidney infections. Maintain clinical oral logs annually.',
      checklist: [
        'In-Home Brushing: Double-head soft toothbrushes using raw organic enzyme pastes.',
        'Clinical Scaling: Annual ultrasonic sub-gingival cleanings performed under safe anesthetics.',
        'Dental Radiography: Checking tooth roots below the gums to catch decay early.',
        'Protective Enamel: Sealing tooth surfaces during ultrasonic polishes.',
      ],
    },
    {
      title: 'Emergency Care & Critical Symptoms Checklist',
      desc: 'Crisis moves quickly. Memorize these trauma warning signs to determine when instant clinical stabilization is mandatory.',
      checklist: [
        'Airway distress: Heavy coughing, shallow or wheezing breathing patterns.',
        'Toxic ingestion: Chocolate, grape, onion, macadamia nuts, or lawn pesticide intake.',
        'Physical trauma: Limping, continuous bleeding, or collision occurrences.',
        'Neurological events: Sudden seizures, continuous tremors, or lack of joint coordination.',
      ],
    },
  ];

  return (
    <div id="resources-viewport" className="min-h-screen text-white pt-32 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <AnimatedSection className="text-center mb-16" staggerDelay={0.1}>
          <motion.span variants={fadeUpVariant} className="text-[10px] uppercase font-bold tracking-widest text-[#4CAF93] bg-[#4CAF93]/10 px-3 py-1 rounded-full inline-flex items-center gap-1.5 mb-4">
            <BookOpen className="h-3.5 w-3.5 text-[#4CAF93]" />
            <span>PAZ VETERINARY PORTAL</span>
          </motion.span>
          <motion.h1 variants={fadeUpVariant} className="font-sans text-4xl md:text-6xl font-sans font-black tracking-tight text-white mb-4">
            Resources &amp; Wellness Centers
          </motion.h1>
          <motion.p variants={fadeUpVariant} className="font-sans text-xs md:text-sm text-[#AAB3BD] max-w-2xl mx-auto leading-relaxed">
            Manage your pet’s diagnostic health portal, explore seasonal promotions, audit clinical care guides, and navigate financial payment plans.
          </motion.p>
        </AnimatedSection>

        {/* Resources Center Navigation Tabs */}
        <AnimatedSection className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-16" staggerDelay={0.05}>
          {[
            { id: 'portal', label: 'Pet Portal', icon: UserCheck },
            { id: 'promotions', label: 'Promotions', icon: Award },
            { id: 'faqs', label: 'FAQs List', icon: HelpCircle },
            { id: 'payment', label: 'Payment Options', icon: PiggyBank },
            { id: 'guides', label: 'Pet Care Guides', icon: ShieldCheck },
          ].map((tab) => {
            const Icon = tab.icon;
            const isSel = activeTab === tab.id;
            return (
              <motion.button
                key={tab.id}
                variants={fadeUpVariant}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setActiveTab(tab.id);
                  setCurrentPage(tab.id);
                }}
                className={`px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  isSel
                    ? 'bg-[#4CAF93] text-black shadow-lg shadow-[#4CAF93]/25 border border-[#4CAF93]'
                    : 'bg-[#0E1318]/70 border border-white/5 text-[#AAB3BD] hover:text-white hover:border-white/10'
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className="truncate">{tab.label}</span>
              </motion.button>
            );
          })}
        </AnimatedSection>

        {/* Tab Panel contents */}
        <div className="relative z-10">
          <AnimatePresence mode="wait">
            {/* Panel 1: Pet Portal login/register screen */}
            {activeTab === 'portal' && (
              <motion.div 
                key="portal-pane"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                id="pet-portal-panel" 
                className="max-w-4xl mx-auto"
              >
                <ThreeDTilt glowColor="rgba(76, 175, 147, 0.25)">
                  <div className="bg-[#0E1318]/80 backdrop-blur-md border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                    <div className="md:col-span-6 flex flex-col gap-4">
                      <span className="text-[10px] font-mono tracking-widest text-[#4CAF93] uppercase font-bold block mb-1">
                        HEALTH DIRECT MANAGEMENT
                      </span>
                      <h2 className="font-sans text-3xl font-black text-white leading-tight">
                        PAZ Pet Health Portal
                      </h2>
                      <p className="font-sans text-xs leading-relaxed text-[#AAB3BD]">
                        Verify immunization logs, review past internal blood diagnostic profiles, check upcoming HEPA surgical appointments, or order automatic medicine refills online.
                      </p>
                      
                      <div className="flex flex-col gap-3 font-semibold text-xs text-[#AAB3BD] mt-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-[#4CAF93] shrink-0" />
                          <span>Instant check-ins on mobile</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-[#4CAF93] shrink-0" />
                          <span>Review dental and bone X-Rays</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-[#4CAF93] shrink-0" />
                          <span>Order compounding pharmacy deliveries</span>
                        </div>
                      </div>
                    </div>

                    {/* Portal Form with secure responsive preview states */}
                    <div className="md:col-span-6">
                      <AnimatePresence mode="wait">
                        {portalSubmitted ? (
                          <motion.div 
                            key="portal-logged-in"
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="bg-[#151C23]/90 border border-[#4CAF93]/35 p-8 rounded-2xl flex flex-col items-center gap-4 text-center shadow-2xl"
                          >
                            <UserCheck className="h-10 w-10 text-[#4CAF93] bg-[#4CAF93]/10 p-2 rounded-xl border border-[#4CAF93]/30" />
                            <div>
                              <h3 className="font-sans text-lg font-bold text-white mb-1">Welcome Back, Pet Parent!</h3>
                              <p className="text-[11px] text-[#AAB3BD]">Logged in successfully as <code className="text-white bg-[#05070A] px-1.5 py-0.5 rounded">{portalSubmitted}</code></p>
                            </div>
                            <div className="h-[1px] w-full bg-white/5 my-1" />
                            <div className="grid grid-cols-2 gap-3 w-full text-left text-[11px] font-mono">
                              <div className="bg-[#05070A] p-2.5 rounded-lg border border-white/5">
                                <span className="text-[#AAB3BD] block text-[9px] uppercase tracking-wider">ACTIVE PETS</span>
                                <span className="text-[#4CAF93] font-bold">1 Champion (Dax)</span>
                              </div>
                              <div className="bg-[#05070A] p-2.5 rounded-lg border border-white/5">
                                <span className="text-[#AAB3BD] block text-[9px] uppercase tracking-wider">NEXT EXAM</span>
                                <span className="text-white font-bold">Oct 12, 2026</span>
                              </div>
                            </div>
                            <button 
                              onClick={() => setPortalSubmitted(null)}
                              className="text-[10px] text-[#AAB3BD]/75 hover:text-white underline cursor-pointer transition-colors mt-2"
                            >
                              Log Out Securely
                            </button>
                          </motion.div>
                        ) : (
                          <motion.form
                            key="portal-form"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onSubmit={(e) => { 
                              e.preventDefault(); 
                              setPortalSubmitted(portalEmail || 'petparent@austin.com');
                            }}
                            className="bg-[#151C23]/80 border border-white/5 p-8 rounded-2xl flex flex-col gap-4 shadow-lg pr-8 pl-8"
                          >
                            <div className="text-center pb-2 border-b border-white/5 mb-2 flex items-center justify-center gap-1.5">
                              <Lock className="h-3.5 w-3.5 text-[#4CAF93]" />
                              <span className="text-xs uppercase font-bold tracking-widest font-mono text-white">SECURE LOGIN PORTLET</span>
                            </div>
                            <div>
                              <label className="block text-[10px] uppercase font-bold tracking-wider text-[#AAB3BD] mb-1.5 font-mono">
                                Client Email Address
                              </label>
                              <input
                                type="email"
                                required
                                value={portalEmail}
                                onChange={(e) => setPortalEmail(e.target.value)}
                                placeholder="petparent@austin.com"
                                className="w-full bg-[#05070A] border border-white/10 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#4CAF93] text-white transition-colors"
                              />
                            </div>
                            <div>
                              <label className="block text-[10px] uppercase font-bold tracking-wider text-[#AAB3BD] mb-1.5 font-mono">
                                Secure Password
                              </label>
                              <input
                                type="password"
                                required
                                placeholder="••••••••••••"
                                className="w-full bg-[#05070A] border border-white/10 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#4CAF93] text-white transition-colors"
                              />
                            </div>
                            <motion.button
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              type="submit"
                              className="w-full py-3 bg-[#4CAF93] hover:bg-[#3d917b] text-black font-extrabold text-xs uppercase tracking-widest rounded-lg mt-2 cursor-pointer shadow-lg"
                            >
                              Log In to Portal
                            </motion.button>
                            <div className="text-center pt-2">
                              <span className="text-[10px] text-[#AAB3BD]/60 hover:text-white cursor-pointer transition-colors block">
                                Forgot Password? &bull; Request Portal Access Invite
                              </span>
                            </div>
                          </motion.form>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </ThreeDTilt>
              </motion.div>
            )}

            {/* Panel 2: Promotions listings */}
            {activeTab === 'promotions' && (
              <motion.div 
                key="promo-pane"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                id="promotions-panel" 
                className="max-w-4xl mx-auto flex flex-col gap-8"
              >
                {/* Promo 1 */}
                <ThreeDTilt glowColor="rgba(76, 175, 147, 0.2)">
                  <div className="p-8 rounded-2xl bg-[#0E1318]/85 backdrop-blur-sm border border-[#4CAF93]/30 shadow-2xl flex flex-col sm:flex-row gap-6 items-center justify-between">
                    <div>
                      <span className="text-[9px] font-mono tracking-widest text-[#4CAF93] uppercase font-extrabold px-2 py-0.5 bg-[#4CAF93]/10 border border-[#4CAF93]/20 rounded mb-2 inline-block">
                        WELCOME OFFER
                      </span>
                      <h3 className="font-sans text-2xl font-bold text-white mb-2">50% Off First Examination</h3>
                      <p className="font-sans text-xs text-[#AAB3BD] max-w-xl leading-relaxed">
                        Start your fear-free clinical relationship with our top doctors. Covers full body evaluations, basic heart listening sweeps, and customized lifestyle risk profiles.
                      </p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleBookClick}
                      className="px-5 py-3 bg-[#4CAF93] hover:bg-[#3d917b] text-black font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer grow-0 shrink-0 shadow-lg"
                    >
                      Book Exam
                    </motion.button>
                  </div>
                </ThreeDTilt>

                {/* Promo 2 */}
                <ThreeDTilt glowColor="rgba(125, 183, 195, 0.2)">
                  <div className="p-8 rounded-2xl bg-[#0E1318]/85 backdrop-blur-sm border border-[#7DB7C3]/30 shadow-2xl flex flex-col sm:flex-row gap-6 items-center justify-between">
                    <div>
                      <span className="text-[9px] font-mono tracking-widest text-[#7DB7C3] uppercase font-extrabold px-2 py-0.5 bg-[#7DB7C3]/10 border border-[#7DB7C3]/20 rounded mb-2 inline-block">
                        PROACTIVE ORAL CARE
                      </span>
                      <h3 className="font-sans text-2xl font-bold text-white mb-2">Dental Hygiene Package Specials</h3>
                      <p className="font-sans text-xs text-[#AAB3BD] max-w-xl leading-relaxed">
                        Protect systemic organs with our specialized annual scaling program. Book this month to receive a free specialized post-dental enzyme hygiene home kit (value $45).
                      </p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleBookClick}
                      className="px-5 py-3 bg-[#7DB7C3] hover:bg-[#5b8c96] text-black font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer grow-0 shrink-0 shadow-lg"
                    >
                      Book Dental Clean
                    </motion.button>
                  </div>
                </ThreeDTilt>
              </motion.div>
            )}

            {/* Panel 3: FAQs */}
            {activeTab === 'faqs' && (
              <motion.div 
                key="faqs-pane"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                id="faqs-panel" 
                className="max-w-3xl mx-auto flex flex-col gap-6"
              >
                {faqs.map((faq, idx) => (
                  <ThreeDTilt key={idx} glowColor="rgba(76, 175, 147, 0.15)">
                    <div className="p-6 rounded-2xl bg-[#0E1318]/80 backdrop-blur-sm border border-white/5 flex gap-4 items-start">
                      <div className="h-8 w-8 rounded-lg bg-[#4CAF93]/15 flex items-center justify-center shrink-0 border border-[#4CAF93]/25">
                        <HelpCircle className="h-4.5 w-4.5 text-[#4CAF93]" />
                      </div>
                      <div>
                        <h3 className="font-sans text-sm font-bold text-white mb-2">{faq.q}</h3>
                        <p className="font-sans text-xs text-[#AAB3BD] leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  </ThreeDTilt>
                ))}
              </motion.div>
            )}

            {/* Panel 4: Payment Options details */}
            {activeTab === 'payment' && (
              <motion.div 
                key="payment-pane"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                id="payment-panel" 
                className="max-w-4xl mx-auto"
              >
                <ThreeDTilt glowColor="rgba(125, 183, 195, 0.2)">
                  <div className="bg-[#0E1318]/80 backdrop-blur-sm border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl">
                    <div className="text-center max-w-xl mx-auto mb-12">
                      <span className="text-[10px] font-mono tracking-widest text-[#7DB7C3] uppercase font-bold block mb-1">
                        FINANCIAL PEACE OF MIND
                      </span>
                      <h3 className="font-sans text-3xl font-black text-white">Payment Options &amp; Insurances</h3>
                      <p className="font-sans text-xs text-[#AAB3BD] mt-2 leading-relaxed font-semibold">
                        We believe elite medical precision should be accessible. We offer immediate, low-interest funding and cooperate with major insurance entities.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div className="p-6 rounded-xl bg-[#151C23] border border-white/5 flex flex-col justify-between hover:border-[#4CAF93]/30 transition-all duration-300">
                        <div>
                          <span className="text-[9px] font-bold tracking-widest font-mono text-[#4CAF93] uppercase block mb-1">CARECREDIT PROGRAM</span>
                          <h4 className="font-sans text-lg font-bold text-white mb-3">6-Month Interest Free Loans</h4>
                          <p className="font-sans text-xs text-[#AAB3BD] leading-relaxed mb-4">
                            CareCredit acts with immediate digital validation, allowing you to pay for surgeries, emergency toxic intakes, or dental procedures over half a year without interest.
                          </p>
                        </div>
                        <a href="https://www.carecredit.com/" target="_blank" rel="noopener noreferrer" className="text-xs text-[#4CAF93] font-bold hover:underline self-start flex items-center gap-1.5">
                          <span>Apply on CareCredit</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </a>
                      </div>

                      <div className="p-6 rounded-xl bg-[#151C23] border border-white/5 flex flex-col justify-between hover:border-[#7DB7C3]/30 transition-all duration-300">
                        <div>
                          <span className="text-[9px] font-bold tracking-widest font-mono text-[#7DB7C3] uppercase block mb-1">SCRATCHPAY SOLUTIONS</span>
                          <h4 className="font-sans text-lg font-bold text-white mb-3">Bespoke Monthly Financing</h4>
                          <p className="font-sans text-xs text-[#AAB3BD] leading-relaxed mb-4">
                            Scratchpay performs quick soft credit sweeps, generating easy payment plans of varying duration. Excellent alternative for non-insured priority cases.
                          </p>
                        </div>
                        <a href="https://scratchpay.com/" target="_blank" rel="noopener noreferrer" className="text-xs text-[#7DB7C3] font-bold hover:underline self-start flex items-center gap-1.5">
                          <span>Apply on Scratchpay</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-[#05070A]/85 border border-white/5 text-center">
                      <span className="text-[10px] uppercase font-bold tracking-widest font-mono text-[#AAB3BD]/60 block mb-2">WE HARMONIZE WITH LIFE INSURANCE COOPERATIVE SWEEPS</span>
                      <p className="text-xs text-[#AAB3BD] leading-relaxed max-w-xl mx-auto">
                        Bring your insurance records! Trupanion, Pumpkin, Healthy Paws, Nationwide, and ASPCA insurance frameworks are recognized, letting you get cash back reviews rapidly.
                      </p>
                    </div>
                  </div>
                </ThreeDTilt>
              </motion.div>
            )}

            {/* Panel 5: Pet Care Guides */}
            {activeTab === 'guides' && (
              <motion.div 
                key="guides-pane"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                id="guides-panel" 
                className="max-w-4xl mx-auto flex flex-col gap-10 border-none"
              >
                {clinicalGuides.map((guide, idx) => (
                  <ThreeDTilt key={idx} glowColor="rgba(76, 175, 147, 0.2)">
                    <div className="p-8 rounded-3xl bg-[#0E1318]/80 backdrop-blur-md border border-white/5">
                      <div className="pb-4 border-b border-white/5 mb-6">
                        <span className="text-[9px] font-mono tracking-widest text-[#4CAF93] font-black uppercase block mb-1">
                          CLINICAL PROTOCOL REFERENCE
                        </span>
                        <h3 className="font-sans text-2xl font-black text-white mb-2">
                          {guide.title}
                        </h3>
                        <p className="font-sans text-xs text-[#AAB3BD] leading-relaxed">
                          {guide.desc}
                        </p>
                      </div>

                      <div className="flex flex-col gap-4">
                        {guide.checklist.map((item, itemIdx) => {
                          const parts = item.split(': ');
                          const itemTitle = parts[0];
                          const itemText = parts[1] || '';
                          return (
                            <div key={itemIdx} className="flex gap-3 items-start text-xs leading-relaxed text-[#AAB3BD]">
                              <div className="h-5 w-5 bg-[#4CAF93]/15 border border-[#4CAF93]/30 text-[#4CAF93] rounded flex items-center justify-center shrink-0 font-mono text-[9px] font-bold mt-0.5">
                                {itemIdx + 1}
                              </div>
                              <div>
                                <strong className="text-white font-sans">{itemTitle}</strong>
                                {itemText && <span className="block text-[#AAB3BD]/90 mt-0.5">{itemText}</span>}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </ThreeDTilt>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
