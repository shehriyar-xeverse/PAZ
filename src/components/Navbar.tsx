import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, HeartPulse, ExternalLink, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import { LocationId } from '../types';

interface NavbarProps {
  currentLocation: LocationId | null;
  setCurrentLocation: (loc: LocationId | null) => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
  setServiceId: (id: string | null) => void;
}

export default function Navbar({
  currentLocation,
  setCurrentLocation,
  currentPage,
  setCurrentPage,
  setServiceId,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Monitor scroll triggers to apply subtle glass reflections on movement
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page: string, svcId: string | null = null) => {
    if (page === 'service') {
      setServiceId(svcId);
    } else {
      setCurrentPage(page);
    }
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleShopRedirect = () => {
    window.open('https://shop.pazsouth.com/pet/', '_blank', 'noopener,noreferrer');
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(prev => (prev === name ? null : name));
  };

  // Prevent mobile scroll leakage when the full-height drawer is engaged
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const servicesList = [
    { title: 'Vaccines & Immunizations', id: 'vaccines-&-immunizations' },
    { title: 'Dermatology', id: 'dermatology' },
    { title: 'Diagnostics', id: 'diagnostics' },
    { title: 'Internal Medicine', id: 'internal-medicine' },
    { title: 'Emergency Care', id: 'emergency-care' },
    { title: 'Radiology', id: 'radiology' },
    { title: 'Surgery', id: 'surgery' },
    { title: 'Dental Care', id: 'dental-care' },
    { title: 'Ultrasound', id: 'ultrasound' },
  ];

  return (
    <>
      <nav
        id="main-app-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 h-14 lg:h-[60px] flex items-center ${
          isScrolled
            ? 'bg-[#05070A]/85 backdrop-blur-md border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.45)]'
            : 'bg-[#05070A]/30 backdrop-blur-sm border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 w-full h-full flex items-center justify-between lg:grid lg:grid-cols-12">
          
          {/* DESKTOP COLUMN 1: LEFT NAV LINKS */}
          <div className="hidden lg:flex items-center gap-1 col-span-5 justify-start">
            {/* Home Link */}
            <button
              id="nav-link-home"
              onClick={() => navigateTo('home')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase transition-colors relative cursor-pointer ${
                currentPage === 'home' ? 'text-[#4CAF93]' : 'text-[#AAB3BD] hover:text-white'
              }`}
            >
              Home
              {currentPage === 'home' && (
                <motion.span
                  layoutId="navUnderline"
                  className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#4CAF93] rounded-full"
                />
              )}
            </button>

            {/* About Dropdown (Tours, Careers, Locations) */}
            <div className="relative">
              <button
                id="nav-dropdown-about-btn"
                onMouseEnter={() => setActiveDropdown('about')}
                onClick={() => toggleDropdown('about')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase flex items-center gap-1 transition-colors cursor-pointer ${
                  ['careers', 'tours'].includes(currentPage) ? 'text-[#4CAF93]' : 'text-[#AAB3BD] hover:text-white'
                }`}
              >
                About
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'about' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="absolute left-0 mt-2 w-48 bg-[#0E1318]/95 border border-white/10 backdrop-blur-md rounded-xl p-2 shadow-2xl"
                  >
                    <button
                      onClick={() => navigateTo('tours')}
                      className="w-full text-left px-3 py-2 text-xs font-bold text-[#AAB3BD] hover:text-white hover:bg-white/5 rounded-lg transition-all"
                    >
                      Clinic Tours
                    </button>
                    <button
                      onClick={() => navigateTo('locations')}
                      className="w-full text-left px-3 py-2 text-xs font-bold text-[#AAB3BD] hover:text-white hover:bg-white/5 rounded-lg transition-all"
                    >
                      Locations
                    </button>
                    <button
                      onClick={() => navigateTo('careers')}
                      className="w-full text-left px-3 py-2 text-xs font-bold text-[#AAB3BD] hover:text-white hover:bg-white/5 rounded-lg transition-all"
                    >
                      Careers
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Team Dropdown */}
            <div className="relative">
              <button
                id="nav-dropdown-team-btn"
                onMouseEnter={() => setActiveDropdown('team')}
                onClick={() => toggleDropdown('team')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase flex items-center gap-1 transition-colors cursor-pointer ${
                  currentPage === 'team' ? 'text-[#4CAF93]' : 'text-[#AAB3BD] hover:text-white'
                }`}
              >
                Team
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'team' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="absolute left-0 mt-2 w-56 bg-[#0E1318]/95 border border-white/10 backdrop-blur-md rounded-xl p-2 shadow-2xl"
                  >
                    <button
                      onClick={() => navigateTo('team')}
                      className="w-full text-left px-3 py-2.5 text-xs font-bold text-[#AAB3BD] hover:text-white hover:bg-white/5 rounded-lg transition-all flex flex-col"
                    >
                      <span>Online Pharmacy Team</span>
                      <span className="text-[9px] text-[#AAB3BD]/60 font-normal">Delivery Coordinators</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Services Mega Dropdown */}
            <div className="relative">
              <button
                id="nav-mega-services-btn"
                onMouseEnter={() => setActiveDropdown('services')}
                onClick={() => toggleDropdown('services')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase flex items-center gap-1 transition-colors cursor-pointer ${
                  currentPage === 'service' ? 'text-[#4CAF93]' : 'text-[#AAB3BD] hover:text-white'
                }`}
              >
                Services
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="absolute left-0 mt-2 w-[480px] bg-[#0E1318]/95 border border-white/10 backdrop-blur-md rounded-2xl p-4 shadow-2xl grid grid-cols-2 gap-1.5"
                  >
                    <div className="col-span-2 border-b border-white/5 pb-1.5 mb-1">
                      <span className="text-[9px] font-bold tracking-widest text-[#4CAF93] uppercase block">
                        CLINICAL MODULES
                      </span>
                    </div>
                    {servicesList.map((svc) => (
                      <button
                        key={svc.id}
                        onClick={() => navigateTo('service', svc.id)}
                        className="text-left px-3 py-1.5 rounded-lg text-[11px] font-bold text-[#AAB3BD] hover:text-[#4CAF93] hover:bg-white/5 transition-all flex items-center justify-between group"
                      >
                        <span>{svc.title}</span>
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-[#7DB7C3]">
                          &rarr;
                        </span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* DESKTOP COLUMN 2: CENTER LOGO */}
          <div className="flex justify-start lg:justify-center col-span-2">
            <div
              id="navbar-brand-logo"
              onClick={() => navigateTo('home')}
              className="flex items-center gap-2.5 cursor-pointer group select-none"
            >
              <div className="h-9 w-9 flex items-center justify-center rounded-xl bg-[#0E1318] border border-[#4CAF93]/35 group-hover:border-[#4CAF93]/80 group-hover:shadow-[0_0_15px_rgba(76,175,147,0.25)] transition-all duration-300">
                <HeartPulse className="h-5 w-5 text-[#4CAF93] animate-pulse" />
              </div>
              <div className="flex flex-col items-start leading-none shrink-0">
                <span className="font-sans text-lg font-black tracking-widest text-white group-hover:text-[#4CAF93] transition-colors">
                  PAZ
                </span>
                <span className="block text-[7px] tracking-[0.25em] uppercase text-[#AAB3BD] font-mono mt-0.5">
                  {currentLocation ? `${currentLocation.toUpperCase()} CARE` : 'VETERINARY'}
                </span>
              </div>
            </div>
          </div>

          {/* DESKTOP COLUMN 3: RIGHT NAV LINKS & ACTIONS */}
          <div className="hidden lg:flex items-center gap-1 col-span-5 justify-end">
            {/* Shop Online */}
            <button
              id="nav-link-shop"
              onClick={handleShopRedirect}
              className="px-2.5 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase text-[#AAB3BD] hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
            >
              Shop
              <ExternalLink className="h-3 w-3 text-[#7DB7C3]" />
            </button>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                id="nav-dropdown-resources-btn"
                onMouseEnter={() => setActiveDropdown('resources')}
                onClick={() => toggleDropdown('resources')}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase flex items-center gap-1 transition-colors cursor-pointer ${
                  ['portal', 'promotions', 'faqs', 'payment', 'guides'].includes(currentPage) ? 'text-[#4CAF93]' : 'text-[#AAB3BD] hover:text-white'
                }`}
              >
                Resources
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'resources' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="absolute right-0 mt-2 w-48 bg-[#0E1318]/95 border border-white/10 backdrop-blur-md rounded-xl p-2 shadow-2xl"
                  >
                    <button
                      onClick={() => navigateTo('portal')}
                      className="w-full text-left px-3 py-2 text-xs font-bold text-[#AAB3BD] hover:text-white hover:bg-white/5 rounded-lg transition-all"
                    >
                      Pet Portal
                    </button>
                    <button
                      onClick={() => navigateTo('promotions')}
                      className="w-full text-left px-3 py-2 text-xs font-bold text-[#4CAF93] hover:text-white hover:bg-white/5 rounded-lg transition-all flex items-center justify-between"
                    >
                      <span>Promotions</span>
                      <span className="text-[8px] bg-[#4CAF93]/20 px-1 py-0.5 rounded text-[#4CAF93] font-black">50% OFF</span>
                    </button>
                    <button
                      onClick={() => navigateTo('faqs')}
                      className="w-full text-left px-3 py-2 text-xs font-bold text-[#AAB3BD] hover:text-white hover:bg-white/5 rounded-lg transition-all"
                    >
                      FAQs
                    </button>
                    <button
                      onClick={() => navigateTo('payment')}
                      className="w-full text-left px-3 py-2 text-xs font-bold text-[#AAB3BD] hover:text-white hover:bg-white/5 rounded-lg transition-all"
                    >
                      Payment Options
                    </button>
                    <button
                      onClick={() => navigateTo('guides')}
                      className="w-full text-left px-3 py-2 text-xs font-bold text-[#7DB7C3] hover:text-white hover:bg-white/5 rounded-lg transition-all"
                    >
                      Pet Care Guides
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Village Link */}
            <button
              id="nav-link-village"
              onClick={() => navigateTo('village')}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase transition-colors relative cursor-pointer ${
                currentPage === 'village' ? 'text-[#4CAF93]' : 'text-[#AAB3BD] hover:text-white'
              }`}
            >
              Village
            </button>

            {/* Locations Badge / Tag */}
            {currentLocation && (
              <div
                onClick={() => navigateTo('locations')}
                className="flex items-center gap-1.5 px-2.5 py-1 bg-[#4CAF93]/15 border border-[#4CAF93]/35 rounded-full text-[9px] font-black tracking-wider text-[#4CAF93] cursor-pointer hover:bg-[#4CAF93]/25 transition-all mx-1 shrink-0"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-[#4CAF93] animate-ping" />
                <span>{currentLocation.toUpperCase()}</span>
              </div>
            )}

            {/* CTA action booking button */}
            <button
              id="nav-cta-booking"
              onClick={() => navigateTo('contact')}
              className="px-4 py-2 rounded-xl border border-[#4CAF93] bg-[#4CAF93]/10 hover:bg-[#4CAF93]/20 text-[10px] font-bold uppercase tracking-widest text-[#4CAF93] transition-all cursor-pointer shrink-0"
            >
              Book
            </button>
          </div>

          {/* MOBILE MENU TOGGLE ICON */}
          <div className="flex lg:hidden items-center gap-2">
            {currentLocation && (
              <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 bg-[#4CAF93]/15 border border-[#4CAF93]/30 rounded-full text-[#4CAF93]">
                {currentLocation.toUpperCase()}
              </span>
            )}
            <button
              id="mobile-drawer-toggle-btn"
              onClick={() => setMobileMenuOpen(true)}
              className="h-9 w-9 flex items-center justify-center rounded-xl bg-[#0E1318] border border-white/10 text-white cursor-pointer"
              aria-label="Open mobile drawer menu"
            >
              <Menu className="h-4.5 w-4.5" />
            </button>
          </div>

        </div>
      </nav>

      {/* FULL-HEIGHT MOBILE SLIDE-IN DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Dark glassmorphic backdrop layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-[#05070A]/95 backdrop-blur-sm z-45 lg:hidden"
            />

            {/* Responsive full-height slide panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 220 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-[360px] bg-[#0E1318] border-l border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.85)] z-50 lg:hidden flex flex-col justify-between"
            >
              {/* Drawer header panel */}
              <div className="p-5 border-b border-white/5 flex items-center justify-between bg-[#05070A]/40">
                <div className="flex items-center gap-2 select-none">
                  <div className="h-8 w-8 flex items-center justify-center rounded-xl bg-[#0E1318] border border-[#4CAF93]/30">
                    <HeartPulse className="h-4 w-4 text-[#4CAF93]" />
                  </div>
                  <div>
                    <span className="font-sans text-sm font-black tracking-wider text-white">PAZ VET</span>
                    <span className="block text-[8px] text-[#AAB3BD] tracking-widest font-mono">STRESS-FREE</span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="h-9 w-9 flex items-center justify-center rounded-xl bg-[#05070A] border border-white/10 text-white cursor-pointer"
                  aria-label="Close drawer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Scrollable touch-optimized items */}
              <div className="flex-grow overflow-y-auto px-5 py-6 flex flex-col gap-3">
                <button
                  onClick={() => navigateTo('home')}
                  className="text-left w-full py-2.5 border-b border-white/5 text-xs font-bold uppercase tracking-widest text-[#AAB3BD] hover:text-white"
                >
                  Home
                </button>

                {/* About Accordion */}
                <div className="border-b border-white/5 py-1">
                  <button
                    onClick={() => toggleDropdown('mob-about')}
                    className="w-full flex items-center justify-between text-left py-2 text-xs font-bold uppercase tracking-widest text-[#AAB3BD] hover:text-white"
                  >
                    <span>About</span>
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform ${activeDropdown === 'mob-about' ? 'rotate-180' : ''}`} />
                  </button>
                  {activeDropdown === 'mob-about' && (
                    <div className="pl-4 py-1.5 flex flex-col gap-3 bg-[#05070A]/30 rounded-lg my-1">
                      <button onClick={() => navigateTo('tours')} className="text-left text-xs font-semibold text-[#AAB3BD] hover:text-[#4CAF93] py-0.5">Clinic Tours</button>
                      <button onClick={() => navigateTo('locations')} className="text-left text-xs font-semibold text-[#AAB3BD] hover:text-[#4CAF93] py-0.5">Locations</button>
                      <button onClick={() => navigateTo('careers')} className="text-left text-xs font-semibold text-[#AAB3BD] hover:text-[#4CAF93] py-0.5">Careers</button>
                    </div>
                  )}
                </div>

                {/* Team Accordion */}
                <div className="border-b border-white/5 py-1">
                  <button
                    onClick={() => toggleDropdown('mob-team')}
                    className="w-full flex items-center justify-between text-left py-2 text-xs font-bold uppercase tracking-widest text-[#AAB3BD] hover:text-white"
                  >
                    <span>Team</span>
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform ${activeDropdown === 'mob-team' ? 'rotate-180' : ''}`} />
                  </button>
                  {activeDropdown === 'mob-team' && (
                    <div className="pl-4 py-1.5 flex flex-col gap-3 bg-[#05070A]/30 rounded-lg my-1">
                      <button onClick={() => navigateTo('team')} className="text-left text-xs font-semibold text-[#AAB3BD] hover:text-[#4CAF93] py-0.5 text-ellipsis overflow-hidden">Online Pharmacy Staff</button>
                    </div>
                  )}
                </div>

                {/* Services Accordion */}
                <div className="border-b border-white/5 py-1">
                  <button
                    onClick={() => toggleDropdown('mob-services')}
                    className="w-full flex items-center justify-between text-left py-2 text-xs font-bold uppercase tracking-widest text-[#AAB3BD] hover:text-white"
                  >
                    <span>Services</span>
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform ${activeDropdown === 'mob-services' ? 'rotate-180' : ''}`} />
                  </button>
                  {activeDropdown === 'mob-services' && (
                    <div className="pl-4 py-1.5 flex flex-col gap-3 bg-[#05070A]/30 rounded-lg my-1 max-h-[160px] overflow-y-auto">
                      {servicesList.map((svc) => (
                        <button
                          key={svc.id}
                          onClick={() => navigateTo('service', svc.id)}
                          className="text-left text-[11px] font-semibold text-[#AAB3BD] hover:text-[#4CAF93] py-0.5"
                        >
                          {svc.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Shop Online */}
                <button
                  onClick={() => { setMobileMenuOpen(false); handleShopRedirect(); }}
                  className="text-left py-2.5 border-b border-white/5 text-xs font-bold uppercase tracking-widest text-[#AAB3BD] flex items-center justify-between"
                >
                  <span>Shop Online</span>
                  <ExternalLink className="h-3.5 w-3.5 text-[#7DB7C3]" />
                </button>

                {/* Resources Accordion */}
                <div className="border-b border-white/5 py-1">
                  <button
                    onClick={() => toggleDropdown('mob-resources')}
                    className="w-full flex items-center justify-between text-left py-2 text-xs font-bold uppercase tracking-widest text-[#AAB3BD] hover:text-white"
                  >
                    <span>Resources</span>
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform ${activeDropdown === 'mob-resources' ? 'rotate-180' : ''}`} />
                  </button>
                  {activeDropdown === 'mob-resources' && (
                    <div className="pl-4 py-1.5 flex flex-col gap-3 bg-[#05070A]/30 rounded-lg my-1">
                      <button onClick={() => navigateTo('portal')} className="text-left text-xs font-semibold text-[#AAB3BD] hover:text-[#4CAF93] py-0.5">Pet Portal</button>
                      <button onClick={() => navigateTo('promotions')} className="text-left text-xs font-semibold text-[#4CAF93] hover:text-[#4CAF93] py-0.5">Promotions</button>
                      <button onClick={() => navigateTo('faqs')} className="text-left text-xs font-semibold text-[#AAB3BD] hover:text-[#4CAF93] py-0.5">FAQs</button>
                      <button onClick={() => navigateTo('payment')} className="text-left text-xs font-semibold text-[#AAB3BD] hover:text-[#4CAF93] py-0.5">Payment Options</button>
                      <button onClick={() => navigateTo('guides')} className="text-left text-xs font-semibold text-[#7DB7C3] hover:text-[#4CAF93] py-0.5">Care Guides</button>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => navigateTo('locations')}
                  className="text-left w-full py-2.5 border-b border-white/5 text-xs font-bold uppercase tracking-widest text-[#AAB3BD] hover:text-white"
                >
                  Locations
                </button>

                <button
                  onClick={() => navigateTo('village')}
                  className="text-left w-full py-2.5 border-b border-white/5 text-xs font-bold uppercase tracking-widest text-[#AAB3BD] hover:text-white"
                >
                  The Village
                </button>

                <button
                  onClick={() => navigateTo('contact')}
                  className="text-left w-full py-2.5 text-xs font-bold uppercase tracking-widest text-[#AAB3BD] hover:text-white"
                >
                  Contact
                </button>
              </div>

              {/* Drawer footer details */}
              <div className="p-5 border-t border-white/5 bg-[#05070A]/60 flex flex-col gap-4">
                <div className="flex flex-col gap-2 text-[11px] text-[#AAB3BD]">
                  <a href="tel:5122368000" className="flex items-center gap-2 hover:text-white">
                    <Phone className="h-3.5 w-3.5 text-[#4CAF93]" />
                    <span>(512) 236-8000</span>
                  </a>
                  <a href="mailto:hello@pazvet.com" className="flex items-center gap-2 hover:text-white">
                    <Mail className="h-3.5 w-3.5 text-[#4CAF93]" />
                    <span>hello@pazvet.com</span>
                  </a>
                </div>

                <button
                  onClick={() => navigateTo('contact')}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#4CAF93] to-[#3d917b] text-center text-[#05070A] font-extrabold text-xs uppercase tracking-widest shadow-lg cursor-pointer"
                >
                  Book Appointment
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
