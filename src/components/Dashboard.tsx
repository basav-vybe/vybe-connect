import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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
    <div className="flex h-screen bg-gray-50">
      <Sidebar 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onLogout={handleLogout}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-4 lg:p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;