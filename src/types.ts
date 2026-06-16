export type LocationId = 'south' | 'east' | 'west' | 'north';

export interface ClinicLocation {
  id: LocationId;
  name: string;
  fullName: string;
  tagline: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  virtualTourUrl: string;
  bookingUrl: string;
  lat: number;
  lng: number;
  description: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  image: string;
  overview: string;
  benefits: string[];
  process: string[];
  faqs: { question: string; answer: string }[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Partner {
  name: string;
  category: 'Health' | 'Nutrition' | 'Fitness' | 'Community' | 'Animal Welfare';
  image: string;
  description: string;
  link: string;
}
