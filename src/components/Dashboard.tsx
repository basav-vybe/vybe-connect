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

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

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
    <DashboardLayout
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      onLogout={handleLogout}
    >
      {renderContent()}
    </DashboardLayout>
  );
};

export default Dashboard;