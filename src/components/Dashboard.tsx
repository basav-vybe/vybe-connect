import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from './layout/DashboardLayout';
import DashboardHome from './features/DashboardHome';
import ProjectsInventory from './features/ProjectsInventory';
import LeadsCRM from './features/LeadsCRM';
import CoBrokerRoom from './features/CoBrokerRoom';
import SiteVisitCalendar from './features/SiteVisitCalendar';
import CommissionTracker from './features/CommissionTracker';
import VybeAI from './features/VybeAI';
import LeadQualification from './features/LeadQualification';
import FeatureTour from './common/FeatureTour';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showTour, setShowTour] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const tourSteps = [
    {
      target: '[data-tour="dashboard"]',
      title: 'Smart Dashboard',
      content: 'Get a quick overview of your business metrics and activities. Track leads, projects, and revenue in real-time.',
      position: 'bottom' as const
    },
    {
      target: '[data-tour="projects"]',
      title: 'Project Inventory',
      content: 'Manage your property listings and inventory. Add new projects, update details, and track availability.',
      position: 'right' as const
    },
    {
      target: '[data-tour="leads"]',
      title: 'Leads CRM',
      content: 'Track and manage your leads with our AI-powered qualification system. Never miss a follow-up.',
      position: 'right' as const
    },
    {
      target: '[data-tour="ai"]',
      title: 'AI Co-Pilot',
      content: 'Get AI-powered insights and recommendations to help you close more deals.',
      position: 'right' as const
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardHome />;
      case 'projects':
        return <ProjectsInventory />;
      case 'leads':
        return <LeadsCRM />;
      case 'cobroker':
        return <CoBrokerRoom />;
      case 'calendar':
        return <SiteVisitCalendar />;
      case 'commission':
        return <CommissionTracker />;
      case 'ai':
        return <VybeAI />;
      case 'qualification':
        return <LeadQualification />;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <>
      <DashboardLayout
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onLogout={handleLogout}
      >
        {renderContent()}
      </DashboardLayout>
      {showTour && (
        <FeatureTour
          steps={tourSteps}
          onComplete={() => setShowTour(false)}
        />
      )}
    </>
  );
};

export default Dashboard;