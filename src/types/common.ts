export interface User {
  id: string;
  name: string;
  email: string;
  role: 'broker' | 'admin';
  avatar?: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  budget: string;
  location: string;
  source: string;
  status: 'New' | 'Qualified' | 'Proposal Sent' | 'Site Visit Scheduled' | 'Negotiation' | 'Closed Won';
  priority: 'High' | 'Medium' | 'Low';
  lastContact: string;
  nextFollowUp: string;
  interestedProjects: string[];
  notes: string;
  score: number;
}

export interface Project {
  id: string;
  name: string;
  developer: string;
  location: string;
  priceRange: string;
  type: 'Apartment' | 'Villa' | 'Plot' | 'Commercial';
  status: 'Active' | 'Coming Soon' | 'Sold Out';
  units: number;
  availableUnits: number;
  images: string[];
  description: string;
  amenities: string[];
  specifications: Record<string, string>;
}

export interface SiteVisit {
  id: string;
  clientName: string;
  project: string;
  date: string;
  time: string;
  duration: string;
  status: 'confirmed' | 'pending' | 'cancelled' | 'completed';
  clientPhone: string;
  notes: string;
} 