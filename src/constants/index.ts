export const APP_NAME = 'Vybe Connect';

export const ROUTES = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  PROJECTS: '/dashboard/projects',
  LEADS: '/dashboard/leads',
  COBROKER: '/dashboard/cobroker',
  CALENDAR: '/dashboard/calendar',
  COMMISSION: '/dashboard/commission',
  AI: '/dashboard/ai',
  QUALIFICATION: '/dashboard/qualification',
} as const;

export const LEAD_STATUS = {
  NEW: 'New',
  QUALIFIED: 'Qualified',
  PROPOSAL_SENT: 'Proposal Sent',
  SITE_VISIT: 'Site Visit Scheduled',
  NEGOTIATION: 'Negotiation',
  CLOSED_WON: 'Closed Won',
} as const;

export const LEAD_PRIORITY = {
  HIGH: 'High',
  MEDIUM: 'Medium',
  LOW: 'Low',
} as const;

export const PROJECT_TYPES = {
  APARTMENT: 'Apartment',
  VILLA: 'Villa',
  PLOT: 'Plot',
  COMMERCIAL: 'Commercial',
} as const;

export const PROJECT_STATUS = {
  ACTIVE: 'Active',
  COMING_SOON: 'Coming Soon',
  SOLD_OUT: 'Sold Out',
} as const;

export const SITE_VISIT_STATUS = {
  CONFIRMED: 'confirmed',
  PENDING: 'pending',
  CANCELLED: 'cancelled',
  COMPLETED: 'completed',
} as const; 