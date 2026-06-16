import { HeartPulse, Mail, Phone, MapPin, ArrowUpRight, Facebook, Instagram, Twitter } from 'lucide-react';
import { LocationId } from '../types';

interface FooterProps {
  currentLocation: LocationId | null;
  setCurrentPage: (page: string) => void;
  setServiceId: (id: string | null) => void;
}

export default function Footer({ currentLocation, setCurrentPage, setServiceId }: FooterProps) {
  const handleNavigate = (page: string, svcId: string | null = null) => {
    if (page === 'service') {
      setServiceId(svcId);
    } else {
      setCurrentPage(page);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Quick navigation helpers
  const servicesList = [
    { title: 'Vaccines & Immunizations', id: 'vaccines-&-immunizations' },
    { title: 'Dermatology', id: 'dermatology' },
    { title: 'Diagnostics', id: 'diagnostics' },
    { title: 'Emergency Care', id: 'emergency-care' },
    { title: 'Dental Care', id: 'dental-care' },
  ];

  const quickLinksRef = [
    { label: 'Home', page: 'home' },
    { label: 'Clinic Tours', page: 'tours' },
    { label: 'Careers', page: 'careers' },
    { label: 'The Village', page: 'village' },
    { label: 'Contact', page: 'contact' },
  ];

  const resourcesLinks = [
    { label: 'Pet Portal', page: 'portal' },
    { label: 'Promotions', page: 'promotions' },
    { label: 'FAQs', page: 'faqs' },
    { label: 'Payment Options', page: 'payment' },
    { label: 'Pet Care Guides', page: 'guides' },
  ];

  const handleNewsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing to PAZ Wellness Letters!');
  };

  // Dynamically switch contact details in footer based on location selection
  const contactInfo = {
    phone: currentLocation === 'east' ? '(512) 343-8500' : currentLocation === 'west' ? '(512) 474-7298' : currentLocation === 'north' ? '(512) 835-7290' : '(512) 236-8000',
    email: currentLocation ? `${currentLocation}@pazvet.com` : 'hello@pazvet.com',
    address: currentLocation === 'east' ? '2515 E Cesar Chavez St, Austin TX' : currentLocation === 'west' ? '2611 Exposition Blvd, Austin TX' : currentLocation === 'north' ? '8200 N Lamar Blvd, Austin TX' : '3024 S 1st St, Austin TX 78704 (South)',
  };

  return (
    <footer id="main-app-footer" className="relative mt-24 border-t border-white/5 bg-[#0E1318] pt-20 pb-8 text-white z-10 overflow-hidden">
      {/* Background soft lighting glows */}
      <div className="absolute top-0 right-1/4 h-80 w-80 rounded-full bg-[#4CAF93]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 h-60 w-60 rounded-full bg-[#7DB7C3]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
        {/* Brand Block */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="flex items-center gap-3 cursor-pointer select-none" onClick={() => handleNavigate('home')}>
            <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-[#05070A] border border-[#4CAF93]/30">
              <HeartPulse className="h-6 w-6 text-[#4CAF93]" />
            </div>
            <div>
              <span className="font-sans text-xl font-bold tracking-widest text-white">PAZ</span>
              <span className="block text-[8px] tracking-[0.3em] uppercase text-[#AAB3BD] font-mono leading-none">VETERINARY</span>
            </div>
          </div>

          <p className="font-sans text-xs font-normal leading-relaxed text-[#AAB3BD] max-w-sm">
            PAZ Veterinary merges high-vibe Austin aesthetics with advanced diagnostic tech, elite sterile surgical rooms, and fear-free holistic workflows to secure life-long vitality for your pets.
          </p>

          {/* Location Badge */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#AAB3BD]">Current Location Focus:</span>
            <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 bg-[#4CAF93]/10 border border-[#4CAF93]/30 rounded text-[#4CAF93]">
              {currentLocation ? `PAZ ${currentLocation}` : 'Austin Hub'}
            </span>
          </div>

          {/* Newsletter Sign Up */}
          <div className="flex flex-col gap-2 mt-4 max-w-sm">
            <span className="text-[11px] uppercase tracking-widest font-mono text-[#AAB3BD] font-bold">NEWSLETTER</span>
            <form onSubmit={handleNewsSubmit} className="flex gap-2">
              <input
                type="email"
                required
                placeholder="petparents@paz.com"
                className="flex-1 bg-[#151C23] border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-[#AAB3BD]/40 focus:outline-none focus:border-[#4CAF93] transition-colors"
              />
              <button
                type="submit"
                className="bg-[#4CAF93] hover:bg-[#3d917b] text-black font-extrabold text-xs px-4 py-2 rounded-lg transition-all cursor-pointer"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="flex flex-col gap-5">
          <span className="text-[11px] uppercase tracking-widest font-mono text-[#4CAF93] font-bold">NAVIGATION</span>
          <ul className="flex flex-col gap-3 font-semibold text-xs text-[#AAB3BD]">
            {quickLinksRef.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleNavigate(link.page)}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => handleNavigate('locations')}
                className="text-[#7DB7C3] hover:text-white transition-colors cursor-pointer text-left"
              >
                Switch Clinics
              </button>
            </li>
          </ul>
        </div>

        {/* Services Column */}
        <div className="flex flex-col gap-5">
          <span className="text-[11px] uppercase tracking-widest font-mono text-[#4CAF93] font-bold">CORE SERVICES</span>
          <ul className="flex flex-col gap-3 font-semibold text-xs text-[#AAB3BD]">
            {servicesList.map((svc) => (
              <li key={svc.id}>
                <button
                  onClick={() => handleNavigate('service', svc.id)}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {svc.title}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => handleNavigate('home')}
                className="text-[#7DB7C3] hover:text-white transition-colors text-left font-bold cursor-pointer"
              >
                View All &rarr;
              </button>
            </li>
          </ul>
        </div>

        {/* Resources & Contact Column */}
        <div className="flex flex-col gap-5">
          <span className="text-[11px] uppercase tracking-widest font-mono text-[#4CAF93] font-bold">RESOURCES & HELP</span>
          <ul className="flex flex-col gap-3 font-semibold text-xs text-[#AAB3BD] mb-2">
            {resourcesLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleNavigate(link.page)}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="border-t border-white/5 pt-4 flex flex-col gap-3">
            <span className="text-[10px] uppercase tracking-wider font-mono text-[#AAB3BD]">Direct Contact:</span>
            <div className="flex flex-col gap-1.5 text-xs text-[#AAB3BD]">
              <a href={`tel:${contactInfo.phone.replace(/\D/g, '')}`} className="flex items-center gap-2 hover:text-white font-medium">
                <Phone className="h-3 w-3 text-[#7DB7C3]" />
                <span>{contactInfo.phone}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 hover:text-white font-medium truncate">
                <Mail className="h-3 w-3 text-[#7DB7C3]" />
                <span>{contactInfo.email}</span>
              </a>
              <div className="flex items-start gap-2 font-medium">
                <MapPin className="h-3 w-3 text-[#7DB7C3] shrink-0 mt-0.5" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social, Copyright, and Legals Row */}
      <div className="max-w-7xl mx-auto px-6 border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 text-xs text-[#AAB3BD]">
          <span>&copy; {new Date().getFullYear()} PAZ Veterinary Care. All rights reserved.</span>
          <span className="hidden md:inline text-white/10">|</span>
          <button onClick={() => handleNavigate('privacy')} className="hover:text-white transition-colors cursor-pointer">Privacy Policy</button>
          <span className="hidden md:inline text-white/10">|</span>
          <button onClick={() => handleNavigate('terms')} className="hover:text-white transition-colors cursor-pointer">Terms</button>
          <span className="hidden md:inline text-white/10">|</span>
          <button onClick={() => handleNavigate('accessibility')} className="hover:text-white transition-colors cursor-pointer">Accessibility Statement</button>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="h-8 w-8 rounded-full bg-[#151C23] border border-white/5 hover:border-[#4CAF93]/50 flex items-center justify-center hover:text-[#4CAF93] transition-all">
            <Facebook className="h-4 w-4" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="h-8 w-8 rounded-full bg-[#151C23] border border-white/5 hover:border-[#4CAF93]/50 flex items-center justify-center hover:text-[#4CAF93] transition-all">
            <Instagram className="h-4 w-4" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="h-8 w-8 rounded-full bg-[#151C23] border border-white/5 hover:border-[#4CAF93]/50 flex items-center justify-center hover:text-[#4CAF93] transition-all">
            <Twitter className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
