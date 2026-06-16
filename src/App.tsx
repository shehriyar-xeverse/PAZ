import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { LocationId } from './types';
import Loader from './components/Loader';
import GlobalBackground from './components/GlobalBackground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SEO from './components/SEO';
import LocationSelector from './pages/LocationSelector';
import Home from './pages/Home';
import Services from './pages/Services';
import Team from './pages/Team';
import Village from './pages/Village';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Locations from './pages/Locations';
import StaticPages from './pages/StaticPages';
import NotFound from './pages/NotFound';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [currentLocation, setCurrentLocation] = useState<LocationId | null>(() => {
    // Check if location focus was previously saved, otherwise let selection page run
    const saved = localStorage.getItem('paz_active_location');
    return (saved as LocationId) || null;
  });

  const handleLocationSelect = (loc: LocationId) => {
    setCurrentLocation(loc);
    localStorage.setItem('paz_active_location', loc);
  };

  // If loading, show the preloader entrance animation
  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />;
  }

  // If currentLocation is not selected, enforce Selection Screen
  if (currentLocation === null) {
    return (
      <div className="min-h-screen bg-[#05070A]">
        <GlobalBackground currentLocation={null} />
        <LocationSelector onSelect={handleLocationSelect} />
      </div>
    );
  }

  return (
    <HashRouter>
      <Routes>
        {/* All application endpoints run inside our unified layout */}
        <Route element={<AppLayout currentLocation={currentLocation} setCurrentLocation={setCurrentLocation} />}>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomeWrapper currentLocation={currentLocation} />} />
          <Route path="/about/clinic-tours" element={<StaticPagesWrapper pageType="tours" />} />
          <Route path="/about/locations" element={<Navigate to="/locations" replace />} />
          <Route path="/about/careers" element={<StaticPagesWrapper pageType="careers" />} />
          <Route path="/team" element={<TeamWrapper />} />
          <Route path="/services" element={<ServicesWrapper />} />
          <Route path="/services/:serviceId" element={<ServicesWrapper />} />
          <Route path="/resources" element={<Navigate to="/resources/pet-portal" replace />} />
          <Route path="/resources/:tabId" element={<ResourcesWrapper />} />
          <Route path="/locations" element={<LocationsWrapper currentLocation={currentLocation} onSelect={handleLocationSelect} />} />
          <Route path="/village" element={<VillageWrapper />} />
          <Route path="/contact" element={<ContactWrapper currentLocation={currentLocation} />} />
          
          {/* Fallback 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

/**
 * Global App Layout featuring elements like sticky Navigation header, 
 * parallax background grids, desktop Custom Cursor cursor, and Footer.
 */
function AppLayout({
  currentLocation,
  setCurrentLocation,
}: {
  currentLocation: LocationId;
  setCurrentLocation: (loc: LocationId | null) => void;
}) {
  const location = useLocation();
  const navigate = useNavigate();

  // Reset viewport scrolls perfectly on any url route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Helper converting current router paths to equivalent active states for Navbar highlights
  const getPageFromPath = (path: string) => {
    if (path === '/' || path === '/home') return 'home';
    if (path.startsWith('/about/clinic-tours')) return 'tours';
    if (path.startsWith('/about/locations')) return 'locations';
    if (path.startsWith('/about/careers')) return 'careers';
    if (path.startsWith('/team')) return 'team';
    if (path.startsWith('/services')) return 'service';
    if (path.startsWith('/village')) return 'village';
    if (path.startsWith('/contact')) return 'contact';
    if (path.startsWith('/locations')) return 'locations';
    if (path.startsWith('/resources')) {
      const parts = path.split('/');
      return parts[2] || 'portal';
    }
    return 'home';
  };

  const currentPage = getPageFromPath(location.pathname);

  // High-performance page coordinator routing handler
  const handlePageChange = (page: string) => {
    if (page === 'home') navigate('/home');
    else if (page === 'tours') navigate('/about/clinic-tours');
    else if (page === 'careers') navigate('/about/careers');
    else if (page === 'team') navigate('/team');
    else if (page === 'service') navigate('/services');
    else if (['portal', 'promotions', 'faqs', 'payment', 'guides'].includes(page)) {
      navigate(`/resources/${page}`);
    } else {
      navigate(`/${page}`);
    }
  };

  const handleServiceSelect = (svcId: string | null) => {
    if (svcId) {
      navigate(`/services/${svcId}`);
    } else {
      navigate('/services');
    }
  };

  return (
    <div className="min-h-screen bg-[#05070A] text-white flex flex-col justify-between selection:bg-[#4CAF93] selection:text-black font-sans scroll-smooth relative">
      {/* Visual Cursor layer */}
      <CustomCursor />

      {/* Global animated background nodes */}
      <GlobalBackground currentLocation={currentLocation} />

      {/* Sticky Top Navbar navigation */}
      <Navbar
        currentLocation={currentLocation}
        setCurrentLocation={setCurrentLocation}
        currentPage={currentPage}
        setCurrentPage={handlePageChange}
        setServiceId={handleServiceSelect}
      />

      {/* Primary Route Rendering Layer */}
      <main id="primary-route-renderer" className="flex-grow w-full relative">
        <Outlet />
      </main>

      {/* Collaborative Bottom Footer */}
      <Footer
        currentLocation={currentLocation}
        setCurrentPage={handlePageChange}
        setServiceId={handleServiceSelect}
      />
    </div>
  );
}

/**
 * INDEPENDENT ROUTE COMPONENT WRAPPERS WITH CUSTOM SEO METADATA
 */

function HomeWrapper({ currentLocation }: { currentLocation: LocationId }) {
  const navigate = useNavigate();
  const locDisplayName = currentLocation === 'south'
    ? 'South Austin'
    : currentLocation === 'east'
    ? 'East Austin'
    : currentLocation === 'west'
    ? 'West Austin'
    : 'North Austin';

  return (
    <>
      <SEO
        title={`PAZ ${currentLocation.toUpperCase()} Veterinary Care in ${locDisplayName}, TX | PAZ`}
        description={`Premium fear-free veterinary services in ${locDisplayName} Austin. Advanced diagnostics, clinical dentistry, and holistic therapies.`}
        schemaType="veterinary"
        schemaData={{
          '@type': 'VeterinaryCare',
          'name': `PAZ ${currentLocation.toUpperCase()} Veterinary Care`,
          'image': 'https://res.cloudinary.com/dju25z9v3/image/upload/v1781632830/Paz-Winner_ehn5uy.jpg',
          'telephone': currentLocation === 'south' ? '(512) 236-8000' : currentLocation === 'east' ? '(512) 343-8500' : currentLocation === 'west' ? '(512) 474-7298' : '(512) 835-7290',
          'email': `${currentLocation}@pazvet.com`,
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': currentLocation === 'south' ? '3024 S 1st St' : currentLocation === 'east' ? '2515 E Cesar Chavez St' : currentLocation === 'west' ? '2611 Exposition Blvd' : '8200 N Lamar Blvd',
            'addressLocality': 'Austin',
            'addressRegion': 'TX',
            'postalCode': currentLocation === 'south' ? '78704' : currentLocation === 'east' ? '78702' : currentLocation === 'west' ? '78703' : '78753',
            'addressCountry': 'US',
          },
          'priceRange': '$$',
        }}
      />
      <Home
        currentLocation={currentLocation}
        setCurrentPage={(page) => {
          if (page === 'contact') navigate('/contact');
          else if (page === 'tours') navigate('/about/clinic-tours');
          else if (page === 'team') navigate('/team');
          else navigate(`/home`);
        }}
        setServiceId={(svcId) => {
          if (svcId) navigate(`/services/${svcId}`);
          else navigate('/services');
        }}
      />
    </>
  );
}

function StaticPagesWrapper({ pageType }: { pageType: 'tours' | 'careers' | 'privacy' | 'terms' | 'accessibility' }) {
  const titleMap = {
    tours: 'Clinic Virtual Tours & High-Vibe Space Overviews | PAZ Veterinary',
    careers: 'Veterinary Careers & Team Openings | PAZ Veterinary',
    privacy: 'Privacy Encryption Policy | PAZ Veterinary Care',
    terms: 'Terms of Clinical Engagement | PAZ Veterinary Care',
    accessibility: 'Accessibility Assurance (WCAG 2.1) | PAZ Veterinary Care'
  };
  const descMap = {
    tours: 'Step virtually into our friendly clinic layouts equipped with warm materials, acoustic dampeners, and diffused lighting setups to remove diagnostic anxiety.',
    careers: 'Discover responsive clinical jobs in Austin. We pay realistic competitive hourly rates, protect mental schedules, and operate with fear-free certified teams.',
    privacy: 'How we manage, protect, and encrypt medical charts and diagnostic records inside high-grade private cloud repositories.',
    terms: 'Basic guidelines governing booking schedules, compound prescription delivery, and transparent diagnostic invoicing.',
    accessibility: 'How we designed this responsive website in strict compliance of high visual color ratios and keyboard navigability.'
  };

  return (
    <>
      <SEO title={titleMap[pageType]} description={descMap[pageType]} />
      <StaticPages pageType={pageType} />
    </>
  );
}

function TeamWrapper() {
  return (
    <>
      <SEO
        title="Home Delivery Online Pharmacy Staff | PAZ Veterinary"
        description="Meet our dedicated certified pharmacy coordination staff managing rapid delivery diagnostics and temperature-controlled medical shipments."
      />
      <Team />
    </>
  );
}

function ServicesWrapper() {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  let title = 'Clinical Specialties & Proactive Diagnostics | PAZ Veterinary';
  let desc = 'Explore our advanced healthcare modules from preventative vaccines and feline dentistry to modern sterile orthopedic repairs.';

  if (serviceId) {
    const formattedSvcName = serviceId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    title = `${formattedSvcName} Specialist in Austin | PAZ Veterinary`;
    desc = `Comprehensive professional ${formattedSvcName} services at PAZ Veterinary Care. Explore processes, treatment benefits, and book appointments today.`;
  }

  return (
    <>
      <SEO title={title} description={desc} />
      <Services
        serviceId={serviceId || null}
        setServiceId={(svcId) => {
          if (svcId) navigate(`/services/${svcId}`);
          else navigate('/services');
        }}
        setCurrentPage={(page) => {
          if (page === 'contact') navigate('/contact');
          else navigate(`/${page}`);
        }}
      />
    </>
  );
}

function ResourcesWrapper() {
  const { tabId } = useParams();
  const navigate = useNavigate();

  // Normalize tabId from the URL to map to internal state keys of Resources component
  const normalizedTabId = tabId === 'pet-portal' 
    ? 'portal' 
    : tabId === 'payment-options' 
    ? 'payment' 
    : tabId || 'portal';

  const titleMap: Record<string, string> = {
    portal: 'My Pet Health Portal Login | PAZ Veterinary Care',
    promotions: 'Seasonal Veterinary Promotions & Client Specials | PAZ',
    faqs: 'Frequently Asked Questions & Hospital Help | PAZ',
    payment: 'Flexible Payment Options, CareCredit, & Scratchpay | PAZ',
    guides: 'Pet Care Guides & Preventative Wellness Guidelines | PAZ'
  };

  const title = titleMap[normalizedTabId] || 'Hospital Resources & Guides | PAZ';
  const desc = 'Equipping pet parents with the tools to check charts, manage diagnostic orders, and process veterinary invoices smoothly.';

  return (
    <>
      <SEO title={title} description={desc} />
      <Resources
        initialTab={normalizedTabId}
        setCurrentPage={(page) => {
          // Map internal state keys back to correct URL paths
          const urlPage = page === 'portal' 
            ? 'pet-portal' 
            : page === 'payment' 
            ? 'payment-options' 
            : page;
            
          if (['pet-portal', 'promotions', 'faqs', 'payment-options', 'guides'].includes(urlPage)) {
            navigate(`/resources/${urlPage}`);
          } else {
            navigate(`/${page}`);
          }
        }}
      />
    </>
  );
}

function LocationsWrapper({ currentLocation, onSelect }: { currentLocation: LocationId, onSelect: (loc: LocationId) => void }) {
  return (
    <>
      <SEO
        title="Our Austin Clinic Locations | PAZ Veterinary"
        description="With clinics in East, South, West, and North Austin, local stress-free pet care and rapid laboratory diagnostics are always nearby."
      />
      <Locations currentLocation={currentLocation} onSelect={onSelect} />
    </>
  );
}

function VillageWrapper() {
  return (
    <>
      <SEO
        title="The Village Health Partner Directory | PAZ Ecosystem"
        description="Connect with Austin’s premium pet adjusters, holistic training camps, organic food kitchens, and animal rescue entities."
      />
      <Village />
    </>
  );
}

function ContactWrapper({ currentLocation }: { currentLocation: LocationId }) {
  return (
    <>
      <SEO
        title="Request Fear-Free Healing Appointments | PAZ Veterinary"
        description="Book diagnostic examinations, pediatric vaccines, dental reviews, or acupuncture alignments with our stress-free Austin veterinary teams."
      />
      <Contact currentLocation={currentLocation} />
    </>
  );
}
