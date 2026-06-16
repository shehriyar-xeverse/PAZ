import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Clock, HelpCircle, ShieldAlert, CheckCircle2, UserCheck, Heart, Send, Sparkles } from 'lucide-react';
import { LocationId } from '../types';
import { locationsData } from '../data/locations';
import AnimatedSection, { fadeUpVariant } from '../components/AnimatedSection';
import ThreeDTilt from '../components/ThreeDTilt';

interface ContactProps {
  currentLocation: LocationId | null;
}

export default function Contact({ currentLocation }: ContactProps) {
  const activeLocData = locationsData[currentLocation || 'south'];

  const [formType, setFormType] = useState<'general' | 'booking'>('booking');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    petName: '',
    petBreed: '',
    preferredDate: '',
    preferredTime: '',
    subject: '',
    message: '',
  });

  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitSuccessful(true);
  };

  const handleResetForm = () => {
    setIsSubmitSuccessful(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      petName: '',
      petBreed: '',
      preferredDate: '',
      preferredTime: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div id="contact-page-viewport" className="min-h-screen text-white pt-32 pb-24 overflow-hidden">
      {/* 1. Header Banner */}
      <AnimatedSection className="text-center mb-16 max-w-7xl mx-auto px-6" staggerDelay={0.1}>
        <motion.span variants={fadeUpVariant} className="text-[10px] uppercase font-bold tracking-widest text-[#4CAF93] bg-[#4CAF93]/10 px-3 py-1 rounded-full inline-flex items-center gap-1.5 mb-4">
          <Clock className="h-3.5 w-3.5 text-[#4CAF93]" />
          <span>CONTACT &amp; CLINIC BOOKING DESK</span>
        </motion.span>
        <motion.h1 variants={fadeUpVariant} className="font-sans text-4xl md:text-6xl font-sans font-black tracking-tight text-white mb-4">
          Contact &amp; Bookings
        </motion.h1>
        <motion.p variants={fadeUpVariant} className="font-sans text-xs md:text-sm text-[#AAB3BD] max-w-2xl mx-auto leading-relaxed">
          Need routine wellness diagnostics or a specialized orthopedics consult? File an appointment request below. Same-day urgent appointments available via telephone.
        </motion.p>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto px-6">
        {/* Left Side: Forms Column (7 cols) */}
        <AnimatedSection className="lg:col-span-7 flex flex-col gap-6" staggerDelay={0.1}>
          {/* Toggling Selection Buttons */}
          <motion.div variants={fadeUpVariant} className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                setFormType('booking');
                handleResetForm();
              }}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                formType === 'booking'
                  ? 'bg-[#4CAF93] text-black shadow-lg shadow-[#4CAF93]/15 border border-[#4CAF93]'
                  : 'bg-[#0E1318]/80 border border-white/5 text-[#AAB3BD] hover:text-white hover:border-white/10'
              }`}
            >
              Appointment Request
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                setFormType('general');
                handleResetForm();
              }}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                formType === 'general'
                  ? 'bg-[#4CAF93] text-black shadow-lg shadow-[#4CAF93]/15 border border-[#4CAF93]'
                  : 'bg-[#0E1318]/80 border border-white/5 text-[#AAB3BD] hover:text-white hover:border-white/10'
              }`}
            >
              General Inquiry
            </motion.button>
          </motion.div>

          {/* Form Box */}
          <motion.div variants={fadeUpVariant} className="h-full">
            <ThreeDTilt glowColor="rgba(76, 175, 147, 0.2)">
              <div className="bg-[#0E1318]/80 backdrop-blur-md border border-white/5 rounded-3xl p-8 relative h-full">
                <AnimatePresence mode="wait">
                  {!isSubmitSuccessful ? (
                    <motion.form
                      key={`${formType}-form`}
                      onSubmit={handleSubmit}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.25 }}
                      className="flex flex-col gap-6"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-[10px] uppercase font-bold tracking-wider text-[#AAB3BD]/70 mb-1.5 font-mono">
                            Your Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="John Doe"
                            className="w-full bg-[#151C23]/80 border border-white/10 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#4CAF93] text-white transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] uppercase font-bold tracking-wider text-[#AAB3BD]/70 mb-1.5 font-mono">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="parent@austin.com"
                            className="w-full bg-[#151C23]/80 border border-white/10 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#4CAF93] text-white transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-[10px] uppercase font-bold tracking-wider text-[#AAB3BD]/70 mb-1.5 font-mono">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="(512) 555-0199"
                            className="w-full bg-[#151C23]/80 border border-white/10 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#4CAF93] text-white transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] uppercase font-bold tracking-wider text-[#AAB3BD]/70 mb-1.5 font-mono">
                            Pet Name / Species
                          </label>
                          <input
                            type="text"
                            value={formData.petName}
                            onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                            placeholder="Barnaby (Dog)"
                            className="w-full bg-[#151C23]/80 border border-white/10 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#4CAF93] text-white transition-colors"
                          />
                        </div>
                      </div>

                      {formType === 'booking' && (
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/5 pt-6">
                          <div className="col-span-1">
                            <label className="block text-[10px] uppercase font-bold tracking-wider text-[#4CAF93] mb-1.5 font-mono">
                              Breed or Age
                            </label>
                            <input
                              type="text"
                              value={formData.petBreed}
                              onChange={(e) => setFormData({ ...formData, petBreed: e.target.value })}
                              placeholder="Golden Retriever"
                              className="w-full bg-[#151C23]/80 border border-white/10 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#4CAF93] text-white transition-colors"
                            />
                          </div>
                          <div className="col-span-1">
                            <label className="block text-[10px] uppercase font-bold tracking-wider text-[#4CAF93] mb-1.5 font-mono">
                              Preferred Date *
                            </label>
                            <input
                              type="date"
                              required
                              value={formData.preferredDate}
                              onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                              className="w-full bg-[#151C23]/80 border border-white/10 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#4CAF93] text-white transition-colors"
                            />
                          </div>
                          <div className="col-span-1">
                            <label className="block text-[10px] uppercase font-bold tracking-wider text-[#4CAF93] mb-1.5 font-mono">
                              Preferred Session *
                            </label>
                            <select
                              required
                              value={formData.preferredTime}
                              onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                              className="w-full bg-[#151C23]/80 border border-white/10 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#4CAF93] text-white transition-colors"
                            >
                              <option value="">Select Time</option>
                              <option value="morning">Morning (8 AM - 12 PM)</option>
                              <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                              <option value="evening">Evening (4 PM - 6 PM)</option>
                            </select>
                          </div>
                        </div>
                      )}

                      {formType === 'general' && (
                        <div>
                          <label className="block text-[10px] uppercase font-bold tracking-wider text-[#AAB3BD]/70 mb-1.5 font-mono">
                            Subject Line
                          </label>
                          <input
                            type="text"
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            placeholder="Inquiry about custom diets"
                            className="w-full bg-[#151C23]/80 border border-white/10 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#4CAF93] text-white transition-colors"
                          />
                        </div>
                      )}

                      <div>
                         <label className="block text-[10px] uppercase font-bold tracking-wider text-[#AAB3BD]/70 mb-1.5 font-mono">
                           Your Message *
                         </label>
                         <textarea
                           required
                           rows={4}
                           value={formData.message}
                           onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                           placeholder="Please outline symptoms, previous surgeries, or wellness concerns..."
                           className="w-full bg-[#151C23]/80 border border-white/10 rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-[#4CAF93] text-white resize-none transition-colors"
                         />
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02, boxShadow: '0 0 15px rgba(76, 175, 147, 0.4)' }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full py-4 bg-[#4CAF93] hover:bg-[#3d917b] text-black font-extrabold text-xs uppercase tracking-widest rounded-xl transition-colors cursor-pointer shadow-lg"
                      >
                        Submit {formType === 'booking' ? 'Appointment Request' : 'Inquiry Message'} &rarr;
                      </motion.button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success-container"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center py-12 text-center"
                    >
                      <div className="h-16 w-16 bg-[#4CAF93]/15 border-2 border-[#4CAF93] text-[#4CAF93] rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(76,175,147,0.3)]">
                        <CheckCircle2 className="h-8 w-8 animate-bounce" />
                      </div>
                      
                      <span className="text-[10px] font-mono tracking-widest text-[#4CAF93] font-bold uppercase block mb-1">
                        REQUEST DISPATCHED SUCCESSFULLY
                      </span>
                      <h3 className="font-sans text-2xl font-black text-white mb-3">
                        Thank You, {formData.name}!
                      </h3>
                      <p className="font-sans text-xs text-[#AAB3BD] max-w-sm mb-8 leading-relaxed font-semibold">
                        Our {activeLocData.name} clinical coordinator will review your parameters against doctor schedules and email you back within 2-4 business hours.
                      </p>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleResetForm}
                        className="px-6 py-3 border border-white/10 hover:border-white/20 rounded-xl hover:bg-white/5 text-white text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
                      >
                        Send Another Response
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ThreeDTilt>
          </motion.div>
        </AnimatedSection>

        {/* Right Side: Map & Details Column (5 cols) */}
        <AnimatedSection className="lg:col-span-5 flex flex-col gap-6" staggerDelay={0.12}>
          {/* Emergency Alert Card */}
          <motion.div variants={fadeUpVariant}>
            <ThreeDTilt glowColor="rgba(239, 68, 68, 0.3)">
              <div className="p-6 rounded-2xl bg-[#0E1318]/90 border border-red-500/30 flex gap-4 items-start select-none shadow-[0_0_25px_rgba(239,68,68,0.1)]">
                <div className="h-10 w-10 bg-red-500/15 border border-red-500/40 text-red-400 rounded-xl flex items-center justify-center shrink-0">
                  <ShieldAlert className="h-5 w-5 animate-pulse" />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-widest font-mono text-red-400 font-bold block mb-1">
                    EMERGENCY &amp; CRITICAL TRAUMA CAPSULE
                  </span>
                  <h4 className="font-sans text-sm font-bold text-white mb-1">Is Your Pet in Danger?</h4>
                  <p className="font-sans text-[11px] leading-relaxed text-[#AAB3BD] mb-4">
                    If your pet has swallowed toxic products, is wheezing, bleeding, or suffered trauma, call us immediately. Avoid routing via text.
                  </p>
                  <a href={`tel:${activeLocData.phone.replace(/\D/g, '')}`} className="inline-flex items-center gap-1.5 text-xs text-red-400 hover:text-white font-black uppercase tracking-wider group">
                    <span>Call Urgent Hotline: {activeLocData.phone}</span>
                    <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </a>
                </div>
              </div>
            </ThreeDTilt>
          </motion.div>

          {/* Location Specific Details Details */}
          <motion.div variants={fadeUpVariant}>
            <ThreeDTilt glowColor="rgba(125, 183, 195, 0.2)">
              <div className="bg-[#0E1318]/80 backdrop-blur-md border border-white/5 rounded-2xl p-6 flex flex-col gap-5">
                <h3 className="font-sans text-sm font-bold tracking-wider text-white uppercase border-b border-white/5 pb-2">
                  {activeLocData.fullName} Info
                </h3>

                <div className="flex items-start gap-4 text-xs text-[#AAB3BD]">
                  <MapPin className="h-5 w-5 text-[#4CAF93] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-white mb-0.5">Physical Address</span>
                    <span className="font-semibold">{activeLocData.address}, {activeLocData.city} {activeLocData.state} {activeLocData.zip}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-xs text-[#AAB3BD]">
                  <Phone className="h-5 w-5 text-[#7DB7C3] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-white mb-0.5">Telephone</span>
                    <span className="font-semibold">{activeLocData.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-xs text-[#AAB3BD]">
                  <Mail className="h-5 w-5 text-[#4CAF93] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-white mb-0.5">Electronic Mail</span>
                    <span className="text-[#4CAF93] font-semibold hover:underline cursor-pointer select-all">{activeLocData.email}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-xs text-[#AAB3BD] border-t border-white/5 pt-4">
                  <Clock className="h-5 w-5 text-[#7DB7C3] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-white mb-2">Hospital Business Hours</span>
                    <div className="flex flex-col gap-1.5 text-[11px] font-semibold">
                      <div className="flex justify-between w-48"><span className="text-[#AAB3BD]">Weekdays:</span><span className="text-white">{activeLocData.hours.weekdays}</span></div>
                      <div className="flex justify-between w-48"><span className="text-[#AAB3BD]">Saturday:</span><span className="text-white">{activeLocData.hours.saturday}</span></div>
                      <div className="flex justify-between w-48"><span className="text-[#AAB3BD]">Sunday:</span><span className="text-white">{activeLocData.hours.sunday}</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </ThreeDTilt>
          </motion.div>

          {/* GORGEOUS MOCK GOOGLE MAPS BLOCK */}
          <motion.div variants={fadeUpVariant}>
            <ThreeDTilt glowColor="rgba(76, 175, 147, 0.25)">
              <div className="relative rounded-2xl overflow-hidden border border-white/5 aspect-video w-full bg-[#151C23]">
                {/* Styled vector/SVG graphic depicting an elegant dark map canvas */}
                <div className="absolute inset-0 bg-[#0E1318]/90 p-6 flex flex-col justify-between overflow-hidden select-none">
                  {/* Fake road grids visually using CSS and SVGs */}
                  <div className="absolute inset-0 opacity-[0.14] pointer-events-none" style={{
                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '16px 16px'
                  }} />
                  
                  <div className="relative z-10 flex justify-between items-start">
                    <span className="text-[9px] font-mono tracking-widest text-[#7DB7C3] uppercase font-bold">DIGITAL GPS HUD NAVIGATION</span>
                    <span className="text-[9px] font-mono font-bold text-white bg-white/5 px-2 py-0.5 rounded">LAT: {activeLocData.lat}</span>
                  </div>

                  {/* Centered stylized map marker */}
                  <div className="relative flex flex-col items-center justify-center">
                    <div className="relative">
                      <span className="absolute -inset-2 bg-[#4CAF93]/20 rounded-full animate-ping" />
                      <div className="h-10 w-10 rounded-full bg-[#05070A] border-2 border-[#4CAF93] flex items-center justify-center text-[#4CAF93] shadow-lg relative z-10">
                        <Heart className="h-5 w-5 fill-[#4CAF93]" />
                      </div>
                    </div>
                    <span className="mt-2 text-xs font-bold font-sans text-white uppercase tracking-wider">{activeLocData.name}</span>
                    <span className="text-[10px] text-[#AAB3BD] mt-0.5 font-semibold">{activeLocData.address}</span>
                  </div>

                  <div className="relative z-10 flex justify-between items-end border-t border-white/5 pt-2">
                    <span className="text-[9px] text-[#AAB3BD] font-medium">GPS coordinates found securely.</span>
                    <motion.a
                      whileHover={{ scale: 1.05, x: 2 }}
                      href={`https://maps.google.com/?q=${encodeURIComponent(activeLocData.address + ' Austin ' + activeLocData.zip)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[9px] font-bold uppercase tracking-wider text-[#4CAF93] hover:text-white flex items-center gap-1"
                    >
                      <span>Launch Maps App</span>
                      <span>&rarr;</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </ThreeDTilt>
          </motion.div>
        </AnimatedSection>
      </div>
    </div>
  );
}
